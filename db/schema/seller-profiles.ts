import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

import { user } from "./auth";
import { email } from "better-auth";

export const sellerProfiles = pgTable("seller_profiles", {
  userId: text("user_id")
    .primaryKey()
    .references(() => user.id, {
      onDelete: "cascade",
    }),

  fullName: text("full_name"),

  // piNetworkAccount: text("pinetwork_account"),
  // piNetworkEmail: text("pinetwork_email"),

  avatarUrl: text("avatar_url"),

  // Quốc tịch: không quyết định quốc gia tìm kiếm.
  nationalityCode: text("nationality_code"),

  // Quốc gia mặc định khi tìm kiếm, đăng tin và tạo địa chỉ.
  defaultCountryCode: text("default_country_code")
    .notNull()
    .default("VN"),

    // Tiền tệ mặc định khi đăng tin và tìm kiếm.
  defaultCurrencyCode: text("default_currency_code")
    .notNull()
    .default("PI"),
  /**
   * Server-controlled readiness flag.
   *
   * New user => false.
   * Will be recalculated when all required seller
   * information has been completed.
   */
  canCreateListing: boolean("can_create_listing").notNull().default(false),

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
});
