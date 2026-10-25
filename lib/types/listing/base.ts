//not used
//solution by cGPT
// Database: categories + listings + attributes JSONB; thêm bảng chuyên ngành khi cần truy vấn có cấu trúc hoặc tối ưu hiệu năng.
// TypeScript + Zod: BaseListing, các kiểu chuyên ngành, schema xác thực và registry xác định loại tin.
// Next.js: Component dùng chung, form riêng, card riêng và template chi tiết riêng. Route lấy dữ liệu rồi chọn template phù hợp.
export type BaseListing = {
  id: string;
  categoryId: string;
  userId: string;

  title: string;
  slug: string | null;
  description: string | null;

  price: string | null;
  currency: string;

  country: string | null;
  location: string | null;

  status: "draft" | "pending" | "published"
    | "rejected" | "expired";

  publishedAt: Date | null;
  expiresAt: Date | null;
  deletedAt: Date | null;
};
