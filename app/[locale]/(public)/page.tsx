import { CategoriesCarousel } from "@/components/common/categories-carousel";
import { FeaturedAds } from "@/components/common/featured-ads";
import { ListingTabs } from "@/components/common/listing-tabs";
import { SeoIntro } from "@/components/common/seo-intro";
import { PopularSearches } from "@/components/common/popular-searches";
import { PromoBanner } from "@/components/common/promo-banner";

export default function HomePage() {
  return (
    <>
      {/* Categories Carousel */}
      <CategoriesCarousel />

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 py-4">
        {/* Tin được trả phí cao */}
        <FeaturedAds />

        {/* Tab Tin hot [Dành cho bạn], [Mới nhất]... */}
        <ListingTabs />

        {/* Promotional Banner */}
        <PromoBanner />

        {/* Giới thiệu [Chợ Tốt] */}
        <SeoIntro />

        {/* Danh mục tìm kiếm nổi bật */}
        <PopularSearches />
      </main>
    </>
  );
}
