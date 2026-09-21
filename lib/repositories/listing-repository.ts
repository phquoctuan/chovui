import {
  and,
  asc,
  count,
  eq,
  gte,
  ilike,
  lte,
} from "drizzle-orm";

import { db } from "@/db";
import { listings } from "@/db/schema";

import type {
  ListingQuery,
  ListingResult,
} from "@/data/listings";

export interface IListingRepository {
  findMany(query: ListingQuery): Promise<ListingResult>;
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
}