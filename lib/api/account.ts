import type {
  SellerProfile,
  SellerProfileWithCurrency,
  SellerProfileUpdateInput,
} from "@/lib/repositories/seller-profile-repository";
import type { SellerPhone } from "@/lib/repositories/seller-phone-repository";
// import type { SellerAddress } from "@/lib/repositories/seller-address-repository";
import type {SellerAddress, } from "@/db/schema";
import type { SellerContactMethod } from "@/lib/repositories/seller-contact-method-repository";
import { SellerAddressInput } from "@/lib/validations/user/account-contact";
import {apiRequest} from "./api_request";

export type SellerReadiness = {
  emailVerified: boolean;
  hasName: boolean;
  hasVerifiedPhone: boolean;
  hasAddress: boolean;
  canCreateListing: boolean;
};

export type AccountProfileResponse = {
  profile: SellerProfile | null;
  user: {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string;
    image: string | null;
  };
  phones: SellerPhone[];
  addresses: SellerAddress[];
  contactMethods: SellerContactMethod[];
  readiness: SellerReadiness;
};

export function getAccountProfile() {
  return apiRequest<AccountProfileResponse>("/api/account/profile");
}

export function getSellerProfile() {
  return apiRequest<SellerProfileWithCurrency>("/api/account/seller-profile");
}

export function getSellerAddresses() {
  return apiRequest<SellerAddress[]>("/api/account/seller-address");
}

export function updateSellerProfile(data: SellerProfileUpdateInput) {
  return apiRequest<SellerProfile>("/api/account/seller-profile", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
/////////////////////////PHONE
export function createPhone(data: { phone: string; label: string }) {
  return apiRequest<SellerPhone>("/api/account/phones", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export function updatePhone(
  id: string,
  data: { phone: string; label: string },
) {
  return apiRequest<SellerPhone>(`/api/account/phones/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
export function deletePhone(id: string) {
  return apiRequest<SellerPhone>(`/api/account/phones/${id}`, {
    method: "DELETE",
  });
}

export async function requestPhoneVerification(id: string) {
  return apiRequest<{
    alreadyVerified: boolean;
    expiresAt?: string;
    devCode?: string;
  }>(`/api/account/phones/${id}/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "send" }),
  });
}

export function confirmPhoneVerification(id: string, code: string) {
  return apiRequest<SellerPhone>(`/api/account/phones/${id}/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "confirm", code }),
  });
}
//////////////////////////ADDRESS
export function createAddress(
  data: SellerAddressInput,
) {
  return apiRequest<SellerAddress>("/api/account/addresses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export function updateAddress(
  id: string,
  data: SellerAddressInput,
) {
  return apiRequest<SellerAddress>(`/api/account/addresses/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export function deleteAddress(id: string) {
  return apiRequest<SellerAddress>(`/api/account/addresses/${id}`, {
    method: "DELETE",
  });
}

export function setPrimaryAddress(id: string) {
  return apiRequest<SellerAddress>(`/api/account/addresses/${id}/primary`, {
    method: "POST",
  });
}

export function createContactMethod(
  data: Omit<SellerContactMethod, "id" | "userId" | "createdAt" | "updatedAt">,
) {
  return apiRequest<SellerContactMethod>("/api/account/contact-methods", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export function updateContactMethod(
  id: string,
  data: Omit<SellerContactMethod, "id" | "userId" | "createdAt" | "updatedAt">,
) {
  return apiRequest<SellerContactMethod>(`/api/account/contact-methods/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export function deleteContactMethod(id: string) {
  return apiRequest<SellerContactMethod>(`/api/account/contact-methods/${id}`, {
    method: "DELETE",
  });
}

export async function uploadAccountAvatar(
  file: File,
): Promise<{ avatarUrl: string }> {
  const formData = new FormData();

  formData.append("file", file);
  const response = await fetch("/api/account/avatar", {
    method: "POST",
    credentials: "include",
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error ?? "Không thể tải ảnh đại diện.");
  }

  return result.data;
}

export async function deleteAccountAvatar(): Promise<{avatarUrl: null;}>
{
  const response = await fetch("/api/account/avatar", {
    method: "DELETE",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error ?? "Không thể xóa ảnh đại diện.");
  }

  return result.data;
}