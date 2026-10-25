//Các dialog có React Hook Form + Zod
"use client";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CountrySelect } from "@/components/uiexp/country-select";
import { CountryPhoneInput } from "@/components/uiexp/country-phone-input";
import { CountryPhoneSelect } from "@/components/uiexp/country-phone-select";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { ProfileFormDialog } from "./profile-form-dialog";
import { COUNTRIES } from "./profile-demo-data";
import type {
  DemoAddress,
  DemoContactMethod,
  DemoPhone,
} from "./profile-types";
import {
  addressSchema,
  contactMethodSchema,
  personalInfoSchema,
  phoneSchema,
  type AddressFormValues,
  type ContactMethodFormValues,
  type PersonalInfoFormValues,
  type PhoneFormValues,
} from "./profile-schemas";
import { ConsoleLogWriter } from "drizzle-orm";
// import console from "console";

type DialogBase = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function FormActions({
  onCancel,
  saving,
}: {
  onCancel: () => void;
  saving?: boolean;
}) {
  return (
    <div className="flex justify-end gap-2 border-t pt-4">
      <Button type="button" variant="outline" onClick={onCancel}>
        Hủy
      </Button>
      <Button type="submit" disabled={saving}>
        {saving ? "Đang lưu..." : "Lưu thay đổi"}
      </Button>
    </div>
  );
}

export function PersonalInfoDialog({
  open,
  onOpenChange,
  initialValues,
  onSave,
  saving,
}: DialogBase & {
  initialValues: PersonalInfoFormValues;
  onSave: (
    values: PersonalInfoFormValues,
    avatarFile: File | null,
    removeAvatar: boolean,
  ) => void;
  saving?: boolean;
}) {
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(
    initialValues.avatarUrl || null,
  );
  const [removeAvatar, setRemoveAvatar] = useState(false);

  const form = useForm<PersonalInfoFormValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (!open) return;

    form.reset(initialValues);

    setAvatarFile(null);
    setRemoveAvatar(false);
    setAvatarPreview(initialValues.avatarUrl || null);
  }, [open, initialValues, form]);

  useEffect(() => {
    return () => {
      if (avatarPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  function handleAvatarChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    // console.log("avartar changed....");
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Vui lòng chọn một file ảnh.");
      event.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error("Ảnh không được lớn hơn 10MB.");
      event.target.value = "";
      return;
    }

    if (avatarPreview?.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }

    const previewUrl = URL.createObjectURL(file);

    setAvatarFile(file);
    setAvatarPreview(previewUrl);
    setRemoveAvatar(false);

    form.setValue("avatarUrl", initialValues.avatarUrl ?? "", {
      shouldDirty: true,
    });
  }

  function handleRemoveAvatar() {
    if (avatarPreview?.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }

    setAvatarFile(null);
    setAvatarPreview(null);
    setRemoveAvatar(true);

    form.setValue("avatarUrl", null, {
      shouldDirty: true,
    });
  }

  function handleSubmit(values: PersonalInfoFormValues) {
    // console.log("handleSubmit");
    onSave(values, avatarFile, removeAvatar);
  }

  return (
    <ProfileFormDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Thông tin cá nhân"
      description="Cập nhật tên, ảnh đại diện và quốc gia sử dụng."
    >
        <form
          onSubmit={form.handleSubmit(
            handleSubmit, 
            (errors) => {
              // console.log("⚠️ Lỗi validate form:", errors);
              // console.log("Giá trị avatarUrl hiện tại:", form.getValues("avatarUrl"));
            }
          )}
          className="space-y-5"
        >
        <FieldGroup>
          <Field data-invalid={!!form.formState.errors.fullName}>
            <FieldLabel htmlFor="fullName">Họ và tên *</FieldLabel>

            <Input
              id="fullName"
              {...form.register("fullName")}
              aria-invalid={!!form.formState.errors.fullName}
            />

            <FieldError>
              {form.formState.errors.fullName?.message}
            </FieldError>
          </Field>

          {/* Avatar */}
          <Field>
            <FieldLabel>Ảnh đại diện</FieldLabel>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-muted">
                {avatarPreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={avatarPreview}
                    alt="Ảnh đại diện xem trước"
                    className="size-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-semibold text-muted-foreground">
                    ?
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {/* <Button
                    type="button"
                    variant="outline"
                    onClick={() => avatarInputRef.current?.click()}
                  >
                    <label
                      htmlFor="avatarFile"
                      className="cursor-pointer"
                    >
                      Chọn ảnh
                    </label>
                  </Button> */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => avatarInputRef.current?.click()}
                  >
                    Chọn ảnh
                  </Button>
                  {avatarPreview && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleRemoveAvatar}
                    >
                      Xóa ảnh
                    </Button>
                  )}
                </div>

                <input
                  ref={avatarInputRef}
                  id="avatarFile"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="sr-only"
                  onChange={handleAvatarChange}
                />

                <FieldDescription>
                  JPG, PNG, WebP hoặc GIF. Tối đa 10MB.
                  Ảnh sẽ được tối ưu trước khi tải lên.
                </FieldDescription>
              </div>
            </div>
          </Field>

          <Field>
            <FieldLabel htmlFor="nationalityCode">
              Quốc tịch
            </FieldLabel>
            <CountrySelect
              name="nationalityCode"
              value={form.watch("nationalityCode") ?? ""}
              onValueChange={(value) =>
                form.setValue("nationalityCode", value, {
                  shouldDirty: true,
                  shouldValidate: true,
                })
              }
            />
            <FieldDescription>
              Quốc tịch không quyết định quốc gia tìm kiếm.
            </FieldDescription>
          </Field>

          <Field data-invalid={!!form.formState.errors.defaultCountryCode}>
            <FieldLabel htmlFor="defaultCountryCode">
              Quốc gia mặc định *
            </FieldLabel>
            <CountrySelect
              name="defaultCountryCode"
              value={form.watch("defaultCountryCode")}
              onValueChange={(value) =>
                form.setValue("defaultCountryCode", value, {
                  shouldDirty: true,
                  shouldValidate: true,
                })
              }
            />

            <FieldDescription>
              Dùng làm lựa chọn mặc định khi tìm kiếm, đăng tin và tạo địa
              chỉ.
            </FieldDescription>

            <FieldError>
              {form.formState.errors.defaultCountryCode?.message}
            </FieldError>
          </Field>
        </FieldGroup>

        <FormActions
          onCancel={() => onOpenChange(false)}
          saving={saving}
        />
      </form>
    </ProfileFormDialog>
  );
}

