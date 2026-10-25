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
    code: text("code").notNull(), // ISO 3166-1 alpha-2, e.g. VN
    name: text("name").notNull(),
    nameVi: text("name_vi").notNull(),
    nameEn: text("name_en").notNull(),
    nativeName: text("native_name").notNull(),
    phoneCode: text("phone_code").notNull(),
    area: text("area"),
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
