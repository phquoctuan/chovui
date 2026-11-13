import { NextRequest, NextResponse } from "next/server";
import { listCountries } from "@/lib/repositories/country-repository";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  // const url = new URL(request.url);
  // const q = url.searchParams.get("q") ?? undefined;
  const q = request.nextUrl.searchParams.get("q") ?? undefined;

  const data = await listCountries({
    query: q,
    activeOnly: true,
  });

  return NextResponse.json(
    { data },
    // {
    //   headers: {
    //     "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    //   },
    // },
  );
}
