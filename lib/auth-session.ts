import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { AuthError } from "@/lib/errors/auth-error";
import { NextResponse } from "next/server";
// import { locale } from '../.next/dev/types/root-params';
import { redirect } from "@/i18n/navigation";

export async function getSession() {
  return auth.api.getSession({
    headers: await headers(),
  });
}

export async function requireSession() {
  const session = await getSession();

  if (!session) {
    throw new AuthError(
      "UNAUTHORIZED",
      "Authentication required",
    );
  }

  return session;
}

export async function requireAdmin() {
  const session = await requireSession();

  if (session.user.role !== "admin") {
    throw new AuthError(
      "FORBIDDEN",
      "Admin access required",
    );
  }

  return session;
}
//////
export async function requireAdminJson() {
  const session = await getSession();

  if (!session) {
    return { 
      success: false, 
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) 
    };
  }
  // Kiểm tra role admin (tùy thuộc vào cách bạn lưu trữ field role trong user model)
  if (session.user.role !== "admin") {
    return { 
      success: false, 
      response: NextResponse.json({ error: "Forbidden: Requires Admin Role" }, { status: 403 }) 
    };
  }
  return { success: true, session };
}

export async function requireSignIn(locale: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    const headersList = await headers();
    
    // Lấy header đã set at proxy.ts
    const nextUrl = headersList.get("x-next-path");
    let currentPath = nextUrl || `/${locale}`;// Fallback an toàn

    redirect({
      href: `/sign-in?callbackUrl=${encodeURIComponent(currentPath)}`,
      locale,
    });
  } else {
    return session;
  }
}