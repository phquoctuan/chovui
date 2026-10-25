import { NextResponse } from "next/server";

import { handleApiError } from "@/lib/errors/handle-api-error";
import { ListingService } from "@/lib/services/listing-service";
import { ListingImageService } from "@/lib/services/listing-image-service";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(
  _request: Request,
  { params }: RouteContext,
) {
  try {
    const { id } = await params;

    const listing =
      await ListingService.getPublicListing(id);

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

    const images =
      await ListingImageService.getImages(id);

    return NextResponse.json({
      data: images,
    });
  } catch (error) {
    return handleApiError(error);
  }
}