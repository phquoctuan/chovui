"use client";

import { Star, TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SellerReputationCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-muted p-2">
            <Star className="size-5" />
          </div>
          <div>
            <CardTitle>Uy tín người bán</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Dữ liệu minh họa, chưa kết nối hệ thống giao dịch.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border p-4">
            <p className="text-sm text-muted-foreground">Điểm đánh giá</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-3xl font-bold">4.8</span>
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`size-4 ${
                      index < 4 ? "fill-current" : "fill-amber-500/30"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              24 lượt đánh giá
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-muted-foreground">
              Giao dịch thành công
            </p>
            <p className="mt-2 text-3xl font-bold">18</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Giao dịch
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-muted-foreground">
              Tỷ lệ thành công
            </p>
            <div className="mt-2 flex items-center gap-2">
              <TrendingUp className="size-5 text-emerald-600" />
              <span className="text-3xl font-bold">95%</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Dữ liệu mẫu
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}