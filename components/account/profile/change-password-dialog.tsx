"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
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

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Vui lòng nhập mật khẩu hiện tại."),

    newPassword: z.string().min(8, "Mật khẩu mới phải có ít nhất 8 ký tự."),

    confirmPassword: z.string().min(1, "Vui lòng xác nhận mật khẩu mới."),
  })
  .refine((values) => values.newPassword === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Mật khẩu xác nhận không khớp.",
  })
  .refine((values) => values.newPassword !== values.currentPassword, {
    path: ["newPassword"],
    message: "Mật khẩu mới phải khác mật khẩu hiện tại.",
  });

type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;

type ChangePasswordDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ChangePasswordDialog({
  open,
  onOpenChange,
}: ChangePasswordDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: ChangePasswordFormValues) {
    setIsSubmitting(true);

    try {
      const { error } = await authClient.changePassword({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
        revokeOtherSessions: true,
      });

      if (error) {
        toast.error(error.message || "Không thể đổi mật khẩu.");
        return;
      }

      toast.success("Đổi mật khẩu thành công.");

      form.reset();
      onOpenChange(false);
    } catch {
      toast.error("Đã xảy ra lỗi khi đổi mật khẩu.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleOpenChange(nextOpen: boolean) {
    if (isSubmitting) return;

    if (!nextOpen) {
      form.reset();
    }

    onOpenChange(nextOpen);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Đổi mật khẩu</DialogTitle>

          <DialogDescription>
            Nhập mật khẩu hiện tại và mật khẩu mới của bạn. Các phiên đăng nhập
            khác sẽ bị đăng xuất sau khi đổi mật khẩu thành công.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FieldGroup>
            {/* Mật khẩu hiện tại */}
            <Field>
              <FieldLabel htmlFor="currentPassword">
                Mật khẩu hiện tại
              </FieldLabel>

              <PasswordInput
                id="currentPassword"
                autoComplete="current-password"
                placeholder="Nhập mật khẩu hiện tại"
                aria-invalid={!!form.formState.errors.currentPassword}
                {...form.register("currentPassword")}
              />

              {form.formState.errors.currentPassword && (
                <FieldError>
                  {form.formState.errors.currentPassword.message}
                </FieldError>
              )}
            </Field>

            {/* Mật khẩu mới */}
            <Field>
              <FieldLabel htmlFor="newPassword">Mật khẩu mới</FieldLabel>

              <PasswordInput
                id="newPassword"
                autoComplete="new-password"
                placeholder="Nhập mật khẩu mới"
                aria-invalid={!!form.formState.errors.newPassword}
                {...form.register("newPassword")}
              />

              {form.formState.errors.newPassword && (
                <FieldError>
                  {form.formState.errors.newPassword.message}
                </FieldError>
              )}
            </Field>

            {/* Xác nhận mật khẩu */}
            <Field>
              <FieldLabel htmlFor="confirmPassword">
                Xác nhận mật khẩu mới
              </FieldLabel>

              <PasswordInput
                id="confirmPassword"
                autoComplete="new-password"
                placeholder="Nhập lại mật khẩu mới"
                aria-invalid={!!form.formState.errors.confirmPassword}
                {...form.register("confirmPassword")}
              />

              {form.formState.errors.confirmPassword && (
                <FieldError>
                  {form.formState.errors.confirmPassword.message}
                </FieldError>
              )}
            </Field>
          </FieldGroup>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={isSubmitting}
            >
              Hủy
            </Button>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Đang cập nhật..." : "Đổi mật khẩu"}
            </Button>
          </DialogFooter>
        </form>
        {/* <pre>{JSON.stringify(form.watch(), null, 2)}</pre> */}
      </DialogContent>
    </Dialog>
  );
}
