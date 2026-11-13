"use client";

import * as React from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface OptionItem {
  id: number;
  name: string;
  [key: string]: any;
}

interface XAddressSelectProps {
  id: string;
  label: string;
  floatingLabel?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  value: number | null;
  options: OptionItem[];
  onValueChange: (id: number | null) => void;
  searchPlaceholder?: string;
  hideClearButton?: boolean; // Thêm prop hideClearButton
}

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase();
}

export const XAddressSelect: React.FC<XAddressSelectProps> = ({
  id,
  label,
  floatingLabel,
  required = false,
  disabled = false,
  placeholder = "Chọn...",
  className = "",
  value,
  options,
  onValueChange,
  searchPlaceholder = "Tìm kiếm...",
  hideClearButton = false, // Mặc định là false giống XCountrySelect
}) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const searchRef = React.useRef<HTMLInputElement>(null);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);

  const selected = React.useMemo(
    () => options.find((opt) => opt.id === value) ?? null,
    [options, value]
  );

  const hasValue = value !== null && value !== undefined;

  const filteredOptions = React.useMemo(() => {
    const q = normalizeSearch(search.trim());
    if (!q) return options;
    return options.filter((opt) => normalizeSearch(opt.name).includes(q));
  }, [options, search]);

  React.useEffect(() => {
    if (!open) return;
    setHighlightedIndex(0);
    requestAnimationFrame(() => searchRef.current?.focus());
  }, [open]);

  const handleSelect = (opt: OptionItem) => {
    onValueChange(opt.id);
    setOpen(false);
    setSearch("");
  };

  const handleClearClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onValueChange(null);
  };

  const currentFloatingLabel = floatingLabel || label;
  const isFloating = open || hasValue;

  return (
    <div className="w-full flex flex-col gap-1">
      <Popover
        open={open}
        onOpenChange={(isOpen) => {
          if (disabled) return;
          setOpen(isOpen);
          if (!isOpen) setSearch("");
        }}
      >
        <PopoverTrigger
          disabled={disabled}
          id={id}
          className={cn(
            `relative flex items-center w-full rounded-lg border px-3 pt-5 pb-2 transition-all duration-300 ease-in-out bg-white cursor-pointer select-none text-left
            border-gray-300 focus-within:border-black focus:outline-none focus-visible:ring-0`,
            disabled && "bg-gray-100 cursor-not-allowed opacity-75",
            className
          )}
        >
          {/* 1. Label thu nhỏ bên trên */}
          <span
            className={cn(
              `absolute left-3 right-8 flex items-center justify-between pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left`,
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

          {/* 2. Label hiển thị chính giữa khi chưa chọn */}
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
          <div className="w-full bg-transparent text-sm text-gray-900 pt-2 pr-12 flex items-center gap-2 min-h-[22px]">
            <span className="truncate">{selected ? selected.name : ""}</span>
          </div>

          {/* Nhóm nút bên phải (Được kiểm soát bởi hideClearButton) */}
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
        </PopoverTrigger>

        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] min-w-70 p-0 shadow-md bg-white rounded-lg border border-gray-200 z-50"
          align="start"
        >
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 size-4 shrink-0 opacity-50" />
            <input
              ref={searchRef}
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setHighlightedIndex(0);
              }}
              placeholder={searchPlaceholder}
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="max-h-72 overflow-y-auto p-1" role="listbox">
            {filteredOptions.length === 0 ? (
              <div className="px-3 py-6 text-center text-sm text-gray-500">
                Không tìm thấy dữ liệu.
              </div>
            ) : (
              filteredOptions.map((opt, index) => {
                const isSelected = opt.id === value;
                const isHighlighted = index === highlightedIndex;

                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm outline-none transition-colors",
                      isHighlighted && "bg-gray-100 text-gray-900",
                      !isHighlighted && "hover:bg-gray-50"
                    )}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => handleSelect(opt)}
                  >
                    <span className="font-medium text-gray-900 truncate">
                      {opt.name}
                    </span>
                    {isSelected ? <Check className="size-4 shrink-0 text-black" /> : null}
                  </button>
                );
              })
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};