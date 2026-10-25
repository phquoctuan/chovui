import { eq } from "drizzle-orm";

import { db } from "@/db";
import { sellerProfiles } from "@/db/schema";

export type SellerProfile = typeof sellerProfiles.$inferSelect;

export type SellerProfileCreateInput = typeof sellerProfiles.$inferInsert;

export type SellerProfileUpdateInput = Partial<
  Pick<
    SellerProfileCreateInput,
    "fullName" | "avatarUrl" | "nationalityCode" | "defaultCountryCode"
  >
>;

export const SellerProfileRepository = {
  async findByUserId(userId: string): Promise<SellerProfile | null> {
    const [profile] = await db
      .select()
      .from(sellerProfiles)
      .where(eq(sellerProfiles.userId, userId));

    return profile ?? null;
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
