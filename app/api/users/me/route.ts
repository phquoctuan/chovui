import { NextResponse } from "next/server";
import { requireSession } from "@/lib/auth-session";

export async function GET() {
  try {
    const session = await requireSession();

    return NextResponse.json({
      data: {
        user: session.user,
      },
    });
  } catch {
    return NextResponse.json(
      {
        error: {
          code: "UNAUTHORIZED",
          message: "Unauthorized",
        },
      },
      { status: 401 },
    );
  }
}