import { db } from '@/db';
import { currencies } from '@/db/schema';

export interface NewCurrency {
  code: string;
  name: string;
  symbol: string;
  decimalPlaces: number;
  isActive: boolean;
}

export const currenciesSeed: Array<NewCurrency> = [
  // { code: "", name: "", symbol: "", decimalPlaces: 2, isActive: false }, // Trường hợp code rỗng
  { code: "AFN", name: "Afghani Afghanistan", symbol: "AFN", decimalPlaces: 2, isActive: true },
  { code: "EGP", name: "Bảng Ai Cập", symbol: "EGP", decimalPlaces: 2, isActive: true },
  { code: "ALL", name: "Lek Albania", symbol: "ALL", decimalPlaces: 2, isActive: true },
  { code: "DZD", name: "Dinar Algeria", symbol: "DZD", decimalPlaces: 2, isActive: true },
  { code: "EUR", name: "Euro", symbol: "€", decimalPlaces: 2, isActive: true },
  { code: "AOA", name: "Kwanza Angola", symbol: "AOA", decimalPlaces: 2, isActive: true },
  { code: "XCD", name: "Đô la Đông Caribe", symbol: "EC$", decimalPlaces: 2, isActive: true },
  { code: "ARS", name: "Peso Argentina", symbol: "ARS", decimalPlaces: 2, isActive: true },
  { code: "AMD", name: "Dram Armenia", symbol: "AMD", decimalPlaces: 2, isActive: true },
  { code: "AWG", name: "Florin Aruba", symbol: "AWG", decimalPlaces: 2, isActive: true },
  { code: "AUD", name: "Đô la Úc", symbol: "A$", decimalPlaces: 2, isActive: true },
  { code: "AZN", name: "Manat Azerbaijan", symbol: "AZN", decimalPlaces: 2, isActive: true },
  { code: "PLN", name: "Zloty Ba Lan", symbol: "PLN", decimalPlaces: 2, isActive: true },
  { code: "BSD", name: "Đô la Bahamas", symbol: "BSD", decimalPlaces: 2, isActive: true },
  { code: "BHD", name: "Dinar Bahrain", symbol: "BHD", decimalPlaces: 3, isActive: true }, // Dinar thường dùng 3 chữ số thập phân
  { code: "BDT", name: "Taka Bangladesh", symbol: "BDT", decimalPlaces: 2, isActive: true },
  { code: "BBD", name: "Đô la Barbados", symbol: "BBD", decimalPlaces: 2, isActive: true },
  { code: "BYR", name: "Ruble Belarus", symbol: "BYR", decimalPlaces: 0, isActive: true },
  { code: "BZD", name: "Đô la Belize", symbol: "BZD", decimalPlaces: 2, isActive: true },
  { code: "XOF", name: "Franc CFA Tây Phi", symbol: "F CFA", decimalPlaces: 0, isActive: true },
  { code: "BMD", name: "Đô la Bermuda", symbol: "BMD", decimalPlaces: 2, isActive: true },
  { code: "BTN", name: "Ngultrum Bhutan", symbol: "BTN", decimalPlaces: 2, isActive: true },
  { code: "BOB", name: "Boliviano Bolivia", symbol: "BOB", decimalPlaces: 2, isActive: true },
  { code: "USD", name: "Đô la Mỹ", symbol: "$", decimalPlaces: 2, isActive: true },
  { code: "BAM", name: "Mark Bosnia và Herzegovina", symbol: "BAM", decimalPlaces: 2, isActive: true },
  { code: "BWP", name: "Pula Botswana", symbol: "BWP", decimalPlaces: 2, isActive: true },
  { code: "BRL", name: "Real Brazil", symbol: "R$", decimalPlaces: 2, isActive: true },
  { code: "BND", name: "Đô la Brunei", symbol: "BND", decimalPlaces: 2, isActive: true },
  { code: "BGN", name: "Lev Bulgaria", symbol: "BGN", decimalPlaces: 2, isActive: true },
  { code: "BIF", name: "Franc Burundi", symbol: "BIF", decimalPlaces: 0, isActive: true },
  { code: "MKD", name: "Denar Bắc Macedonia", symbol: "MKD", decimalPlaces: 2, isActive: true },
  { code: "XAF", name: "Franc CFA Trung Phi", symbol: "FCFA", decimalPlaces: 0, isActive: true },
  { code: "KHR", name: "Riel Campuchia", symbol: "KHR", decimalPlaces: 2, isActive: true },
  { code: "CAD", name: "Đô la Canada", symbol: "CA$", decimalPlaces: 2, isActive: true },
  { code: "CVE", name: "Escudo Cape Verde", symbol: "CVE", decimalPlaces: 2, isActive: true },
  { code: "CLF", name: "Đơn vị tài khoản Chile (UF)", symbol: "CLF", decimalPlaces: 4, isActive: true },
  { code: "COP", name: "Peso Colombia", symbol: "COP", decimalPlaces: 2, isActive: true },
  { code: "KMF", name: "Franc Comoros", symbol: "KMF", decimalPlaces: 0, isActive: true },
  { code: "CDF", name: "Franc Congo", symbol: "CDF", decimalPlaces: 2, isActive: true },
  { code: "CRC", name: "Colón Costa Rica", symbol: "CRC", decimalPlaces: 2, isActive: true },
  { code: "HRK", name: "Kuna Croatia", symbol: "HRK", decimalPlaces: 2, isActive: true },
  { code: "CUC", name: "Peso Cuba chuyển đổi", symbol: "CUC", decimalPlaces: 2, isActive: true },
  { code: "ANG", name: "Guilder Antille thuộc Hà Lan", symbol: "ANG", decimalPlaces: 2, isActive: true },
  { code: "AED", name: "Dirham UAE", symbol: "AED", decimalPlaces: 2, isActive: true },
  { code: "DOP", name: "Peso Dominica", symbol: "DOP", decimalPlaces: 2, isActive: true },
  { code: "DJF", name: "Franc Djibouti", symbol: "DJF", decimalPlaces: 0, isActive: true },
  { code: "SVC", name: "Colón El Salvador", symbol: "SVC", decimalPlaces: 2, isActive: true },
  { code: "ERN", name: "Nakfa Eritrea", symbol: "ERN", decimalPlaces: 2, isActive: true },
  { code: "SZL", name: "Lilangeni Eswatini", symbol: "SZL", decimalPlaces: 2, isActive: true },
  { code: "ETB", name: "Birr Ethiopia", symbol: "ETB", decimalPlaces: 2, isActive: true },
  { code: "FJD", name: "Đô la Fiji", symbol: "FJD", decimalPlaces: 2, isActive: true },
  { code: "GMD", name: "Dalasi Gambia", symbol: "GMD", decimalPlaces: 2, isActive: true },
  { code: "GEL", name: "Lari Georgia", symbol: "GEL", decimalPlaces: 2, isActive: true },
  { code: "GHS", name: "Cedi Ghana", symbol: "GHS", decimalPlaces: 2, isActive: true },
  { code: "GIP", name: "Bảng Gibraltar", symbol: "GIP", decimalPlaces: 2, isActive: true },
  { code: "DKK", name: "Krone Đan Mạch", symbol: "DKK", decimalPlaces: 2, isActive: true },
  { code: "GTQ", name: "Quetzal Guatemala", symbol: "GTQ", decimalPlaces: 2, isActive: true },
  { code: "GBP", name: "Bảng Anh", symbol: "£", decimalPlaces: 2, isActive: true },
  { code: "GNF", name: "Franc Guinea", symbol: "GNF", decimalPlaces: 0, isActive: true },
  { code: "GYD", name: "Đô la Guyana", symbol: "GYD", decimalPlaces: 2, isActive: true },
  { code: "HTG", name: "Gourde Haiti", symbol: "HTG", decimalPlaces: 2, isActive: true },
  { code: "HNL", name: "Lempira Honduras", symbol: "HNL", decimalPlaces: 2, isActive: true },
  { code: "HUF", name: "Forint Hungary", symbol: "", decimalPlaces: 2, isActive: true },
  { code: "KRW", name: "Won Hàn Quốc", symbol: "₩", decimalPlaces: 0, isActive: true },
  { code: "ISK", name: "Krona Iceland", symbol: "ISK", decimalPlaces: 0, isActive: true },
  { code: "IDR", name: "Rupiah Indonesia", symbol: "IDR", decimalPlaces: 2, isActive: true },
  { code: "IRR", name: "Rial Iran", symbol: "IRR", decimalPlaces: 2, isActive: true },
  { code: "IQD", name: "Dinar Iraq", symbol: "IQD", decimalPlaces: 3, isActive: true },
  { code: "ILS", name: "Shekel mới Israel", symbol: "₪", decimalPlaces: 2, isActive: true },
  { code: "JMD", name: "Đô la Jamaica", symbol: "JMD", decimalPlaces: 2, isActive: true },
  { code: "JOD", name: "Dinar Jordan", symbol: "JOD", decimalPlaces: 3, isActive: true },
  { code: "KZT", name: "Tenge Kazakhstan", symbol: "KZT", decimalPlaces: 2, isActive: true },
  { code: "KES", name: "Shilling Kenya", symbol: "KES", decimalPlaces: 2, isActive: true },
  { code: "KWD", name: "Dinar Kuwait", symbol: "KWD", decimalPlaces: 3, isActive: true },
  { code: "KGS", name: "Som Kyrgyzstan", symbol: "KGS", decimalPlaces: 2, isActive: true },
  { code: "LSL", name: "Loti Lesotho", symbol: "LSL", decimalPlaces: 2, isActive: true },
  { code: "LBP", name: "Bảng Lebanon", symbol: "LBP", decimalPlaces: 2, isActive: true },
  { code: "LRD", name: "Đô la Liberia", symbol: "LRD", decimalPlaces: 2, isActive: true },
  { code: "LYD", name: "Dinar Libya", symbol: "LYD", decimalPlaces: 3, isActive: true },
  { code: "CHF", name: "Franc Thụy Sĩ", symbol: "CHF", decimalPlaces: 2, isActive: true },
  { code: "LAK", name: "Kip Lào", symbol: "LAK", decimalPlaces: 2, isActive: true },
  { code: "MAD", name: "Dirham Maroc", symbol: "MAD", decimalPlaces: 2, isActive: true },
  { code: "MGA", name: "Ariary Malagasy", symbol: "MGA", decimalPlaces: 1, isActive: true },
  { code: "MWK", name: "Kwacha Malawi", symbol: "MWK", decimalPlaces: 2, isActive: true },
  { code: "MYR", name: "Ringgit Malaysia", symbol: "MYR", decimalPlaces: 2, isActive: true },
  { code: "MVR", name: "Rufiyaa Maldives", symbol: "MVR", decimalPlaces: 2, isActive: true },
  { code: "MRO", name: "Ouguiya Mauritania", symbol: "MRO", decimalPlaces: 1, isActive: true },
  { code: "MUR", name: "Rupee Mauritius", symbol: "MUR", decimalPlaces: 2, isActive: true },
  { code: "MXN", name: "Peso Mexico", symbol: "MX$", decimalPlaces: 2, isActive: true },
  { code: "MDL", name: "Leu Moldova", symbol: "MDL", decimalPlaces: 2, isActive: true },
  { code: "MZN", name: "Metical Mozambique", symbol: "MZN", decimalPlaces: 2, isActive: true },
  { code: "MMK", name: "Kyat Myanmar", symbol: "MMK", decimalPlaces: 2, isActive: true },
  { code: "MNT", name: "Tugrik Mông Cổ", symbol: "MNT", decimalPlaces: 2, isActive: true },
  { code: "NOK", name: "Krone Na Uy", symbol: "NOK", decimalPlaces: 2, isActive: true },
  { code: "ZAR", name: "Rand Nam Phi", symbol: "ZAR", decimalPlaces: 2, isActive: true },
  { code: "SSP", name: "Bảng Nam Sudan", symbol: "SSP", decimalPlaces: 2, isActive: true },
  { code: "NAD", name: "Đô la Namibia", symbol: "NAD", decimalPlaces: 2, isActive: true },
  { code: "NPR", name: "Rupee Nepal", symbol: "NPR", decimalPlaces: 2, isActive: true },
  { code: "XPF", name: "Franc CFP", symbol: "CFPF", decimalPlaces: 0, isActive: true },
  { code: "NZD", name: "Đô la New Zealand", symbol: "NZ$", decimalPlaces: 2, isActive: true },
  { code: "RUB", name: "Ruble Nga", symbol: "RUB", decimalPlaces: 2, isActive: true },
  { code: "JPY", name: "Yên Nhật", symbol: "¥", decimalPlaces: 0, isActive: true },
  { code: "NIO", name: "Córdoba Nicaragua", symbol: "NIO", decimalPlaces: 2, isActive: true },
  { code: "NGN", name: "Naira Nigeria", symbol: "NGN", decimalPlaces: 2, isActive: true },
  { code: "OMR", name: "Rial Oman", symbol: "OMR", decimalPlaces: 3, isActive: true },
  { code: "PKR", name: "Rupee Pakistan", symbol: "PKR", decimalPlaces: 2, isActive: true },
  { code: "PAB", name: "Balboa Panama", symbol: "PAB", decimalPlaces: 2, isActive: true },
  { code: "PGK", name: "Kina Papua New Guinea", symbol: "PGK", decimalPlaces: 2, isActive: true },
  { code: "PYG", name: "Guarani Paraguay", symbol: "PYG", decimalPlaces: 0, isActive: true },
  { code: "PEN", name: "Sol Peru", symbol: "PEN", decimalPlaces: 2, isActive: true },
  { code: "PHP", name: "Peso Phillipines", symbol: "₱", decimalPlaces: 2, isActive: true },
  { code: "QAR", name: "Riyal Qatar", symbol: "QAR", decimalPlaces: 2, isActive: true },
  { code: "KYD", name: "Đô la Quần đảo Cayman", symbol: "KYD", decimalPlaces: 2, isActive: true },
  { code: "FKP", name: "Bảng Quần đảo Falkland", symbol: "FKP", decimalPlaces: 2, isActive: true },
  { code: "SBD", name: "Đô la Quần đảo Solomon", symbol: "SBD", decimalPlaces: 2, isActive: true },
  { code: "RON", name: "Leu Romania", symbol: "RON", decimalPlaces: 2, isActive: true },
  { code: "RWF", name: "Franc Rwanda", symbol: "RWF", decimalPlaces: 0, isActive: true },
  { code: "WST", name: "Tala Samoa", symbol: "WST", decimalPlaces: 2, isActive: true },
  { code: "RSD", name: "Dinar Serbia", symbol: "RSD", decimalPlaces: 2, isActive: true },
  { code: "SCR", name: "Rupee Seychelles", symbol: "SCR", decimalPlaces: 2, isActive: true },
  { code: "SLL", name: "Leone Sierra Leone", symbol: "SLL", decimalPlaces: 2, isActive: true },
  { code: "SGD", name: "Đô la Singapore", symbol: "SGD", decimalPlaces: 2, isActive: true },
  { code: "SOS", name: "Shilling Somalia", symbol: "SOS", decimalPlaces: 2, isActive: true },
  { code: "LKR", name: "Rupee Sri Lanka", symbol: "LKR", decimalPlaces: 2, isActive: true },
  { code: "SHP", name: "Bảng St. Helena", symbol: "SHP", decimalPlaces: 2, isActive: true },
  { code: "SDG", name: "Bảng Sudan", symbol: "SDG", decimalPlaces: 2, isActive: true },
  { code: "SRD", name: "Đô la Suriname", symbol: "SRD", decimalPlaces: 2, isActive: true },
  { code: "SYP", name: "Bảng Syria", symbol: "SYP", decimalPlaces: 2, isActive: true },
  { code: "STD", name: "Dobra São Tomé và Príncipe", symbol: "STD", decimalPlaces: 2, isActive: true },
  { code: "CZK", name: "Koruna Séc", symbol: "CZK", decimalPlaces: 2, isActive: true },
  { code: "TJS", name: "Somoni Tajikistan", symbol: "TJS", decimalPlaces: 2, isActive: true },
  { code: "TZS", name: "Shilling Tanzania", symbol: "TZS", decimalPlaces: 2, isActive: true },
  { code: "THB", name: "Baht Thái Lan", symbol: "THB", decimalPlaces: 2, isActive: true },
  { code: "TRY", name: "Lira Thổ Nhĩ Kỳ", symbol: "TRY", decimalPlaces: 2, isActive: true },
  { code: "CHE", name: "WIR Euro", symbol: "CHE", decimalPlaces: 2, isActive: true },
  { code: "SEK", name: "Krona Thụy Điển", symbol: "SEK", decimalPlaces: 2, isActive: true },
  { code: "TOP", name: "Paʻanga Tonga", symbol: "TOP", decimalPlaces: 2, isActive: true },
  { code: "TTD", name: "Đô la Trinidad và Tobago", symbol: "TTD", decimalPlaces: 2, isActive: true },
  { code: "KPW", name: "Won Triều Tiên", symbol: "KPW", decimalPlaces: 2, isActive: true },
  { code: "CNY", name: "Nhân dân tệ Trung Quốc", symbol: "CN¥", decimalPlaces: 2, isActive: true },
  { code: "TND", name: "Dinar Tunisia", symbol: "TND", decimalPlaces: 3, isActive: true },
  { code: "TMT", name: "Manat Turkmenistan", symbol: "TMT", decimalPlaces: 2, isActive: true },
  { code: "UGX", name: "Shilling Uganda", symbol: "UGX", decimalPlaces: 0, isActive: true },
  { code: "UAH", name: "Hryvnia Ukraina", symbol: "UAH", decimalPlaces: 2, isActive: true },
  { code: "UYI", name: "Peso en Unidades Indexadas Uruguay", symbol: "UYI", decimalPlaces: 0, isActive: true },
  { code: "UZS", name: "Sum Uzbekistan", symbol: "UZS", decimalPlaces: 2, isActive: true },
  { code: "VUV", name: "Vatu Vanuatu", symbol: "VUV", decimalPlaces: 0, isActive: true },
  { code: "VEF", name: "Bolívar Venezuela", symbol: "VEF", decimalPlaces: 2, isActive: true },
  { code: "VND", name: "Đồng Việt Nam", symbol: "₫", decimalPlaces: 0, isActive: true },
  { code: "YER", name: "Rial Yemen", symbol: "YER", decimalPlaces: 2, isActive: true },
  { code: "ZMK", name: "Kwacha Zambia", symbol: "ZMK", decimalPlaces: 2, isActive: true },
  { code: "TWD", name: "Đô la Đài Loan mới", symbol: "NT$", decimalPlaces: 2, isActive: true },
  { code: "HKD", name: "Đô la Hồng Kong", symbol: "HK$", decimalPlaces: 2, isActive: true },
  { code: "MOP", name: "Pataca Ma Cao", symbol: "MOP", decimalPlaces: 2, isActive: true },
  { code: "SAR", name: "Riyal Ả Rập Xê Út", symbol: "SAR", decimalPlaces: 2, isActive: true },
  { code: "INR", name: "Rupee Ấn Độ", symbol: "₹", decimalPlaces: 2, isActive: true }
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