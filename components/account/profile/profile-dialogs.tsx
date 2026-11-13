//Các dialog có React Hook Form + Zod
"use client";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { CountrySelect } from "@/components/uiexp/country-select";
// import { CurrencySelect } from "@/components/uiexp/currency-select";
import { CountryPhoneInput } from "@/components/uiexp/country-phone-input";
// import { CountryPhoneSelect } from "@/components/uiexp/country-phone-select";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { ProfileFormDialog } from "./profile-form-dialog";
// import { COUNTRIES } from "./profile-demo-data";
import type {
  // DemoAddress,
  DemoContactMethod,
  DemoPhone,
} from "./profile-types";
import {
  // addressSchema,
  contactMethodSchema,
  personalInfoSchema,
  phoneSchema,
  // type AddressFormValues,
  type ContactMethodFormValues,
  type PersonalInfoFormValues,
  type PhoneFormValues,
} from "@/lib/validations/user/seller-profile";
import { ConsoleLogWriter } from "drizzle-orm";
import type { SellerAddress, NewSellerAddress } from "@/db/schema";
import {SellerAddressValidate, type SellerAddressValidated,type SellerAddressInput} from "@/lib/validations/user/account-contact"
import { XTextInput} from "@/components/xInput/XTextInput";
import { XPhoneInput} from "@/components/xInput/xPhoneInput";
import { XCountrySelect} from "@/components/xInput/XCountrySelect";
import { XAddressInput } from "@/components/xInput/XAddressInput";
import { XCurrencySelect } from "@/components/xInput/XCurrencySelect";
import {useCountries} from "@/components/hooks/use-countries";
import {useRegions, useRegionNameById} from "@/components/hooks/use-regions";
import {useCounties, useCountyNameById} from "@/components/hooks/use-counties";
import {useWards, useWardNameById} from "@/components/hooks/use-wards";
import { AddressValue } from "@/lib/helpers/addressHelpers";

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

          <XTextInput
            id="fullName"
            label="Họ và tên" // Hiển thị to ở giữa khi trống
            floatingLabel="Họ và tên:" // Hiển thị thu nhỏ ngắn gọn ở trên khi đã gõ
            required={true}
            maxLength={100}
            error={form.formState.errors.fullName}
            registration={form.register("fullName")}
            onValueChange={(val) => {
              form.setValue("fullName", val);
              if (val.trim().length > 0) form.clearErrors("fullName");
            }}
            onClear={() => form.setValue("fullName", "", { shouldValidate: true })}
          />
          {/* Quốc tịch */}
          <XCountrySelect
            id="nationalityCode"
            label="Quốc tịch"
            floatingLabel="Quốc tịch:" 
            required={true}
            hideClearButton={true} // Thêm dòng này để ẩn nút (X)
            error={form.formState.errors.nationalityCode}
            // registration={form.register("countryCode")}
            value={form.watch("nationalityCode")}
            onValueChange={(val) => {
              form.setValue("nationalityCode", val);
              if (val.trim().length > 0) form.clearErrors("nationalityCode");
            }}
            onClear={() => form.setValue("nationalityCode", "", { shouldValidate: true })}
          />
          {/* Quốc gia mặc định */}
          <XCountrySelect
            id="defaultCountryCode"
            label="Quốc gia mặc định"
            note="Dùng làm lựa chọn mặc định khi tìm kiếm, đăng tin và tạo địa chỉ."
            floatingLabel="Quốc gia mặc định:" 
            required={true}
            hideClearButton={true} // Thêm dòng này để ẩn nút (X)
            error={form.formState.errors.defaultCountryCode}
            value={form.watch("defaultCountryCode")}
            onValueChange={(val) => {
              form.setValue("defaultCountryCode", val);
              if (val.trim().length > 0) form.clearErrors("defaultCountryCode");
            }}
            onClear={() => form.setValue("defaultCountryCode", "", { shouldValidate: true })}
          />

          {/* Tiền tệ mặc định */}
          <XCurrencySelect
            id="defaultCurrencyCode"
            label="Tiền tệ mặc định"
            note="Dùng làm tiền tệ mặc định khi tìm kiếm, đăng tin."
            floatingLabel="Tiền tệ mặc định:" 
            required={true}
            hideClearButton={true}
            error={form.formState.errors.defaultCurrencyCode}
            value={form.watch("defaultCurrencyCode")}
            onValueChange={(val) => {
              form.setValue("defaultCurrencyCode", val);
              if (val.trim().length > 0) form.clearErrors("defaultCurrencyCode");
            }}
            onClear={() => form.setValue("defaultCurrencyCode", "", { shouldValidate: true })}
          />
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
  saving,
}: DialogBase & {
  initialPhone: DemoPhone | null;
  onSave: (values: PhoneFormValues) => void;
  saving?: boolean;
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

        <FormActions onCancel={() => onOpenChange(false)} saving = {saving}/>
      </form>
    </ProfileFormDialog>
  );
}


