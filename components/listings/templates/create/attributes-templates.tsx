import { RealEstateAttributesTemplate } from "./real-estate";
import { VehicleAttributesTemplate } from "./vehicle";

// Định nghĩa registry chứa các template component đã code sẵn
export const CUSTOM_ATT_TEMPLATES_COMPONENTS: Record<string, React.ComponentType<{ form: any; templateName?: string }>> = {
  // "real-estate": RealEstateAttributesTemplate,
  // "real-estate_buy-sell": RealEstateAttributesTemplate,
  "vehicles_cars": VehicleAttributesTemplate,
  // Thêm các template custom khác ở đây nếu có
};