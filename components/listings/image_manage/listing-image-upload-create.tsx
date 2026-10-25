"use client";

import { useCallback, useEffect, useRef } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";

import {
  AlertTriangle,
  Check,
  ImagePlus,
  Loader2,
  Trash2,
  Upload,
} from "lucide-react";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { PendingListingImage } from "@/lib/types/pending-listing-image";

import {
  DEFAULT_LISTING_IMAGE_MAX_FILE_SIZE,
  DEFAULT_LISTING_IMAGE_MAX_FILES,
  LISTING_IMAGE_ACCEPTED_TYPES,
} from "@/const";

type ListingImageUploadCreateProps = {
  images: PendingListingImage[];

  onImagesChange: (images: PendingListingImage[]) => void;

  /**
   * Parent handles deletion of uploaded images.
   */
  onRemoveImage?: (image: PendingListingImage) => void | Promise<void>;

  disabled?: boolean;
};

const ACCEPTED_MIME_TYPES = Object.keys(LISTING_IMAGE_ACCEPTED_TYPES);

export function ListingImageUploadCreate({
  images,
  onImagesChange,
  onRemoveImage,
  disabled = false,
}: ListingImageUploadCreateProps) {

  const imagesRef = useRef<PendingListingImage[]>(images);

  /**
   * Keep the latest images for unmount cleanup.
   */
  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  /**
   * Release all local object URLs when
   * component is unmounted.
   */
  useEffect(() => {
    return () => {
      for (const image of imagesRef.current) {
        URL.revokeObjectURL(image.fileURL);
      }
    };
  }, []);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (disabled) {
        return;
      }

      /**
       * Show rejected files.
       */
      if (fileRejections.length > 0) {
        for (const rejection of fileRejections) {
          const messages = rejection.errors.map((error) => error.message);
          toast.error(`${rejection.file.name}: ${messages.join(", ")}`);
        }
      }

      if (acceptedFiles.length === 0) {
        return;
      }

      const remainingSlots = DEFAULT_LISTING_IMAGE_MAX_FILES - images.length;
      if (remainingSlots <= 0) {
        toast.error(`Tối đa ${DEFAULT_LISTING_IMAGE_MAX_FILES} hình ảnh.`);
        return;
      }

      /**
       * react-dropzone already validates:
       * - MIME type
       * - file size
       *
       * We only need to enforce the total
       * number of images here.
       */
      const filesToAdd = acceptedFiles.slice(0, remainingSlots);

      if (acceptedFiles.length > remainingSlots) {
        toast.warning(`Chỉ có thể thêm tối đa ${remainingSlots} hình ảnh nữa.`);
      }

      let nextOrder = getNextOrder(images);

      const newImages: PendingListingImage[] = filesToAdd.map((file) => {
        const image: PendingListingImage = {
          id: crypto.randomUUID(),
          file,
          fileURL: URL.createObjectURL(file),
          status: "pending",
          uploadedInfo: null,
          order: nextOrder,
        };
        nextOrder += 1;
        return image;
      });

      onImagesChange([...images, ...newImages]);
    },
    [disabled, images, onImagesChange],
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    disabled,
    multiple: true,
    maxSize: DEFAULT_LISTING_IMAGE_MAX_FILE_SIZE,
    accept: LISTING_IMAGE_ACCEPTED_TYPES,
    /**
     * We handle total image count ourselves
     * because existing images are already in state.
     */
    maxFiles: DEFAULT_LISTING_IMAGE_MAX_FILES,
  });

  async function handleRemoveImage(image: PendingListingImage) {
    if (disabled) {
      return;
    }

    /**
     * Uploaded image:
     * Parent must call DELETE API.
     */
    if (image.status === "uploaded" && onRemoveImage) {
      await onRemoveImage(image);
      return;
    }

    /**
     * Local-only image:
     * Remove immediately.
     */
    URL.revokeObjectURL(image.fileURL);

    onImagesChange(images.filter((item) => item.id !== image.id));
  }

  return (
    <div className="space-y-4">
      <div
        {...getRootProps({
          className: [
            "flex min-h-40 cursor-pointer",
            "flex-col items-center justify-center",
            "rounded-lg border-2 border-dashed",
            "p-6 text-center transition-colors",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-ring",

            disabled ? "cursor-not-allowed opacity-50" : "hover:bg-muted/50",

            isDragActive && "border-primary bg-primary/5",

            isDragAccept && "border-green-500 bg-green-500/5",

            isDragReject && "border-destructive bg-destructive/5",
          ]
            .filter(Boolean)
            .join(" "),
        })}
      >
        <input {...getInputProps()} />

        {isDragReject ? (
          <>
            <AlertTriangle className="mb-3 size-10 text-destructive" />

            <p className="text-sm font-medium text-destructive">
              File không hợp lệ
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Chỉ hỗ trợ JPG, PNG hoặc WebP, tối đa 5 MB/ảnh.
            </p>
          </>
        ) : isDragActive ? (
          <>
            <Upload className="mb-3 size-10 text-primary" />

            <p className="text-sm font-medium">Thả hình ảnh vào đây</p>
          </>
        ) : (
          <>
            <ImagePlus className="mb-3 size-10 text-muted-foreground" />

            <p className="text-sm font-medium">Kéo thả hình ảnh vào đây</p>

            <p className="mt-1 text-sm text-muted-foreground">
              hoặc click để chọn hình ảnh
            </p>

            <p className="mt-3 text-xs text-muted-foreground">
              JPG, PNG hoặc WebP · tối đa {DEFAULT_LISTING_IMAGE_MAX_FILES} ảnh
              · 5 MB/ảnh
            </p>
          </>
        )}
      </div>

      {images.length > 0 && (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {images
              .slice()
              .sort((a, b) => a.order - b.order)
              .map((image) => (
                <ListingImagePreview
                  key={image.id}
                  image={image}
                  disabled={disabled}
                  onRemove={handleRemoveImage}
                />
              ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Đã chọn {images.length}/{DEFAULT_LISTING_IMAGE_MAX_FILES} hình ảnh
          </p>
        </>
      )}
    </div>
  );
}

type ListingImagePreviewProps = {
  image: PendingListingImage;
  disabled: boolean;
  onRemove: (image: PendingListingImage) => void | Promise<void>;
};

function ListingImagePreview({
  image,
  disabled,
  onRemove,
}: ListingImagePreviewProps) {
  /**
   * uploaded:
   *     use server URL
   *
   * pending/uploading/error:
   *     use local object URL
   */
  const imageURL =
    image.status === "uploaded" && image.uploadedInfo
      ? image.uploadedInfo.url
      : image.fileURL;

  return (
    <div className="relative overflow-hidden rounded-lg border bg-muted">
      <div className="aspect-square">
        <img
          src={imageURL}
          alt={image.file.name}
          className="size-full object-cover"
        />
      </div>

      {/* -------------------------------- */}
      {/* Uploading */}
      {/* -------------------------------- */}

      {image.status === "uploading" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
          <Loader2 className="size-8 animate-spin" />

          <span className="mt-2 text-xs">Đang upload...</span>
        </div>
      )}

      {/* -------------------------------- */}
      {/* Uploaded */}
      {/* -------------------------------- */}

      {image.status === "uploaded" && (
        <div className="absolute left-2 top-2 rounded-full bg-green-600 p-1 text-white">
          <Check className="size-4" />
        </div>
      )}

      {/* -------------------------------- */}
      {/* Error */}
      {/* -------------------------------- */}

      {image.status === "error" && (
        <>
          <div className="absolute right-2 top-2 rounded-full bg-red-600 p-1 text-white">
            <AlertTriangle className="size-4" />
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-red-600/90 px-2 py-2 text-center text-xs font-medium text-white">
            Upload thất bại
          </div>
        </>
      )}

      {/* -------------------------------- */}
      {/* Delete */}
      {/* -------------------------------- */}

      {image.status !== "uploading" && (
        <Button
          type="button"
          size="icon"
          variant="destructive"
          disabled={disabled}
          className="absolute bottom-2 right-2 size-8"
          onClick={(event) => {
            event.stopPropagation();
            void onRemove(image);
          }}
        >
          <Trash2 className="size-4" />

          <span className="sr-only">Xóa hình ảnh</span>
        </Button>
      )}
    </div>
  );
}

function getNextOrder(images: PendingListingImage[]): number {
  if (images.length === 0) {
    return 0;
  }

  return Math.max(...images.map((image) => image.order)) + 1;
}
