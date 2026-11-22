import React from "react";
import { UseFormReturn } from "react-hook-form";
import { useEffect } from "react";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { XTextInput } from "@/components/xInput/XTextInput";
import { XNumberInput } from "@/components/xInput/XNumberInput";

interface VehicleAttributesTemplateProps {
  form: UseFormReturn<any>;
  templateName?: string;
}

const VEHICLE_ATTRIBUTE_KEYS = ["brand", "model", "year", "mileage"] as const;

export function VehicleAttributesTemplate({ form }: VehicleAttributesTemplateProps) {
  const attributesErrors = form.formState.errors.attributes as Record<string, any> | undefined;

  useEffect(() => {
    const currentAttributes = (form.getValues("attributes") ?? {}) as Record<string, unknown>;
    const allowedSet = new Set<string>(VEHICLE_ATTRIBUTE_KEYS);

    const nextAttributes: Record<string, unknown> = {};
    let hasRemovedStaleKeys = false;

    // 1. Giữ lại các giá trị cũ nếu key thuộc template hiện tại
    for (const key of VEHICLE_ATTRIBUTE_KEYS) {
      if (Object.prototype.hasOwnProperty.call(currentAttributes, key)) {
        nextAttributes[key] = currentAttributes[key];
      }
    }

    // 2. Kiểm tra xem có key lạ/cũ nào không thuộc đợt render này không
    for (const existingKey of Object.keys(currentAttributes)) {
      if (!allowedSet.has(existingKey)) {
        hasRemovedStaleKeys = true;
      }
    }

    // Chỉ cập nhật khi thực sự có key dư thừa cần xóa
    if (hasRemovedStaleKeys) {
      form.setValue("attributes", nextAttributes, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  }, [form]);

  return (
    <div className="space-y-4">
      <h3 className="text-sm sm:text-base font-semibold mb-2">Thông tin Xe cộ:</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* 1. Hãng xe (brand - text) - Bắt buộc */}
        {(() => {
          const fieldName = "brand";
          const fieldPath = `attributes.${fieldName}` as const;
          const error = attributesErrors?.[fieldName];

          return (
            <XTextInput
              key={fieldName}
              id={fieldPath}
              label="Hãng xe"
              floatingLabel="Hãng xe"
              required={true}
              type="text"
              error={error}
              registration={form.register(fieldPath)}
              onValueChange={(val) => {
                form.setValue(fieldPath, val, { shouldValidate: true });
              }}
              onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
            />
          );
        })()}

        {/* 2. Dòng xe (model - text) */}
        {(() => {
          const fieldName = "model";
          const fieldPath = `attributes.${fieldName}` as const;
          const error = attributesErrors?.[fieldName];

          return (
            <XTextInput
              key={fieldName}
              id={fieldPath}
              label="Dòng xe"
              floatingLabel="Dòng xe"
              required={true}
              type="text"
              placeholder="Ví dụ: SH 150i, Camry..."
              error={error}
              registration={form.register(fieldPath)}
              onValueChange={(val) => {
                form.setValue(fieldPath, val, { shouldValidate: true });
              }}
              onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
            />
          );
        })()}

        {/* 3. Năm sản xuất (year - number) */}
        {(() => {
          const fieldName = "year";
          const fieldPath = `attributes.${fieldName}` as const;
          const error = attributesErrors?.[fieldName];

          return (
            <XNumberInput
              key={fieldName}
              id={fieldPath}
              label="Năm sản xuất"
              floatingLabel="Năm sản xuất:"
              allowNegative={false}
              required={false}
              error={error}
              onValueChange={(val) => {
                form.setValue(fieldPath, val === "" ? "" : Number(val), { shouldValidate: true });
              }}
              onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
            />
          );
        })()}

        {/* 4. Số km đã đi (mileage - number) */}
        {(() => {
          const fieldName = "mileage";
          const fieldPath = `attributes.${fieldName}` as const;
          const error = attributesErrors?.[fieldName];

          return (
            <XNumberInput
              key={fieldName}
              id={fieldPath}
              label="Số km đã đi (km)"
              floatingLabel="Số km đã đi (km):"
              required={false}
              allowNegative={false}
              placeholder="Ví dụ: 15000"
              error={error}
              onValueChange={(val) => {
                form.setValue(fieldPath, val === "" ? "" : Number(val), { shouldValidate: true });
              }}
              onClear={() => form.setValue(fieldPath, "", { shouldValidate: true })}
            />
          );
        })()}
      </div>
    </div>
  );
}
