"use client";

import * as React from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { UseFormRegisterReturn, FieldError as RHFFieldError } from "react-hook-form";

import { cn } from "@/lib/utils";
import { useCountries } from "@/components/hooks/use-countries";
import type { Country } from "@/db/schema";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase();
}

export interface XCountrySelectProps {
  id: string;
  label: string;
  floatingLabel?: string;
  required?: boolean;
  error?: RHFFieldError;
  registration?: UseFormRegisterReturn;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  locale?: "vi" | "en";
  showPhoneCode?: boolean;
  showNativeName?: boolean;
  name?: string;
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string) => void;
  onClear?: () => void;
  hideClearButton?: boolean;
  note?: string | null;
}

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

export const XCountrySelect: React.FC<XCountrySelectProps> = ({
  id,
  label,
  floatingLabel,
  required = false,
  error,
  registration,
  disabled = false,
  placeholder = "Chọn quốc gia",
  className = "",
  locale = "vi",
  showPhoneCode = false,
  showNativeName = true,
  name,
  value,
  defaultValue,
  onValueChange,
  onClear,
  hideClearButton = false,
  note = null,
}) => {
  const { data: countries = [], isLoading, isError } = useCountries();
  
  // Lấy giá trị trực tiếp từ props hoặc từ registration của react-hook-form
  // const currentValue = value !== undefined ? value : (registration?.value ?? defaultValue ?? null);
  const currentValue = value !== undefined ? value : (defaultValue ?? null);

  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const searchRef = React.useRef<HTMLInputElement>(null);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);

  const selected = React.useMemo(
    () => countries.find((country) => country.code === currentValue) ?? null,
    [countries, currentValue],
  );

  const hasValue = Boolean(currentValue);

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
      ]
        .map(normalizeSearch)
        .join(" ");

      return haystack.includes(q);
    });
  }, [countries, search]);

  React.useEffect(() => {
    if (!open) return;
    setHighlightedIndex(0);
    requestAnimationFrame(() => searchRef.current?.focus());
  }, [open]);

  const handleSelectCountry = (country: Country) => {
    const code = country.code;

    // Ưu tiên gọi callback onValueChange nếu có (dành cho kiểu form.setValue)
    if (onValueChange) {
      onValueChange(code);
    }

    // Đồng thời gọi registration.onChange nếu dùng register truyền thống
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
      if (country) handleSelectCountry(country);
    }
  }

  const currentFloatingLabel = floatingLabel || label;
  const displayName = selected
    ? locale === "en"
      ? selected.nameEn
      : locale === "vi"
      ? selected.nameVi
      : selected.nativeName
    : null;

  const isFloating = open || hasValue;

  return (
    <div className="w-full flex flex-col gap-1">
      <input
        type="hidden"
        {...registration}
        value={currentValue ?? ""}
        name={name || registration?.name}
      />

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
            className
          )}
          data-invalid={!!error}
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
            {selected ? <CountryFlag country={selected} /> : null}
            <span className="truncate">{displayName ?? ""}</span>
            {selected && showNativeName && selected.nativeName !== displayName ? (
              <span className="truncate text-xs text-gray-400">
                {selected.nativeName}
              </span>
            ) : null}
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
        {note &&
          <div className="text-left text-sm leading-normal font-normal text-muted-foreground ">{note}</div>
        }
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
              placeholder="Tìm quốc gia, mã hoặc tên..."
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="max-h-72 overflow-y-auto p-1" role="listbox">
            {isLoading ? (
              <div className="px-3 py-6 text-center text-sm text-gray-500">
                Đang tải danh sách quốc gia...
              </div>
            ) : isError ? (
              <div className="px-3 py-6 text-center text-sm text-red-500">
                Không thể tải danh sách quốc gia.
              </div>
            ) : filteredCountries.length === 0 ? (
              <div className="px-3 py-6 text-center text-sm text-gray-500">
                Không tìm thấy quốc gia.
              </div>
            ) : (
              filteredCountries.map((country, index) => {
                const primaryName =
                  locale === "en" ? country.nameEn : country.nameVi;
                const isSelected = country.code === currentValue;
                const isHighlighted = index === highlightedIndex;

                return (
                  <button
                    key={country.code}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm outline-none transition-colors",
                      isHighlighted && "bg-gray-100 text-gray-900",
                      !isHighlighted && "hover:bg-gray-50"
                    )}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => handleSelectCountry(country)}
                  >
                    <CountryFlag country={country} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium text-gray-900">
                        {primaryName}
                      </span>
                      {showNativeName && country.nativeName !== primaryName ? (
                        <span className="block truncate text-xs text-gray-500">
                          {country.nativeName}
                        </span>
                      ) : null}
                    </span>
                    {showPhoneCode ? (
                      <span className="shrink-0 text-xs text-gray-400">
                        {country.phoneCode}
                      </span>
                    ) : null}
                    {isSelected ? <Check className="size-4 shrink-0 text-black" /> : null}
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