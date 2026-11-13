import type {Region} from "@/db/schema";
export async function getRegionsByCountryCode(countryCode: string): Promise<Region[]> {
  const response = await fetch(`/api/regions/?countryCode=${countryCode}`, {
    method: "GET",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error ?? "Không thể tải danh sách tỉnh thành.");
  }
  return result.data;
}

export async function getRegionNameById(id: number | undefined): Promise<String> {
  if(id && id > 0){
      const response = await fetch(`/api/regions/${id}`, {
        method: "GET",
        credentials: "include",
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error ?? "Không tìm thấy tỉnh thành.");
      }
      return result.data.name;
  }
  else{
    return "";
  }
  
}