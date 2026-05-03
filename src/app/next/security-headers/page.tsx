export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Security Headers in Next.js</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Security Headers?</h2>
        <p className="text-gray-600 mt-2">
          Security headers are HTTP response headers that help protect web applications from common security vulnerabilities. They instruct browsers on how to behave when handling your site's content, preventing attacks like cross-site scripting (XSS), clickjacking, and other code injection attacks. Next.js provides built-in support for security headers through middleware and configuration options.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Essential Security Headers</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Content Security Policy (CSP)</h3>
            <p className="text-gray-600 mt-2">Prevents XSS attacks by controlling which resources can be loaded and executed.</p>
            <div className="bg-blue-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Strict CSP - only allow same-origin resources
Content-Security-Policy: default-src 'self'

// Allow specific domains
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://trusted-cdn.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https:;
  font-src 'self' https://fonts.gstatic.com`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Protects against XSS by restricting resource loading to trusted sources.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">X-Frame-Options</h3>
            <p className="text-gray-600 mt-2">Prevents clickjacking attacks by controlling whether your site can be embedded in frames.</p>
            <div className="bg-green-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Prevent all framing
X-Frame-Options: DENY

// Allow only same-origin framing
X-Frame-Options: SAMEORIGIN

// Allow framing from specific origin
Content-Security-Policy: frame-ancestors 'self' https://trusted-site.com`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Modern alternative is CSP's frame-ancestors directive.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">X-Content-Type-Options</h3>
            <p className="text-gray-600 mt-2">Prevents MIME type sniffing attacks.</p>
            <div className="bg-purple-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`X-Content-Type-Options: nosniff`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Forces browsers to respect the declared content type.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-red-600">Strict-Transport-Security (HSTS)</h3>
            <p className="text-gray-600 mt-2">Forces browsers to use HTTPS connections.</p>
            <div className="bg-red-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Force HTTPS for 1 year, include subdomains
Strict-Transport-Security: max-age=31536000; includeSubDomains

// With preload (browsers will always use HTTPS)
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Prevents protocol downgrade attacks and cookie hijacking.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Next.js Security Headers Setup</h2>
        <p className="text-gray-600 mt-2">
          Configure security headers in Next.js using middleware or the next.config.js file.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Using Middleware</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // Security headers
  const securityHeaders = {
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self'",
      "media-src 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'"
    ].join('; ')
  };

  // Apply headers to response
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Set security headers globally using Next.js middleware.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Content Security Policy (CSP)</h2>
        <p className="text-gray-600 mt-2">
          Implement CSP to prevent XSS and other injection attacks.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">CSP Implementation</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// lib/security.js
