"use client";

import Image from "next/image";
import { CSSProperties } from "react";
import {
  GripVertical,
  Star,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ListingImage } from "@/lib/repositories/listing-image-repository";

import { useSortable } from "@dnd-kit/react/sortable";

type ListingImageSortableItemProps = {
  image: ListingImage;
  index: number;
  onDelete: (imageId: string) => void;
  disabled?: boolean;
};

export function ListingImageSortableItem({
  image,
  index,
  onDelete,
  disabled = false,
}: ListingImageSortableItemProps) {
  const {
    ref,
    handleRef,
    isDragging,
  } = useSortable({
    id: image.id,
    index,
    disabled,
  });

  const style: CSSProperties = {
    opacity: isDragging ? 0.5 : 1,
    touchAction: "none",
  };

  return (
    <div
      ref={ref}
      style={style}
      className={[
        "group relative aspect-square overflow-hidden rounded-lg border bg-muted",
        isDragging
          ? "z-10 shadow-xl ring-2 ring-primary"
          : "",
      ].join(" ")}
    >
      <Image
        src={image.url}
        alt={`Ảnh ${index + 1}`}
        fill
        sizes="
          (max-width: 640px) 50vw,
          (max-width: 768px) 33vw,
          25vw
        "
        className="object-cover"
        draggable={false}
      />

      {/* Drag handle */}
      <button
        ref={handleRef}
        type="button"
        disabled={disabled}
        aria-label={`Kéo ảnh ${index + 1} để thay đổi vị trí`}
        className={[
          "absolute left-2 top-2 z-10",
          "flex size-9 items-center justify-center",
          "rounded-md bg-black/60 text-white",
          "backdrop-blur-sm",
          "transition-opacity",
          "cursor-grab active:cursor-grabbing",
          "focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-ring",
          "focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
        ].join(" ")}
      >
        <GripVertical className="size-5" />
      </button>

      {/* Cover badge */}
      {index === 0 && (
        <span className="absolute right-2 top-2 z-10 flex items-center gap-1 rounded bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground shadow">
          <Star className="size-3 fill-current" />
          Ảnh bìa
        </span>
      )}

      {/* Delete */}
      <div className="absolute inset-x-0 bottom-0 flex justify-end bg-gradient-to-t from-black/70 to-transparent p-2 pt-8 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
        <Button
          type="button"
          variant="destructive"
          size="icon"
          disabled={disabled}
          onClick={() => onDelete(image.id)}
          aria-label={`Xóa ảnh ${index + 1}`}
        >
          <Trash2 className="size-4" />
        </Button>
      </div>

      {/* Index */}
      <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-xs text-white">
        {index + 1}
      </span>
    </div>
  );
}