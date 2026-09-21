import { ListingFilter } from "@/components/filters/listing-filter";
import { ListingPagination } from "@/components/listing-pagination";
import { ListingSearchResults } from "@/components/listing-search-results";
import type { ListingQuery } from "@/data/listings";

type SearchPageProps = {
  searchParams: Promise<ListingQuery>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const queryParams = await searchParams;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-bold">
        Kết quả tìm kiếm
      </h1>

      <p className="mt-2 text-muted-foreground">
        Từ khóa: {queryParams.q || "Tất cả"}
      </p>

      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        <ListingFilter />

        <section className="min-w-0 flex-1">
          <ListingSearchResults query={queryParams} />
        </section>
      </div>
    </main>
  );
}