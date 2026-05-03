export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Middleware in Next.js</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Middleware?</h2>
        <p className="text-gray-600 mt-2">
          Middleware in Next.js is a powerful feature that allows you to run code before a request is completed. It sits between the user's request and your application's response, enabling you to modify requests, responses, and even redirect users. Middleware runs on the Edge Runtime, providing low-latency execution and the ability to handle requests before they reach your application code.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Creating Middleware</h2>
        <p className="text-gray-600 mt-2">
          Middleware is defined in a `middleware.js` or `middleware.ts` file at the root of your project (same level as `package.json`).
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Basic Middleware Structure</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// middleware.js (at project root)
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Your middleware logic here

  // Must return a response or call NextResponse.next()
  return NextResponse.next();
}

// Optional: Configure which paths the middleware runs on
export const config = {
  matcher: '/api/:path*',
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Middleware functions receive a request object and must return a response or call NextResponse.next().
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Middleware Execution</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">When Does Middleware Run?</h3>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li><strong>Before rendering:</strong> Runs before pages or API routes are executed</li>
              <li><strong>On every request:</strong> Executes for every incoming request (unless filtered by matcher)</li>
              <li><strong>On the edge:</strong> Runs on Vercel's Edge Runtime for low latency</li>
              <li><strong>Before rewrites/redirects:</strong> Executes before Next.js handles routing</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Execution Order</h3>
            <div className="bg-gray-50 p-3 rounded text-sm">
              <ol className="list-decimal ml-6 space-y-1">
                <li>User makes request</li>
                <li><strong>Middleware executes</strong> (can modify request/response)</li>
                <li>Next.js routing and rendering</li>
                <li>Response sent to user</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Matcher Configuration</h2>
        <p className="text-gray-600 mt-2">
          Control which paths your middleware runs on using the matcher configuration.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Matcher Patterns</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export const config = {
  matcher: [
    // Match all request paths
    '/',

    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',

    // Match specific paths
    '/dashboard/:path*',
    '/api/users/:path*',

    // Match paths with specific extensions
    '/((?!.+\\..+|_next).*)', // Match all except files with extensions

    // Match API routes
    '/api/:path*',

    // Match multiple patterns
    ['/dashboard/:path*', '/api/:path*'],

    // Match all paths except some
    {
      source: '/((?!admin).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use arrays or objects to define complex matching rules for your middleware.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Authentication Middleware</h2>
        <p className="text-gray-600 mt-2">
          One of the most common uses of middleware is to protect routes that require authentication.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">JWT Authentication</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Public paths that don't require authentication
  const publicPaths = ['/login', '/register', '/api/auth/login'];
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  if (isPublicPath) {
    return NextResponse.next();
  }

  // Check for authentication token
  const token = request.cookies.get('auth-token')?.value ||
                request.headers.get('authorization')?.replace('Bearer ', '');

  if (!token) {
    // Redirect to login for page requests
    if (!pathname.startsWith('/api/')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    // Return 401 for API requests
    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401 }
    );
  }

  try {
    // Verify the token
    const payload = verifyToken(token);

    // Add user info to headers for use in API routes
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', payload.userId);
    requestHeaders.set('x-user-role', payload.role);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

  } catch (error) {
    // Token is invalid
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('auth-token');
    return response;
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Middleware can verify authentication tokens and redirect unauthenticated users.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Request/Response Modification</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Adding Headers</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export function middleware(request) {
  // Add security headers
  const response = NextResponse.next();

  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Add security and custom headers to all responses.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Modifying Request Headers</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export function middleware(request) {
  // Add custom headers to the request
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-request-id', crypto.randomUUID());
  requestHeaders.set('x-request-time', Date.now().toString());

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Modify request headers before they reach your application.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Redirects and Rewrites</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Conditional Redirects</h3>
            <div className="bg-blue-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect old URLs to new ones
  const redirects = {
    '/old-page': '/new-page',
    '/blog/old-post': '/blog/new-post',
  };

  if (redirects[pathname]) {
    return NextResponse.redirect(
      new URL(redirects[pathname], request.url)
    );
  }

  // Redirect based on user agent (mobile redirect)
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /mobile|android|iphone/i.test(userAgent);

  if (isMobile && pathname === '/dashboard') {
    return NextResponse.redirect(
      new URL('/mobile/dashboard', request.url)
    );
  }

  return NextResponse.next();
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Redirect users based on various conditions.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">URL Rewrites</h3>
            <div className="bg-blue-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Rewrite API calls to external services
  if (pathname.startsWith('/api/external/')) {
    const newUrl = pathname.replace('/api/external/', '/api/v2/');
    return NextResponse.rewrite(new URL(newUrl, request.url));
  }

  // A/B testing - rewrite some users to new version
  const userId = request.cookies.get('user-id')?.value;
  if (userId && parseInt(userId) % 2 === 0) {
    if (pathname === '/checkout') {
      return NextResponse.rewrite(
        new URL('/checkout-new', request.url)
      );
    }
  }

  return NextResponse.next();
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Rewrite URLs internally without changing the user's URL.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">CORS Handling</h2>
        <p className="text-gray-600 mt-2">
          Handle Cross-Origin Resource Sharing (CORS) requests in middleware.
        </p>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">CORS Middleware</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export function middleware(request) {
  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  // Handle actual requests
  const response = NextResponse.next();

  // Add CORS headers to all responses
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return response;
}

export const config = {
  matcher: '/api/:path*',
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Handle CORS preflight requests and add appropriate headers.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Rate Limiting</h2>
        <p className="text-gray-600 mt-2">
          Implement rate limiting to protect your API from abuse.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Simple Rate Limiting</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import { NextResponse } from 'next/server';

// Simple in-memory rate limiting (use Redis in production)
const rateLimit = new Map();

function isRateLimited(identifier, limit = 100, windowMs = 15 * 60 * 1000) {
  const now = Date.now();
  const windowStart = now - windowMs;

  if (!rateLimit.has(identifier)) {
    rateLimit.set(identifier, []);
  }

  const requests = rateLimit.get(identifier);
  // Remove old requests outside the window
  const validRequests = requests.filter(time => time > windowStart);

  if (validRequests.length >= limit) {
    return true; // Rate limited
  }

  // Add current request
  validRequests.push(now);
  rateLimit.set(identifier, validRequests);

  return false;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only rate limit API routes
  if (!pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Get client identifier (IP address)
  const clientIP = request.headers.get('x-forwarded-for') ||
                   request.headers.get('x-real-ip') ||
                   'unknown';

  // Different limits for different endpoints
  let limit = 100; // Default
  if (pathname.startsWith('/api/auth/')) {
    limit = 5; // Stricter limit for auth
  } else if (pathname.startsWith('/api/admin/')) {
    limit = 50; // Moderate limit for admin
  }

  if (isRateLimited(clientIP, limit)) {
    return NextResponse.json(
      {
        error: 'Too many requests',
        retryAfter: 900 // 15 minutes
      },
      {
        status: 429,
        headers: {
          'Retry-After': '900',
        }
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Implement rate limiting to prevent API abuse.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Logging and Analytics</h2>
        <p className="text-gray-600 mt-2">
          Use middleware to log requests and collect analytics data.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Request Logging</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export function middleware(request) {
  const startTime = Date.now();
  const { method, url } = request;
  const userAgent = request.headers.get('user-agent') || '';
  const clientIP = request.headers.get('x-forwarded-for') ||
                   request.headers.get('x-real-ip') ||
                   'unknown';

  // Log the incoming request
  console.log(\`[\${new Date().toISOString()}] \${method} \${url} - IP: \${clientIP}\`);

  // Create response wrapper to log after completion
  const response = NextResponse.next();

  // Log response when it completes
  response.headers.set('x-middleware-logged', 'true');

  // Note: In production, you'd want to use a proper logging service
  // and handle async logging without blocking the response

  return response;
}

// For more detailed analytics
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const userId = request.cookies.get('user-id')?.value;
  const sessionId = request.cookies.get('session-id')?.value;

  // Track page views
  if (!pathname.startsWith('/api/') && !pathname.startsWith('/_next/')) {
    // Send to analytics service (async, don't block response)
    fetch('https://analytics.example.com/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'page_view',
        path: pathname,
        userId,
        sessionId,
        timestamp: new Date().toISOString(),
        userAgent: request.headers.get('user-agent'),
      }),
    }).catch(err => console.error('Analytics error:', err));
  }

  return NextResponse.next();
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Log requests and send analytics data without blocking responses.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Internationalization (i18n)</h2>
        <p className="text-gray-600 mt-2">
          Handle locale detection and routing in middleware.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Locale Detection</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import { NextResponse } from 'next/server';

const locales = ['en', 'es', 'fr', 'de'];
const defaultLocale = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if pathname already includes a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(\`/\${locale}/\`) || pathname === \`/\${locale}\`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detect locale from various sources
  let locale = defaultLocale;

  // 1. Check cookie
  const cookieLocale = request.cookies.get('locale')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    locale = cookieLocale;
  }

  // 2. Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage && !cookieLocale) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().split('-')[0])
      .find(lang => locales.includes(lang));

    if (preferredLocale) {
      locale = preferredLocale;
    }
  }

  // 3. Check subdomain (e.g., es.example.com)
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];
  if (locales.includes(subdomain)) {
    locale = subdomain;
  }

  // Redirect to localized path
  const newUrl = new URL(\`/\${locale}\${pathname}\`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Automatically detect and redirect users to their preferred locale.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Feature Flags</h2>
        <p className="text-gray-600 mt-2">
          Use middleware to enable/disable features based on conditions.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Feature Toggle</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Feature flags (in production, fetch from database/service)
  const features = {
    newDashboard: process.env.ENABLE_NEW_DASHBOARD === 'true',
    betaFeature: process.env.ENABLE_BETA_FEATURE === 'true',
    maintenance: process.env.MAINTENANCE_MODE === 'true',
  };

  // Maintenance mode
  if (features.maintenance && !pathname.startsWith('/maintenance')) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }

  // Feature redirects
  if (pathname === '/dashboard' && features.newDashboard) {
    return NextResponse.redirect(new URL('/dashboard-new', request.url));
  }

  // Beta feature access control
  if (pathname.startsWith('/beta/') && !features.betaFeature) {
    return NextResponse.redirect(new URL('/coming-soon', request.url));
  }

  // A/B testing based on user ID
  const userId = request.cookies.get('user-id')?.value;
  if (userId && pathname === '/pricing') {
    const variant = parseInt(userId) % 2 === 0 ? 'A' : 'B';
    return NextResponse.rewrite(
      new URL(\`/pricing-\${variant}\`, request.url)
    );
  }

  return NextResponse.next();
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Control feature access and routing based on feature flags.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Middleware Chaining</h2>
        <p className="text-gray-600 mt-2">
          Combine multiple middleware functions for complex logic.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Middleware Composition</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// middleware/auth.js
export function authMiddleware(request) {
  const token = request.cookies.get('auth-token');
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

// middleware/rateLimit.js
export function rateLimitMiddleware(request) {
  // Rate limiting logic...
  return NextResponse.next();
}

// middleware/security.js
export function securityMiddleware(request) {
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  return response;
}

// middleware.js
import { authMiddleware } from './middleware/auth';
import { rateLimitMiddleware } from './middleware/rateLimit';
import { securityMiddleware } from './middleware/security';

export function middleware(request) {
  // Chain middlewares
  let response = authMiddleware(request);
  if (response.status !== 200) return response;

  response = rateLimitMiddleware(request);
  if (response.status !== 200) return response;

  response = securityMiddleware(request);

  return response;
}

// Alternative: Array of middlewares
const middlewares = [authMiddleware, rateLimitMiddleware, securityMiddleware];

export function middleware(request) {
  for (const mw of middlewares) {
    const response = mw(request);
    if (response.status !== 200) {
      return response;
    }
  }
  return NextResponse.next();
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Compose multiple middleware functions for modular middleware logic.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Edge Runtime Limitations</h2>
        <p className="text-gray-600 mt-2">
          Middleware runs on the Edge Runtime, which has some limitations compared to Node.js.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Edge Runtime Constraints</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-red-600">Not Supported:</h4>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Node.js APIs (fs, path, crypto with full functionality)</li>
                <li>process object</li>
                <li>__dirname and __filename</li>
                <li>npm packages that depend on Node.js APIs</li>
                <li>Incremental Cache (revalidateTag, etc.)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-600">Supported:</h4>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Fetch API</li>
                <li>Web Crypto API</li>
                <li>Web Streams</li>
                <li>URL and URLSearchParams</li>
                <li>Headers and Request/Response</li>
                <li>Atomics and SharedArrayBuffer</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-3 rounded font-mono text-sm mt-4">
            <pre>{`// ✅ Works in Edge Runtime
export function middleware(request) {
  const crypto = await import('crypto');
  const hash = crypto.createHash('sha256');
  // ... use hash
}

// ❌ Doesn't work in Edge Runtime
export function middleware(request) {
  const fs = require('fs'); // Node.js API not available
  // ...
}

// ✅ Alternative for Edge Runtime
export function middleware(request) {
  const encoder = new TextEncoder();
  const data = encoder.encode('hello');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  // ... use hashBuffer
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use Web APIs instead of Node.js APIs in middleware.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Testing Middleware</h2>
        <p className="text-gray-600 mt-2">
          Test your middleware to ensure it behaves correctly.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Middleware Testing</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// __tests__/middleware.test.js
import { middleware } from '../middleware';
import { NextRequest } from 'next/server';

describe('middleware', () => {
  it('should redirect unauthenticated users', () => {
    const request = new NextRequest('http://localhost:3000/dashboard');
    const response = middleware(request);

    expect(response.status).toBe(302);
    expect(response.headers.get('location')).toBe('http://localhost:3000/login');
  });

  it('should allow authenticated users', () => {
    const request = new NextRequest('http://localhost:3000/dashboard');
    request.cookies.set('auth-token', 'valid-token');

    const response = middleware(request);
    expect(response.status).toBe(200);
  });

  it('should handle rate limiting', () => {
    // Make multiple requests quickly
    for (let i = 0; i < 101; i++) {
      const request = new NextRequest('http://localhost:3000/api/users');
      request.headers.set('x-forwarded-for', '192.168.1.1');

      const response = middleware(request);
      if (i === 100) {
        expect(response.status).toBe(429);
      }
    }
  });

  it('should add security headers', () => {
    const request = new NextRequest('http://localhost:3000/');
    const response = middleware(request);

    expect(response.headers.get('X-Frame-Options')).toBe('DENY');
    expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff');
  });
});`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Write unit tests to verify middleware behavior.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Keep it fast:</strong> Middleware runs on every request, so keep it lightweight</li>
            <li><strong>Use appropriate matchers:</strong> Only run middleware on paths that need it</li>
            <li><strong>Handle errors gracefully:</strong> Don't let middleware crashes break your app</li>
            <li><strong>Test thoroughly:</strong> Test all code paths and edge cases</li>
            <li><strong>Use Edge Runtime APIs:</strong> Avoid Node.js APIs that aren't available</li>
            <li><strong>Consider performance:</strong> Async operations can slow down responses</li>
            <li><strong>Document behavior:</strong> Make middleware behavior clear for other developers</li>
            <li><strong>Monitor and log:</strong> Track middleware performance and errors</li>
            <li><strong>Version carefully:</strong> Middleware changes can affect the entire application</li>
            <li><strong>Security first:</strong> Use middleware for security headers and authentication</li>
          </ul>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Middleware in Next.js is a powerful tool that runs on the Edge Runtime before your application code. It can handle authentication, add security headers, implement rate limiting, perform redirects and rewrites, handle CORS, and much more. Middleware functions receive a request object and must return a response or call NextResponse.next(). Use the matcher configuration to control which paths the middleware runs on. Keep middleware fast and lightweight since it executes on every request. Remember that middleware runs on the Edge Runtime, so you can only use Web APIs, not Node.js APIs. Test your middleware thoroughly and follow security best practices to protect your application.
        </p>
      </section>
    </main>
  );
}