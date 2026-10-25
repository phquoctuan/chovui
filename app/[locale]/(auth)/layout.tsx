import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default async function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
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