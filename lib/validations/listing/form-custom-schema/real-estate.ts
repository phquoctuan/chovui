import { z } from "zod";
export const realEstateCustomAttributesSchema = z.object({
  area: z.coerce.number().positive("Diện tích phải lớn hơn 0"),
  bedrooms: z.coerce.number().int().nonnegative("Số phòng không hợp lệ").optional(),
  bathrooms: z.coerce.number().int().nonnegative("Số phòng WC không hợp lệ").optional(),
  legalStatus: z.string().optional(), // Sổ hồng, sổ đỏ...
});