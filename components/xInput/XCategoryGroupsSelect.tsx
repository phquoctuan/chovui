"use client";
import * as React from "react";
import { Check, ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { UseFormRegisterReturn, FieldError as RHFFieldError } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { getCategoryIcon } from "@/components/categories/category-icon";
import { useCategoryGroups } from "@/components/hooks/use-category-groups";

export interface CatgoryProps {
  id: number;
  template: string;
}

export interface XCategoryGroupsSelectProps {
  id: string;
  label: string;
  floatingLabel?: string;
  required?: boolean;
  error?: RHFFieldError;
  registration?: UseFormRegisterReturn;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  locale?: string;
  name?: string;
  value?: string | number | null;
  defaultValue?: string | number | null;
  initGroupId?: number;   // Nhóm khởi tạo mặc định khi chưa có value
  groups: number[];        // Danh sách ID nhóm danh mục
  onValueChange?: (value: CatgoryProps) => void;
  onClear?: () => void;
  hideClearButton?: boolean;
  note?: string | null;
}

export const XCategoryGroupsSelect: React.FC<XCategoryGroupsSelectProps> = ({
  id,
  label,
  floatingLabel,
  required = false,
  error,
  registration,
  disabled = false,
  placeholder = "Chọn danh mục hàng hóa",
  className = "",
  locale = "vi",
  name,
  value,
  defaultValue,
  initGroupId,
  groups,
  onValueChange,
  onClear,
  hideClearButton = false,
  note = null,
}) => {
  const { data, isLoading, isError } = useCategoryGroups(locale, groups);
  const categories = data ?? [];

  const rawValue = value !== undefined ? value : (defaultValue ?? null);
  const currentValue = (rawValue === null || rawValue === undefined || Number.isNaN(Number(rawValue))) 
    ? "" 
    : Number(rawValue);

  const [open, setOpen] = React.useState(false);
  const [selectedParentId, setSelectedParentId] = React.useState<string | number | null>(null);

  // Tự động tìm parent dựa trên currentValue (nếu đã có giá trị được chọn từ trước)
  React.useEffect(() => {
    if (categories.length > 0 && currentValue) {
      for (const cat of categories) {
        if (cat.id === currentValue) {
          setSelectedParentId(null);
          break;
        }
        const foundSub = cat.children?.some((sub: any) => sub.id === currentValue);
        if (foundSub) {
          setSelectedParentId(cat.id);
          break;
        }
      }
    }
  }, [categories, currentValue]);

  // Nếu categories trả về chỉ có đúng 1 group, luôn gán activeParent là group đó
  const activeParent = React.useMemo(() => {
    if (categories.length === 1) {
      return categories[0];
    }
    return categories.find((category) => category.id === selectedParentId) ?? null;
  }, [categories, selectedParentId]);

  // Xác định ID của danh mục cấp 1 đang được chọn dựa theo currentValue (để highlight)
  const activeRootCategoryId = React.useMemo(() => {
    if (!currentValue) return null;
    for (const cat of categories) {
      if (cat.id === currentValue) return cat.id;
      const foundSub = cat.children?.some((sub: any) => sub.id === currentValue);
      if (foundSub) return cat.id;
    }
    return null;
  }, [currentValue, categories]);

    // Tìm tên danh mục và tên cha để hiển thị định dạng: "Cấp 1 / Cấp 2"
  const selectedCategoryDisplay = React.useMemo(() => {
    if (!currentValue) return null;
    for (const cat of categories) {
      if (cat.id === currentValue) return cat.name;
      const foundSub = cat.children.find((sub) => sub.id === currentValue);
      if (foundSub) return `${cat.name} / ${foundSub.name}`;
    }
    return null;
  }, [currentValue, categories]);

  const hasValue = Boolean(currentValue);

  const handleSelectCategory = (cat: CatgoryProps) => {
    if (onValueChange) {
      onValueChange(cat);
    }

    if (registration?.onChange) {
      const syntheticEvent = {
        target: { name: registration.name, value: cat.id },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      registration.onChange(syntheticEvent);
    }

    setOpen(false);
  };

  const handleClearClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (onValueChange) {
      onValueChange({ id: 0, template: "" });
    }

    if (registration?.onChange) {
      const syntheticEvent = {
        target: { name: registration.name, value: "" },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      registration.onChange(syntheticEvent);
    }

    if (onClear) {
      onClear();
    }
  };

  const handleBlur = () => {
    if (registration?.onBlur) {
      const syntheticEvent = {
        target: { name: registration.name },
      } as unknown as React.FocusEvent<HTMLInputElement>;
      registration.onBlur(syntheticEvent);
    }
  };

  const currentFloatingLabel = floatingLabel || label;
  const isFloating = open || hasValue;

  // Hiển thị nút back khi có activeParent VÀ tổng số root categories lớn hơn 1
  const showBackButton = activeParent && categories.length > 1;

  return (
    <div className="w-full flex flex-col gap-1">
      <input
        type="hidden"
        {...registration}
        value={currentValue ?? ""}
        name={name || registration?.name}
      />

      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (isOpen) {
            // KHI MỞ DIALOG: Nếu chưa có currentValue và có initGroupId, tìm đúng nhóm theo groupId hoặc id để mở trực tiếp cấp 2
            if (!currentValue && initGroupId && categories.length > 0) {
              const targetGroup = categories.find(
                (c: any) => c.groupId === initGroupId || c.id === initGroupId
              );
              if (targetGroup) {
                setSelectedParentId(targetGroup.id);
              }
            }
          } else {
            handleBlur();
            // Khi đóng dialog, nếu chưa có giá trị thì reset lại selectedParentId để lần sau mở lại chạy đúng logic initGroupId
            setTimeout(() => {
              if (!currentValue) {
                setSelectedParentId(null);
              }
            }, 200);
          }
        }}
      >
        <DialogTrigger
          disabled={disabled}
          id={id}
          className={cn(
            `relative flex items-center w-full rounded-lg border px-3 pt-5 pb-2 transition-all duration-300 ease-in-out bg-white cursor-pointer select-none text-left
            data-[invalid=true]:border-red-500 border-gray-300 focus-within:border-black data-[invalid=true]:focus-within:border-red-500
            focus:outline-none focus-visible:ring-0 shadow-sm`,
            !disabled && "hover:border-black",
            disabled && "bg-gray-100 cursor-not-allowed opacity-75",
            className
          )}
          data-invalid={!!error}
        >
          {/* Label thu nhỏ bên trên (Floating) */}
          <span
            className={cn(
              `absolute left-3 right-12 flex items-center justify-between pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left`,
              isFloating
                ? "top-2 text-xs text-gray-600 font-semibold opacity-100 scale-100"
                : "top-1/2 -translate-y-1/2 text-sm text-gray-400 font-normal opacity-0 scale-95 pointer-events-none"
            )}
          >
            <span className="flex items-center gap-0.5 truncate">
              {currentFloatingLabel}
              {required && <span className="font-bold">*</span>}
            </span>
          </span>

          {/* Label hiển thị chính giữa khi chưa chọn */}
          <span
            className={cn(
              `absolute left-3 flex items-center gap-0.5 pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left`,
              !isFloating
                ? "top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium opacity-100 scale-100"
                : "top-2 text-xs text-transparent opacity-0 scale-95 pointer-events-none"
            )}
          >
            {label}
            {required && <span className="font-bold">*</span>}
          </span>

          {/* Giá trị hiển thị bên trong */}
          <div className="w-full bg-transparent text-sm text-gray-900 pt-2 pr-10 flex items-center gap-2 min-h-[22px]">
            <span className="truncate">{selectedCategoryDisplay ?? ""}</span>
          </div>

          {/* Nhóm nút bên phải (Clear + Chevron) */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            {hasValue && !disabled && !hideClearButton && (
              <div
                role="button"
                tabIndex={-1}
                onClick={handleClearClick}
                className="p-0.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </div>
            )}
            <ChevronDown className="size-4 shrink-0 text-gray-400" />
          </div>
        </DialogTrigger>

        {note && (
          <div className="text-left text-sm leading-normal font-normal text-muted-foreground">
            {note}
          </div>
        )}

        <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden rounded-xl bg-white">
          <DialogHeader className="px-4 py-3.5 border-b flex flex-row items-center space-y-0 relative">
            {showBackButton ? (
              <button
                type="button"
                onClick={() => setSelectedParentId(null)}
                className="absolute left-4 p-1 rounded-full hover:bg-gray-100 transition-colors text-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            ) : null}

            <DialogTitle className="w-full text-center text-base font-semibold">
              Chọn danh mục
            </DialogTitle>
          </DialogHeader>

          <div className="max-h-[60vh] overflow-y-auto px-2 py-2">
            {isLoading ? (
              <div className="py-10 text-center text-sm text-gray-500">Đang tải danh mục...</div>
            ) : isError ? (
              <div className="py-10 text-center text-sm text-red-500">Không thể tải danh mục.</div>
            ) : !activeParent ? (
              /* Danh sách Cấp 1 (Hiển thị khi chưa chọn parent và số root > 1) */
              <div className="space-y-0.5">
                {categories.map((cat: any) => {
                  const hasSubChildren = (cat.children?.length ?? 0) > 0;
                  const isSelectedDirectly = currentValue === cat.id;
                  const isRootActive = activeRootCategoryId === cat.id;

                  return (
                    <div
                      key={cat.id}
                      onClick={() => {
                        if (hasSubChildren) {
                          setSelectedParentId(cat.id);
                        } else {
                          handleSelectCategory(cat);
                        }
                      }}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium cursor-pointer transition-colors",
                        isRootActive ? "bg-gray-100 border-blue-150 text-gray-900 font-semibold" : "hover:bg-gray-100 text-gray-900"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(cat.template)}
                        <span>{cat.name}</span>
                      </div>

                      {hasSubChildren ? (
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      ) : (
                        <div
                          className={`h-4 w-4 rounded-full border flex items-center justify-center transition-colors ${
                            isSelectedDirectly ? "border-amber-500 bg-amber-500" : "border-gray-400"
                          }`}
                        >
                          {isSelectedDirectly && <Check className="h-3 w-3 text-white stroke-[3]" />}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Màn hình danh mục con (Cấp 2) */
              <div className="space-y-0.5">
                {activeParent.children?.map((subCat: any) => {
                  const isSelected = currentValue === subCat.id;

                  return (
                    <div
                      key={subCat.id}
                      onClick={() => handleSelectCategory(subCat)}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-3 text-sm cursor-pointer transition-colors",
                        isSelected ? "bg-gray-100 border-blue-150 font-medium text-gray-900" : "hover:bg-gray-100 text-gray-900"
                      )}
                    >
                      <span>{subCat.name}</span>

                      <div
                        className={`h-4 w-4 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected ? "border-amber-500 bg-amber-500" : "border-gray-400"
                        }`}
                      >
                        {isSelected && <Check className="h-3 w-3 text-white stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {error && <span className="text-xs text-red-500 mt-0.5">{error.message}</span>}
    </div>
  );
};