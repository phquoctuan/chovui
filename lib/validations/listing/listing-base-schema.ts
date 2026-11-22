import { z } from "zod";
///////////////////////////////////////////////////////////////////////////////////////////////////
// Định nghĩa các hằng số hoặc enum tương ứng với DB
export const statusEnumValues = ["draft", "payment", "pending", "publish", "expired", "rejected", "archived"] as const;
export const priceTypeEnumValues = ["fixed", "negotiable", "contact", "free"] as const;
export const conditionEnumValues = ["new", "used", "refurbished"] as const;

// 1. Schema dành cho API Tạo mới (Create Listing)
export const baseListingSchema = z.object({
  title: z.string({message: "Tiêu đề là bắt buộc" }).trim().min(5, "Tiêu đề phải có ít nhất 5 ký tự").max(255, "Title must be at most 255 characters."),
  description: z.string().optional().nullable(),
  categoryId: z.coerce
    .number({ message: "Danh mục không được để trống" })
    .int("ID danh mục phải là số nguyên")
    .positive("ID danh mục không hợp lệ"),
  priceType: z.enum(priceTypeEnumValues).default("fixed"),
  price: z.preprocess(
    (val) => {
      if (val === "" || val === null || val === undefined) {
        return null;
      }
      return String(val);
    },
    z
      .string()
      .regex(/^\d+(\.\d{1,8})?$/, "Giá tiền không hợp lệ")
      .refine((val) => Number(val) > 0, "Giá tiền phải lớn hơn 0")
      .nullable(),
  ),
  currencyCode: z.string({ message: "Tiền tệ là bắt buộc" }).default("PI"),

  condition: z.enum(conditionEnumValues).optional().nullable(),
  quantity: z.coerce.number().int("Số lượng phải là số nguyên").min(1, "Số lượng tối thiểu là 1").default(1),

  countryCode: z.string({ message: "Mã quốc gia là bắt buộc" }).length(2, "Mã quốc gia phải có đúng 2 ký tự (VD: VN, US)"),
  regionId: z.number().int().optional().nullable(),
  countyId: z.number().int().optional().nullable(),
  wardId: z.number().int().optional().nullable(),
  location: z.string().max(255, "Địa chỉ chi tiết tối đa 255 ký tự").optional().nullable(),
  postalCode: z.string().max(20, "Mã bưu điện tối đa 20 ký tự").optional().nullable(),

  latitude: z.number().min(-90).max(90, "Vĩ độ không hợp lệ").optional().nullable(),
  longitude: z.number().min(-180).max(180, "Kinh độ không hợp lệ").optional().nullable(),
  slug: z.string({ message: "Slug là bắt buộc" }).min(3, "Slug phải có ít nhất 3 ký tự").max(255, "Slug tối đa 255 ký tự"),
  status: z.enum(statusEnumValues).default("draft").optional(),
  isDisabled: z.boolean().default(false).optional(),

  paid: z.boolean().default(false).optional(),
  paidAmount: z.string().optional(),

  attributes: z.record(z.string(), z.any()).default({}),
  // imagesCount: z.number("Vui lòng tải lên ít nhất 1 hình ảnh.").int().min(1, "Vui lòng tải lên ít nhất 1 hình ảnh"),
});

// Schema dành cho API Cập nhật (Update Listing) - Toàn bộ các trường đều là optional
export const updateListingBodySchema = baseListingSchema.partial();

// TypeScript Types suy ra từ Zod Schema để dùng cho Controller/Frontend
export type ListingCreateInput = z.infer<typeof baseListingSchema>;
export type ListingUpdateInput = z.infer<typeof updateListingBodySchema>;


//==========================================reserve===============//////////////////////////=========

//////////////////usage/////////////////
// // Bước 1: Lấy schema động chính xác cho category đó
// const dynamicSchema = getCreateListingSchema(categoryId);
// // Bước 3: Parse và Validate toàn bộ object
// const result = dynamicSchema.safeParse(rawFormData);
// if (result.success) {
//     const validatedData = result.data;
// };
