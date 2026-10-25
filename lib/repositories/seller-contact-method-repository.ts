import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { sellerContactMethods } from "@/db/schema";

export type SellerContactMethod = typeof sellerContactMethods.$inferSelect;
export type SellerContactMethodInput = Omit<
  typeof sellerContactMethods.$inferInsert,
  "id" | "userId" | "createdAt" | "updatedAt"
>;

export const SellerContactMethodRepository = {
  async findByUserId(userId: string) {
    return db
      .select()
      .from(sellerContactMethods)
      .where(eq(sellerContactMethods.userId, userId))
      .orderBy(
        desc(sellerContactMethods.primary),
        desc(sellerContactMethods.createdAt),
      );
  },
  async findById(userId: string, id: string) {
    const [row] = await db
      .select()
      .from(sellerContactMethods)
      .where(
        and(
          eq(sellerContactMethods.userId, userId),
          eq(sellerContactMethods.id, id),
        ),
      );
    return row ?? null;
  },
  async create(userId: string, data: SellerContactMethodInput) {
    return db.transaction(async (tx) => {
      if (data.primary)
        await tx
          .update(sellerContactMethods)
          .set({ primary: false, updatedAt: new Date() })
          .where(eq(sellerContactMethods.userId, userId));
      const [row] = await tx
        .insert(sellerContactMethods)
        .values({ ...data, userId })
        .returning();
      return row;
    });
  },
  async update(userId: string, id: string, data: SellerContactMethodInput) {
    return db.transaction(async (tx) => {
      if (data.primary)
        await tx
          .update(sellerContactMethods)
          .set({ primary: false, updatedAt: new Date() })
          .where(eq(sellerContactMethods.userId, userId));
      const [row] = await tx
        .update(sellerContactMethods)
        .set({ ...data, updatedAt: new Date() })
        .where(
          and(
            eq(sellerContactMethods.userId, userId),
            eq(sellerContactMethods.id, id),
          ),
        )
        .returning();
      return row ?? null;
    });
  },
  async delete(userId: string, id: string) {
    return db.transaction(async (tx) => {
      const [deleted] = await tx
        .delete(sellerContactMethods)
        .where(
          and(
            eq(sellerContactMethods.userId, userId),
            eq(sellerContactMethods.id, id),
          ),
        )
        .returning();
      if (!deleted) return null;
      if (deleted.primary) {
        const [next] = await tx
          .select()
          .from(sellerContactMethods)
          .where(eq(sellerContactMethods.userId, userId))
          .orderBy(desc(sellerContactMethods.createdAt))
          .limit(1);
        if (next)
          await tx
            .update(sellerContactMethods)
            .set({ primary: true, updatedAt: new Date() })
            .where(eq(sellerContactMethods.id, next.id));
      }
      return deleted;
    });
  },
};
