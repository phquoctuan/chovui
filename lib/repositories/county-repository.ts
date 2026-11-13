import { and, asc, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { counties, County } from "@/db/schema";

// export type SellerPhone = typeof sellerPhones.$inferSelect;

export const CountyRepository = {

  async findById(id: number) {
    const [row] = await db
      .select()
      .from(counties)
      .where(eq(counties.id, id));
    return row ?? null;
  },

  async findByRegionId(regionId: number) {
    return db
      .select()
      .from(counties)
      .where(eq(counties.regionId, regionId))
      .orderBy(asc(counties.name));
  },
};
