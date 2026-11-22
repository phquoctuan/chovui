"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategoriesByGroupIds } from "@/lib/api/categories";
import { CategoryTree } from "@/lib/repositories/category-repository";

export const categoryGroupsQueryKey = (locale: string, groupIds: number[]) =>
  ["categoryGroups", locale, [...groupIds].sort((a, b) => a - b)] as const;

export function useCategoryGroups(local: string, groups: number[]) {
  return useQuery<CategoryTree>({
    queryKey: categoryGroupsQueryKey(local, groups),
    queryFn: () => getCategoriesByGroupIds(local, groups),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24 * 7,
  });
}
