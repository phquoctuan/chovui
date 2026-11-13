import { NextRequest, NextResponse } from "next/server";
import { requireSession } from "@/lib/auth-session";
import { getCountryByCode } from "@/lib/repositories/country-repository"

export async function GET(request: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  // const session = await requireSession();
  const country = await getCountryByCode(code);

  if (!country) {
    return NextResponse.json(
      {
        error: {
          code: "NOT_FOUND",
          message: "Không tìm thấy quốc gia.",
        },
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    data: country,
  });
}
