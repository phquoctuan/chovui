//not used
// features/listings/types/real-estate.ts
import { z } from "zod";
import type { BaseListing } from "./base";
export type RealEstateListing = BaseListing & {
  listingType: "real-estate";

  attributes: {
    area: number;
    bedrooms?: number;
    bathrooms?: number;
    propertyType: string;
    legalStatus?: string;
  };
};

export const realEstateAttributesSchema = z.object({
  area: z.number().positive(),
  bedrooms: z.number().int().nonnegative().optional(),
  bathrooms: z.number().int().nonnegative().optional(),
  propertyType: z.string().min(1),
  legalStatus: z.string().optional(),
});