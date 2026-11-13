import { pgTable, serial, text, integer, boolean, timestamp, foreignKey } from 'drizzle-orm/pg-core';
import { counties } from "./counties";

export const wards = pgTable('wards', {
  id: serial('id').primaryKey(),
  countyId: integer('county_id')
    .notNull()
    .references(() => counties.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  nameEn: text("name_en"),
  code: text('code'), // Mã vùng nếu có
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type Ward = typeof wards.$inferSelect;
export type NewWard = typeof wards.$inferInsert;
