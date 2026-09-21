import type {
  ListingQuery,
  ListingResult,
} from "@/data/listings";

import { ListingRepository } from "@/lib/repositories/listing-repository";

export class ListingService {
  private static repository = new ListingRepository();

  static async getListings(
    query: ListingQuery,
  ): Promise<ListingResult> {
    return this.repository.findMany(query);
  }
}