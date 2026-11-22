import { z } from "zod";
import { realEstateAttributesSchema } from "./real-estate";
import { realEstateBuySellSchema } from "./real-estate_buy-sell";
import { realEstateBuySellHousingSchema } from "./real-estate_buy-sell_housing";
import { realEstateBuySellApartmentsSchema } from "./real-estate_buy-sell_apartments";
import { realEstateBuySellLandSchema } from "./real-estate_buy-sell_land";
import { realEstateBuySellOfficesSchema } from "./real-estate_buy-sell_offices";

import { electronicsMobileAttributesSchema } from "./electronics_mobile";
import { electronicsTabletsAttributesSchema } from "./electronics_tablets";
import { electronicsLaptopsAttributesSchema } from "./electronics_laptops";
import { electronicsDesktopAttributesSchema } from "./electronics_desktop";
import { electronicsCamerasAttributesSchema } from "./electronics_cameras";
import { electronicsCamerasCameraAttributesSchema } from "./electronics_cameras_camera";
import { electronicsCamerasCamcorderAttributesSchema } from "./electronics_cameras_camcorder";
import { electronicsCamerasLensAttributesSchema } from "./electronics_cameras_lens";

import { electronicsTvsAudioAttributesSchema } from "./electronics_tvs-audio";
import { electronicsTvsAudioTvAttributesSchema } from "./electronics_tvs-audio_tv";
import { electronicsTvsAudioSpeakerAttributesSchema } from "./electronics_tvs-audio_speaker";
import { electronicsTvsAudioAmplifierAttributesSchema } from "./electronics_tvs-audio_amplifier";
import { electronicsTvsAudioHeadphoneAttributesSchema } from "./electronics_tvs-audio_headphone";
import { electronicsTvsAudioMicrophoneAttributesSchema } from "./electronics_tvs-audio_microphone";
import { electronicsTvsAudioKaraokeAttributesSchema } from "./electronics_tvs-audio_karaoke";

import { electronicsWearableAttributesSchema } from "./electronics_wearable";
import { electronicsWearableAmazfitAttributesSchema } from "./electronics_wearables_amazfit";
import { electronicsWearableAppleAttributesSchema } from "./electronics_wearables_apple";
import { electronicsWearableFitbitAttributesSchema } from "./electronics_wearables_fitbit";
import { electronicsWearableGarminAttributesSchema } from "./electronics_wearables_garmin";
import { electronicsWearableGoogleAttributesSchema } from "./electronics_wearables_google";
import { electronicsWearableHonorAttributesSchema } from "./electronics_wearables_honor";
import { electronicsWearableHuaweiAttributesSchema } from "./electronics_wearables_huawei";
import { electronicsWearableMisfitAttributesSchema } from "./electronics_wearables_misfit";
import { electronicsWearableOneplusAttributesSchema } from "./electronics_wearables_oneplus";
import { electronicsWearableOppoAttributesSchema } from "./electronics_wearables_oppo";
import { electronicsWearableRealmeAttributesSchema } from "./electronics_wearables_realme";
import { electronicsWearableSamsungAttributesSchema } from "./electronics_wearables_samsung";
import { electronicsWearableSonyAttributesSchema } from "./electronics_wearables_sony";
import { electronicsWearableVivoAttributesSchema } from "./electronics_wearables_vivo";
import { electronicsWearableXiaomiAttributesSchema } from "./electronics_wearables_xiaomi";
import { electronicsWearableZteAttributesSchema } from "./electronics_wearables_zte";
import { electronicsWearableOtherAttributesSchema } from "./electronics_wearables_other";

import { electronicsAccessoriesAttributesSchema } from "./electronics_accessories";
import { electronicsAccessoriesComputerAttributesSchema } from "./electronics_accessories_computer";
import { electronicsAccessoriesPhoneAttributesSchema } from "./electronics_accessories_phone";

import { electronicsComputerAttributesSchema } from "./electronics_computer";
import { electronicsComputerComputerAttributesSchema } from "./electronics_computer_computer";
import { electronicsComputerPhoneAttributesSchema } from "./electronics_computer_phone";

import { vehicleAttributesSchema } from "./vehicle";
import { boolean } from "drizzle-orm/pg-core";

// Định nghĩa kiểu dữ liệu cho từng field
// export type AttributeFieldConfig = {
//   name: string;
//   label: string;
//   type: "text" | "number" | "select" | "boolean";
//   required?: boolean;
//   placeholder?: string;
//   options?: { label: string; value: string | number }[];
//   unit?: string;
//   // Các quy tắc validate bổ sung nếu muốn
//   min?: number; // Dùng chung cho số (giá trị) và chữ (độ dài)
//   max?: number;
// };

// export type CategoryTemplateConfig = {
//   title: string;
//   fields: AttributeFieldConfig[];
// };

