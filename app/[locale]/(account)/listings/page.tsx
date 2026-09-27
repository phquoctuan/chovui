// Page
//  ↓
// Listing component
//  ↓
// TanStack Query
//  ↓
// getMyListings()
//  ↓
// GET /api/listings/mine
//  ↓
// PostgreSQL
import { Link } from "@/i18n/navigation";
import { MyListings } from "@/components/listings/my-listings";

export default function ListingsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          Tin đăng của tôi
        </h1>

        <Link
          href="/listings/create"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          + Đăng tin mới
        </Link>
      </div>
      <MyListings />
    </div>
  );
}