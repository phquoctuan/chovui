// seed-gov-kr.ts
import { db } from "@/db"; // Đường dẫn đến db config của bạn
import { regions, counties, wards } from "@/db/schema"; // Đường dẫn schema
import krGovData from "./kr_gov.json"; // File JSON hành chính Hàn Quốc

async function seedKoreaAdministrativeUnits() {
  console.log("🇰🇷 Bắt đầu quá trình seed dữ liệu hành chính Hàn Quốc...");

  let totalRegions = 0;
  let totalCounties = 0;
  let totalWards = 0;

  for (const sido of krGovData as any[]) {
    // 1. Insert Tỉnh/Thành phố lớn (Sido) vào bảng `regions`
    const [insertedRegion] = await db
      .insert(regions)
      .values({
        countryCode: "KR",
        name: sido.name,
        code: sido.code, // Mã 2 chữ số (VD: '11' cho Seoul, '26' cho Busan)
        hasCounty: sido.counties && sido.counties.length > 0,
        nameEn: sido.name_en,
      })
      .returning({ id: regions.id });

    totalRegions++;
    const regionId = insertedRegion.id;

    if (!sido.counties || sido.counties.length === 0) continue;

    const countiesToInsert = [];
    for (const county of sido.counties) {
      countiesToInsert.push({
        countyData: county,
        countyValues: {
          regionId: regionId,
          name: county.name,
          code: county.code, // Mã 5 chữ số cấp Sigungu (Quận/Huyện)
          hasWard: county.wards && county.wards.length > 0,
          nameEn: county.name_en,
        },
      });
    }

    // 2. Insert Hàng loạt Quận/Huyện/Thành phố thuộc tỉnh vào bảng `counties`
    const insertedCounties = await db
      .insert(counties)
      .values(countiesToInsert.map((item) => item.countyValues))
      .returning({ id: counties.id });

    totalCounties += insertedCounties.length;

    // 3. Chuẩn bị danh sách Phường/Xã/Thị trấn (Wards / Eup-Myeon-Dong)
    const wardsToInsert = [];
    for (let i = 0; i < countiesToInsert.length; i++) {
      const countyId = insertedCounties[i].id;
      const county = countiesToInsert[i].countyData;

      if (county.wards && county.wards.length > 0) {
        for (const w of county.wards) {
          wardsToInsert.push({
            countyId: countyId,
            name: w.name,
            code: w.code || null, // Mã 7/10 chữ số cấp EMD
            nameEn: w.name_en,
          });
        }
      }
    }

    // Bulk insert Wards theo batch 1000 bản ghi để tối ưu hiệu năng
    if (wardsToInsert.length > 0) {
      const chunkSize = 1000;
      for (let i = 0; i < wardsToInsert.length; i += chunkSize) {
        const chunk = wardsToInsert.slice(i, i + chunkSize);
        await db.insert(wards).values(chunk);
        totalWards += chunk.length;
      }
    }

    console.log(`✨ Đã seed xong: ${sido.name} (${sido.counties.length} đơn vị cấp 2)`);
  }

  console.log(`🎉 Hoàn tất seed toàn bộ dữ liệu Hàn Quốc!`);
  console.log(`   - Tổng số Tỉnh/Thành (Regions): ${totalRegions}`);
  console.log(`   - Tổng số Quận/Huyện (Counties): ${totalCounties}`);
  console.log(`   - Tổng số Phường/Xã (Wards): ${totalWards}`);
}

seedKoreaAdministrativeUnits().catch((err) => {
  console.error("❌ Lỗi trong quá trình seed dữ liệu Hàn Quốc:", err);
  process.exit(1);
});