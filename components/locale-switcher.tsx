"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "vi" ? "en" : "vi";

  function switchLocale() {
    router.replace(pathname, {
      locale: nextLocale,
    });
  }

  return (
    <button type="button" onClick={switchLocale}>
      {nextLocale === "vi" ? "Tiếng Việt" : "English"}
    </button>
  );
}