export function PhoneDialog({
  open,
  onOpenChange,
  initialPhone,
  onSave,
}: DialogBase & {
  initialPhone: DemoPhone | null;
  onSave: (values: PhoneFormValues) => void;
}) {
  const form = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
    defaultValues: { phone: "", label: "Số chính" },
  });

  useEffect(() => {
    if (open) {
      form.reset({
        phone: initialPhone?.phone ?? "",
        label: initialPhone?.label ?? "Số chính",
      });
    }
  }, [open, initialPhone, form]);

  return (
    <ProfileFormDialog
      open={open}
      onOpenChange={onOpenChange}
      title={initialPhone ? "Sửa số điện thoại" : "Thêm số điện thoại"}
      description="Xác thực OTP sẽ được tích hợp khi API điện thoại sẵn sàng."
    >
      <form onSubmit={form.handleSubmit(onSave)} className="space-y-5">
        <FieldGroup>
          {/* Field Số điện thoại sử dụng CountryPhoneInput */}
          <Field data-invalid={!!form.formState.errors.phone}>
            <FieldLabel htmlFor="phone">Số điện thoại *</FieldLabel>
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <CountryPhoneInput
                  value={field.value}
                  onValueChange={field.onChange}
                  defaultCountryCode="VN"
                  placeholder="912 345 678"
                  countrySearchPlaceholder="Tìm kiếm quốc gia..."
                  aria-invalid={fieldState.invalid}
                />
              )}
            />
            {/* <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <CountryPhoneSelect
                  value={field.value}
                  onValueChange={field.onChange}
                  defaultCountryCode="VN"
                  aria-invalid={fieldState.invalid}
                />
              )}
            /> */}
            <FieldError>{form.formState.errors.phone?.message}</FieldError>
          </Field>
          <Field data-invalid={!!form.formState.errors.label}>
            <FieldLabel htmlFor="phoneLabel">Tên gợi nhớ</FieldLabel>
            <Input
              id="phoneLabel"
              {...form.register("label")}
              placeholder="Số chính, Số phụ..."
            />
            <FieldError>{form.formState.errors.label?.message}</FieldError>
          </Field>
        </FieldGroup>

        <FormActions onCancel={() => onOpenChange(false)} />
      </form>
    </ProfileFormDialog>
  );
}

