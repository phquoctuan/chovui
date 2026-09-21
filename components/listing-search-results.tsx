"use client";

import {
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";

import { fetchListings } from "@/lib/api/listings";
import type { ListingQuery } from "@/data/listings";

import { ListingCard } from "@/components/listing-card";
import { ListingPagination } from "@/components/listing-pagination";

type ListingSearchResultsProps = {
  query: ListingQuery;
};

export function ListingSearchResults({
  query,
}: ListingSearchResultsProps) {
  const { data, isPending, isError, error, isFetching } =
    useQuery({
      queryKey: ["listings", query],
      queryFn: () => fetchListings(query),
      placeholderData: keepPreviousData,
    });

  if (isPending) {
    return (
      <p className="text-muted-foreground">
        Đang tải tin đăng...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-destructive">
        {error.message}
      </p>
    );
  }

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Tìm thấy {data.pagination.totalItems} tin đăng
        </p>

        {isFetching && (
          <span className="text-sm text-muted-foreground">
            Đang cập nhật...
          </span>
        )}
      </div>

      {data.data.length === 0 ? (
        <p className="text-muted-foreground">
          Không tìm thấy tin đăng phù hợp.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {data.data.map((listing) => (
            <ListingCard
              key={listing.id}
              title={listing.title}
              price={listing.price}
              location={listing.location}
            />
          ))}
        </div>
      )}

      {data.pagination.totalPages > 1 && (
        <ListingPagination
          currentPage={data.pagination.currentPage}
          pageSize={data.pagination.pageSize}
          totalPages={data.pagination.totalPages}
        />
      )}
    </>
  );
}