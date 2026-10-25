// This file is intentionally small: readiness is calculated from live DB data
// and Better Auth's emailVerified flag, never from a client-provided flag.
export type SellerReadiness = {
  canCreateListing: boolean;
  emailVerified: boolean;
  hasName: boolean;
  hasVerifiedPhone: boolean;
  hasAddress: boolean;
};
