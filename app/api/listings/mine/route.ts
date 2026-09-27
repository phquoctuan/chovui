import { NextResponse } from "next/server";

import { requireSession } from "@/lib/auth-session";
import { handleApiError } from "@/lib/errors/handle-api-error";
import { ListingService } from "@/lib/services/listing-service";

export async function GET() {
  try {
    const session = await requireSession();

    const listings =
      await ListingService.getMyListings(
        session.user.id,
      );

    return NextResponse.json({
      data: listings,
    });
  } catch (error) {
    return handleApiError(error);
  }
}