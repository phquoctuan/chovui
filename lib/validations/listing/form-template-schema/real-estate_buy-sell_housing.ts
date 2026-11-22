import { type CategoryTemplateConfig } from "./template-map";

export const realEstateBuySellHousingSchema: CategoryTemplateConfig = {
  title: "Thông tin bất động sản",
  sections: [
    {
      sectionKey: "property_type",
      sectionTitle: "",
      fields: [
        {
          name: "propertyType",
          label: "Loại bất động sản",
          required: true,
          type: "button-group",
          watchTemplate: true, // 👈 Đánh dấu field này là "công tắc" đổi schema
          defaultValue: "housing",
          options: [
            { label: "Nhà ở", value: "housing" },
            { label: "Căn hộ/Chung cư", value: "apartments" },
            { label: "Đất", value: "land" },
            { label: "Văn phòng, Mặt bằng kinh doanh", value: "offices" },
          ],
        },
      ],
    },
    {
      sectionKey: "CommonInfo",
      sectionTitle: "Thông tin chung",
      fields: [
        {
          name: "area",
          label: "Diện tích (m²)",
          type: "number",
          required: true,
          unit: "m²",
          placeholder: "Ví dụ: 80",
          min: 0,
        },
        { name: "bedrooms", label: "Số phòng ngủ", type: "number", placeholder: "Ví dụ: 2", min: 0 },
        { name: "bathrooms", label: "Số phòng tắm/WC", type: "number", placeholder: "Ví dụ: 2", min: 0 },
        {
          name: "legalStatus",
          label: "Giấy tờ pháp lý",
          type: "select",
          options: [
            { label: "Sổ hồng / Sổ đỏ", value: "red_book" },
            { label: "Hợp đồng mua bán", value: "sale_contract" },
            { label: "Đang chờ sổ", value: "pending" },
          ],
        },
      ],
    },
  ],
};
