"use client";

import { useCallback, useEffect, useMemo, useRef, type CSSProperties } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";
import { DragDropProvider } from "@dnd-kit/react";
import { isSortable } from "@dnd-kit/react/sortable";
import { move, arrayMove } from "@dnd-kit/helpers";
import { useSortable } from "@dnd-kit/react/sortable";
import { UseFormRegisterReturn, FieldError as RHFFieldError } from "react-hook-form";

import { ImagePlus, Loader2, Trash2, GripVertical, Star, CircleX} from "lucide-react";

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
  onRemoveImage?: (image: PendingListingImage) => void | Promise<void>;
  disabled?: boolean;
  required?: boolean;
  error?: RHFFieldError;
};

export function ListingImageUploadCreate({
  images,
  onImagesChange,
  onRemoveImage,
  disabled = false,
  required = false,
  error
}: ListingImageUploadCreateProps) {
  const imagesRef = useRef<PendingListingImage[]>(images);

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  useEffect(() => {
    return () => {
      for (const image of imagesRef.current) {
        URL.revokeObjectURL(image.fileURL);
      }
    };
  }, []);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (disabled) return;

      if (fileRejections.length > 0) {
        for (const rejection of fileRejections) {
          const messages = rejection.errors.map((error) => error.message);
          toast.error(`${rejection.file.name}: ${messages.join(", ")}`);
        }
      }

      if (acceptedFiles.length === 0) return;

      const remainingSlots = DEFAULT_LISTING_IMAGE_MAX_FILES - images.length;
      if (remainingSlots <= 0) {
        toast.error(`Tối đa ${DEFAULT_LISTING_IMAGE_MAX_FILES} hình ảnh.`);
        return;
      }

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
          sortOrder: nextOrder,
        };
        nextOrder += 1;
        return image;
      });

      const updatedImages = [...images, ...newImages]
        .sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id))
        .map((img, index) => ({
          ...img,
          sortOrder: index,
        }));

      onImagesChange(updatedImages);
    },
    [disabled, images, onImagesChange],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled,
    multiple: true,
    maxSize: DEFAULT_LISTING_IMAGE_MAX_FILE_SIZE,
    accept: LISTING_IMAGE_ACCEPTED_TYPES,
    maxFiles: DEFAULT_LISTING_IMAGE_MAX_FILES,
  });

  async function handleRemoveImage(image: PendingListingImage) {
    if (disabled) return;

    if (image.status === "uploaded" && onRemoveImage) {
      await onRemoveImage(image);
      return;
    }

    URL.revokeObjectURL(image.fileURL);

    const remainingImages = images
      .filter((item) => item.id !== image.id)
      .sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id))
      .map((img, index) => ({
        ...img,
        sortOrder: index,
      }));

    onImagesChange(remainingImages);
  }

  const sortedImages = useMemo(() => {
    return [...images].sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id));
  }, [images]);

  function handleDragEnd(
    event: Parameters<NonNullable<React.ComponentProps<typeof DragDropProvider>["onDragEnd"]>>[0],
  ) {
    const { operation, canceled } = event;

    if (canceled || !operation) {
      return;
    }

    const { source, target } = operation;

    if (!isSortable(source)) {
      return;
    }

    const { initialIndex, index } = source;

    let nextImages: typeof sortedImages = [];

    if (!target) {
      if (initialIndex === index) {
        return;
      }
      nextImages = arrayMove(sortedImages, initialIndex, index);
    } else {
      if (initialIndex === index) {
        return;
      }
      nextImages = move(sortedImages, event);
    }

    const updatedImages = nextImages.map((img, idx) => ({
      ...img,
      sortOrder: idx,
    }));

    onImagesChange(updatedImages);
  }

  const canAddMore = images.length < DEFAULT_LISTING_IMAGE_MAX_FILES;

  return (
    <div className="space-y-3">
      {images.length === 0 ? (
        <div
          data-invalid={!!error}
          {...getRootProps({
            className: [
              "flex min-h-28 m-0 cursor-pointer flex-col items-center justify-center",
              "rounded-xl border border-amber-200 bg-[#fffdf4]",
              "p-4 text-center transition-colors hover:bg-[#fff9e6]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              // Nếu có lỗi thì đổi border sang màu destructive (đỏ)
              (required && !!error) ? "border-destructive bg-destructive/5" : "border-amber-200",
              disabled ? "cursor-not-allowed opacity-50" : "",
              isDragActive && "border-primary bg-primary/5",
            ]
              .filter(Boolean)
              .join(" "),
          })}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center text-amber-500">
            <ImagePlus className="size-10 mb-2" />
            <span className="text-sm font-medium text-foreground">Thêm ảnh/video</span>
          </div>
        </div>
      ) : (
        <DragDropProvider onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
            {canAddMore && !disabled && (
              <div
                {...getRootProps({
                  className: [
                    "flex aspect-square cursor-pointer flex-col items-center justify-center",
                    "rounded-xl border border-dashed border-amber-300 bg-[#fffdf4]",
                    "transition-colors hover:bg-[#fff9e6]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  ].join(" "),
                })}
              >
                <input {...getInputProps()} />
                <ImagePlus className="size-8 text-amber-500" />
                <span className="mt-1 text-[11px] font-medium text-amber-700">Thêm ảnh</span>
              </div>
            )}

            {sortedImages.map((image, index) => (
              <ListingImageUploadSortableItem
                key={image.id}
                image={image}
                index={index}
                onDelete={handleRemoveImage}
                disabled={disabled}
              />
            ))}
          </div>
        </DragDropProvider>
      )}

      {images.length > -1 && (
        <p className="text-xs italic text-muted-foreground mt-1 mb-0">
          Hình đầu tiên là ảnh bìa, mỗi hình tối đa 5 MB.
          Nhấn và giữ biểu tượng di chuyển để đổi vị trí hình ảnh. 
        </p>
      )}
      {error && <span className="text-xs text-red-500 mt-0">{error.message}</span>}
    </div>
  );
}

