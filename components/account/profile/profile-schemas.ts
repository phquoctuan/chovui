import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Họ tên phải có ít nhất 2 ký tự.")
    .max(100, "Họ tên không được quá 100 ký tự."),

  avatarUrl: z
    .string()
    .nullable()
    .optional(),
    
  nationalityCode: z.string(),

  defaultCountryCode: z.string().length(2, "Vui lòng chọn quốc gia mặc định."),
});

export const phoneSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(5, "Số điện thoại quá ngắn.")
    .max(30, "Số điện thoại quá dài."),
  label: z.string().trim().max(40),//.default("Số phụ"),
});

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

export const contactMethodSchema = z.object({
  type: z.enum(["Zalo", "Messenger", "WhatsApp", "Telegram", "Other"]),
  value: z.string().trim().min(1, "Vui lòng nhập thông tin liên hệ."),
  isPublic: z.boolean(),
  primary: z.boolean(),
});

export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;
export type PhoneFormInput = z.input<typeof phoneSchema>;
export type PhoneFormValues = z.output<typeof phoneSchema>;
export type AddressFormValues = z.infer<typeof addressSchema>;
export type ContactMethodFormValues = z.infer<typeof contactMethodSchema>;
