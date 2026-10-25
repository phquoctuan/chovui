import { NextResponse } from "next/server";
import { requireSession } from "@/lib/auth-session";
import { handleApiError } from "@/lib/errors/handle-api-error";
import { ListingService } from "@/lib/services/listing-service";
import { ListingImageService } from "@/lib/services/listing-image-service";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(
  request: Request,
  { params }: RouteContext,
) {
  try {
    const session = await requireSession();
    const { id: listingId } = await params;

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

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          error: {
            code: "INVALID_JSON",
            message: "Dữ liệu JSON không hợp lệ",
          },
        },
        { status: 400 },
      );
    }

    if (
      typeof body !== "object" ||
      body === null ||
      !("imageIds" in body) ||
      !Array.isArray(body.imageIds) ||
      !body.imageIds.every(
        (id: unknown) => typeof id === "string",
      )
    ) {
      return NextResponse.json(
        {
          error: {
            code: "INVALID_IMAGE_IDS",
            message:
              "imageIds phải là mảng các chuỗi",
          },
        },
        { status: 400 },
      );
    }

    const imageIds = body.imageIds as string[];

    if (new Set(imageIds).size !== imageIds.length) {
      return NextResponse.json(
        {
          error: {
            code: "DUPLICATE_IMAGE_IDS",
            message:
              "Danh sách imageIds không được trùng",
          },
        },
        { status: 400 },
      );
    }

    const images =
      await ListingImageService.reorderImages(
        listingId,
        imageIds,
      );

    return NextResponse.json({
      data: images,
    });
  } catch (error) {
    return handleApiError(error);
  }
}