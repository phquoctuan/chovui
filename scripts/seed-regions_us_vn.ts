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

// 2. Dữ liệu tỉnh/thành Việt Nam (VN)
export const vietnamRegionsSeed = [
  { name: 'Hà Nội', code: 'HN' },
  { name: 'Hà Tây (Hà Nội)', code: 'HTY' },
  { name: 'Hồ Chí Minh', code: 'SGN' },
  { name: 'Hải Phòng', code: 'HP' },
  { name: 'Đà Nẵng', code: 'DN' },
  { name: 'Cần Thơ', code: 'CT' },
  { name: 'Hà Giang (Tuyên Quang)', code: 'HG' },
  { name: 'Tuyên Quang', code: 'TQ' },
  { name: 'Cao Bằng', code: 'CB' },
  { name: 'Bắc Kạn (Thái Nguyên)', code: 'BK' },
  { name: 'Thái Nguyên', code: 'TN' },
  { name: 'Lào Cai', code: 'LC' },
  { name: 'Yên Bái (Lào Cai)', code: 'YB' },
  { name: 'Lạng Sơn', code: 'LS' },
  { name: 'Điện Biên', code: 'DB' },
  { name: 'Lai Châu', code: 'LCH' },
  { name: 'Sơn La', code: 'SL' },
  { name: 'Phú Thọ', code: 'PT' },
  { name: 'Vĩnh Phúc (Phú Thọ)', code: 'VP' },
  { name: 'Hòa Bình (Phú Thọ)', code: 'HB' },
  { name: 'Bắc Giang (Bắc Ninh)', code: 'BG' },
  { name: 'Bắc Ninh', code: 'BN' },
  { name: 'Quảng Ninh', code: 'QNI' },
  { name: 'Hải Dương (Hải Phòng)', code: 'HD' },
  { name: 'Hưng Yên', code: 'HY' },
  { name: 'Thái Bình (Hưng Yên)', code: 'TB' },
  { name: 'Hà Nam (Ninh Bình)', code: 'HNA' },
  { name: 'Nam Định (Ninh Bình)', code: 'ND' },
  { name: 'Ninh Bình', code: 'NB' },
  { name: 'Thanh Hóa', code: 'TH' },
  { name: 'Nghệ An', code: 'NA' },
  { name: 'Hà Tĩnh', code: 'HTT' },
  { name: 'Quảng Bình (Quảng Trị)', code: 'QB' },
  { name: 'Quảng Trị', code: 'QT' },
  { name: 'Thừa Thiên Huế (Huế)', code: 'TTH' },
  { name: 'Quảng Nam (Đà Nẵng)', code: 'QNA' },
  { name: 'Quảng Ngãi', code: 'QNG' },
  { name: 'Kon Tum (Quảng Ngãi)', code: 'KT' },
  { name: 'Bình Định (Gia Lai)', code: 'BDH' },
  { name: 'Gia Lai', code: 'GL' },
  { name: 'Phú Yên (Đắk Lắk)', code: 'PY' },
  { name: 'Đắk Lắk', code: 'DL' },
  { name: 'Khánh Hòa', code: 'KH' },
  { name: 'Ninh Thuận (Khánh Hoà)', code: 'NT' },
  { name: 'Đắk Nông (Lâm Đồng)', code: 'DNO' },
  { name: 'Lâm Đồng', code: 'LD' },
  { name: 'Bình Thuận (Lâm Đồng)', code: 'BTH' },
  { name: 'Bình Phước (Đồng Nai)', code: 'BP' },
  { name: 'Đồng Nai', code: 'DNI' },
  { name: 'Tây Ninh', code: 'TNINH' },
  { name: 'Bình Dương (Hồ Chí Minh)', code: 'BD' },
  { name: 'Bà Rịa - Vũng Tàu (Hồ Chí Minh)', code: 'BRVT' },
  { name: 'Long An (Tây Ninh)', code: 'LA' },
  { name: 'Đồng Tháp', code: 'DT' },
  { name: 'Tiền Giang (Đồng Tháp)', code: 'TG' },
  { name: 'An Giang', code: 'AG' },
  { name: 'Kiên Giang (An Giang)', code: 'KG' },
  { name: 'Bến Tre (Vĩnh Long)', code: 'BT' },
  { name: 'Vĩnh Long', code: 'VL' },
  { name: 'Trà Vinh (Vĩnh Long)', code: 'TV' },
  { name: 'Hậu Giang (Cần Thơ)', code: 'HGZ' },
  { name: 'Sóc Trăng (Cần Thơ)', code: 'ST' },
  { name: 'Bạc Liêu (Cà Mau)', code: 'BL' },
  { name: 'Cà Mau', code: 'CM' },
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

    const formattedVnData = vietnamRegionsSeed.map((item) => ({
      ...item,
      countryCode: vnCountry.code,
      has_county: true,
    }));

    // Gộp 2 mảng dữ liệu
    const allRegionsToSeed = [...formattedUsData, ...formattedVnData];

    // Chèn vào database
    await db.insert(regions).values(allRegionsToSeed);

    console.log(
      `✅ Seed thành công ${allRegionsToSeed.length} vùng miền (US: ${usStatesSeed.length}, VN: ${vietnamRegionsSeed.length})!`
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