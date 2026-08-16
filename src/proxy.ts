import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  if (host === 'thewhiteguava.in') {
    const url = request.nextUrl.clone();
    url.host = 'www.thewhiteguava.in';
    url.protocol = 'https';
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.png|brand/).*)'],
};
