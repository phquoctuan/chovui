"use client";

import { useEffect, useState} from "react";
import { toast } from "sonner";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { getListing } from "@/lib/api/listings";
import {
  listingUpdateSchema,
  type ListingUpdateInput,
} from "@/lib/validations/listing-update-schema";
import { updateListing } from "@/lib/api/listings";

type EditListingFormProps = {
  listingId: string;
};

export function EditListingForm({
  listingId,
}: EditListingFormProps) {
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
    resolver: zodResolver(listingUpdateSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      country: "",
      category: "",
      location: "",
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
      country: listing.country,
      category: listing.category,
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
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="title"
          className="text-sm font-medium"
        >
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

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="text-sm font-medium"
        >
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

      <div className="space-y-2">
        <label
          htmlFor="price"
          className="text-sm font-medium"
        >
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

      <div className="space-y-2">
        <label
          htmlFor="country"
          className="text-sm font-medium"
        >
          Quốc gia
        </label>

        <input
          id="country"
          {...form.register("country")}
          className="w-full rounded-md border px-3 py-2"
        />

        {form.formState.errors.country && (
          <p className="text-sm text-destructive">
            {form.formState.errors.country.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="category"
          className="text-sm font-medium"
        >
          Danh mục
        </label>

        <input
          id="category"
          {...form.register("category")}
          className="w-full rounded-md border px-3 py-2"
        />

        {form.formState.errors.category && (
          <p className="text-sm text-destructive">
            {form.formState.errors.category.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="location"
          className="text-sm font-medium"
        >
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

      <button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        {form.formState.isSubmitting
            ? "Đang lưu..."
            : "Lưu thay đổi"}
      </button>
    </form>
  );
}