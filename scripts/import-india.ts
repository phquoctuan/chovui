import fs from "node:fs/promises";

const API = "https://india-lgd-index-api.vercel.app/v1";

type Row = Record<string, unknown>;

type Location = {
  code: string;
  nameEn: string;
  nameLocal: string | null;
};

type Ward = Location & {
  districtCode: string;
};

type County = Location & {
  wards: Ward[];
};

type Region = Location & {
  counties: County[];
};

async function fetchData(path: string): Promise<Row[]> {
  const response = await fetch(`${API}${path}`);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${path}`);
  }

  const json = await response.json();

  if (json.success !== true || !Array.isArray(json.data)) {
    throw new Error(`Invalid API response: ${path}`);
  }

  return json.data as Row[];
}

// Đọc dữ liệu theo nhiều tên field khác nhau
function getField(row: Row, ...keys: string[]): string | null {
  for (const key of keys) {
    const value = row[key];

    if (value !== undefined && value !== null && String(value).trim()) {
      return String(value).trim();
    }
  }

  return null;
}

function normalizeLocation(
  row: Row,
  codeKeys: string[],
  nameKeys: string[],
  localKeys: string[],
): Location {
  const code = getField(row, ...codeKeys);
  const nameEn = getField(row, ...nameKeys);
  const nameLocal = getField(row, ...localKeys);

  if (!code || !nameEn) {
    throw new Error(
      `Missing code/name. Available fields: ${Object.keys(row).join(", ")}`,
    );
  }

  return {
    code,
    nameEn,
    nameLocal,
  };
}

async function main() {
  console.log("Downloading India administrative data...");

  // 1. States + Union Territories
  const stateRows = await fetchData("/states");

  const regions: Region[] = [];

for (const state of stateRows) {
  const region = normalizeLocation(
    state,
    ["code", "stateCode", "state_code"],
    ["name", "nameEn", "stateNameEnglish", "state_name"],
    ["nameLocal", "stateNameLocal", "localName"],
  );

  console.log(`Processing: ${region.nameEn}`);

  // Chỉ gọi 2 API cho mỗi State
  const [districtRows, subdistrictRows] = await Promise.all([
    fetchData(`/districts?state=${region.code}`),
    fetchData(`/subdistricts?state=${region.code}`),
  ]);

  // Nhóm Sub-district theo District code
  const wardsByDistrict = new Map<string, Ward[]>();

  for (const item of subdistrictRows) {
    const districtCode = getField(
      item,
      "districtCode",
      "district_code",
      "parentDistrictCode",
    );

    if (!districtCode) {
      throw new Error(
        `Missing districtCode: ${JSON.stringify(item)}`,
      );
    }

    const ward = normalizeLocation(
      item,
      ["code", "subdistrictCode", "subdistrict_code"],
      ["name", "nameEn", "subdistrictNameEnglish", "subdistrict_name"],
      ["nameLocal", "subdistrictNameLocal", "localName"],
    );

    const list = wardsByDistrict.get(districtCode) ?? [];

    list.push({
      ...ward,
      districtCode,
    });

    wardsByDistrict.set(districtCode, list);
  }

  const counties: County[] = districtRows.map((district) => {
    const county = normalizeLocation(
      district,
      ["code", "districtCode", "district_code"],
      ["name", "nameEn", "districtNameEnglish", "district_name"],
      ["nameLocal", "districtNameLocal", "localName"],
    );

    return {
      ...county,
      wards: wardsByDistrict.get(county.code) ?? [],
    };
  });

  regions.push({
    ...region,
    counties,
  });

  console.log(
    `  ${counties.length} districts, ${subdistrictRows.length} sub-districts`,
  );
}

  // 4. Kiểm tra dữ liệu
  const totalDistricts = regions.reduce(
    (sum, region) => sum + region.counties.length,
    0,
  );

  const totalSubDistricts = regions.reduce(
    (sum, region) =>
      sum +
      region.counties.reduce(
        (countySum, county) => countySum + county.wards.length,
        0,
      ),
    0,
  );

  const result = {
    countryCode: "IN",
    countryName: "India",
    source: "Local Government Directory (LGD), Government of India",
    sourceApi: "India LGD Index API",
    regions,
  };

  await fs.mkdir("data", { recursive: true });

  await fs.writeFile(
    "data/IN.json",
    JSON.stringify(result, null, 2),
    "utf8",
  );

  console.log("\n========== SUMMARY ==========");
  console.log(`Regions: ${regions.length}`);
  console.log(`Districts: ${totalDistricts}`);
  console.log(`Sub-districts: ${totalSubDistricts}`);
  console.log("Output: data/IN.json");
}

main().catch((error) => {
  console.error("Import failed:", error);
  process.exitCode = 1;
});