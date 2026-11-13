import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

import { Link } from "@/i18n/navigation";

import { CreateListingForm } from "@/components/forms/create-listing-form";
import { PageBreadcrumbs } from "@/components/common/page-breadcrumb";

export default function CreateListingPage() {
  return (
    <main className="flex-1 container mx-auto px-4 py-4 pb-28"> {/* Thêm pb-28 để tránh nội dung bị nút sticky che mất ở cuối trang */}
      {/* Breadcrumb */}
      <PageBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tin đã đăng", href: "/listings" },
          { label: "Đăng tin", href: null },
        ]}
      />
      {/* Form: Bỏ max-w-4xl và px-4 để chiếm toàn bộ bề ngang màn hình */}
      <div className="w-full max-w-4xl py-4 mx-auto">
        <CreateListingForm />
      </div>
    </main>
  );
}