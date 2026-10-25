"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useCountries } from "@/components/hooks/use-countries";
import type {Country} from "@/db/schema";

export type CountryPhoneInputProps = {
  /**
   * Full phone number in international format.
   *
   * Example:
   * +84982699499
   */
  value?: string;

  /**
   * Called whenever country or phone number changes.
   *
   * Example:
   * +84982699499
   */
  onValueChange?: (value: string) => void;

  /**
   * Initial country when value is empty.
   *
   * Example:
   * VN
   */
  defaultCountryCode?: string;

  disabled?: boolean;

  placeholder?: string;

  className?: string;

  /**
   * Input name for React Hook Form / native form.
   */
  name?: string;

  /**
   * Invalid state.
   */
  "aria-invalid"?: boolean;
};

function normalizeDigits(value: string) {
  return value.replace(/\D/g, "");
}

function getPhoneCodeDigits(phoneCode: string) {
  return normalizeDigits(phoneCode);
}

/**
 * Remove the national trunk prefix.
 *
 * Example:
 * 0982699499 -> 982699499
 * 912345678  -> 912345678
 */
function normalizeLocalPhone(value: string) {
  const digits = normalizeDigits(value);

  if (!digits) {
    return "";
  }

  return digits.replace(/^0+/, "");
}

/**
 * Convert:
 *
 * countryCode = VN
 * phone       = 0982699499
 *
 * into:
 *
 * +84982699499
 */
function buildInternationalPhone(
  country: Country | undefined,
  localPhone: string,
) {
  if (!country) {
    return "";
  }

  const phoneCode = getPhoneCodeDigits(country.phoneCode);
  const local = normalizeLocalPhone(localPhone);

  if (!phoneCode || !local) {
    return local ? `+${phoneCode}${local}` : "";
  }

  return `+${phoneCode}${local}`;
}

/**
 * Find country from an international phone number.
 *
 * We sort by phone-code length so that, when phone codes overlap,
 * the longest matching code wins.
 *
 * Example:
 * +84982699499
 * -> VN (+84)
 */
function findCountryByPhone(
  countries: Country[],
  value: string,
) {
  const digits = normalizeDigits(value);

  if (!digits) {
    return undefined;
  }

  return [...countries]
    .sort(
      (a, b) =>
        getPhoneCodeDigits(b.phoneCode).length -
        getPhoneCodeDigits(a.phoneCode).length,
    )
    .find((country) =>
      digits.startsWith(getPhoneCodeDigits(country.phoneCode)),
    );
}

/**
 * Remove the country phone code from an international number.
 *
 * Example:
 * +84982699499 + VN
 *
 * -> 982699499
 */
function getLocalPhoneFromValue(
  country: Country | undefined,
  value: string,
) {
  if (!country || !value) {
    return "";
  }

  const digits = normalizeDigits(value);
  const phoneCode = getPhoneCodeDigits(country.phoneCode);

  if (!phoneCode) {
    return digits;
  }

  if (digits.startsWith(phoneCode)) {
    return digits.slice(phoneCode.length);
  }

  return digits;
}

function CountryOption({
  country,
}: {
  country: Country;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2">
      {country.flagUrl ? (
        <img
          src={country.flagUrl}
          alt=""
          className="h-4 w-6 shrink-0 rounded-sm object-cover"
        />
      ) : (
        <span className="h-4 w-6 shrink-0 rounded-sm bg-muted" />
      )}

      <span className="truncate">
        {country.nativeName}
      </span>

      <span className="ml-auto shrink-0 text-muted-foreground">
        +{getPhoneCodeDigits(country.phoneCode)}
      </span>
    </div>
  );
}

