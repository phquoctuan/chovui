"use client";

import { Pencil, Phone, Plus, ShieldCheck, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { DemoPhone } from "./profile-types";

export function PhonesCard({
  phones,
  onAdd,
  onEdit,
  onDelete,
  onVerify,
}: {
  phones: DemoPhone[];
  onAdd: () => void;
  onEdit: (phone: DemoPhone) => void;
  onDelete: (phone: DemoPhone) => void;
  onVerify: (phone: DemoPhone) => void;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-muted p-2">
            <Phone className="size-5" />
          </div>
          <div>
            <CardTitle>Số điện thoại</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Tối đa 2 số điện thoại.
            </p>
          </div>
        </div>

        <Button
          size="sm"
          variant="outline"
          disabled={phones.length >= 2}
          onClick={onAdd}
        >
          <Plus className="size-4" />
          Thêm
        </Button>
      </CardHeader>

      <CardContent className="space-y-3">
        {phones.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Bạn chưa thêm số điện thoại.
          </p>
        )}

        {phones.map((phone) => (
          <div
            key={phone.id}
            className="flex flex-col gap-3 rounded-xl border p-3 sm:flex-row sm:items-center"
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="break-all text-sm font-medium">
                  {phone.phone}
                </span>
                {phone.primary && <Badge variant="secondary">Số chính</Badge>}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {phone.label}
              </p>
            </div>

            {phone.verified ? (
              <Badge>Đã xác thực</Badge>
            ) : (
              <Button
                size="sm"
                variant="outline"
                onClick={() => onVerify(phone)}
              >
                <ShieldCheck className="size-4" />
                Xác thực
              </Button>
            )}

            <div className="flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                aria-label="Sửa số điện thoại"
                onClick={() => onEdit(phone)}
              >
                <Pencil className="size-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                aria-label="Xóa số điện thoại"
                onClick={() => onDelete(phone)}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
          </div>
        ))}

        <p className="text-xs text-muted-foreground">
          Số điện thoại được lưu trong cơ sở dữ liệu. Xác thực sẽ yêu cầu OTP.
        </p>
      </CardContent>
    </Card>
  );
}
