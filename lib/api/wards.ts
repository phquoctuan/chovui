import type {Ward} from "@/db/schema";
export async function getWardsByCountyId(countyId: number): Promise<Ward[]> {
  const response = await fetch(`/api/wards/?countyId=${countyId}`, {
    method: "GET",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error ?? "Không thể tải danh sách Phường/Xã.");
  }
  return result.data;
}

export async function getWardNameById(id: number | undefined): Promise<String> {
  if(id && id > 0){
      const response = await fetch(`/api/wards/${id}`, {
        method: "GET",
        credentials: "include",
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error ?? "Không tìm thấy Phường/Xã.");
      }
      return result.data.name;
  }
  else{
    return "";
  }
  
}