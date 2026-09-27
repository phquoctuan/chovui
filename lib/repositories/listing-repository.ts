import {
  and,
  asc,
  count,
  eq,
  gte,
  ilike,
  lte,
} from "drizzle-orm";
import type { InferSelectModel } from "drizzle-orm";

import { db } from "@/db";
import { listings } from "@/db/schema";

import type {
  ListingQuery,
  ListingResult,
} from "@/data/listings";

import type {ListingCreateInput,} from "@/lib/validations/listing-create-schema";
import type { ListingUpdateInput } from "@/lib/validations/listing-update-schema";

export type Listing = InferSelectModel<typeof listings>; //sau này nên tách ra thành file riêng
// export type Listing = typeof listings.$inferSelect;

export interface IListingRepository {
  findMany(query: ListingQuery): Promise<ListingResult>;

  findManyByUserId(
    userId: string,
  ): Promise<Listing[]>;

  create(
    userId: string,
    data: ListingCreateInput,
  ): Promise<Listing>;

  findByIdForUser(
    listingId: string,
    userId: string,
  ): Promise<Listing | null>;

  updateByIdForUser(
    listingId: string,
    userId: string,
    data: ListingUpdateInput,
  ): Promise<Listing | null>;

}

export class ListingRepository
  implements IListingRepository
{
  async findMany(
    query: ListingQuery,
  ): Promise<ListingResult> {
    const page = Number(query.page ?? 1);
    const pageSize = Number(query.pageSize ?? 20);

    const offset = (page - 1) * pageSize;

    const conditions = [];

    if (query.q) {
      conditions.push(
        ilike(listings.title, `%${query.q}%`),
      );
    }

    if (query.country) {
      conditions.push(
        eq(listings.country, query.country),
      );
    }

    if (query.category) {
      conditions.push(
        eq(listings.category, query.category),
      );
    }

    if (query.location) {
      conditions.push(
        ilike(
          listings.location,
          `%${query.location}%`,
        ),
      );
    }

    if (query.minPrice) {
      conditions.push(
        gte(
          listings.price,
          Number(query.minPrice),
        ),
      );
    }

    if (query.maxPrice) {
      conditions.push(
        lte(
          listings.price,
          Number(query.maxPrice),
        ),
      );
    }

    const whereCondition =
      conditions.length > 0
        ? and(...conditions)
        : undefined;

    const [rows, totalResult] = await Promise.all([
      db
        .select()
        .from(listings)
        .where(whereCondition)
        .orderBy(
          asc(listings.createdAt),
          asc(listings.id),
        )
        .limit(pageSize)
        .offset(offset),

      db
        .select({
          count: count(),
        })
        .from(listings)
        .where(whereCondition),
    ]);

    const totalItems = Number(
      totalResult[0]?.count ?? 0,
    );

    return {
      listings: rows,
      currentPage: page,
      pageSize,
      totalItems,
      totalPages: Math.ceil(
        totalItems / pageSize,
      ),
    };
  }

  async findManyByUserId(
    userId: string,
  ): Promise<Listing[]> {
    return db
      .select()
      .from(listings)
      .where(eq(listings.userId, userId))
      .orderBy(
        asc(listings.createdAt),
        asc(listings.id),
      );
  }

  async create(
    userId: string,
    data: ListingCreateInput,
    ): Promise<Listing> {
      const [listing] = await db
        .insert(listings)
        .values({
          userId,
          title: data.title,
          description: data.description ?? null,
          price: data.price,
          country: data.country,
          category: data.category,
          location: data.location,
        })
        .returning();

      return listing;
  }

  async findByIdForUser(
    listingId: string,
    userId: string,
    ): Promise<Listing | null> {
    const [listing] = await db
      .select()
      .from(listings)
      .where(
        and(
          eq(listings.id, listingId),
          eq(listings.userId, userId),
        ),
      );

    return listing ?? null;
  }

  async updateByIdForUser(
    listingId: string,
    userId: string,
    data: ListingUpdateInput,
  ): Promise<Listing | null> {
    const [listing] = await db
      .update(listings)
      .set({
        title: data.title,
        description: data.description ?? null,
        price: data.price,
        country: data.country,
        category: data.category,
        location: data.location,
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(listings.id, listingId),
          eq(listings.userId, userId),
        ),
      )
      .returning();

    return listing ?? null;
  }
}

