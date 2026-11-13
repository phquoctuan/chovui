"use client";

import { useQuery } from "@tanstack/react-query";
import type {Currency} from "@/db/schema";
// import { getCountries} from "@/lib/api/countries";
import { getCurrencies} from "@/lib/api/currencies";

export const currenciesQueryKey = ["currencies"] as const;

export function useCurrencies() {
  return useQuery<Currency[]>({
    queryKey: currenciesQueryKey,
    queryFn: getCurrencies,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24 * 7,
  });
}

export function useCurrencyNameByCode(code: string | null): string {
  const { data: currencies, isLoading } = useCurrencies();

  if (!code) return "Chưa cập nhật";

  if (isLoading) return "Đang tải...";

  const currency = currencies?.find((c) => c.code === code);

  return currency
    ? `${currency.name} (${currency.symbol})`
    : "Chưa cập nhật";
}

export function useCurrencyByCode(code: string | null): {name: string, iconUrl: string|null} {
  const { data: currencies, isLoading } = useCurrencies();

  if (!code) return {name: "",iconUrl: null};

  if (isLoading) return {name: "",iconUrl: null};

  const currency = currencies?.find((c) => c.code === code);

  return currency
    ? {name: currency.name, iconUrl: currency.iconUrl}
    : {name: "",iconUrl: null};
}