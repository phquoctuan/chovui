import fs from "fs";
import provinces from "china-division/dist/provinces.json";
import areas from "china-division/dist/areas.json";
import streets from "china-division/dist/streets.json";
import { pinyin } from "pinyin";

// Hàm chuyển đổi tiếng Trung sang Pinyin dạng Title Case (Ví dụ: "北京市" -> "Beijing Shi")
function getPinyinName(chineseName: string | undefined): string | null {
  if (!chineseName || !chineseName.trim()) return null;

  try {
    // Chỉ sử dụng style: "normal" (mặc định không dấu)
    const result = pinyin(chineseName, {
      style: "normal",
    });

    return result
      .flat()
      .join(" ")
      .toLowerCase()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  } catch (e) {
    return chineseName;
  }
}

function buildCNJson() {
  console.log("🇨🇳 Đang tổng hợp dữ liệu hành chính Trung Quốc kèm Pinyin (name_en)...");

  // 1. Gom nhóm Streets (Cấp xã/trấn/nhai đạo)
  const streetMap = new Map<string, any[]>();
  streets.forEach((s: any) => {
    const parentCode = s.areaCode || s.cityCode;
    if (!streetMap.has(parentCode)) {
      streetMap.set(parentCode, []);
    }
    streetMap.get(parentCode)!.push({
      name: s.name,
      name_en: getPinyinName(s.name),
      code: s.code,
      division_type: "street_or_town"
    });
  });

  // 2. Gom nhóm Areas (Cấp quận/huyện)
  const areaMap = new Map<string, any[]>();
  areas.forEach((a: any) => {
    const provinceCode = a.provinceCode;
    if (!areaMap.has(provinceCode)) {
      areaMap.set(provinceCode, []);
    }

    const wardsList = streetMap.get(a.code) || [];

    areaMap.get(provinceCode)!.push({
      name: a.name,
      name_en: getPinyinName(a.name),
      code: a.code,
      division_type: "district_or_county",
      wards: wardsList
    });
  });

  // 3. Xây dựng cấu trúc cây tổng thể gắn vào Provinces (Cấp tỉnh)
  const formattedData = provinces.map((p: any) => {
    const countiesList = areaMap.get(p.code) || [];
    return {
      name: p.name,
      name_en: getPinyinName(p.name),
      code: p.code,
      postal_code: `CN-${p.code}`,
      division_type: "province",
      counties: countiesList
    };
  });

  // Ghi file kết quả
  const outputFilename = "cn_gov.json";
  fs.writeFileSync(outputFilename, JSON.stringify(formattedData, null, 2), "utf-8");

  let totalCounties = 0;
  let totalWards = 0;
  formattedData.forEach((p) => {
    totalCounties += p.counties.length;
    p.counties.forEach((c: any) => {
      totalWards += c.wards.length;
    });
  });

  console.log(`🎉 Thành công! Đã tạo file '${outputFilename}' với đầy đủ name_en (Pinyin chuẩn):`);
  console.log(`   - Tổng số Tỉnh/Thành (Regions): ${formattedData.length}`);
  console.log(`   - Tổng số Quận/Huyện (Counties): ${totalCounties}`);
  console.log(`   - Tổng số Xã/Trấn/Nhai đạo (Wards): ${totalWards}`);
}

buildCNJson();