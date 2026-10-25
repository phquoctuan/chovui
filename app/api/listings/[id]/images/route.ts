import { NextResponse } from "next/server";

import { requireSession } from "@/lib/auth-session";
import { handleApiError } from "@/lib/errors/handle-api-error";
import { ListingService } from "@/lib/services/listing-service";
import { ListingImageService } from "@/lib/services/listing-image-service";
import { listingsImageStorage } from "@/lib/storage";
import { validateListingImageFile } from "@/lib/image/check-image";

type RouteContext = {
  params: Promise<{ id: string }>;
};


export async function POST(
  request: Request,
  { params }: RouteContext,
) {
  try {
    const session = await requireSession();

    const { id: listingId } = await params;

    // 1. Kiểm tra listing thuộc user hiện tại
    const listing =
      await ListingService.getListingForUser(
        listingId,
        session.user.id,
      );

    if (!listing) {
      return NextResponse.json(
        {
          error: {
            code: "NOT_FOUND",
            message: "Không tìm thấy tin đăng",
          },
        },
        { status: 404 },
      );
    }

    // 2. Đọc multipart/form-data
    const formData = await request.formData();

    const file = formData.get("file");

    const sortOrderValue =
      formData.get("sortOrder");

    // 3. Kiểm tra file
    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          error: {
            code: "INVALID_FILE",
            message: "File hình ảnh là bắt buộc",
          },
        },
        { status: 400 },
      );
    }
    const { response: errorResponse } = validateListingImageFile(file);
    if (errorResponse) {
      return errorResponse; // Trả về lỗi nếu không hợp lệ
    }

    // 4. Xử lý sortOrder
    const sortOrder =
      sortOrderValue === null ||
      sortOrderValue === ""
        ? 0
        : Number(sortOrderValue);

    if (
      !Number.isInteger(sortOrder) ||
      sortOrder < 0
    ) {
      return NextResponse.json(
        {
          error: {
            code: "INVALID_SORT_ORDER",
            message:
              "sortOrder phải là số nguyên không âm",
          },
        },
        { status: 400 },
      );
    }

    // 5. Tạo key lưu file
    const extension =
      file.type === "image/jpeg"
        ? "jpg"
        : file.type === "image/png"
          ? "png"
          : "webp";

    const key =
      `${listingId}/${crypto.randomUUID()}.${extension}`;

    // 6. Upload file
    const uploaded =
      await listingsImageStorage.upload(file, key);

    // 7. Lưu metadata vào database
    const image =
      await ListingImageService.createImage(
        listingId,
        uploaded.url,
        sortOrder,
      );

    return NextResponse.json(
      {
        data: image,
        // data: {
        //   ...image,
        //   key: uploaded.key,
        // },
      },
      { status: 201 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}