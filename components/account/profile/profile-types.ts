//user for dummy/demo
export type DemoPhone = {
  id: string;
  phone: string;
  label: string;
  verified: boolean;
  primary: boolean;
};

export type DemoAddress = {
  id: string;
  label: string;
  recipientName: string;
  phone: string;
  countryCode: string;
  addressLine1: string;
  addressLine2: string;
  locality: string;
  administrativeArea: string;
  postalCode: string;
  primary: boolean;
};

export type DemoContactMethod = {
  id: string;
  type: "Zalo" | "Messenger" | "WhatsApp" | "Telegram" | "Other";
  value: string;
  isPublic: boolean;
  primary: boolean;
};

export type CountryOption = {
  code: string;
  name: string;
};
