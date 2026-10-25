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
