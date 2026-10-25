import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { sellerPhoneVerifications } from "@/db/schema";

export const SellerPhoneVerificationRepository = {
  async create(
    userId: string,
    phoneId: string,
    codeHash: string,
    expiresAt: Date,
  ) {
    await db
      .delete(sellerPhoneVerifications)
      .where(
        and(
          eq(sellerPhoneVerifications.userId, userId),
          eq(sellerPhoneVerifications.phoneId, phoneId),
        ),
      );
    const [row] = await db
      .insert(sellerPhoneVerifications)
      .values({
        userId,
        phoneId,
        codeHash,
        expiresAt,
      })
      .returning();
    return row;
  },
  async findLatest(userId: string, phoneId: string) {
    const [row] = await db
      .select()
      .from(sellerPhoneVerifications)
      .where(
        and(
          eq(sellerPhoneVerifications.userId, userId),
          eq(sellerPhoneVerifications.phoneId, phoneId),
        ),
      )
      .orderBy(desc(sellerPhoneVerifications.createdAt))
      .limit(1);
    return row ?? null;
  },
  async incrementAttempts(id: string) {
    const current = await db
      .select({ attempts: sellerPhoneVerifications.attempts })
      .from(sellerPhoneVerifications)
      .where(eq(sellerPhoneVerifications.id, id));
    if (!current[0]) return;
    await db
      .update(sellerPhoneVerifications)
      .set({ attempts: current[0].attempts + 1 })
      .where(eq(sellerPhoneVerifications.id, id));
  },
  async delete(id: string) {
    await db
      .delete(sellerPhoneVerifications)
      .where(eq(sellerPhoneVerifications.id, id));
  },
};
