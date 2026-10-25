"use client";

import { useMemo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  useAccountProfile,
  accountProfileQueryKey,
} from "@/components/hooks/use-account-profile";
import { resizeImage } from "@/lib/image/resize-image";

import {
  deleteAccountAvatar,
  uploadAccountAvatar,
  updateAccountProfile,
  createPhone,
  updatePhone,
  deletePhone,
  requestPhoneVerification,
  confirmPhoneVerification,
  createAddress,
  updateAddress,
  deleteAddress,
  setPrimaryAddress,
  createContactMethod,
  updateContactMethod,
  deleteContactMethod,
} from "@/lib/api/account";
import type { SellerProfileUpdateInput } from "@/lib/repositories/seller-profile-repository";

import { ProfileReadinessCard } from "./profile-readiness-card";
import { PersonalInfoCard } from "./personal-info-card";
import { EmailCard } from "./email-card";
import { PhonesCard } from "./phones-card";
import { AddressesCard } from "./addresses-card";
import { ContactMethodsCard } from "./contact-methods-card";
import { SellerReputationCard } from "./seller-reputation-card";
import { ProfileDeleteDialog } from "./profile-delete-dialog";
import { ChangePasswordDialog } from "./change-password-dialog";
import {
  AddressDialog,
  ContactMethodDialog,
  PersonalInfoDialog,
  PhoneDialog,
} from "./profile-dialogs";
import type {
  AddressFormValues,
  ContactMethodFormValues,
  PersonalInfoFormValues,
  PhoneFormValues,
} from "./profile-schemas";
import type {
  DemoAddress,
  DemoContactMethod,
  DemoPhone,
} from "./profile-types";

type ActiveDialog = "personal" | "phone" | "address" | "contact" | null;

type DeleteTarget =
  | { type: "phone"; item: DemoPhone }
  | { type: "address"; item: DemoAddress }
  | { type: "contact"; item: DemoContactMethod }
  | null;

