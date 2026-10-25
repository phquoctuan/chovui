import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

import { Link } from "@/i18n/navigation";

import { EditListingForm } from "@/components/forms/edit-listing-form";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditListingPage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              render={<Link href="/listings" />}
            >
              Tin đăng
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>
              Chỉnh sửa
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Form */}
      <EditListingForm listingId={id} />
    </div>
  );
}