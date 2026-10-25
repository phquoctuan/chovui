"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { useQuery } from "@tanstack/react-query";

import { getListingImages } from "@/lib/api/listings";

type ListingImageGalleryProps = {
  listingId: string;
};

export function ListingImageGallery({ listingId }: ListingImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {
    data: images = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["listing-images", listingId],
    queryFn: () => getListingImages(listingId),
  });

  if (isPending) {
    return (
      <div className="space-y-3">
        <div className="flex aspect-4/3 items-center justify-center rounded-lg border bg-muted animate-pulse">
          <ImageIcon className="size-12 text-muted-foreground" />
        </div>

        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="aspect-square rounded-md bg-muted animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (isError || images.length === 0) {
    return (
      <div className="flex aspect-4/3 items-center justify-center rounded-lg border bg-muted">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ImageIcon className="size-12" />
          <span>Chưa có hình ảnh</span>
        </div>
      </div>
    );
  }

  const safeSelectedIndex = selectedIndex < images.length ? selectedIndex : 0;

  const selectedImage = images[safeSelectedIndex];

  return (
    <div className="space-y-3 p-2">
      {/* Main image */}
      <div className="relative aspect-4/3 overflow-hidden rounded-lg border bg-muted">
        <Image
          src={selectedImage.url}
          alt={`Hình ảnh ${safeSelectedIndex + 1}`}
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-6 md:grid-cols-8">
        {images.map((image, index) => {
          const isSelected = index === safeSelectedIndex;

          return (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={[
                "relative aspect-square overflow-hidden rounded-md border bg-muted",
                "transition",
                "hover:ring-2 hover:ring-primary/50",
                isSelected ? "ring-2 ring-primary" : "",
              ].join(" ")}
              aria-label={`Chọn hình ảnh ${index + 1}`}
              aria-pressed={isSelected}
            >
              <Image
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="100px"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
