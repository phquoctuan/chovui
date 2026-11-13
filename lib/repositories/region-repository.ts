import { and, asc, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { regions, Region } from "@/db/schema";

// export type SellerPhone = typeof sellerPhones.$inferSelect;

export const RegionRepository = {

  async findById(id: number) {
    const [row] = await db
      .select()
      .from(regions)
      .where(eq(regions.id, id));
    return row ?? null;
  },

  async findByCountryCode(countryCode: string) {
    return db
      .select()
      .from(regions)
      .where(eq(regions.countryCode, countryCode))
      .orderBy(asc(regions.name));
  },
};
