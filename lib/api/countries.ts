// export type Country = {
//   id: number;
//   code: string;
//   name: string;
//   nameVi: string;
//   nameEn: string;
//   nativeName: string;
//   phoneCode: string;
//   area: string | null;
//   flagUrl: string | null;
//   currencyCode: string | null;
//   currencySymbol: string | null;
//   isActive: boolean;
//   sortOrder: number;
// };
import type {Country} from "@/db/schema";
export async function getCountries(): Promise<Country[]> {
  const response = await fetch("/api/countries", {
    method: "GET",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error ?? "Không thể tải danh sách quốc gia.");
  }

  return result.data;
}
