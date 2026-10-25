import { ListingImageRepository } from "@/lib/repositories/listing-image-repository";

export class ListingImageService {
  static async getImages(listingId: string) {
    return ListingImageRepository.findManyByListingId(
      listingId,
    );
  }

  static async createImage(
    listingId: string,
    url: string,
    sortOrder = 0,
  ) {
    return ListingImageRepository.create({
      listingId,
      url,
      sortOrder,
    });
  }

  static async deleteImage(
    imageId: string,
    listingId: string,
  ) {
    return ListingImageRepository.deleteByIdForListing(
      imageId,
      listingId,
    );
  }

  static async reorderImages(
    listingId: string,
    imageIds: string[],
  ) {
    return ListingImageRepository.updateSortOrders(
      listingId,
      imageIds,
    );
  }
}