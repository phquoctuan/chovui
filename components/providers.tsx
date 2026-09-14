"use client";

import { NextIntlClientProvider } from "next-intl";

export function Providers({
  children,
  messages,
}: {
  children: React.ReactNode;
  messages: IntlMessages;
}) {
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}