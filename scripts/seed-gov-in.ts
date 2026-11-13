// seed-gov-in.ts
import { db } from "@/db"; // Đường dẫn đến cấu hình DB của bạn
import { regions, counties, wards } from "@/db/schema"; // Đường dẫn schema Drizzle ORM
import inGovData from "./in_gov.json"; // File JSON hành chính Ấn Độ của bạn

async function seedIndiaAdministrativeUnits() {
  console.log("🇮🇳 Bắt đầu quá trình seed dữ liệu hành chính Ấn Độ...");

  let totalRegions = 0;
  let totalCounties = 0;
  let totalWards = 0;

  for (const state of inGovData as any[]) {
    // 1. Insert Cấp 1 (State / Union Territory) vào bảng `regions`
    const [insertedRegion] = await db
      .insert(regions)
      .values({
        countryCode: "IN",
        name: state.nameEn,
        code: state.code, // Mã định danh bang (VD: 'IN-DL' cho Delhi, 'IN-MH' cho Maharashtra)
        hasCounty: state.counties && state.counties.length > 0,
        nameEn: "",
      })
      .returning({ id: regions.id });

    totalRegions++;
    const regionId = insertedRegion.id;

    if (!state.counties || state.counties.length === 0) continue;

    const countiesToInsert = [];
    for (const district of state.counties) {
      countiesToInsert.push({
        countyData: district,
        countyValues: {
          regionId: regionId,
          name: district.nameEn,
          code: district.code, // Mã cấp District (Huyện/Thành phố trực thuộc bang)
          hasWard: district.wards && district.wards.length > 0,
          nameEn: "",
        },
      });
    }

    // 2. Insert Hàng loạt Cấp 2 (Districts) vào bảng `counties`
    const insertedCounties = await db
      .insert(counties)
      .values(countiesToInsert.map((item) => item.countyValues))
      .returning({ id: counties.id });

    totalCounties += insertedCounties.length;

    // 3. Chuẩn bị danh sách Cấp 3 (Sub-districts / Tehsils / Wards)
    const wardsToInsert = [];
    for (let i = 0; i < countiesToInsert.length; i++) {
      const countyId = insertedCounties[i].id;
      const district = countiesToInsert[i].countyData;

      if (district.wards && district.wards.length > 0) {
        for (const w of district.wards) {
          wardsToInsert.push({
            countyId: countyId,
            name: w.nameEn,
            code: w.code || null, // Mã định danh cấp xã/phường/tehsil
            nameEn: "",
          });
        }
      }
    }

    // Bulk insert Wards theo batch 1000 bản ghi để tối ưu hiệu năng cơ sở dữ liệu
    if (wardsToInsert.length > 0) {
      const chunkSize = 1000;
      for (let i = 0; i < wardsToInsert.length; i += chunkSize) {
        const chunk = wardsToInsert.slice(i, i + chunkSize);
        await db.insert(wards).values(chunk);
        totalWards += chunk.length;
      }
    }

    console.log(`✨ Đã seed xong Bang/UT: ${state.name} (${state.counties.length} Districts)`);
  }

  console.log(`🎉 Hoàn tất seed toàn bộ dữ liệu Ấn Độ!`);
  console.log(`   - Tổng số Bang/Vùng lãnh thổ (Regions): ${totalRegions}`);
  console.log(`   - Tổng số Quận/Huyện (Counties): ${totalCounties}`);
  console.log(`   - Tổng số Phường/Xã/Tehsil (Wards): ${totalWards}`);
}

seedIndiaAdministrativeUnits().catch((err) => {
  console.error("❌ Lỗi trong quá trình seed dữ liệu Ấn Độ:", err);
  process.exit(1);
});