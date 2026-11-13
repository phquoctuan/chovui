"use client";

import { useQuery } from "@tanstack/react-query";
import type { Ward } from "@/db/schema";
import { getWardsByCountyId } from "@/lib/api/wards";
import { wards } from '../../db/schema/wards';

export const wardsQueryKey = (countyId: number) => ["wards", countyId] as const;

export function useWards(countyId: number | null) {
  return useQuery<Ward[]>({
    queryKey: wardsQueryKey(countyId!),
    queryFn: () => getWardsByCountyId(countyId!),
    enabled: countyId !== null && countyId !== undefined && countyId > 0, // Chỉ fetch khi countyId có giá trị
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24 * 7,
  });
}

export function useWardNameById(countyId: number | null, id: number | null): string {
  const { data: wards, isLoading } = useWards(countyId);

  if (countyId === null || id === null) return "";

  if (isLoading) return "";

  // Tìm county theo id từ danh sách đã cache
  const ward = wards?.find((c) => c.id === id);

  return ward ? ward.name : "";
}
