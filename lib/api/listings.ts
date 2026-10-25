//// Client API layer
// Form
//  ↓
// createListing()
//  ↓
// POST /api/listings
//  ↓
// Service
//  ↓
// Repository
//  ↓
// Database
import type {
  ListingQuery,
} from "@/data/listings";
// import type { MockListing } from "@/data/mock-listings";


import type { Listing } from "@/db/schema";
// import type { Listing } from "@/lib/repositories/listing-repository";
import type { ListingCreateInput } from "@/lib/validations/listing/listing-create-schema.js";
import type { ListingUpdateInput } from "@/lib/validations/listing/listing-update-schema.js";
import type { ListingImage } from "@/lib/repositories/listing-image-repository";

export type ListingsApiResponse = {
  data: Listing[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
};

export async function fetchListings(
  query: ListingQuery,
): Promise<ListingsApiResponse> {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      params.set(key, String(value));
    }
  });

  const response = await fetch(
    `/api/listings?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error("Không thể tải danh sách tin đăng");
  }

  return response.json();
}

//client
export async function createListing(
    data: ListingCreateInput,)
{
  const response = await fetch("/api/listings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    // console.log(result.error?? "Error when create listing");
    throw new Error(
      result.error??
        "Failed to create listing",
    );
  }

  return result.data;
}

export async function updateListing(
  listingId: string,
  data: ListingUpdateInput,
) {
  const response = await fetch(
    `/api/listings/${listingId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error?.message ??
        "Failed to update listing",
    );
  }

  return result.data;
}

export async function getMyListings() : Promise<Listing[]>{
  const response = await fetch("/api/listings/mine");

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error?.message ??
        "Failed to fetch my listings",
    );
  }

  return result.data;
}

export async function getListing(
  listingId: string,
) {
  const response = await fetch(
    `/api/listings/${listingId}`,
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error?.message ??
        "Failed to fetch listing",
    );
  }

  return result.data;
}

export async function deleteListing(
  listingId: string,
) {
  const response = await fetch(
    `/api/listings/${listingId}`,
    {
      method: "DELETE",
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error?.message ??
        "Failed to delete listing",
    );
  }

  return result.data;
}

export async function getPublicListing(
  listingId: string,
) {
  const response = await fetch(
    `/api/listings/public/${listingId}`,
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error?.message ??
        "Failed to fetch listing",
    );
  }

  return result.data;
}

export async function getListingImages(
  listingId: string,
): Promise<ListingImage[]> {
  const response = await fetch(
    `/api/listings/public/${listingId}/images`,
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error?.message ??
        "Failed to fetch listing images",
    );
  }

  return result.data;
}

// File
//  ↓
// POST multipart/form-data
//  ↓
// LocalImageStorage
//  ↓
// public/uploads/listings/...
//  ↓
// ListingImageService
//  ↓
// listing_images
export async function addListingImage(
  listingId: string,
  file: File,
  sortOrder = 0,
): Promise<ListingImage> {
  const formData = new FormData();

  formData.append("file", file);
  formData.append(
    "sortOrder",
    String(sortOrder),
  );

  const response = await fetch(
    `/api/listings/${listingId}/images`,
    {
      method: "POST",
      body: formData,
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error?.message ??
        "Failed to upload listing image",
    );
  }

  return result.data;
}

export async function deleteListingImage(
  listingId: string,
  imageId: string,
): Promise<ListingImage> {
  const response = await fetch(
    `/api/listings/${listingId}/images/${imageId}`,
    {
      method: "DELETE",
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error?.message ??
        "Failed to delete listing image",
    );
  }

  return result.data;
}

export async function reorderListingImages(
  listingId: string,
  imageIds: string[],
): Promise<ListingImage[]> {
  const response = await fetch(
    `/api/listings/${listingId}/images/reorder`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageIds }),
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error?.message ??
        "Không thể cập nhật thứ tự hình ảnh",
    );
  }

  return result.data;
}