import { db } from '@/db';
import { categories, categoryTranslations } from "@/db/schema"; // Import schema bạn vừa gửi
import { viCategoryData } from "./categories_vn";
// Hàm chuyển đổi string thành slug chuẩn URL
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Bỏ dấu tiếng Việt (nếu có)
    .replace(/[đĐ]/g, "d")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .trim();
}

function truncateSlug(slug: string, maxLength: number = 50): string {
  if (slug.length <= maxLength) {
    return slug;
  }
  // Cắt chuỗi tại vị trí maxLength
  const sliced = slug.slice(0, maxLength);
  // Tìm vị trí dấu gạch ngang cuối cùng trong chuỗi đã cắt
  const lastHyphenIndex = sliced.lastIndexOf('-');
  // Nếu tìm thấy dấu -, cắt bỏ từ vị trí đó trở đi để trọn vẹn từ trước
  if (lastHyphenIndex !== -1) {
    return sliced.slice(0, lastHyphenIndex);
  }
  // Trường hợp không tìm thấy dấu - nào, bắt buộc phải trả về chuỗi cắt theo maxLength
  return sliced;
}

// Cấu trúc dữ liệu đã gán sẵn template và chuẩn hóa cấu trúc
const categoryData = [
  {
    name: "Real Estate",
    template: "real-estate",
    children: ["Buy & Sell", "Rentals", "Property Projects"]
  },
  {
    name: "Vehicles",
    template: "vehicles",
    children: [
      "Cars", "Motorcycles", "Trucks & Dump Trucks", 
      "Bicycles", "Other Vehicles", "Vehicle Parts & Accessories"
    ]
  },
  {
    name: "Electronics",
    template: "electronics",
    children: [
      "Mobile Phones", "Tablets", "Laptops", "Desktop Computers",
      "Cameras & Camcorders", "TVs & Audio", "Wearable Technology",
      "Accessories (Monitors, Mice, etc.)", "Computer Components (RAM, Graphics Cards, etc.)"
    ]
  },
  {
    name: "Jobs",
    template: "jobs",
    children: [
      "Sales Assistants", "Accounting", "Construction", "Cashiers", "Receptionists",
      "Teachers", "Tutors", "Design", "Nannies", "Waitstaff", "Sales Representatives",
      "Office Staff", "Warehouse & Logistics Staff", "Computer Technicians",
      "Customer Service", "Factory Workers", "Security Guards", "Secretaries",
      "Healthcare", "Drivers", "Janitorial Staff", "Bartenders & Baristas",
      "Chefs", "Kitchen Assistants", "Electricians", "Mechanics",
      "Vehicle Repair Technicians", "Welders", "Lathe Operators", "Masons",
      "Tailors", "Barbers", "Carpenters", "Nail Technicians", "Domestic Helpers",
      "Spa Technicians", "Promotional Staff", "Telesales Representatives", "Other Jobs"
    ]
  },
  {
    name: "Home Services",
    template: "home-services",
    children: [
      "House Cleaning Services", "Moving Services", 
      "Appliance Repair & Maintenance", "Other Home Services"
    ]
  },
  {
    name: "Pets",
    template: "pets",
    children: [
      "Chickens", "Dogs", "Birds", "Cats", 
      "Other Pets", "Pet Supplies, Food & Services"
    ]
  },
  {
    name: "Food & Groceries",
    template: "food",
    children: [
      "Candy, Snacks & Confectionery", "Butter, Dairy & Eggs", 
      "Dried Foods, Fish Sauce & Seasonings", "Beverages", 
      "Vegetables, Root Vegetables & Fruits", "Meat & Fish", 
      "Ready-to-Eat Foods", "Seafood", "Other Food Products"
    ]
  },
  {
    name: "Refrigerators, Air Conditioners & Washing Machines",
    template: "appliances",
    children: ["Refrigerators", "Air Conditioners", "Washing Machines"]
  },
  {
    name: "Home & Garden",
    template: "home-garden",
    children: [
      "Tables & Chairs", "Cabinets & Shelving", "Beds, Bedding & Mattresses",
      "Stoves, Ovens & Kitchen Appliances", "Kitchen Utensils", "Fans",
      "Lighting", "Plants & Home Décor", "Bathroom & Sanitary Fixtures", 
      "Other Furniture & Household Goods"
    ]
  },
  {
    name: "Baby & Kids",
    template: "baby-kids",
    children: ["Maternity & Nursing Products", "Baby & Kids' Toys"]
  },
  {
    name: "Fashion & Personal Items",
    template: "fashion",
    children: [
      "Clothing", "Watches", "Shoes & Footwear", 
      "Bags & Handbags", "Perfumes & Fragrances", "Other Fashion Accessories"
    ]
  },
  {
    name: "Entertainment, Sports & Hobbies",
    template: "hobbies",
    children: [
      "Musical Instruments", "Books", "Sports & Outdoor Equipment", 
      "Collectibles & Antiques", "Gaming Equipment", "Other Hobby Items"
    ]
  },
  {
    name: "Tools & Equipment",
    template: "tools",
    children: [
      "Office Supplies", "Work Equipment", "Agricultural & Industrial Machinery",
      "Specialized Equipment", "Seeds & Breeding Stock", "Other Machinery & Equipment"
    ]
  },
  {
    name: "Services & Travel",
    template: "services",
    children: ["Services", "Travel"]
  }
];

