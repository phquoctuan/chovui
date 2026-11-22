import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field"; 
import { XTextInput } from "@/components/xInput/XTextInput";
import { XNumberInput } from "@/components/xInput/XNumberInput";
import { XSelectInput } from "@/components/xInput/XSelectInput";

interface RealEstateAttributesTemplateProps {
  form: UseFormReturn<any>;
  templateName?: string;
}

export function RealEstateAttributesTemplate({ form }: RealEstateAttributesTemplateProps) {
  // Lấy đối tượng lỗi từ formState.errors.attributes
  const attributesErrors = form.formState.errors.attributes as Record<string, any> | undefined;

  return (
    <div className="space-y-4">
      <h3 className="text-sm sm:text-base font-semibold mb-2">
        Thông tin bất động sản:
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* 1. Diện tích (area) - Bắt buộc */}
        {(() => {
          const fieldName = "area";
          const fieldPath = `attributes.${fieldName}`;
          const error = attributesErrors?.[fieldName];

          return (
            <div key={fieldName} className="relative">
              <XNumberInput
                key={fieldName}
                id={fieldPath}
                label="Diện tích (m²)"
                floatingLabel="Diện tích (m²):"
                required={true}
                allowNegative={false}
                // type="number"
                // placeholder="Ví dụ: 80"
                error={error}
                // registration={form.register(fieldPath, { valueAsNumber: true })}
                // registration={form.register(fieldPath)}
                onValueChange={(val) => {
                  form.setValue(fieldPath, val === "" ? "" : Number(val), { shouldValidate: true });
                }}
                onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
              />
            </div>
          );
        })()}

        {/* 2. Số phòng ngủ (bedrooms) */}
        {(() => {
          const fieldName = "bedrooms";
          const fieldPath = `attributes.${fieldName}`;
          const error = attributesErrors?.[fieldName];

          return (
            <XNumberInput
              key={fieldName}
              id={fieldPath}
              label="Số phòng ngủ"
              floatingLabel="Số phòng ngủ:"
              required={false}
              allowNegative={false}
              // placeholder="Ví dụ: 2"
              error={error}
              // registration={form.register(fieldPath, { valueAsNumber: true })}
              // registration={form.register(fieldPath)}
              onValueChange={(val) => {
                form.setValue(fieldPath, val === "" ? "" : Number(val), { shouldValidate: true });
              }}
              onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
            />
          );
        })()}

        {/* 3. Số phòng tắm/WC (bathrooms) */}
        {(() => {
          const fieldName = "bathrooms";
          const fieldPath = `attributes.${fieldName}`;
          const error = attributesErrors?.[fieldName];

          return (
            <XNumberInput
              key={fieldName}
              id={fieldPath}
              label="Số phòng tắm/WC"
              floatingLabel="Số phòng tắm/WC:"
              required={false}
              allowNegative={false}
              // placeholder="Ví dụ: 2"
              error={error}
              // registration={form.register(fieldPath, { valueAsNumber: true })}
              // registration={form.register(fieldPath)}
              onValueChange={(val) => {
                form.setValue(fieldPath, val === "" ? "" : Number(val), { shouldValidate: true });
              }}
              onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
            />
          );
        })()}

        {/* 4. Giấy tờ pháp lý (legalStatus - dạng select) */}
        {(() => {
          const fieldName = "legalStatus";
          const fieldPath = `attributes.${fieldName}`;
          const error = attributesErrors?.[fieldName];

          const options = [
            { label: "Sổ hồng / Sổ đỏ", value: "red_book" },
            { label: "Hợp đồng mua bán", value: "sale_contract" },
            { label: "Đang chờ sổ", value: "pending" },
          ];

          return (
              <XSelectInput
                key={fieldName}
                id={fieldPath}
                label="Giấy tờ pháp lý"
                floatingLabel="Giấy tờ pháp lý:"
                required={false}
                error={error}
                // registration={form.register(fieldPath)}
                listItems={options}
                onValueChange={(val) => {
                  form.setValue(fieldPath, val, { shouldValidate: true });
                }}
                onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
              />
            // <Field key={fieldName} data-invalid={!!error}>
            //   <FieldLabel>
            //     Giấy tờ pháp lý
            //   </FieldLabel>
            //   <select
            //     className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            //     {...form.register(fieldPath)}
            //   >
            //     <option value="">-- Chọn giấy tờ pháp lý --</option>
            //     {options.map((opt) => (
            //       <option key={String(opt.value)} value={opt.value}>
            //         {opt.label}
            //       </option>
            //     ))}
            //   </select>
            //   {error && <FieldError errors={[{ message: error.message as string }]} />}
            // </Field>
          );
        })()}

      </div>
    </div>
  );
}