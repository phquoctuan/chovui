import { db } from "@/db"; // Đường dẫn đến db config của bạn
import { regions, counties, wards } from "@/db/schema"; // Đường dẫn schema
import jpGovData from "./jp_gov.json"; // File JSON hành chính Nhật Bản

async function seedJapanAdministrativeUnits() {
  console.log("🇯🇵 Bắt đầu quá trình seed dữ liệu hành chính Nhật Bản...");

  let totalRegions = 0;
  let totalCounties = 0;
  let totalWards = 0;

  for (const pref of jpGovData as any[]) {
    // 1. Insert Tỉnh/Phủ/Đạo vào bảng `regions`
    const [insertedRegion] = await db
      .insert(regions)
      .values({
        countryCode: "JP",
        name: pref.name,
        code: pref.code, // Mã JIS cấp tỉnh (VD: '13' cho Tokyo, '27' cho Osaka)
        hasCounty: pref.counties && pref.counties.length > 0,
      })
      .returning({ id: regions.id });

    totalRegions++;
    const regionId = insertedRegion.id;

    if (!pref.counties || pref.counties.length === 0) continue;

    const countiesToInsert = [];
    for (const county of pref.counties) {
      countiesToInsert.push({
        countyData: county,
        countyValues: {
          regionId: regionId,
          name: county.name,
          code: county.code, // Mã JIS cấp thành phố/hận
          hasWard: county.wards && county.wards.length > 0,
        },
      });
    }

    // 2. Insert Hàng loạt Thành phố/Quận/Huyện vào bảng `counties`
    const insertedCounties = await db
      .insert(counties)
      .values(countiesToInsert.map((item) => item.countyValues))
      .returning({ id: counties.id });

    totalCounties += insertedCounties.length;

    // 3. Chuẩn bị danh sách Phường/Thị trấn/Làng (Wards)
    const wardsToInsert = [];
    for (let i = 0; i < countiesToInsert.length; i++) {
      const countyId = insertedCounties[i].id;
      const county = countiesToInsert[i].countyData;

      if (county.wards && county.wards.length > 0) {
        for (const w of county.wards) {
          wardsToInsert.push({
            countyId: countyId,
            name: w.name,
            code: w.code || null, // Có thể lưu mã bưu chính (ZIP) làm code của ward
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

    console.log(`✨ Đã seed xong: ${pref.name} (${pref.counties.length} đơn vị cấp 2)`);
  }

  console.log(`🎉 Hoàn tất seed toàn bộ dữ liệu Nhật Bản!`);
  console.log(`   - Tổng số Tỉnh/Thành (Regions): ${totalRegions}`);
  console.log(`   - Tổng số Thành phố/Huyện (Counties): ${totalCounties}`);
  console.log(`   - Tổng số Phường/Thị trấn (Wards): ${totalWards}`);
}

seedJapanAdministrativeUnits().catch((err) => {
  console.error("❌ Lỗi trong quá trình seed dữ liệu Nhật Bản:", err);
  process.exit(1);
});