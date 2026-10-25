import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { listingImages } from "@/db/schema";

export type ListingImage = typeof listingImages.$inferSelect;

export type ListingImageCreateInput = typeof listingImages.$inferInsert;

export const ListingImageRepository = {
  async findManyByListingId(listingId: string): Promise<ListingImage[]> {
    return db
      .select()
      .from(listingImages)
      .where(eq(listingImages.listingId, listingId))
      .orderBy(asc(listingImages.sortOrder), asc(listingImages.id));
  },

  async findByIdForListing(
    imageId: string,
    listingId: string,
  ): Promise<ListingImage | null> {
    const [image] = await db
      .select()
      .from(listingImages)
      .where(
        and(
          eq(listingImages.id, imageId),
          eq(listingImages.listingId, listingId),
        ),
      );

    return image ?? null;
  },

  async create(data: ListingImageCreateInput): Promise<ListingImage> {
    const [image] = await db.insert(listingImages).values(data).returning();

    return image;
  },

  async deleteByIdForListing(
    imageId: string,
    listingId: string,
  ): Promise<ListingImage | null> {
    return db.transaction(async (tx) => {
      const [deletedImage] = await tx
        .delete(listingImages)
        .where(
          and(
            eq(listingImages.id, imageId),
            eq(listingImages.listingId, listingId),
          ),
        )
        .returning();

      if (!deletedImage) {
        return null;
      }

      const remainingImages = await tx
        .select({
          id: listingImages.id,
        })
        .from(listingImages)
        .where(eq(listingImages.listingId, listingId))
        .orderBy(asc(listingImages.sortOrder), asc(listingImages.id));

      for (const [index, image] of remainingImages.entries()) {
        await tx
          .update(listingImages)
          .set({
            sortOrder: index,
          })
          .where(
            and(
              eq(listingImages.id, image.id),
              eq(listingImages.listingId, listingId),
            ),
          );
      }

      return deletedImage;
    });
  },

  async updateSortOrders(
    listingId: string,
    imageIds: string[],
  ): Promise<ListingImage[]> {
    return db.transaction(async (tx) => {
      const existingImages = await tx
        .select({
          id: listingImages.id,
        })
        .from(listingImages)
        .where(eq(listingImages.listingId, listingId));

      const existingIds = new Set(existingImages.map((image) => image.id));

      // Phải chứa đúng tất cả ảnh của listing.
      if (
        imageIds.length !== existingImages.length ||
        imageIds.some((id) => !existingIds.has(id)) ||
        new Set(imageIds).size !== imageIds.length
      ) {
        throw new Error("Danh sách hình ảnh không hợp lệ");
      }

      for (const [index, imageId] of imageIds.entries()) {
        await tx
          .update(listingImages)
          .set({
            sortOrder: index,
          })
          .where(
            and(
              eq(listingImages.id, imageId),
              eq(listingImages.listingId, listingId),
            ),
          );
      }

      return tx
        .select()
        .from(listingImages)
        .where(eq(listingImages.listingId, listingId))
        .orderBy(asc(listingImages.sortOrder), asc(listingImages.id));
    });
  },
};