type ListingImageUploadSortableItemProps = {
  image: PendingListingImage;
  index: number;
  onDelete: (image: PendingListingImage) => void;
  disabled?: boolean;
};

function ListingImageUploadSortableItem({
  image,
  index,
  onDelete,
  disabled = false,
}: ListingImageUploadSortableItemProps) {
  const { ref, handleRef, isDragging } = useSortable({
    id: image.id,
    index,
    disabled,
  });

  const style: CSSProperties = {
    opacity: isDragging ? 0.5 : 1,
    touchAction: "none",
  };

  const imageURL = image.status === "uploaded" && image.uploadedInfo ? image.uploadedInfo.url : image.fileURL;

  return (
    <div
      ref={ref}
      style={style}
      className={[
        "group relative aspect-square overflow-hidden rounded-xl border bg-muted",
        isDragging ? "z-10 shadow-xl ring-2 ring-primary" : "",
      ].join(" ")}
    >
      <img src={imageURL} alt={image.file.name} className="size-full object-cover pointer-events-none" />

      {/* Nút Drag handle ở góc trên bên trái */}
      <button
        ref={handleRef}
        type="button"
        disabled={disabled}
        aria-label={`Kéo ảnh ${index + 1} để thay đổi vị trí`}
        className={[
          "absolute left-1.5 top-1.5 z-10",
          "flex size-7 items-center justify-center",
          "rounded-md bg-black/60 text-white",
          "backdrop-blur-sm transition-opacity",
          "cursor-grab active:cursor-grabbing",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
        ].join(" ")}
      >
        <GripVertical className="size-4" />
      </button>

      {/* Nhãn Ảnh bìa cho hình đầu tiên */}
      {index === 0 && (
        <span className="absolute right-0.5 top-1.5 z-10 flex items-center gap-1 rounded bg-amber-400 px-1.5 py-0.5 text-[10px] font-semibold text-amber-950 shadow">
          <Star className="size-3 fill-current" />
          Ảnh bìa
        </span>
      )}

      {/* Trạng thái Uploading */}
      {image.status === "uploading" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white z-20">
          <Loader2 className="size-6 animate-spin" />
          <span className="mt-1 text-[10px]">Đang upload...</span>
        </div>
      )}

      {/* Trạng thái Lỗi */}
      {image.status === "error" && (
        <div className="absolute inset-x-0 bottom-0 bg-destructive/90 px-1 py-1 text-center text-[10px] font-medium text-white z-20">
          Lỗi upload
        </div>
      )}

      {/* Nút Xóa ở góc dưới */}
      {image.status !== "uploading" && (
        <div className="absolute inset-x-0 bottom-0.5  flex justify-end group-hover:opacity-80 group-focus-within:opacity-100">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            disabled={disabled}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(image);
            }}
            className="size-6"
            aria-label={`Xóa ảnh ${index + 1}`}
          >
            <CircleX className="size-4 text-white bg-black rounded-full" />
          </Button>
        </div>
      )}

      {/* Số thứ tự hiển thị góc dưới bên trái */}
      <span className="absolute bottom-1.5 left-1.5 rounded bg-black/60 px-1.5 py-0.5 text-sx text-white">
        {index + 1}
      </span>
    </div>
  );
}

function getNextOrder(images: PendingListingImage[]): number {
  if (images.length === 0) {
    return 0;
  }
  return Math.max(...images.map((image) => image.sortOrder)) + 1;
}
