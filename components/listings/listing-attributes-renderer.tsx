// @/components/listings/listing-attributes-renderer.tsx
"use client";

import { UseFormReturn, useWatch } from "react-hook-form";
import { CATEGORY_TEMPLATES } from "@/lib/validations/listing/form-template-schema/template-map";
import { XTextInput } from "../xInput/XTextInput";
import { XNumberInput } from "../xInput/XNumberInput";
import { XSelectInput } from "../xInput/XSelectInput";
import { XSelectLookupInput } from "../xInput/XSelectLookupInput";
import { XButtonGroupInput } from "../xInput/XButtonGroupInput";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { findWatchTemplateFieldName } from "@/lib/validations/listing/form-template-schema/template-map";

import { useEffect, useMemo } from "react";

import { CUSTOM_ATT_TEMPLATES_COMPONENTS } from "@/components/listings/templates/create/attributes-templates";
type AttributesRendererProps = {
  templateName: string | null;
  form: UseFormReturn<any>;
};
interface ListingAttributesRendererProps {
  templateName: string | null;
  form: any;
  watchField?: string; // Tên field quyết định template
}

export function ListingAttributesRenderer({ templateName, form }: AttributesRendererProps) {
  const template = templateName ?? "default";

  // 1. Tự động quét tìm xem template này có field nào được đánh dấu watchTemplate không
  const watchFieldName = findWatchTemplateFieldName(template);

  // 2. Lắng nghe sự thay đổi của field đó bên trong attributes của form theo thời gian thực
  const subTypeSelected = useWatch({
    control: form.control,
    name: watchFieldName ? `attributes.${watchFieldName}` : "",
  });

  // 3. Xác định template thực tế để render giao diện
  const activeTemplate = subTypeSelected ? `${template}_${subTypeSelected}` : template;

  const CustomTemplateComponent = CUSTOM_ATT_TEMPLATES_COMPONENTS[activeTemplate];

  const templateSchema =
    CATEGORY_TEMPLATES[activeTemplate] || CATEGORY_TEMPLATES[template] || CATEGORY_TEMPLATES.default;

  // Chuẩn hóa sections cho nhánh templateSchema
  const sections = useMemo(() => {
    if (CustomTemplateComponent) return [];

    if (templateSchema?.sections && templateSchema.sections.length > 0) {
      return templateSchema.sections;
    }

    if (templateSchema?.fields && templateSchema.fields.length > 0) {
      return [
        {
          sectionKey: "default_section",
          sectionTitle: templateSchema.title || "Thông tin chi tiết",
          fields: templateSchema.fields,
        },
      ];
    }

    return [];
  }, [CustomTemplateComponent, templateSchema]);

  // Lấy toàn bộ tên field có trong đợt render của templateSchema
  const activeFieldNames = useMemo(() => {
    const names: string[] = [];
    for (const section of sections) {
      for (const field of section.fields ?? []) {
        if (field?.name) {
          names.push(field.name);
        }
      }
    }
    if (watchFieldName && !names.includes(watchFieldName)) {
      names.unshift(watchFieldName);
    }
    return names;
  }, [sections, watchFieldName]);

  const activeFieldsKey = activeFieldNames.join("\u0000");

  // Chỉ chạy khi KHÔNG dùng CustomTemplateComponent (dùng templateSchema)
  useEffect(() => {
    if (CustomTemplateComponent) return;

    const currentAttributes = (form.getValues("attributes") ?? {}) as Record<string, unknown>;
    const activeSet = new Set<string>(activeFieldNames);

    const nextAttributes: Record<string, unknown> = {};
    let hasObsoleteKeys = false;

    // Giữ giá trị cũ nếu key vẫn nằm trong đợt render hiện tại
    for (const key of activeFieldNames) {
      if (Object.prototype.hasOwnProperty.call(currentAttributes, key)) {
        nextAttributes[key] = currentAttributes[key];
      }
    }

    // Kiểm tra xem có key cũ nào không còn xuất hiện trong đợt render hiện tại không
    for (const existingKey of Object.keys(currentAttributes)) {
      if (!activeSet.has(existingKey)) {
        hasObsoleteKeys = true;
      }
    }

    if (hasObsoleteKeys) {
      form.setValue("attributes", nextAttributes, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CustomTemplateComponent, activeFieldsKey, form]);

  // 4. Có CustomTemplateComponent thì trả về ngay, tự xử lý bên trong
  if (CustomTemplateComponent) {
    return <CustomTemplateComponent form={form} />;
  }

  // 5. Render theo templateSchema
  if (!sections || sections.length === 0) {
    return <span className="pt-2 text-muted-foreground font-semibold">Danh mục không có thông tin chi tiết.</span>;
  }

  return (
    <div className="space-y-3">
      {sections.map((section, idx) => (
        <div
          key={section.sectionKey}
          className={`p-0 pt-0.5 pb-2 bg-card space-y-1 ${
            idx < sections.length - 1 ? "border-b border-gray-400 mb-3" : ""
          }`}
        >
          <h3 className="text-sm font-medium">{section.sectionTitle}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {section.fields.map((field) => {
              const fieldPath = `attributes.${field.name}`;
              const attributesErrors = form.formState.errors.attributes as Record<string, any> | undefined;
              const error = attributesErrors?.[field.name];
              const currentValue = form.watch(fieldPath);

              if (field.type === "radio" || field.type === "button-group") {
                return (
                  <XButtonGroupInput
                    key={field.name}
                    label={field.label}
                    required={field.required}
                    options={field.options!}
                    value={currentValue}
                    onChange={(val) => {
                      form.setValue(fieldPath, val, { shouldValidate: true });
                    }}
                    error={error}
                  />
                );
              }

              if (field.type === "select") {
                return (
                  <XSelectInput
                    key={field.name}
                    id={fieldPath}
                    label={field.label}
                    floatingLabel={field.label + ":"}
                    required={field.required}
                    error={error}
                    listItems={field.options || []}
                    onValueChange={(val) => {
                      form.setValue(fieldPath, val, { shouldValidate: true });
                    }}
                    onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
                  />
                );
              }

              if (field.type === "selectLookup") {
                return (
                  <XSelectLookupInput
                    key={field.name}
                    id={fieldPath}
                    name={fieldPath}
                    label={field.label}
                    floatingLabel={field.label + ":"}
                    required={field.required}
                    value={form.watch(fieldPath)}
                    error={error}
                    setError={form.setError}
                    listItems={field.options || []}
                    allowCustomInput={field.allowCustomInput}
                    onValueChange={(val) => {
                      form.setValue(fieldPath, val, { shouldValidate: true });
                    }}
                    onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
                  />
                );
              }

              if (field.type === "number") {
                return (
                  <XNumberInput
                    key={field.name}
                    id={fieldPath}
                    label={field.label}
                    floatingLabel={field.label + ":"}
                    required={field.required}
                    error={error}
                    onValueChange={(val) => {
                      form.setValue(fieldPath, val, { shouldValidate: true });
                    }}
                    onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
                  />
                );
              }

              return (
                <XTextInput
                  key={field.name}
                  id={fieldPath}
                  label={field.label}
                  floatingLabel={field.label + ":"}
                  required={field.required}
                  type="text"
                  error={error}
                  onValueChange={(val) => {
                    form.setValue(fieldPath, val, { shouldValidate: true });
                  }}
                  onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