export type AttributeFieldConfig = {
  name: string;
  label: string;
  type: "text" | "number" | "select" | "selectLookup" | "boolean" | "radio" | "button-group";
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string | number }[];
  allowCustomInput?: boolean; //when selectLookup
  unit?: string;
  min?: number;
  max?: number;
  watchTemplate?: boolean; // 👉 THÊM THUỘC TÍNH NÀY ĐỂ ĐÁNH DẤU FIELD QUYẾT ĐỊNH TEMPLATE CON
  defaultValue?: string | number | boolean;
};

// 2. Định nghĩa cấu trúc nhóm (Section) để gom các field lại (VD: Vị trí, Đặc điểm)
export type AttributeSectionConfig = {
  sectionKey: string;
  sectionTitle: string;
  fields: AttributeFieldConfig[];
};

export type CategoryTemplateConfig = {
  title: string;
  // Hỗ trợ cả 2 dạng: hoặc là fields trực tiếp, hoặc là chia thành các sections
  fields?: AttributeFieldConfig[];
  sections?: AttributeSectionConfig[];
};

// Hàm quét xem trong template hiện tại có field nào được đánh dấu là watchTemplate không
export function findWatchTemplateFieldName(templateName: string | null | undefined): string | null {
  if (!templateName) return null;
  // const template = templateName.split("/")[0] || templateName;
  const template = templateName;
  const config = CATEGORY_TEMPLATES[template] || CATEGORY_TEMPLATES.default;

  // Lấy danh sách fields (hỗ trợ cả cấu trúc cũ fields[] lẫn cấu trúc mới sections[])
  const fields = config.fields || config.sections?.flatMap((s: any) => s.fields) || [];

  // Tìm field có cờ watchTemplate === true
  const targetField = fields.find((f: any) => f.watchTemplate === true);
  return targetField ? targetField.name : null;
}

