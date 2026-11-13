// API → authentication/session
// Service → nghiệp vụ
// Repository → database
import type {
  ListingQuery,
  ListingResult,
} from "@/data/listings";

import type { ListingCreateInput, ListingUpdateInput } from "@/lib/validations/listing/listing-base-schema";
// import type { ListingUpdateInput } from "@/lib/validations/listing/listing-update-schema.js";
import { ListingRepository } from "@/lib/repositories/listing-repository";
import { getCreateListingSchema } from '@/lib/validations/listing/listing-templates-schema';
import { db } from '@/db';
import { listings } from '@/db/schema';
import { listingQuerySchema } from "@/lib/validations/listing/listing-query-schema";

export class ListingService {
  private static repository = new ListingRepository();

  static async getListings(
    query: ListingQuery,
  ): Promise<ListingResult> {
    return this.repository.findMany(query);
  }

  static async getMyListings(
    userId: string,
  ) {
    return this.repository.findManyByUserId(userId);
  }

  //demo by chatGPT
  static async createListing(
    userId: string,
    data: ListingCreateInput,
  ) {
    return this.repository.create(userId, data);
  }

  //create listing with ListingSchema by Category
  static async createListingByCategory(userId: string, rawFormData: unknown) {
    // Bước 1: Validate nhanh tầng đầu để lấy categoryId (phòng trường hợp client gửi thiếu)
    // Hoặc bạn có thể cast tạm formData để lấy categoryId
    const data = rawFormData as { categoryId?: string };
    
    if (!data.categoryId) {
      return { success: false, error: 'Thiếu thông tin danh mục' };
    }

    // Bước 2: Lấy schema động chính xác cho category đó
    const dynamicSchema = getCreateListingSchema(data.categoryId);
    
    // Bước 3: Parse và Validate toàn bộ object
    const result = dynamicSchema.safeParse(rawFormData);

    if (!result.success) {
      // Trả về lỗi chi tiết cho từng trường (bao gồm cả lỗi ở tầng attributes)
      return { 
        success: false, 
        errors: result.error.flatten().fieldErrors 
      };
    }

    const validatedData = result.data;

    // Bước 4: Lưu vào Database bằng Drizzle ORM
    // validatedData.attributes lúc này đã được ép kiểu và chuẩn hóa an toàn
    await db.insert(listings).values({
      userId,
      title: validatedData.title,
      categoryId: validatedData.categoryId,
      description: validatedData.description,
      price: String(validatedData.price), // Vì cột DB là NUMERIC
      location: validatedData.location,
      attributes: validatedData.attributes, // Lưu trực tiếp vào JSONB
      currencyCode: "đ",
      countryCode: "VN",
      // region: "aa",
      slug:"3535353535353",
    });

    return { success: true };
  }


  static async updateListing(
    listingId: string,
    userId: string,
    data: ListingUpdateInput,
  ) {
    return this.repository.updateByIdForUser(
      listingId,
      userId,
      data,
    );
  }

  static async getPublicListing(listingId: string) {
    return this.repository.findById(listingId);
  }
  
  static async getListingForUser(
    listingId: string,
    userId: string,
  ) {
    return this.repository.findByIdForUser(
      listingId,
      userId,
    );
  }

  static async deleteListing(
    listingId: string,
    userId: string,
  ) {
    return this.repository.deleteByIdForUser(
      listingId,
      userId,
    );
  }


}