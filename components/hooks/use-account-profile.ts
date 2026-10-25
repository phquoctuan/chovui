"use client";

import { useQuery } from "@tanstack/react-query";
import { getAccountProfile } from "@/lib/api/account";

export const accountProfileQueryKey = ["account-profile"] as const;

export function useAccountProfile() {
  return useQuery({ 
    queryKey: accountProfileQueryKey, 
    queryFn: getAccountProfile 
  });
}
