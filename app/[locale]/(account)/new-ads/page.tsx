"use client";

import { useSearchParams, useRouter } from "next/navigation";
import {
  Home,
  Briefcase,
  Car,
  Smartphone,
  ShoppingBag,
  X,
  ChevronRight,
} from "lucide-react";

import { PageBreadcrumbs } from "@/components/common/page-breadcrumb";
import { CreateListingForm } from "@/components/forms/create-listing-form";
import { CreateListingRealEstateForm } from "@/components/forms/create-listing-real-estate-form";
import { CreateListingJobForm } from "@/components/forms/create-listing-job-form";
import { CreateListingVehiclesForm } from "@/components/forms/create-listing-vehicles-form";
import { CreateListingElectronicsForm } from "@/components/forms/create-listing-electronics-form";
import { CreateListingOtherForm } from "@/components/forms/create-listing-other-form";

const CATEGORY_GROUPS = [
  {
    id: "1",
    title: "Bất động sản",
    description: "Nhà, Đất, Chung cư, Phòng trọ,...",
    icon: Home,
    bgStyle: "linear-gradient(135deg, #FF8A4C 0%, #F97316 100%)",
    shadowColor: "shadow-orange-500/25",
  },
  {
    id: "2",
    title: "Việc làm",
    description: "Tuyển dụng",
    icon: Briefcase,
    bgStyle: "linear-gradient(135deg, #60A5FA 0%, #2563EB 100%)",
    shadowColor: "shadow-blue-500/25",
  },
  {
    id: "3",
    title: "Xe cộ",
    description: "Ô tô, Xe máy, Xe tải, Phụ tùng,...",
    icon: Car,
    bgStyle: "linear-gradient(135deg, #F87171 0%, #DC2626 100%)",
    shadowColor: "shadow-red-500/25",
  },
  {
    id: "4",
    title: "Đồ điện tử",
    description: "Điện thoại, Laptop,...",
    icon: Smartphone,
    bgStyle: "linear-gradient(135deg, #FBBF24 0%, #D97706 100%)",
    shadowColor: "shadow-amber-500/25",
  },
  {
    id: "5",
    title: "Sản phẩm khác",
    description: "Thú cưng, Gia dụng, Thời trang,...",
    icon: ShoppingBag,
    bgStyle: "linear-gradient(135deg, #FACC15 0%, #CA8A04 100%)",
    shadowColor: "shadow-yellow-500/25",
  },
];

export default function CreateListingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryGroup = searchParams.get("category_group");

  const renderForm = () => {
    switch (categoryGroup) {
      case "1":
        return <CreateListingRealEstateForm />;
      case "2":
        return <CreateListingJobForm />;
      case "3":
        return <CreateListingVehiclesForm />;
      case "4":
        return <CreateListingElectronicsForm />;
      default:
        return <CreateListingOtherForm />;
      // default:
      //   return <CreateListingForm />;
    }
  };

  return (
    <main className="flex-1 container mx-auto px-4 py-4 pb-28">
      {/* Breadcrumb */}
      <PageBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tin đã đăng", href: "/listings" },
          { label: "Đăng tin", href: null },
        ]}
      />

      {/* Modal chọn danh mục */}
      {!categoryGroup ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          {/* Thêm shadow đậm và nổi bật hơn cho dialog */}
          <div className="w-full max-w-lg rounded-2xl bg-white  overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header Modal - Giảm độ cao bằng cách giảm py từ 4 xuống 3 */}
            <div className="flex items-center justify-between px-5 py-2 border-b border-gray-100 relative">
              <button
                onClick={() => router.back()}
                className="p-1.5 rounded-full hover:bg-gray-100 active:scale-95 text-gray-700 transition-all z-10"
                aria-label="Đóng"
              >
                <X className="w-5 h-5 stroke-[2.2]" />
              </button>
              <h2 className="absolute inset-x-0 text-center text-[18px] font-bold text-gray-900 pointer-events-none">
                Đăng tin
              </h2>
            </div>

            {/* Content Modal */}
            <div className="px-4 pt-4 pb-4 max-h-[85vh] overflow-y-auto">
              {/* Chữ "Chọn danh mục" to lên một chút (15px, đậm hơn) */}
              <h3 className="text-[15px] font-semibold text-gray-700 mb-2">
                Chọn danh mục
              </h3>

              <div className="divide-y divide-gray-100">
                {CATEGORY_GROUPS.map((group) => {
                  const IconComponent = group.icon;
                  return (
                    <button
                      type="button"
                      key={group.id}
                      onClick={() =>
                        router.push(`/vi/new-ads?category_group=${group.id}`)
                      }
                      /* Thêm hiệu ứng hover: nền sáng hơn, bo góc mượt, dịch chuyển nhẹ sang phải */
                      className="w-full flex items-center justify-between py-3.5 px-3 -mx-3 rounded-xl hover:bg-orange-50/50 hover:translate-x-1 active:scale-[0.99] text-left transition-all duration-200 group"
                    >
                      {/* Cụm Icon và Tiêu đề bên trái */}
                      <div className="flex items-center gap-4 min-w-0 pr-2">
                        {/* Icon Box */}
                        <div
                          style={{ background: group.bgStyle }}
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md ${group.shadowColor} shrink-0 group-hover:scale-105 transition-transform duration-200`}
                        >
                          <IconComponent className="w-6 h-6 stroke-[2]" />
                        </div>

                        {/* Tiêu đề & Mô tả */}
                        <div className="min-w-0">
                          <h4 className="text-[15px] font-bold text-gray-900 group-hover:text-orange-600 transition-colors truncate">
                            {group.title}
                          </h4>
                          <p className="text-[13px] text-gray-500 mt-0.5 truncate">
                            {group.description}
                          </p>
                        </div>
                      </div>

                      {/* Mũi tên bên phải đổi màu khi hover */}
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Hiển thị form tương ứng */
        <div className="w-full max-w-4xl py-4 mx-auto">{renderForm()}</div>
      )}
    </main>
  );
}