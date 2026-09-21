"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LocaleSwitcher } from "./locale-switcher";
import { SearchForm } from "@/components/forms/search-form";
import { UserMenu } from "@/components/auth/user-menu";

export function Header() {
  const t = useTranslations("Common");

  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-xl font-bold"
        >
          Chovui
        </Link>

        {/* Search */}
        <SearchForm />

        {/* Navigation */}
        <nav className="flex shrink-0 items-center gap-4">
          <Link href="/sign-in">
            {t("signIn")}
          </Link>

          <Link href="/sign-up">
            {t("signUp")}
          </Link>
          <UserMenu />
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
