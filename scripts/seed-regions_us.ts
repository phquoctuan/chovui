import { db } from "../db";
import { countries, regions } from "../db/schema";
import { eq } from 'drizzle-orm';

// 1. Dữ liệu các tiểu bang Hoa Kỳ (US)
export const usStatesSeed = [
  { name: 'Alabama', code: 'AL' },
  { name: 'Alaska', code: 'AK' },
  { name: 'Arizona', code: 'AZ' },
  { name: 'Arkansas', code: 'AR' },
  { name: 'California', code: 'CA' },
  { name: 'Colorado', code: 'CO' },
  { name: 'Connecticut', code: 'CT' },
  { name: 'Delaware', code: 'DE' },
  { name: 'Florida', code: 'FL' },
  { name: 'Georgia', code: 'GA' },
  { name: 'Hawaii', code: 'HI' },
  { name: 'Idaho', code: 'ID' },
  { name: 'Illinois', code: 'IL' },
  { name: 'Indiana', code: 'IN' },
  { name: 'Iowa', code: 'IA' },
  { name: 'Kansas', code: 'KS' },
  { name: 'Kentucky', code: 'KY' },
  { name: 'Louisiana', code: 'LA' },
  { name: 'Maine', code: 'ME' },
  { name: 'Maryland', code: 'MD' },
  { name: 'Massachusetts', code: 'MA' },
  { name: 'Michigan', code: 'MI' },
  { name: 'Minnesota', code: 'MN' },
  { name: 'Mississippi', code: 'MS' },
  { name: 'Missouri', code: 'MO' },
  { name: 'Montana', code: 'MT' },
  { name: 'Nebraska', code: 'NE' },
  { name: 'Nevada', code: 'NV' },
  { name: 'New Hampshire', code: 'NH' },
  { name: 'New Jersey', code: 'NJ' },
  { name: 'New Mexico', code: 'NM' },
  { name: 'New York', code: 'NY' },
  { name: 'North Carolina', code: 'NC' },
  { name: 'North Dakota', code: 'ND' },
  { name: 'Ohio', code: 'OH' },
  { name: 'Oklahoma', code: 'OK' },
  { name: 'Oregon', code: 'OR' },
  { name: 'Pennsylvania', code: 'PA' },
  { name: 'Rhode Island', code: 'RI' },
  { name: 'South Carolina', code: 'SC' },
  { name: 'South Dakota', code: 'SD' },
  { name: 'Tennessee', code: 'TN' },
  { name: 'Texas', code: 'TX' },
  { name: 'Utah', code: 'UT' },
  { name: 'Vermont', code: 'VT' },
  { name: 'Virginia', code: 'VA' },
  { name: 'Washington', code: 'WA' },
  { name: 'West Virginia', code: 'WV' },
  { name: 'Wisconsin', code: 'WI' },
  { name: 'Wyoming', code: 'WY' },
  { name: 'Washington, D.C', code: 'DC' },
];

// 3. Hàm thực thi Seeding
export async function seedRegions() {
  console.log('🌱 Đang tiến hành seed dữ liệu cho bảng regions...');

  try {
    // Lấy ID quốc gia Mỹ (US) và Việt Nam (VN) từ bảng countries
    const [usCountry] = await db
      .select()
      .from(countries)
      .where(eq(countries.code, 'US'));

    const [vnCountry] = await db
      .select()
      .from(countries)
      .where(eq(countries.code, 'VN'));

    if (!usCountry || !vnCountry) {
      throw new Error(
        'Không tìm thấy bản ghi quốc gia US hoặc VN trong bảng countries. Vui lòng seed bảng countries trước!'
      );
    }

    // Map countryId thực tế vào mảng dữ liệu
    const formattedUsData = usStatesSeed.map((item) => ({
      ...item,
      countryCode: usCountry.code,
      has_county: item.name === "Washington, D.C" ? false : true,
    }));

    const allRegionsToSeed = [...formattedUsData];

    // Chèn vào database
    await db.insert(regions).values(allRegionsToSeed);

    console.log(
      `✅ Seed thành công vùng miền (US: ${usStatesSeed.length})!`
    );
  } catch (error) {
    console.error('❌ Lỗi khi seed bảng regions:', error);
  }
}

// Gọi hàm seed nếu file được chạy trực tiếp (VD: tsx seed-regions.ts)
// seedRegions();
async function main() {
  seedRegions();
}

main()
  .catch((error) => {
    console.error("Seed failed:");
    console.error(error);
    process.exit(1);
  });