import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import {
  sellerAddresses,
  sellerPhones,
  sellerProfiles,
  user,
} from "@/db/schema";

export async function getSellerReadiness(userId: string) {
  const [account] = await db
    .select({
      emailVerified: user.emailVerified,
      fullName: sellerProfiles.fullName,
    })
    .from(user)
    .leftJoin(sellerProfiles, eq(sellerProfiles.userId, user.id))
    .where(eq(user.id, userId));

  const [verifiedPhone] = await db
    .select({ id: sellerPhones.id })
    .from(sellerPhones)
    .where(
      and(eq(sellerPhones.userId, userId), eq(sellerPhones.verified, true)),
    )
    .limit(1);
  const [address] = await db
    .select({ id: sellerAddresses.id })
    .from(sellerAddresses)
    .where(eq(sellerAddresses.userId, userId))
    .limit(1);

  const fullName = account?.fullName?.trim() ?? "";
  const emailVerified = Boolean(account?.emailVerified);
  const hasName = fullName.length >= 2;
  const hasVerifiedPhone = Boolean(verifiedPhone);
  const hasAddress = Boolean(address);
  return {
    emailVerified,
    hasName,
    hasVerifiedPhone,
    hasAddress,
    canCreateListing:
      emailVerified && hasName && hasVerifiedPhone && hasAddress,
  };
}

export async function refreshSellerReadiness(userId: string) {
  const readiness = await getSellerReadiness(userId);
  const [existing] = await db
    .select({ userId: sellerProfiles.userId })
    .from(sellerProfiles)
    .where(eq(sellerProfiles.userId, userId));
  if (existing) {
    await db
      .update(sellerProfiles)
      .set({
        canCreateListing: readiness.canCreateListing,
        updatedAt: new Date(),
      })
      .where(eq(sellerProfiles.userId, userId));
  } else {
    await db
      .insert(sellerProfiles)
      .values({ userId, canCreateListing: readiness.canCreateListing });
  }
  return readiness;
}

export async function assertSellerCanCreateListing(userId: string) {
  const readiness = await getSellerReadiness(userId);
  if (!readiness.canCreateListing) {
    const error = new Error("SELLER_PROFILE_NOT_READY");
    Object.assign(error, { readiness });
    throw error;
  }
  return readiness;
}
