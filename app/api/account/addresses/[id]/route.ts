import { NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/services/account-auth";
import { SellerAddressRepository } from "@/lib/repositories/seller-address-repository";
import { SellerAddressValidate } from "@/lib/validations/user/account-contact";
import { requireSession } from "@/lib/auth-session";
import { handleApiError } from "@/lib/errors/handle-api-error";
// import { SellerAddressFormValues } from "@/lib/validations/user/account-contact";

type Context = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: Context) {
  try {
  const session = await requireSession();
    const userId = session.user.id;
    const { id } = await context.params;
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
    }
    const parsed = SellerAddressValidate.safeParse(body);
    if (!parsed.success)
      return NextResponse.json({ error: "VALIDATION_ERROR", issues: parsed.error.issues }, { status: 400 });
    const address = await SellerAddressRepository.update(userId, id, parsed.data);
    if (!address) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    return NextResponse.json({ data: address });

  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(_request: Request, context: Context) {
  const userId = await getAuthenticatedUserId();
  if (!userId) return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  const { id } = await context.params;
  const address = await SellerAddressRepository.delete(userId, id);
  if (!address) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
  return NextResponse.json({ data: address });
}
