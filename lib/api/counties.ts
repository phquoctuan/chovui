import type {County} from "@/db/schema";
export async function getCountiesByRegionId(regionId: number): Promise<County[]> {
  const response = await fetch(`/api/counties/?regionId=${regionId}`, {
    method: "GET",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error ?? "Không thể tải danh sách Quận/Huyện");
  }
  return result.data;
}

export async function getCountyNameById(id: number | undefined): Promise<String> {
  if(id && id > 0){
      const response = await fetch(`/api/counties/${id}`, {
        method: "GET",
        credentials: "include",
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error ?? "Không tìm thấy Quận/Huyện.");
      }
      return result.data.name;
  }
  else{
    return "";
  }
  
}