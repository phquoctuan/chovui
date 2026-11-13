import { db } from "@/db"; // Đường dẫn đến cấu hình database của bạn
import { regions, counties, wards } from "@/db/schema"; // Đường dẫn đến schema của bạn
import vnGovData from "./vn_gov.json"; // File JSON chứa cấu trúc hành chính Việt Nam

interface WardJson {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  district_code: number;
}

interface DistrictJson {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  province_code: number;
  wards: WardJson[];
}

interface ProvinceJson {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  phone_code: number;
  districts: DistrictJson[];
}

async function seedVietnamAdministrativeUnits() {
  console.log("🇻🇳 Bắt đầu quá trình seed dữ liệu hành chính Việt Nam...");

  const rawData = vnGovData as ProvinceJson[];

  let totalRegions = 0;
  let totalCounties = 0;
  let totalWards = 0;

  for (const prov of rawData) {
    // 1. Insert Tỉnh / Thành phố vào bảng `regions`
    // Sử dụng padStart để format code thành chuỗi (ví dụ: số 1 thành "01" hoặc giữ dạng string tùy ý)
    const provinceCodeStr = String(prov.code).padStart(2, "0");

    const [insertedRegion] = await db
      .insert(regions)
      .values({
        countryCode: "VN", // Giả định mã quốc gia của Việt Nam trong bảng countries là 'VN'
        name: prov.name,
        code: provinceCodeStr,
        hasCounty: true, // Các tỉnh/thành phố của VN đều có cấp quận/huyện
      })
      .returning({ id: regions.id });

    totalRegions++;

    const regionId = insertedRegion.id;
    const countiesToInsert = [];

    // Chuẩn bị danh sách Counties thuộc Province này
    for (const dist of prov.districts) {
      const districtCodeStr = String(dist.code).padStart(3, "0");
      const hasWardFlag = dist.wards && dist.wards.length > 0;

      countiesToInsert.push({
        distData: dist,
        countyValues: {
          regionId: regionId,
          name: dist.name,
          code: districtCodeStr,
          hasWard: hasWardFlag,
        },
      });
    }

    if (countiesToInsert.length === 0) continue;

    // 2. Insert hàng loạt Quận/Huyện theo từng Tỉnh để tối ưu hiệu năng
    const insertedCounties = await db
      .insert(counties)
      .values(countiesToInsert.map((item) => item.countyValues))
      .returning({ id: counties.id });

    totalCounties += insertedCounties.length;

    const wardsToInsert = [];

    // Map ngược lại để lấy đúng countyId gán cho từng Ward tương ứng
    for (let i = 0; i < countiesToInsert.length; i++) {
      const countyId = insertedCounties[i].id;
      const dist = countiesToInsert[i].distData;

      if (dist.wards && dist.wards.length > 0) {
        for (const w of dist.wards) {
          const wardCodeStr = String(w.code).padStart(5, "0");
          wardsToInsert.push({
            countyId: countyId,
            name: w.name,
            code: wardCodeStr,
          });
        }
      }
    }

    // 3. Insert hàng loạt Phường/Xã (chia nhỏ theo chunk 1000 bản ghi nếu danh sách quá lớn để tránh quá tải RAM/Query)
    if (wardsToInsert.length > 0) {
      const chunkSize = 1000;
      for (let i = 0; i < wardsToInsert.length; i += chunkSize) {
        const chunk = wardsToInsert.slice(i, i + chunkSize);
        await db.insert(wards).values(chunk);
        totalWards += chunk.length;
      }
    }

    console.log(`✨ Đã seed xong: ${prov.name} (${districtsCount(prov)} huyện, tổng xã hiện tại: ${totalWards})`);
  }

  console.log(`🎉 Hoàn tất seed toàn bộ Việt Nam!`);
  console.log(`   - Tổng số Tỉnh/Thành (Regions): ${totalRegions}`);
  console.log(`   - Tổng số Quận/Huyện (Counties): ${totalCounties}`);
  console.log(`   - Tổng số Phường/Xã (Wards): ${totalWards}`);
}

function districtsCount(prov: ProvinceJson) {
  return prov.districts ? prov.districts.length : 0;
}

async function main() {
  seedVietnamAdministrativeUnits();
}

main()
  .catch((error) => {
    console.error("❌ Lỗi trong quá trình seed dữ liệu Việt Nam:", error);
    console.error(error);
    process.exit(1);
  });