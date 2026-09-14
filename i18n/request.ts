import * as rootParams from 'next/root-params';
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
 
export default getRequestConfig(async ({locale}) => {
  if (!locale) {
    const paramValue = await rootParams.locale();
    if (hasLocale(routing.locales, paramValue)) {
      locale = paramValue;
    } else {
      notFound();
    }
  }
   const [
    common,
    home,
    auth,
    listing,
    account,
    admin,
    validation,
  ] = await Promise.all([
    import(`./messages/${locale}/common.json`),
    import(`./messages/${locale}/home.json`),
    import(`./messages/${locale}/auth.json`),
    import(`./messages/${locale}/listing.json`),
    import(`./messages/${locale}/account.json`),
    import(`./messages/${locale}/admin.json`),
    import(`./messages/${locale}/validation.json`),
  ]);

  return {
    locale,
    // messages: (await import(`./messages/${locale}.json`)).default
      messages: {
      Common: common.Common,
      Metadata: home.Metadata,
      HomePage: home.HomePage,
      Auth: auth.default,
      Listing: listing.default,
      Account: account.default,
      Admin: admin.default,
      Validation: validation.default,
    },
  };
});