export function generateCSP(nonce) {
  const isDev = process.env.NODE_ENV === 'development';

  const csp = {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'", // For inline scripts (use nonce in production)
      "'unsafe-eval'",   // For eval() (avoid if possible)
      ...(nonce ? ["'nonce-\${nonce}'"] : []),
      ...(isDev ? ["'unsafe-inline'"] : [])
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'", // For inline styles
      "https://fonts.googleapis.com"
    ],
    'img-src': [
      "'self'",
      "data:",           // For base64 images
      "https:",          // External images
      "blob:"            // Blob URLs
    ],
    'font-src': [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    'connect-src': [
      "'self'",
      "https://api.example.com", // Your API endpoints
      ...(isDev ? ["ws:", "wss:"] : []) // WebSocket in development
    ],
    'media-src': ["'self'"],
    'object-src': ["'none'"], // Block plugins
    'frame-ancestors': ["'self'"], // Replace X-Frame-Options
    'base-uri': ["'self'"],
    'form-action': ["'self'"]
  };

  // Convert to header string
  return Object.entries(csp)
    .map(([directive, sources]) => \`\${directive} \${sources.join(' ')}\`)
    .join('; ');
}

// middleware.js with CSP
import { generateCSP } from '@/lib/security';

export function middleware(request) {
  const response = NextResponse.next();

  // Generate nonce for inline scripts
  const nonce = crypto.randomBytes(16).toString('base64');

  // Set CSP header
  response.headers.set('Content-Security-Policy', generateCSP(nonce));

  // Pass nonce to pages via headers
  response.headers.set('X-Nonce', nonce);

  return response;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Generate dynamic CSP headers with nonces for inline scripts.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">CSP Nonces and Hashes</h2>
        <p className="text-gray-600 mt-2">
          Use nonces or hashes to allow specific inline scripts and styles while maintaining CSP security.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Nonce Implementation</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/layout.tsx
import { headers } from 'next/headers';

export default function RootLayout({ children }) {
  const headersList = headers();
  const nonce = headersList.get('X-Nonce');

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content={\`
          default-src 'self';
          script-src 'self' 'nonce-\${nonce}';
          style-src 'self' 'nonce-\${nonce}'
        \`} />
      </head>
      <body>
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: \`console.log('This inline script is allowed');\`
          }}
        />
        {children}
      </body>
    </html>
  );
}

// For Next.js scripts, add nonce to _document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const nonce = ctx.req.headers['x-nonce'];

    return { ...initialProps, nonce };
  }

  render() {
    const nonce = this.props.nonce;

    return (
      <Html>
        <Head nonce={nonce} />
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use nonces to allow specific inline scripts while maintaining CSP security.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Permissions Policy</h2>
        <p className="text-gray-600 mt-2">
          Control access to browser features and APIs.
        </p>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Feature Permissions</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Block camera and microphone access
Permissions-Policy: camera=(), microphone=()

// Allow geolocation only for same origin
Permissions-Policy: geolocation=(self)

// Allow camera for specific origins
Permissions-Policy: camera=(self "https://example.com")

// Complex permissions
Permissions-Policy:
  camera=(),
  microphone=(),
  geolocation=(self),
  gyroscope=(),
  accelerometer=(),
  magnetometer=(),
  payment=(self),
  usb=(),
  autoplay=(self),
  encrypted-media=(self)`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Control which origins can access powerful browser features.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Cross-Origin Policies</h2>
        <p className="text-gray-600 mt-2">
          Configure CORS and other cross-origin policies.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">CORS Headers</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// API routes CORS
// app/api/data/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ data: 'success' });

  // CORS headers
  response.headers.set('Access-Control-Allow-Origin', 'https://yourdomain.com');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Max-Age', '86400'); // 24 hours

  return response;
}

export async function OPTIONS() {
  const response = NextResponse.json({}, { status: 200 });

  // Handle preflight requests
  response.headers.set('Access-Control-Allow-Origin', 'https://yourdomain.com');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return response;
}

// Global CORS middleware
// middleware.js
export function middleware(request) {
  const response = NextResponse.next();

  // Allow specific origins
  const allowedOrigins = [
    'https://yourdomain.com',
    'https://staging.yourdomain.com'
  ];

  const origin = request.headers.get('origin');

  if (allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');

  return response;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Configure CORS headers for cross-origin requests.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Security Headers for Different Environments</h2>
        <p className="text-gray-600 mt-2">
          Configure different security headers for development and production.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Environment-Specific Headers</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// lib/security-headers.js
export function getSecurityHeaders(request) {
  const isProduction = process.env.NODE_ENV === 'production';
  const isLocalhost = request.headers.get('host')?.includes('localhost');

  const headers = {
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  };

  // Production-only headers
  if (isProduction && !isLocalhost) {
    headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload';
    headers['Content-Security-Policy'] = [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "connect-src 'self'",
      "frame-ancestors 'self'"
    ].join('; ');
  }

  // Development headers (more permissive)
  if (!isProduction) {
    headers['Content-Security-Policy'] = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' ws: wss:",
      "frame-ancestors 'self'"
    ].join('; ');
  }

  return headers;
}

// middleware.js
import { getSecurityHeaders } from '@/lib/security-headers';

export function middleware(request) {
  const response = NextResponse.next();

  const securityHeaders = getSecurityHeaders(request);

  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Configure different security headers for development and production environments.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Monitoring and Debugging</h2>
        <p className="text-gray-600 mt-2">
          Monitor security headers and debug CSP violations.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">CSP Violation Reporting</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Report CSP violations
Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  report-uri /api/security/csp-report;
  report-to csp-endpoint;

// CSP report endpoint
// app/api/security/csp-report/route.js
export async function POST(request) {
  try {
    const report = await request.json();

    // Log the violation
    console.error('CSP Violation:', {
      documentUri: report['document-uri'],
      violatedDirective: report['violated-directive'],
      originalPolicy: report['original-policy'],
      blockedUri: report['blocked-uri'],
      timestamp: new Date().toISOString()
    });

    // Store in database for analysis
    await db.securityReports.create({
      type: 'csp-violation',
      data: report,
      timestamp: new Date()
    });

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('CSP Report Error:', error);
    return NextResponse.json({ error: 'Failed to process report' }, { status: 500 });
  }
}

// Report-To header for modern browsers
Content-Security-Policy-Report-Only:
  default-src 'self';
  report-to csp-endpoint;

Report-To: {
  "group": "csp-endpoint",
  "max_age": 10886400,
  "endpoints": [{
    "url": "https://yourdomain.com/api/security/csp-report"
  }]
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Set up CSP violation reporting to monitor and debug security issues.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Security Headers Testing</h2>
        <p className="text-gray-600 mt-2">
          Test your security headers implementation.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Header Testing</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Test security headers
// __tests__/security-headers.test.js
import { getSecurityHeaders } from '../lib/security-headers';

describe('Security Headers', () => {
  test('production headers include HSTS', () => {
    process.env.NODE_ENV = 'production';

    const mockRequest = {
      headers: { get: () => 'example.com' }
    };

    const headers = getSecurityHeaders(mockRequest);

    expect(headers['Strict-Transport-Security']).toBeDefined();
    expect(headers['Content-Security-Policy']).toBeDefined();
  });

  test('development headers are more permissive', () => {
    process.env.NODE_ENV = 'development';

    const mockRequest = {
      headers: { get: () => 'localhost:3000' }
    };

    const headers = getSecurityHeaders(mockRequest);

    expect(headers['Content-Security-Policy']).toContain('unsafe-inline');
    expect(headers['Strict-Transport-Security']).toBeUndefined();
  });
});

// Manual testing with curl
curl -I https://yourdomain.com

// Check specific headers
curl -s -D - https://yourdomain.com -o /dev/null | grep -i "content-security-policy\|x-frame-options\|strict-transport-security"

// Test CSP violations
// 1. Open browser dev tools
// 2. Go to your site
// 3. Check console for CSP violation messages
// 4. Check network tab for security headers`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Write tests and manually verify security headers are working correctly.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Security Header Mistakes</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Overly permissive CSP:</strong> Don't use 'unsafe-inline' or 'unsafe-eval' in production</li>
            <li><strong>Missing HTTPS enforcement:</strong> Always use HSTS in production</li>
            <li><strong>Wildcard origins:</strong> Avoid * in CSP directives</li>
            <li><strong>Ignoring CSP reports:</strong> Set up violation reporting and monitor them</li>
            <li><strong>Not testing headers:</strong> Verify headers are present and working</li>
            <li><strong>Mixed content:</strong> Ensure all resources load over HTTPS</li>
            <li><strong>Development shortcuts:</strong> Don't deploy development headers to production</li>
            <li><strong>Outdated policies:</strong> Regularly review and update security headers</li>
            <li><strong>Missing frame protection:</strong> Always set X-Frame-Options or frame-ancestors</li>
            <li><strong>No MIME protection:</strong> Always include X-Content-Type-Options: nosniff</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Security Headers Checklist</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Essential Headers</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>✅ Content-Security-Policy</li>
                <li>✅ X-Frame-Options or frame-ancestors</li>
                <li>✅ X-Content-Type-Options: nosniff</li>
                <li>✅ Strict-Transport-Security (HTTPS only)</li>
                <li>✅ Referrer-Policy</li>
                <li>✅ Permissions-Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Optional but Recommended</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>🔄 X-XSS-Protection (legacy)</li>
                <li>🔄 X-Permitted-Cross-Domain-Policies</li>
                <li>🔄 Cross-Origin-Embedder-Policy</li>
                <li>🔄 Cross-Origin-Opener-Policy</li>
                <li>🔄 Cross-Origin-Resource-Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Security headers are crucial for protecting Next.js applications from common web vulnerabilities. Implement Content Security Policy (CSP) to prevent XSS attacks, use X-Frame-Options or CSP's frame-ancestors to prevent clickjacking, and set X-Content-Type-Options to prevent MIME sniffing. Enforce HTTPS with Strict-Transport-Security (HSTS) and control browser features with Permissions-Policy. Configure headers using Next.js middleware for global protection, and use different policies for development and production environments. Set up CSP violation reporting to monitor and debug security issues, and regularly test your headers to ensure they're working correctly. Avoid common mistakes like overly permissive policies or missing HTTPS enforcement, and maintain a security headers checklist to ensure comprehensive protection.
        </p>
      </section>
    </main>
  );
}