// lib/cache/categories.ts
import { db } from '@/db';
import { categories } from '@/db/schema';
import { unstable_cache } from 'next/cache';

// Hàm lấy toàn bộ danh mục và cache lại
export const getCachedCategories = unstable_cache(
  async () => {
    // console.log('Đang fetch lại danh mục từ DB (Bỏ qua cache)...');
    const cates = await db.select().from(categories);
    const categoryMap = new Map(cates.map((cat) => [cat.id, cat]));
    return categoryMap;
  },
  ['categories-cache-key'], // Khóa định danh cache
  {
    revalidate: 36000, // Tự động làm mới cache sau 10 tiếng (hoặc dùng revalidateTag khi update)
    tags: ['categories'],
  }
);

export async function getTemplateByCategoryId(categoryId: number): Promise<string> {
  // 1. Lấy toàn bộ danh mục từ cache (Dữ liệu đã nằm trên RAM, không tốn query DB)
  const categoryMap = await getCachedCategories();

  let currentId: number | null = categoryId;
  let finalTemplate = 'default';

  // 3. Vòng lặp duyệt ngược từ danh mục hiện tại lên danh mục cha (Hierarchical Fallback)
  while (currentId !== null) {
    const category = categoryMap.get(currentId);
    
    if (!category) break;

    // Nếu tìm thấy template được cấu hình riêng (và khác 'default'), ưu tiên lấy luôn
    if (category.template && category.template !== 'default') {
      finalTemplate = category.template;
      break;
    }
    // Ghi nhận template hiện tại làm fallback tạm thời
    if (category.template) {
      finalTemplate = category.template;
    }
    // Tiếp tục di chuyển lên danh mục cha cấp cao hơn
    currentId = category.parentId;
  }

  return finalTemplate;
}