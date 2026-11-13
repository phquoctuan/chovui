import { eq } from "drizzle-orm";
import { getTableColumns } from "drizzle-orm";
import { db } from "@/db";
import { sellerProfiles } from "@/db/schema";
import { currencies } from "@/db/schema";

export type SellerProfile = typeof sellerProfiles.$inferSelect;

export type SellerProfileCreateInput = typeof sellerProfiles.$inferInsert;

export type SellerProfileUpdateInput = Partial<
  Pick<
    SellerProfileCreateInput,
    "fullName" | "avatarUrl" | "nationalityCode" | "defaultCountryCode" | "defaultCurrencyCode"
  >
>;

export type SellerProfileWithCurrency = SellerProfile & {
  currencySymbol: string | null;
  maxDecimalPlaces: number | null;
  currencyIconUrl: string | null;
};

export const SellerProfileRepository = {
  async findByUserId(userId: string): Promise<SellerProfileWithCurrency | null> {
    // const [profile] = await db
    //   .select()
    //   .from(sellerProfiles)
    //   .where(eq(sellerProfiles.userId, userId));

    const [result] = await db
          .select({
            ...getTableColumns(sellerProfiles),
            currencySymbol: currencies.symbol,
            maxDecimalPlaces: currencies.decimalPlaces,
            currencyIconUrl: currencies.iconUrl,
          })
          .from(sellerProfiles)
          .leftJoin(currencies, eq(sellerProfiles.defaultCurrencyCode, currencies.code))
          .where(eq(sellerProfiles.userId, userId));

    if (!result) return null;

    return result;
  },

  async create(data: SellerProfileCreateInput): Promise<SellerProfile> {
    const [profile] = await db.insert(sellerProfiles).values(data).returning();

    return profile;
  },

  async update(
    userId: string,
    data: SellerProfileUpdateInput,
  ): Promise<SellerProfile | null> {
    const [profile] = await db
      .update(sellerProfiles)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(sellerProfiles.userId, userId))
      .returning();

    return profile ?? null;
  },

  async upsert(
    userId: string,
    data: SellerProfileUpdateInput,
  ): Promise<SellerProfile> {
    const [profile] = await db
      .insert(sellerProfiles)
      .values({
        userId,
        ...data,
      })
      .onConflictDoUpdate({
        target: sellerProfiles.userId,
        set: {
          ...data,
          updatedAt: new Date(),
        },
      })
      .returning();

    return profile;
  },
};
