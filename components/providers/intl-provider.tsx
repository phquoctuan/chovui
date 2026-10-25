import { NextIntlClientProvider} from "next-intl";
import { getMessages } from "next-intl/server";

export async function IntlProvider({
  children
}: {
  children: React.ReactNode;
}) {
  // ✅ Uses the locale from `i18n/request.ts`
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}