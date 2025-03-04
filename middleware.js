import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

/**
 * Middleware function to handle authentication and route protection
 * 
 * This middleware:
 * 1. Initializes the Supabase client using cookies
 * 2. Refreshes the session if needed
 * 3. Protects dashboard routes from unauthenticated users
 * 4. Redirects authenticated users away from auth pages
 */
export async function middleware(req) {
  const res = NextResponse.next();
  
  // Create a Supabase client configured to use cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get: (name) => req.cookies.get(name)?.value,
        set: (name, value, options) => {
          res.cookies.set({ name, value, ...options });
        },
        remove: (name, options) => {
          res.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );
  
  // Refresh session if expired - required for Server Components
  await supabase.auth.getSession();
  
  // Get the current pathname
  const { pathname } = req.nextUrl;
  
  // Check if the user is authenticated
  const {
    data: { session },
  } = await supabase.auth.getSession();
  
  // Define protected routes (dashboard routes)
  const isProtectedRoute = pathname.startsWith('/dashboard');
  
  // Define authentication routes
  const isAuthRoute = pathname.startsWith('/signin') || pathname.startsWith('/signup');
  
  // If accessing a protected route without authentication, redirect to sign in
  if (isProtectedRoute && !session) {
    const redirectUrl = new URL('/signin', req.url);
    redirectUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(redirectUrl);
  }
  
  // If accessing auth routes while already authenticated, redirect to dashboard
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
  
  return res;
}

// Define which paths should trigger this middleware
export const config = {
  matcher: [
    // Protected routes
    '/dashboard/:path*',
    
    // Auth routes
    '/signin',
    '/signup',
    
    // Exclude all static files
    '/((?!_next/static|_next/image|favicon.ico|images|api).*)',
  ],
};
