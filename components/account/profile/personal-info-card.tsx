"use client";

import { Pencil, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCountryByCode } from "@/components/hooks/use-countries";
import { useCurrencyByCode } from "@/components/hooks/use-currencies";
import type { PersonalInfoFormValues } from "@/lib/validations/user/seller-profile";

export function PersonalInfoCard({ values, onEdit }: { values: PersonalInfoFormValues; onEdit: () => void }) {
  // Lấy tên trực tiếp bằng hook
  // const nationalityName = useCountryNameByCode(values.nationalityCode);
  const { name: nationalityName, flagUrl: nationalityFlagUrl } = useCountryByCode(values.nationalityCode);
  // const defaultCountryName = useCountryNameByCode(values.defaultCountryCode);
  const { name: defaultCountryName, flagUrl: defaultCountryFlagUrl } = useCountryByCode(values.defaultCountryCode);
  // const defaultCurrencyName = useCurrencyNameByCode(values.defaultCurrencyCode);
  const { name: defaultCurrencyName, iconUrl: currencyIconUrl } = useCurrencyByCode(values.defaultCurrencyCode);

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-muted p-2">
            <UserRound className="size-5" />
          </div>
          <div>
            <CardTitle>Thông tin cá nhân</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">Hồ sơ và quốc gia sử dụng marketplace.</p>
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
          <span className="text-sm font-medium">{values.fullName || "Chưa cập nhật"}</span>
        </div>

        <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
          <span className="text-sm text-muted-foreground">Ảnh đại diện</span>
          <span className="text-sm font-medium">
            {values.avatarUrl ? (
              <img
                src={values.avatarUrl}
                alt=""
                aria-hidden="true"
                className="size-12 shrink-0 rounded-sm object-cover"
                loading="lazy"
              />
            ) : (
              "Chưa thiết lập"
            )}
          </span>
        </div>

        <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
          <span className="text-sm text-muted-foreground">Quốc tịch</span>
          <span className="flex items-center gap-2 not-[]:text-sm font-medium">
            {nationalityFlagUrl && (
              <img
                src={nationalityFlagUrl}
                alt=""
                aria-hidden="true"
                className="h-4 w-6 shrink-0 rounded-sm object-cover"
                loading="lazy"
              />
            )}
            {nationalityName}
          </span>
        </div>

        <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
          <span className="text-sm text-muted-foreground">Quốc gia mặc định</span>
          <span className="flex items-center gap-2 not-[]:text-sm font-medium">
            {defaultCountryFlagUrl && (
              <img
                src={defaultCountryFlagUrl}
                alt=""
                aria-hidden="true"
                className="h-4 w-6 shrink-0 rounded-sm object-cover"
                loading="lazy"
              />
            )}
            {defaultCountryName}
          </span>
        </div>
        <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
          <span className="text-sm text-muted-foreground">Tiền tệ mặc định</span>

          <span className="flex items-center gap-2 text-sm font-medium">
            {currencyIconUrl && (
              <img
                src={currencyIconUrl}
                alt=""
                aria-hidden="true"
                className="size-6 shrink-0 rounded-sm object-cover"
                loading="lazy"
              />
            )}
            {defaultCurrencyName}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
