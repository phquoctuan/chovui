"use client";

import { MapPin, Pencil, Plus, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getCountryName } from "./profile-demo-data";
import type { DemoAddress } from "./profile-types";

export function AddressesCard({
  addresses,
  onAdd,
  onEdit,
  onDelete,
  onSetDefault,
}: {
  addresses: DemoAddress[];
  onAdd: () => void;
  onEdit: (address: DemoAddress) => void;
  onDelete: (address: DemoAddress) => void;
  onSetDefault: (address: DemoAddress) => void;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-muted p-2">
            <MapPin className="size-5" />
          </div>
          <div>
            <CardTitle>Địa chỉ</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Hỗ trợ địa chỉ thuộc nhiều quốc gia.
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

        {addresses.map((address) => (
          <div key={address.id} className="rounded-xl border p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">{address.label}</span>
                  {address.primary && (
                    <Badge variant="secondary">Mặc định</Badge>
                  )}
                </div>
                <p className="text-sm">{address.recipientName}</p>
                <p className="text-sm text-muted-foreground">{address.phone}</p>
              </div>

              <div className="flex shrink-0 gap-1">
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Sửa địa chỉ"
                  onClick={() => onEdit(address)}
                >
                  <Pencil className="size-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Xóa địa chỉ"
                  onClick={() => onDelete(address)}
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </div>

            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
              <p>{address.addressLine1}</p>
              {address.addressLine2 && <p>{address.addressLine2}</p>}
              <p>
                {[
                  address.locality,
                  address.administrativeArea,
                  address.postalCode,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </p>
              <p>{getCountryName(address.countryCode)}</p>
            </div>

            {!address.primary && (
              <Button
                className="mt-3 px-0"
                variant="link"
                size="sm"
                onClick={() => onSetDefault(address)}
              >
                Đặt làm mặc định
              </Button>
            )}
          </div>
        ))}

        <p className="text-xs text-muted-foreground">
          Địa chỉ được lưu trực tiếp trong cơ sở dữ liệu.
        </p>
      </CardContent>
    </Card>
  );
}
