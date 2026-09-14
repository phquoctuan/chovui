"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  usePathname,
  useRouter,
} from "@/i18n/navigation";

import { useSearchParams } from "next/navigation";
import {PAGE_SIZE_OPTIONS, DEFAULT_PAGE_SIZE} from "@/components/const";


type ListingPaginationProps = {
  totalPages: number;
};

export function ListingPagination({
  totalPages,
}: ListingPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") ?? "1");

  const pageSize = Number(
    searchParams.get("pageSize") ?? DEFAULT_PAGE_SIZE,
  );

  function updatePagination(
    page: number,
    newPageSize?: number,
  ) {
    const params = new URLSearchParams(searchParams);

    params.set("page", String(page));

    if (newPageSize) {
      params.set("pageSize", String(newPageSize));
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      {/* Page size */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-nowrap text-muted-foreground">
          Hiển thị
        </span>

        <Select
          value={String(pageSize)}
          onValueChange={(value) => {
            updatePagination(1, Number(value));
          }}
        >
          <SelectTrigger className="w-20">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {PAGE_SIZE_OPTIONS.map((size) => (
              <SelectItem
                key={size}
                value={String(size)}
              >
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <span className="text-sm text-nowrap text-muted-foreground">
          tin/trang
        </span>
      </div>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(event) => {
                event.preventDefault();

                if (currentPage > 1) {
                  updatePagination(currentPage - 1);
                }
              }}
            />
          </PaginationItem>

          {Array.from(
            { length: totalPages  },
            (_, index) => index + 1,
          ).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={(event) => {
                  event.preventDefault();
                  updatePagination(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(event) => {
                event.preventDefault();
                if (currentPage < totalPages) {
                  updatePagination(currentPage + 1);
                }
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}