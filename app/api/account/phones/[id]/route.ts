import { NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/services/account-auth";
import { SellerPhoneRepository } from "@/lib/repositories/seller-phone-repository";
import { phoneUpdateSchema } from "@/lib/validations/user/account-contact";

type Context = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: Context) {
  const userId = await getAuthenticatedUserId();
  if (!userId)
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  const { id } = await context.params;
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }
  const parsed = phoneUpdateSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { error: "VALIDATION_ERROR", issues: parsed.error.issues },
      { status: 400 },
    );
  const current = await SellerPhoneRepository.findById(userId, id);
  if (!current)
    return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
  const phones = await SellerPhoneRepository.findByUserId(userId);
  if (phones.some((p) => p.id !== id && p.phone === parsed.data.phone))
    return NextResponse.json(
      { error: "PHONE_ALREADY_EXISTS" },
      { status: 409 },
    );
  const phone = await SellerPhoneRepository.update(userId, id, {
    ...parsed.data,
    primary: current.primary,
  });
  return NextResponse.json({ data: phone });
}

export async function DELETE(_request: Request, context: Context) {
  const userId = await getAuthenticatedUserId();
  if (!userId)
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  const { id } = await context.params;
  const phone = await SellerPhoneRepository.delete(userId, id);
  if (!phone) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
  return NextResponse.json({ data: phone });
}
