"use client";

import React, { useState, useEffect } from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { XAddressSelect } from "@/components/xInput/XAddressSelect";
import { XTextInput } from "@/components/xInput/XTextInput"; // Sử dụng XTextInput có sẵn của bạn cho "Địa chỉ cụ thể"
import type { AddressValue } from "@/lib/helpers/addressHelpers";
import {Region, County, Ward} from "@/db/schema"
// import {useCountryNameByCode} from "@/components/hooks/use-countries";
import {useRegions} from "@/components/hooks/use-regions";
import {useCounties} from "@/components/hooks/use-counties";
import {useWards} from "@/components/hooks/use-wards";

interface AddressInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  value: AddressValue;
  onValueChange: (val: AddressValue) => void;
  // Các hook truyền vào hoặc gọi trực tiếp tại đây
  // useRegions: (countryCode: string) => { data: Region[] | undefined; isLoading?: boolean };
  // useCounties: (regionId: number | null) => { data: County[] | undefined; isLoading?: boolean };
  // useWards: (countyId: number | null) => { data: Ward[] | undefined; isLoading?: boolean };
}

export const AddressInputModal: React.FC<AddressInputModalProps> = ({
  isOpen,
  onClose,
  value,
  onValueChange,
  // useRegions,
  // useCounties,
  // useWards,
}) => {
  const [regionId, setRegionId] = useState<number | null>(value.regionId);
  const [countyId, setCountyId] = useState<number | null>(value.countyId);
  const [wardId, setWardId] = useState<number | null>(value.wardId);
  const [location, setLocation] = useState<string>(value.location);

  // Đồng bộ lại state tạm khi modal mở lên
  useEffect(() => {
    if (isOpen) {
      setRegionId(value.regionId);
      setCountyId(value.countyId);
      setWardId(value.wardId);
      setLocation(value.location);
    }
  }, [isOpen, value]);

  // Lấy dữ liệu danh sách Tỉnh/Thành phố theo quốc gia
  const { data: regions = [] } = useRegions(value.countryCode);
  const selectedRegion = regions.find((r) => r.id === regionId);
  const hasCounty = selectedRegion ? selectedRegion.hasCounty : false;

  // Lấy danh sách Quận/Huyện theo regionId
  const { data: counties = [] } = useCounties(regionId);
  const selectedCounty = counties.find((c) => c.id === countyId);
  const hasWard = selectedCounty ? selectedCounty.hasWard : false;

  // Lấy danh sách Phường/Xã theo countyId
  const { data: wards = [] } = useWards(countyId);

  // 5. Khi quay lại đổi Tỉnh/Thành phố -> clear countyId và wardId
  const handleRegionChange = (newRegionId: number | null) => {
    setRegionId(newRegionId);
    setCountyId(null);
    setWardId(null);
  };

  const handleCountyChange = (newCountyId: number | null) => {
    setCountyId(newCountyId);
    setWardId(null);
  };

  // 6. Bấm nút [Xong] -> Cập nhật form values và đóng modal
  const handleComplete = () => {
    onValueChange({
      countryCode: value.countryCode,
      regionId,
      countyId: hasCounty ? countyId : null,
      wardId: hasCounty && hasWard ? wardId : null,
      location,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Modal */}
        <div className="flex items-center justify-between border-b pb-3">
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-base font-semibold text-gray-800">Địa chỉ</h2>
          <div className="w-7" />
        </div>

        {/* 1. Tỉnh, Thành phố * */}
        <XAddressSelect
          id="modal-region"
          label="Tỉnh/Thành phố"
          floatingLabel="Tỉnh/Thành phố:"
          required
          value={regionId}
          options={regions}
          disabled={regions.length === 0}
          onValueChange={handleRegionChange}
          searchPlaceholder="Tìm tỉnh, thành phố..."
          hideClearButton
        />

        {/* 2. Quận, Huyện, Thị Xã (Nếu hasCounty = false vẫn hiển thị nhưng bị disable) */}
        <XAddressSelect
          id="modal-county"
          label="Quận/Huyện/Thị xã"
          floatingLabel="Quận/Huyện/Thị xã:"
          required={hasCounty}
          value={countyId}
          options={counties}
          // disabled={!hasCounty || counties.length === 0}
          disabled={!hasCounty}
          onValueChange={handleCountyChange}
          searchPlaceholder="Tìm quận, huyện..."
        />

        {/* 3. Phường, Xã, Thị Trấn * (Chỉ hiển thị khi hasCounty và hasWard thỏa mãn) */}
        {hasCounty && (
          <XAddressSelect
            id="modal-ward"
            label="Phường/Xã/Thị trấn"
            floatingLabel="Phường/Xã/Thị trấn"
            required={hasWard}
            value={wardId}
            options={wards}
            // disabled={!hasWard || wards.length === 0}
            disabled={!hasWard}
            onValueChange={(id) => setWardId(id)}
            searchPlaceholder="Tìm phường, xã..."
          />
        )}

        {/* 4. Địa chỉ cụ thể (XTextInput luôn hiển thị, không bị disable) */}
        <XTextInput
          id="modal-location"
          label="Địa chỉ cụ thể"
          floatingLabel="Địa chỉ cụ thể:"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onValueChange={(val) => setLocation(val)}
          placeholder="Số nhà, tên đường..."
        />

        {/* Nút XONG */}
        <button
          type="button"
          onClick={handleComplete}
          className="w-full bg-primary hover:bg-amber-500 text-black font-bold py-3 rounded-xl transition-colors mt-2 cursor-pointer shadow-sm"
        >
          XONG
        </button>
      </div>
    </div>
  );
};
