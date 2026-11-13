import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import type { SellerAddress } from "@/db/schema";
import { useCountryNameByCode } from "@/components/hooks/use-countries";
import { useRegionNameById } from "@/components/hooks/use-regions";
import { useCountyNameById } from "@/components/hooks/use-counties";
import { useWardNameById } from "@/components/hooks/use-wards";

interface AddressItemProps {
  address: SellerAddress;
  onEdit: (address: SellerAddress) => void;
  onDelete: (address: SellerAddress) => void;
  onSetDefault: (address: SellerAddress) => void;
}

export function AddressItem({ address, onEdit, onDelete, onSetDefault }: AddressItemProps) {
  // Các hook được gọi ổn định bên trong một component riêng biệt cho từng item
  const wardName = useWardNameById(address.countyId ?? 0, address.wardId ?? 0);
  const countyName = useCountyNameById(address.regionId ?? 0, address.countyId ?? 0);
  const regionName = useRegionNameById(address.countryCode, address.regionId ?? 0);
  const countryName = useCountryNameByCode(address.countryCode);

  const fullAddressString = [
    address.location,
    address.wardId && address.countyId ? wardName : null,
    address.countyId && address.regionId ? countyName : null,
    address.regionId ? regionName : null,
    countryName,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="rounded-xl border p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium">{address.label || "Địa chỉ"}</span>
            {address.primary && <Badge variant="secondary">Mặc định</Badge>}
          </div>

          <div className="flex flex-wrap items-center gap-x-3 text-sm">
            <span className="font-semibold text-foreground">{address.recipientName}</span>
            {address.phone && <span className="text-muted-foreground">{address.phone}</span>}
          </div>
            {/*bỏ truncate */}
          <p className="text-sm text-muted-foreground">{fullAddressString}</p>
        </div>

        {/* Cụm nút thao tác bên phải (Sửa, Xóa và Đặt làm mặc định xếp dọc) */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          <div className="flex gap-1">
            <Button size="icon" variant="ghost" aria-label="Sửa địa chỉ" onClick={() => onEdit(address)}>
              <Pencil className="size-4" />
            </Button>
            <Button size="icon" variant="ghost" aria-label="Xóa địa chỉ" onClick={() => onDelete(address)}>
              <Trash2 className="size-4" />
            </Button>
          </div>

          {!address.primary && (
            <Button
              className=""
              variant="outline"
              size="sm"
              onClick={() => onSetDefault(address)}
            >
              Đặt làm mặc định
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
