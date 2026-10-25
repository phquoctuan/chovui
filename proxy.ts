import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest } from "next/server";

// export default createMiddleware(routing);
const handleI18nRouting = createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
 
    // Match all pathnames within `{/:locale}/users`
    // '/([\\w-]+)?/users/(.+)'
  ]
};

export default function proxy(request: NextRequest) {
  // Lấy pathname và query string của request hiện tại
  const { pathname, search } = request.nextUrl;
/* old version
  // Tạo header mới, giữ nguyên các header hiện có
  const requestHeaders = new Headers(request.headers);
  // Ví dụ: /en/profile?tab=personal
  requestHeaders.set("x-next-path", pathname + search);
  // Tạo request mới có header next-url
  const requestWithHeaders = new NextRequest(request, {
    headers: requestHeaders,
  });
  // Tiếp tục xử lý routing của next-intl
  return handleI18nRouting(requestWithHeaders);
  */

  // 1. Gán custom header
  request.headers.set("x-next-path", pathname + search);
  // 2. Gọi trực tiếp handleI18nRouting mà không cần tạo lại NextRequest 
  // (vì request.headers là mutable - có thể thay đổi trực tiếp được, 
  // giúp giữ nguyên vẹn toàn bộ cookies, ip và các context gốc của Next.js)
  return handleI18nRouting(request);
}

