"use client";

import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { FieldError as RHFFieldError } from "react-hook-form";
import { cn } from "@/lib/utils";
import { AddressInputModal } from "./AddressInputModal";
import { formatFullAddress, type AddressValue } from "@/lib/helpers/addressHelpers";
import { Region, County, Ward } from "@/db/schema";
import {useRegionNameById} from "@/components/hooks/use-regions";
import {useCountyNameById} from "@/components/hooks/use-counties";
import {useWardNameById} from "@/components/hooks/use-wards";

interface AddressInputTriggerProps {
  id?: string;
  label?: string;
  floatingLabel?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  hideClearButton?: boolean;
  error?: RHFFieldError; // Thêm prop error để hỗ trợ validate từ form cha
  formValues: AddressValue;
  onValueChange: (values: AddressValue) => void;
  // useRegions: (countryCode: string) => { data: Region[] | undefined; isLoading?: boolean };
  // useCounties: (regionId: number | null) => { data: County[] | undefined; isLoading?: boolean };
  // useWards: (countyId: number | null) => { data: Ward[] | undefined; isLoading?: boolean };
  // getRegionName?: (id: number | null) => string;
  // getCountyName?: (id: number | null) => string;
  // getWardName?: (id: number | null) => string;
}

export const XAddressInput: React.FC<AddressInputTriggerProps> = ({
  id = "address-input",
  label = "Địa chỉ",
  floatingLabel,
  required = false,
  disabled = false,
  className = "",
  hideClearButton = false,
  error,
  formValues,
  onValueChange,
  // useRegions,
  // useCounties,
  // useWards,
  // getRegionName,
  // getCountyName,
  // getWardName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // getRegionName={(id) => useRegionNameById(addressValue.countryCode, id)}
  // getCountyName={(id) => useCountyNameById(addressValue.regionId, id)}
  // getWardName={(id) => useWardNameById(addressValue.countyId, id)}
  // Lấy tên các cấp tương ứng để nối chuỗi hiển thị
  // const regionName = getRegionName ? getRegionName(formValues.regionId) : "";
  // const countyName = getCountyName ? getCountyName(formValues.countyId) : "";
  // const wardName = getWardName ? getWardName(formValues.wardId) : "";
  const regionName = useRegionNameById(formValues.countryCode ?? "", formValues.regionId ?? null);
  const countyName = useCountyNameById(formValues.regionId ?? null, formValues.countyId ?? null);
  const wardName = useWardNameById(formValues.countyId ?? null, formValues.wardId ?? null);

  const displayText = formatFullAddress({
    location: formValues.location,
    wardName,
    countyName,
    regionName,
  });

  const hasValue = Boolean(formValues.location || formValues.regionId || formValues.countyId || formValues.wardId);

  const currentFloatingLabel = floatingLabel || label;
  const isFloating = isModalOpen || hasValue;

  const handleClearClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onValueChange({
      ...formValues,
      regionId: null,
      countyId: null,
      wardId: null,
      location: "",
    });
  };

  return (
    <div className="w-full flex flex-col gap-1">
      {/* Giao diện xem trước ngoài Form (Chuẩn style XCountrySelect / XTextInput) */}
      <div
        onClick={() => !disabled && setIsModalOpen(true)}
        data-invalid={!!error}
        className={cn(
          `relative flex items-center w-full rounded-lg border px-3 pt-5 pb-2 transition-all duration-300 ease-in-out bg-white cursor-pointer select-none text-left
          border-gray-300 hover:border-black shadow-sm`,
          error && "border-red-500 hover:border-red-500 focus-within:border-red-500", // Đổi viền sang màu đỏ khi có lỗi
          disabled && "bg-gray-100 cursor-not-allowed opacity-75",
          className,
        )}
      >
        {/* 1. Label thu nhỏ bên trên (Floating Label với hiệu ứng mượt mà) */}
        <span
          className={cn(
            `absolute left-3 right-8 flex items-center justify-between pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left`,
            isFloating
              ? "top-2 text-xs text-gray-600 font-semibold opacity-100 scale-100"
              : "top-1/2 -translate-y-1/2 text-sm text-gray-400 font-normal opacity-0 scale-95 pointer-events-none",
          )}
        >
          <span className="flex items-center gap-0.5 truncate">
            {currentFloatingLabel}
            {required && <span className="font-bold">*</span>}
          </span>
        </span>

        {/* 2. Label hiển thị chính giữa khi chưa chọn */}
        <span
          className={cn(
            `absolute left-3 flex items-center gap-0.5 pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left`,
            !isFloating
              ? "top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium opacity-100 scale-100"
              : "top-2 text-xs text-transparent opacity-0 scale-95 pointer-events-none",
          )}
        >
          {label}
          {required && <span className="font-bold">*</span>}
        </span>

        {/* Giá trị hiển thị bên trong */}
        <div className="w-full bg-transparent text-sm text-gray-900 pt-2 pr-12 flex items-center gap-2 min-h-[22px]">
          <span className="truncate">{displayText || ""}</span>
        </div>

        {/* Nhóm nút bên phải */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {hasValue && !disabled && !hideClearButton && (
            <div
              role="button"
              tabIndex={-1}
              onClick={handleClearClick}
              className="p-0.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </div>
          )}
          <ChevronDown className="size-4 shrink-0 text-gray-400" />
        </div>
      </div>

      {/* Hiển thị thông báo lỗi (ví dụ: "Vui lòng nhập địa chỉ cụ thể") */}
      {error && <span className="text-xs text-red-500 mt-0.5">{error.message}</span>}

      {/* Modal Popup Chi Tiết */}
      <AddressInputModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        value={formValues}
        onValueChange={onValueChange}
        // useRegions={useRegions}
        // useCounties={useCounties}
        // useWards={useWards}
      />
    </div>
  );
};
