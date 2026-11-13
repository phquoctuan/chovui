"use client";

import { useQuery } from "@tanstack/react-query";
import type {Country} from "@/db/schema";
import { getCountries} from "@/lib/api/countries";

export const countriesQueryKey = ["countries"] as const;

export function useCountries() {
  return useQuery<Country[]>({
    queryKey: countriesQueryKey,
    queryFn: getCountries,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24 * 7,
  });
}
export function useCountryNameByCode(code: string | null): string {
  const { data: countries, isLoading } = useCountries();

  if (!code) return "";

  if (isLoading) return "";

  // Tìm quốc gia theo mã code từ danh sách đã cache
  const country = countries?.find((c) => c.code === code);

  return country
    ? country.nativeName== country.nameEn ? `${country.nativeName}` : `${country.nativeName} (${country.nameEn})`
    : "";
}

export function useCountryByCode(code: string | null): {name: string, flagUrl?: string|null} {
  const { data: countries, isLoading } = useCountries();

  if (!code) return {name: "", flagUrl: null};

  if (isLoading) return {name: "", flagUrl: null};

  // Tìm quốc gia theo mã code từ danh sách đã cache
  const country = countries?.find((c) => c.code === code);

  return country? 
  (country.nativeName== country.nameEn) ? {name: country.nativeName, flagUrl: country.flagUrl} : {name: `${country.nativeName} (${country.nameEn})`, flagUrl: country.flagUrl} 
  : {name: "", flagUrl: null};
}