// 1. NƠI DUY NHẤT KHAI BÁO CÁC TRƯỜNG DỮ LIỆU ĐỘNG CHO TỪNG TEMPLATE
export const CATEGORY_TEMPLATES: Record<string, CategoryTemplateConfig> = {
  "real-estate": realEstateAttributesSchema,
  "real-estate_buy-sell": realEstateBuySellSchema, //root
  "real-estate_buy-sell_housing": realEstateBuySellHousingSchema,
  "real-estate_buy-sell_apartments": realEstateBuySellApartmentsSchema,
  "real-estate_buy-sell_land": realEstateBuySellLandSchema,
  "real-estate_buy-sell_offices": realEstateBuySellOfficesSchema,
  // "real-estate_rentals":
  // "real-estate_property-projects":

  // "vehicles": vehicleAttributesSchema,
  vehicles_cars: vehicleAttributesSchema,
  // "vehicles_motorcycles":
  // "vehicles_trucks":
  // "vehicles_bicycles":
  // "vehicles_other":
  // "vehicles_accessories":

  // "electronics":
  electronics_mobile: electronicsMobileAttributesSchema,
  electronics_tablets: electronicsTabletsAttributesSchema,
  electronics_laptops: electronicsLaptopsAttributesSchema,
  electronics_desktop: electronicsDesktopAttributesSchema,

  electronics_cameras: electronicsCamerasAttributesSchema,
  electronics_cameras_camera: electronicsCamerasCameraAttributesSchema,
  electronics_cameras_camcorder: electronicsCamerasCamcorderAttributesSchema,
  electronics_cameras_lens: electronicsCamerasLensAttributesSchema,
  electronics_cameras_other: electronicsCamerasAttributesSchema,
  //
  "electronics_tvs-audio": electronicsTvsAudioAttributesSchema,
  "electronics_tvs-audio_tv": electronicsTvsAudioTvAttributesSchema,
  "electronics_tvs-audio_speaker": electronicsTvsAudioSpeakerAttributesSchema,
  "electronics_tvs-audio_amplifier": electronicsTvsAudioAmplifierAttributesSchema,
  "electronics_tvs-audio_headphone": electronicsTvsAudioHeadphoneAttributesSchema,
  "electronics_tvs-audio_microphone": electronicsTvsAudioMicrophoneAttributesSchema,
  "electronics_tvs-audio_karaoke": electronicsTvsAudioKaraokeAttributesSchema,
  //
  electronics_wearable: electronicsWearableAttributesSchema,
  electronics_wearable_amazfit: electronicsWearableAmazfitAttributesSchema,
  electronics_wearable_apple: electronicsWearableAppleAttributesSchema,
  electronics_wearable_fitbit: electronicsWearableFitbitAttributesSchema,
  electronics_wearable_garmin: electronicsWearableGarminAttributesSchema,
  electronics_wearable_google: electronicsWearableGoogleAttributesSchema,
  electronics_wearable_honor: electronicsWearableHonorAttributesSchema,
  electronics_wearable_huawei: electronicsWearableHuaweiAttributesSchema,
  electronics_wearable_misfit: electronicsWearableMisfitAttributesSchema,
  electronics_wearable_oneplus: electronicsWearableOneplusAttributesSchema,
  electronics_wearable_oppo: electronicsWearableOppoAttributesSchema,
  electronics_wearable_realme: electronicsWearableRealmeAttributesSchema,
  electronics_wearable_samsung: electronicsWearableSamsungAttributesSchema,
  electronics_wearable_sony: electronicsWearableSonyAttributesSchema,
  electronics_wearable_vivo: electronicsWearableVivoAttributesSchema,
  electronics_wearable_xiaomi: electronicsWearableXiaomiAttributesSchema,
  electronics_wearable_zte: electronicsWearableZteAttributesSchema,
  electronics_wearable_other: electronicsWearableOtherAttributesSchema,

  electronics_accessories: electronicsAccessoriesAttributesSchema,
  electronics_accessories_computer: electronicsAccessoriesComputerAttributesSchema,
  electronics_accessories_phone: electronicsAccessoriesPhoneAttributesSchema,

  electronics_computer: electronicsComputerAttributesSchema,
  electronics_computer_computer: electronicsComputerComputerAttributesSchema,
  electronics_computer_phone: electronicsComputerPhoneAttributesSchema,

  // "jobs":
  // "jobs_sales-assistants"
  // "jobs_accounting"
  // "jobs_construction"
  // "jobs_cashiers"
  // "jobs_receptionists"
  // "jobs_teachers"
  // "jobs_tutors"
  // "jobs_design"
  // "jobs_nannies"
  // "jobs_waitstaff"
  // "jobs_sales-representatives"
  // "jobs_office-staff"
  // "jobs_warehouse-logistics"
  // "jobs_computer-technicians"
  // "jobs_customer-service"
  // "jobs_factory-workers"
  // "jobs_security-guards"
  // "jobs_secretaries"
  // "jobs_healthcare"
  // "jobs_drivers"
  // "jobs_janitorial-staff"
  // "jobs_bartenders-baristas"
  // "jobs_chefs"
  // "jobs_kitchen-assistants"
  // "jobs_electricians"
  // "jobs_mechanics"
  // "jobs_vehicle-technicians"
  // "jobs_welders"
  // "jobs_lathe-operators"
  // "jobs_masons"
  // "jobs_tailors"
  // "jobs_barbers"
  // "jobs_carpenters"
  // "jobs_nail-technicians"
  // "jobs_domestic-helpers"
  // "jobs_spa-technicians"
  // "jobs_promotional-staff"
  // "jobs_telesales-representatives"
  // "jobs_other-jobs"

  // home-services:
  // "home-services_house-cleaning"
  // "home-services_moving-services"
  // "home-services_appliance-repair"
  // "home-services_other"

  //pets
  // "pets_chickens"
  // "pets_dogs"
  // "pets_birds"
  // "pets_cats"
  // "pets_other"
  // "pets_supplies-services"

  //food
  // "food_candy-snacks"
  // "food_butter-dairy-eggs"
  // "food_dried-sauce"
  // "food_beverages"
  // "food_vegetables-root"
  // "food_meat-fish"
  // "food_ready-to-eat"
  // "food_seafood"
  // "food_other"

  // "major-appliances"
  // "appliances_refrigerators"
  // "appliances_air-conditioners"
  // "appliances_washing-machines"

  // "home-garden"
  // "home-garden_tables-chairs"
  // "home-garden_cabinets-shelving"
  // "home-garden_beds-bedding-mattresses"
  // "home-garden_stoves-ovens-kitchen"
  // "home-garden_kitchen-utensils"
  // "home-garden_fans"
  // "home-garden_lighting"
  // "home-garden_plants-home-decor"
  // "home-garden_bathroom-sanitary-fixtures"
  // "home-garden_other-furniture-household"

  // "baby-kids"
  // "baby-kids_maternity-nursing-products"
  // "baby-kids_toys"

  // "fashion"
  // "fashion_clothing"
  // "fashion_watches"
  // "fashion_shoes-footwear"
  // "fashion_bags-handbags"
  // "fashion_perfumes-fragrances"
  // "fashion_other-accessories"

  // "hobbies"
  // "hobbies_musical"
  // "hobbies_books"
  // "hobbies_sports"
  // "hobbies_collectibles"
  // "hobbies_gaming"
  // "hobbies_other"

  // "tools"
  // "tools_office-supplies"
  // "tools_work-equipment"
  // "tools_agricultural-industrial"
  // "tools_specialized-equipment"
  // "tools_seeds-breeding-stock"
  // "tools_other-machinery-equipment"

  // "services"
  // "services_services"
  // "services_travel"

  // Template mặc định nếu không khớp
  default: {
    title: "Thông tin chi tiết khác",
    fields: [],
  },
};

// Cách 2: Dùng một Zod custom schema "linh hoạt" (tổng hợp tất cả các field của các loại BĐS vào chung một schema lỏng lẻo hơn),
// sau đó dùng superRefine để validate có điều kiện. Khi đó cũng custom render
