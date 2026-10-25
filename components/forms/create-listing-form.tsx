"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  addListingImage,
  createListing,
  deleteListingImage,
  updateListing,
} from "@/lib/api/listings";

import {
  listingCreateSchema,
  type ListingCreateInput,
} from "@/lib/validations/listing/listing-create-schema";

import type { PendingListingImage } from "@/lib/types/pending-listing-image";
import { ListingImageUploadCreate } from "@/components/listings/image_manage/listing-image-upload-create";
import { useQueryClient } from "@tanstack/react-query";
import { LISTING_IMAGE_RESIZE } from "@/const";
import { resizeImage } from "@/lib/image/resize-image";

type CreateListingFormProps = {
  initialData?: ListingCreateInput;
  initialListingId?: string | null;
};

const DEFAULT_FORM_VALUES: ListingCreateInput = {
  title: "",
  description: "",
  price: 0,
  country: "VN",
  category: "",
  location: "",
};

export function CreateListingForm({
  initialData,
  initialListingId = null,
}: CreateListingFormProps) {
  const [listingId, setListingId] = useState<string | null>(initialListingId);
  const [pendingImages, setPendingImages] = useState<PendingListingImage[]>([]);
  const [isBusy, setIsBusy] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<ListingCreateInput>({
    resolver: zodResolver(listingCreateSchema),

    defaultValues: initialData ?? DEFAULT_FORM_VALUES,

    mode: "onSubmit",
  });

  /**
   * ------------------------------------------
   * Sync initial data
   * ------------------------------------------
   */
  useEffect(() => {
    if (initialData) {
      form.reset(initialData);
    }
  }, [initialData, form]);

  /**
   * ------------------------------------------
   * Submit
   * ------------------------------------------
   */
  async function onSubmit(data: ListingCreateInput) {
    if (isBusy) {
      return;
    }

    const isNewListing = listingId === null;

    setIsBusy(true);

    try {
      let currentListingId = listingId;

      /**
       * ----------------------------------------
       * 1. Create listing
       * ----------------------------------------
       */
      if (!currentListingId) {
        const created = await createListing(data);
        currentListingId = created.id;
        setListingId(currentListingId);
        await queryClient.invalidateQueries({queryKey: ["my-listings"],});

      } else {
        /**
         * --------------------------------------
         * 2. Update listing
         * --------------------------------------
         */
        await updateListing(currentListingId, data);
        await queryClient.invalidateQueries({queryKey: ["my-listings"],});
      }
      
      /**
       * ----------------------------------------
       * 3. Upload pending/error images
       * ----------------------------------------
       */
      const uploadResult = await uploadPendingImages(currentListingId!);

      /**
       * ----------------------------------------
       * Success message
       * ----------------------------------------
       */
      if (uploadResult.failed > 0) {
        toast.warning(
          isNewListing
            ? `Tin đã được đăng nhưng có ${uploadResult.failed} hình ảnh upload thất bại.`
            : `Tin đã được lưu nhưng có ${uploadResult.failed} hình ảnh upload thất bại.`,
        );
      } else {
        toast.success(
          isNewListing ? "Đăng tin thành công" : "Lưu tin đăng thành công",
        );
      }
    } catch (error) {
      console.error("CreateListingForm submit error:", error);

      toast.error(
        error instanceof Error ? error.message : "Không thể lưu tin đăng",
      );
    } finally {
      setIsBusy(false);
    }
  }

  /**
   * ------------------------------------------
   * Upload pending/error images
   * ------------------------------------------
   */
  async function uploadPendingImages(currentListingId: string) {
    const imagesToUpload = pendingImages
      .filter((image) => image.status === "pending" || image.status === "error")
      .sort((a, b) => a.order - b.order);

    let uploaded = 0;
    let failed = 0;

    for (const image of imagesToUpload) {
      /**
       * --------------------------------------
       * pending/error
       *       ↓
       *   uploading
       * --------------------------------------
       */
      setPendingImages((current) =>
        current.map((item) =>
          item.id === image.id
            ? {
                ...item,
                status: "uploading",
              }
            : item,
        ),
      );

      try {
        //resize image
          const resizedFile = await resizeImage(image.file, {
            maxWidth: LISTING_IMAGE_RESIZE,
            maxHeight: LISTING_IMAGE_RESIZE,
            quality: 0.8,
          });
        //upload
        const uploadedInfo = await addListingImage(
          currentListingId,
          resizedFile,
          image.order,
        );

        /**
         * ------------------------------------
         * Upload success
         *
         * uploading
         *     ↓
         * uploaded
         * ------------------------------------
         */
        setPendingImages((current) =>
          current.map((item) =>
            item.id === image.id
              ? {
                  ...item,
                  status: "uploaded",
                  uploadedInfo,
                }
              : item,
          ),
        );

        uploaded += 1;
      } catch (error) {
        console.error(`Failed to upload image "${image.file.name}"`, error);

        /**
         * ------------------------------------
         * Upload failed
         *
         * Keep:
         * - File
         * - fileURL
         * - order
         *
         * so it can be retried later.
         * ------------------------------------
         */
        setPendingImages((current) =>
          current.map((item) =>
            item.id === image.id
              ? {
                  ...item,
                  status: "error",
                  uploadedInfo: null,
                }
              : item,
          ),
        );

        failed += 1;
      }
    }
    if(uploaded > 0){
      await queryClient.invalidateQueries({queryKey: ["listing-images", listingId],});
    }
    return {
      uploaded,
      failed,
    };
  }

  /**
   * ------------------------------------------
   * Remove image
   * ------------------------------------------
   */
  async function handleRemoveImage(image: PendingListingImage) {
    if (isBusy) {
      return;
    }

    /**
     * ----------------------------------------
     * Local image
     *
     * pending / error
     * ----------------------------------------
     */
    if (image.status !== "uploaded") {
      URL.revokeObjectURL(image.fileURL);

      setPendingImages((current) =>
        current.filter((item) => item.id !== image.id),
      );

      return;
    }

    /**
     * ----------------------------------------
     * Uploaded image
     * ----------------------------------------
     */
    if (!listingId || !image.uploadedInfo) {
      return;
    }

    const imageId = image.uploadedInfo.id;

    try {
      setIsBusy(true);

      await deleteListingImage(listingId, imageId);

      /**
       * Remove from local state
       * only after DELETE succeeds.
       */
      URL.revokeObjectURL(image.fileURL);

      setPendingImages((current) =>
        current.filter((item) => item.id !== image.id),
      );
      await queryClient.invalidateQueries({queryKey: ["listing-images", listingId],});
      
      toast.success("Đã xóa hình ảnh");
    } catch (error) {
      console.error("Delete listing image error:", error);

      toast.error(
        error instanceof Error ? error.message : "Không thể xóa hình ảnh",
      );
    } finally {
      setIsBusy(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {listingId ? "Chỉnh sửa tin đăng" : "Đăng tin mới"}
        </CardTitle>
      </CardHeader>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent>
          <FieldGroup>
            {/* ================================== */}
            {/* TITLE */}
            {/* ================================== */}

            <Field data-invalid={!!form.formState.errors.title}>
              <FieldLabel htmlFor="title">Tiêu đề</FieldLabel>

              <Input
                id="title"
                placeholder="Nhập tiêu đề tin đăng"
                disabled={isBusy}
                {...form.register("title")}
              />

              <FieldError errors={[form.formState.errors.title]} />
            </Field>

            {/* ================================== */}
            {/* DESCRIPTION */}
            {/* ================================== */}

            <Field data-invalid={!!form.formState.errors.description}>
              <FieldLabel htmlFor="description">Mô tả</FieldLabel>

              <Textarea
                id="description"
                placeholder="Mô tả chi tiết sản phẩm"
                rows={6}
                disabled={isBusy}
                {...form.register("description")}
              />

              <FieldDescription>Mô tả tối đa 5000 ký tự.</FieldDescription>

              <FieldError errors={[form.formState.errors.description]} />
            </Field>

            {/* ================================== */}
            {/* PRICE */}
            {/* ================================== */}

            <Field data-invalid={!!form.formState.errors.price}>
              <FieldLabel htmlFor="price">Giá</FieldLabel>

              <Input
                id="price"
                type="number"
                min="0"
                step="1"
                placeholder="0"
                disabled={isBusy}
                {...form.register("price", {
                  setValueAs: (value) => (value === "" ? 0 : Number(value)),
                })}
              />

              <FieldError errors={[form.formState.errors.price]} />
            </Field>

            {/* ================================== */}
            {/* COUNTRY */}
            {/* ================================== */}

            <Field data-invalid={!!form.formState.errors.country}>
              <FieldLabel htmlFor="country">Quốc gia</FieldLabel>

              <Input
                id="country"
                placeholder="VN"
                maxLength={2}
                disabled={isBusy}
                {...form.register("country")}
              />

              <FieldDescription>
                Mã quốc gia gồm 2 ký tự, ví dụ VN.
              </FieldDescription>

              <FieldError errors={[form.formState.errors.country]} />
            </Field>

            {/* ================================== */}
            {/* CATEGORY */}
            {/* ================================== */}

            <Field data-invalid={!!form.formState.errors.category}>
              <FieldLabel htmlFor="category">Danh mục</FieldLabel>

              <Input
                id="category"
                placeholder="Ví dụ: Điện thoại"
                disabled={isBusy}
                {...form.register("category")}
              />

              <FieldError errors={[form.formState.errors.category]} />
            </Field>

            {/* ================================== */}
            {/* LOCATION */}
            {/* ================================== */}

            <Field data-invalid={!!form.formState.errors.location}>
              <FieldLabel htmlFor="location">Địa điểm</FieldLabel>

              <Input
                id="location"
                placeholder="Ví dụ: TP. Hồ Chí Minh"
                disabled={isBusy}
                {...form.register("location")}
              />

              <FieldError errors={[form.formState.errors.location]} />
            </Field>

            {/* ================================== */}
            {/* IMAGES */}
            {/* ================================== */}

            <Field>
              <FieldLabel>Hình ảnh</FieldLabel>

              <ListingImageUploadCreate
                images={pendingImages}
                onImagesChange={setPendingImages}
                onRemoveImage={handleRemoveImage}
                disabled={isBusy}
              />

              <FieldDescription>
                Có thể kéo thả hoặc click để chọn hình ảnh. Tối đa 8 hình, mỗi
                hình tối đa 5 MB.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={isBusy}>
            {isBusy ? "Đang lưu..." : listingId ? "Lưu thay đổi" : "Đăng tin"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
