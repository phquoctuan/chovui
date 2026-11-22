import { z } from "zod";
const currentYear = new Date().getFullYear();

export const vehicleCustomAttributesSchema = z.object({
  brand: z.string().trim().min(1, "Vui lòng chọn hãng xe"),
  model: z.string().trim().min(1, "Vui lòng chọn dòng xe"),
  year: z.preprocess(
    (val) => (val === "" || val === undefined ? undefined : Number(val)),
    z
      .number()
      .int("Năm sản xuất phải là số nguyên")
      .min(1900, "Năm sản xuất không nhỏ hơn 1900")
      .max(currentYear, `Năm sản xuất không được vượt quá ${currentYear}`)
      .optional(),
  ),
  mileage: z.coerce.number().nonnegative("Số km không được âm").optional(),
});
