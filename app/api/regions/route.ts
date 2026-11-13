import { NextRequest, NextResponse } from "next/server";
import { RegionRepository } from "@/lib/repositories/region-repository";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const countryCode = request.nextUrl.searchParams.get("countryCode");

  // 1. Kiểm tra xem countryCode có được truyền lên không (nếu bắt buộc)
  if (!countryCode) {
    return NextResponse.json(
      { error: "Thiếu tham số countryCode" },
      { status: 400 }
    );
  }

  // 2. Validate định dạng: Mã quốc gia chuẩn ISO thường là 2 ký tự chữ cái (ví: VN, US, FR)
  // const countryCodeRegex = /^[A-Za-z]{2}$/;
  // if (!countryCodeRegex.test(countryCode)) {
  //   return NextResponse.json(
  //     { error: "countryCode không hợp lệ (phải là mã quốc gia gồm 2 ký tự, ví dụ: VN, US)" },
  //     { status: 400 }
  //   );
  // }

  // Chuẩn hóa về chữ hoa (ví dụ: 'vn' -> 'VN') để khớp với dữ liệu trong database
  const normalizedCountryCode = countryCode.toUpperCase();

  // 3. Gọi repository khi đã validate thành công
  const data = await RegionRepository.findByCountryCode(normalizedCountryCode);

  return NextResponse.json(
    { data },
    // {
    //   headers: {
    //     "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    //   },
    // },
  );
}