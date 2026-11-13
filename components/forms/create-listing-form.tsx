"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { useSellerProfile } from "@/components/hooks/use-seller-profile";
import { useSellerAddresses } from "@/components/hooks/use-seller-addresses";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List } from "lucide-react";
import {
  addListingImage,
  createListing,
  deleteListingImage,
  reorderListingImages,
  updateListing,
} from "@/lib/api/listings";

import { type ListingCreateInput } from "@/lib/validations/listing/listing-base-schema";
import { getCreateListingSchema} from "@/lib/validations/listing/listing-templates-schema";
import type { PendingListingImage } from "@/lib/types/pending-listing-image";
import { ListingImageUploadCreate } from "@/components/listings/image_manage/listing-image-upload-create";
import { LISTING_IMAGE_RESIZE } from "@/const";
import { resizeImage } from "@/lib/image/resize-image";

import { XTextInput } from "../xInput/XTextInput";
import { XTextareaInput } from "../xInput/XTextareaInput";
// import { XCountrySelect } from "@/components/xInput/XCountrySelect";
// import { XAddressInput } from "@/components/xInput/XAddressInput";
import { XCategorySelect } from "@/components/xInput/XCategorySelect";
import { XPriceInput } from "@/components/xInput/XPriceInput";
import { XSelectAddressInput } from "@/components/xInput/XSelectAddressInput";
import { SellerAddress } from "@/db/schema/index.js";
import { ListingAttributesRenderer } from "@/components/listings/listing-attributes-renderer";

type CreateListingFormProps = {
  initialData?: Partial<ListingCreateInput>;
  initialListingId?: string | null;
};

