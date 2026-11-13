import {
  boolean,
  index,
  integer,
  varchar,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { currencies } from "./currencies";
/** Master data for countries/territories used throughout Chovui. */
export const countries = pgTable(
  "countries",
  {
    id: serial("id").primaryKey(),
    // code: text("code").notNull().unique(), // ISO 3166-1 alpha-2, e.g. VN
    code: varchar("code", { length: 2 }).notNull(), // ISO 3166-1 alpha-2, e.g. VN
    name: text("name").notNull(),
    nameVi: text("name_vi").notNull(),
    nameEn: text("name_en").notNull(),
    nativeName: text("native_name").notNull(),
    phoneCode: text("phone_code").notNull(),
    area: text("area"),
    hasRegion: boolean("has_region").notNull().default(false),//has State/Province
    flagUrl: text("flag_url"),
    // currencyCode: text("currency_code"),
    currencyCode: varchar("currency_code", { length: 3 })
      .notNull()
      .references(() => currencies.code),
    currencySymbol: text("currency_symbol"),
    isActive: boolean("is_active").notNull().default(true),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("countries_code_unique").on(table.code),
    index("countries_active_sort_idx").on(table.isActive, table.sortOrder),
  ],
);

export type Country = typeof countries.$inferSelect;
export type NewCountry = typeof countries.$inferInsert;

/*
// --- Định nghĩa Relations (Hỗ trợ truy vấn relational query của Drizzle) ---
export const countriesRelations = relations(countries, ({ many }) => ({
  regions: many(regions),
  listings: many(listings),
}));

export const regionsRelations = relations(regions, ({ one, many }) => ({
  country: one(countries, {
    fields: [regions.countryId],
    references: [countries.id],
  }),
  listings: many(listings),
}));

export const listingsRelations = relations(listings, ({ one }) => ({
  country: one(countries, {
    fields: [listings.countryId],
    references: [countries.id],
  }),
  region: one(regions, {
    fields: [listings.regionId],
    references: [regions.id],
  }),
}));

//relations => khi viết code = Relational Query API của Drizzle, tự động JOIN và trả về dạng object lồng nhau
// const result = await db.query.listings.findMany({
//   with: {
//     region: true, // Tự động join và lấy ra object region
//     country: true, // Tự động join và lấy ra object country
//   },
// });
*/