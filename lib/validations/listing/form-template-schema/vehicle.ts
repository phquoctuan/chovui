import {type CategoryTemplateConfig} from "../listing-templates-schema";

export const vehicleAttributesSchema : CategoryTemplateConfig = {
    title: "Thông tin Xe cộ",
    fields: [
      { name: "brand", label: "Hãng xe", type: "text", required: true, placeholder: "Ví dụ: Honda, Toyota..." },
      { name: "model", label: "Dòng xe", type: "text", placeholder: "Ví dụ: SH 150i, Camry..." },
      { name: "year", label: "Năm sản xuất", type: "number", placeholder: "Ví dụ: 2023", min: 1900, max: 2026 },
      { name: "mileage", label: "Số km đã đi", type: "number", unit: "km", placeholder: "Ví dụ: 15000", min: 0 },
    ],
  }