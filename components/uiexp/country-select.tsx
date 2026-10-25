"use client";

import * as React from "react";
import { Check, ChevronDown, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCountries } from "@/components/hooks/use-countries";
import type {Country} from "@/db/schema";
// Import thêm Popover nếu dự án dùng shadcn/ui (hoặc thư viện tương đương)
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase();
}

export type CountrySelectProps = {
  value?: string | null;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  locale?: "vi" | "en";
  showPhoneCode?: boolean;
  showNativeName?: boolean;
  name?: string;
};

function CountryFlag({ country }: { country: Country }) {
  if (!country.flagUrl) {
    return <span className="size-5 shrink-0 rounded-sm bg-muted" />;
  }

  return (
    <img
      src={country.flagUrl}
      alt=""
      aria-hidden="true"
      className="h-4 w-6 shrink-0 rounded-sm object-cover"
      loading="lazy"
    />
  );
}

export function CountrySelect({
  value,
  onValueChange,
  disabled = false,
  placeholder = "Chọn quốc gia",
  className,
  locale = "vi",
  showPhoneCode = false,
  showNativeName = true,
  name,
}: CountrySelectProps) {
  const { data: countries = [], isLoading, isError } = useCountries();
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const searchRef = React.useRef<HTMLInputElement>(null);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);

  const selected = React.useMemo(
    () => countries.find((country) => country.code === value) ?? null,
    [countries, value],
  );

  const filteredCountries = React.useMemo(() => {
    const q = normalizeSearch(search.trim());
    if (!q) return countries;

    return countries.filter((country) => {
      const haystack = [
        country.code,
        country.name,
        country.nameVi,
        country.nameEn,
        country.nativeName,
        country.phoneCode,
      ].map(normalizeSearch).join(" ");

      return haystack.includes(q);
    });
  }, [countries, search]);

  React.useEffect(() => {
    if (!open) return;
    setHighlightedIndex(0);
    requestAnimationFrame(() => searchRef.current?.focus());
  }, [open]);

  function selectCountry(country: Country) {
    onValueChange?.(country.code);
    setOpen(false);
    setSearch("");
  }

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
      setHighlightedIndex((index) =>
        Math.min(index + 1, Math.max(filteredCountries.length - 1, 0)),
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((index) => Math.max(index - 1, 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const country = filteredCountries[highlightedIndex];
      if (country) selectCountry(country);
    }
  }

  const displayName = selected ?
    locale === "en" ? selected.nameEn
      : locale === "vi" ? selected.nameVi
      : selected.nativeName
    : null;

  return (
    <div className={cn("relative", className)}>
      {name ? (
        <input type="hidden" name={name} value={value ?? ""} readOnly />
      ) : null}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          disabled={disabled}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          onKeyDown={handleKeyDown}
          className={cn(
            // Các class cơ bản của Button (variant="outline")
            "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 font-normal",
            className,
          )}
        >
          <span className="flex min-w-0 items-center gap-2">
            {selected ? <CountryFlag country={selected} /> : null}
            <span className="truncate">{displayName ?? placeholder}</span>
            {selected && showNativeName && selected.nativeName !== displayName ? (
              <span className="truncate text-xs text-muted-foreground">
                {selected.nativeName}
              </span>
            ) : null}
            {selected && showPhoneCode ? (
              <span className="ml-auto text-sm text-muted-foreground">
                {selected.phoneCode}
              </span>
            ) : null}
          </span>
          <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
        </PopoverTrigger>

        <PopoverContent 
          className="w-[var(--radix-popover-trigger-width)] min-w-70 p-0 shadow-md"
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
              placeholder="Tìm quốc gia, mã hoặc tên..."
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="max-h-72 overflow-y-auto p-1" role="listbox">
            {isLoading ? (
              <div className="px-3 py-6 text-center text-sm text-muted-foreground">
                Đang tải danh sách quốc gia...
              </div>
            ) : isError ? (
              <div className="px-3 py-6 text-center text-sm text-destructive">
                Không thể tải danh sách quốc gia.
              </div>
            ) : filteredCountries.length === 0 ? (
              <div className="px-3 py-6 text-center text-sm text-muted-foreground">
                Không tìm thấy quốc gia.
              </div>
            ) : (
              filteredCountries.map((country, index) => {
                const primaryName =
                  locale === "en" ? country.nameEn : country.nameVi;
                const isSelected = country.code === value;
                const isHighlighted = index === highlightedIndex;

                return (
                  <button
                    key={country.code}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-sm px-3 py-2 text-left text-sm outline-none",
                      isHighlighted && "bg-accent text-accent-foreground",
                      !isHighlighted && "hover:bg-accent/60",
                    )}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => selectCountry(country)}
                  >
                    <CountryFlag country={country} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">
                        {primaryName}
                      </span>
                      {showNativeName && country.nativeName !== primaryName ? (
                        <span className="block truncate text-xs text-muted-foreground">
                          {country.nativeName}
                        </span>
                      ) : null}
                    </span>
                    {showPhoneCode ? (
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {country.phoneCode}
                      </span>
                    ) : null}
                    {isSelected ? <Check className="size-4 shrink-0" /> : null}
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