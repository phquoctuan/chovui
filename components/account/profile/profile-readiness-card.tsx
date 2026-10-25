"use client";

import { CheckCircle2, Circle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ReadinessItem = {
  label: string;
  done: boolean;
};

export function ProfileReadinessCard({ items }: { items: ReadinessItem[] }) {
  const completed = items.filter((item) => item.done).length;
  const percent = Math.round((completed / items.length) * 100);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Điều kiện đăng tin</CardTitle>
          <span className="text-sm text-muted-foreground">
            {completed}/{items.length}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          Hoàn thành các thông tin bắt buộc để chuẩn bị đăng tin rao vặt.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:gap-x-20">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm">
              {item.done ? (
                <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
              ) : (
                <Circle className="size-4 shrink-0 text-muted-foreground" />
              )}
              <span>{item.label}</span>
              <span className="ml-auto text-xs text-muted-foreground">
                {item.done ? "Hoàn thành" : "Cần bổ sung"}
              </span>
            </div>
          ))}
        </div>

        {/* <p className="text-xs text-muted-foreground">
          Tiến độ hiện tại được tính từ dữ liệu giao diện. Quyền đăng tin thực
          tế phải được xác minh tại server.
        </p> */}
      </CardContent>
    </Card>
  );
}
