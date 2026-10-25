//not used
// features/listings/registry.ts

import { realEstateAttributesSchema } from "./real-estate";
import { vehicleAttributesSchema } from "./vehicle";

export const listingRegistry = {
  "real-estate": {
    attributesSchema: realEstateAttributesSchema,
    templateKey: "real-estate",
  },

  "vehicles": {
    attributesSchema: vehicleAttributesSchema,
    templateKey: "vehicles",
  },
} as const;