import { Header } from "@/components/common/header";
import { CategoriesCarousel } from "@/components/common/categories-carousel";
import { FeaturedAds } from "@/components/common/featured-ads";
import { ListingTabs } from "@/components/common/listing-tabs";
import { SeoIntro } from "@/components/common/seo-intro";
import { PopularSearches } from "@/components/common/popular-searches";
import { PromoBanner } from "@/components/common/promo-banner";
import { Footer } from "@/components/common/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col">
      {/* Header with Categories Button, User Account Manager, Search & Navigation */}
      <Header />

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

      {/* Footer [Hỗ trợ khách hàng, Về Chợ Tốt, Liên kết] */}
      <Footer />
    </div>
  );
}
