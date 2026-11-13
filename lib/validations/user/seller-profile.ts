import { z } from "zod";

export const sellerProfileSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Họ tên phải có ít nhất 2 ký tự.")
    .max(100, "Họ tên không được quá 100 ký tự.")
    .optional(),

  avatarUrl: z
    .string()
    .trim()
    .nullable()
    .optional(),

  nationalityCode: z
    .string()
    .length(2, "Mã quốc tịch phải có 2 ký tự.")
    .regex(/^[A-Za-z]{2}$/, "Mã quốc tịch không hợp lệ.")
    .transform((value) => value.toUpperCase())
    .nullable()
    .optional(),

  defaultCountryCode: z
    .string()
    .length(2, "Mã quốc gia phải có 2 ký tự.")
    .regex(/^[A-Za-z]{2}$/, "Mã quốc gia không hợp lệ.")
    .transform((value) => value.toUpperCase())
    .optional(),

  defaultCurrencyCode: z.string()
    .min(1, "Vui lòng chọn tiền tệ mặc định.")
    .max(3, "Mã tiền tệ không được vượt quá 3 ký tự.")
    .optional(),
});

/*
export const personalInfoSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Họ tên phải có ít nhất 2 ký tự.")
    .max(100, "Họ tên không được quá 100 ký tự."),

  avatarUrl: z
    .string()
    .trim()
    .nullable()
    .optional(),
    
    nationalityCode: z
    .string()
    .length(2, "Mã quốc tịch phải có 2 ký tự.")
    .regex(/^[A-Za-z]{2}$/, "Mã quốc tịch không hợp lệ.")
    .transform((value) => value.toUpperCase())
    .nullable(),

    defaultCountryCode: z
    .string()
    .length(2, "Mã quốc gia phải có 2 ký tự.")
    .regex(/^[A-Za-z]{2}$/, "Mã quốc gia không hợp lệ.")
    .transform((value) => value.toUpperCase()),

    defaultCurrencyCode: z.string()
    .min(1, "Vui lòng chọn tiền tệ mặc định.")
    .max(3, "Mã tiền tệ không được vượt quá 3 ký tự."),
});
*/

export const personalInfoSchema = sellerProfileSchema.required({//các field khác vẫn còn
  fullName: true,
  nationalityCode: true,
  defaultCountryCode: true,
  defaultCurrencyCode: true,
});

export const phoneSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(5, "Số điện thoại quá ngắn.")
    .max(30, "Số điện thoại quá dài."),
  label: z.string().trim().max(40),//.default("Số phụ"),
});

/*
export const addressSchema = z.object({
  label: z.string().trim().min(1, "Vui lòng nhập tên địa chỉ."),
  recipientName: z.string().trim().min(2, "Vui lòng nhập người nhận."),
  phone: z.string().trim().max(30),
  countryCode: z.string().length(2, "Vui lòng chọn quốc gia."),
  addressLine1: z.string().trim().min(1, "Vui lòng nhập địa chỉ chính."),
  addressLine2: z.string().trim(),
  locality: z.string().trim(),
  administrativeArea: z.string().trim(),
  postalCode: z.string().trim(),
  primary: z.boolean(),
});
*/
export const contactMethodSchema = z.object({
  type: z.enum(["Zalo", "Messenger", "WhatsApp", "Telegram", "Other"]),
  value: z.string().trim().min(1, "Vui lòng nhập thông tin liên hệ."),
  isPublic: z.boolean(),
  primary: z.boolean(),
});

export type SellerProfileInput = z.infer<typeof sellerProfileSchema>;
export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;
export type PhoneFormInput = z.input<typeof phoneSchema>;
export type PhoneFormValues = z.output<typeof phoneSchema>;
// export type AddressFormValues = z.infer<typeof addressSchema>;
export type ContactMethodFormValues = z.infer<typeof contactMethodSchema>;