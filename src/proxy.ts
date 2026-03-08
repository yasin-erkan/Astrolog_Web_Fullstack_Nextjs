import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

const LOCALE_CODES = ['en', 'tr', 'de', 'fr'];

const STATIC_EXT = /\.(jpg|jpeg|png|gif|webp|svg|ico|woff2?|ttf|css|js|map)$/i;

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === '/' || pathname === '') {
    return NextResponse.redirect(new URL('/tr', request.url));
  }

  if (STATIC_EXT.test(pathname)) {
    return NextResponse.next();
  }

  const segment = pathname.split('/')[1];
  if (segment && !LOCALE_CODES.includes(segment)) {
    return NextResponse.redirect(new URL('/tr', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
