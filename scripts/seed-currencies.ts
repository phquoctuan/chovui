import { db } from '@/db';
import { currencies } from '@/db/schema';

export interface NewCurrency {
  code: string;
  name: string;
  symbol: string;
  decimalPlaces: number;
  isActive: boolean;
  iconUrl?: string|null;
}

export const currenciesSeed: Array<NewCurrency> = [
  // { code: "", name: "", symbol: "", decimalPlaces: 2, isActive: false }, // Trường hợp code rỗng
  { code: "PI", name: "Pi Network", symbol: "𝝿", decimalPlaces: 7, isActive: true, iconUrl: "/currencies/pi-network.svg" },
  { code: "VND", name: "Đồng Việt Nam", symbol: "₫", decimalPlaces: 0, isActive: true },
  { code: "AFN", name: "Afghani Afghanistan", symbol: "AFN", decimalPlaces: 2, isActive: false },
  { code: "EGP", name: "Bảng Ai Cập", symbol: "EGP", decimalPlaces: 2, isActive: false },
  { code: "ALL", name: "Lek Albania", symbol: "ALL", decimalPlaces: 2, isActive: false },
  { code: "DZD", name: "Dinar Algeria", symbol: "DZD", decimalPlaces: 2, isActive: false },
  { code: "EUR", name: "Euro", symbol: "€", decimalPlaces: 2, isActive: false },
  { code: "AOA", name: "Kwanza Angola", symbol: "AOA", decimalPlaces: 2, isActive: false },
  { code: "XCD", name: "Đô la Đông Caribe", symbol: "EC$", decimalPlaces: 2, isActive: false },
  { code: "ARS", name: "Peso Argentina", symbol: "ARS", decimalPlaces: 2, isActive: false },
  { code: "AMD", name: "Dram Armenia", symbol: "AMD", decimalPlaces: 2, isActive: false },
  { code: "AWG", name: "Florin Aruba", symbol: "AWG", decimalPlaces: 2, isActive: false },
  { code: "AUD", name: "Đô la Úc", symbol: "A$", decimalPlaces: 2, isActive: false },
  { code: "AZN", name: "Manat Azerbaijan", symbol: "AZN", decimalPlaces: 2, isActive: false },
  { code: "PLN", name: "Zloty Ba Lan", symbol: "PLN", decimalPlaces: 2, isActive: false },
  { code: "BSD", name: "Đô la Bahamas", symbol: "BSD", decimalPlaces: 2, isActive: false },
  { code: "BHD", name: "Dinar Bahrain", symbol: "BHD", decimalPlaces: 3, isActive: false }, // Dinar thường dùng 3 chữ số thập phân
  { code: "BDT", name: "Taka Bangladesh", symbol: "BDT", decimalPlaces: 2, isActive: false },
  { code: "BBD", name: "Đô la Barbados", symbol: "BBD", decimalPlaces: 2, isActive: false },
  { code: "BYR", name: "Ruble Belarus", symbol: "BYR", decimalPlaces: 0, isActive: false },
  { code: "BZD", name: "Đô la Belize", symbol: "BZD", decimalPlaces: 2, isActive: false },
  { code: "XOF", name: "Franc CFA Tây Phi", symbol: "F CFA", decimalPlaces: 0, isActive: false },
  { code: "BMD", name: "Đô la Bermuda", symbol: "BMD", decimalPlaces: 2, isActive: false },
  { code: "BTN", name: "Ngultrum Bhutan", symbol: "BTN", decimalPlaces: 2, isActive: false },
  { code: "BOB", name: "Boliviano Bolivia", symbol: "BOB", decimalPlaces: 2, isActive: false },
  { code: "USD", name: "Đô la Mỹ", symbol: "$", decimalPlaces: 2, isActive: false },
  { code: "BAM", name: "Mark Bosnia và Herzegovina", symbol: "BAM", decimalPlaces: 2, isActive: false },
  { code: "BWP", name: "Pula Botswana", symbol: "BWP", decimalPlaces: 2, isActive: false },
  { code: "BRL", name: "Real Brazil", symbol: "R$", decimalPlaces: 2, isActive: false },
  { code: "BND", name: "Đô la Brunei", symbol: "BND", decimalPlaces: 2, isActive: false },
  { code: "BGN", name: "Lev Bulgaria", symbol: "BGN", decimalPlaces: 2, isActive: false },
  { code: "BIF", name: "Franc Burundi", symbol: "BIF", decimalPlaces: 0, isActive: false },
  { code: "MKD", name: "Denar Bắc Macedonia", symbol: "MKD", decimalPlaces: 2, isActive: false },
  { code: "XAF", name: "Franc CFA Trung Phi", symbol: "FCFA", decimalPlaces: 0, isActive: false },
  { code: "KHR", name: "Riel Campuchia", symbol: "KHR", decimalPlaces: 2, isActive: false },
  { code: "CAD", name: "Đô la Canada", symbol: "CA$", decimalPlaces: 2, isActive: false },
  { code: "CVE", name: "Escudo Cape Verde", symbol: "CVE", decimalPlaces: 2, isActive: false },
  { code: "CLF", name: "Đơn vị tài khoản Chile (UF)", symbol: "CLF", decimalPlaces: 4, isActive: false },
  { code: "COP", name: "Peso Colombia", symbol: "COP", decimalPlaces: 2, isActive: false },
  { code: "KMF", name: "Franc Comoros", symbol: "KMF", decimalPlaces: 0, isActive: false },
  { code: "CDF", name: "Franc Congo", symbol: "CDF", decimalPlaces: 2, isActive: false },
  { code: "CRC", name: "Colón Costa Rica", symbol: "CRC", decimalPlaces: 2, isActive: false },
  { code: "HRK", name: "Kuna Croatia", symbol: "HRK", decimalPlaces: 2, isActive: false },
  { code: "CUC", name: "Peso Cuba chuyển đổi", symbol: "CUC", decimalPlaces: 2, isActive: false },
  { code: "ANG", name: "Guilder Antille thuộc Hà Lan", symbol: "ANG", decimalPlaces: 2, isActive: false },
  { code: "AED", name: "Dirham UAE", symbol: "AED", decimalPlaces: 2, isActive: false },
  { code: "DOP", name: "Peso Dominica", symbol: "DOP", decimalPlaces: 2, isActive: false },
  { code: "DJF", name: "Franc Djibouti", symbol: "DJF", decimalPlaces: 0, isActive: false },
  { code: "SVC", name: "Colón El Salvador", symbol: "SVC", decimalPlaces: 2, isActive: false },
  { code: "ERN", name: "Nakfa Eritrea", symbol: "ERN", decimalPlaces: 2, isActive: false },
  { code: "SZL", name: "Lilangeni Eswatini", symbol: "SZL", decimalPlaces: 2, isActive: false },
  { code: "ETB", name: "Birr Ethiopia", symbol: "ETB", decimalPlaces: 2, isActive: false },
  { code: "FJD", name: "Đô la Fiji", symbol: "FJD", decimalPlaces: 2, isActive: false },
  { code: "GMD", name: "Dalasi Gambia", symbol: "GMD", decimalPlaces: 2, isActive: false },
  { code: "GEL", name: "Lari Georgia", symbol: "GEL", decimalPlaces: 2, isActive: false },
  { code: "GHS", name: "Cedi Ghana", symbol: "GHS", decimalPlaces: 2, isActive: false },
  { code: "GIP", name: "Bảng Gibraltar", symbol: "GIP", decimalPlaces: 2, isActive: false },
  { code: "DKK", name: "Krone Đan Mạch", symbol: "DKK", decimalPlaces: 2, isActive: false },
  { code: "GTQ", name: "Quetzal Guatemala", symbol: "GTQ", decimalPlaces: 2, isActive: false },
  { code: "GBP", name: "Bảng Anh", symbol: "£", decimalPlaces: 2, isActive: false },
  { code: "GNF", name: "Franc Guinea", symbol: "GNF", decimalPlaces: 0, isActive: false },
  { code: "GYD", name: "Đô la Guyana", symbol: "GYD", decimalPlaces: 2, isActive: false },
  { code: "HTG", name: "Gourde Haiti", symbol: "HTG", decimalPlaces: 2, isActive: false },
  { code: "HNL", name: "Lempira Honduras", symbol: "HNL", decimalPlaces: 2, isActive: false },
  { code: "HUF", name: "Forint Hungary", symbol: "", decimalPlaces: 2, isActive: false },
  { code: "KRW", name: "Won Hàn Quốc", symbol: "₩", decimalPlaces: 0, isActive: false },
  { code: "ISK", name: "Krona Iceland", symbol: "ISK", decimalPlaces: 0, isActive: false },
  { code: "IDR", name: "Rupiah Indonesia", symbol: "IDR", decimalPlaces: 2, isActive: false },
  { code: "IRR", name: "Rial Iran", symbol: "IRR", decimalPlaces: 2, isActive: false },
  { code: "IQD", name: "Dinar Iraq", symbol: "IQD", decimalPlaces: 3, isActive: false },
  { code: "ILS", name: "Shekel mới Israel", symbol: "₪", decimalPlaces: 2, isActive: false },
  { code: "JMD", name: "Đô la Jamaica", symbol: "JMD", decimalPlaces: 2, isActive: false },
  { code: "JOD", name: "Dinar Jordan", symbol: "JOD", decimalPlaces: 3, isActive: false },
  { code: "KZT", name: "Tenge Kazakhstan", symbol: "KZT", decimalPlaces: 2, isActive: false },
  { code: "KES", name: "Shilling Kenya", symbol: "KES", decimalPlaces: 2, isActive: false },
  { code: "KWD", name: "Dinar Kuwait", symbol: "KWD", decimalPlaces: 3, isActive: false },
  { code: "KGS", name: "Som Kyrgyzstan", symbol: "KGS", decimalPlaces: 2, isActive: false },
  { code: "LSL", name: "Loti Lesotho", symbol: "LSL", decimalPlaces: 2, isActive: false },
  { code: "LBP", name: "Bảng Lebanon", symbol: "LBP", decimalPlaces: 2, isActive: false },
  { code: "LRD", name: "Đô la Liberia", symbol: "LRD", decimalPlaces: 2, isActive: false },
  { code: "LYD", name: "Dinar Libya", symbol: "LYD", decimalPlaces: 3, isActive: false },
  { code: "CHF", name: "Franc Thụy Sĩ", symbol: "CHF", decimalPlaces: 2, isActive: false },
  { code: "LAK", name: "Kip Lào", symbol: "LAK", decimalPlaces: 2, isActive: false },
  { code: "MAD", name: "Dirham Maroc", symbol: "MAD", decimalPlaces: 2, isActive: false },
  { code: "MGA", name: "Ariary Malagasy", symbol: "MGA", decimalPlaces: 1, isActive: false },
  { code: "MWK", name: "Kwacha Malawi", symbol: "MWK", decimalPlaces: 2, isActive: false },
  { code: "MYR", name: "Ringgit Malaysia", symbol: "MYR", decimalPlaces: 2, isActive: false },
  { code: "MVR", name: "Rufiyaa Maldives", symbol: "MVR", decimalPlaces: 2, isActive: false },
  { code: "MRO", name: "Ouguiya Mauritania", symbol: "MRO", decimalPlaces: 1, isActive: false },
  { code: "MUR", name: "Rupee Mauritius", symbol: "MUR", decimalPlaces: 2, isActive: false },
  { code: "MXN", name: "Peso Mexico", symbol: "MX$", decimalPlaces: 2, isActive: false },
  { code: "MDL", name: "Leu Moldova", symbol: "MDL", decimalPlaces: 2, isActive: false },
  { code: "MZN", name: "Metical Mozambique", symbol: "MZN", decimalPlaces: 2, isActive: false },
  { code: "MMK", name: "Kyat Myanmar", symbol: "MMK", decimalPlaces: 2, isActive: false },
  { code: "MNT", name: "Tugrik Mông Cổ", symbol: "MNT", decimalPlaces: 2, isActive: false },
  { code: "NOK", name: "Krone Na Uy", symbol: "NOK", decimalPlaces: 2, isActive: false },
  { code: "ZAR", name: "Rand Nam Phi", symbol: "ZAR", decimalPlaces: 2, isActive: false },
  { code: "SSP", name: "Bảng Nam Sudan", symbol: "SSP", decimalPlaces: 2, isActive: false },
  { code: "NAD", name: "Đô la Namibia", symbol: "NAD", decimalPlaces: 2, isActive: false },
  { code: "NPR", name: "Rupee Nepal", symbol: "NPR", decimalPlaces: 2, isActive: false },
  { code: "XPF", name: "Franc CFP", symbol: "CFPF", decimalPlaces: 0, isActive: false },
  { code: "NZD", name: "Đô la New Zealand", symbol: "NZ$", decimalPlaces: 2, isActive: false },
  { code: "RUB", name: "Ruble Nga", symbol: "RUB", decimalPlaces: 2, isActive: false },
  { code: "JPY", name: "Yên Nhật", symbol: "¥", decimalPlaces: 0, isActive: false },
  { code: "NIO", name: "Córdoba Nicaragua", symbol: "NIO", decimalPlaces: 2, isActive: false },
  { code: "NGN", name: "Naira Nigeria", symbol: "NGN", decimalPlaces: 2, isActive: false },
  { code: "OMR", name: "Rial Oman", symbol: "OMR", decimalPlaces: 3, isActive: false },
  { code: "PKR", name: "Rupee Pakistan", symbol: "PKR", decimalPlaces: 2, isActive: false },
  { code: "PAB", name: "Balboa Panama", symbol: "PAB", decimalPlaces: 2, isActive: false },
  { code: "PGK", name: "Kina Papua New Guinea", symbol: "PGK", decimalPlaces: 2, isActive: false },
  { code: "PYG", name: "Guarani Paraguay", symbol: "PYG", decimalPlaces: 0, isActive: false },
  { code: "PEN", name: "Sol Peru", symbol: "PEN", decimalPlaces: 2, isActive: false },
  { code: "PHP", name: "Peso Phillipines", symbol: "₱", decimalPlaces: 2, isActive: false },
  { code: "QAR", name: "Riyal Qatar", symbol: "QAR", decimalPlaces: 2, isActive: false },
  { code: "KYD", name: "Đô la Quần đảo Cayman", symbol: "KYD", decimalPlaces: 2, isActive: false },
  { code: "FKP", name: "Bảng Quần đảo Falkland", symbol: "FKP", decimalPlaces: 2, isActive: false },
  { code: "SBD", name: "Đô la Quần đảo Solomon", symbol: "SBD", decimalPlaces: 2, isActive: false },
  { code: "RON", name: "Leu Romania", symbol: "RON", decimalPlaces: 2, isActive: false },
  { code: "RWF", name: "Franc Rwanda", symbol: "RWF", decimalPlaces: 0, isActive: false },
  { code: "WST", name: "Tala Samoa", symbol: "WST", decimalPlaces: 2, isActive: false },
  { code: "RSD", name: "Dinar Serbia", symbol: "RSD", decimalPlaces: 2, isActive: false },
  { code: "SCR", name: "Rupee Seychelles", symbol: "SCR", decimalPlaces: 2, isActive: false },
  { code: "SLL", name: "Leone Sierra Leone", symbol: "SLL", decimalPlaces: 2, isActive: false },
  { code: "SGD", name: "Đô la Singapore", symbol: "SGD", decimalPlaces: 2, isActive: false },
  { code: "SOS", name: "Shilling Somalia", symbol: "SOS", decimalPlaces: 2, isActive: false },
  { code: "LKR", name: "Rupee Sri Lanka", symbol: "LKR", decimalPlaces: 2, isActive: false },
  { code: "SHP", name: "Bảng St. Helena", symbol: "SHP", decimalPlaces: 2, isActive: false },
  { code: "SDG", name: "Bảng Sudan", symbol: "SDG", decimalPlaces: 2, isActive: false },
  { code: "SRD", name: "Đô la Suriname", symbol: "SRD", decimalPlaces: 2, isActive: false },
  { code: "SYP", name: "Bảng Syria", symbol: "SYP", decimalPlaces: 2, isActive: false },
  { code: "STD", name: "Dobra São Tomé và Príncipe", symbol: "STD", decimalPlaces: 2, isActive: false },
  { code: "CZK", name: "Koruna Séc", symbol: "CZK", decimalPlaces: 2, isActive: false },
  { code: "TJS", name: "Somoni Tajikistan", symbol: "TJS", decimalPlaces: 2, isActive: false },
  { code: "TZS", name: "Shilling Tanzania", symbol: "TZS", decimalPlaces: 2, isActive: false },
  { code: "THB", name: "Baht Thái Lan", symbol: "THB", decimalPlaces: 2, isActive: false },
  { code: "TRY", name: "Lira Thổ Nhĩ Kỳ", symbol: "TRY", decimalPlaces: 2, isActive: false },
  { code: "CHE", name: "WIR Euro", symbol: "CHE", decimalPlaces: 2, isActive: false },
  { code: "SEK", name: "Krona Thụy Điển", symbol: "SEK", decimalPlaces: 2, isActive: false },
  { code: "TOP", name: "Paʻanga Tonga", symbol: "TOP", decimalPlaces: 2, isActive: false },
  { code: "TTD", name: "Đô la Trinidad và Tobago", symbol: "TTD", decimalPlaces: 2, isActive: false },
  { code: "KPW", name: "Won Triều Tiên", symbol: "KPW", decimalPlaces: 2, isActive: false },
  { code: "CNY", name: "Nhân dân tệ Trung Quốc", symbol: "CN¥", decimalPlaces: 2, isActive: false },
  { code: "TND", name: "Dinar Tunisia", symbol: "TND", decimalPlaces: 3, isActive: false },
  { code: "TMT", name: "Manat Turkmenistan", symbol: "TMT", decimalPlaces: 2, isActive: false },
  { code: "UGX", name: "Shilling Uganda", symbol: "UGX", decimalPlaces: 0, isActive: false },
  { code: "UAH", name: "Hryvnia Ukraina", symbol: "UAH", decimalPlaces: 2, isActive: false },
  { code: "UYI", name: "Peso en Unidades Indexadas Uruguay", symbol: "UYI", decimalPlaces: 0, isActive: false },
  { code: "UZS", name: "Sum Uzbekistan", symbol: "UZS", decimalPlaces: 2, isActive: false },
  { code: "VUV", name: "Vatu Vanuatu", symbol: "VUV", decimalPlaces: 0, isActive: false },
  { code: "VEF", name: "Bolívar Venezuela", symbol: "VEF", decimalPlaces: 2, isActive: false },
  { code: "YER", name: "Rial Yemen", symbol: "YER", decimalPlaces: 2, isActive: false },
  { code: "ZMK", name: "Kwacha Zambia", symbol: "ZMK", decimalPlaces: 2, isActive: false },
  { code: "TWD", name: "Đô la Đài Loan mới", symbol: "NT$", decimalPlaces: 2, isActive: false },
  { code: "HKD", name: "Đô la Hồng Kong", symbol: "HK$", decimalPlaces: 2, isActive: false },
  { code: "MOP", name: "Pataca Ma Cao", symbol: "MOP", decimalPlaces: 2, isActive: false },
  { code: "SAR", name: "Riyal Ả Rập Xê Út", symbol: "SAR", decimalPlaces: 2, isActive: false },
  { code: "INR", name: "Rupee Ấn Độ", symbol: "₹", decimalPlaces: 2, isActive: false }
];

export async function seedCurrencies() {
  try {
    // Lọc bỏ các item có code rỗng (nếu có)
    const validData = currenciesSeed.filter(item => item.code.trim() !== '');

    await db.insert(currencies)
      .values(validData)
      .onConflictDoNothing({ target: currencies.code });

    console.log('Seed bảng currencies thành công!');
  } catch (error) {
    console.error('Lỗi khi seed currencies:', error);
  }
}
async function main() {
  seedCurrencies();
}

main()
  .catch((error) => {
    console.error("Seed failed:");
    console.error(error);
    process.exit(1);
  });