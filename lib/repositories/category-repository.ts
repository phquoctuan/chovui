import { eq, and, or, ilike, asc, isNull, sql } from "drizzle-orm";
import { db } from "@/db";
// import { countries, type Country } from "@/db/schema/countries";
import { categories, categoryTranslations, type Caterory } from "@/db/schema/categories";

export type CategorySearchOptions = {
  query?: string;
  activeOnly?: boolean;
  locale?: string;
};

export type CategoryTree = Awaited<ReturnType<typeof listCategories>>;

//use for useCategories(local: string)
export async function listCategories({
  activeOnly = true,
  locale = "vi",
}: CategorySearchOptions) {
  // Xây dựng điều kiện query cơ bản
  const conditions = [];
  if (activeOnly) {
    conditions.push(eq(categories.isActive, true));
  }
  console.log("local:", locale)
  const allCategories = await db
    .select({
      id: categories.id,
      parentId: categories.parentId,
      slug: categories.slug,
      template: categories.template,
      sortOrder: categories.sortOrder,
      orginalName: categories.name,
      name: categoryTranslations.name,
      translatedSlug: categoryTranslations.slug,
    })
    .from(categories)
    .leftJoin(
      categoryTranslations,
      and(
        eq(categoryTranslations.categoryId, categories.id),
        eq(categoryTranslations.locale, locale)
      )
    )
    .where(conditions.length > 0 ? and(...conditions) : undefined)
    .orderBy(asc(categories.sortOrder));

  // Chuẩn hóa tên và slug theo ngôn ngữ
  const formattedCategories = allCategories.map((cat) => ({
    ...cat,
    name: cat.name || cat.orginalName,
    slug: cat.translatedSlug || cat.slug,
    originalslug: cat.slug,
  }));

  // Xây dựng cây danh mục (Root & Children)
  const rootCategories = formattedCategories.filter((c) => c.parentId === null);
  
  const tree = rootCategories.map((root) => ({
    ...root,
    children: formattedCategories.filter((c) => c.parentId === root.id),
  }));

  return tree;
}

export async function getCategories({
  query,
  activeOnly = true,
  locale = "vi",
}: CategorySearchOptions) {
  const q = query?.trim();

  // Bước 1: Tạo subquery (giống như một bảng tạm đã join sẵn và coalesce tên/slug)
  const subQuery = db
    .select({
      id: categories.id,
      parentId: categories.parentId,
      template: categories.template,
      sortOrder: categories.sortOrder,
      isActive: categories.isActive,
      // Đặt tên chung đại diện cho các trường đa ngôn ngữ hoặc gốc
      name: sql<string>`COALESCE(${categoryTranslations.name}, ${categories.name})`.as("name"),
      slug: sql<string>`COALESCE(${categoryTranslations.slug}, ${categories.slug})`.as("slug"),
    })
    .from(categories)
    .leftJoin(
      categoryTranslations,
      and(
        eq(categoryTranslations.categoryId, categories.id),
        eq(categoryTranslations.locale, locale)
      )
    )
    .as("t");

  // Bước 2: Xây dựng điều kiện where chỉ áp dụng cho field của bảng tạm 't'
  const searchCondition = q
    ? or(
        ilike(subQuery.slug, `%${q}%`),
        ilike(subQuery.name, `%${q}%`)
      )
    : undefined;

  const activeCondition = activeOnly
    ? eq(subQuery.isActive, true)
    : undefined;

  const where = and(activeCondition, searchCondition);

  // Bước 3: Query chính trên bảng tạm
  const queryBuilder = db
    .select()
    .from(subQuery)
    .orderBy(asc(subQuery.sortOrder));

  const allCategories = await (where ? queryBuilder.where(where) : queryBuilder);

  // Bước 4: Dựng cấu trúc cây (Tree)
  const rootCategories = allCategories.filter((c) => c.parentId === null);
  
  const tree = rootCategories.map((root) => ({
    ...root,
    children: allCategories.filter((c) => c.parentId === root.id),
  }));

  return tree;
}