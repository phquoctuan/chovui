import { NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/services/account-auth";
import { SellerAddressRepository } from "@/lib/repositories/seller-address-repository";
import { addressSchema } from "@/lib/validations/user/account-contact";

export async function GET() {
  const userId = await getAuthenticatedUserId();
  if (!userId)
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  return NextResponse.json({
    data: await SellerAddressRepository.findByUserId(userId),
  });
}

export async function POST(request: Request) {
  const userId = await getAuthenticatedUserId();
  if (!userId)
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }
  const parsed = addressSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { error: "VALIDATION_ERROR", issues: parsed.error.issues },
      { status: 400 },
    );
  const address = await SellerAddressRepository.create(userId, parsed.data);
  return NextResponse.json({ data: address }, { status: 201 });
}
