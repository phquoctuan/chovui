export async function apiRequest<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, { credentials: "include", ...init });
  const result = await response.json().catch(() => ({}));
  if (!response.ok)
    throw new Error(result?.error ?? "Yêu cầu không thành công.");
  return result.data as T;
}

export async function apiRequestFullReturn<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, { credentials: "include", ...init });

  // Đọc body JSON một cách an toàn (tránh crash nếu response không phải JSON)
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result?.error ?? result?.message ?? "Yêu cầu không thành công.");
  }
  return response as T;
}