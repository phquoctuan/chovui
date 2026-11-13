import { pgTable, serial, text, integer, boolean, timestamp, foreignKey, varchar, index} from 'drizzle-orm/pg-core';
import { countries } from "./countries";

export const regions = pgTable('regions', {
  id: serial('id').primaryKey(),
  countryCode: varchar("country_code", { length: 2 })
    .notNull()
    .references(() => countries.code, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  name: text('name').notNull(),
  nameEn: text("name_en"),
  code: text('code'), // Mã vùng/state nếu có (VD: 'HCM', 'CA')
  hasCounty: boolean("has_county").notNull().default(false),//has State/Province
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index("region_country_code_idx").on(table.countryCode),
  ]
);

export type Region = typeof regions.$inferSelect;
export type NewRegion = typeof regions.$inferInsert;