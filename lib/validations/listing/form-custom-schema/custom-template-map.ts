import { z } from "zod";
import { realEstateCustomAttributesSchema } from "./real-estate";
import { vehicleCustomAttributesSchema } from "./vehicle";

// 3. Schema attributes mặc định khi không có template hoặc template không khớp (Object rỗng, không nhận field linh tinh)
//như z.record(z.string(), z.any())
const defaultAttributesSchema = z.object({});
// 2. Mapping giữa template/root category với schema tương ứng
export const CATEGORY_CUSTOM_TEMPLATES: Record<string, z.ZodObject<any>> = {
  //  "default": defaultAttributesSchema,

  // "real-estate": realEstateCustomAttributesSchema,
  // "real-estate_buy-sell": realEstateCustomAttributesSchema,

  // "vehicles": vehicleCustomAttributesSchema,
  "vehicles_cars": vehicleCustomAttributesSchema,
};

// 4. Hàm Factory trả về Custom Schema cho attribute
export function getAttributeCustomSchema(template: string | null | undefined) {
  // Nếu không truyền template, trả về schema với attributes rỗng
  if (!template) {
    return undefined;
  }
  return CATEGORY_CUSTOM_TEMPLATES[template] ?? undefined;
}
export function hasCustomAttributesSchema(template: string | null | undefined): boolean {
  if (!template) {
    return false;
  }
  return CATEGORY_CUSTOM_TEMPLATES[template]? true : false;
}