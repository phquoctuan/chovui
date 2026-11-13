import type {Currency} from "@/db/schema";
export async function getCurrencies(): Promise<Currency[]> {
  const response = await fetch("/api/currencies", {
    method: "GET",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error ?? "Không thể tải danh sách quốc gia.");
  }

  return result.data;
}
