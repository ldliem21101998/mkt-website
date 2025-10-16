import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const protectedTestPaths = ['/test', '/vi/test', '/en/test', '/zh-CN/test', '/zh-TW/test'];

function isProtectedPath(pathname: string): boolean {
  return protectedTestPaths.some((p) => pathname.startsWith(p));
}

export function middleware(req: NextRequest) {
  const res = createMiddleware(routing)(req);

  if (isProtectedPath(req.nextUrl.pathname)) {
    const cookie = req.cookies.get('allow_test')?.value;
    if (cookie !== 'true') {
      const url = req.nextUrl.clone();
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  return res;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};