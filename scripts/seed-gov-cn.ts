import { db } from "@/db";
import { regions, counties, wards } from "@/db/schema";
import cnGovData from "./cn_gov.json";

async function seedChinaData() {
  console.log("🇨🇳 Bắt đầu seed dữ liệu hành chính Trung Quốc vào Database...");

  let totalRegions = 0;
  let totalCounties = 0;
  let totalWards = 0;

  for (const prov of cnGovData as any[]) {
    // 1. Insert Tỉnh / Khu tự trị / Thành phố trực thuộc vào `regions`
    const [insertedRegion] = await db
      .insert(regions)
      .values({
        countryCode: "CN",
        name: prov.name,
        code: prov.code,
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
          code: county.code,
          hasWard: county.wards && county.wards.length > 0,
          nameEn: county.name_en,
        },
      });
    }

    // 2. Insert Hàng loạt Quận / Huyện vào `counties`
    const insertedCounties = await db
      .insert(counties)
      .values(countiesToInsert.map((item) => item.countyValues))
      .returning({ id: counties.id });

    totalCounties += insertedCounties.length;

    // 3. Chuẩn bị danh sách Phường / Xã / Nhai đạo (Wards)
    const wardsToInsert = [];
    for (let i = 0; i < countiesToInsert.length; i++) {
      const countyId = insertedCounties[i].id;
      const county = countiesToInsert[i].countyData;

      if (county.wards && county.wards.length > 0) {
        for (const w of county.wards) {
          wardsToInsert.push({
            countyId: countyId,
            name: w.name,
            code: w.code || null,
            nameEn: w.name_en,
          });
        }
      }
    }

    // Bulk insert Wards theo batch 1000 bản ghi
    if (wardsToInsert.length > 0) {
      const chunkSize = 1000;
      for (let i = 0; i < wardsToInsert.length; i += chunkSize) {
        const chunk = wardsToInsert.slice(i, i + chunkSize);
        await db.insert(wards).values(chunk);
        totalWards += chunk.length;
      }
    }

    console.log(`✨ Đã seed xong: ${prov.name} (${prov.counties.length} quận/huyện)`);
  }

  console.log(`🎉 Hoàn tất seed toàn bộ dữ liệu Trung Quốc!`);
  console.log(`   - Tổng số Tỉnh/Khu tự trị (Regions): ${totalRegions}`);
  console.log(`   - Tổng số Quận/Huyện (Counties): ${totalCounties}`);
  console.log(`   - Tổng số Hương/Trấn/Nhai đạo (Wards): ${totalWards}`);
}

// seedChinaData().catch((err) => {
//   console.error("❌ Lỗi khi seed dữ liệu Trung Quốc:", err);
//   process.exit(1);
// });
async function main() {
  seedChinaData();
}

main()
  .catch((error) => {
    console.error("❌ Lỗi khi seed dữ liệu Trung Quốc:", error);
    console.error(error);
    process.exit(1);
  });