export function CreateListingForm({ initialData, initialListingId = null }: CreateListingFormProps) {
  const [listingId, setListingId] = useState<string | null>(initialListingId);
  const [pendingImages, setPendingImages] = useState<PendingListingImage[]>([]);
  const [imageError, setImageError] = useState<string | null>(null);
  const [isBusy, setIsBusy] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState<string | null>(null);
  const { data: profile, isLoading: isProfileLoading } = useSellerProfile();
  const { data: addresses, isLoading: isAddressesLoading } = useSellerAddresses();
  const [currencySymbol, setcurrencySymbol] = useState<string | undefined>(undefined);
  const [currencyIconUrl, setcurrencyIconUrl] = useState<string | undefined>(undefined);
  const [maxDecimalPlaces, setmaxDecimalPlaces] = useState<number | undefined>(undefined);
  const [sellerAddresses, setsellerAddresses] = useState<SellerAddress[]>([]);
  const [defaultCountryCode, setdefaultCountryCode] = useState<string | undefined>(undefined);
  const queryClient = useQueryClient();
  const currentLocale = useLocale();

  // Lấy schema động dựa theo template
  const schema = getCreateListingSchema(currentTemplate);

  const form = useForm<ListingCreateInput>({
    resolver: zodResolver(schema as any),
    defaultValues: {
      title: "",
      description: "",
      categoryId: undefined,
      priceType: "fixed",
      price: "",
      countryCode: profile?.defaultCountryCode,
      quantity: 1,
      currencyCode: profile?.defaultCurrencyCode,
      attributes: {},
      slug: "",
      ...(initialData || {}),
    },
    mode: "onSubmit",
  });

  const decimalSeparator = currentLocale === "vi" ? "," : ".";

  // Theo dõi giá trị categoryId để kiểm tra xem đã chọn chưa
  const selectedCategoryId = form.watch("categoryId");

  // Tự động sinh slug chuẩn từ title
  const titleValue = form.watch("title");
  useEffect(() => {
    if (titleValue) {
      const generatedSlug = titleValue
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[đĐ]/g, "d")
        .replace(/([^0-9a-z-\s])/g, "")
        .replace(/(\s+)/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");

      form.setValue("slug", generatedSlug, { shouldValidate: false });
    }
  }, [titleValue, form]);

  // Đồng bộ initialData khi có dữ liệu mới
  useEffect(() => {
    if (initialData) {
      form.reset(initialData);
    }
  }, [initialData, form]);

  // Đồng bộ countryCode khi có dữ liệu mới
  useEffect(() => {
    setcurrencySymbol(profile?.currencySymbol ?? undefined);
    setcurrencyIconUrl(profile?.currencyIconUrl ?? undefined);
    setmaxDecimalPlaces(profile?.maxDecimalPlaces ?? undefined);
    setdefaultCountryCode(profile?.defaultCountryCode ?? "");
    form.setValue("countryCode", profile ? profile.defaultCountryCode : "", { shouldValidate: true });
  }, [profile]);

  // Đồng bộ addresses khi có dữ liệu mới
  useEffect(() => {
    setsellerAddresses(addresses ?? []);
  }, [addresses]);

  async function onSubmit(data: ListingCreateInput) {
    if (isBusy) return;

    if (pendingImages.length === 0) {
      setImageError("Vui lòng tải lên ít nhất 1 hình ảnh");
      return;
    }
    setImageError(null);

    const isNewListing = listingId === null;
    setIsBusy(true);

    try {
      let currentListingId = listingId;

      if (!currentListingId) {
        const created = await createListing(data);
        currentListingId = created.id;
        setListingId(currentListingId);
        await queryClient.invalidateQueries({ queryKey: ["my-listings"] });
      } else {
        await updateListing(currentListingId, data);
        await queryClient.invalidateQueries({ queryKey: ["my-listings"] });
      }

      const uploadResult = await uploadPendingImages(currentListingId!);
      if (uploadResult.failed > 0) {
        toast.warning(
          isNewListing
            ? `Tin đã được đăng nhưng có ${uploadResult.failed} hình ảnh upload thất bại.`
            : `Tin đã được lưu nhưng có ${uploadResult.failed} hình ảnh upload thất bại.`,
        );
      } else {
        toast.success(isNewListing ? "Đăng tin thành công" : "Lưu tin đăng thành công");
      }
    } catch (error) {
      console.error("CreateListingForm submit error:", error);
      toast.error(error instanceof Error ? error.message : "Không thể lưu tin đăng");
    } finally {
      setIsBusy(false);
    }
  }

  async function uploadPendingImages(currentListingId: string) {
    const imagesToUpload = pendingImages
      .filter((image) => image.status === "pending" || image.status === "error")
      .sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id));

    let uploaded = 0;
    let failed = 0;

    for (const image of imagesToUpload) {
      setPendingImages((current) =>
        current.map((item) => (item.id === image.id ? { ...item, status: "uploading" } : item)),
      );

      try {
        const resizedFile = await resizeImage(image.file, {
          maxWidth: LISTING_IMAGE_RESIZE,
          maxHeight: LISTING_IMAGE_RESIZE,
          quality: 0.8,
        });

        const uploadedInfo = await addListingImage(currentListingId, resizedFile, image.sortOrder);

        setPendingImages((current) =>
          current.map((item) => (item.id === image.id ? { ...item, status: "uploaded", uploadedInfo } : item)),
        );

        uploaded += 1;
      } catch (error) {
        console.error(`Failed to upload image "${image.file.name}"`, error);
        setPendingImages((current) =>
          current.map((item) => (item.id === image.id ? { ...item, status: "error", uploadedInfo: null } : item)),
        );
        failed += 1;
      }
    }

    try {
      const allUploadedImages = pendingImages
        .filter((img) => img.status === "uploaded" && img.uploadedInfo)
        .sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id));

      if (allUploadedImages.length > 0) {
        const imageIds = allUploadedImages.map((img) => img.uploadedInfo!.id);
        await reorderListingImages(currentListingId, imageIds);
      }
    } catch (reorderError) {
      console.error("Failed to update image order:", reorderError);
      toast.warning("Tin đã được lưu nhưng có lỗi khi cập nhật lại thứ tự hình ảnh.");
    }

    if (uploaded > 0 || pendingImages.some((img) => img.status === "uploaded")) {
      await queryClient.invalidateQueries({
        queryKey: ["listing-images", currentListingId],
      });
    }

    return { uploaded, failed };
  }

  async function handleRemoveImage(image: PendingListingImage) {
    if (isBusy) return;

    if (image.status !== "uploaded") {
      URL.revokeObjectURL(image.fileURL);
      setPendingImages((current) => {
        const updated = current.filter((item) => item.id !== image.id);
        if (updated.length > 0) setImageError(null);
        return updated;
      });
      return;
    }

    if (!listingId || !image.uploadedInfo) return;

    const imageId = image.uploadedInfo.id;

    try {
      setIsBusy(true);
      await deleteListingImage(listingId, imageId);
      URL.revokeObjectURL(image.fileURL);

      setPendingImages((current) => {
        const updated = current.filter((item) => item.id !== image.id);
        if (updated.length > 0) setImageError(null);
        return updated;
      });

      await queryClient.invalidateQueries({ queryKey: ["listing-images", listingId] });
      toast.success("Đã xóa hình ảnh");
    } catch (error) {
      console.error("Delete listing image error:", error);
      toast.error(error instanceof Error ? error.message : "Không thể xóa hình ảnh");
    } finally {
      setIsBusy(false);
    }
  }

  return (
    <div>
      <h1 className="text-primary text-xl pt-0 pb-4 text-center">
        {listingId ? "Chỉnh sửa tin đăng" : "Đăng Tin Mới"}
      </h1>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Card 1: Thông tin cơ bản & Chọn danh mục */}
        <Card className="pt-2">
          {/* <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader> */}
          <CardContent>
            <FieldGroup className="gap-2">
              {/* ================= IMAGES ================= */}
              <Field data-invalid={!!imageError}>
                <FieldLabel className="gap-0">
                  Hình ảnh (Tối đa 8 ảnh)<span className="text-red-400">*</span>
                </FieldLabel>

                <ListingImageUploadCreate
                  images={pendingImages}
                  onImagesChange={(newImages) => {
                    setPendingImages(newImages);
                  }}
                  onRemoveImage={handleRemoveImage}
                  disabled={isBusy}
                  required={true}
                />
                {imageError && <FieldError errors={[{ message: imageError }]} />}
                <FieldDescription className="text-xs italic"></FieldDescription>
              </Field>

              {/* ================= TITLE ================= */}
              <XTextInput
                id="title"
                label="Nhập tiêu đề cho tin đăng của bạn"
                floatingLabel="Tiêu đề"
                required={true}
                maxLength={255}
                error={form.formState.errors.title}
                registration={form.register("title")}
                onValueChange={(val) => {
                  form.setValue("title", val, { shouldValidate: true });
                }}
                onClear={() => form.setValue("title", "", { shouldValidate: true })}
              />

              {/* ================= DESCRIPTION ================= */}
              <XTextareaInput
                id="description"
                label="Mô tả chi tiết sản phẩm"
                floatingLabel="Mô tả"
                required
                rows={3}
                maxLength={1500}
                description="Mô tả tối đa 1500 ký tự."
                disabled={isBusy}
                error={form.formState.errors.description}
                registration={form.register("description")}
                onValueChange={(val) => {
                  form.setValue("description", val);
                }}
                onClear={() => {
                  form.setValue("description", "", { shouldValidate: true });
                }}
              />

              {/* ================= PRICE & PRICE TYPE ================= */}
              <XPriceInput
                id="price"
                label="Nhập giá bán"
                floatingLabel="Giá bán:"
                currencySymbol={currencySymbol}
                currencyIconUrl={currencyIconUrl}
                decimalSeparator={decimalSeparator}
                maxDecimalPlaces={maxDecimalPlaces}
                required
                value={{
                  price: form.watch("price") ?? null,
                  priceType: form.watch("priceType") ?? null,
                }}
                error={form.formState.errors.price}
                onValueChange={(newValues) => {
                  form.setValue("price", newValues.price, { shouldValidate: true });
                  form.setValue("priceType", newValues.priceType, { shouldValidate: true });
                }}
              />

              {/* ================= LOCATION & ADDRESS ================= */}
              <XSelectAddressInput
                label="Chọn địa chỉ"
                floatingLabel="Địa chỉ:"
                required
                addresses={sellerAddresses}
                defaultCountryCode={defaultCountryCode}
                usePrimaryAsDefault={true}
                hideClearButton
                formValues={{
                  countryCode: form.watch("countryCode") ?? null,
                  regionId: form.watch("regionId") ?? null,
                  countyId: form.watch("countyId") ?? null,
                  wardId: form.watch("wardId") ?? null,
                  location: form.watch("location") ?? "",
                }}
                onValueChange={(newValues) => {
                  form.setValue("countryCode", newValues.countryCode ?? "VN", { shouldValidate: true });
                  form.setValue("regionId", newValues.regionId, { shouldValidate: true });
                  form.setValue("countyId", newValues.countyId, { shouldValidate: true });
                  form.setValue("wardId", newValues.wardId, { shouldValidate: true });
                  form.setValue("location", newValues.location, { shouldValidate: true });
                }}
                error={form.formState.errors.location}
              />

              {/* ================= CATEGORY ID ================= */}
              <XCategorySelect
                id="categoryId"
                label="Chọn danh mục"
                locale={currentLocale}
                floatingLabel="Danh mục:"
                required={true}
                hideClearButton={true}
                error={form.formState.errors.categoryId}
                value={form.watch("categoryId")}
                onValueChange={(val) => {
                  const numericVal = val ? Number(val.id) : undefined;
                  setCurrentTemplate(val.template);
                  //Xóa sạch attributes cũ khi đổi danh mục
                  form.setValue("attributes", {}, { shouldValidate: false });
                  form.setValue("categoryId", numericVal as any, { shouldValidate: true });
                }}
                onClear={() => {
                  setCurrentTemplate(null);
                  form.setValue("attributes", {}, { shouldValidate: false });
                  form.setValue("categoryId", undefined as any, { shouldValidate: true });
                }}
              />
            </FieldGroup>
          </CardContent>
        </Card>

        {/* Card 2: Thông tin chi tiết dựa theo danh mục */}
        <Card className="mt-2 pt-1 gap-1">
          <CardHeader className="">
            <CardTitle className="text-base font-semibold">
              {!selectedCategoryId ? (
                <span className="flex items-center gap-2">
                  <List className="h-4 w-4 text-slate-800"></List>Thông tin chi tiết
                </span>
              ) : (
                null// <span>Thông tin chi tiết theo danh mục</span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!selectedCategoryId ? (
              <div className="py-1 text-center text-muted-foreground text-sm italic">
                Vui lòng chọn Danh mục ở trên để hiển thị thông tin chi tiết.
              </div>
            ) : (
              <FieldGroup className="gap-2">
                {/* Render thông tin chi tiết động dựa trên template */}
                <ListingAttributesRenderer 
                  templateName={currentTemplate} 
                  form={form} 
                />
              </FieldGroup>
            )}
          </CardContent>
        </Card>

        {/* Fixed Submit Button */}
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/50 backdrop-blur-md py-3 px-4 shadow-lg">
          <div className="mx-auto flex justify-center max-w-xl">
            <Button
              type="submit"
              disabled={isBusy}
              className="w-full sm:w-1/2 py-4 text-base font-semibold shadow-md transition-all"
            >
              {isBusy ? "Đang lưu..." : listingId ? "Lưu thay đổi" : "Đăng tin"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
