"use client";

import { useEffect, useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DragDropProvider } from "@dnd-kit/react";
// import { isSortableOperation } from "@dnd-kit/react/sortable";
import { isSortable } from "@dnd-kit/react/sortable";
import { move, arrayMove } from "@dnd-kit/helpers";
import { toast } from "sonner";

import { deleteListingImage, reorderListingImages } from "@/lib/api/listings";

import type { ListingImage } from "@/lib/repositories/listing-image-repository";

import { imagesQueryKey } from "@/components/hooks/use-listing-images";

import { ListingImageSortableItem } from "./listing-image-sortable-item";

type ListingImageManagerProps = {
  listingId: string;
  images: ListingImage[];
  onBusyChange?: (busy: boolean) => void;
};

export function ListingImageManager({
  listingId,
  images,
  onBusyChange,
}: ListingImageManagerProps) {
  const queryClient = useQueryClient();

  const sortedImages = useMemo(() => {
    return [...images].sort(
      (a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id),
    );
  }, [images]);

  /*
   * --------------------------------------------------
   * Reorder
   * --------------------------------------------------
   */

  const reorderMutation = useMutation({
    mutationFn: (imageIds: string[]) =>
      reorderListingImages(listingId, imageIds),

    onMutate: async (imageIds) => {
      await queryClient.cancelQueries({
        queryKey: imagesQueryKey(listingId),
      });

      const previousImages = queryClient.getQueryData<ListingImage[]>(
        imagesQueryKey(listingId),
      );

      const reorderedImages = imageIds
        .map((id) => previousImages?.find((image) => image.id === id))
        .filter((image): image is ListingImage => Boolean(image))
        .map((image, index) => ({
          ...image,
          sortOrder: index,
        }));

      queryClient.setQueryData<ListingImage[]>(
        imagesQueryKey(listingId),
        reorderedImages,
      );

      return {
        previousImages,
      };
    },

    onError: (error, _imageIds, context) => {
      if (context?.previousImages) {
        queryClient.setQueryData(
          imagesQueryKey(listingId),
          context.previousImages,
        );
      }

      toast.error(
        error instanceof Error ? error.message : "Không thể sắp xếp hình ảnh.",
      );
    },

    onSuccess: () => {
      toast.success("Đã cập nhật thứ tự hình ảnh.");
    },

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: imagesQueryKey(listingId),
      });
    },
  });

  /*
   * --------------------------------------------------
   * Delete
   * --------------------------------------------------
   */

  const deleteMutation = useMutation({
    mutationFn: (imageId: string) => deleteListingImage(listingId, imageId),

    onMutate: async (imageId) => {
      await queryClient.cancelQueries({
        queryKey: imagesQueryKey(listingId),
      });

      const previousImages = queryClient.getQueryData<ListingImage[]>(
        imagesQueryKey(listingId),
      );

      if (!previousImages) {
        return {
          previousImages,
        };
      }

      const remainingImages = previousImages
        .filter((image) => image.id !== imageId)
        .sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id))
        .map((image, index) => ({
          ...image,
          sortOrder: index,
        }));

      queryClient.setQueryData<ListingImage[]>(
        imagesQueryKey(listingId),
        remainingImages,
      );

      return {
        previousImages,
      };
    },

    onError: (error, _imageId, context) => {
      if (context?.previousImages) {
        queryClient.setQueryData(
          imagesQueryKey(listingId),
          context.previousImages,
        );
      }

      toast.error(
        error instanceof Error ? error.message : "Không thể xóa hình ảnh.",
      );
    },

    onSuccess: () => {
      toast.success("Đã xóa hình ảnh.");
    },

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: imagesQueryKey(listingId),
      });
    },
  });

  const isBusy = reorderMutation.isPending || deleteMutation.isPending;

  /*
   * Báo trạng thái busy cho ListingImageUploadEdit
   * để Dropzone bị disable trong lúc reorder/delete.
   */
  useEffect(() => {
    onBusyChange?.(isBusy);
  }, [isBusy, onBusyChange]);

  /*
   * --------------------------------------------------
   * Drag end
   * --------------------------------------------------
   */

  function handleDragEnd(
    event: Parameters<NonNullable<React.ComponentProps<typeof DragDropProvider>["onDragEnd"]>>[0],
  ) {
    const { operation, canceled } = event;

    if (canceled || !operation) {
      return;
    }

    const { source, target } = operation;

    // Kiểm tra source có phải sortable và target có tồn tại không
    if (!isSortable(source)) {
      return;
    }

    const { initialIndex, index } = source;


    if (!target) {
      // Trường hợp 1: Thả ra ngoài hoàn toàn (target = null) 
      // NHƯNG trong quá trình kéo, item đã bị dịch chuyển sang vị trí mới (index khác initialIndex)
      if (initialIndex === index) {
        return; // Không dịch chuyển gì cả thì bỏ qua
      }

      // Tự dịch chuyển mảng thủ công dựa trên vị trí đầu và cuối của source
      const nextImages = arrayMove(sortedImages, initialIndex, index);
      const imageIds = nextImages.map((image) => image.id);
      reorderMutation.mutate(imageIds);
    }
    else{
      // Trường hợp 2: Thả bình thường bên trong vùng quản lý (có target)
      if (initialIndex === index) {
        return;
      }
      // Dùng hàm move tiêu chuẩn của thư viện khi có target đầy đủ
      const nextImages = move(sortedImages, event);
      const imageIds = nextImages.map((image) => image.id);

      reorderMutation.mutate(imageIds);
    }
  }

  function handleDelete(imageId: string) {
    deleteMutation.mutate(imageId);
  }

  if (sortedImages.length === 0) {
    return null;
  }

  return (
<DragDropProvider
  onDragEnd={handleDragEnd}
>
  <div
    className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
    aria-label="Danh sách hình ảnh"
  >
    {sortedImages.map((image, index) => (
      <ListingImageSortableItem
        key={image.id}
        image={image}
        index={index}
        onDelete={handleDelete}
        disabled={isBusy}
      />
    ))}
  </div>

  {isBusy && (
    <p
      className="text-sm text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      Đang cập nhật hình ảnh...
    </p>
  )}
</DragDropProvider>
  );
}
