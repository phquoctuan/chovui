"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { getListing, updateListing } from "@/lib/api/listings";
import {
  baseListingSchema,
  type ListingUpdateInput,
} from "@/lib/validations/listing/listing-base-schema";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type EditListingFormProps = {
  listingId: string;
};

export function EditListingForm({ listingId }: EditListingFormProps) {
  const {
    data: listing,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["listing", listingId],
    queryFn: () => getListing(listingId),
  });

  const queryClient = useQueryClient();

  const form = useForm<ListingUpdateInput>({
    resolver: zodResolver(baseListingSchema as any),
    defaultValues: {
      title: "",
      description: "",
      price: "0",
    },
  });

  useEffect(() => {
    if (!listing) {
      return;
    }

    form.reset({
      title: listing.title,
      description: listing.description ?? "",
      price: listing.price,
      countryCode: listing.countryCode,
      categoryId: listing.categoryId,
      location: listing.location,
    });
  }, [listing, form]);

  async function onSubmit(data: ListingUpdateInput) {
    try {
      await updateListing(listingId, data);

      await queryClient.invalidateQueries({
        queryKey: ["listing", listingId],
      });

      await queryClient.invalidateQueries({
        queryKey: ["my-listings"],
      });

      toast.success("Cập nhật tin đăng thành công");
    } catch (error) {
      console.error("Update listing failed:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Không thể cập nhật tin đăng",
      );
    }
  }

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

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-col items-center text-center">
        <CardTitle className="text-xl font-bold text-primary">
          Chỉnh sửa tin đăng
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          id="edit-listing-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Tiêu đề */}
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Tiêu đề
            </label>
            <input
              id="title"
              {...form.register("title")}
              className="w-full rounded-md border px-3 py-2"
            />
            {form.formState.errors.title && (
              <p className="text-sm text-destructive">
                {form.formState.errors.title.message}
              </p>
            )}
          </div>

          {/* Mô tả */}
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Mô tả
            </label>
            <textarea
              id="description"
              {...form.register("description")}
              rows={5}
              className="w-full rounded-md border px-3 py-2"
            />
            {form.formState.errors.description && (
              <p className="text-sm text-destructive">
                {form.formState.errors.description.message}
              </p>
            )}
          </div>

          {/* Giá */}
          <div className="space-y-2">
            <label htmlFor="price" className="text-sm font-medium">
              Giá
            </label>
            <input
              id="price"
              type="number"
              min={0}
              {...form.register("price", {
                valueAsNumber: true,
              })}
              className="w-full rounded-md border px-3 py-2"
            />
            {form.formState.errors.price && (
              <p className="text-sm text-destructive">
                {form.formState.errors.price.message}
              </p>
            )}
          </div>

          {/* Quốc gia */}
          <div className="space-y-2">
            <label htmlFor="country" className="text-sm font-medium">
              Quốc gia
            </label>
            <input
              id="country"
              {...form.register("countryCode")}
              className="w-full rounded-md border px-3 py-2"
            />
            {form.formState.errors.countryCode && (
              <p className="text-sm text-destructive">
                {form.formState.errors.countryCode.message}
              </p>
            )}
          </div>

          {/* Danh mục */}
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">
              Danh mục
            </label>
            <input
              id="category"
              {...form.register("categoryId")}
              className="w-full rounded-md border px-3 py-2"
            />
            {form.formState.errors.categoryId && (
              <p className="text-sm text-destructive">
                {form.formState.errors.categoryId.message}
              </p>
            )}
          </div>

          {/* Địa điểm */}
          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium">
              Địa điểm
            </label>
            <input
              id="location"
              {...form.register("location")}
              className="w-full rounded-md border px-3 py-2"
            />
            {form.formState.errors.location && (
              <p className="text-sm text-destructive">
                {form.formState.errors.location.message}
              </p>
            )}
          </div>
        </form>
      </CardContent>

      <CardFooter>
        <div className="flex w-full justify-end">
          <button
            type="submit"
            form="edit-listing-form"
            disabled={form.formState.isSubmitting}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {form.formState.isSubmitting ? "Đang lưu..." : "Lưu thay đổi"}
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}