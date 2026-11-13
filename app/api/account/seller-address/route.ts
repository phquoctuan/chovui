import { NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/services/account-auth";
import { requireSession } from "@/lib/auth-session";
import { handleApiError } from "@/lib/errors/handle-api-error";
import { SellerAddressRepository } from "@/lib/repositories/seller-address-repository";

export async function GET() {
  try {
    const session = await requireSession();
    if (!session) return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
    const userId = session.user.id;
    const addresses = await SellerAddressRepository.findByUserId(userId)
    return NextResponse.json({
      data: addresses,
    });
  } catch (error) {
    return handleApiError(error);
  }
}