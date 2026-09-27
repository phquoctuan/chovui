import { NextResponse } from "next/server";
import { AuthError } from "./auth-error";

export function handleApiError(error: unknown) {
  if (error instanceof AuthError) {
    const status =
      error.code === "UNAUTHORIZED"
        ? 401
        : 403;

    return NextResponse.json(
      {
        error: {
          code: error.code,
          message: error.message,
        },
      },
      { status },
    );
  }

  console.error(error);

  return NextResponse.json(
    {
      error: {
        code: "INTERNAL_ERROR",
        message: "Internal server error",
      },
    },
    { status: 500 },
  );
}