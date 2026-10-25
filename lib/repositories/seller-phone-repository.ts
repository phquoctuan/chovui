import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { sellerPhones } from "@/db/schema";

export type SellerPhone = typeof sellerPhones.$inferSelect;
export type SellerPhoneInput = Pick<
  typeof sellerPhones.$inferInsert,
  "phone" | "label"
>;

export const SellerPhoneRepository = {

  async findByUserId(userId: string) {
    return db
      .select()
      .from(sellerPhones)
      .where(eq(sellerPhones.userId, userId))
      .orderBy(desc(sellerPhones.primary), desc(sellerPhones.createdAt));
  },

  async findById(userId: string, id: string) {
    const [row] = await db
      .select()
      .from(sellerPhones)
      .where(and(eq(sellerPhones.userId, userId), eq(sellerPhones.id, id)));
    return row ?? null;
  },

  async countByUserId(userId: string) {
    const rows = await db
      .select({ id: sellerPhones.id })
      .from(sellerPhones)
      .where(eq(sellerPhones.userId, userId));
    return rows.length;
  },

  async create(userId: string, data: SellerPhoneInput & { primary?: boolean }) {
    return db.transaction(async (tx) => {
      if (data.primary)
        await tx
          .update(sellerPhones)
          .set({ primary: false, updatedAt: new Date() })
          .where(eq(sellerPhones.userId, userId));
      const [row] = await tx
        .insert(sellerPhones)
        .values({
          userId,
          phone: data.phone,
          label: data.label,
          primary: data.primary ?? false,
        })
        .returning();
      return row;
    });
  },

  async update(
    userId: string,
    id: string,
    data: SellerPhoneInput & { primary?: boolean },
  ) {
    return db.transaction(async (tx) => {
      if (data.primary)
        await tx
          .update(sellerPhones)
          .set({ primary: false, updatedAt: new Date() })
          .where(eq(sellerPhones.userId, userId));
      const existing = await tx
        .select()
        .from(sellerPhones)
        .where(and(eq(sellerPhones.userId, userId), eq(sellerPhones.id, id)));
      if (!existing[0]) return null;
      const phoneChanged = existing[0].phone !== data.phone;
      const [row] = await tx
        .update(sellerPhones)
        .set({
          phone: data.phone,
          label: data.label,
          primary: data.primary ?? existing[0].primary,
          ...(phoneChanged ? { verified: false, verifiedAt: null } : {}),
          updatedAt: new Date(),
        })
        .where(and(eq(sellerPhones.userId, userId), eq(sellerPhones.id, id)))
        .returning();
      return row ?? null;
    });
  },

  async delete(userId: string, id: string) {
    return db.transaction(async (tx) => {
      const [deleted] = await tx
        .delete(sellerPhones)
        .where(and(eq(sellerPhones.userId, userId), eq(sellerPhones.id, id)))
        .returning();
      if (!deleted) return null;
      if (deleted.primary) {
        const [next] = await tx
          .select()
          .from(sellerPhones)
          .where(eq(sellerPhones.userId, userId))
          .orderBy(desc(sellerPhones.createdAt))
          .limit(1);
        if (next)
          await tx
            .update(sellerPhones)
            .set({ primary: true, updatedAt: new Date() })
            .where(eq(sellerPhones.id, next.id));
      }
      return deleted;
    });
  },
  
  async markVerified(userId: string, id: string) {
    const [row] = await db
      .update(sellerPhones)
      .set({ verified: true, verifiedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(sellerPhones.userId, userId), eq(sellerPhones.id, id)))
      .returning();
    return row ?? null;
  },
};
