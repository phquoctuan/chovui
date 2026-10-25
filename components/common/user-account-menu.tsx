"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  FileText, 
  MessageSquare, 
  Bell, 
  Heart, 
  Star, 
  Coins, 
  Package, 
  Tag, 
  History, 
  Settings, 
  HelpCircle, 
  MessageCircleCode, 
  LogOut, 
  ChevronRight,
  Pencil
} from "lucide-react";

import { authClient } from "@/lib/auth-client";

export function UserAccountMenu() {

  const { data: session, isPending } = authClient.useSession();
  const isLoggedIn = !!session?.user;

  // 3. Hàm xử lý đăng xuất
  const handleLogout = async () => {
    if (!isLoggedIn) return;
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          // Chuyển hướng về trang chủ hoặc trang đăng nhập sau khi logout thành công
          window.location.href = "/"; 
        },
      },
    });
  };

  return (
    <DropdownMenu>
      {/* Sử dụng prop render trong Base UI để bọc Custom Trigger */}
      <DropdownMenuTrigger
        nativeButton={false}
        render={
            <div className="flex items-center gap-1 cursor-pointer p-1 hover:bg-black/5 rounded-full transition-colors outline-none">
                <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-300 bg-slate-200">
                    <img
                        src={session?.user?.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-800" />
            </div> 
        }
    >
    </DropdownMenuTrigger>
      {/* Nội dung Popup Menu */}
      <DropdownMenuContent 
        align="end" 
        className="w-[360px] p-4 rounded-2xl shadow-xl bg-slate-50 border border-slate-200 max-h-[85vh] overflow-y-auto z-50 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]"
      >
        {/* 1. Phần thông tin cá nhân */}
        <div className="flex flex-col items-center text-center pb-4 border-b border-slate-200">
          <div className="relative mb-2">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-300 bg-slate-200">
              <img
                src={session?.user?.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"}
                alt={session?.user?.name || ""}
                className="w-full h-full object-cover"
              />
            </div>
            {/* <button className="absolute bottom-0 right-0 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center border-2 border-white shadow hover:bg-slate-800 transition">
              <Pencil className="w-3 h-3" />
            </button> */}
          </div>
          <h3 className="font-bold text-base text-slate-900">{session?.user?.displayUsername || "Chưa đăng nhập"}</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Người theo dõi <span className="font-semibold text-slate-800">0</span> • Đang theo dõi <span className="font-semibold text-slate-800">0</span>
          </p>
        </div>

        {/* 2. Pi Network Coin Box */}
        <div className="my-3 p-3.5 bg-white rounded-xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-sm text-slate-900">Pi Network Coin</span>
            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
              <span>0</span>
              <span className="w-5 h-5 rounded-full bg-amber-400 text-white flex items-center justify-center text-xs">🪙</span>
            </div>
          </div>
          <Button className="w-full bg-primary text-slate-950 font-semibold rounded-lg h-9 transition-colors">
            Nạp ngay
          </Button>
        </div>

        {/* 3. Tiện ích */}
        <div className="mb-3">
          <span className="text-xs font-semibold text-slate-400 px-1 uppercase tracking-wider">Tiện ích</span>
          <div className="mt-1.5 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <MenuItem disabled icon={<FileText className="w-4 h-4 text-amber-600" />} label="Quản lý tin" />
            <MenuItem disabled icon={<MessageSquare className="w-4 h-4 text-amber-600" />} label="Chat" />
            <MenuItem disabled icon={<Bell className="w-4 h-4 text-amber-500" />} label="Thông báo" />
            <MenuItem disabled icon={<Heart className="w-4 h-4 text-rose-500" />} label="Tin đã lưu" />
            <MenuItem disabled icon={<Star className="w-4 h-4 text-amber-500" />} label="Đánh giá từ tôi" last />
          </div>
        </div>

        {/* 4. Dịch vụ & Ưu đãi */}
        <div className="mb-3">
          <span className="text-xs font-semibold text-slate-400 px-1 uppercase tracking-wider">Dịch vụ & Ưu đãi</span>
          <div className="mt-1.5 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <MenuItem disabled icon={<Coins className="w-4 h-4 text-amber-600" />} label="Pi coin" />
            <MenuItem disabled icon={<Package className="w-4 h-4 text-slate-800" />} label="Gói trả phí" />
            <MenuItem disabled icon={<Tag className="w-4 h-4 text-blue-500" />} label="Ưu đãi của tôi" />
            <MenuItem disabled icon={<History className="w-4 h-4 text-slate-500" />} label="Lịch sử giao dịch" last />
          </div>
        </div>

        {/* 5. Khác */}
        <div>
          <span className="text-xs font-semibold text-slate-400 px-1 uppercase tracking-wider">Khác</span>
          <div className="mt-1.5 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <MenuItem 
              icon={<Settings className="w-4 h-4 text-slate-600"/>} 
              label="Cài đặt tài khoản"
              href="/profile"
            />
            <MenuItem disabled icon={<HelpCircle className="w-4 h-4 text-slate-600" />} label="Trợ giúp" />
            <MenuItem disabled icon={<MessageCircleCode className="w-4 h-4 text-slate-600" />} label="Đóng góp ý kiến" />
            <MenuItem 
              icon={<LogOut className="w-4 h-4 text-destructive" />} 
              label="Đăng xuất" 
              danger 
              last 
              disabled={!isLoggedIn}
              onClick={handleLogout}
            />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  last?: boolean;
  danger?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

function MenuItem({ icon, label, last = false, danger = false, disabled = false, href, onClick }: MenuItemProps) {
  const content = (
    <div 
      onClick={!disabled ? onClick : undefined}
      className={`flex items-center justify-between px-3.5 py-2.5 transition-colors ${
        !last ? "border-b border-slate-100" : ""
      } ${
        disabled 
          ? "opacity-40 cursor-not-allowed bg-slate-50" 
          : "hover:bg-slate-50 cursor-pointer"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
          {icon}
        </div>
        <span className={`text-sm font-medium ${danger ? "text-destructive" : "text-slate-700"}`}>
          {label}
        </span>
      </div>
      <ChevronRight className="w-4 h-4 text-slate-400" />
    </div>
  );
  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}