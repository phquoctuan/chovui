import { pgTable, serial, text, integer, boolean, timestamp, foreignKey } from 'drizzle-orm/pg-core';
import { regions } from "./regions";

export const counties = pgTable('counties', {
  id: serial('id').primaryKey(),
  regionId: integer('region_id')
    .notNull()
    .references(() => regions.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  nameEn: text("name_en"),
  code: text('code'), // Mã vùng region nếu có (VD: 'CTHANH', 'MOCAY')
  hasWard: boolean("has_ward").notNull().default(false),//has State/Province
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type County = typeof counties.$inferSelect;
export type NewCounty = typeof counties.$inferInsert;