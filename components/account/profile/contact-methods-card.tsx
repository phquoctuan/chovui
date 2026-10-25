"use client";

import { MessageCircle, MessagesSquare, Pencil, Plus, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { DemoContactMethod } from "./profile-types";

export function ContactMethodsCard({
  contacts,
  onAdd,
  onEdit,
  onDelete,
}: {
  contacts: DemoContactMethod[];
  onAdd: () => void;
  onEdit: (contact: DemoContactMethod) => void;
  onDelete: (contact: DemoContactMethod) => void;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-muted p-2">
            <MessageCircle className="size-5" />
          </div>
          <div>
            <CardTitle>Kênh liên hệ</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Zalo, Messenger và các kênh khác.
            </p>
          </div>
        </div>

        <Button size="sm" variant="outline" onClick={onAdd}>
          <Plus className="size-4" />
          Thêm
        </Button>
      </CardHeader>

      <CardContent className="space-y-3">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex flex-col gap-3 rounded-xl border p-3 sm:flex-row sm:items-center"
          >
            <div className="rounded-lg bg-muted p-2">
              {contact.type === "Messenger" ? (
                <MessagesSquare className="size-5" />
              ) : (
                <MessageCircle className="size-5" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium">{contact.type}</span>
                {contact.primary && (
                  <Badge variant="secondary">Chính</Badge>
                )}
              </div>
              <p className="mt-1 break-all text-sm text-muted-foreground">
                {contact.value || "Chưa thiết lập"}
              </p>
            </div>

            {contact.value && (
              <Badge variant={contact.isPublic ? "default" : "secondary"}>
                {contact.isPublic ? "Đang hiển thị" : "Riêng tư"}
              </Badge>
            )}

            <div className="flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                aria-label="Sửa kênh liên hệ"
                onClick={() => onEdit(contact)}
              >
                <Pencil className="size-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                aria-label="Xóa kênh liên hệ"
                onClick={() => onDelete(contact)}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
          </div>
        ))}

        <p className="text-xs text-muted-foreground">
          Kênh liên hệ được lưu trực tiếp trong cơ sở dữ liệu.
        </p>
      </CardContent>
    </Card>
  );
}