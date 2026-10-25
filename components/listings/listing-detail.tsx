"use client";

import { useQuery } from "@tanstack/react-query";
import { CalendarDays, MapPin, Tag } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getPublicListing } from "@/lib/api/listings";
import { ListingImageGallery } from "@/components/listings/image_manage/listing-image-gallery";

type ListingDetailProps = {
  listingId: string;
};

export function ListingDetail({
  listingId,
}: ListingDetailProps) {
  const {
    data: listing,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["public-listing", listingId],
    queryFn: () => getPublicListing(listingId),
  });

  if (isPending) {
    return (
      <div className="py-12 text-center text-muted-foreground">
        Đang tải tin đăng...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-12 text-center text-destructive">
        {error instanceof Error
          ? error.message
          : "Không thể tải tin đăng"}
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="py-12 text-center text-muted-foreground">
        Không tìm thấy tin đăng
      </div>
    );
  }

  const createdAt = new Date(
    listing.createdAt,
  ).toLocaleDateString("vi-VN");

  return (
    <div className="space-y-6">
      {/* Thông tin chính */}
      <Card>
        <div className="grid md:grid-cols-2">
          {/* Khu vực hình ảnh - chuẩn bị cho bước sau */}
          <ListingImageGallery listingId={listing.id} />

          {/* Thông tin tin đăng */}
          <div>
            <CardHeader>
              <CardTitle className="text-2xl">
                {listing.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Giá */}
              <div>
                <div className="text-sm text-muted-foreground">
                  Giá
                </div>

                <div className="mt-1 text-3xl font-bold">
                  {listing.price.toLocaleString("vi-VN")}
                </div>
              </div>

              <Separator />

              {/* Metadata */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-muted-foreground" />

                  <div>
                    <div className="text-sm text-muted-foreground">
                      Địa điểm
                    </div>

                    <div className="font-medium">
                      {listing.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Tag className="size-5 text-muted-foreground" />

                  <div>
                    <div className="text-sm text-muted-foreground">
                      Danh mục
                    </div>

                    <div className="font-medium">
                      {listing.category}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays className="size-5 text-muted-foreground" />

                  <div>
                    <div className="text-sm text-muted-foreground">
                      Ngày đăng
                    </div>

                    <div className="font-medium">
                      {createdAt}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>

      {/* Mô tả */}
      <Card>
        <CardHeader>
          <CardTitle>
            Mô tả
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="whitespace-pre-wrap leading-7 text-muted-foreground">
            {listing.description || "Chưa có mô tả."}
          </div>
        </CardContent>
      </Card>

      {/* Thông tin tin đăng */}
      <Card>
        <CardHeader>
          <CardTitle>
            Thông tin tin đăng
          </CardTitle>
        </CardHeader>

        <CardContent>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-muted-foreground">
                Quốc gia
              </dt>

              <dd className="font-medium">
                {listing.country}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-muted-foreground">
                Danh mục
              </dt>

              <dd className="font-medium">
                {listing.category}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-muted-foreground">
                Địa điểm
              </dt>

              <dd className="font-medium">
                {listing.location}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-muted-foreground">
                Ngày đăng
              </dt>

              <dd className="font-medium">
                {createdAt}
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}