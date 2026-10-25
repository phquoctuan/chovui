import {defineRouting} from 'next-intl/routing';

// 1. Định nghĩa danh sách đầy đủ metadata
export const supportedLocales = [
  { code: 'vi', name: 'Tiếng Việt', flagPath: '/flags/vn.png' },
  { code: 'en', name: 'English', flagPath: '/flags/gb.png' },
] as const;

// 2. Map ra mảng string cho next-intl
const locales = supportedLocales.map((l) => l.code) as unknown as readonly [string, ...string[]];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,//['vi', 'en'],
  // Used when no locale matches
  defaultLocale: 'en',
  // localePrefix: 'as-needed'
  // localePrefix: "always",
  localeCookie: {
    maxAge: 60 * 60 * 24 * 365, // 1 năm
  },
});
export type Locale = (typeof routing.locales)[number];