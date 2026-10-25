//not used
import { z } from "zod";
import type { BaseListing } from "./base";
export type VehicleListing = BaseListing & {
  listingType: "vehicles";

  attributes: {
    brand: string;
    model: string;
    year?: number;
    mileage?: number;
    transmission?: string;
  };
};
export const vehicleAttributesSchema = z.object({
  brand: z.string().min(1),
  model: z.string().min(1),
  year: z.number().int().optional(),
  mileage: z.number().nonnegative().optional(),
  transmission: z.string().optional(),
});