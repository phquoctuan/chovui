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