import { ListingCard } from "@/components/listing-card";
import { ListingFilter } from "@/components/filters/listing-filter";
import { ListingPagination } from "@/components/listing-pagination";
import {
  getMockListings,
  type ListingQuery,
} from "@/data/listings";

type SearchPageProps = {
  searchParams: Promise<ListingQuery>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const queryParams = await searchParams;

  const {
    listings,
    totalItems,
    totalPages,
  } = getMockListings(queryParams);

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
          {listings.length === 0 ? (
            <p className="text-muted-foreground">
              Không tìm thấy tin đăng phù hợp.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {listings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  title={listing.title}
                  price={listing.price}
                  location={listing.location}
                />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <ListingPagination totalPages={totalPages} />
          )}
        </section>
      </div>
    </main>
  );
}