"use client";

import * as React from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { UseFormRegisterReturn, FieldError as RHFFieldError, UseFormSetError } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export interface SelectItem {
  value: string | number;
  label: string;
}

export interface XSelectLookupInputProps {
  id: string;
  label: string;
  floatingLabel?: string;
  required?: boolean;
  error?: RHFFieldError;
  registration?: UseFormRegisterReturn;
  /** Truyền từ useForm() để set/clear lỗi "Vui lòng chọn" khi tìm kiếm không có kết quả (chỉ áp dụng khi allowCustomInput = false) */
  setError?: UseFormSetError<any>;
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
  listItems: SelectItem[];
  /** Cho phép nhập giá trị tự do không nằm trong listItems và không báo lỗi */
  allowCustomInput?: boolean;
}

const NO_MATCH_ERROR_MESSAGE = "Vui lòng chọn";

function normalizeSearch(value: string) {
  return value
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase();
}

export const XSelectLookupInput: React.FC<XSelectLookupInputProps> = ({
  id,
  label,
  floatingLabel,
  required = false,
  error,
  registration,
  setError,
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
  allowCustomInput = false,
}) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const shouldKeepFocusRef = React.useRef(false);
  const isSelectingRef = React.useRef(false);
  const fieldName = name || registration?.name || id;

  const [internalValue, setInternalValue] = React.useState<string | number | null>(
    value !== undefined ? value : (defaultValue ?? null),
  );
  const [open, setOpen] = React.useState(false);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);
  const [searchText, setSearchText] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [noMatchError, setNoMatchError] = React.useState(false);

  const selected = React.useMemo(
    () => listItems.find((item) => String(item.value) === String(internalValue)) ?? null,
    [listItems, internalValue],
  );

  // Chỉ đồng bộ khi prop value thực sự thay đổi từ bên ngoài (tránh reset khi đang gõ allowCustomInput)
  React.useEffect(() => {
    if (value !== undefined && value !== internalValue) {
      setInternalValue(value ?? null);
      setIsSearching(false);
      setSearchText("");
      setNoMatchError(false);
    }
  }, [value, internalValue]);

  const filteredItems = React.useMemo(() => {
    if (!isSearching || !searchText.trim()) {
      return listItems;
    }
    const q = normalizeSearch(searchText.trim());
    return listItems.filter((item) => normalizeSearch(item.label).includes(q));
  }, [listItems, isSearching, searchText]);

  const emitChange = React.useCallback(
    (val: string | number) => {
      if (onValueChange) {
        onValueChange(val);
      }
      if (registration?.onChange) {
        const syntheticEvent = {
          target: { name: registration.name, value: val },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        registration.onChange(syntheticEvent);
      }
    },
    [onValueChange, registration],
  );

  const syncNoMatchFormError = React.useCallback(
    (hasNoMatch: boolean) => {
      if (allowCustomInput) {
        setNoMatchError(false);
        return;
      }

      setNoMatchError(hasNoMatch);
      if (!setError || !fieldName) return;

      if (hasNoMatch) {
        setError(fieldName, {
          type: "manual",
          message: NO_MATCH_ERROR_MESSAGE,
        });
      } else if (error?.type === "manual" && error?.message === NO_MATCH_ERROR_MESSAGE) {
        setError(fieldName, { type: "manual", message: "" });
      }
    },
    [allowCustomInput, setError, fieldName, error?.type, error?.message],
  );

  // Kiểm tra kết quả lọc, cập nhật trạng thái lỗi và giữ focus trên input khi đang gõ/Backspace
  React.useEffect(() => {
    if (!isSearching) {
      syncNoMatchFormError(false);
      return;
    }

    const trimmed = searchText.trim();
    const hasNoMatch = trimmed.length > 0 && filteredItems.length === 0;

    if (allowCustomInput) {
      syncNoMatchFormError(false);
      if (open && hasNoMatch) {
        setOpen(false);
      }
    } else {
      syncNoMatchFormError(hasNoMatch);
      if (open && hasNoMatch) {
        setOpen(false);
      }
    }

    setHighlightedIndex(0);

    if (shouldKeepFocusRef.current && document.activeElement !== inputRef.current) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isSearching, searchText, filteredItems.length, allowCustomInput, open, syncNoMatchFormError]);

  const hasValue =
    (internalValue !== null && internalValue !== undefined && internalValue !== "") || searchText.length > 0;

  React.useEffect(() => {
    if (!open) return;
    if (isSearching) {
      setHighlightedIndex(0);
      return;
    }
    const selectedIdx = filteredItems.findIndex((item) => String(item.value) === String(internalValue));
    setHighlightedIndex(selectedIdx >= 0 ? selectedIdx : 0);
  }, [open, filteredItems, internalValue, isSearching]);

  const handleSelectItem = (item: SelectItem) => {
    isSelectingRef.current = true;
    shouldKeepFocusRef.current = false;

    const val = item.value;
    setInternalValue(val);
    setSearchText("");
    setIsSearching(false);
    syncNoMatchFormError(false);

    emitChange(val);
    setOpen(false);

    requestAnimationFrame(() => {
      isSelectingRef.current = false;
    });
  };

  const handleClearClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    setInternalValue("");
    setSearchText("");
    setIsSearching(false);
    syncNoMatchFormError(false);

    emitChange("");

    if (onClear) {
      onClear();
    }
  };

  const handleBlur = () => {
    // Bỏ qua blur tạm thời khi đang click chọn item hoặc focus vẫn đang ở input
    if (isSelectingRef.current || document.activeElement === inputRef.current) {
      return;
    }

    shouldKeepFocusRef.current = false;

    if (isSearching) {
      const trimmed = searchText.trim();

      if (!trimmed) {
        if (allowCustomInput) {
          setInternalValue("");
          emitChange("");
        }
        setSearchText("");
        setIsSearching(false);
        syncNoMatchFormError(false);
      } else {
        const exactMatch = listItems.find((item) => normalizeSearch(item.label) === normalizeSearch(trimmed));

        if (exactMatch) {
          setInternalValue(exactMatch.value);
          setSearchText("");
          setIsSearching(false);
          syncNoMatchFormError(false);
          emitChange(exactMatch.value);
        } else if (allowCustomInput) {
          // Cho phép giữ giá trị người dùng tự nhập làm value
          setInternalValue(trimmed);
          setSearchText("");
          setIsSearching(false);
          syncNoMatchFormError(false);
          emitChange(trimmed);
        } else if (filteredItems.length === 0) {
          setInternalValue("");
          emitChange("");
          syncNoMatchFormError(true);
        } else {
          // Có gợi ý nhưng chưa chọn: revert về trạng thái trước đó
          setSearchText("");
          setIsSearching(false);
          syncNoMatchFormError(false);
        }
      }
    } else {
      setSearchText("");
    }

    if (registration?.onBlur) {
      const syntheticEvent = {
        target: { name: registration.name },
      } as unknown as React.FocusEvent<HTMLInputElement>;
      registration.onBlur(syntheticEvent);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    shouldKeepFocusRef.current = true;

    const nextText = e.target.value;
    const trimmed = nextText.trim();
    const matched = trimmed
      ? listItems.filter((item) => normalizeSearch(item.label).includes(normalizeSearch(trimmed)))
      : listItems;

    setSearchText(nextText);
    setIsSearching(true);

    if (allowCustomInput) {
      setInternalValue(nextText);
      emitChange(nextText);
    }

    if (matched.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleInputFocus = () => {
    if (disabled) return;
    shouldKeepFocusRef.current = true;
    if (filteredItems.length > 0 && !open) {
      setOpen(true);
    }
  };

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (disabled) return;

    if (event.key === "Escape") {
      event.preventDefault();
      shouldKeepFocusRef.current = false;
      setOpen(false);
      setIsSearching(false);
      if (!allowCustomInput) {
        setSearchText("");
      }
      syncNoMatchFormError(false);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open && filteredItems.length > 0) {
        setOpen(true);
        return;
      }
      setHighlightedIndex((index) => Math.min(index + 1, Math.max(filteredItems.length - 1, 0)));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!open && filteredItems.length > 0) {
        setOpen(true);
        return;
      }
      setHighlightedIndex((index) => Math.max(index - 1, 0));
      return;
    }

    if (event.key === "Enter" && open && filteredItems.length > 0) {
      event.preventDefault();
      const item = filteredItems[highlightedIndex];
      if (item) {
        handleSelectItem(item);
      }
    }
  }

  const currentFloatingLabel = floatingLabel || label;
  const isFloating = open || hasValue || isSearching;
  const isInvalid = allowCustomInput ? Boolean(error?.message) : Boolean(error?.message) || noMatchError;
  const displayErrorMessage = allowCustomInput
    ? error?.message || ""
    : error?.message || (noMatchError ? NO_MATCH_ERROR_MESSAGE : "");

  // Hiển thị searchText khi đang gõ; nếu không gõ thì ưu tiên label của item khớp, hoặc giá trị tự do khi allowCustomInput = true
  const inputDisplayValue = isSearching
    ? searchText
    : selected
      ? selected.label
      : allowCustomInput && internalValue !== null && internalValue !== undefined
        ? String(internalValue)
        : "";

  const shouldShowPopoverContent = open && filteredItems.length > 0;

  return (
    <div className="w-full flex flex-col gap-1">
      <input type="hidden" {...registration} value={internalValue ?? ""} name={fieldName} />

      <Popover
        open={shouldShowPopoverContent}
        onOpenChange={(isOpen) => {
          if (isSelectingRef.current) {
            return;
          }
          if (isOpen && filteredItems.length === 0) {
            setOpen(false);
            return;
          }
          setOpen(isOpen);
          if (!isOpen) {
            handleBlur();
          } else {
            requestAnimationFrame(() => {
              inputRef.current?.focus();
            });
          }
        }}
      >
        <div className="relative w-full">
          <PopoverTrigger
            disabled={disabled}
            nativeButton={false}
            render={(triggerProps) => (
              <div
                {...triggerProps}
                id={id}
                role="combobox"
                aria-expanded={shouldShowPopoverContent}
                aria-haspopup="listbox"
                aria-controls={`${id}-listbox`}
                aria-invalid={isInvalid}
                data-invalid={isInvalid}
                onClick={(e) => {
                  triggerProps.onClick?.(e as any);
                  if (disabled) return;
                  if (filteredItems.length > 0) {
                    setOpen(true);
                  }
                  requestAnimationFrame(() => {
                    inputRef.current?.focus();
                  });
                }}
                className={cn(
                  `relative flex items-center w-full rounded-lg border px-3 pt-4.5 pb-1.5 transition-all duration-300 ease-in-out bg-white cursor-text select-none text-left
                  data-[invalid=true]:border-red-500 border-gray-300 focus-within:border-black data-[invalid=true]:focus-within:border-red-500
                  focus:outline-none focus-visible:ring-0`,
                  !disabled && "hover:border-black",
                  disabled && "bg-gray-100 cursor-not-allowed opacity-75",
                  className,
                )}
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

                {/* 2. Label hiển thị chính giữa khi chưa chọn và chưa gõ */}
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

                {/* Ô nhập tìm kiếm / hiển thị giá trị ngay bên trong */}
                <div className="w-full bg-transparent text-sm text-gray-900 pt-1.5 pr-12 flex items-center gap-2 min-h-[22px]">
                  <input
                    ref={inputRef}
                    type="text"
                    disabled={disabled}
                    value={inputDisplayValue}
                    placeholder={isFloating ? placeholder : undefined}
                    onFocus={handleInputFocus}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 truncate disabled:cursor-not-allowed"
                  />
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
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      if (disabled) return;
                      if (filteredItems.length > 0) {
                        setOpen((prev) => !prev);
                      }
                    }}
                    className="p-0.5 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <ChevronDown className="size-4 shrink-0" />
                  </span>
                </div>
              </div>
            )}
          />
        </div>

        {note && <div className="text-left text-sm leading-normal font-normal text-muted-foreground">{note}</div>}

        {shouldShowPopoverContent && (
          <PopoverContent
            initialFocus={false}
            className="w-[var(--anchor-width)] min-w-70 p-1 shadow-md bg-white rounded-lg border border-gray-200 z-50"
            align="start"
          >
            <div id={`${id}-listbox`} className="max-h-72 overflow-y-auto p-1" role="listbox">
              {filteredItems.map((item, index) => {
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
                    onMouseDown={(e) => {
                      e.preventDefault();
                      isSelectingRef.current = true;
                    }}
                    onClick={() => handleSelectItem(item)}
                  >
                    <span className="font-medium text-gray-900 truncate">{item.label}</span>
                    {isSelected ? <Check className="size-4 shrink-0 text-black ml-2" /> : null}
                  </button>
                );
              })}
            </div>
          </PopoverContent>
        )}
      </Popover>

      {displayErrorMessage && <span className="text-xs text-red-500 mt-0.5">{displayErrorMessage}</span>}
    </div>
  );
};
