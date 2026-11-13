import { NextRequest, NextResponse } from "next/server";
import { WardRepository } from "@/lib/repositories/ward-repository";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const countyIdParam = request.nextUrl.searchParams.get("countyId");

  // 1. Kiểm tra xem countyId có được truyền lên không
  if (!countyIdParam) {
    return NextResponse.json(
      { error: "Thiếu tham số countyId" },
      { status: 400 }
    );
  }

  // 2. Chuyển đổi và validate xem có phải là số nguyên hợp lệ không
  const countyId = Number(countyIdParam);

  if (isNaN(countyId) || !Number.isInteger(countyId) || countyId <= 0) {
    return NextResponse.json(
      { error: "countyId không hợp lệ (phải là một số nguyên dương)" },
      { status: 400 }
    );
  }

  // 3. Gọi repository khi đã validate thành công
  const data = await WardRepository.findByCountyId(countyId);

  return NextResponse.json(
    { data },
    // {
    //   headers: {
    //     "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    //   },
    // },
  );
}