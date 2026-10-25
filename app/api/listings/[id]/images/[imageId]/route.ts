import { NextResponse } from "next/server";

import { requireSession } from "@/lib/auth-session";
import { handleApiError } from "@/lib/errors/handle-api-error";
import { ListingService } from "@/lib/services/listing-service";
import { ListingImageService } from "@/lib/services/listing-image-service";

type RouteContext = {
  params: Promise<{
    id: string;
    imageId: string;
  }>;
};

export async function DELETE(
  _request: Request,
  { params }: RouteContext,
) {
  try {
    const session = await requireSession();

    const {
      id: listingId,
      imageId,
    } = await params;

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

    const image =
      await ListingImageService.deleteImage(
        imageId,
        listingId,
      );

    if (!image) {
      return NextResponse.json(
        {
          error: {
            code: "NOT_FOUND",
            message: "Không tìm thấy hình ảnh",
          },
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      data: image,
    });
  } catch (error) {
    return handleApiError(error);
  }
}