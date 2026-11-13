"use client";

import { useQuery } from "@tanstack/react-query";
import { getSellerAddresses } from "@/lib/api/account";

export const sellerAddressesQueryKey = ["seller-addresses"] as const;

export function useSellerAddresses() {
  return useQuery({ 
    queryKey: sellerAddressesQueryKey, 
    queryFn: getSellerAddresses 
  });
}
