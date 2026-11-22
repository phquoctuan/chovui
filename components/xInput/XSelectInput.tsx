"use client";

import * as React from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { UseFormRegisterReturn, FieldError as RHFFieldError } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export interface SelectItem {
  value: string | number;
  label: string;
}

export interface XSelectInputProps {
  id: string;
  label: string;
  floatingLabel?: string;
  required?: boolean;
  error?: RHFFieldError;
  registration?: UseFormRegisterReturn;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  name?: string;
  value?: string | number | null;
  defaultValue?: string | number | null;
  onValueChange?: (value: any) => void;
  onClear?: () => void;
  hideClearButton?: boolean;
  note?: string | null;
  listItems: SelectItem[]; // Danh sách các lựa chọn truyền vào
}

export const XSelectInput: React.FC<XSelectInputProps> = ({
  id,
  label,
  floatingLabel,
  required = false,
  error,
  registration,
  disabled = false,
  placeholder,
  className = "",
  name,
  value,
  defaultValue,
  onValueChange,
  onClear,
  hideClearButton = false,
  note = null,
  listItems = [],
}) => {
  // Thêm state nội bộ để lưu trữ giá trị khi chọn nếu component ở dạng uncontrolled/semi-controlled
  const [internalValue, setInternalValue] = React.useState<string | number | null>(
    value !== undefined ? value : (defaultValue ?? null)
  );

  // Đồng bộ lại khi prop value thay đổi từ bên ngoài
  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value ?? null);
    }
  }, [value]);

  const [open, setOpen] = React.useState(false);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);

  // So sánh chuỗi để tránh lệch kiểu dữ liệu (string vs number)
  const selected = React.useMemo(
    () => listItems.find((item) => String(item.value) === String(internalValue)) ?? null,
    [listItems, internalValue],
  );

  const hasValue = internalValue !== null && internalValue !== undefined && internalValue !== "";

  React.useEffect(() => {
    if (!open) return;
    const selectedIdx = listItems.findIndex((item) => String(item.value) === String(internalValue));
    setHighlightedIndex(selectedIdx >= 0 ? selectedIdx : 0);
  }, [open, listItems, internalValue]);

  const handleSelectItem = (item: SelectItem) => {
    const val = item.value;
    
    // Cập nhật state nội bộ ngay lập tức để UI nhận diện có giá trị và đẩy label lên
    setInternalValue(val);

    if (onValueChange) {
      onValueChange(val);
    }

    if (registration?.onChange) {
      const syntheticEvent = {
        target: { name: registration.name, value: val },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      registration.onChange(syntheticEvent);
    }

    setOpen(false);
  };

  const handleClearClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    setInternalValue("");

    if (onValueChange) {
      onValueChange("");
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

  function handleKeyDown(event: React.KeyboardEvent) {
    if (disabled) return;

    if (!open) {
      if (["Enter", "ArrowDown", " "].includes(event.key)) {
        event.preventDefault();
        setOpen(true);
      }
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      handleBlur();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((index) => Math.min(index + 1, Math.max(listItems.length - 1, 0)));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((index) => Math.max(index - 1, 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const item = listItems[highlightedIndex];
      if (item) handleSelectItem(item);
    }
  }

  const currentFloatingLabel = floatingLabel || label;
  
  // Quan trọng: Trạng thái isFloating sẽ là true nếu Popover đang mở, HOẶC đã có giá trị được chọn
  const isFloating = open || hasValue;

  return (
    <div className="w-full flex flex-col gap-1">
      <input type="hidden" {...registration} value={internalValue ?? ""} name={name || registration?.name} />

      <Popover
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) {
            handleBlur();
          }
        }}
      >
        <PopoverTrigger
          disabled={disabled}
          id={id}
          onKeyDown={handleKeyDown}
          className={cn(
            `relative flex items-center w-full rounded-lg border px-3 pt-4.5 pb-1.5 transition-all duration-300 ease-in-out bg-white cursor-pointer select-none text-left
            data-[invalid=true]:border-red-500 border-gray-300 focus-within:border-black data-[invalid=true]:focus-within:border-red-500
            focus:outline-none focus-visible:ring-0`,
            !disabled && "hover:border-black",
            disabled && "bg-gray-100 cursor-not-allowed opacity-75",
            className,
          )}
          data-invalid={!!error}
        >
          {/* 1. Label thu nhỏ bên trên */}
          <span
            className={cn(
              `absolute left-3 right-8 flex items-center justify-between pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left`,
              isFloating
                ? "top-1.5 text-xs text-gray-600 font-semibold opacity-100 scale-100"
                : "top-1/2 -translate-y-1/2 text-sm text-gray-400 font-normal opacity-0 scale-95 pointer-events-none",
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
                : "top-2 text-xs text-transparent opacity-0 scale-95 pointer-events-none",
            )}
          >
            {label}
            {required && <span className="font-bold">*</span>}
          </span>

          {/* Giá trị hiển thị bên trong */}
          <div className="w-full bg-transparent text-sm text-gray-900 pt-1.5 pr-12 flex items-center gap-2 min-h-[20px]">
            <span className="truncate inline-block">
              {selected ? selected.label : "\u00A0"}
            </span>
          </div>

          {/* Nhóm nút bên phải */}
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

        {note && <div className="text-left text-sm leading-normal font-normal text-muted-foreground">{note}</div>}

        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] min-w-70 p-1 shadow-md bg-white rounded-lg border border-gray-200 z-50"
          align="start"
        >
          <div className="max-h-72 overflow-y-auto p-1" role="listbox">
            {listItems.length === 0 ? (
              <div className="px-3 py-6 text-center text-sm text-gray-500">Không có dữ liệu.</div>
            ) : (
              listItems.map((item, index) => {
                const isSelected = String(item.value) === String(internalValue);
                const isHighlighted = index === highlightedIndex;

                return (
                  <button
                    key={String(item.value)}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm outline-none transition-colors cursor-pointer",
                      isHighlighted && "bg-gray-100 text-gray-900",
                      !isHighlighted && "hover:bg-gray-50",
                    )}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => handleSelectItem(item)}
                  >
                    <span className="font-medium text-gray-900 truncate">{item.label}</span>
                    {isSelected ? <Check className="size-4 shrink-0 text-black ml-2" /> : null}
                  </button>
                );
              })
            )}
          </div>
        </PopoverContent>
      </Popover>

      {error && <span className="text-xs text-red-500 mt-0.5">{error.message}</span>}
    </div>
  );
};