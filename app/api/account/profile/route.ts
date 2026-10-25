import { NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/services/account-auth";
import { requireSession } from "@/lib/auth-session";
import { handleApiError } from "@/lib/errors/handle-api-error";
import { auth } from "@/lib/auth";
import { SellerProfileService } from "@/lib/services/seller-profile-service";
import { SellerPhoneRepository } from "@/lib/repositories/seller-phone-repository";
import { SellerAddressRepository } from "@/lib/repositories/seller-address-repository";
import { SellerContactMethodRepository } from "@/lib/repositories/seller-contact-method-repository";
import { refreshSellerReadiness } from "@/lib/services/seller-readiness-service";
import { sellerProfileSchema } from "@/lib/validations/user/seller-profile";
import { headers } from "next/headers";

export async function GET() {
  try {
    const session = await requireSession();
    if (!session)
      return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
    const userId = session.user.id;
    const readiness = await refreshSellerReadiness(userId);
    const [profile, phones, addresses, contactMethods] = await Promise.all([
      SellerProfileService.getProfile(userId),
      SellerPhoneRepository.findByUserId(userId),
      SellerAddressRepository.findByUserId(userId),
      SellerContactMethodRepository.findByUserId(userId),
    ]);
    return NextResponse.json({
      data: {
        user: {
          id: userId,
          email: session.user.email,
          emailVerified: session.user.emailVerified,
          name: session.user.name,
          image: session.user.image,
        },
        profile,
        phones,
        addresses,
        contactMethods,
        readiness,
      },
    });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function PATCH(request: Request) {
  const userId = await getAuthenticatedUserId();
  if (!userId)
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }

  const result = sellerProfileSchema.safeParse(body);
  if (!result.success)
    return NextResponse.json(
      { error: "VALIDATION_ERROR", issues: result.error.issues },
      { status: 400 },
    );
    
  const profile = await SellerProfileService.updateProfile(userId, result.data);
  return NextResponse.json({ data: profile });
}
