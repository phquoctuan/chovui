"use client";

import React from "react";
import type { SellerAddress } from "@/db/schema";
import { formatFullAddress } from "@/lib/helpers/addressHelpers";
import { useRegionNameById } from "@/components/hooks/use-regions";
import { useCountyNameById } from "@/components/hooks/use-counties";
import { useWardNameById } from "@/components/hooks/use-wards";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddressItemProps {
  address: SellerAddress;
  onSelect: (address: SellerAddress) => void;
  isSelected?: boolean;
}

export function AddressItem({ address, onSelect, isSelected }: AddressItemProps) {
  const regionName = useRegionNameById(address.countryCode ?? "", address.regionId ?? null);
  const countyName = useCountyNameById(address.regionId ?? null, address.countyId ?? null);
  const wardName = useWardNameById(address.countyId ?? null, address.wardId ?? null);

  const fullAddressText = formatFullAddress({
    location: address.location?? undefined,
    wardName,
    countyName,
    regionName,
  });

  return (
    <div
      onClick={() => onSelect(address)}
      className={cn(
        "flex items-center justify-between px-3 py-1.5 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 border border-transparent",
        isSelected && "bg-gray-50/50 border-blue-150"
      )}
    >
      <div className="flex flex-col gap-0.5 text-left pr-2 w-full truncate">
        {/* Dòng 1: Label (ví dụ: Nhà riêng / Văn phòng) và Badge Mặc định nằm cùng dòng */}
        <div className="flex items-center gap-2">
          {address.label && (
            <span className="text-xs font-semibold text-gray-900 truncate">
              {address.label}
            </span>
          )}
          {address.primary && (
            <span className="text-[10px] bg-blue-100 text-accent-foreground font-medium px-1.5 py-0.2 rounded shrink-0">
              Mặc định
            </span>
          )}
        </div>

        {/* Dòng 2: Địa chỉ chi tiết */}
        <span className="text-xs text-gray-800 truncate leading-relaxed">
          {fullAddressText || "Chưa có thông tin địa chỉ chi tiết"}
        </span>
      </div>

      {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0 ml-2" />}
    </div>
  );
}