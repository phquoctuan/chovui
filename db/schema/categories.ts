// db/schema/categories.ts
import { pgTable, serial, varchar, integer, timestamp, index, foreignKey, unique, boolean } from "drizzle-orm/pg-core";

export const categories = pgTable(
  "categories",
  {
    // Dùng serial cho id (tự động tăng từ 1, 2, 3...)
    // id: serial("id").primaryKey(),
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    groupId: integer("group_id"),//1: RealEstate, 2: Job, 3: Vehicles, 4: Electronics, 0: Other
    // Tên hiển thị (Ví dụ: "Bất động sản", "Mua & Bán")
    name: varchar("name", { length: 150 }).notNull(),

    // Đường dẫn tĩnh cho URL (Ví dụ: "real-estate", "buy-sell")
    slug: varchar("slug", { length: 150 }).notNull().unique(),

    // Khóa ngoại trỏ đến danh mục cha (Null nếu là danh mục gốc - Root Category)
    parentId: integer("parent_id"),

    // Field lưu tên Template giao diện ở Frontend (Ví dụ: 'real-estate', 'vehicles', 'default')
    // Các danh mục con có thể kế thừa template của danh mục cha hoặc có template riêng
    template: varchar("template", { length: 50 }).notNull().default('default'),
    sortOrder: integer("sort_order").default(0).notNull(),
    isActive: boolean("is_active").notNull().default(true),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    // Thiết lập quan hệ tự tham chiếu (Self-referencing FK) cho danh mục cha - con
    foreignKey({
      columns: [table.parentId],
      foreignColumns: [table.id],
    }).onDelete("cascade"),
    // Đánh index để tối ưu tốc độ truy vấn danh mục
    index("categories_slug_idx").on(table.slug),
    index("categories_parent_id_idx").on(table.parentId),
  ],
);

// 2. Bảng chứa nội dung đa ngôn ngữ cho từng danh mục
export const categoryTranslations = pgTable(
  "category_translations",
  {
    id: serial("id").primaryKey(),
    categoryId: integer("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
    
    locale: varchar("locale", { length: 10 }).notNull(), // Ví dụ: 'vi', 'en', 'ja'
    name: varchar("name", { length: 150 }).notNull(),   // Tên danh mục theo ngôn ngữ
    slug: varchar("slug", { length: 150 }).notNull(),   // Slug theo ngôn ngữ (VD: 'bat-dong-san' hoặc 'real-estate')
  },
  (table) => [
    // Đảm bảo mỗi ngôn ngữ có một slug duy nhất và không bị trùng lặp
    unique("category_locale_slug_idx").on(table.slug, table.locale),
    // Đánh index phục vụ việc query theo ngôn ngữ cực nhanh
    index("category_translations_locale_idx").on(table.locale),
    index("category_translations_category_id_idx").on(table.categoryId),
  ]
);

export type Caterory = typeof categories.$inferSelect;
export type NewCaterory = typeof categories.$inferInsert;

/////////////////////////usage
// import { categories, categoryTranslations } from '@/db/schema';
// import { eq, and, sql } from 'drizzle-orm';
// const currentLocale = 'en'; // Ngôn ngữ người dùng đang xem
// const localizedCategories = await db
//   .select({
//     id: categories.id,
//     parentId: categories.parentId,
//     template: categories.template,
//     // Nếu bảng translation có name thì lấy, không có thì lấy name mặc định từ bảng categories
//     name: sql<string>`COALESCE(${categoryTranslations.name}, ${categories.name})`,
//     // Tương tự cho slug
//     slug: sql<string>`COALESCE(${categoryTranslations.slug}, ${categories.slug})`,
//   })
//   .from(categories)
//   .leftJoin(
//     categoryTranslations,
//     and(
//       eq(categories.id, categoryTranslations.categoryId),
//       eq(categoryTranslations.locale, currentLocale)
//     )
//   );