// @/lib/validations/listing/listing-templates.ts
import { z } from "zod";
import { baseListingSchema } from "./listing-base-schema";
import {realEstateAttributesSchema} from "./form-template-schema/real-estate";
import {vehicleAttributesSchema} from "./form-template-schema/vehicle";

// Định nghĩa kiểu dữ liệu cho từng field
export type AttributeFieldConfig = {
  name: string;
  label: string;
  type: "text" | "number" | "select" | "boolean";
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string | number }[];
  unit?: string;
  // Các quy tắc validate bổ sung nếu muốn
  min?: number; // Dùng chung cho số (giá trị) và chữ (độ dài)
  max?: number;
};

export type CategoryTemplateConfig = {
  title: string;
  fields: AttributeFieldConfig[];
};

// 1. NƠI DUY NHẤT KHAI BÁO CÁC TRƯỜNG DỮ LIỆU ĐỘNG CHO TỪNG TEMPLATE
export const CATEGORY_TEMPLATES: Record<string, CategoryTemplateConfig> = {
  "real-estate": realEstateAttributesSchema,
  "real-estate_buy-sell": realEstateAttributesSchema,

  "vehicles": vehicleAttributesSchema,
  "vehicles_cars": vehicleAttributesSchema,
  // Template mặc định nếu không khớp
  default: {
    title: "Thông tin chi tiết khác",
    fields: [],
  },
};

// 2. HÀM TỰ ĐỘNG SINH ZOD SCHEMA TỪ CẤU HÌNH TRÊN (Không cần khai báo thủ công nữa)
// Hàm tự động sinh Zod Schema dựa trên cấu hình chung min/max
export function getAttributesSchema(templateName: string | null | undefined) {
  if (!templateName) return z.object({});

  const rootTemplate = templateName.split("/")[0] || templateName;
  const config = CATEGORY_TEMPLATES[rootTemplate] || CATEGORY_TEMPLATES.default;
  const shape: Record<string, z.ZodTypeAny> = {};

  config.fields.forEach((field) => {
    // ==========================================
    // 1. LOGIC CHO KIỂU NUMBER
    // ==========================================
    if (field.type === "number") {
      let numValidator = z.coerce.number({
        message: `${field.label} phải là số hợp lệ`,
      });

      if (field.min !== undefined) {
        numValidator = numValidator.min(field.min, `${field.label} phải lớn hơn hoặc bằng ${field.min}`);
      }
      if (field.max !== undefined) {
        numValidator = numValidator.max(field.max, `${field.label} không được vượt quá ${field.max}`);
      }

      const finalNumberSchema = field.required
        ? numValidator
        : numValidator.optional().nullable();

      shape[field.name] = z.preprocess(
        (val) => (val === "" || val === null || val === undefined ? undefined : val),
        finalNumberSchema
      );
    }

    // ==========================================
    // 2. LOGIC CHO KIỂU TEXT
    // ==========================================
    else if (field.type === "text") {
      let strValidator = z.string();

      if (field.required) {
        strValidator = strValidator.min(1, `${field.label} không được để trống`);
      }
      if (field.min !== undefined) {
        strValidator = strValidator.min(field.min, `${field.label} phải có ít nhất ${field.min} ký tự`);
      }
      if (field.max !== undefined) {
        strValidator = strValidator.max(field.max, `${field.label} không được vượt quá ${field.max} ký tự`);
      }

      if (field.required) {
        shape[field.name] = strValidator;
      } else {
        shape[field.name] = z.preprocess(
          (val) => (val === "" || val === null || val === undefined ? undefined : val),
          strValidator.optional().nullable()
        );
      }
    }

    // ==========================================
    // 3. LOGIC CHO KIỂU SELECT hoặc BOOLEAN
    // ==========================================
    else if (field.type === "select" || field.type === "boolean") {
      if (!field.required) {
        shape[field.name] = z.any().optional().nullable();
      } else {
        shape[field.name] = z.preprocess(
          (val) => (val === "" || val === null || val === undefined ? undefined : val),
          z.any().refine((val) => val !== undefined && val !== "", {
            message: `Vui lòng chọn ${field.label.toLowerCase()}`,
          })
        );
      }
    }
  });

  return z.object(shape);
}

// 3. HÀM TÍCH HỢP VÀO HÀM TẠO LISTING SCHEMA TỔNG THỂ CỦA BẠN
export function getCreateListingSchema(template: string | null | undefined) {
  const specificAttributesSchema = getAttributesSchema(template);

  return baseListingSchema.extend({
    attributes: specificAttributesSchema,
  });
}
