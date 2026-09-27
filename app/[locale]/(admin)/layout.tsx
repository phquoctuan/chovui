import { redirect } from "@/i18n/navigation";
import { getSession } from "@/lib/auth-session";

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const session = await getSession();

  // Chưa đăng nhập
  if (!session) {
    redirect({
      href: "/sign-in",
      locale,
    });
  }
  // Không phải admin
  else if (session.user.role !== "admin") {
    redirect({
      href: "/",
      locale,
    });
  }

  return <>{children}</>;
}