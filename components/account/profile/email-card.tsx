"use client";

import { Mail, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ChangeEmailDialog } from "./change-email-dialog";

export function EmailCard({
  email,
  verified,
  onVerify,
}: {
  email: string;
  verified: boolean;
  onVerify: () => void;
}) {
  const [changeEmailOpen, setChangeEmailOpen] = useState(false);
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-muted p-2">
            <Mail className="size-5" />
          </div>
          <div>
            <CardTitle>Email</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Email tài khoản Better Auth.
            </p>
          </div>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => setChangeEmailOpen(true)}
        >
          Thay đổi email
        </Button>
        <ChangeEmailDialog
          open={changeEmailOpen}
          onOpenChange={setChangeEmailOpen}
          currentEmail={email}
        />

      </CardHeader>

      <CardContent className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0 flex flex-1 items-center gap-3">
          <span className="break-all text-sm font-medium">{email}</span>
          <Badge variant={verified ? "default" : "secondary"}>
            {verified ? "Đã xác thực" : "Chưa xác thực"}
          </Badge>
        </div>

        {!verified && (
          <Button variant="outline" size="sm" onClick={onVerify}>
            <ShieldCheck className="size-4" />
            Xác thực
          </Button>
        )}

        <p className="w-full text-xs text-muted-foreground">
          {verified
            ? "Trạng thái được lấy từ Better Auth."
            : "Chưa kết nối thao tác gửi email xác thực trong giao diện này."}
        </p>
      </CardContent>
    </Card>
  );
}
