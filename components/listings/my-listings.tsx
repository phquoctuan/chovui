"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Pencil, Trash2 } from "lucide-react";

import { deleteListing, getMyListings } from "@/lib/api/listings";
import { Link } from "@/i18n/navigation";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function MyListings() {
  const queryClient = useQueryClient();

  const {
    data: listings,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-listings"],
    queryFn: getMyListings,
  });

  async function handleDelete(listingId: string) {
    try {
      await deleteListing(listingId);

      await queryClient.invalidateQueries({
        queryKey: ["my-listings"],
      });

      toast.success("Xóa tin đăng thành công");
    } catch (error) {
      console.error(
        "Delete listing failed:",
        error,
      );

      toast.error(
        error instanceof Error
          ? error.message
          : "Không thể xóa tin đăng",
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

  if (listings.length === 0) {
    return (
      <div className="py-8 text-center">
        Bạn chưa có tin đăng nào.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="rounded-lg border p-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="font-semibold">
                {listing.title}
              </h2>

              <p className="mt-1 text-sm">
                {listing.price} ₫
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {listing.location}
              </p>
            </div>

            <div className="flex shrink-0 gap-2">
              <Link
                href={`/listings/${listing.id}/edit`}
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                })}
              >
                <Pencil />
                Chỉnh sửa
              </Link>

              <AlertDialog>
                <AlertDialogTrigger
                  render={
                    <Button
                      variant="destructive"
                      size="sm"
                    />
                  }
                >
                  <Trash2 />
                  Xóa
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Xóa tin đăng?
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                      Bạn có chắc muốn xóa tin đăng
                      &quot;{listing.title}&quot;?
                      Hành động này không thể hoàn tác.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel>
                      Hủy
                    </AlertDialogCancel>

                    <AlertDialogAction
                      onClick={() =>
                        handleDelete(listing.id)
                      }
                    >
                      Xóa tin đăng
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}