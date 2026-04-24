import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  
  // If the request comes from the Vercel domain, redirect to the custom domain
  if (host === 'sumit-x-dev.vercel.app') {
    return NextResponse.redirect(`https://www.sumitxdev.online${request.nextUrl.pathname}`, 301);
  }

  // Enforce www if it's the custom domain but without www
  if (host === 'sumitxdev.online') {
    return NextResponse.redirect(`https://www.sumitxdev.online${request.nextUrl.pathname}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Apply middleware to all routes except api, _next/static, _next/image, favicon.ico
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
