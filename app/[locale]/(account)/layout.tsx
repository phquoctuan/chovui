import { headers } from "next/headers";
import { redirect } from "@/i18n/navigation";
import { auth } from "@/lib/auth";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { requireSignIn } from "@/lib/auth-session";

export default async function AccountLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const session = await requireSignIn(locale);
  return (
      <div className="min-h-screen bg-slate-50/50 flex flex-col">
        {/* Header with Categories Button, User Account Manager, Search & Navigation */}
        <Header />
        {children}
        {/* Footer [Hỗ trợ khách hàng, Về Chợ Tốt, Liên kết] */}
        <Footer />
    </div>
  );
}