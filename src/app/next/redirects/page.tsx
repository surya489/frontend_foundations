export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Redirects</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Redirects?</h2>
        <p className="text-gray-600 mt-2">
          Redirects in Next.js allow you to automatically send users from one URL to another. This is useful for handling broken links, moving pages, implementing authentication flows, and managing URL changes. Next.js provides several ways to handle redirects depending on whether you need them on the server-side or client-side.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Types of Redirects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Server-Side Redirects</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Happen on the server before page renders</li>
              <li>SEO-friendly (search engines see the redirect)</li>
              <li>Can redirect to external URLs</li>
              <li>Used in Server Components and API routes</li>
              <li>Immediate redirect (no flash of content)</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Client-Side Redirects</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Happen in the browser after page loads</li>
              <li>Not SEO-friendly (search engines see original URL)</li>
              <li>Only work for internal Next.js routes</li>
              <li>Used in Client Components with useRouter</li>
              <li>May show brief flash of content</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server-Side Redirects</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">redirect() Function</h3>
            <p className="text-gray-600 text-sm mb-2">The redirect() function from 'next/navigation' performs immediate server-side redirects.</p>
            <div className="bg-blue-50 p-3 rounded font-mono text-sm">
              <pre>{`import { redirect } from 'next/navigation';

export default async function OldProductPage({ params }) {
  // Check if product exists
  const product = await fetchProduct(params.id);

  if (!product) {
    redirect('/products'); // Redirect to products listing
  }

  // If product exists, render the page
  return <ProductDetails product={product} />;
}

// Redirect based on user authentication
export default async function Dashboard() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login'); // Redirect unauthenticated users
  }

  return <DashboardContent user={user} />;
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">redirect() throws an error that Next.js catches and converts to an HTTP redirect.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Redirect Types</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm">
              <pre>{`import { redirect } from 'next/navigation';

// Temporary redirect (302) - Default
redirect('/new-page');

// Permanent redirect (308)
redirect('/new-page', 'push'); // Note: 'push' is for client-side

// Actually, redirect() always does 307 (temporary)
// For permanent redirects, use next.config.js`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">The redirect() function performs 307 temporary redirects by default.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Client-Side Redirects</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">useRouter Hook</h3>
            <p className="text-gray-600 text-sm mb-2">Use the useRouter hook in Client Components for programmatic navigation.</p>
            <div className="bg-green-50 p-3 rounded font-mono text-sm">
              <pre>{`'use client';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      router.push('/dashboard'); // Redirect after successful login
    }
  };

  return <form>...</form>;
}

// Conditional redirects
export function ProtectedContent() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.replace('/login'); // Replace current history entry
    } else {
      setUser(currentUser);
    }
  }, [router]);

  if (!user) return <div>Loading...</div>;
  return <div>Protected content</div>;
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Client-side redirects happen after the component mounts and can be conditional.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">router.push() vs router.replace()</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div className="bg-blue-50 p-3 rounded">
                <h4 className="font-semibold text-blue-700">router.push()</h4>
                <p className="text-gray-600 text-sm">Adds new entry to browser history</p>
                <div className="bg-white p-2 rounded font-mono text-xs mt-1">
                  <pre>{`router.push('/dashboard');
// User can click back button`}</pre>
                </div>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <h4 className="font-semibold text-green-700">router.replace()</h4>
                <p className="text-gray-600 text-sm">Replaces current history entry</p>
                <div className="bg-white p-2 rounded font-mono text-xs mt-1">
                  <pre>{`router.replace('/dashboard');
// User cannot go back`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Configuration-Based Redirects</h2>
        <p className="text-gray-600 mt-2">
          For static redirects that don't require logic, use next.config.js to define redirects at the application level.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">next.config.js Redirects</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// next.config.js
module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true, // 308 permanent redirect
      },

      // Temporary redirect
      {
        source: '/temp',
        destination: '/permanent',
        permanent: false, // 307 temporary redirect
      },

      // Wildcard redirects
      {
        source: '/blog/:slug',
        destination: '/posts/:slug',
        permanent: true,
      },

      // External redirects
      {
        source: '/github',
        destination: 'https://github.com/vercel/next.js',
        permanent: true,
      },

      // Conditional redirects
      {
        source: '/admin/:path*',
        destination: '/login',
        permanent: false,
        has: [
          {
            type: 'cookie',
            key: 'auth-token',
            value: undefined, // Redirect if cookie is missing
          },
        ],
      },
    ];
  },
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Configuration redirects are processed at build time and are very fast.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">API Route Redirects</h2>
        <p className="text-gray-600 mt-2">
          In API routes, you can perform redirects using NextResponse.redirect().
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">API Route Redirects</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/api/auth/callback/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (code) {
    // Process authentication
    const token = await exchangeCodeForToken(code);

    // Redirect to dashboard with token
    const response = NextResponse.redirect(
      new URL('/dashboard', request.url)
    );

    // Set authentication cookie
    response.cookies.set('auth-token', token);

    return response;
  }

  // Redirect to login on failure
  return NextResponse.redirect(new URL('/login', request.url));
}

// Short URL service
export async function GET(request, { params }) {
  const shortCode = params.code;

  const originalUrl = await getOriginalUrl(shortCode);

  if (originalUrl) {
    return NextResponse.redirect(originalUrl);
  }

  return NextResponse.json({ error: 'URL not found' }, { status: 404 });
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            API routes can redirect to internal or external URLs and set cookies/headers.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Redirect Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Authentication Redirects</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Server Component - Check auth on page load
export default async function ProtectedPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  return <ProtectedContent user={user} />;
}

// Client Component - Redirect after logout
'use client';
export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
}

