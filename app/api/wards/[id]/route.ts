import { NextRequest, NextResponse } from "next/server";
import { requireSession } from "@/lib/auth-session";
import { WardRepository } from "@/lib/repositories/ward-repository";

export const runtime = "nodejs";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }, //URL params luôn là string
) {
  // const session = await requireSession();

  const resolvedParams = await params;
  const rawId = resolvedParams.id;

  // 2. Validate id: Kiểm tra xem có phải là một số nguyên hợp lệ không
  const id = Number(rawId);
  if (isNaN(id) || !Number.isInteger(id) || id <= 0) {
    return NextResponse.json(
      {
        error: {
          code: "BAD_REQUEST",
          message: "ID Xã/Phường không hợp lệ",
        },
      },
      { status: 400 },
    );
  }

  // 3. Gọi repository với id đã được ép kiểu và validate
  const ward = await WardRepository.findById(id);

  if (!ward) {
    return NextResponse.json(
      {
        error: {
          code: "NOT_FOUND",
          message: "Không tìm thấy Xã/Phường",
        },
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    data: ward,
  });
}
