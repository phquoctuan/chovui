// API → authentication/session
// Service → nghiệp vụ
// Repository → database
import type {
  ListingQuery,
  ListingResult,
} from "@/data/listings";
import type { ListingCreateInput } from "@/lib/validations/listing-create-schema";
import type { ListingUpdateInput } from "@/lib/validations/listing-update-schema";
import { ListingRepository } from "@/lib/repositories/listing-repository";

export class ListingService {
  private static repository = new ListingRepository();

  static async getListings(
    query: ListingQuery,
  ): Promise<ListingResult> {
    return this.repository.findMany(query);
  }

  static async getMyListings(
    userId: string,
  ) {
    return this.repository.findManyByUserId(userId);
  }

  static async createListing(
    userId: string,
    data: ListingCreateInput,
  ) {
    return this.repository.create(userId, data);
  }

  static async updateListing(
    listingId: string,
    userId: string,
    data: ListingUpdateInput,
  ) {
    return this.repository.updateByIdForUser(
      listingId,
      userId,
      data,
    );
  }

  static async getListingForUser(
    listingId: string,
    userId: string,
  ) {
    return this.repository.findByIdForUser(
      listingId,
      userId,
    );
  }
}