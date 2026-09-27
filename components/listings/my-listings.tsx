"use client";

import { useQuery } from "@tanstack/react-query";
import { getMyListings } from "@/lib/api/listings";
import { Link } from "@/i18n/navigation";

export function MyListings() {
  const {
    data: listings,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-listings"],
    queryFn: getMyListings,
  });

  if (isPending) {
    return (
      <div className="py-8 text-center">
        Đang tải tin đăng...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-8 text-center text-destructive">
        {error instanceof Error
          ? error.message
          : "Không thể tải tin đăng"}
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="py-8 text-center">
        Bạn chưa có tin đăng nào.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="rounded-lg border p-4"
        >
          <h2 className="font-semibold">
            {listing.title}
          </h2>

          <p className="mt-1 text-sm">
            {listing.price.toLocaleString("vi-VN")} ₫
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {listing.location}
          </p>
          <Link
            href={`/listings/${listing.id}/edit`}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
}