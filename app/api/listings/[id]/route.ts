import { NextResponse } from "next/server";
import { requireSession } from "@/lib/auth-session";
import { handleApiError } from "@/lib/errors/handle-api-error";
import { ListingService } from "@/lib/services/listing-service";
import { listingUpdateSchema } from "@/lib/validations/listing-update-schema";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(
  request: Request,
  { params }: RouteContext,
) {
  try {
    const session = await requireSession();

    const { id } = await params;

    const body = await request.json();

    const validationResult = listingUpdateSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: {
            code: "INVALID_BODY",
            message: "Dữ liệu không hợp lệ",
            details: validationResult.error.flatten(),
          },
        },
        { status: 400 },
      );
    }

    const listing =
      await ListingService.updateListing(
        id,
        session.user.id,
        validationResult.data,
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

    return NextResponse.json({
      data: listing,
    });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function GET(
    _request: Request,
    { params }: RouteContext,
  ) {
    try {
      const session = await requireSession();

      const { id } = await params;

      const listing =
        await ListingService.getListingForUser(
          id,
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

      return NextResponse.json({
        data: listing,
      });
    } catch (error) {
      return handleApiError(error);
    }
}