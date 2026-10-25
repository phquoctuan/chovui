"use client";

import { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useQueryClient } from "@tanstack/react-query";
import { ImagePlus, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { ListingImageManager } from "@/components/listings/image_manage/listing-image-manager";

import { addListingImage } from "@/lib/api/listings";
import { useListingImages, imagesQueryKey } from "@/components/hooks/use-listing-images";

import {
  DEFAULT_LISTING_IMAGE_MAX_FILES,
  DEFAULT_LISTING_IMAGE_MAX_FILE_SIZE,
  LISTING_IMAGE_ACCEPTED_TYPES,
} from "@/const";

import { resizeImage } from "@/lib/image/resize-image";
import { LISTING_IMAGE_RESIZE } from "@/const";

type ListingImageUploadEditProps = {
  listingId: string;
  maxFiles?: number;
  maxFileSize?: number;
};

export function ListingImageUploadEdit({
  listingId,
  maxFiles = DEFAULT_LISTING_IMAGE_MAX_FILES,
  maxFileSize = DEFAULT_LISTING_IMAGE_MAX_FILE_SIZE,
}: ListingImageUploadEditProps) {
  const queryClient = useQueryClient();

  const [uploadingFiles, setUploadingFiles] =
    useState<Set<string>>(new Set());

  const [isManagerBusy, setIsManagerBusy] =
    useState(false);

  /*
   * Chỉ query ảnh một lần ở component cha.
   */
  const {
    data: images = [],
    isPending,
    isError,
    error,
  } = useListingImages(listingId);

  const sortedImages = useMemo(() => {
    return [...images].sort(
      (a, b) =>
        a.sortOrder - b.sortOrder ||
        a.id.localeCompare(b.id),
    );
  }, [images]);

  const isUploading = uploadingFiles.size > 0;

  const remainingSlots =
    Math.max(0, maxFiles - sortedImages.length);

  const handleUpload = useCallback(
    async (files: File[]) => {
      if (remainingSlots <= 0) {
        toast.error(
          `Tin đăng chỉ được tối đa ${maxFiles} ảnh.`,
        );
        return;
      }

      const filesToUpload =
        files.slice(0, remainingSlots);

      if (files.length > remainingSlots) {
        toast.warning(
          `Chỉ có thể thêm ${remainingSlots} ảnh.`,
        );
      }

      let nextSortOrder = sortedImages.length;

      for (const file of filesToUpload) {
        const uploadId =
          `${file.name}-${file.lastModified}-${file.size}`;

        setUploadingFiles((current) => {
          const next = new Set(current);
          next.add(uploadId);
          return next;
        });

        try {
          const resizedFile = await resizeImage(file, {
            maxWidth: LISTING_IMAGE_RESIZE,
            maxHeight: LISTING_IMAGE_RESIZE,
            quality: 0.8,
          });

          await addListingImage(
            listingId,
            resizedFile,
            nextSortOrder,
          );

          nextSortOrder += 1;

          await queryClient.invalidateQueries({
            queryKey: imagesQueryKey(listingId),
          });

          toast.success(
            `"${file.name}" đã được tải lên.`,
          );
        } catch (error) {
          console.error(
            "Upload listing image failed:",
            error,
          );

          toast.error(
            error instanceof Error
              ? error.message
              : `Không thể tải "${file.name}".`,
          );
        } finally {
          setUploadingFiles((current) => {
            const next = new Set(current);
            next.delete(uploadId);
            return next;
          });
        }
      }
    },
    [
      listingId,
      maxFiles,
      queryClient,
      remainingSlots,
      sortedImages.length,
    ],
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      void handleUpload(acceptedFiles);
    },
    [handleUpload],
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: LISTING_IMAGE_ACCEPTED_TYPES,
    maxFiles: remainingSlots,
    maxSize: maxFileSize,
    disabled:
      remainingSlots <= 0 ||
      isUploading ||
      isManagerBusy,
  });

  if (isPending) {
    return (
      <div className="py-8 text-center text-sm text-muted-foreground">
        Đang tải hình ảnh...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-8 text-center text-sm text-destructive">
        {error instanceof Error
          ? error.message
          : "Không thể tải hình ảnh."}
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {/* 
       * Manager chỉ nhận images.
       * Không query DB lần nữa.
       */}
      <ListingImageManager
        listingId={listingId}
        images={sortedImages}
        onBusyChange={setIsManagerBusy}
      />

      {/* Dropzone upload ảnh mới */}
      {remainingSlots > 0 && (
        <div
          {...getRootProps()}
          className={[
            "cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-colors",
            isDragActive && !isDragReject
              ? "border-primary bg-primary/10"
              : "",
            isDragReject
              ? "border-destructive bg-destructive/5"
              : "",
            !isDragActive && !isDragReject
              ? "border-muted-foreground/30 hover:border-primary hover:bg-muted/50"
              : "",
          ].join(" ")}
        >
          <input {...getInputProps()} />

          <div className="flex flex-col items-center gap-3">
            <div className="rounded-full border bg-background p-3 shadow-sm">
              {isUploading ? (
                <Loader2 className="size-6 animate-spin text-primary" />
              ) : (
                <ImagePlus className="size-6 text-primary" />
              )}
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium">
                {isManagerBusy
                  ? "Đang cập nhật hình ảnh..."
                  : isDragActive
                    ? "Thả ảnh vào đây..."
                    : "Kéo thả ảnh vào đây hoặc click để chọn"}
              </p>

              <p className="text-xs text-muted-foreground">
                JPG, PNG, WebP · tối đa 5 MB/ảnh
              </p>

              <p className="text-xs text-muted-foreground">
                Còn có thể thêm {remainingSlots} ảnh
              </p>
            </div>
          </div>
        </div>
      )}

      {isUploading && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" />
          Đang resize và tải ảnh lên...
        </div>
      )}
    </div>
  );
}