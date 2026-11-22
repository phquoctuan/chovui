import { type CategoryTemplateConfig } from "./template-map";

export const electronicsComputerAttributesSchema: CategoryTemplateConfig = {
  title: "Thông tin chi tiết",
  fields: [
    {
      name: "condition",
      label: "Tình trạng",
      type: "select",
      required: true,
      options: [
        { label: "Mới", value: "new" },
        { label: "Đã sử dụng(chưa sửa chữa)", value: "used" },
        { label: "Đã sử dụng(qua sửa chữa)", value: "refurbished" },
      ],
    },
    {
      name: "computer_classify",
      label: "Loại linh kiện",
      required: true,
      type: "select",
      watchTemplate: true, // 👈 Đánh dấu field này là "công tắc" đổi schema
      options: [
        { label: "Linh kiện máy tính", value: "computer" },
        { label: "Linh kiện điện thoại", value: "phone" },
        { label: "Khác", value: "other" },
      ],
    },

    {
      name: "origin",
      label: "Xuất xứ",
      type: "selectLookup",
      required: false,
      allowCustomInput: true,
      options: [
        { label: "Việt Nam", value: "vn" },
        { label: "Ấn Độ", value: "in" },
        { label: "Hàn Quốc", value: "kr" },
        { label: "Thái Lan", value: "th" },
        { label: "Nhật Bản", value: "jp" },
        { label: "Trung Quốc", value: "cn" },
        { label: "Mỹ", value: "us" },
        { label: "Đức", value: "de" },
        { label: "Đài Loan", value: "tw" },
        { label: "Nước khác", value: "other" },
      ],
    },
    {
      name: "warranty_policy",
      label: "Chính sách bảo hành",
      type: "select",
      required: false,
      options: [
        { label: "Hết bảo hành", value: "expired" },
        { label: "1 tháng", value: "1_month" },
        { label: "2 tháng", value: "2_months" },
        { label: "3 tháng", value: "3_months" },
        { label: "4-6 tháng", value: "4_to_6_months" },
        { label: "7-12 tháng", value: "7_to_12_months" },
        { label: ">12 tháng", value: "gt_12_months" },
        { label: "Còn bảo hành", value: "active" },
      ],
    },
  ],
};
