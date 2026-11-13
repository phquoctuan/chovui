// @/components/listings/listing-attributes-renderer.tsx
"use client";

import { UseFormReturn } from "react-hook-form";
import { CATEGORY_TEMPLATES } from "@/lib/validations/listing/listing-templates-schema";
import { XTextInput } from "../xInput/XTextInput";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

type AttributesRendererProps = {
  templateName: string | null;
  form: UseFormReturn<any>;
};

export function ListingAttributesRenderer({ templateName, form }: AttributesRendererProps) {
  const rootTemplate = templateName ? templateName.split("/")[0] : "default";
  const templateConfig = CATEGORY_TEMPLATES[rootTemplate] || CATEGORY_TEMPLATES.default;

  // console.log("rootTemplate:", rootTemplate);
  // console.log("Template:", templateConfig);
  // Nếu template không có fields nào thì ẩn luôn phần này đi
  if (!templateConfig.fields || templateConfig.fields.length === 0) {
    return <span className="pt-2 text-muted-foreground font-semibold">Danh mục không có thông tin chi tiết.</span>;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-sm text-base font-semibold mb-2">
        {templateConfig.title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {templateConfig.fields.map((field) => {
          const fieldPath = `attributes.${field.name}`;
          // Ép kiểu attributes errors về Record để cho phép index bằng string key
          const attributesErrors = form.formState.errors.attributes as Record<string, any> | undefined;
          const error = attributesErrors?.[field.name];

          if (field.type === "select") {
            return (
              <Field key={field.name} data-invalid={!!error}>
                <FieldLabel>
                  {field.label} {field.required && <span className="text-red-400">*</span>}
                </FieldLabel>
                <select
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  {...form.register(fieldPath)}
                >
                  <option value="">-- Chọn {field.label.toLowerCase()} --</option>
                  {field.options?.map((opt) => (
                    <option key={String(opt.value)} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {error && <FieldError errors={[{ message: error.message as string }]} />}
              </Field>
            );
          }

          return (
            <XTextInput
              key={field.name}
              id={fieldPath}
              label={field.label}
              floatingLabel={field.label}
              required={field.required}
              type={field.type === "number" ? "number" : "text"}
              placeholder={field.placeholder}
              error={error}
              registration={form.register(fieldPath)}
              onValueChange={(val) => {
                form.setValue(fieldPath, val, { shouldValidate: true });
              }}
              onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
            />
          );
        })}
      </div>
    </div>
  );
}