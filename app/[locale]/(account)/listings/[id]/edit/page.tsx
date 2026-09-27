import { EditListingForm } from "@/components/forms/edit-listing-form";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditListingPage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">
        Chỉnh sửa tin đăng
      </h1>

      <EditListingForm listingId={id} />
    </div>
  );
}