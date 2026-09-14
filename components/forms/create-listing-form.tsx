"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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

const createListingSchema = z.object({
  title: z
    .string()
    .min(5, "Tiêu đề phải có ít nhất 5 ký tự")
    .max(100, "Tiêu đề tối đa 100 ký tự"),

  price: z
    .string()
    .min(1, "Vui lòng nhập giá"),

  description: z
    .string()
    .min(20, "Mô tả phải có ít nhất 20 ký tự"),
});

type CreateListingFormData =
  z.infer<typeof createListingSchema>;

export function CreateListingForm() {
  const form = useForm<CreateListingFormData>({
    resolver: zodResolver(createListingSchema),

    defaultValues: {
      title: "",
      price: "",
      description: "",
    },
  });

  function onSubmit(data: CreateListingFormData) {
    console.log(data);
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

            <Field>
              <FieldLabel htmlFor="price">
                Giá
              </FieldLabel>

              <Input
                id="price"
                placeholder="Ví dụ: 15000000"
                {...form.register("price")}
              />

              {form.formState.errors.price && (
                <FieldError>
                  {form.formState.errors.price.message}
                </FieldError>
              )}
            </Field>

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
        >
          Đăng tin
        </Button>
      </CardFooter>
    </Card>
  );
}