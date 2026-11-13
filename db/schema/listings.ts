// db/schema/listings.ts
import {
  index,
  pgTable,
  uuid,
  varchar,
  text,
  numeric,
  integer,
  timestamp,
  boolean,
  jsonb,
  pgEnum,
  doublePrecision,
  char,
  serial,
} from "drizzle-orm/pg-core";
import { user } from "./auth";
import { currencies } from "./currencies";
import { countries } from "./countries";
import { categories } from "./categories";
import { regions } from "./regions";
import { counties } from "./counties";
import { wards } from "./wards";
// Các Enum chung
export const statusEnum = pgEnum("listing_status", [
  "draft",
  "payment",
  "pending",
  "publish",
  "expired",
  "rejected",
  "archived",
]);
export const priceTypeEnum = pgEnum("price_type", ["fixed", "negotiable", "contact", "free"]);
export const conditionEnum = pgEnum("listing_condition", ["new", "used", "refurbished"]);

// 1. Khai báo các cột chung (Base Columns)
export const baseListingColumns = {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, {
      onDelete: "cascade",
    }),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),

  price: numeric("price", { precision: 25, scale: 8 }),
  priceType: priceTypeEnum("price_type").default("fixed"),
  currencyCode: varchar("currency_code", { length: 3 })
    .notNull()
    .references(() => currencies.code),
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
  // region: varchar("region", { length: 100 }).notNull(), //province|state when regionId = null
  location: varchar("location", { length: 255 }),// remain address part
  postalCode: varchar("postal_code", { length: 20 }),

  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id, { onDelete: "restrict" }),
  
  condition: conditionEnum("condition"),
  quantity: integer("quantity").notNull().default(1),

  latitude: doublePrecision("latitude"),
  longitude: doublePrecision("longitude"),

  // Dynamic attributes cho từng danh mục (Lưu dạng JSON)
  attributes: jsonb("attributes").notNull().default("{}"),

  paid: boolean("paid").default(false),
  paidAmount: numeric("paid_amount", { precision: 25, scale: 8 }).default("0"),
  status: statusEnum("status").default("draft"),

  slug: varchar("slug", { length: 255 }).notNull().unique(),
  isDisabled: boolean("is_disabled").notNull().default(false),
  viewCount: integer("view_count").default(0),
  
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  userCancelAt: timestamp("user_cancel_at", { withTimezone: true }),
  soldAt: timestamp("sold_at", { withTimezone: true }),
  expiresAt: timestamp("expires_at", { withTimezone: true }),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
};

// 2. Bảng chính trong Database
export const listings = pgTable("listings", baseListingColumns, (table) => [
  index("listings_user_id_idx").on(table.userId),
  index("listings_country_code_idx").on(table.countryCode),
  index("listings_category_id_idx").on(table.categoryId),
  index("listings_slug_idx").on(table.slug),
  index("listings_status_idx").on(table.status),
  // index("listings_region_idx").on(table.region),
  index("listings_created_at_idx").on(table.createdAt),
  index("listings_published_at_idx").on(table.publishedAt),
  index("listings_expires_at_idx").on(table.expiresAt),
]);

export type Listing = typeof listings.$inferSelect;