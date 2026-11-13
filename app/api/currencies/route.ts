import { NextResponse } from "next/server";
import { listCurrencies } from "@/lib/repositories/currency-repository";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? undefined;

  const data = await listCurrencies({
    query: q,
    activeOnly: true,
  });

  return NextResponse.json(
    { data },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    },
  );
}
