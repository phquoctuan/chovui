import { NextRequest, NextResponse } from "next/server";
import { requireSession } from "@/lib/auth-session";
import { RegionRepository } from "@/lib/repositories/region-repository";

export const runtime = "nodejs";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  // const session = await requireSession();

  const resolvedParams = await params;
  const rawId = resolvedParams.id;

  // 2. Validate id: Kiểm tra xem có phải là số nguyên dương hợp lệ không
  const id = Number(rawId);
  if (isNaN(id) || !Number.isInteger(id) || id <= 0) {
    return NextResponse.json(
      {
        error: {
          code: "BAD_REQUEST",
          message: "ID Tỉnh/Thành phố không hợp lệ",
        },
      },
      { status: 400 },
    );
  }

  // 3. Gọi repository với id đã được ép kiểu và validate
  const region = await RegionRepository.findById(id);

  if (!region) {
    return NextResponse.json(
      {
        error: {
          code: "NOT_FOUND",
          message: "Không tìm thấy Tỉnh/Thành phố",
        },
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    data: region,
  });
}
