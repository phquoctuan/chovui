"use client";

import { useState } from "react";
import { AlertCircle, Building2, Briefcase, Car, ChevronRight, Laptop, Menu, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useCategories } from "@/components/hooks/use-categories";
import { getCategoryIcon } from './category-icon';

interface MobileCategoryMenuProps {
  locale?: string;
}

// function getCategoryIcon(slug: string) {
//   const className = "size-5";

//   switch (slug) {
//     case "real-estate":
//       return <Building2 className={className} />;
//     case "vehicles":
//       return <Car className={className} />;
//     case "electronics":
//       return <Laptop className={className} />;
//     case "jobs":
//       return <Briefcase className={className} />;
//     case "services":
//       return <Sparkles className={className} />;
//     default:
//       return <AlertCircle className={className} />;
//   }
// }

export function MobileCategoryMenu({ locale = "vi" }: MobileCategoryMenuProps) {
  const [open, setOpen] = useState(false);
  const [expandedParentId, setExpandedParentId] = useState<number | null>(null);

  const { data, isLoading, isError } = useCategories(locale);
  const categories = data ?? [];

  const handleToggle = (categoryId: number) => {
    setExpandedParentId((currentId) => (currentId === categoryId ? null : categoryId));
  };

  return (
    <Popover
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);

        if (!nextOpen) {
          setExpandedParentId(null);
        }
      }}
    >
      <PopoverTrigger
        render={
          <Button
            size="icon"
            className="shrink-0 bg-[#FFD400] text-slate-900 hover:bg-[#F5CC00]"
            aria-label="Menu"
            title="Danh mục"
          >
            <Menu className="size-6" />
          </Button>
        }
      />

      <PopoverContent
        side="bottom"
        align="start"
        sideOffset={8}
        initialFocus={false}
        className="w-[min(360px,calc(100vw-16px))] overflow-hidden rounded-xl border border-gray-200 bg-white p-0 shadow-xl"
      >
        <div className="max-h-[min(80dvh,800px)] overflow-y-auto overscroll-contain">
          <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Danh mục</div>

          {isLoading ? (
            <div className="px-4 py-6 text-center text-sm text-gray-500">Đang tải danh mục...</div>
          ) : isError ? (
            <div className="px-4 py-6 text-center text-sm text-red-500">Không thể tải danh mục. Vui lòng thử lại.</div>
          ) : categories.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-gray-500">Chưa có danh mục.</div>
          ) : (
            <div className="px-2 pb-2">
              {categories.map((category) => {
                const isExpanded = expandedParentId === category.id;
                const hasChildren = (category.children?.length ?? 0) > 0;

                return (
                  <div
                    key={category.id}
                    className={`mb-1 overflow-hidden rounded-lg transition-colors duration-200 ${
                      isExpanded ? "bg-amber-50" : "bg-white"
                    }`}
                  >
                    <div className="flex min-h-12 items-stretch">
                      {/* Nhấn tên danh mục để chuyển trang */}
                      <a
                        href={`/${locale}/${category.slug}`}
                        className={`flex min-w-0 flex-1 items-center gap-3 px-3 py-3 text-left transition-colors ${
                          isExpanded ? "font-semibold text-amber-800" : "text-gray-800 hover:bg-gray-50"
                        }`}
                      >
                        <span className="shrink-0 text-gray-500">{getCategoryIcon(category.template)}</span>

                        <span className="min-w-0 flex-1 text-sm">{category.name}</span>
                      </a>

                      {/* Nút riêng để mở rộng danh mục con */}
                      {hasChildren && (
                        <button
                          type="button"
                          aria-label={isExpanded ? `Thu gọn ${category.name}` : `Mở rộng ${category.name}`}
                          aria-expanded={isExpanded}
                          onClick={() => handleToggle(category.id)}
                          className={`relative flex min-h-12 w-12 shrink-0 items-center justify-center border-gray-200/80 transition-colors duration-200 
                            /* Tạo đường viền trái ngắn lại (cách trên và dưới 4px) thay vì chạy hết chiều cao */
                            before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[1px] before:bg-gray-200/90
                            ${
                              isExpanded ? "bg-amber-100 text-amber-800" : "text-gray-500 hover:bg-gray-100"
                            }`}
                        >
                          <ChevronRight
                            className={`size-5 transition-transform duration-200 ease-in-out ${
                              isExpanded ? "rotate-90" : "rotate-0"
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Accordion danh mục con */}
                    {hasChildren && (
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-in-out ${
                          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                        aria-hidden={!isExpanded}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div className="border-t border-amber-100 py-1 pl-5 pr-3">
                            {category.children!.map((child) => (
                              <a
                                key={child.id}
                                href={`/${locale}/${child.slug}`}
                                tabIndex={isExpanded ? 0 : -1}
                                onClick={() => setOpen(false)}
                                className="flex min-h-11 items-center rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-amber-100 hover:text-amber-900"
                              >
                                {child.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