export function CountryPhoneSelect({
  value = "",
  onValueChange,
  defaultCountryCode = "VN",
  disabled = false,
  placeholder = "Số điện thoại",
  className,
  name,
  "aria-invalid": ariaInvalid,
}: CountryPhoneInputProps) {
  const { data: countries = [], isLoading } = useCountries();

  const [countryCode, setCountryCode] =
    React.useState(defaultCountryCode.toUpperCase());

  const [localPhone, setLocalPhone] = React.useState("");

  const initializedRef = React.useRef(false);

  /**
   * Initialize / synchronize internal state from the external value.
   */
  React.useEffect(() => {
    if (!countries.length) {
      return;
    }

    /**
     * Empty value:
     * use default country.
     */
    if (!value) {
      if (!initializedRef.current) {
        setCountryCode(defaultCountryCode.toUpperCase());
        setLocalPhone("");
        initializedRef.current = true;
      }

      return;
    }

    /**
     * Existing international value:
     * infer country from phone prefix.
     */
    const detectedCountry = findCountryByPhone(countries, value);

    if (detectedCountry) {
      setCountryCode(detectedCountry.code);
      setLocalPhone(
        getLocalPhoneFromValue(detectedCountry, value),
      );
    }
  }, [countries, value, defaultCountryCode]);

  const selectedCountry = React.useMemo(
    () =>
      countries.find(
        (country) =>
          country.code.toUpperCase() === countryCode.toUpperCase(),
      ),
    [countries, countryCode],
  );

  function emitValue(
    country: Country | undefined,
    phone: string,
  ) {
    const internationalPhone = buildInternationalPhone(
      country,
      phone,
    );

    onValueChange?.(internationalPhone);
  }

  function handleCountryChange(nextCountryCode: string | null) {
    if (!nextCountryCode) {
        return;
    }
    const nextCountry = countries.find(
      (country) =>
        country.code.toUpperCase() ===
        nextCountryCode.toUpperCase(),
    );

    if (!nextCountry) {
      return;
    }

    setCountryCode(nextCountry.code);

    /**
     * Keep the user's local phone number unchanged.
     *
     * Example:
     *
     * VN + 0982699499
     * -> US + 0982699499
     *
     * becomes:
     *
     * +10982699499
     */
    emitValue(nextCountry, localPhone);
  }

  function handlePhoneChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    /**
     * Only keep digits.
     */
    const nextPhone = normalizeDigits(event.target.value);

    setLocalPhone(nextPhone);

    emitValue(selectedCountry, nextPhone);
  }

  return (
    <div
      className={cn(
        "flex w-full overflow-hidden rounded-md border border-input bg-background",
        "focus-within:ring-2 focus-within:ring-ring/50",
        ariaInvalid &&
          "border-destructive focus-within:ring-destructive/20",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <Select
        value={selectedCountry?.code ?? ""}
        onValueChange={handleCountryChange}
        disabled={disabled || isLoading}
      >
        <SelectTrigger
          className={cn(
            "h-10 w-28.75 shrink-0 rounded-none border-0",
            "border-r border-input shadow-none",
            "focus:ring-0 focus:ring-offset-0",
          )}
          aria-label="Quốc gia"
        >
          <SelectValue placeholder="Quốc gia">
            {selectedCountry && (
              <div className="flex items-center gap-2">
                {selectedCountry.flagUrl ? (
                  <img
                    src={selectedCountry.flagUrl}
                    alt=""
                    className="h-4 w-6 shrink-0 rounded-sm object-cover"
                  />
                ) : (
                  <span className="h-4 w-6 shrink-0 rounded-sm bg-muted" />
                )}

                <span className="font-medium">
                  +{getPhoneCodeDigits(selectedCountry.phoneCode)}
                </span>
              </div>
            )}
          </SelectValue>
        </SelectTrigger>

        <SelectContent className="max-h-80 min-w-80">
          {countries.map((country) => (
            <SelectItem
              key={country.code}
              value={country.code}
            >
              <CountryOption country={country} />
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

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
          "focus-visible:ring-0 focus-visible:ring-offset-0",
        )}
      />
    </div>
  );
}

////usage
// const [phone, setPhone] = React.useState("");

// <CountryPhoneInput
//   value={phone}
//   onValueChange={setPhone}
// />;

///// React Hook Form
/* <Controller
  name="phone"
  control={form.control}
  render={({ field, fieldState }) => (
    <CountryPhoneInput
      value={field.value}
      onValueChange={field.onChange}
      defaultCountryCode="VN"
      aria-invalid={fieldState.invalid}
    />
  )}
/> */