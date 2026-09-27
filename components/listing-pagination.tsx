"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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
import { PAGE_SIZE_OPTIONS } from "@/components/const";

type ListingPaginationProps = {
  currentPage: number;
  pageSize: number;
  totalPages: number;
};

// Hàm helper tính toán các trang hiển thị kèm dấu ...
function generatePaginationRange(currentPage: number, totalPages: number) {
  const delta = 2; // Số trang hiển thị trước và sau trang hiện tại
  const range: number[] = [];
  const rangeWithDots: (number | string)[] = [];
  let l: number | undefined;

  range.push(1);
  for (let i = currentPage - delta; i <= currentPage + delta; i++) {
    if (i < totalPages && i > 1) {
      range.push(i);
    }
  }
  if(totalPages > 1) range.push(totalPages);
  // console.log("range:", range)
  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }
  // console.log("rangeWithDots:", rangeWithDots)
  return rangeWithDots;
}

export function ListingPagination({
  currentPage,
  pageSize,
  totalPages,
}: ListingPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updatePagination(
    page: number,
    newPageSize?: number,
  ) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(page));

    if (newPageSize) {
      params.set("pageSize", String(newPageSize));
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  // Nếu chỉ có 1 trang hoặc không có trang nào, có thể ẩn phân trang hoặc giữ nguyên tuỳ bạn
  // if (totalPages <= 1) return null;

  const paginationRange = generatePaginationRange(currentPage, totalPages);

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
          {/* Nút Previous */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(event) => {
                event.preventDefault();
                if (currentPage > 1) {
                  updatePagination(currentPage - 1);
                }
              }}
              aria-disabled={currentPage <= 1}
              className={currentPage <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>

          {/* Danh sách trang thông minh có ... */}
          {paginationRange.map((pageNumber, index) => {
            if (pageNumber === "...") {
              return (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }

            const page = Number(pageNumber);
            const isActive = page === currentPage;

            return (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={isActive}
                  onClick={(event) => {
                    event.preventDefault();
                    updatePagination(page);
                  }}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* Nút Next */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(event) => {
                event.preventDefault();
                if (currentPage < totalPages) {
                  updatePagination(currentPage + 1);
                }
              }}
              aria-disabled={currentPage >= totalPages}
              className={currentPage >= totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}