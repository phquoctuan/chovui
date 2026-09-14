"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import {
  usePathname,
  useRouter,
} from "@/i18n/navigation";


export function ListingFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const locationFromUrl =
  searchParams.get("location") ?? "";

  const minPriceFromUrl =
  searchParams.get("minPrice") ?? "";

  const maxPriceFromUrl =
  searchParams.get("maxPrice") ?? "";

  const [location, setLocation] = useState(
    searchParams.get("location") ?? "",
  );

  const [minPrice, setMinPrice] = useState(
    searchParams.get("minPrice") ?? "",
  );

  const [maxPrice, setMaxPrice] = useState(
    searchParams.get("maxPrice") ?? "",
  );

  useEffect(() => {
    setLocation(locationFromUrl);
  }, [locationFromUrl]);

  useEffect(() => {
    setMinPrice(minPriceFromUrl);
  }, [minPriceFromUrl]);

  useEffect(() => {
    setMaxPrice(maxPriceFromUrl);
  }, [maxPriceFromUrl]);

  function updateFilter(
    name: string,
    value: string,
  ) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    
    // Filter thay đổi → quay về trang đầu tiên
    params.set("page", "1");

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <aside className="w-full space-y-6 lg:w-64">
      {/* Country */}
      <div className="space-y-2">
        <h2 className="font-semibold">
          Quốc gia
        </h2>

        <select
          value={searchParams.get("country") ?? "VN"}
          onChange={(event) =>
            updateFilter(
              "country",
              event.target.value,
            )
          }
          className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm"
        >
          <option value="VN">Việt Nam</option>
          <option value="US">United States</option>
          <option value="JP">Japan</option>
        </select>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <h2 className="font-semibold">
          Danh mục
        </h2>

        <select
          value={searchParams.get("category") ?? ""}
          onChange={(event) =>
            updateFilter(
              "category",
              event.target.value,
            )
          }
          className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm"
        >
          <option value="">Tất cả</option>
          <option value="phone">Điện thoại</option>
          <option value="computer">Máy tính</option>
          <option value="vehicle">Xe</option>
        </select>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <h2 className="font-semibold">
          Khu vực
        </h2>

        <Input
          value={location}
          placeholder="Nhập tỉnh/thành phố"
          onChange={(event) =>
            setLocation(event.target.value)
          }
          onBlur={() =>
            updateFilter("location", location.trim())
          }
        />
      </div>

      {/* Price */}
      <div className="space-y-2">
        <h2 className="font-semibold">
          Khoảng giá
        </h2>

        <div className="flex gap-2">
          <Input
            type="number"
            value={minPrice}
            placeholder="Từ"
            onChange={(event) =>
              setMinPrice(event.target.value)
            }
            onBlur={() =>
              updateFilter("minPrice", minPrice)
            }
          />

          <Input
            type="number"
            value={maxPrice}
            placeholder="Đến"
            onChange={(event) =>
              setMaxPrice(event.target.value)
            }
            onBlur={() =>
              updateFilter("maxPrice", maxPrice)
            }
          />
        </div>
      </div>
    </aside>
  );
}