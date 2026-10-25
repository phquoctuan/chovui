import { NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/services/account-auth";
import { SellerPhoneVerificationService } from "@/lib/services/seller-phone-verification-service";
import { phoneVerificationSchema } from "@/lib/validations/user/account-contact";

type Context = { params: Promise<{ id: string }> };

export async function POST(request: Request, context: Context) {
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
  const parsed = phoneVerificationSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { error: "VALIDATION_ERROR", issues: parsed.error.issues },
      { status: 400 },
    );

  try {
    if (parsed.data.action === "send") {
      return NextResponse.json({
        data: await SellerPhoneVerificationService.request(userId, id),
      });
    }
    if (!parsed.data.code)
      return NextResponse.json({ error: "OTP_REQUIRED" }, { status: 400 });
    const phone = await SellerPhoneVerificationService.confirm(
      userId,
      id,
      parsed.data.code,
    );
    return NextResponse.json({ data: phone });
  } catch (error) {
    const code = error instanceof Error ? error.message : "VERIFY_FAILED";
    const status = ["PHONE_NOT_FOUND"].includes(code)
      ? 404
      : code === "OTP_INVALID"
        ? 400
        : code === "SMS_PROVIDER_NOT_CONFIGURED"
          ? 501
          : 409;
    return NextResponse.json({ error: code }, { status });
  }
}
