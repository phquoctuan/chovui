import { boolean, index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth";

export const sellerAddresses = pgTable(
  "seller_addresses",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    label: text("label").notNull(),
    recipientName: text("recipient_name").notNull(),
    phone: text("phone").notNull().default(""),
    countryCode: text("country_code").notNull(),
    addressLine1: text("address_line1").notNull(),
    addressLine2: text("address_line2").notNull().default(""),
    locality: text("locality").notNull().default(""),
    administrativeArea: text("administrative_area").notNull().default(""),
    postalCode: text("postal_code").notNull().default(""),
    primary: boolean("primary").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [index("seller_addresses_user_id_idx").on(table.userId)],
);
