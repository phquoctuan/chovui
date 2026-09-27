import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth-session";
import { handleApiError } from "@/lib/errors/handle-api-error";

export async function GET() {
  try {
    const session = await requireAdmin();

    return NextResponse.json({
      data: {
        message: "Admin access granted",
        user: session.user,
      },
    });
  } catch (error) {
    return handleApiError(error);
  }
}