// hooks/use-listing-images.ts

"use client";

import { useQuery } from "@tanstack/react-query";
import { getListingImages } from "@/lib/api/listings";

export const imagesQueryKey = (listingId: string) =>
  ["listing-images", listingId] as const;

export function useListingImages(listingId: string) {
  return useQuery({
    queryKey: imagesQueryKey(listingId),
    queryFn: () => getListingImages(listingId),
  });
}