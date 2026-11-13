import fs from "fs";
import path from "path";
import * as topojson from "topojson-client";

// Hàm chuẩn hóa chuỗi tiếng Anh thành Title Case
function toTitleCase(str: string | undefined): string | null {
  if (!str || !str.trim()) return null;
  return str
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Hàm helper an toàn để trích xuất danh sách features, tránh lỗi TypeScript Property 'features' does not exist
function extractFeatures(topoData: any, objectKey: string): any[] {
  const decoded = topojson.feature(topoData, topoData.objects[objectKey]) as any;
  if (decoded.type === "FeatureCollection" && Array.isArray(decoded.features)) {
    return decoded.features;
  }
  return [decoded];
}

async function generateFullKrHierarchy() {
  console.log("🇰🇷 Bắt đầu trích xuất dữ liệu hành chính 3 cấp từ bộ 3 file TopoJSON...");

  // const dir = __dirname;
  const provPath = "./scripts/skorea-provinces-2018-topo-simple.json";
  const muniPath = "./scripts/skorea-municipalities-2018-topo-simple.json";
  // const subMuniPath = path.join(dir, "skorea-submunicipalities-2018-topo-simple.json");
  const subMuniPath = "./scripts/skorea-submunicipalities-2018-topo-simple.json";

  if (!fs.existsSync(provPath) || !fs.existsSync(muniPath) || !fs.existsSync(subMuniPath)) {
    console.error("❌ Không tìm thấy đủ 3 file TopoJSON trong thư mục. Vui lòng kiểm tra lại.");
    return;
  }

  // --- BƯỚC 1: Đọc và ánh xạ tên Sido từ file Provinces ---
  const provData = JSON.parse(fs.readFileSync(provPath, "utf-8"));
  const provKey = Object.keys(provData.objects)[0];
  const provFeatures = extractFeatures(provData, provKey);

  const sidoMap = new Map<string, { name: string; nameEn: string | null; code: string; sigunguMap: Map<string, any> }>();

  provFeatures.forEach((f) => {
    const props = f.properties || {};
    const name = props.name; // Tên tiếng Hàn cấp tỉnh
    const nameEn = props.name_eng || toTitleCase(props.name_en); // Tên tiếng Anh
    const code = String(props.code || ""); // Mã 2 chữ số

    if (name && code) {
      sidoMap.set(code, {
        name,
        nameEn,
        code,
        sigunguMap: new Map(),
      });
    }
  });

  // --- BƯỚC 2: Đọc và ánh xạ tên Sigungu từ file Municipalities ---
  const muniData = JSON.parse(fs.readFileSync(muniPath, "utf-8"));
  const muniKey = Object.keys(muniData.objects)[0];
  const muniFeatures = extractFeatures(muniData, muniKey);

  muniFeatures.forEach((f) => {
    const props = f.properties || {};
    const name = props.name; // Tên quận/huyện tiếng Hàn
    const nameEn = props.name_eng || toTitleCase(props.name_en);
    const code = String(props.code || ""); // Mã 5 chữ số

    if (name && code.length >= 5) {
      const sidoCode = code.substring(0, 2);
      const sido = sidoMap.get(sidoCode);
      if (sido) {
        sido.sigunguMap.set(code, {
          name,
          nameEn,
          code,
          wards: new Map(),
        });
      }
    }
  });

  // --- BƯỚC 3: Đọc và đưa Wards từ file Sub-municipalities vào đúng Sigungu ---
  const subMuniData = JSON.parse(fs.readFileSync(subMuniPath, "utf-8"));
  const subMuniKey = Object.keys(subMuniData.objects)[0];
  const subMuniFeatures = extractFeatures(subMuniData, subMuniKey);

  subMuniFeatures.forEach((f) => {
    const props = f.properties || {};
    const name = props.name; // Tên phường/xã
    const nameEn = props.name_eng || toTitleCase(props.name_eng);
    const code = String(props.code || ""); // Mã phường

    if (name && code.length >= 5) {
      const sidoCode = code.substring(0, 2);
      const sigunguCode = code.substring(0, 5); 

      const sido = sidoMap.get(sidoCode);
      if (sido) {
        let sigungu = sido.sigunguMap.get(sigunguCode);
        
        // Trường hợp dự phòng nếu file muni thiếu mã
        if (!sigungu) {
          sigungu = {
            name: `구역 ${sigunguCode}`,
            nameEn: `District ${sigunguCode}`,
            code: sigunguCode,
            wards: new Map(),
          };
          sido.sigunguMap.set(sigunguCode, sigungu);
        }

        sigungu.wards.set(code, {
          name,
          name_en: nameEn,
          code,
          division_type: "eup_myeon_dong",
        });
      }
    }
  });

  // --- BƯỚC 4: Chuyển đổi toàn bộ cấu trúc Map thành JSON 3 cấp chuẩn ---
  const formattedData: any[] = [];
  let totalCounties = 0;
  let totalWards = 0;

  sidoMap.forEach((sido) => {
    const countiesList: any[] = [];

    sido.sigunguMap.forEach((sigungu) => {
      const wardsList = Array.from(sigungu.wards.values());
      countiesList.push({
        name: sigungu.name,
        name_en: sigungu.nameEn,
        code: sigungu.code,
        division_type: "sigungu",
        wards: wardsList,
      });
      totalWards += wardsList.length;
    });

    totalCounties += countiesList.length;

    formattedData.push({
      name: sido.name,
      name_en: sido.nameEn,
      code: sido.code,
      postal_code: `KR-${sido.code}`,
      division_type: "sido",
      counties: countiesList,
    });
  });

  const outputFilename = "kr_gov.json";
  fs.writeFileSync(outputFilename, JSON.stringify(formattedData, null, 2), "utf-8");

  console.log(`🎉 Thành công! Đã tạo file '${outputFilename}' đầy đủ toàn bộ các cấp từ 3 file TopoJSON:`);
  console.log(`   - Tổng số Sido (Regions): ${formattedData.length}`);
  console.log(`   - Tổng số Sigungu (Counties): ${totalCounties}`);
  console.log(`   - Tổng số Eup/Myeon/Dong (Wards): ${totalWards}`);
}

generateFullKrHierarchy();