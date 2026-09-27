import { CreateListingForm } from "@/components/forms/create-listing-form";

export default function CreateListingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold">
        Create listing
      </h1>

      <div className="mt-6">
        <CreateListingForm />
      </div>
    </div>
  );
}