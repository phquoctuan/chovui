import { NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/services/account-auth";
import { SellerAddressRepository } from "@/lib/repositories/seller-address-repository";

type Context = { params: Promise<{ id: string }> };

export async function POST(_request: Request, context: Context) {
  const userId = await getAuthenticatedUserId();
  if (!userId)
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  const { id } = await context.params;
  const address = await SellerAddressRepository.setPrimary(userId, id);
  if (!address)
    return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
  return NextResponse.json({ data: address });
}
