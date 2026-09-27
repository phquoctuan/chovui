import {
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { user } from "./auth";

export const listings = pgTable(
  "listings",
  {
    id: uuid("id")
      .defaultRandom()
      .primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, {
        onDelete: "cascade",
      }),
    title: varchar("title", {
      length: 255,
    }).notNull(),

    description: text("description"),

    price: integer("price").notNull(),

    country: varchar("country", {
      length: 2,
    }).notNull(),

    category: varchar("category", {
      length: 100,
    }).notNull(),

    location: varchar("location", {
      length: 255,
    }).notNull(),

    createdAt: timestamp("created_at", {
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),

    updatedAt: timestamp("updated_at", {
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("listings_user_id_idx").on(table.userId),
    index("listings_country_idx").on(table.country),
    index("listings_category_idx").on(
      table.category,
    ),
    index("listings_location_idx").on(
      table.location,
    ),
    index("listings_created_at_idx").on(
      table.createdAt,
    ),
  ],
);