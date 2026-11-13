"use client";

import { MapPin, Pencil, Plus, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { AddressItem } from "./address_item";
import type { SellerAddress } from "@/db/schema";
// import {useCountryNameByCode} from "@/components/hooks/use-countries";
// import {useRegionNameById} from "@/components/hooks/use-regions";
// import {useCountyNameById} from "@/components/hooks/use-counties";
// import {useWardNameById} from "@/components/hooks/use-wards";

import { useCountries } from "@/components/hooks/use-countries.js";

export function AddressesCard({
  addresses,
  onAdd,
  onEdit,
  onDelete,
  onSetDefault,
}: {
  addresses: SellerAddress[];
  onAdd: () => void;
  onEdit: (address: SellerAddress) => void;
  onDelete: (address: SellerAddress) => void;
  onSetDefault: (address: SellerAddress) => void;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        {/* Phần Header giữ nguyên */}
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-muted p-2">
            <MapPin className="size-5" />
          </div>
          <div>
            <CardTitle>Địa chỉ</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Hãy chọn quốc gia mặc định trước khi tạo địa chỉ.
            </p>
          </div>
        </div>

        <Button size="sm" variant="outline" onClick={onAdd}>
          <Plus className="size-4" />
          Thêm
        </Button>
      </CardHeader>

      <CardContent className="space-y-3">
        {addresses.length === 0 && (
          <p className="text-sm text-muted-foreground">Bạn chưa lưu địa chỉ.</p>
        )}

        {/* Gọi component con, loại bỏ hoàn toàn hook ra khỏi vòng lặp map */}
        {addresses.map((address) => (
          <AddressItem
            key={address.id}
            address={address}
            onEdit={onEdit}
            onDelete={onDelete}
            onSetDefault={onSetDefault}
          />
        ))}
      </CardContent>
    </Card>
  );
}
