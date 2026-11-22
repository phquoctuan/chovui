"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation"; // 1. Import thêm useSearchParams
import { ChevronDown } from "lucide-react";

import { routing, supportedLocales } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams(); // 2. Khởi tạo hook lấy query params

  const activeLocale = supportedLocales.find((item) => item.code === currentLocale) || supportedLocales[0];

  const handleSelectLanguage = (newLocale: (typeof routing.locales)[number]) => {
    if (newLocale === currentLocale) return;

    // Chủ động lưu cookie NEXT_LOCALE kéo dài 1 năm
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // 3. Chuyển hướng kèm theo query params hiện tại (nếu có)
    const searchString = searchParams.toString();
    const fullPath = searchString ? `${pathname}?${searchString}` : pathname;

    router.replace(fullPath, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={(props) => (
          <Button
            {...props}
            variant="ghost"
            size="sm"
            className="h-7 gap-1.5 px-2 text-xs font-medium text-gray-800 hover:bg-black/5 dark:text-gray-200"
          >
            <Image
              src={activeLocale.flagPath}
              alt={activeLocale.name}
              width={18}
              height={12}
              className="rounded-xs object-cover"
            />
            <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </Button>
        )}
      />

      <DropdownMenuContent align="start" className="min-w-[100px] w-auto">
        {supportedLocales.map((item) => {
          const isSelected = item.code === currentLocale;

          return (
            <DropdownMenuItem
              key={item.code}
              onClick={() => handleSelectLanguage(item.code)}
              className={`flex cursor-pointer items-center gap-2 text-xs ${
                isSelected ? "font-semibold bg-amber-100" : ""
              }`}
            >
              <Image src={item.flagPath} alt={item.name} width={18} height={12} className="rounded-xs object-cover" />
              <span>{item.name}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