export function AddressDialog({
  open,
  onOpenChange,
  initialAddress,
  defaultCountryCode = "VN",
  onSave,
  saving,
}: DialogBase & {
  initialAddress: SellerAddress | null;
  defaultCountryCode: string;
  onSave: (values: SellerAddressInput) => void;
  saving?: boolean;
}) {
  const form = useForm<SellerAddressInput>({
    resolver: zodResolver(SellerAddressValidate),
    defaultValues: {
      label: "Nhà riêng",
      recipientName: "",
      phone: "",
      countryCode: defaultCountryCode,
      regionId: null,
      countyId: null,
      wardId: null,
      location: "",
      postalCode: "",
      primary: false,
    },
  });
// Lấy giá trị hiện tại của address từ form watch
  const watchValues = form.watch();
  const addressValue: AddressValue = {
    countryCode: watchValues.countryCode,
    regionId: watchValues.regionId ?? null,
    countyId: watchValues.countyId ?? null,
    wardId: watchValues.wardId ?? null,
    location: watchValues.location ?? "",
  };

  useEffect(() => {
    if (open) {
      form.reset({
        label: initialAddress?.label ?? "Nhà riêng",
        recipientName: initialAddress?.recipientName ?? "",
        phone: initialAddress?.phone ?? "",
        countryCode:
          initialAddress?.countryCode ?? defaultCountryCode,
        regionId: initialAddress?.regionId ?? null,
        countyId: initialAddress?.countyId ?? null,
        location: initialAddress?.location ?? "",
        postalCode: initialAddress?.postalCode ?? "",
        primary: initialAddress?.primary ?? false,
      });
    }
  }, [open, initialAddress, defaultCountryCode, form]);
  // const saving = form.formState.isSubmitting;
  return (
    <ProfileFormDialog
      open={open}
      onOpenChange={onOpenChange}
      title={initialAddress ? "Sửa địa chỉ" : "Thêm địa chỉ"}
      // description="Địa chỉ được lưu theo quốc gia đã chọn. Các trường hành chính sẽ được tinh chỉnh theo từng quốc gia."
    >
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-5"
      >
        <FieldGroup className="gap-3">
          <XTextInput
            id="addressLabel"
            label="Tên gợi nhớ" // Hiển thị to ở giữa khi trống
            floatingLabel="Tên gợi nhớ:" // Hiển thị thu nhỏ ngắn gọn ở trên khi đã gõ
            required={false}
            maxLength={100}
            error={form.formState.errors.label}
            registration={form.register("label")}
            onValueChange={(val) => {
              form.setValue("label", val);
              if (val.trim().length > 0) form.clearErrors("label");
            }}
            onClear={() => form.setValue("label", "", { shouldValidate: true })}
          />

          <XTextInput
            id="recipientName"
            label="Tên người nhận"
            floatingLabel="Người nhận:" 
            required={false}
            maxLength={200}
            error={form.formState.errors.recipientName}
            registration={form.register("recipientName")}
            onValueChange={(val) => {
              form.setValue("recipientName", val);
              if (val.trim().length > 0) form.clearErrors("recipientName");
            }}
            onClear={() => form.setValue("recipientName", "", { shouldValidate: true })}
          />

          <XPhoneInput
            id="addressPhone"
            label="Điện thoại liên hệ"
            floatingLabel="Điện thoại liên hệ:" 
            required={false}
            maxLength={50}
            error={form.formState.errors.phone}
            registration={form.register("phone")}
            onValueChange={(val) => {
              form.setValue("phone", val);
              if (val.trim().length > 0) form.clearErrors("phone");
            }}
            onClear={() => form.setValue("phone", "", { shouldValidate: true })}
          />

          <XCountrySelect
            id="countryCode"
            label="Quốc gia"
            floatingLabel="Quốc gia:" 
            required={true}
            hideClearButton={true} // Thêm dòng này để ẩn nút (X)
            error={form.formState.errors.countryCode}
            // registration={form.register("countryCode")}
            value={form.watch("countryCode")}
            onValueChange={(val) => {
              form.setValue("countryCode", val);
              form.setValue("regionId", null);
              form.setValue("countyId", null);
              if (val.trim().length > 0) form.clearErrors("countryCode");
            }}
            onClear={() => form.setValue("countryCode", "", { shouldValidate: true })}
          />

          {/* Tích hợp AddressInputTrigger */}
          <XAddressInput
            label="Địa chỉ"
            floatingLabel="Địa chỉ:"
            formValues={addressValue}
            onValueChange={(newValues) => {
              // Khi người dùng bấm [XONG] ở Modal, cập nhật lại toàn bộ giá trị vào form
              form.setValue("regionId", newValues.regionId, { shouldValidate: true });
              form.setValue("countyId", newValues.countyId, { shouldValidate: true });
              form.setValue("wardId", newValues.wardId, { shouldValidate: true });
              form.setValue("location", newValues.location, { shouldValidate: true });
            }}
            error={form.formState.errors.location}
            hideClearButton
            // useRegions={useRegions}
            // useCounties={useCounties}
            // useWards={useWards}
            // Dùng arrow function để truyền đủ 2 tham số: countryCode và id
            // getRegionName={(id) => useRegionNameById(addressValue.countryCode, id)}
            // getCountyName={(id) => useCountyNameById(addressValue.regionId, id)}
            // getWardName={(id) => useWardNameById(addressValue.countyId, id)}
          />

          {/* <Field data-invalid={!!form.formState.errors.postalCode}>
            <FieldLabel htmlFor="postalCode">
              Mã bưu chính
            </FieldLabel>
            <Input
              id="postalCode"
              {...form.register("postalCode")}
            />
            <FieldError>
              {form.formState.errors.postalCode?.message}
            </FieldError>
          </Field> */}

          <XTextInput
            id="postalCode"
            label="Mã bưu chính"
            floatingLabel="Mã bưu chính:" 
            required={false}
            maxLength={20}
            error={form.formState.errors.postalCode}
            registration={form.register("postalCode")}
            onValueChange={(val) => {
              form.setValue("postalCode", val);
              if (val.trim().length > 0) form.clearErrors("postalCode");
            }}
            onClear={() => form.setValue("postalCode", "", { shouldValidate: true })}
          />

          <Field orientation="horizontal">
            <Checkbox
              id="addressPrimary"
              checked={form.watch("primary")}
              onCheckedChange={(checked) =>
                form.setValue("primary", checked === true, {
                  shouldDirty: true,
                  shouldValidate: true,
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

        <FormActions onCancel={() => onOpenChange(false)}
        saving = {saving}/>
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
