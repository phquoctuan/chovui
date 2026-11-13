import { db } from "@/db"; // Đường dẫn đến db config của bạn
import { regions, counties, wards } from "@/db/schema"; // Đường dẫn schema
import myGovData from "./my_gov.json"; // File JSON hành chính Malaysia

async function seedMalaysiaAdministrativeUnits() {
  console.log("🇲🇾 Bắt đầu quá trình seed dữ liệu hành chính Malaysia...");

  let totalRegions = 0;
  let totalCounties = 0;
  let totalWards = 0;

  for (const state of myGovData as any[]) {
    // 1. Insert Cấp 1: State (Bang / Lãnh thổ liên bang) vào bảng `regions`
    const [insertedRegion] = await db
      .insert(regions)
      .values({
        countryCode: "MY",
        name: state.name,
        code: state.code, // Mã bang (VD: 'MY-10' cho Selangor, 'MY-14' cho Kuala Lumpur)
        hasCounty: state.counties && state.counties.length > 0,
        nameEn: state.name_en,
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
          name: district.name,
          code: district.code, // Mã cấp District / Huyện
          // hasWard: district.wards && district.wards.length > 0,
          hasWard: false,
          nameEn: district.name_en,
        },
      });
    }

    // 2. Insert Cấp 2: District (Huyện / Thành phố lớn) vào bảng `counties`
    const insertedCounties = await db
      .insert(counties)
      .values(countiesToInsert.map((item) => item.countyValues))
      .returning({ id: counties.id });

    totalCounties += insertedCounties.length;

    // 3. Chuẩn bị danh sách Cấp 3: Wards / Mukim / Town / Precinct
    // const wardsToInsert = [];
    // for (let i = 0; i < countiesToInsert.length; i++) {
    //   const countyId = insertedCounties[i].id;
    //   const district = countiesToInsert[i].countyData;

    //   if (district.wards && district.wards.length > 0) {
    //     for (const w of district.wards) {
    //       wardsToInsert.push({
    //         countyId: countyId,
    //         name: w.name,
    //         code: w.code || null,
    //         nameEn: w.name_en,
    //       });
    //     }
    //   }
    // }

    // // Bulk insert Wards theo batch 1000 bản ghi để tối ưu hiệu năng
    // if (wardsToInsert.length > 0) {
    //   const chunkSize = 1000;
    //   for (let i = 0; i < wardsToInsert.length; i += chunkSize) {
    //     const chunk = wardsToInsert.slice(i, i + chunkSize);
    //     await db.insert(wards).values(chunk);
    //     totalWards += chunk.length;
    //   }
    // }

    console.log(`✨ Đã seed xong: ${state.name} (${state.counties.length} quận/huyện)`);
  }

  console.log(`🎉 Hoàn tất seed toàn bộ dữ liệu Malaysia!`);
  console.log(`   - Tổng số State (Regions): ${totalRegions}`);
  console.log(`   - Tổng số District (Counties): ${totalCounties}`);
  console.log(`   - Tổng số Mukim/Town (Wards): ${totalWards}`);
}

async function main() {
  seedMalaysiaAdministrativeUnits();
}

main()
  .catch((error) => {
    console.error("❌ Lỗi trong quá trình seed dữ liệu Malaysia:", error);
    console.error(error);
    process.exit(1);
  });
