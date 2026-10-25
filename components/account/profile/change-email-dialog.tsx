"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const schema = z.object({
  newEmail: z.email("Email không hợp lệ.").trim(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentEmail: string;
};

export function ChangeEmailDialog({ open, onOpenChange, currentEmail }: Props) {
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { newEmail: "" },
  });

  async function onSubmit(values: FormValues) {
    if (values.newEmail.toLowerCase() === currentEmail.toLowerCase()) {
      form.setError("newEmail", {
        message: "Email mới phải khác email hiện tại.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await authClient.changeEmail({
        newEmail: values.newEmail,
        callbackURL: `/${locale}/profile`,
      });

      if (error) {
        toast.error(error.message || "Không thể yêu cầu thay đổi email.");
        return;
      }

      toast.success(
        "Đã gửi yêu cầu thay đổi email. Vui lòng kiểm tra hộp thư theo hướng dẫn xác minh.",
      );

      form.reset();
      onOpenChange(false);
    } catch {
      toast.error("Đã xảy ra lỗi khi thay đổi email.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thay đổi email</DialogTitle>
          <DialogDescription>
            Email hiện tại: {currentEmail}. Bạn cần xác minh địa chỉ email mới
            theo hướng dẫn được gửi qua email.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="newEmail">Email mới</FieldLabel>
              <Input
                id="newEmail"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                {...form.register("newEmail")}
                aria-invalid={!!form.formState.errors.newEmail}
              />
              {form.formState.errors.newEmail && (
                <FieldError>
                  {form.formState.errors.newEmail.message}
                </FieldError>
              )}
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Hủy
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
