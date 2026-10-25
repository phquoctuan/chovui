// app/(public)/listing/[identifier]/page.tsx
import { db } from "@/db";
import { listings } from "@/db/schema";
import { eq, or } from "drizzle-orm";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

import { ListingDetail } from "@/components/listings/listing-detail";//old
import { ListingDetailContainer } from "@/components/listings/ListingDetailContainer";

interface Props {
  params: Promise<{ identifier: string }>;
}

export default async function ListingDetailPage({ params }: Props) {
  const { identifier } = await params;

  // Regex kiểm tra xem identifier có phải là UUID hay không
  const isUuid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      identifier,
    );

  // Query linh hoạt theo ID hoặc Slug
  const listing = await db.query.listings.findFirst({
    where: isUuid ? eq(listings.id, identifier) : eq(listings.slug, identifier),
  });

  if (!listing) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              render={<Link href="/" />}
            >
              Trang chủ
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>
              Chi tiết tin đăng
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <ListingDetailContainer listing={listing} />
    </main>

  );
}
