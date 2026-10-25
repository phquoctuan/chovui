import { z } from "zod";

export const optionalText = z
  .string()
  .trim()
  .optional();

export const optionalPositiveInterger = z.coerce
  .number()
  .int("Phải là số nguyên")
  .positive("Giá trị phải > 0")

export const optionalStringPrice = z
  .string()
  .trim()
  .regex(/^\d+(\.\d{1,7})?$/, "Giá tiền không hợp lệ")
  .refine(
    (value) => /[1-9]/.test(value),
    "Giá tiền phải lớn hơn 0",
  );

export const optionalPrice = z.coerce
  .number({
    error: "Giá tiền không hợp lệ",
  })
  .positive("Giá tiền phải lớn hơn 0")
  .max(
    9999999999999999.9999,
    "Giá tiền vượt quá giới hạn cho phép",
  )
  .refine(
    (value) => Number.isFinite(value) &&
      Number(value.toFixed(4)) === value,
    "Giá tiền chỉ được có tối đa 4 chữ số thập phân",
  )
