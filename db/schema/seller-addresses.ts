import { boolean, index, pgTable, text, timestamp, uuid, varchar, integer } from "drizzle-orm/pg-core";
import { user } from "./auth";
import { countries } from "./countries";
import { regions } from "./regions";
import { counties } from "./counties";
import { wards } from "./wards";

export const sellerAddresses = pgTable(
  "seller_addresses",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    label: text("label").default(""),
    recipientName: text("recipient_name").default(""),
    phone: text("phone").default(""),

    countryCode: varchar("country_code", { length: 2 })
      .notNull()
      .references(() => countries.code, {
        onDelete: "restrict",
        onUpdate: "cascade",
      }),
    regionId: integer("region_id") //provinceId|stateId
      .references(() => regions.id, {
        onDelete: "restrict",
        onUpdate: "cascade",
      }),
    countyId: integer("county_id") //district|County
      .references(() => counties.id, {
        onDelete: "restrict",
        onUpdate: "cascade",
      }),
    wardId: integer("ward_id") //Ward |Commune
      .references(() => wards.id, {
        onDelete: "restrict",
        onUpdate: "cascade",
      }),
    location: varchar("location", { length: 255 }), // remain address part

    postalCode: text("postal_code"),
    primary: boolean("primary").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [index("seller_addresses_user_id_idx").on(table.userId)],
);

export type SellerAddress = typeof sellerAddresses.$inferSelect;
export type NewSellerAddress = typeof sellerAddresses.$inferInsert;
// export type SellerAddressInput = Omit<SellerAddress, "id" | "userId" | "createdAt" | "updatedAt">;
