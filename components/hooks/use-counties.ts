"use client";

import { useQuery } from "@tanstack/react-query";
import type { County } from "@/db/schema";
import { getCountiesByRegionId } from "@/lib/api/counties";

export const countiesQueryKey = (regionId: number) => ["counties", regionId] as const;

export function useCounties(regionId: number | null) {
  return useQuery<County[]>({
    queryKey: countiesQueryKey(regionId!),
    queryFn: () => getCountiesByRegionId(regionId!),
    enabled: regionId !== null && regionId !== undefined && regionId > 0, // Chỉ fetch khi regionId có giá trị hợp lệ
    // Tránh cache vĩnh viễn mảng rỗng nếu lỗi mạng/server
    staleTime: 1000 * 60 * 5, // 5 phút thay vì 24 tiếng cho danh mục động
    gcTime: 1000 * 60 * 30,
  });
}

export function useCountyNameById(regionId: number | null, id: number | null): string {
  const { data: counties, isLoading } = useCounties(regionId);

  if (regionId === null || id === null) return "";

  if (isLoading) return "";

  // Tìm county theo id từ danh sách đã cache
  const county = counties?.find((c) => c.id === id);

  return county ? county.name : "";
}
