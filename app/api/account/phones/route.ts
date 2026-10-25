import { NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/services/account-auth";
import { SellerPhoneRepository } from "@/lib/repositories/seller-phone-repository";
import { phoneCreateSchema } from "@/lib/validations/user/account-contact";

export async function GET() {
  const userId = await getAuthenticatedUserId();
  if (!userId)
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  return NextResponse.json({
    data: await SellerPhoneRepository.findByUserId(userId),
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
  const parsed = phoneCreateSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { error: "VALIDATION_ERROR", issues: parsed.error.issues },
      { status: 400 },
    );
  if ((await SellerPhoneRepository.countByUserId(userId)) >= 2)
    return NextResponse.json({ error: "PHONE_LIMIT_REACHED" }, { status: 409 });
  const existing = await SellerPhoneRepository.findByUserId(userId);
  if (existing.some((p) => p.phone === parsed.data.phone))
    return NextResponse.json(
      { error: "PHONE_ALREADY_EXISTS" },
      { status: 409 },
    );
  const phone = await SellerPhoneRepository.create(userId, {
    ...parsed.data,
    primary: existing.length === 0,
  });
  return NextResponse.json({ data: phone }, { status: 201 });
}
