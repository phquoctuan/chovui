import type {
  CountryOption,
  DemoAddress,
  DemoContactMethod,
  DemoPhone,
} from "./profile-types";

export const COUNTRIES: CountryOption[] = [
  { code: "VN", name: "Việt Nam" },
  { code: "US", name: "Hoa Kỳ" },
  { code: "JP", name: "Nhật Bản" },
  { code: "KR", name: "Hàn Quốc" },
  { code: "SG", name: "Singapore" },
  { code: "TH", name: "Thái Lan" },
  { code: "AU", name: "Úc" },
  { code: "GB", name: "Vương quốc Anh" },
  { code: "CA", name: "Canada" },
  { code: "DE", name: "Đức" },
];

export function getCountryName(code: string) {
  return COUNTRIES.find((country) => country.code === code)?.name ?? code;
}

export const INITIAL_PHONES: DemoPhone[] = [
  {
    id: "phone-1",
    phone: "+84 912 345 678",
    label: "Số chính",
    verified: true,
    primary: true,
  },
  {
    id: "phone-2",
    phone: "+84 987 654 321",
    label: "Số phụ",
    verified: false,
    primary: false,
  },
];

export const INITIAL_ADDRESSES: DemoAddress[] = [
  {
    id: "address-1",
    label: "Nhà riêng",
    recipientName: "Nguyễn Văn A",
    phone: "+84 912 345 678",
    countryCode: "VN",
    addressLine1: "123 Nguyễn Trãi",
    addressLine2: "",
    locality: "TP. Hồ Chí Minh",
    administrativeArea: "",
    postalCode: "",
    primary: true,
  },
];

export const INITIAL_CONTACT_METHODS: DemoContactMethod[] = [
  {
    id: "contact-1",
    type: "Zalo",
    value: "0912345678",
    isPublic: true,
    primary: true,
  },
  {
    id: "contact-2",
    type: "Messenger",
    value: "",
    isPublic: false,
    primary: false,
  },
];
