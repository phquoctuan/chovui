import { z } from "zod";
// import type { sellerAddresses } from "@/db/schema";

const phoneValue = z.string().trim().min(5, "Số điện thoại quá ngắn.").max(30, "Số điện thoại quá dài.");

export const phoneCreateSchema = z.object({
  phone: phoneValue,
  label: z.string().trim().max(40).default("Số phụ"),
});
export const phoneUpdateSchema = z.object({
  phone: phoneValue,
  label: z.string().trim().max(40),
});

// export const addressSchema = z.object({
//   label: z.string().trim().min(1).max(80),
//   recipientName: z.string().trim().min(2).max(100),
//   phone: z.string().trim().max(30),
//   countryCode: z.string().length(2).regex(/^[A-Za-z]{2}$/).transform((v) => v.toUpperCase()),
//   addressLine1: z.string().trim().min(1).max(200),
//   addressLine2: z.string().trim().max(200),
//   locality: z.string().trim().max(100),
//   administrativeArea: z.string().trim().max(100),
//   postalCode: z.string().trim().max(30),
//   primary: z.boolean(),
// });

// 1. Zod SellerAddress validation schema cho dữ liệu gửi lên (Form / API Payload) OK
export const SellerAddressValidate = z
  .object({
    label: z.string().trim().nullable().default(""),
    recipientName: z.string().trim().nullable().default(""),
    phone: z
      .string()
      .trim()
      .refine((value) => value === "" || /^[0-9+.-]{8,30}$/.test(value), "Số điện thoại không hợp lệ")
      .optional()
      .nullable(),
    countryCode: z.string().length(2, "Mã quốc gia phải có 2 ký tự"),
    regionId: z.number().int().optional().nullable(),
    countyId: z.number().int().optional().nullable(),
    wardId: z.number().int().optional().nullable(),
    location: z.string().trim().max(255, "Địa chỉ tối đa 255 ký tự").optional().nullable(),
    postalCode: z.string().default(""),
    primary: z.boolean().default(false),
  })
  .superRefine((data, ctx) => {
    if (data.regionId == null && data.countyId == null && data.wardId==null && (!data.location || data.location.length < 1)) {
      ctx.addIssue({
        code: "custom",
        path: ["location"],
        message: "Vui lòng nhập địa chỉ cụ thể",
      });
    }
  });
// Hoặc kiểu dữ liệu sau khi được Zod validate: dùng khai báo kiểu dữ liệu lúc gọi Update
export type SellerAddressValidated = z.infer<typeof SellerAddressValidate>;
export type SellerAddressInput = z.input<typeof SellerAddressValidate>;
// export type SellerAddressOutput = z.output<typeof SellerAddressValidate>;

export const contactMethodSchema = z.object({
  type: z.enum(["Zalo", "Messenger", "WhatsApp", "Telegram", "Other"]),
  value: z.string().trim().min(1).max(300),
  isPublic: z.boolean(),
  primary: z.boolean(),
});

export const phoneVerificationSchema = z.object({
  action: z.enum(["send", "confirm"]),
  code: z
    .string()
    .regex(/^\d{6}$/)
    .optional(),
});
