import { z } from "zod";
import { baseListingSchema } from "./listing-base-schema";
import { CATEGORY_TEMPLATES } from "./form-template-schema/template-map";
import { getAttributeCustomSchema } from "./form-custom-schema/custom-template-map";

// 2. HÀM TỰ ĐỘNG SINH ZOD SCHEMA HOẶC LẤY CUSTOM SCHEMA
export function getAttributesSchema(templateName: string | null | undefined) {
  if (!templateName) return z.object({});

  // const template = templateName.split("/")[0] || templateName;
  const template = templateName;

  const customSchema = getAttributeCustomSchema(template);
  if (customSchema) {
    return customSchema;
  }

  const config = CATEGORY_TEMPLATES[template] || CATEGORY_TEMPLATES.default;
  
  // Hỗ trợ cả schema cũ (fields[]) hoặc schema mới gom nhóm (sections[])
  const fields = config.fields || config.sections?.flatMap((s: any) => s.fields) || [];

  const shape: Record<string, z.ZodType> = {};

  fields.forEach((field: any) => {
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

      const finalNumberSchema = field.required ? numValidator : numValidator.optional().nullable();

      shape[field.name] = z.preprocess(
        (val) => (val === "" || val === null || val === undefined ? undefined : val),
        finalNumberSchema,
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
          strValidator.optional().nullable(),
        );
      }
    }

    // ==========================================
    // 3. LOGIC CHO KIỂU SELECT, BOOLEAN, RADIO, BUTTON-GROUP
    // ==========================================
    else if (field.type === "select" || field.type === "boolean" || field.type === "radio" || field.type === "button-group") {
      if (!field.required) {
        shape[field.name] = z.any().optional().nullable();
      } else {
        shape[field.name] = z.preprocess(
          (val) => (val === "" || val === null || val === undefined ? undefined : val),
          z.any().refine((val) => val !== undefined && val !== "" && val !== null, {
            message: `Vui lòng chọn ${field.label.toLowerCase()}`,
          }),
        );
      }
    }
  });

  return z.object(shape);
}

// 3. HÀM TÍCH HỢP VÀO HÀM TẠO LISTING SCHEMA TỔNG THỂ
export function getCreateListingSchema(template: string | null | undefined) {
  const specificAttributesSchema = getAttributesSchema(template);

  return baseListingSchema.extend({
    attributes: specificAttributesSchema,
  });
}
