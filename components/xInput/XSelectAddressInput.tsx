"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, X, Plus } from "lucide-react";
import { FieldError as RHFFieldError } from "react-hook-form";
import { cn } from "@/lib/utils";
import { AddressInputModal } from "./AddressInputModal";
import { formatFullAddress, type AddressValue } from "@/lib/helpers/addressHelpers";
import { useRegionNameById } from "@/components/hooks/use-regions";
import { useCountyNameById } from "@/components/hooks/use-counties";
import { useWardNameById } from "@/components/hooks/use-wards";
import type { SellerAddress } from "@/db/schema";
import { AddressItem } from "./AddressItem";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface XSelectAddressInputProps {
  id?: string;
  label?: string;
  floatingLabel?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  hideClearButton?: boolean;
  error?: RHFFieldError;
  formValues: AddressValue;
  onValueChange: (values: AddressValue) => void;
  addresses?: SellerAddress[];
  usePrimaryAsDefault?: boolean;
  defaultCountryCode?: string; // 1. Thêm property defaultCountryCode
}

export const XSelectAddressInput: React.FC<XSelectAddressInputProps> = ({
  id = "select-address-input",
  label = "Địa chỉ",
  floatingLabel,
  required = false,
  disabled = false,
  className = "",
  hideClearButton = false,
  error,
  formValues,
  onValueChange,
  addresses = [],
  usePrimaryAsDefault = false,
  defaultCountryCode = "VN", // Giá trị mặc định nếu không truyền vào
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Xử lý logic khởi tạo khi usePrimaryAsDefault = true và formValues chưa có giá trị
  useEffect(() => {
    if (usePrimaryAsDefault) {
      const hasCurrentValue = Boolean(
        formValues.location || formValues.regionId || formValues.countyId || formValues.wardId
      );
      if (!hasCurrentValue && addresses.length > 0) {
        const primaryAddress = addresses.find((addr) => addr.primary);
        if (primaryAddress) {
          onValueChange({
            countryCode: primaryAddress.countryCode,
            regionId: primaryAddress.regionId,
            countyId: primaryAddress.countyId,
            wardId: primaryAddress.wardId,
            location: primaryAddress.location || "",
          });
        }
      }
    }
  }, [usePrimaryAsDefault, addresses, formValues, onValueChange]);

  const regionName = useRegionNameById(formValues.countryCode ?? "", formValues.regionId ?? null);
  const countyName = useCountyNameById(formValues.regionId ?? null, formValues.countyId ?? null);
  const wardName = useWardNameById(formValues.countyId ?? null, formValues.wardId ?? null);

  const displayText = formatFullAddress({
    location: formValues.location,
    wardName,
    countyName,
    regionName,
  });

  const hasValue = Boolean(
    formValues.location || formValues.regionId || formValues.countyId || formValues.wardId
  );

  const currentFloatingLabel = floatingLabel || label;
  const isFloating = isOpen || isModalOpen || hasValue;

  const handleClearClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onValueChange({
      ...formValues,
      countryCode: defaultCountryCode,
      regionId: null,
      countyId: null,
      wardId: null,
      location: "",
    });
  };

  const handleSelectAddress = (address: SellerAddress) => {
    onValueChange({
      countryCode: address.countryCode,
      regionId: address.regionId,
      countyId: address.countyId,
      wardId: address.wardId,
      location: address.location || "",
    });
    setIsOpen(false);
  };

  const isSelectedAddress = (address: SellerAddress) => {
    return (
      address.regionId === formValues.regionId &&
      address.countyId === formValues.countyId &&
      address.wardId === formValues.wardId &&
      address.location === formValues.location
    );
  };

  const handleOpenChange = (open: boolean) => {
    if (disabled) return;

    if (open && addresses.length === 0) {
      setIsOpen(false);
      // 2. Trường hợp mảng addresses rỗng, khi click vào input thì mở modal với countryCode = defaultCountryCode và các giá trị khác bằng null/rỗng
      onValueChange({
        countryCode: defaultCountryCode,
        regionId: null,
        countyId: null,
        wardId: null,
        location: "",
      });
      setIsModalOpen(true);
    } else {
      setIsOpen(open);
    }
  };

  return (
    <div className="w-full flex flex-col gap-1 relative">
      <Popover open={isOpen && addresses.length > 0} onOpenChange={handleOpenChange}>
        <PopoverTrigger>
          {/* Giao diện input nằm trực tiếp trong PopoverTrigger */}
          <div
            data-invalid={!!error}
            className={cn(
              `relative flex items-center w-full rounded-lg border px-3 pt-5 pb-2 transition-all duration-300 ease-in-out bg-white cursor-pointer select-none text-left
              border-gray-300 hover:border-black shadow-sm`,
              error && "border-red-500 hover:border-red-500 focus-within:border-red-500",
              disabled && "bg-gray-100 cursor-not-allowed opacity-75",
              className
            )}
          >
            {/* Floating Label */}
            <span
              className={cn(
                `absolute left-3 right-8 flex items-center justify-between pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left`,
                isFloating
                  ? "top-2 text-xs text-gray-600 font-semibold opacity-100 scale-100"
                  : "top-1/2 -translate-y-1/2 text-sm text-gray-400 font-normal opacity-0 scale-95 pointer-events-none"
              )}
            >
              <span className="flex items-center gap-0.5 truncate">
                {currentFloatingLabel}
                {required && <span className="font-bold">*</span>}
              </span>
            </span>

            {/* Center Label */}
            <span
              className={cn(
                `absolute left-3 flex items-center gap-0.5 pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left`,
                !isFloating
                  ? "top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium opacity-100 scale-100"
                  : "top-2 text-xs text-transparent opacity-0 scale-95 pointer-events-none"
              )}
            >
              {label}
              {required && <span className="font-bold">*</span>}
            </span>

            {/* Display Text */}
            <div className="w-full bg-transparent text-sm text-gray-900 pt-2 pr-12 flex items-center gap-2 min-h-[22px]">
              <span className="truncate">{displayText || ""}</span>
            </div>

            {/* Right Actions */}
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
              <ChevronDown
                className={cn("size-4 shrink-0 text-gray-400 transition-transform duration-200", isOpen && "rotate-180")}
              />
            </div>
          </div>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className="w-full p-1.5 max-h-72 overflow-y-auto flex flex-col gap-1 shadow-lg z-50 bg-white"
        >
          {addresses.map((address) => (
            <AddressItem
              key={address.id}
              address={address}
              onSelect={handleSelectAddress}
              isSelected={isSelectedAddress(address)}
            />
          ))}

          {/* Button: Nhập địa chỉ khác... */}
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              // 2. Khi bấm "Nhập địa chỉ khác...", reset các giá trị về null/rỗng và truyền countryCode = defaultCountryCode
              onValueChange({
                countryCode: defaultCountryCode,
                regionId: null,
                countyId: null,
                wardId: null,
                location: "",
              });
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm font-medium text-primary-600 hover:bg-blue-50 transition-colors text-left border-t border-gray-100 mt-1"
          >
            <Plus className="w-4 h-4" />
            <span>Nhập địa chỉ khác...</span>
          </button>
        </PopoverContent>
      </Popover>

      {/* Error text */}
      {error && <span className="text-xs text-red-500 mt-0.5">{error.message}</span>}

      {/* Modal Popup Chi Tiết */}
      <AddressInputModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        value={{
          countryCode: defaultCountryCode,
          regionId: null,
          countyId: null,
          wardId: null,
          location: "",
        }}
        onValueChange={onValueChange}
      />
    </div>
  );
};