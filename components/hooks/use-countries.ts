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