export function AddressDialog({
  open,
  onOpenChange,
  initialAddress,
  defaultCountryCode,
  onSave,
}: DialogBase & {
  initialAddress: DemoAddress | null;
  defaultCountryCode: string;
  onSave: (values: AddressFormValues) => void;
}) {
  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      label: "Nhà riêng",
      recipientName: "",
      phone: "",
      countryCode: defaultCountryCode,
      addressLine1: "",
      addressLine2: "",
      locality: "",
      administrativeArea: "",
      postalCode: "",
      primary: false,
    },
  });

  useEffect(() => {
    if (open) {
      form.reset({
        label: initialAddress?.label ?? "Nhà riêng",
        recipientName: initialAddress?.recipientName ?? "",
        phone: initialAddress?.phone ?? "",
        countryCode: initialAddress?.countryCode ?? defaultCountryCode,
        addressLine1: initialAddress?.addressLine1 ?? "",
        addressLine2: initialAddress?.addressLine2 ?? "",
        locality: initialAddress?.locality ?? "",
        administrativeArea: initialAddress?.administrativeArea ?? "",
        postalCode: initialAddress?.postalCode ?? "",
        primary: initialAddress?.primary ?? false,
      });
    }
  }, [open, initialAddress, defaultCountryCode, form]);

  return (
    <ProfileFormDialog
      open={open}
      onOpenChange={onOpenChange}
      title={initialAddress ? "Sửa địa chỉ" : "Thêm địa chỉ"}
      description="Địa chỉ được lưu theo quốc gia đã chọn. Các trường hành chính sẽ được tinh chỉnh theo từng quốc gia."
    >
      <form onSubmit={form.handleSubmit(onSave)} className="space-y-5">
        <FieldGroup>
          <Field data-invalid={!!form.formState.errors.countryCode}>
            <FieldLabel htmlFor="addressCountry">Quốc gia *</FieldLabel>
            <CountrySelect
              name="countryCode"
              value={form.watch("countryCode")}
              onValueChange={(value) =>
                form.setValue("countryCode", value, {
                  shouldDirty: true,
                  shouldValidate: true,
                })
              }
            />
            <FieldError>
              {form.formState.errors.countryCode?.message}
            </FieldError>
          </Field>

          <Field data-invalid={!!form.formState.errors.label}>
            <FieldLabel htmlFor="addressLabel">Tên địa chỉ *</FieldLabel>
            <Input id="addressLabel" {...form.register("label")} />
            <FieldError>{form.formState.errors.label?.message}</FieldError>
          </Field>

          <Field data-invalid={!!form.formState.errors.recipientName}>
            <FieldLabel htmlFor="recipientName">Người nhận *</FieldLabel>
            <Input id="recipientName" {...form.register("recipientName")} />
            <FieldError>
              {form.formState.errors.recipientName?.message}
            </FieldError>
          </Field>

          <Field>
            <FieldLabel htmlFor="addressPhone">Điện thoại liên hệ</FieldLabel>
            <Input id="addressPhone" type="tel" {...form.register("phone")} />
          </Field>

          <Field data-invalid={!!form.formState.errors.addressLine1}>
            <FieldLabel htmlFor="addressLine1">Địa chỉ dòng 1 *</FieldLabel>
            <Input
              id="addressLine1"
              {...form.register("addressLine1")}
              placeholder="Số nhà, tên đường..."
            />
            <FieldError>
              {form.formState.errors.addressLine1?.message}
            </FieldError>
          </Field>

          <Field>
            <FieldLabel htmlFor="addressLine2">Địa chỉ dòng 2</FieldLabel>
            <Input
              id="addressLine2"
              {...form.register("addressLine2")}
              placeholder="Căn hộ, tầng, tòa nhà..."
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="locality">Thành phố / địa phương</FieldLabel>
              <Input id="locality" {...form.register("locality")} />
            </Field>

            <Field>
              <FieldLabel htmlFor="administrativeArea">
                Tỉnh / bang / khu vực
              </FieldLabel>
              <Input
                id="administrativeArea"
                {...form.register("administrativeArea")}
              />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="postalCode">Mã bưu chính</FieldLabel>
            <Input id="postalCode" {...form.register("postalCode")} />
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="addressPrimary"
              checked={form.watch("primary")}
              onCheckedChange={(checked) =>
                form.setValue("primary", checked === true, {
                  shouldDirty: true,
                })
              }
            />
            <div className="space-y-1">
              <FieldLabel htmlFor="addressPrimary">
                Đặt làm địa chỉ mặc định
              </FieldLabel>
              <FieldDescription>
                Dùng làm địa chỉ được chọn sẵn trong giao diện.
              </FieldDescription>
            </div>
          </Field>
        </FieldGroup>

        <FormActions onCancel={() => onOpenChange(false)} />
      </form>
    </ProfileFormDialog>
  );
}

