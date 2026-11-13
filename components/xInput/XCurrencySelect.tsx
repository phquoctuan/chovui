"use client";

import * as React from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { UseFormRegisterReturn, FieldError as RHFFieldError } from "react-hook-form";

import { cn } from "@/lib/utils";
import { useCurrencies } from "@/components/hooks/use-currencies"; // Hook lấy danh sách tiền tệ của bạn
import type { Currency } from "@/db/schema"; // Đường dẫn đến schema Drizzle của bạn
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase();
}

export interface XCurrencySelectProps {
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
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string) => void;
  onClear?: () => void;
  hideClearButton?: boolean;
  note?: string | null;
}

function CurrencyIcon({ currency }: { currency: Currency }) {
  if (!currency.iconUrl) {
    return (
      <span className="flex size-6.5 shrink-0 items-center justify-center rounded-sm bg-muted text-[11px] font-bold text-primary">
        {currency.code}
      </span>
    );
  }

  return (
    <img
      src={currency.iconUrl}
      alt={currency.code}
      aria-hidden="true"
      className="size-6 shrink-0 rounded-sm object-cover"
      loading="lazy"
    />
  );
}

export const XCurrencySelect: React.FC<XCurrencySelectProps> = ({
  id,
  label,
  floatingLabel,
  required = false,
  error,
  registration,
  disabled = false,
  placeholder = "Chọn tiền tệ",
  className = "",
  name,
  value,
  defaultValue,
  onValueChange,
  onClear,
  hideClearButton = false,
  note = null,
}) => {
  const { data: currencies = [], isLoading, isError } = useCurrencies();

  const currentValue = value !== undefined ? value : (defaultValue ?? null);

  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const searchRef = React.useRef<HTMLInputElement>(null);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);

  const selected = React.useMemo(
    () => currencies.find((item) => item.code === currentValue) ?? null,
    [currencies, currentValue],
  );

  const hasValue = Boolean(currentValue);

  const filteredCurrencies = React.useMemo(() => {
    const q = normalizeSearch(search.trim());
    if (!q) return currencies;

    return currencies.filter((item) => {
      const haystack = [item.code, item.name, item.symbol].map(normalizeSearch).join(" ");

      return haystack.includes(q);
    });
  }, [currencies, search]);

  React.useEffect(() => {
    if (!open) return;
    setHighlightedIndex(0);
    requestAnimationFrame(() => searchRef.current?.focus());
  }, [open]);

  const handleSelectCurrency = (currency: Currency) => {
    const code = currency.code;

    if (onValueChange) {
      onValueChange(code);
    }

    if (registration?.onChange) {
      const syntheticEvent = {
        target: { name: registration.name, value: code },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      registration.onChange(syntheticEvent);
    }

    setOpen(false);
    setSearch("");
  };

  const handleClearClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

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
      setHighlightedIndex((index) => Math.min(index + 1, Math.max(filteredCurrencies.length - 1, 0)));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((index) => Math.max(index - 1, 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const currency = filteredCurrencies[highlightedIndex];
      if (currency) handleSelectCurrency(currency);
    }
  }

  const currentFloatingLabel = floatingLabel || label;
  const isFloating = open || hasValue;

  return (
    <div className="w-full flex flex-col gap-1">
      <input type="hidden" {...registration} value={currentValue ?? ""} name={name || registration?.name} />

      <Popover
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) {
            setSearch("");
            handleBlur();
          }
        }}
      >
        <PopoverTrigger
          disabled={disabled}
          id={id}
          onKeyDown={handleKeyDown}
          className={cn(
            `relative flex items-center w-full rounded-lg border px-3 pt-5 pb-2 transition-all duration-300 ease-in-out bg-white cursor-pointer select-none text-left
            data-[invalid=true]:border-red-500 border-gray-300 focus-within:border-black data-[invalid=true]:focus-within:border-red-500
            focus:outline-none focus-visible:ring-0`,
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
                ? "top-2 text-xs text-gray-600 font-semibold opacity-100 scale-100"
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
          <div className="w-full bg-transparent text-sm text-gray-900 pt-2 pr-12 flex items-center gap-2 min-h-[22px]">
            {selected ? <CurrencyIcon currency={selected} /> : null}
            <span className="truncate">
              {selected ? `- ${selected.name} (${selected.symbol})` : ""}
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
              onKeyDown={handleKeyDown}
              placeholder="Tìm mã, tên hoặc ký hiệu tiền tệ..."
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="max-h-72 overflow-y-auto p-1" role="listbox">
            {isLoading ? (
              <div className="px-3 py-6 text-center text-sm text-gray-500">Đang tải danh sách tiền tệ...</div>
            ) : isError ? (
              <div className="px-3 py-6 text-center text-sm text-red-500">Không thể tải danh sách tiền tệ.</div>
            ) : filteredCurrencies.length === 0 ? (
              <div className="px-3 py-6 text-center text-sm text-gray-500">Không tìm thấy tiền tệ.</div>
            ) : (
              filteredCurrencies.map((currency, index) => {
                const isSelected = currency.code === currentValue;
                const isHighlighted = index === highlightedIndex;

                return (
                  <button
                    key={currency.code}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm outline-none transition-colors",
                      isHighlighted && "bg-gray-100 text-gray-900",
                      !isHighlighted && "hover:bg-gray-50",
                    )}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => handleSelectCurrency(currency)}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <CurrencyIcon currency={currency} />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium text-gray-900">
                          {/* <span className="font-semibold text-primary">{currency.code}</span> */}
                          <span className="mr-1 text-gray-400">-</span>
                          <span>{currency.name}</span>
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-600">
                        {currency.symbol}
                      </span>
                      {isSelected ? <Check className="size-4 shrink-0 text-black" /> : null}
                    </div>
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
