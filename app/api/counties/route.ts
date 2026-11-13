import { NextRequest, NextResponse } from "next/server";
import { CountyRepository } from "@/lib/repositories/county-repository";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const regionIdParam = request.nextUrl.searchParams.get("regionId");

  // 1. Kiểm tra xem regionId có được truyền lên không
  if (!regionIdParam) {
    return NextResponse.json(
      { error: "Thiếu tham số regionId" },
      { status: 400 }
    );
  }

  // 2. Chuyển đổi và validate xem có phải là số nguyên hợp lệ không
  const regionId = Number(regionIdParam);

  if (isNaN(regionId) || !Number.isInteger(regionId)) {
    return NextResponse.json(
      { error: "regionId không hợp lệ (phải là một số nguyên)" },
      { status: 400 }
    );
  }

  // 3. Gọi repository khi đã validate thành công
  const data = await CountyRepository.findByRegionId(regionId);

  return NextResponse.json(
    { data },
    // {
    //   headers: {
    //     "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    //   },
    // },
  );
}