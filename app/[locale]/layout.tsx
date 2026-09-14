import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import {NextIntlClientProvider} from 'next-intl';
import {routing} from '@/i18n/routing';
// import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";

const geistHeading = Geist({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');
  return {
    title: t('title'),
    description: t('description')
  };
}
//Static rendering
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "vi" | "en")) {
    notFound();
  }
  // ✅ Uses the locale from `i18n/request.ts`
  const messages = await getMessages();
  return (
    <html lang="vi" suppressHydrationWarning className={cn( "h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, geistHeading.variable)}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header /> 
          <main className="min-h-screen">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}