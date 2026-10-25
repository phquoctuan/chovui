import { headers } from "next/headers";
import { auth } from "@/lib/auth";

import {
  SellerProfileRepository,
  type SellerProfileUpdateInput,
} from "@/lib/repositories/seller-profile-repository";

export class SellerProfileService {
  static async getProfile(userId: string) {
    return SellerProfileRepository.findByUserId(userId);
  }

  static async updateProfile(userId: string, data: SellerProfileUpdateInput) {
    const profile = SellerProfileRepository.upsert(userId, data);
    //update user infomation for display session in header
    await auth.api.updateUser({
      body: {
        image: data.avatarUrl,
        displayUsername: data.fullName,
      },
      headers: await headers(),
    });
    return profile;
  }
}
