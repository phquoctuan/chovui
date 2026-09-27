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
import type { MockListing } from "@/data/mock-listings";

export type ListingsApiResponse = {
  data: MockListing[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
};
import type { Listing } from "@/lib/repositories/listing-repository";
import type { ListingCreateInput } from "@/lib/validations/listing-create-schema";
import type { ListingUpdateInput } from "@/lib/validations/listing-update-schema";

export async function fetchListings(
  query: ListingQuery,
): Promise<ListingsApiResponse> {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      params.set(key, value);
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
    throw new Error(
      result.error?.message ??
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