import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

const LOCALE_CODES = ['en', 'tr', 'de', 'fr'];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  const segment = pathname.split('/')[1];
  if (segment && !LOCALE_CODES.includes(segment)) {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
