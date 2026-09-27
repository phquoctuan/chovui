export type AuthErrorCode =
  | "UNAUTHORIZED"
  | "FORBIDDEN";

export class AuthError extends Error {
  constructor(
    public readonly code: AuthErrorCode,
    message?: string,
  ) {
    super(message ?? code);

    this.name = "AuthError";
  }
}

