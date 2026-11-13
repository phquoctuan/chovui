// seed-gov-id.ts
import { db } from "@/db"; // Đường dẫn đến db config của bạn
import { regions, counties, wards } from "@/db/schema"; // Đường dẫn schema
import idGovData from "./id_gov.json"; // File JSON hành chính Indonesia

async function seedIndonesiaAdministrativeUnits() {
  console.log("🇮🇩 Bắt đầu quá trình seed dữ liệu hành chính Indonesia...");

  let totalRegions = 0;
  let totalCounties = 0;
  let totalWards = 0;

  for (const prov of idGovData as any[]) {
    // 1. Insert Tỉnh/Thành phố lớn / Đặc khu (Provinsi) vào bảng `regions`
    const [insertedRegion] = await db
      .insert(regions)
      .values({
        countryCode: "ID",
        name: prov.name,
        code: prov.code, // Mã ISO/Ký hiệu (VD: 'ID-JK' cho Jakarta, 'ID-JB' cho Jawa Barat)
        hasCounty: prov.counties && prov.counties.length > 0,
        nameEn: prov.name_en,
      })
      .returning({ id: regions.id });

    totalRegions++;
    const regionId = insertedRegion.id;

    if (!prov.counties || prov.counties.length === 0) continue;

    const countiesToInsert = [];
    for (const county of prov.counties) {
      countiesToInsert.push({
        countyData: county,
        countyValues: {
          regionId: regionId,
          name: county.name,
          code: county.code, // Mã cấp Kabupaten / Kota (Quận/Huyện)
          hasWard: county.wards && county.wards.length > 0,
          nameEn: county.name_en,
        },
      });
    }

    // 2. Insert Hàng loạt Quận/Huyện/Thành phố trực thuộc vào bảng `counties`
    const insertedCounties = await db
      .insert(counties)
      .values(countiesToInsert.map((item) => item.countyValues))
      .returning({ id: counties.id });

    totalCounties += insertedCounties.length;

    // 3. Chuẩn bị danh sách Phường/Xã/Quận cơ sở (Wards / Kecamatan / Distrik)
    const wardsToInsert = [];
    for (let i = 0; i < countiesToInsert.length; i++) {
      const countyId = insertedCounties[i].id;
      const county = countiesToInsert[i].countyData;

      if (county.wards && county.wards.length > 0) {
        for (const w of county.wards) {
          wardsToInsert.push({
            countyId: countyId,
            name: w.name,
            code: w.code || null, // Mã định danh cấp Kecamatan/Distrik
            nameEn: w.name_en,
          });
        }
      }
    }

    // Bulk insert Wards theo batch 1000 bản ghi để tối ưu hiệu năng hệ thống
    if (wardsToInsert.length > 0) {
      const chunkSize = 1000;
      for (let i = 0; i < wardsToInsert.length; i += chunkSize) {
        const chunk = wardsToInsert.slice(i, i + chunkSize);
        await db.insert(wards).values(chunk);
        totalWards += chunk.length;
      }
    }

    console.log(`✨ Đã seed xong: ${prov.name} (${prov.counties.length} đơn vị cấp 2)`);
  }

  console.log(`🎉 Hoàn tất seed toàn bộ dữ liệu Indonesia!`);
  console.log(`   - Tổng số Tỉnh/Vùng (Regions): ${totalRegions}`);
  console.log(`   - Tổng số Quận/Huyện/Thành phố (Counties): ${totalCounties}`);
  console.log(`   - Tổng số Phường/Xã/Distrik (Wards): ${totalWards}`);
}

seedIndonesiaAdministrativeUnits().catch((err) => {
  console.error("❌ Lỗi trong quá trình seed dữ liệu Indonesia:", err);
  process.exit(1);
});