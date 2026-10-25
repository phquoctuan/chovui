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
});

export type SellerProfileInput = z.infer<typeof sellerProfileSchema>;
