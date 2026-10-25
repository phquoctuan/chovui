//not used
// db/schema/listing-vehicle.ts
import {
  pgTable,
  uuid,
  varchar,
  integer,
} from "drizzle-orm/pg-core";

import { listings } from "@/db/schema";

export const listingVehicles = pgTable("listing_vehicles", {
  listingId: uuid("listing_id")
    .primaryKey()
    .references(() => listings.id, {
      onDelete: "cascade",
    }),

  brand: varchar("brand", { length: 100 }).notNull(),
  model: varchar("model", { length: 100 }).notNull(),
  year: integer("year"),
  mileage: integer("mileage"),
});