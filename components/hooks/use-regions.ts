"use client";

import { useQuery } from "@tanstack/react-query";
import type { Region } from "@/db/schema";
import { getRegionsByCountryCode } from "@/lib/api/regions";

export const regionsQueryKey = (countryCode: string) => ["regions", countryCode] as const;

export function useRegions(countryCode: string) {
  return useQuery<Region[]>({
    queryKey: regionsQueryKey(countryCode),
    queryFn: () => getRegionsByCountryCode(countryCode),
    enabled: !!countryCode && countryCode.length > 0,
    staleTime: 1000 * 60 * 5, // 5 phút thay vì 24 tiếng cho danh mục động
    gcTime: 1000 * 60 * 30,
  });
}

export function useRegionNameById(countryCode: string, id: number | null): string {
  const { data: regions, isLoading } = useRegions(countryCode);

  if (id === null) return "";

  if (isLoading) return "";

  // Tìm region theo id từ danh sách đã cache
  const region = regions?.find((r) => r.id === id);

  return region?.name ?? "";
}