// Hàm thực thi seed đệ quy
async function seedCategories() {
  console.log("🌱 Bắt đầu seeding categories...");

  for (let i = 0; i < categoryData.length; i++) {
    const parentGroup = categoryData[i];
    const parentSlug = slugify(parentGroup.name);

    // 1. Chèn danh mục gốc (Root Category)
    const [insertedParent] = await db.insert(categories).values({
      name: parentGroup.name,
      slug: parentSlug,
      parentId: null,
      template: parentGroup.template,
      sortOrder: i + 1,
    }).returning({ id: categories.id });

    const parentId = insertedParent.id;

    // 2. Chèn danh mục con (Children Categories)
    if (parentGroup.children && parentGroup.children.length > 0) {
      const childrenValues = parentGroup.children.map((childName, index) => {
        const childSlug = slugify(childName);
        // Lấy từ đầu tiên của childName (VD: "Seeds & Breeding Stock" -> "Seeds")
        const firstWord = childName.trim().split(/\s+/)[0];
        const firstchildSlug = slugify(firstWord);
        return {
          name: childName,
          slug: `${parentSlug}-${childSlug}`, // Kết quả: vehicles-cars
          parentId: parentId,
          // 🚀 Tạo template theo đúng ý bạn: parentTemplate + "/" + generate(childName)
          template: `${parentGroup.template}/${firstchildSlug}`, // Kết quả: vehicles/cars
          order: index + 1,
        };
      });

      await db.insert(categories).values(childrenValues);
    }
  }

  console.log("✅ Seed categories thành công!");
}

async function seedCategoriesAndTranslations() {
  console.log("🌱 Bắt đầu seeding categories và categoryTranslations (vi)...");

  for (let i = 0; i < categoryData.length; i++) {
    const parentGroup = categoryData[i];
    const viParentGroup = viCategoryData[i];

    const parentSlug = slugify(parentGroup.name);

    // 1. Chèn danh mục gốc vào bảng `categories`
    const [insertedParent] = await db.insert(categories).values({
      name: parentGroup.name,
      slug: parentSlug,
      parentId: null,
      template: parentGroup.template,
      isActive: true,
      sortOrder: i + 1,
    }).returning({ id: categories.id });

    const parentId = insertedParent.id;
    const viParentSlug = slugify(viParentGroup.name);
    // 2. Chèn bản dịch tiếng Việt cho danh mục gốc vào `categoryTranslations`
    await db.insert(categoryTranslations).values({
      categoryId: parentId,
      locale: "vi",
      name: viParentGroup.name,
      slug: viParentSlug, // Có thể dùng chung slug chuẩn hóa hoặc slug tiếng Việt riêng
    });

    // 3. Xử lý danh mục con (Children)
    if (parentGroup.children && parentGroup.children.length > 0) {
      for (let j = 0; j < parentGroup.children.length; j++) {
        const childName = parentGroup.children[j];
        const viChildName = viParentGroup.children[j];

        // Lấy từ đầu tiên theo ý bạn trước đó để làm slug/template gọn gàng
        // const firstWord = childName.trim().split(/\s+/)[0];
        const childSlugPart = slugify(childName);

        // const viFirstWord = viChildName.trim().split(/\s+/)[0];
        const viChildSlugPart = slugify(viChildName);

        // const childSlug = `${parentSlug}-${childSlugPart}`;
        // Kiểm tra điều kiện chứa parentSlug
        let rawChildSlug = childSlugPart.includes(parentSlug)
          ? childSlugPart
          : `${parentSlug}-${childSlugPart}`;

        // Giới hạn độ dài tối đa 150 ký tự
        const childSlug = rawChildSlug.slice(0, 150);

        // const viChildSlug = `${viParentSlug}-${viChildSlugPart}`;
        let rawViChildSlug = viChildSlugPart.includes(viParentSlug)
          ? viChildSlugPart
          : `${viParentSlug}-${viChildSlugPart}`;

        const viChildSlug = rawViChildSlug.slice(0, 150);

        let rawchildTemplate = `${parentGroup.template}_${childSlug}`;
        const childTemplate = truncateSlug(rawchildTemplate, 50);

        // Chèn vào bảng `categories`
        const [insertedChild] = await db.insert(categories).values({
          name: childName,
          slug: childSlug,
          parentId: parentId,
          template: childTemplate,
          sortOrder: j + 1,
        }).returning({ id: categories.id });

        const childId = insertedChild.id;

        // Chèn bản dịch tiếng Việt cho danh mục con vào `categoryTranslations`
        await db.insert(categoryTranslations).values({
          categoryId: childId,
          locale: "vi",
          name: viChildName,
          slug: viChildSlug,
        });
      }
    }
  }

  console.log("✅ Seed thành công toàn bộ categories và categoryTranslations (vi)!");
}

/////////////////////////////////////////////
async function main() {
  seedCategoriesAndTranslations()
}

main()
  .catch((error) => {
    console.error("Seed failed:");
    console.error(error);
    process.exit(1);
  });