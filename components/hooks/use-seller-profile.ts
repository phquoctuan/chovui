"use client";

import { useQuery } from "@tanstack/react-query";
import { getSellerProfile } from "@/lib/api/account";

export const sellerProfileQueryKey = ["seller-profile"] as const;

export function useSellerProfile() {
  return useQuery({ 
    queryKey: sellerProfileQueryKey, 
    queryFn: getSellerProfile 
  });
}
