import {type CategoryTemplateConfig} from "../listing-templates-schema";

export const realEstateAttributesSchema : CategoryTemplateConfig = {
    title: "Thông tin Bất động sản",
    fields: [
        {
        name: "area",
        label: "Diện tích",
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
}