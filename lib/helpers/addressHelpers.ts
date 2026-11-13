// import type { Country, Region, County, Ward } from "@/db/schema";

export interface AddressValue {
  countryCode: string;
  regionId: number | null;
  countyId: number | null;
  wardId: number | null;
  location: string;
}

/**
 * Hàm dựng chuỗi hiển thị đầy đủ địa chỉ từ các tên tương ứng
 */
export const formatFullAddress = (params: {
  location?: string;
  wardName?: string;
  countyName?: string;
  regionName?: string;
  countryName?:  string;
}): string => {
  const parts = [
    params.location,
    params.wardName,
    params.countyName,
    params.regionName,
    params.countryName,
  ].filter(Boolean); // Lọc bỏ giá trị rỗng/null/undefined

  return parts.join(", ");
};