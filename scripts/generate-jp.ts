import fs from "fs";
import readline from "readline";

// Hàm hỗ trợ chuyển đổi chuỗi chữ hoa/thường thành Title Case (chữ cái đầu viết hoa, còn lại viết thường)
function toTitleCase(str: string | undefined): string | null {
  if (!str || !str.trim()) return null;
  
  return str
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function convertCsvToJson() {
  console.log("🇯🇵 Đang đọc và xử lý file 'japan_addresses.csv'...");

  const fileStream = fs.createReadStream("japan_addresses.csv");
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let isHeader = true;

  // Cấu trúc gom nhóm 3 cấp:
  // Prefecture Code -> { name, nameEn, code, citiesMap }
  const prefMap = new Map<
    string,
    {
      name: string;
      nameEn: string | null;
      code: string;
      cities: Map<
        string,
        {
          name: string;
          nameEn: string | null;
          code: string;
          wards: Map<string, string | null>; // Map<townName, townNameEn>
        }
      >;
    }
  >();

  for await (const line of rl) {
    if (isHeader) {
      isHeader = false;
      continue; // Bỏ qua dòng tiêu đề
    }

    // Parse CSV an toàn
    const row = parseCSVLine(line);
    if (row.length < 11) continue;

    // Lấy thông tin từ các cột trong file CSV:
    // Cấp 1 (Prefecture):
    const prefCode = row[0]?.trim();
    const prefName = row[1]?.trim();
    const prefNameEnRaw = row[3]?.trim(); // 都道府県名ローマ字 (VD: "HOKKAIDO")

    // Cấp 2 (City / County):
    const cityCode = row[4]?.trim();
    const cityName = row[5]?.trim();
    const cityNameEnRaw = row[7]?.trim(); // 市区町村名ローマ字 (VD: "SAPPORO SHI CHUO KU")

    // Cấp 3 (Town / Ward):
    const townName = row[8]?.trim(); // 大字町丁目名 (VD: "旭ケ丘一丁目")
    const townNameEnRaw = row[10]?.trim(); // 大字町丁目名ローマ字 (VD: "ASAHIGAOKA 1")

    if (!prefCode || !cityName || !townName) continue;

    // 1. Gom nhóm Tỉnh (Prefecture)
    if (!prefMap.has(prefCode)) {
      prefMap.set(prefCode, {
        name: prefName,
        nameEn: toTitleCase(prefNameEnRaw),
        code: prefCode,
        cities: new Map(),
      });
    }

    const prefData = prefMap.get(prefCode)!;

    // 2. Gom nhóm Thành phố / Quận (County / City)
    if (!prefData.cities.has(cityCode)) {
      prefData.cities.set(cityCode, {
        name: cityName,
        nameEn: toTitleCase(cityNameEnRaw),
        code: cityCode,
        wards: new Map(),
      });
    }

    // 3. Thêm Phường / Khu vực (Ward / Town)
    if (townName && townName !== "（その他）") {
      const cityData = prefData.cities.get(cityCode)!;
      if (!cityData.wards.has(townName)) {
        cityData.wards.set(townName, toTitleCase(townNameEnRaw));
      }
    }
  }

  console.log(`📦 Đã quét xong dữ liệu. Đang định dạng cấu trúc 3 cấp JSON...`);

  const formattedData: any[] = [];
  let totalCounties = 0;
  let totalWards = 0;

  prefMap.forEach((pref) => {
    const countiesList: any[] = [];

    pref.cities.forEach((city) => {
      const wardsList: any[] = [];
      let wardIndex = 1;

      city.wards.forEach((wardNameEn, wardName) => {
        wardsList.push({
          name: wardName,
          name_en: wardNameEn,
          code: `${city.code}-${String(wardIndex).padStart(3, "0")}`,
          division_type: "town_or_ward",
        });
        wardIndex++;
      });

      countiesList.push({
        name: city.name,
        name_en: city.nameEn,
        code: city.code,
        division_type: "city_or_district",
        wards: wardsList,
      });

      totalWards += wardsList.length;
    });

    totalCounties += countiesList.length;

    formattedData.push({
      name: pref.name,
      name_en: pref.nameEn,
      code: pref.code,
      postal_code: `JP-${pref.code}`,
      division_type: "prefecture",
      counties: countiesList,
    });
  });

  // Ghi kết quả ra file jp_gov.json
  const outputFilename = "jp_gov.json";
  fs.writeFileSync(outputFilename, JSON.stringify(formattedData, null, 2), "utf-8");

  console.log(`🎉 Thành công! Đã tạo file '${outputFilename}' có chứa name_en chuẩn Title Case:`);
  console.log(`   - Tổng số Tỉnh (Regions): ${formattedData.length}`);
  console.log(`   - Tổng số Thành phố/Huyện (Counties): ${totalCounties}`);
  console.log(`   - Tổng số Phường/Xã/Thị trấn (Wards): ${totalWards}`);
}

// Hàm hỗ trợ tách dòng CSV chuẩn
function parseCSVLine(text: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.replace(/^"|"$/g, "").trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.replace(/^"|"$/g, "").trim());
  return result;
}

convertCsvToJson();