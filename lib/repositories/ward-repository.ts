import { and, asc, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { wards} from "@/db/schema";

// export type SellerPhone = typeof sellerPhones.$inferSelect;

export const WardRepository = {

  async findById(id: number) {
    const [row] = await db
      .select()
      .from(wards)
      .where(eq(wards.id, id));
    return row ?? null;
  },

  async findByCountyId(countyId: number) {
    return db
      .select()
      .from(wards)
      .where(eq(wards.countyId, countyId))
      .orderBy(asc(wards.name));
  },
};
