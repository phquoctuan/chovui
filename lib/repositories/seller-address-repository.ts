import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { sellerAddresses } from "@/db/schema";
import type { SellerAddressValidated, SellerAddressInput } from "@/lib/validations/user/account-contact";

export const SellerAddressRepository = {
  ///findByUserId-----
  async findByUserId(userId: string) {
    return db
      .select()
      .from(sellerAddresses)
      .where(eq(sellerAddresses.userId, userId))
      .orderBy(desc(sellerAddresses.primary), desc(sellerAddresses.createdAt));
  },
  async findById(userId: string, id: string) {
    const [row] = await db
      .select()
      .from(sellerAddresses)
      .where(and(eq(sellerAddresses.userId, userId), eq(sellerAddresses.id, id)));
    return row ?? null;
  },
  async create(userId: string, data: SellerAddressValidated) {
    return db.transaction(async (tx) => {
      const existing = await tx
        .select({ id: sellerAddresses.id })
        .from(sellerAddresses)
        .where(eq(sellerAddresses.userId, userId));
      const primary = data.primary || existing.length === 0;
      if (primary)
        await tx
          .update(sellerAddresses)
          .set({ primary: false, updatedAt: new Date() })
          .where(eq(sellerAddresses.userId, userId));
      const [row] = await tx
        .insert(sellerAddresses)
        .values({ ...data, userId, primary })
        .returning();
      return row;
    });
  },
  ///update-----
  async update(userId: string, id: string, data: SellerAddressValidated) {
    return db.transaction(async (tx) => {
      const existing = await tx
        .select()
        .from(sellerAddresses)
        .where(and(eq(sellerAddresses.userId, userId), eq(sellerAddresses.id, id)));
      if (!existing[0]) return null;
      if (data.primary)
        await tx
          .update(sellerAddresses)
          .set({ primary: false, updatedAt: new Date() })
          .where(eq(sellerAddresses.userId, userId));
      const [row] = await tx
        .update(sellerAddresses)
        .set({ ...data, updatedAt: new Date() })
        .where(and(eq(sellerAddresses.userId, userId), eq(sellerAddresses.id, id)))
        .returning();
      return row ?? null;
    });
  },
  ///delete-----
  async delete(userId: string, id: string) {
    return db.transaction(async (tx) => {
      const [deleted] = await tx
        .delete(sellerAddresses)
        .where(and(eq(sellerAddresses.userId, userId), eq(sellerAddresses.id, id)))
        .returning();
      if (!deleted) return null;
      if (deleted.primary) {
        const [next] = await tx
          .select()
          .from(sellerAddresses)
          .where(eq(sellerAddresses.userId, userId))
          .orderBy(desc(sellerAddresses.createdAt))
          .limit(1);
        if (next)
          await tx
            .update(sellerAddresses)
            .set({ primary: true, updatedAt: new Date() })
            .where(eq(sellerAddresses.id, next.id));
      }
      return deleted;
    });
  },
  async setPrimary(userId: string, id: string) {
    return db.transaction(async (tx) => {
      const existing = await tx
        .select({ id: sellerAddresses.id })
        .from(sellerAddresses)
        .where(and(eq(sellerAddresses.userId, userId), eq(sellerAddresses.id, id)));
      if (!existing[0]) return null;
      await tx
        .update(sellerAddresses)
        .set({ primary: false, updatedAt: new Date() })
        .where(eq(sellerAddresses.userId, userId));
      const [row] = await tx
        .update(sellerAddresses)
        .set({ primary: true, updatedAt: new Date() })
        .where(eq(sellerAddresses.id, id))
        .returning();
      return row ?? null;
    });
  },
};
