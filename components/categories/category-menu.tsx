"use client";

import { useLayoutEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {
  Menu,
  ChevronDown,
  Building2,
  Car,
  Laptop,
  Briefcase,
  Sparkles,
  AlertCircle,
  ChevronRight,
  FolderOpen,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCategories } from "@/components/hooks/use-categories";
import { getCategoryIcon } from './category-icon';

// function getCategoryIcon(slug: string) {
//   switch (slug) {
//     case "bat-dong-san":
//       return <Building2 className="h-5 w-5" />;
//     case "xe-co":
//       return <Car className="h-5 w-5" />;
//     case "do-dien-tu":
//       return <Laptop className="h-5 w-5" />;
//     case "viec-lam":
//       return <Briefcase className="h-5 w-5" />;
//     default:
//       return <Sparkles className="h-5 w-5" />;
//   }
// }

interface CategoryMenuProps {
  locale?: string;
  smallIcon?: boolean;
  hideTitle?: boolean;
  isMobile?: boolean;
}

export function CategoryMenu({ locale = "vi", smallIcon = false, hideTitle = false, isMobile = false }: CategoryMenuProps) {
  const [open, setOpen] = useState(false);
  const [selectedParentId, setSelectedParentId] = useState<number | null>(null);
  const [menuHeight, setMenuHeight] = useState<number | null>(null);

  const [leftCol, setLeftCol] = useState<HTMLDivElement | null>(null);

  const router = useRouter();
  const { data, isLoading, isError, isSuccess } = useCategories(locale);

  const categories = data ?? [];
  const activeParent = categories.find((category) => category.id === selectedParentId) ?? null;
  const hasChildren = (activeParent?.children?.length ?? 0) > 0;

  // Đo chiều cao thực tế và theo dõi thay đổi của cột danh mục cha.
  useLayoutEffect(() => {
    if (!open || !leftCol) {
      if (!open) {
        setMenuHeight(null);
      }
      return;
    }

    const updateHeight = () => {
      const height = leftCol.getBoundingClientRect().height;

      setMenuHeight((previous) => (previous === height ? previous : height));
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(leftCol);

    return () => observer.disconnect();
  }, [open, leftCol, isLoading, hideTitle]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          smallIcon ? (
            isMobile ? (
              <Button
                size="icon"
                className="shrink-0 bg-[#FFD400] text-slate-900 hover:bg-[#F5CC00]"
                aria-label="Menu"
                title="Danh mục"
              >
                <Menu className="size-6" />
              </Button>
            ) : (
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 border-slate-200 bg-white shadow-sm hover:bg-slate-50"
                title="Danh mục"
              >
                <Menu className="h-4 w-4 text-slate-800" />
              </Button>
            )
          ) : (
            <Button
              variant="outline"
              className="shrink-0 gap-2 bg-white font-bold text-slate-800 shadow-sm hover:bg-slate-50"
            >
              <Menu className="h-4 w-4 text-slate-800" />
              <span>Danh mục</span>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </Button>
          )
        }
      />

      <PopoverContent
        initialFocus={false}
        side="bottom"
        align="start"
        sideOffset={8}
        className={`
          box-border w-[min(300px,calc(100vw-16px))]
          overflow-hidden rounded-xl border border-gray-200
          bg-white p-0 shadow-xl outline-none
          ${activeParent ? "w-[min(600px,calc(100vw-16px))]" : "w-[min(300px,calc(100vw-16px))]"}
        `}
      >
        {isError ? (
          <div className="flex flex-col items-center justify-center gap-3 bg-white p-12 text-center">
            <AlertCircle className="h-10 w-10 text-red-500" />
            <p className="text-base font-semibold text-gray-800">Không thể tải danh mục</p>
            <p className="text-sm text-gray-500">Đã xảy ra lỗi kết nối. Vui lòng thử lại sau.</p>
          </div>
        ) : (
          /*
           * Wrapper có chiều cao do cột trái quyết định.
           * Cột phải dùng position:absolute nên không thể
           * làm tăng chiều cao của wrapper.
           */
          <div className="relative flex w-full overflow-hidden font-sans">
            {/* Cột trái: chiều cao tự nhiên, giới hạn theo viewport */}
            <div
              ref={setLeftCol}
              className={`
                box-border shrink-0
                overflow-y-auto overscroll-contain
                border-r border-gray-100 bg-white py-2
                [max-height:calc(100dvh-80px)]
                ${activeParent ? "w-5/10" : "w-10/10"}
              `}
            >
              {!hideTitle && (
                <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Danh mục</div>
              )}

              {isLoading ? (
                <div className="p-6 text-center text-sm text-gray-500">Đang tải...</div>
              ) : categories.length === 0 ? (
                <div className="p-6 text-center text-sm text-gray-400">Không có dữ liệu</div>
              ) : (
                categories.map((category) => {
                  const isSelected = activeParent?.id === category.id;
                  const categoryHasChildren = (category.children?.length ?? 0) > 0;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onMouseEnter={() => setSelectedParentId(category.id)}
                      onFocus={() => setSelectedParentId(category.id)}
                      onClick={() => {
                        setOpen(false);
                        router.push(`/${locale}/${category.slug}`);
                      }}
                      className={`
                        flex w-full items-center justify-between
                        px-4 py-3 text-left transition-colors
                        ${isSelected ? "bg-gray-100 font-semibold text-black" : "text-gray-700 hover:bg-gray-50"}
                      `}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="shrink-0 text-gray-500">{getCategoryIcon(category.template)}</span>
                        <span className="truncate text-sm">{category.name}</span>
                      </span>

                      {categoryHasChildren && <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />}
                    </button>
                  );
                })
              )}
            </div>

            {/* Cột phải: tuyệt đối không ảnh hưởng chiều cao popup */}
            { activeParent ? (
              <div
                className="
                  absolute right-0 top-0
                  w-5/10 min-w-0
                  overflow-x-hidden overflow-y-auto
                  overscroll-contain bg-white p-6
                "
                style={{
                  height: menuHeight === null ? "auto" : `${menuHeight}px`,
                  visibility: menuHeight === null ? "hidden" : "visible",
                }}
              >
              {activeParent ? (
                hasChildren ? (
                  <div className="grid grid-cols-1 gap-y-4">
                    {activeParent.children.map((child) => (
                      <Link
                        key={child.id}
                        href={`/${locale}/${child.slug}`}
                        onClick={() => setOpen(false)}
                        className="
                          block py-1 text-sm text-gray-700
                          transition-all hover:translate-x-1
                          hover:text-amber-600
                        "
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-gray-400">
                      <FolderOpen className="h-8 w-8 stroke-1 text-gray-300" />

                      <p className="text-sm italic">Danh mục này không có danh mục con</p>

                      <button
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          router.push(`/${locale}/${activeParent.slug}`);
                        }}
                        className="mt-2 cursor-pointer text-xs font-medium text-amber-600 hover:underline"
                      >
                        Xem tất cả bài viết thuộc {activeParent.name} →
                      </button>
                    </div>
                  )
                ) : null
                  // <div className="text-center text-sm text-gray-400">
                  //   Chọn một danh mục bên trái
                  // </div>
              }
              </div>
            )
            : null}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
