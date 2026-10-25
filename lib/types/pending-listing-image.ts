import type { ListingImage } from "@/lib/repositories/listing-image-repository";

export type PendingListingImageStatus =
  | "pending"
  | "uploading"
  | "uploaded"
  | "error";

export type PendingListingImage = {
  /**
   * Local id used by React and UI.
   * This is different from ListingImage.id.
   */
  id: string;

  /**
   * Original file selected by the user.
   */
  file: File;

  /**
   * Browser object URL used for local preview.
   *
   * Example:
   * blob:http://localhost:3000/...
   */
  fileURL: string;

  /**
   * Current upload state.
   */
  status: PendingListingImageStatus;

  /**
   * Server-side image information.
   * null until the upload succeeds.
   */
  uploadedInfo: ListingImage | null;

  /**
   * Desired image order.
   * This value is sent to the API as sortOrder.
   */
  order: number;
};