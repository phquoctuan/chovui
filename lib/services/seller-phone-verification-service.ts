import { createHash, randomInt } from "node:crypto";
import { SellerPhoneRepository } from "@/lib/repositories/seller-phone-repository";
import { SellerPhoneVerificationRepository } from "@/lib/repositories/seller-phone-verification-repository";

const CODE_TTL_MS = 5 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function hashCode(code: string) {
  return createHash("sha256").update(code).digest("hex");
}

export class SellerPhoneVerificationService {
  static async request(userId: string, phoneId: string) {
    const phone = await SellerPhoneRepository.findById(userId, phoneId);
    if (!phone) throw new Error("PHONE_NOT_FOUND");
    if (phone.verified) return { alreadyVerified: true as const };

    const code = String(randomInt(100000, 1000000));
    const expiresAt = new Date(Date.now() + CODE_TTL_MS);
    await SellerPhoneVerificationRepository.create(
      userId,
      phoneId,
      hashCode(code),
      expiresAt,
    );

    // TODO: replace this development transport with the real SMS provider.
    // Never expose devCode in production.
    if (process.env.NODE_ENV !== "production") {
      console.info(`[CHOVUI DEV OTP] ${phone.phone}: ${code}`);
      return { alreadyVerified: false as const, expiresAt, devCode: code };
    }

    throw new Error("SMS_PROVIDER_NOT_CONFIGURED");
  }

  static async confirm(userId: string, phoneId: string, code: string) {
    const phone = await SellerPhoneRepository.findById(userId, phoneId);
    if (!phone) throw new Error("PHONE_NOT_FOUND");
    if (phone.verified) return phone;

    const verification = await SellerPhoneVerificationRepository.findLatest(
      userId,
      phoneId,
    );
    if (!verification || verification.expiresAt.getTime() < Date.now())
      throw new Error("OTP_EXPIRED");
    if (verification.attempts >= MAX_ATTEMPTS)
      throw new Error("OTP_TOO_MANY_ATTEMPTS");

    await SellerPhoneVerificationRepository.incrementAttempts(verification.id);
    if (hashCode(code) !== verification.codeHash)
      throw new Error("OTP_INVALID");

    await SellerPhoneVerificationRepository.delete(verification.id);
    return SellerPhoneRepository.markVerified(userId, phoneId);
  }
}