// API Route - OAuth callback
export async function GET(request) {
  const code = new URL(request.url).searchParams.get('code');

  if (code) {
    const tokens = await exchangeCode(code);
    const response = NextResponse.redirect('/dashboard');
    response.cookies.set('auth-token', tokens.access_token);
    return response;
  }

  return NextResponse.redirect('/login?error=auth_failed');
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Handle authentication flows with appropriate redirects.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">URL Migration</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// next.config.js - Handle old URLs
async redirects() {
  return [
    // Blog migration
    {
      source: '/blog/:slug',
      destination: '/posts/:slug',
      permanent: true,
    },

    // Category restructuring
    {
      source: '/category/:name',
      destination: '/topics/:name',
      permanent: true,
    },

    // Remove trailing slashes
    {
      source: '/:path*/',
      destination: '/:path*',
      permanent: true,
    },
  ];
}

// Component-level redirects for complex logic
export default async function OldProductPage({ params }) {
  // Check if product was moved or renamed
  const newSlug = await getNewProductSlug(params.slug);

  if (newSlug && newSlug !== params.slug) {
    redirect(\`/products/\${newSlug}\`, 'push');
  }

  // Continue with normal rendering...
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Handle URL changes and migrations gracefully.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Conditional Redirects</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Device-specific redirects
export default async function DownloadPage() {
  const userAgent = headers().get('user-agent') || '';

  if (userAgent.includes('Android')) {
    redirect('https://play.google.com/store/apps/...');
  } else if (userAgent.includes('iPhone')) {
    redirect('https://apps.apple.com/app/...');
  }

  return <DownloadLinks />;
}

// A/B Testing redirects
export default async function LandingPage() {
  const variant = await getABTestVariant();

  if (variant === 'B') {
    redirect('/landing-page-b');
  }

  return <LandingPageA />;
}

// Geographic redirects
export default async function HomePage() {
  const country = await getUserCountry();

  if (country === 'US') {
    redirect('/us');
  } else if (country === 'UK') {
    redirect('/uk');
  }

  return <DefaultHomePage />;
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Redirect based on user context, location, or testing conditions.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Middleware Redirects</h2>
        <p className="text-gray-600 mt-2">
          Middleware runs before every request and can perform redirects based on request conditions.
        </p>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">middleware.js</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect old admin routes
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('auth-token');

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redirect www to non-www
  if (request.headers.get('host')?.startsWith('www.')) {
    return NextResponse.redirect(
      new URL(request.url.replace('www.', ''))
    );
  }

  // Country-based redirects
  const country = request.geo?.country;

  if (country === 'CN' && pathname === '/pricing') {
    return NextResponse.redirect(new URL('/pricing/cn', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/pricing',
  ],
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Middleware can redirect based on cookies, geography, headers, and more.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">SEO Considerations</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-yellow-600">Server-Side Redirects</h3>
              <p className="text-gray-600 text-sm">Search engines can follow server-side redirects and transfer SEO value.</p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600">Client-Side Redirects</h3>
              <p className="text-gray-600 text-sm">Search engines may not follow client-side redirects, potentially hurting SEO.</p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600">Permanent vs Temporary</h3>
              <p className="text-gray-600 text-sm">Use 301/308 for permanent moves, 302/307 for temporary redirects.</p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600">Redirect Chains</h3>
              <p className="text-gray-600 text-sm">Avoid long redirect chains as they slow down page loads and dilute SEO value.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Use server-side redirects for SEO:</strong> Prefer redirect() and next.config.js for important redirects</li>
            <li><strong>Use client-side for user interactions:</strong> Use useRouter for redirects after form submissions</li>
            <li><strong>Choose correct redirect type:</strong> Permanent (301/308) for moved content, temporary (302/307) for temporary changes</li>
            <li><strong>Avoid redirect loops:</strong> Ensure redirects don't create circular references</li>
            <li><strong>Test redirects thoroughly:</strong> Verify all redirect paths work and don't break user flows</li>
            <li><strong>Monitor performance:</strong> Too many redirects can slow down your application</li>
            <li><strong>Document redirect logic:</strong> Keep track of why redirects exist for future maintenance</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Issues and Solutions</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-red-600">Redirect Loops</h3>
              <p className="text-gray-600 text-sm">Solution: Check conditions carefully and avoid circular redirects.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Client-Side Flash</h3>
              <p className="text-gray-600 text-sm">Solution: Use server-side redirects for initial page loads.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">SEO Problems</h3>
              <p className="text-gray-600 text-sm">Solution: Use server-side redirects for SEO-critical pages.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Broken User Flows</h3>
              <p className="text-gray-600 text-sm">Solution: Test all redirect scenarios and edge cases.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Migration from Pages Router</h2>
        <p className="text-gray-600 mt-2">
          If migrating from Pages Router, note that redirect() moved from 'next/navigation' and the API is slightly different.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">API Changes</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Pages Router (getServerSideProps)
export async function getServerSideProps(context) {
  const { slug } = context.params;

  // Fetch data
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return { props: { post } };
}

// App Router (Server Component)
import { redirect } from 'next/navigation';

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    redirect('/404');
  }

  return <PostContent post={post} />;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            App Router uses the redirect() function instead of return objects.
          </p>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Next.js provides multiple ways to handle redirects depending on your needs. Use server-side redirects (redirect() function or next.config.js) for SEO-critical redirects and initial page loads. Use client-side redirects (useRouter) for user interactions and conditional navigation. Choose the appropriate redirect type (permanent vs temporary) based on whether the redirect is meant to be long-term or temporary. Always test your redirects thoroughly to ensure they work correctly and don't create loops or break user flows.
        </p>
      </section>
    </main>
  );
}