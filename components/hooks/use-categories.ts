"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/lib/api/categories";
import {CategoryTree} from "@/lib/repositories/category-repository";

export const categoriesQueryKey = (local: string) =>
  ["categories", local] as const;

export function useCategories(local: string) {
  return useQuery<CategoryTree>({
    queryKey: categoriesQueryKey(local),
    queryFn: () => getCategories(local),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24 * 7,
  });
}