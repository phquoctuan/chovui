// types/seed.ts hoặc file seed tương ứng
import { db } from "@/db"; // Thay thế bằng đường dẫn kết nối database của bạn
import { regions, counties } from "@/db/schema"; // Thay thế bằng đường dẫn schema của bạn
import { and, eq } from "drizzle-orm";


import {rawUSCountiesSeed} from "./us_counties_data"
// import {CountySeedItem} from "./us_counties_data"

async function seedCounties() {
  console.log("🌱 Bắt đầu seed dữ liệu Counties với " , rawUSCountiesSeed.length, " items");
  let count = 0;
  for (const item of rawUSCountiesSeed) {
    try {
      // 1. Truy vấn bảng regions để lấy id dựa trên regionCode
      const [region] = await db
        .select({ id: regions.id })
        .from(regions)
        .where(
          and(
            eq(regions.code, item.regionCode),
            eq(regions.countryCode, "US")
          )
        )
        .limit(1);

      if (!region) {
        console.log(`⚠️ Không tìm thấy region với code: "${item.regionCode}" cho county "${item.name}"`);
        continue;
      }

      // 2. Insert vào bảng counties
      let formatted = String(count).padStart(3, '0');
      await db.insert(counties).values({
        regionId: region.id,
        name: item.name,
        code: item.code,
        hasWard: item.hasWard,
      });
      count++;
      // console.log(`✅ Đã thêm: ${item.name} (Thuộc region code: ${item.regionCode})`);
      
    } catch (error) {
      console.error(`❌ Lỗi khi thêm Counties ${item.name}:`, error);
    }
  }
  console.log("Đã thêm: ", count, " Counties");
  console.log("🎉 Hoàn tất quá trình seed dữ liệu Counties! cho Hoa Kỳ");
}

async function main() {
  seedCounties();
}

main()
  .catch((error) => {
    console.error("Seed failed:");
    console.error(error);
    process.exit(1);
  });