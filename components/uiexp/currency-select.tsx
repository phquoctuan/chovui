"use client";

import * as React from "react";
import { Check, ChevronDown, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useCurrencies } from "@/components/hooks/use-currencies"; // Import hook của bạn
import type { Currency } from "@/db/schema"; // Đường dẫn đến schema Drizzle của bạn

// Hàm chuẩn hóa chuỗi để tìm kiếm không dấu
function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase();
}

export type CurrencySelectProps = {
  value?: string | null;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  name?: string;
};

export function CurrencySelect({
  value,
  onValueChange,
  disabled = false,
  placeholder = "Chọn tiền tệ",
  className,
  name,
}: CurrencySelectProps) {
  const { data: currencies = [], isLoading, isError } = useCurrencies();
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const searchRef = React.useRef<HTMLInputElement>(null);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);

  // Tìm kiếm currency đang được chọn dựa theo code
  const selected = React.useMemo(() => currencies.find((item) => item.code === value) ?? null, [currencies, value]);

  // Lọc danh sách theo code, name hoặc symbol
  const filteredCurrencies = React.useMemo(() => {
    const q = normalizeSearch(search.trim());
    if (!q) return currencies;

    return currencies.filter((item) => {
      const haystack = [item.code, item.name, item.symbol].map(normalizeSearch).join(" ");

      return haystack.includes(q);
    });
  }, [currencies, search]);

  // Tự động focus vào ô input tìm kiếm khi mở popover
  React.useEffect(() => {
    if (!open) return;
    setHighlightedIndex(0);
    requestAnimationFrame(() => searchRef.current?.focus());
  }, [open]);

  function selectCurrency(currency: Currency) {
    onValueChange?.(currency.code);
    setOpen(false);
    setSearch("");
  }

  // Điều hướng bàn phím (Accessibility)
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
      if (currency) selectCurrency(currency);
    }
  }

  return (
    <div className={cn("relative", className)}>
      {/* Input ẩn phục vụ cho các form HTML truyền thống */}
      {name ? <input type="hidden" name={name} value={value ?? ""} readOnly /> : null}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          disabled={disabled}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          onKeyDown={handleKeyDown}
          className={cn(
            "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 font-normal",
            className,
          )}
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className="truncate">
              {selected ? `${selected.code} - ${selected.name} (${selected.symbol})` : placeholder}
            </span>
          </span>
          <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
        </PopoverTrigger>

        <PopoverContent className="w-[var(--radix-popover-trigger-width)] min-w-70 p-0 shadow-md" align="start">
          {/* Ô tìm kiếm */}
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
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          {/* Danh sách tùy chọn */}
          <div className="max-h-72 overflow-y-auto p-1" role="listbox">
            {isLoading ? (
              <div className="px-3 py-6 text-center text-sm text-muted-foreground">Đang tải danh sách tiền tệ...</div>
            ) : isError ? (
              <div className="px-3 py-6 text-center text-sm text-destructive">Không thể tải danh sách tiền tệ.</div>
            ) : filteredCurrencies.length === 0 ? (
              <div className="px-3 py-6 text-center text-sm text-muted-foreground">Không tìm thấy tiền tệ.</div>
            ) : (
              filteredCurrencies.map((currency, index) => {
                const isSelected = currency.code === value;
                const isHighlighted = index === highlightedIndex;

                return (
                  <button
                    key={currency.code}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={cn(
                      "flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm outline-none",
                      isHighlighted && "bg-accent text-accent-foreground",
                      !isHighlighted && "hover:bg-accent/60",
                    )}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => selectCurrency(currency)}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">
                        <span className="font-semibold text-primary">{currency.code}</span>
                        <span className="mx-1.5 text-muted-foreground">-</span>
                        <span>{currency.name}</span>
                      </span>
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-muted-foreground">
                        {currency.symbol}
                      </span>
                      {isSelected ? <Check className="size-4 shrink-0" /> : null}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
