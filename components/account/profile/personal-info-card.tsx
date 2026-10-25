"use client";

import { Pencil, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getCountryName } from "./profile-demo-data";
import type { PersonalInfoFormValues } from "./profile-schemas";

export function PersonalInfoCard({
  values,
  onEdit,
}: {
  values: PersonalInfoFormValues;
  onEdit: () => void;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-muted p-2">
            <UserRound className="size-5" />
          </div>
          <div>
            <CardTitle>Thông tin cá nhân</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Hồ sơ và quốc gia sử dụng marketplace.
            </p>
          </div>
        </div>

        <Button variant="outline" size="sm" onClick={onEdit}>
          <Pencil className="size-4" />
          Sửa
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
          <span className="text-sm text-muted-foreground">Họ và tên</span>
          <span className="text-sm font-medium">
            {values.fullName || "Chưa cập nhật"}
          </span>
        </div>

        <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
          <span className="text-sm text-muted-foreground">Ảnh đại diện</span>
          <span className="text-sm font-medium">
            {values.avatarUrl ? "Đã thiết lập" : "Chưa thiết lập"}
          </span>
        </div>

        <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
          <span className="text-sm text-muted-foreground">Quốc tịch</span>
          <span className="text-sm font-medium">
            {values.nationalityCode
              ? getCountryName(values.nationalityCode)
              : "Chưa cập nhật"}
          </span>
        </div>

        <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
          <span className="text-sm text-muted-foreground">
            Quốc gia mặc định
          </span>
          <span className="text-sm font-medium">
            {getCountryName(values.defaultCountryCode)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
