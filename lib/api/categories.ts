import {apiRequestFullReturn, apiRequest} from "./api_request";
import {CategoryTree} from "@/lib/repositories/category-repository";

export async function getCategories (locale:string): Promise<CategoryTree> {
  const result = await apiRequest(`/api/categories?locale=${locale}`);
  // console.log("result:", result)
  // console.log("result.success:", result.success)
  // if (!result.success) {
  //   throw new Error("Không thể tải danh mục.");
  // }
  return result as CategoryTree;
}
export async function getCategoriesByGroupIds (locale:string, groupIds: number[],): Promise<CategoryTree> {
  const params = new URLSearchParams({
    groupIds: groupIds.join(","),
    locale,
  });
  const result = await apiRequest(`/api/categories?${params.toString()}`);
  // const result = await apiRequest(`/api/categories?groupIds=1,3,5&locale=${locale}`);
  return result as CategoryTree;
}