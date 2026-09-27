import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import {
  type ListingQuery,
} from "@/data/listings";
import { listingQuerySchema } from "@/lib/validations/listing-schema";
import { ListingService } from "@/lib/services/listing-service";
import { requireSession } from "@/lib/auth-session";
import { handleApiError } from "@/lib/errors/handle-api-error";
import { listingCreateSchema } from "@/lib/validations/listing-create-schema";
//// Server API layer
// API Route
//    ↓ await
// ListingService
//    ↓ await
// ListingRepository
//    ↓
// Mock data
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const rawQuery = {
    q: searchParams.get("q") ?? undefined,
    country: searchParams.get("country") ?? undefined,
    category: searchParams.get("category") ?? undefined,
    location: searchParams.get("location") ?? undefined,
    minPrice: searchParams.get("minPrice") ?? undefined,
    maxPrice: searchParams.get("maxPrice") ?? undefined,
    page: searchParams.get("page") ?? undefined,
    pageSize: searchParams.get("pageSize") ?? undefined,
  };

  const validationResult =
    listingQuerySchema.safeParse(rawQuery);

  if (!validationResult.success) {
    return Response.json(
      {
        error: {
          code: "INVALID_QUERY",
          message: "Query parameters không hợp lệ",
          details: validationResult.error.issues,
        },
      },
      {
        status: 400,
      },
    );
  }
  // const result = getMockListings(queryParams);
  const result = await ListingService.getListings(validationResult.data);

  return Response.json({
    data: result.listings,
    pagination: {
      currentPage: result.currentPage,
      pageSize: result.pageSize,
      totalItems: result.totalItems,
      totalPages: result.totalPages,
    },
  });
}

export async function POST(request: Request) {
  try {
    const session = await requireSession();

    const body = await request.json();

    const validationResult =
      listingCreateSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: {
            code: "INVALID_BODY",
            message: "Dữ liệu không hợp lệ",
            details: z.treeifyError(validationResult.error),
          },
        },
        { status: 400 },
      );
    }

    const listing =
      await ListingService.createListing(
        session.user.id,
        validationResult.data,
      );

    return NextResponse.json(
      {
        data: listing,
      },
      { status: 201 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}