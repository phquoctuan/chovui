import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { listCategories } from "@/lib/repositories/category-repository";

export const runtime = "nodejs";


export async function GET(request: NextRequest) {
  try {
    //Request: const { searchParams } = new URL(request.url);
    const searchParams = request.nextUrl.searchParams;
    const locale = searchParams.get("locale") || "en";
    const groupIdsParam = searchParams.get("groupIds");
    const q = searchParams.get("q") ?? undefined;
    // Chuyển chuỗi "1,3,5" thành [1, 3, 5]
    let groupIds: number[] = [];
    if (groupIdsParam) {
      groupIds = groupIdsParam.split(",").map(Number);
      // Validate dữ liệu đầu vào
      if (
        groupIds.some(
          (id) => !Number.isInteger(id) || id < 0
        )
      ) {
        return NextResponse.json(
          { message: "groupIds không hợp lệ" },
          { status: 400 }
        );
      }
    }

    // Gọi repository lấy cây danh mục
    const categoryTree = await listCategories({
      locale,
      groupIds,
      activeOnly: true,
    });

    return NextResponse.json(
      {
        success: true, 
        data: categoryTree ,
        // headers: {
        //   "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        // },
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error"},
      { status: 500 }
    );
  }
}