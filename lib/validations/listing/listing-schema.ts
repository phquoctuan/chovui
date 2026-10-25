import { z } from "zod";
import { optionalText, optionalPositiveInterger, optionalPrice, optionalStringPrice } from "../common-validation";
import { PAGE_SIZE_OPTIONS, DEFAULT_PAGE_SIZE } from "@/const";

export const listingQuerySchema = z
  .object({
    q: optionalText,
    country: optionalPositiveInterger,
    category: optionalPositiveInterger,
    location: optionalPositiveInterger,
    minPrice: optionalStringPrice,
    maxPrice: optionalStringPrice,
    page: z
      .string()
      .regex(/^\d+$/, "page phải là số nguyên dương")
      .optional()
      .default("1"),
    pageSize: z
      .string()
      .regex(/^\d+$/, "pageSize phải là số nguyên")
      .optional()
      .default(String(DEFAULT_PAGE_SIZE)),
  })
  .superRefine((data, context) => {
    const page = Number(data.page);
    const pageSize = Number(data.pageSize);

    if (page < 1) {
      context.addIssue({
        code: "custom",
        path: ["page"],
        message: "page phải lớn hơn hoặc bằng 1",
      });
    }

    if (
      !PAGE_SIZE_OPTIONS.includes(
        pageSize as (typeof PAGE_SIZE_OPTIONS)[number],
      )
    ) {
      context.addIssue({
        code: "custom",
        path: ["pageSize"],
        message: `pageSize phải thuộc: ${PAGE_SIZE_OPTIONS.join(", ")}`,
      });
    }

    if (
      data.minPrice !== undefined &&
      data.maxPrice !== undefined &&
      Number(data.minPrice) > Number(data.maxPrice)
    ) {
      context.addIssue({
        code: "custom",
        path: ["minPrice"],
        message: "minPrice không được lớn hơn maxPrice",
      });
    }
  });

export type ListingQueryInput = z.input<typeof listingQuerySchema>;
export type ValidatedListingQuery = z.output<typeof listingQuerySchema>;
///////////////////////////////////////////////////////////////////////////////////////////////////NEW
// 1. Schema cho các trường chung của mọi tin đăng
const baseListingSchema = z.object({
  title: z.string().min(5, "Tiêu đề phải có ít nhất 5 ký tự").max(300),
  categoryId: z.number("Danh mục không được để trống"),
  description: z.string().optional(),
  price: z.coerce.number().positive("Giá tiền phải lớn hơn 0"),
  priceType: z.enum(["fixed", "negotiable", "contact"]).default("fixed"),
  currency: z.string().default("VND"),
  quantity: z.coerce.number().int().positive().default(1),
  country: z.string().default("VN"),
  location: z.string().min(1, "Vui lòng chọn khu vực"),
  region: z.string().optional(),
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),
});

// 2. Schema attributes riêng cho từng nhóm danh mục chính
const realEstateAttributesSchema = z.object({
  area: z.coerce.number().positive("Diện tích phải lớn hơn 0"),
  bedrooms: z.coerce.number().int().nonnegative().optional(),
  toilets: z.coerce.number().int().nonnegative().optional(),
  legal: z.string().optional(), // Sổ hồng, sổ đỏ...
});

const vehicleAttributesSchema = z.object({
  brand: z.string().min(1, "Vui lòng chọn hãng xe"),
  year: z.coerce.number().int().min(1900).max(2026),
  km: z.coerce.number().nonnegative("Số km không được âm"),
});

// 3. Mapping giữa categoryId (hoặc root category) với schema tương ứng
const attributeSchemaMap: Record<string, z.ZodObject<any>> = {
  'real-estate': realEstateAttributesSchema,
  'vehicles': vehicleAttributesSchema,
  // Thêm các category khác vào đây...
};

// 4. Hàm Factory trả về Schema hoàn chỉnh dựa vào categoryId được gửi lên
export function getCreateListingSchema(categoryId: string) {
  // Lấy ra danh mục gốc (ví dụ: 'real-estate/buy-sell' -> 'real-estate')
  const rootCategory = categoryId.split("/")[0] || categoryId;

  // Lấy schema tương ứng, nếu không có thì mặc định là object tự do hoặc rỗng
  const specificAttributesSchema =
    attributeSchemaMap[rootCategory] || z.record(z.string(), z.any());

  return baseListingSchema.extend({
    attributes: specificAttributesSchema,
  });
}

//////////////////usage/////////////////
// // Bước 1: Lấy schema động chính xác cho category đó
// const dynamicSchema = getCreateListingSchema(categoryId);
// // Bước 3: Parse và Validate toàn bộ object
// const result = dynamicSchema.safeParse(rawFormData);
// if (result.success) {
//     const validatedData = result.data;
// };


   