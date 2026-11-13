// seed-gov-ng.ts
import { db } from "@/db"; // Đường dẫn đến cấu hình DB của bạn
import { regions, counties, wards } from "@/db/schema"; // Đường dẫn schema Drizzle ORM
import ngGovData from "./ng_gov.json"; // File JSON hành chính Nigeria đã được chuyển đổi

async function seedNigeriaAdministrativeUnits() {
  console.log("🇳🇬 Bắt đầu quá trình seed dữ liệu hành chính Nigeria...");

  let totalRegions = 0;
  let totalCounties = 0;
  let totalWards = 0;

  for (const state of ngGovData as any[]) {
    // 1. Insert Cấp 1 (State / FCT) vào bảng `regions`
    const [insertedRegion] = await db
      .insert(regions)
      .values({
        countryCode: "NG",
        name: state.name,
        code: state.code, // Mã định danh bang (VD: NG-ST-01)
        hasCounty: state.counties && state.counties.length > 0,
        nameEn: state.name_en,
      })
      .returning({ id: regions.id });

    totalRegions++;
    const regionId = insertedRegion.id;

    if (!state.counties || state.counties.length === 0) continue;

    const countiesToInsert = [];
    for (const lga of state.counties) {
      countiesToInsert.push({
        countyData: lga,
        countyValues: {
          regionId: regionId,
          name: lga.name,
          code: lga.code, // Mã cấp LGA (Local Government Area)
          hasWard: lga.wards && lga.wards.length > 0,
          nameEn: lga.name_en,
        },
      });
    }

    // 2. Insert Hàng loạt Cấp 2 (LGA) vào bảng `counties`
    const insertedCounties = await db
      .insert(counties)
      .values(countiesToInsert.map((item) => item.countyValues))
      .returning({ id: counties.id });

    totalCounties += insertedCounties.length;

    // 3. Chuẩn bị danh sách Cấp 3 (Wards / Registration Areas)
    const wardsToInsert = [];
    for (let i = 0; i < countiesToInsert.length; i++) {
      const countyId = insertedCounties[i].id;
      const lga = countiesToInsert[i].countyData;

      if (lga.wards && lga.wards.length > 0) {
        for (const w of lga.wards) {
          wardsToInsert.push({
            countyId: countyId,
            name: w.name,
            code: w.code || null, // Mã định danh Ward
            nameEn: w.name_en,
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

    console.log(`✨ Đã seed xong Bang: ${state.name} (${state.counties.length} LGA)`);
  }

  console.log(`🎉 Hoàn tất seed toàn bộ dữ liệu Nigeria!`);
  console.log(`   - Tổng số Bang/FCT (Regions): ${totalRegions}`);
  console.log(`   - Tổng số LGA (Counties): ${totalCounties}`);
  console.log(`   - Tổng số Wards: ${totalWards}`);
}

seedNigeriaAdministrativeUnits().catch((err) => {
  console.error("❌ Lỗi trong quá trình seed dữ liệu Nigeria:", err);
  process.exit(1);
});