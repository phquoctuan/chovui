import { NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/services/account-auth";
import { requireSession } from "@/lib/auth-session";
import { handleApiError } from "@/lib/errors/handle-api-error";
import { SellerProfileService } from "@/lib/services/seller-profile-service";
import { sellerProfileSchema } from "@/lib/validations/user/seller-profile";


export async function GET() {
  try {
    const session = await requireSession();
    if (!session) return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
    const userId = session.user.id;
    const profile = await SellerProfileService.getProfile(userId);
    return NextResponse.json({
      data: profile,
    });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function PATCH(request: Request) {
  const userId = await getAuthenticatedUserId();
  if (!userId) return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }

  const result = sellerProfileSchema.safeParse(body);
  if (!result.success)
    return NextResponse.json({ error: "VALIDATION_ERROR", issues: result.error.issues }, { status: 400 });

  const profile = await SellerProfileService.updateProfile(userId, result.data);
  return NextResponse.json({ data: profile });
}
