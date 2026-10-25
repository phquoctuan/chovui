"use client";

import * as React from "react";
import { CheckIcon, ChevronDownIcon, Search } from "lucide-react";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { useCountries } from "@/components/hooks/use-countries";
import type {Country} from "@/db/schema";

export type CountryPhoneInputProps = {
  value?: string;
  onValueChange?: (value: string) => void;
  defaultCountryCode?: string;
  disabled?: boolean;
  placeholder?: string;
  countrySearchPlaceholder?: string;
  name?: string;
  className?: string;
  "aria-invalid"?: boolean;
  locale?: "vi" | "en";
};

function normalizeDigits(value: string): string {
  return value.replace(/\D/g, "");
}

function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase()
    .trim();
}

function getPhoneCodeDigits(phoneCode: string): string {
  return normalizeDigits(phoneCode);
}

function buildInternationalPhone(
  country: Country | undefined,
  phone: string,
): string {
  if (!country) return "";
  const phoneCode = getPhoneCodeDigits(country.phoneCode);
  if (!phoneCode) return "";
  const localPhone = normalizeDigits(phone);
  if (!localPhone) return "";

  const normalizedLocalPhone =
    localPhone.length > 1 ? localPhone.replace(/^0+/, "") : localPhone;

  if (!normalizedLocalPhone) return "";
  return `+${phoneCode}${normalizedLocalPhone}`;
}

function findCountryByPhone(
  countries: Country[],
  value: string,
): Country | undefined {
  const digits = normalizeDigits(value);
  if (!digits) return undefined;

  return [...countries]
    .sort(
      (a, b) =>
        getPhoneCodeDigits(b.phoneCode).length -
        getPhoneCodeDigits(a.phoneCode).length,
    )
    .find((country) => {
      const phoneCode = getPhoneCodeDigits(country.phoneCode);
      return phoneCode.length > 0 && digits.startsWith(phoneCode);
    });
}

function getLocalPhoneFromValue(
  country: Country | undefined,
  value: string,
): string {
  if (!country || !value) return "";
  const digits = normalizeDigits(value);
  const phoneCode = getPhoneCodeDigits(country.phoneCode);

  if (!phoneCode) return digits;
  if (digits.startsWith(phoneCode)) {
    return digits.slice(phoneCode.length);
  }
  return digits;
}

