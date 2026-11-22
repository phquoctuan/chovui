"use client";

import React, { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { 
  Search, 
  MapPin, 
  Heart, 
  Bell, 
  MessageSquare, 
  PlusCircle, 
  FileText, 
  Menu, 
  User,
  Home,
  ChevronDown 
} from "lucide-react";
import { UserAccountMenu } from "@/components/common/user-account-menu";
import { CategoryMenu } from "@/components/categories/category-menu";
import { MobileCategoryMenu } from "@/components/categories/mobile-category-menu";
import { LanguageSwitcher } from './language-switcher';
import { useLocale } from "next-intl";
// import { TrendingUp } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentLocale = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer giữ khoảng trống trên Desktop khi Dock để không che CategoriesCarousel */}
      {isScrolled && (
        <div className="hidden md:block h-[114px] w-full" aria-hidden="true" />
      )}

      <header
        className={`w-full z-50 bg-[#FFD400] transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 py-1.5 md:py-3 shadow-md border-b border-amber-300/50"
            : "relative py-1.5 md:py-3 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* =========================================================================
              1. GIAO DIỆN MOBILE (Chỉ hiển thị trên màn hình nhỏ < md)
              Luôn giữ cố định 1 hàng duy nhất.
             ========================================================================= */}
          <div className="flex md:hidden items-center gap-2.5 py-0.5">
            {/* Icon Menu 3 gạch */}
            {/* <button
              className="p-1 text-slate-900 focus:outline-none flex-shrink-0"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button> */}
            {/* <CategoryMenu locale="vi" smallIcon hideTitle isMobile/> */}
            <MobileCategoryMenu locale={currentLocale} />

            {/* Ô tìm kiếm bo góc tròn viền trắng */}
            <div className="flex-1 flex items-center bg-white rounded-full px-3 py-2 shadow-sm border border-slate-100">
              <Search className="w-4 h-4 text-slate-800 flex-shrink-0 mr-2" />
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                className="w-full bg-transparent text-slate-800 text-sm focus:outline-none placeholder:text-slate-500"
              />
            </div>

            {/* Icon Yêu thích (Tim) */}
            <Link
              href="#"
              className="p-1 text-slate-900 hover:opacity-80 transition-opacity flex-shrink-0"
              title="Yêu thích"
            >
              <Heart className="w-6 h-6" />
            </Link>

            {/* Icon Thông báo (Chuông) */}
            <Link
              href="#"
              className="p-1 text-slate-900 hover:opacity-80 transition-opacity flex-shrink-0"
              title="Thông báo"
            >
              <Bell className="w-6 h-6" />
            </Link>
          </div>

          {/* =========================================================================
              2. GIAO DIỆN DESKTOP (Hiển thị từ màn hình md trở lên)
             ========================================================================= */}
          <div className="hidden md:block">
            {isScrolled ? (
              /* --- DESKTOP KHI ĐÃ DOCK (1 HÀNG) --- */
              <div className="flex items-center justify-between gap-3">
                {/* Logo Chợ Vui */}
                <Link
                  href="/"
                  className="flex items-center gap-1 flex-shrink-0"
                >
                  {/* <div className="text-xl font-black italic tracking-tighter text-slate-900">
                    chợ <span className="text-red-600">VUI</span>
                  </div> */}
                  <div>
                    <img alt="logo" src="/images/logohp.svg" className="-mt-[5px]"/>
                  </div>
                </Link>
                {/* Cụm Tìm kiếm + Nút Danh mục (Giữ nguyên Icon Menu 3 gạch) */}
                <div className="flex-1 max-w-4xl flex items-center gap-2">
                  {/* Nút Danh mục: Chỉ giữ Icon Menu 3 gạch gốc */}
                  <CategoryMenu locale={currentLocale} smallIcon/>
                  {/* <button
                    className="flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 p-2.5 rounded-md shadow-sm transition-colors flex-shrink-0"
                    title="Danh mục"
                  >
                    <Menu className="w-4 h-4 text-slate-800" />
                  </button> */}

                  {/* Thanh tìm kiếm liền khối */}
                  <div className="flex-1 flex items-center bg-white rounded-md overflow-hidden shadow-sm border border-slate-200">
                    <div className="flex items-center gap-2 pl-3.5 flex-1 py-1.5">
                      <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <input
                        type="text"
                        placeholder="Tìm sản phẩm, dịch vụ và hơn thế nữa..."
                        className="w-full bg-transparent text-slate-800 text-sm focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-1 px-3 py-1.5 border-l border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium cursor-pointer transition-colors flex-shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span className="max-w-[140px] truncate">
                        Bến Tre (Vĩnh Long mới)
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    <button className="bg-[#FFD400] hover:bg-amber-400 text-slate-900 font-bold text-xs px-4 py-2 transition-colors flex-shrink-0">
                      Tìm kiếm
                    </button>
                  </div>
                </div>

                {/* Tiện ích phải khi Dock: Chỉ hiển thị Icon */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <Link
                    href="#"
                    className="p-2 text-slate-800 hover:bg-black/5 rounded-full transition-colors"
                    title="Đã lưu"
                  >
                    <Heart className="w-5 h-5" />
                  </Link>

                  <Link
                    href="#"
                    className="p-2 text-slate-800 hover:bg-black/5 rounded-full transition-colors"
                    title="Thông báo"
                  >
                    <Bell className="w-5 h-5" />
                  </Link>

                  <Link
                    href="/new-ads"
                    className="flex items-center gap-1 bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 rounded-md text-xs font-bold shadow-sm transition-colors"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Đăng tin</span>
                  </Link>
                  
                  <UserAccountMenu />
                  {/* <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-300 bg-slate-200 cursor-pointer ml-1">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                </div>
              </div>
            ) : (
              /* --- DESKTOP CHƯA SCROLL (2 HÀNG ĐẦY ĐỦ) --- */
              <div className="flex flex-col gap-3">
                {/* HÀNG 1 */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2">
                      {/* <div className="text-2xl font-black italic tracking-tighter text-slate-900">
                        chợ <span className="text-red-600">VUI</span>
                      </div> */}
                      <img alt="logo" src="/images/logohp.svg" className="-mt-[10px]"/>
                    </Link>

                    {/* Nút chuyển đổi ngôn ngữ */}
                    {/* <span className="h-4 w-[1px] bg-black/20" /> */}
                  
                    <div className="hidden lg:block text-xs font-semibold text-slate-800 italic border-l pl-4 border-slate-800/20">
                      Mua bán là niềm vui, giá tốt chốt ngay.
                    </div>
                    <LanguageSwitcher />
                  </div>

                  <div className="flex items-center gap-2 md:gap-3">
                    <Link
                      href="#"
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-slate-800 hover:bg-black/5 rounded-md text-xs font-semibold transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Đã lưu</span>
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-slate-800 hover:bg-black/5 rounded-md text-xs font-semibold transition-colors"
                    >
                      <Bell className="w-4 h-4" />
                      <span>Thông báo</span>
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 hover:bg-white rounded-md text-xs font-semibold text-slate-800 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-slate-700" />
                      <span>Chat</span>
                    </Link>

                    <Link
                      href="/my-ads"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 hover:bg-white rounded-md text-xs font-semibold text-slate-800 transition-colors"
                    >
                      <FileText className="w-4 h-4 text-slate-700" />
                      <span>Quản lý tin</span>
                    </Link>

                    <Link
                      href="/new-ads"
                      className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white px-3.5 py-1.5 rounded-md text-xs font-bold shadow-sm transition-colors"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Đăng tin</span>
                    </Link>
                    
                    {/* Component Menu Tài Khoản */}
                    <UserAccountMenu />
                    {/* <div className="flex items-center gap-1 cursor-pointer p-1 hover:bg-black/5 rounded-full transition-colors">
                      <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-300 bg-slate-200">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-800" />
                    </div> */}
                  </div>
                </div>

                {/* HÀNG 2 */}
                <div className="flex items-center gap-3">
                  {/* Nút Danh mục đầy đủ */}
                  {/* <button className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 px-4 py-2.5 rounded-md text-sm font-bold shadow-sm transition-colors flex-shrink-0">
                    <Menu className="w-4 h-4 text-slate-800" />
                    <span>Danh mục</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500 ml-1" />
                  </button> */}

                  {/* Nút Danh mục kèm Popover Flyout */}
                  <CategoryMenu locale={currentLocale} hideTitle/>
                  {/* Cụm Tìm kiếm */}
                  <div className="flex-1 flex items-center bg-white rounded-md overflow-hidden shadow-sm border border-slate-200">
                    <div className="flex items-center gap-2.5 pl-3.5 flex-1 py-2">
                      <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <input
                        type="text"
                        placeholder="Tìm sản phẩm, dịch vụ và hơn thế nữa..."
                        className="w-full bg-transparent text-slate-800 text-sm focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-2 border-l border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium cursor-pointer transition-colors flex-shrink-0">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span className="max-w-[160px] truncate text-sm">
                        Bến Tre (Vĩnh Long mới)
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    <button className="bg-[#FFD400] hover:bg-amber-400 text-slate-900 font-bold text-sm px-6 py-2.5 transition-colors flex-shrink-0">
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Dock Navigation Bar */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed bottom-0 left-0 right-0 z-50 bg-white  shadow-lg md:hidden flex items-center justify-around h-12 px-2 pb-safe"// border-t border-slate-200
      >
        {/* Trang chủ */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center flex-1 text-amber-500 gap-0.5"
        >
          <Home className="w-5 h-5 fill-amber-100" />
          <span className="text-[10px] font-semibold">Trang chủ</span>
        </Link>

        {/* Quản lý tin */}
        <Link
          href="#"
          className="flex flex-col items-center justify-center flex-1 text-slate-500 hover:text-slate-900 gap-0.5"
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px] font-medium">Quản lý tin</span>
        </Link>

        {/* + Đăng tin (Dùng SVG vòm trắng che viền thanh nav) */}
        <div className="flex flex-col items-center justify-center relative -top-3 flex-1">
          {/* SVG tạo khung vòm trắng che đường viền ngang của thanh nav */}
          <div className="absolute top-0 w-15 h-10 pointer-events-none flex items-center justify-center">
            <svg fill="none" height="68" viewBox="0 0 81 68" width="81" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff">
                {/* <path d="m0 14h81v54h-81z"></path> */}
                <path
                    d="m41 0c9.1084 0 15.8029 3.34008 20.6837 9.17204 1.2928 1.54476 1.9392 2.31706 2.275 2.63516 1.517 1.4374 2.5044 1.8986 4.5803 2.1395.4595.0533 1.0885.0533 2.3464.0533 1.9653 0 2.948 0 3.7635.1718 3.1022.6534 5.5259 3.0771 6.1793 6.1793.1718.8155.1718 1.7982.1718 3.7635v27.8854c0 7.5425 0 11.3137-2.3431 13.6569-2.3432 2.3431-6.1144 2.3431-13.6569 2.3431h-49c-7.54247 0-11.31371 0-13.65685-2.3431-2.34315-2.3432-2.34315-6.1144-2.34315-13.6569v-27.2527c0-2.5552 0-3.8328.28923-4.879.74953-2.7112 2.86788-4.8295 5.5791-5.5791 1.04621-.2892 2.3238-.2892 4.87897-.2892 1.5582 0 2.3373 0 2.9234-.0873 1.8401-.2741 2.6494-.6459 4.0562-1.8632.4481-.3878 1.241-1.311 2.8267-3.15741 4.8599-5.65877 11.4848-8.89209 20.4464-8.89209z"
                    // stroke="#e2e8f0"
                    // strokeWidth="1"
                    >
                </path>
              </g>
            </svg>
          </div>

          {/* Nút bấm tròn màu vàng */}
          <Link
            href="#"
            className="w-8 h-8 bg-[#FFD400] hover:bg-amber-400 rounded-full flex items-center justify-center text-slate-900 shadow-md relative z-10"
          >
            <PlusCircle className="w-6 h-6 text-slate-900 font-bold" />
          </Link>

          <span className="absolute -bottom-4 bg-transparent text-slate-900 font-bold text-[9px] px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap z-20">
            Đăng tin
          </span>
        </div>

        {/* Liên hệ */}
        <Link
          href="#"
          className="flex flex-col items-center justify-center flex-1 text-slate-500 hover:text-slate-900 gap-0.5"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-[10px] font-medium">Liên hệ</span>
        </Link>

        {/* Tài khoản */}
        <Link
          href="#"
          className="flex flex-col items-center justify-center flex-1 text-slate-500 hover:text-slate-900 gap-0.5"
        >
          <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
            <User className="w-3.5 h-3.5 text-slate-600" />
          </div>
          <span className="text-[10px] font-medium">Tài khoản</span>
        </Link>
      </nav>
    </>
  );
}