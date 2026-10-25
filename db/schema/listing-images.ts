import {
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { listings } from "./listings";

export const listingImages = pgTable(
  "listing_images",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    listingId: uuid("listing_id")
      .notNull()
      .references(() => listings.id, {
        onDelete: "cascade",
      }),

    url: text("url").notNull(),

    sortOrder: integer("sort_order").notNull().default(0),

    createdAt: timestamp("created_at", {
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("listing_images_listing_id_idx").on(table.listingId),

    index("listing_images_sort_order_idx").on(table.listingId, table.sortOrder),
  ],
);
