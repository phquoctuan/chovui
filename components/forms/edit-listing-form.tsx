"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

import { ListingImageUploadEdit } from "@/components/listings/image_manage/listing-image-upload-edit";

type EditListingFormProps = {
  listingId: string;
};

export function EditListingForm({ listingId }: EditListingFormProps) {
  const queryClient = useQueryClient();

  const {
    data: listing,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["listing", listingId],
    queryFn: () => getListing(listingId),
  });

  const form = useForm<ListingUpdateInput>({
    resolver: zodResolver(baseListingSchema  as any),
    defaultValues: {
      title: "",
      description: "",
      price: "0",
    },
  });

  const { isSubmitting } = form.formState;

  useEffect(() => {
    if (listing) {
      form.reset({
        title: listing.title,
        description: listing.description ?? "",
        price: listing.price,
        countryCode: listing.countryCode,
        categoryId: listing.categoryId,
        location: listing.location,
      });
    }
  }, [listing, form]);

  async function onSubmit(data: ListingUpdateInput) {
    try {
      await updateListing(listingId, data);

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["listing", listingId] }),
        queryClient.invalidateQueries({ queryKey: ["my-listings"] }),
      ]);

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
      <div className="py-8 text-center text-muted-foreground">
        Đang tải tin đăng...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-8 text-center text-destructive">
        {error instanceof Error ? error.message : "Không thể tải tin đăng"}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="flex flex-col items-center text-center">
          <CardTitle className="text-lg font-heading text-primary">
            Chỉnh sửa tin đăng
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form
            id="edit-listing-form"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FieldGroup>
              {/* Tiêu đề */}
              <Field data-invalid={!!form.formState.errors.title}>
                <FieldLabel htmlFor="title">Tiêu đề</FieldLabel>
                <Input
                  id="title"
                  disabled={isSubmitting}
                  {...form.register("title")}
                />
                <FieldError>
                  {form.formState.errors.title?.message}
                </FieldError>
              </Field>

              {/* Mô tả */}
              <Field data-invalid={!!form.formState.errors.description}>
                <FieldLabel htmlFor="description">Mô tả</FieldLabel>
                <Textarea
                  id="description"
                  disabled={isSubmitting}
                  rows={5}
                  {...form.register("description")}
                />
                <FieldError>
                  {form.formState.errors.description?.message}
                </FieldError>
              </Field>

              {/* Giá */}
              <Field data-invalid={!!form.formState.errors.price}>
                <FieldLabel htmlFor="price">Giá</FieldLabel>
                <Input
                  id="price"
                  type="number"
                  min={0}
                  disabled={isSubmitting}
                  {...form.register("price", {
                    valueAsNumber: true,
                  })}
                />
                <FieldError>
                  {form.formState.errors.price?.message}
                </FieldError>
              </Field>

              {/* Quốc gia */}
              <Field data-invalid={!!form.formState.errors.countryCode}>
                <FieldLabel htmlFor="country">Quốc gia</FieldLabel>
                <Input
                  id="country"
                  disabled={isSubmitting}
                  {...form.register("countryCode")}
                />
                <FieldError>
                  {form.formState.errors.countryCode?.message}
                </FieldError>
              </Field>

              {/* Danh mục */}
              <Field data-invalid={!!form.formState.errors.categoryId}>
                <FieldLabel htmlFor="category">Danh mục</FieldLabel>
                <Input
                  id="category"
                  disabled={isSubmitting}
                  {...form.register("categoryId")}
                />
                <FieldError>
                  {form.formState.errors.categoryId?.message}
                </FieldError>
              </Field>

              {/* Địa điểm */}
              <Field data-invalid={!!form.formState.errors.location}>
                <FieldLabel htmlFor="location">Địa điểm</FieldLabel>
                <Input
                  id="location"
                  disabled={isSubmitting}
                  {...form.register("location")}
                />
                <FieldError>
                  {form.formState.errors.location?.message}
                </FieldError>
              </Field>

              <div className="space-y-3">
                <FieldLabel>Hình ảnh</FieldLabel>
                  <p className= "text-sm text-muted-foreground">(Kéo thả để sắp xếp lại thứ tự ảnh)</p>
                  <ListingImageUploadEdit listingId={listingId} />
              </div>
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter>
          <div className="flex w-full justify-end">
            <Button
              type="submit"
              form="edit-listing-form"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Đang lưu..." : "Lưu thay đổi"}
            </Button>
          </div>
        </CardFooter>
      </Card>
      {/* {listing && (
        <Card>
          <CardContent className="pt-6">
            <ListingImageManagerSeftQuery
              listingId={listing.id}
            />
          </CardContent>
        </Card>
      )} */}
    </div>
  );
}