export function AccountProfilePage() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error, refetch } = useAccountProfile();

  const [activeDialog, setActiveDialog] = useState<ActiveDialog>(null);
  const [editingPhone, setEditingPhone] = useState<DemoPhone | null>(null);
  const [editingAddress, setEditingAddress] = useState<DemoAddress | null>(
    null,
  );
  const [editingContact, setEditingContact] =
    useState<DemoContactMethod | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget>(null);

  const [changePasswordOpen, setChangePasswordOpen] = useState(false);

  const updateProfileMutation = useMutation({
    mutationFn: async ({
      input,
      avatarFile,
      removeAvatar,
    }: {
      input: SellerProfileUpdateInput;
      avatarFile: File | null;
      removeAvatar: boolean;
    }) => {
      console.log("start save........");
      let nextInput = input;

      if (avatarFile) {
        const resizedFile = await resizeImage(avatarFile, {
          maxWidth: 1600,
          maxHeight: 1600,
          quality: 0.8,
        });

        const uploaded = await uploadAccountAvatar(resizedFile);

        nextInput = {
          ...input,
          avatarUrl: uploaded.avatarUrl,
        };
      }
      // console.log("nextInput:", nextInput);
      if (removeAvatar && !avatarFile) {
        await deleteAccountAvatar();

        nextInput = {
          ...input,
          avatarUrl: null,
        };
      }

      return updateAccountProfile(nextInput);
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: accountProfileQueryKey,
      });

      setActiveDialog(null);

      toast.success("Đã cập nhật thông tin cá nhân.");
    },

    onError: (mutationError: Error) => {
      toast.error(mutationError.message || "Không thể cập nhật hồ sơ.");
    },
  });

  const phoneMutation = useMutation({
    mutationFn: (input: { id?: string; values: PhoneFormValues }) =>
      input.id
        ? updatePhone(input.id, input.values)
        : createPhone(input.values),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: accountProfileQueryKey });
      setActiveDialog(null);
      toast.success("Đã lưu số điện thoại.");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const deletePhoneMutation = useMutation({
    mutationFn: deletePhone,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: accountProfileQueryKey });
      setDeleteTarget(null);
      toast.success("Đã xóa số điện thoại.");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const addressMutation = useMutation({
    mutationFn: (input: { id?: string; values: AddressFormValues }) =>
      input.id
        ? updateAddress(input.id, input.values)
        : createAddress(input.values),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: accountProfileQueryKey });
      setActiveDialog(null);
      toast.success("Đã lưu địa chỉ.");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const deleteAddressMutation = useMutation({
    mutationFn: deleteAddress,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: accountProfileQueryKey });
      setDeleteTarget(null);
      toast.success("Đã xóa địa chỉ.");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const primaryAddressMutation = useMutation({
    mutationFn: setPrimaryAddress,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: accountProfileQueryKey });
      toast.success("Đã đổi địa chỉ mặc định.");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const contactMutation = useMutation({
    mutationFn: (input: { id?: string; values: ContactMethodFormValues }) =>
      input.id
        ? updateContactMethod(input.id, input.values)
        : createContactMethod(input.values),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: accountProfileQueryKey });
      setActiveDialog(null);
      toast.success("Đã lưu kênh liên hệ.");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const deleteContactMutation = useMutation({
    mutationFn: deleteContactMethod,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: accountProfileQueryKey });
      setDeleteTarget(null);
      toast.success("Đã xóa kênh liên hệ.");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const personalValues = useMemo<PersonalInfoFormValues>(
    () => ({
      fullName: data?.profile?.fullName ?? data?.user.name ?? "",
      avatarUrl: data?.profile?.avatarUrl ?? "",
      nationalityCode: data?.profile?.nationalityCode ?? "",
      defaultCountryCode: data?.profile?.defaultCountryCode ?? "VN",
    }),
    [data],
  );

  if (isLoading) {
    return (
      <div className="mx-auto max-w-5xl space-y-4 p-4 sm:p-6">
        <div className="h-8 w-64 animate-pulse rounded bg-muted" />
        <div className="h-40 animate-pulse rounded-xl bg-muted" />
        <div className="h-56 animate-pulse rounded-xl bg-muted" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="mx-auto max-w-5xl space-y-4 p-4 sm:p-6">
        <h1 className="text-2xl font-bold">Thông tin tài khoản</h1>
        <p role="alert" className="text-sm text-destructive">
          {error instanceof Error
            ? error.message
            : "Không thể tải thông tin tài khoản."}
        </p>
        <Button
          type="button"
          onClick={() => void refetch()}
          className="rounded-md border px-4 py-2 text-sm"
        >
          Thử lại
        </Button>
      </div>
    );
  }

  const user = data.user;
  const profile = data.profile;
  const phones = data.phones;
  const addresses = data.addresses;
  const contacts = data.contactMethods.map((item) => ({
    ...item,
    type: item.type as DemoContactMethod["type"],
  }));

  const readinessItems = [
    { label: "Xác thực email", done: data.readiness.emailVerified },
    { label: "Bổ sung họ tên", done: data.readiness.hasName },
    { label: "Xác thực ít nhất một số điện thoại", done: data.readiness.hasVerifiedPhone,},
    { label: "Thêm ít nhất một địa chỉ", done: data.readiness.hasAddress },
  ];

  function openAddPhone() {
    if (phones.length >= 2) {
      toast.error("Bạn chỉ có thể thêm tối đa 2 số điện thoại.");
      return;
    }
    setEditingPhone(null);
    setActiveDialog("phone");
  }

  function savePhone(values: PhoneFormValues) {
    phoneMutation.mutate({ id: editingPhone?.id, values });
  }

  function saveAddress(values: AddressFormValues) {
    addressMutation.mutate({ id: editingAddress?.id, values });
  }

  function saveContact(values: ContactMethodFormValues) {
    contactMutation.mutate({ id: editingContact?.id, values });
  }

  async function verifyPhone(phone: DemoPhone) {
    try {
      const result = await requestPhoneVerification(phone.id);
      if (result.alreadyVerified) {
        toast.success("Số điện thoại đã được xác thực.");
        return;
      }
      if (result.devCode) toast.info(`Mã OTP test: ${result.devCode}`);
      const code = window.prompt("Nhập mã OTP 6 số:", result.devCode ?? "");
      if (!code) return;
      await confirmPhoneVerification(phone.id, code.trim());
      await queryClient.invalidateQueries({ queryKey: accountProfileQueryKey });
      toast.success("Đã xác thực số điện thoại.");
    } catch (e) {
      toast.error(
        e instanceof Error ? e.message : "Không thể xác thực số điện thoại.",
      );
    }
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    if (deleteTarget.type === "phone")
      await deletePhoneMutation.mutateAsync(deleteTarget.item.id);
    if (deleteTarget.type === "address")
      await deleteAddressMutation.mutateAsync(deleteTarget.item.id);
    if (deleteTarget.type === "contact")
      await deleteContactMutation.mutateAsync(deleteTarget.item.id);
  }

  return (
    <main className="mx-auto w-full max-w-5xl space-y-6 p-4 pb-12 sm:p-6 lg:p-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Thông tin tài khoản
        </h1>
        <p className="text-sm text-muted-foreground">
          Quản lý hồ sơ cá nhân, phương thức liên hệ và uy tín người bán.
        </p>
      </header>

      <section className="flex flex-col gap-4 rounded-xl border bg-card p-5 sm:flex-row sm:items-center">
        <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted">
          {profile?.avatarUrl || user.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile?.avatarUrl || user.image || ""}
              alt="Ảnh đại diện"
              className="size-full object-cover"
            />
          ) : (
            <span className="text-xl font-semibold">
              {personalValues.fullName.slice(0, 1).toUpperCase() || "?"}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold">
            {personalValues.fullName || "Chưa cập nhật họ tên"}
          </h2>
          <p className="break-all text-sm text-muted-foreground">
            {user.email}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Quốc gia mặc định: {personalValues.defaultCountryCode}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {/* <Button
            type="button"
            variant="outline"
            onClick={() => setActiveDialog("personal")}
          >
            Sửa hồ sơ
          </Button> */}

          <Button
            type="button"
            variant="outline"
            onClick={() => setChangePasswordOpen(true)}
          >
            Đổi mật khẩu
          </Button>
          <ChangePasswordDialog
            open={changePasswordOpen}
            onOpenChange={setChangePasswordOpen}
          />
        </div>
      </section>

      <ProfileReadinessCard items={readinessItems} />

      <PersonalInfoCard
        values={personalValues}
        onEdit={() => setActiveDialog("personal")}
      />

      <EmailCard
        email={user.email}
        verified={user.emailVerified}
        onVerify={() => {
          toast.info(
            "Chưa tích hợp gửi email xác thực. Trạng thái email lấy từ Better Auth.",
          );
        }}
      />

      <PhonesCard
        phones={phones}
        onAdd={openAddPhone}
        onEdit={(phone) => {
          setEditingPhone(phone);
          setActiveDialog("phone");
        }}
        onDelete={(item) => setDeleteTarget({ type: "phone", item })}
        onVerify={verifyPhone}
      />

      <AddressesCard
        addresses={addresses}
        onAdd={() => {
          setEditingAddress(null);
          setActiveDialog("address");
        }}
        onEdit={(address) => {
          setEditingAddress(address);
          setActiveDialog("address");
        }}
        onDelete={(item) => setDeleteTarget({ type: "address", item })}
        onSetDefault={(address) => primaryAddressMutation.mutate(address.id)}
      />

      <ContactMethodsCard
        contacts={contacts}
        onAdd={() => {
          setEditingContact(null);
          setActiveDialog("contact");
        }}
        onEdit={(contact) => {
          setEditingContact(contact);
          setActiveDialog("contact");
        }}
        onDelete={(item) => setDeleteTarget({ type: "contact", item })}
      />

      <SellerReputationCard />

      <PersonalInfoDialog
        open={activeDialog === "personal"}
        onOpenChange={(open) => setActiveDialog(open ? "personal" : null)}
        initialValues={personalValues}
        saving={updateProfileMutation.isPending}
        onSave={(values, avatarFile, removeAvatar) =>
          updateProfileMutation.mutate({
            input: values,
            avatarFile,
            removeAvatar,
          })
        }
      />

      <PhoneDialog
        open={activeDialog === "phone"}
        onOpenChange={(open) => setActiveDialog(open ? "phone" : null)}
        initialPhone={editingPhone}
        onSave={savePhone}
      />

      <AddressDialog
        open={activeDialog === "address"}
        onOpenChange={(open) => setActiveDialog(open ? "address" : null)}
        initialAddress={editingAddress}
        defaultCountryCode={personalValues.defaultCountryCode}
        onSave={saveAddress}
      />

      <ContactMethodDialog
        open={activeDialog === "contact"}
        onOpenChange={(open) => setActiveDialog(open ? "contact" : null)}
        initialContact={editingContact}
        onSave={saveContact}
      />

      <ProfileDeleteDialog
        open={deleteTarget !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null);
        }}
        title={
          deleteTarget?.type === "phone"
            ? "Xóa số điện thoại?"
            : deleteTarget?.type === "address"
              ? "Xóa địa chỉ?"
              : "Xóa kênh liên hệ?"
        }
        description="Thao tác này sẽ xóa dữ liệu khỏi cơ sở dữ liệu."
        onConfirm={confirmDelete}
      />
    </main>
  );
}
