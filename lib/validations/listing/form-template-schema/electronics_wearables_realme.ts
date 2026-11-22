import { type CategoryTemplateConfig } from "./template-map";

export const electronicsWearableRealmeAttributesSchema: CategoryTemplateConfig = {
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
      name: "wearable_classify",
      label: "Thiết bị",
      required: true,
      type: "select",
      options: [
        { label: "Đồng hồ thông minh", value: "smartwatch" },
        { label: "Vòng tay thông minh", value: "smart_band" },
        { label: "Khác", value: "other" },
      ],
    },
    {
      name: "wearable_company",
      label: "Hãng",
      type: "selectLookup",
      required: false,
      watchTemplate: true, // 👈 Đánh dấu field này là "công tắc" đổi schema
      allowCustomInput: true,
      options: [
        { label: "Amazfit", value: "amazfit" },
        { label: "Apple", value: "apple" },
        { label: "Fitbit", value: "fitbit" },
        { label: "Garmin", value: "garmin" },
        { label: "Google", value: "google" },
        { label: "Honor", value: "honor" },
        { label: "Huawei", value: "huawei" },
        { label: "Misfit", value: "misfit" },
        { label: "OnePlus", value: "oneplus" },
        { label: "Oppo", value: "oppo" },
        { label: "Realme", value: "realme" },
        { label: "Samsung", value: "samsung" },
        { label: "Sony", value: "sony" },
        { label: "Vivo", value: "vivo" },
        { label: "Xiaomi", value: "xiaomi" },
        { label: "ZTE", value: "zte" },
        { label: "Khác", value: "other" },
      ],
    },
    {
      name: "realme_series",
      label: "Dòng",
      type: "selectLookup",
      required: false,
      allowCustomInput: true,
      options: [
        // Đồng hồ thông minh (Smartwatch)
        { label: "Watch S5", value: "watch_s5" },
        { label: "Watch 5", value: "watch_5" },
        { label: "Watch S2", value: "watch_s2" },
        { label: "Watch 3 Pro", value: "watch_3_pro" },
        { label: "Watch 3", value: "watch_3" },
        { label: "Watch T1", value: "watch_t1" },
        { label: "Watch 2 Pro", value: "watch_2_pro" },
        { label: "Watch 2", value: "watch_2" },
        { label: "Watch S Pro", value: "watch_s_pro" },
        { label: "Watch S Master Edition", value: "watch_s_master_edition" },
        { label: "Watch S", value: "watch_s" },
        { label: "Watch (1st Gen)", value: "watch_1st_gen" },

        // Dòng Realme TechLife Watch
        { label: "TechLife Watch R100", value: "techlife_watch_r100" },
        { label: "TechLife Watch SZ100", value: "techlife_watch_sz100" },
        { label: "TechLife Watch S100", value: "techlife_watch_s100" },

        // Vòng đeo tay thông minh (Smartband)
        { label: "Band 2", value: "band_2" },
        { label: "Band", value: "band" },

        // Khác
        { label: "Dòng khác", value: "other" },
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