export function ContactMethodDialog({
  open,
  onOpenChange,
  initialContact,
  onSave,
}: DialogBase & {
  initialContact: DemoContactMethod | null;
  onSave: (values: ContactMethodFormValues) => void;
}) {
  const form = useForm<ContactMethodFormValues>({
    resolver: zodResolver(contactMethodSchema),
    defaultValues: {
      type: "Zalo",
      value: "",
      isPublic: true,
      primary: false,
    },
  });

  useEffect(() => {
    if (open) {
      form.reset({
        type: initialContact?.type ?? "Zalo",
        value: initialContact?.value ?? "",
        isPublic: initialContact?.isPublic ?? true,
        primary: initialContact?.primary ?? false,
      });
    }
  }, [open, initialContact, form]);

  return (
    <ProfileFormDialog
      open={open}
      onOpenChange={onOpenChange}
      title={initialContact ? "Sửa kênh liên hệ" : "Thêm kênh liên hệ"}
      description="Quản lý thông tin liên hệ mà người mua có thể sử dụng."
    >
      <form onSubmit={form.handleSubmit(onSave)} className="space-y-5">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="contactType">Loại kênh</FieldLabel>
            <select
              id="contactType"
              value={form.watch("type")}
              onChange={(event) =>
                form.setValue(
                  "type",
                  event.target.value as ContactMethodFormValues["type"],
                  { shouldDirty: true },
                )
              }
              className="border-input bg-background h-9 w-full rounded-md border px-3 text-sm"
            >
              <option value="Zalo">Zalo</option>
              <option value="Messenger">Messenger</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Telegram">Telegram</option>
              <option value="Other">Khác</option>
            </select>
          </Field>

          <Field data-invalid={!!form.formState.errors.value}>
            <FieldLabel htmlFor="contactValue">Thông tin liên hệ *</FieldLabel>
            <Input
              id="contactValue"
              {...form.register("value")}
              placeholder="Số điện thoại hoặc đường dẫn hồ sơ..."
            />
            <FieldError>{form.formState.errors.value?.message}</FieldError>
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="contactPublic"
              checked={form.watch("isPublic")}
              onCheckedChange={(checked) =>
                form.setValue("isPublic", checked === true)
              }
            />
            <FieldLabel htmlFor="contactPublic">
              Cho phép hiển thị với người xem tin đăng
            </FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="contactPrimary"
              checked={form.watch("primary")}
              onCheckedChange={(checked) =>
                form.setValue("primary", checked === true)
              }
            />
            <FieldLabel htmlFor="contactPrimary">
              Đặt làm kênh liên hệ chính
            </FieldLabel>
          </Field>
        </FieldGroup>

        <FormActions onCancel={() => onOpenChange(false)} />
      </form>
    </ProfileFormDialog>
  );
}
