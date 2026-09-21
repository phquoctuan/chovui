import {
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const listings = pgTable(
  "listings",
  {
    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

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