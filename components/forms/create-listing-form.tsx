"use client";
// Form
//  ├─ Zod validation
//  ├─ React Hook Form
//  ├─ loading state
//  ├─ success/error toast
//  └─ reset sau khi tạo
//         ↓
// POST /api/listings
//         ↓
// Better Auth session
//         ↓
// Service
//         ↓
// Repository
//         ↓
// PostgreSQL
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  listingCreateSchema,
  type ListingCreateInput,
} from "@/lib/validations/listing-create-schema";

import { createListing } from "@/lib/api/listings";

export function CreateListingForm() {
  const queryClient = useQueryClient();
  const form = useForm<ListingCreateInput>({
    resolver: zodResolver(listingCreateSchema),

    defaultValues: {
      title: "",
      description: "",
      price: 0,
      country: "VN",
      category: "",
      location: "",
    },
  });

async function onSubmit(data: ListingCreateInput) {
  try {
    const listing = await createListing(data);

    // console.log("Created listing:", listing);

    form.reset();
    await queryClient.invalidateQueries({queryKey: ["my-listings"],});
    toast.success("Đăng tin thành công");

  } catch (error) {
    console.error("Create listing failed:", error);
    toast.error(
      error instanceof Error
        ? error.message
        : "Đăng tin thất bại",
    );
  }
}

  return (
    <Card>
      <CardHeader>
        <CardTitle>Đăng tin</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          id="create-listing-form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            {/* Title */}
            <Field>
              <FieldLabel htmlFor="title">
                Tiêu đề
              </FieldLabel>

              <Input
                id="title"
                placeholder="Ví dụ: iPhone 15 Pro Max"
                {...form.register("title")}
              />

              {form.formState.errors.title && (
                <FieldError>
                  {form.formState.errors.title.message}
                </FieldError>
              )}
            </Field>

            {/* Price */}
            <Field>
              <FieldLabel htmlFor="price">
                Giá
              </FieldLabel>

              <Input
                id="price"
                type="number"
                min={0}
                placeholder="Ví dụ: 15000"
                {...form.register("price", {
                  valueAsNumber: true,
                })}
              />

              {form.formState.errors.price && (
                <FieldError>
                  {form.formState.errors.price.message}
                </FieldError>
              )}
            </Field>

            {/* Country */}
            <Field>
              <FieldLabel htmlFor="country">
                Quốc gia
              </FieldLabel>

              <Input
                id="country"
                placeholder="VN"
                maxLength={2}
                {...form.register("country")}
              />

              {form.formState.errors.country && (
                <FieldError>
                  {form.formState.errors.country.message}
                </FieldError>
              )}
            </Field>

            {/* Category */}
            <Field>
              <FieldLabel htmlFor="category">
                Danh mục
              </FieldLabel>

              <Input
                id="category"
                placeholder="Ví dụ: Điện thoại"
                {...form.register("category")}
              />

              {form.formState.errors.category && (
                <FieldError>
                  {form.formState.errors.category.message}
                </FieldError>
              )}
            </Field>

            {/* Location */}
            <Field>
              <FieldLabel htmlFor="location">
                Địa điểm
              </FieldLabel>

              <Input
                id="location"
                placeholder="Ví dụ: Ho Chi Minh"
                {...form.register("location")}
              />

              {form.formState.errors.location && (
                <FieldError>
                  {form.formState.errors.location.message}
                </FieldError>
              )}
            </Field>

            {/* Description */}
            <Field>
              <FieldLabel htmlFor="description">
                Mô tả
              </FieldLabel>

              <Textarea
                id="description"
                placeholder="Nhập mô tả sản phẩm..."
                {...form.register("description")}
              />

              {form.formState.errors.description && (
                <FieldError>
                  {form.formState.errors.description.message}
                </FieldError>
              )}
            </Field>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Button
          type="submit"
          form="create-listing-form"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? "Đang đăng..."
            : "Đăng tin"}
        </Button>
      </CardFooter>
    </Card>
  );
}