function CountryFlag({ country }: { country: Country }) {
  if (!country.flagUrl) {
    return (
      <span className="inline-block h-4 w-6 shrink-0 rounded-sm bg-muted" />
    );
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

function CountryItemContent({
  country,
  locale = "vi",
}: {
  country: Country;
  locale?: "vi" | "en";
}) {
  const primaryName = locale === "en" ? country.nameEn : country.nameVi;

  return (
    <div className="flex min-w-0 w-full items-center gap-2">
      <CountryFlag country={country} />
      <div className="min-w-0 flex-1">
        <div className="truncate font-medium">{primaryName}</div>
        {country.nativeName !== primaryName ? (
          <div className="truncate text-xs text-muted-foreground">
            {country.nativeName}
          </div>
        ) : null}
      </div>
      <span className="shrink-0 text-sm text-muted-foreground">
        +{getPhoneCodeDigits(country.phoneCode)}
      </span>
    </div>
  );
}

export function CountryPhoneInput({
  value = "",
  onValueChange,
  defaultCountryCode = "VN",
  disabled = false,
  placeholder = "Số điện thoại",
  countrySearchPlaceholder = "Tìm quốc gia, mã hoặc tên...",
  name,
  className,
  "aria-invalid": ariaInvalid,
  locale = "vi",
}: CountryPhoneInputProps) {
  const { data: countries = [], isLoading, isError } = useCountries();

  const [countryCode, setCountryCode] = React.useState(
    defaultCountryCode.toUpperCase(),
  );
  const [localPhone, setLocalPhone] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const initializedRef = React.useRef(false);

  // Đồng bộ giá trị từ bên ngoài (như form.reset)
  React.useEffect(() => {
    if (!countries.length) return;

    if (!value) {
      if (!initializedRef.current) {
        const defaultCountry =
          countries.find(
            (c) => c.code.toUpperCase() === defaultCountryCode.toUpperCase(),
          ) ?? countries[0];

        if (defaultCountry) {
          setCountryCode(defaultCountry.code);
        }
        setLocalPhone("");
        initializedRef.current = true;
      }
      return;
    }

    const detectedCountry = findCountryByPhone(countries, value);
    if (detectedCountry) {
      setCountryCode(detectedCountry.code);
      setLocalPhone(getLocalPhoneFromValue(detectedCountry, value));
    }
  }, [countries, value, defaultCountryCode]);

  const selectedCountry = React.useMemo(
    () =>
      countries.find(
        (country) => country.code.toUpperCase() === countryCode.toUpperCase(),
      ),
    [countries, countryCode],
  );

  // Áp dụng cơ chế lọc mảng thông minh tương tự CountrySelect
  const filteredCountries = React.useMemo(() => {
    const q = normalizeSearch(searchQuery.trim());
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
  }, [countries, searchQuery]);

  const countryCodes = React.useMemo(
    () => filteredCountries.map((country) => country.code),
    [filteredCountries],
  );

  const getCountryByCode = React.useCallback(
    (code: string) =>
      countries.find(
        (country) => country.code.toUpperCase() === code.toUpperCase(),
      ),
    [countries],
  );

  const emitPhoneValue = React.useCallback(
    (country: Country | undefined, phone: string) => {
      const result = buildInternationalPhone(country, phone);
      onValueChange?.(result);
    },
    [onValueChange],
  );

  function handleCountryChange(nextCountryCode: string) {
    const nextCountry = getCountryByCode(nextCountryCode);
    if (!nextCountry) return;

    setCountryCode(nextCountry.code);
    emitPhoneValue(nextCountry, localPhone);
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const nextPhone = normalizeDigits(event.target.value);
    setLocalPhone(nextPhone);
    emitPhoneValue(selectedCountry, nextPhone);
  }

  return (
    <div
      className={cn(
        "flex w-full overflow-hidden rounded-md border border-input bg-background",
        "focus-within:ring-2 focus-within:ring-ring/50",
        ariaInvalid && "border-destructive focus-within:ring-destructive/20",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      {/* =========================================
          COUNTRY COMBOBOX
          ========================================= */}
      <Combobox
        value={selectedCountry?.code ?? ""}
        onValueChange={(nextValue) => {
          if (nextValue) {
            handleCountryChange(nextValue);
          }
        }}
        items={countryCodes}
        disabled={disabled || isLoading || isError || countries.length === 0}
      >
        <ComboboxTrigger
          className={cn(
            "flex items-center justify-between",
            "h-10 w-[130px] shrink-0 rounded-none border-0",
            "border-r border-input shadow-none px-2.5",
            "focus-visible:ring-0",
            "focus-visible:ring-offset-0",
          )}
          aria-label="Chọn quốc gia"
        >
          <ComboboxValue>
            {selectedCountry ? (
              <div className="flex items-center gap-1.5 overflow-hidden">
                <CountryFlag country={selectedCountry} />
                <span className="font-medium text-sm">
                  +{getPhoneCodeDigits(selectedCountry.phoneCode)}
                </span>
              </div>
            ) : (
              <span className="text-muted-foreground truncate text-sm">
                {isLoading ? "Đang tải..." : "Quốc gia"}
              </span>
            )}
          </ComboboxValue>
          {/* <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground opacity-50" /> */}
        </ComboboxTrigger>

        <ComboboxContent className="w-[320px]">
          {/* Search Input tự custom state search riêng */}
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 size-4 shrink-0 opacity-50" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={countrySearchPlaceholder}
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          {/* Results */}
          <ComboboxList className="max-h-[300px]">
   
            {
              countryCodes.length === 0 ?  (<ComboboxEmpty>Không tìm thấy quốc gia.</ComboboxEmpty>) : null
            }

            {countryCodes.map((code) => {
              const country = getCountryByCode(code);
              if (!country) return null;

              return (
                <ComboboxItem key={country.code} value={country.code}>
                  <CountryItemContent country={country} locale={locale} />
                  {/* {country.code === selectedCountry?.code && (
                    <CheckIcon className="ml-2 size-4 shrink-0" />
                  )} */}
                </ComboboxItem>
              );
            })}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>

      {/* =========================================
          PHONE INPUT
          ========================================= */}
      <Input
        name={name}
        value={localPhone}
        onChange={handlePhoneChange}
        disabled={disabled}
        placeholder={placeholder}
        inputMode="tel"
        autoComplete="tel-national"
        aria-invalid={ariaInvalid}
        className={cn(
          "h-10 flex-1 rounded-none border-0 shadow-none",
          "focus-visible:ring-0",
          "focus-visible:ring-offset-0",
        )}
      />
    </div>
  );
}
