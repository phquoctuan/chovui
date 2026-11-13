import {
  pgTable,
  varchar,
  boolean,
  smallint,
  text
} from "drizzle-orm/pg-core";

export const currencies = pgTable("currencies", {
  code: varchar("code", { length: 3 }).primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  symbol: varchar("symbol", { length: 10 }).notNull(),
  decimalPlaces: smallint("decimal_places")
    .notNull()
    .default(2),
  iconUrl: text("icon_url"),
  isActive: boolean("is_active").notNull().default(true),
});

export type Currency = typeof currencies.$inferSelect;
export type NewCurrency = typeof currencies.$inferInsert;