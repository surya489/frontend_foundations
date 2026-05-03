export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">useRouter</h1>

      <section>
        <h2 className="text-xl font-semibold">What is useRouter?</h2>
        <p className="text-gray-600 mt-2">
          useRouter is a React hook provided by Next.js that gives you access to the router object. It allows you to programmatically navigate between pages, access the current route information, and perform various navigation-related operations. Unlike the Link component which handles declarative navigation, useRouter enables imperative navigation from within your components.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Usage</h2>
        <p className="text-gray-600 mt-2">
          Import useRouter from 'next/navigation' and call it in your Client Component. Remember, useRouter can only be used in Client Components (components with 'use client').
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Getting the Router Instance</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import { useRouter } from 'next/navigation';

export function NavigationButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  return (
    <button onClick={handleClick}>
      Go to Dashboard
    </button>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            useRouter returns a router object with methods for navigation and route information.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Navigation Methods</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">router.push()</h3>
            <p className="text-gray-600 text-sm mb-2">Navigate to a new page and add it to the browser history.</p>
            <div className="bg-blue-50 p-3 rounded font-mono text-sm">
              <pre>{`// Navigate to a page
router.push('/products');

// With dynamic routes
router.push(\`/products/\${productId}\`);

// With query parameters
router.push('/search?q=javascript');

// With state (scroll position preserved)
router.push('/about', { scroll: false });`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">router.replace()</h3>
            <p className="text-gray-600 text-sm mb-2">Navigate to a new page and replace the current history entry.</p>
            <div className="bg-green-50 p-3 rounded font-mono text-sm">
              <pre>{`// Replace current page in history
router.replace('/login');

// Useful for redirects after actions
const handleSubmit = async () => {
  await submitForm();
  router.replace('/dashboard'); // User can't go back to form
};

// After authentication
router.replace('/dashboard'); // No back button to login`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">router.back()</h3>
            <p className="text-gray-600 text-sm mb-2">Go back to the previous page in history.</p>
            <div className="bg-purple-50 p-3 rounded font-mono text-sm">
              <pre>{`// Go back one page
router.back();

// Useful for cancel buttons
<button onClick={() => router.back()}>
  Cancel
</button>

// Or custom back buttons
function BackButton() {
  return (
    <button onClick={() => router.back()}>
      ← Back
    </button>
  );
}`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-orange-600">router.forward()</h3>
            <p className="text-gray-600 text-sm mb-2">Go forward to the next page in history (if available).</p>
            <div className="bg-orange-50 p-3 rounded font-mono text-sm">
              <pre>{`// Go forward one page
router.forward();

// Usually used in custom navigation components
function NavigationControls() {
  return (
    <div>
      <button onClick={() => router.back()}>← Back</button>
      <button onClick={() => router.forward()}>Forward →</button>
    </div>
  );
}`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-red-600">router.refresh()</h3>
            <p className="text-gray-600 text-sm mb-2">Refresh the current page, re-running server components.</p>
            <div className="bg-red-50 p-3 rounded font-mono text-sm">
              <pre>{`// Refresh current page
router.refresh();

// Useful after mutations
const handleDelete = async (id) => {
  await deleteItem(id);
  router.refresh(); // Re-run server components to show updated data
};

// Or manual refresh buttons
<button onClick={() => router.refresh()}>
  Refresh Data
</button>`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Reading Route Information</h2>
        <p className="text-gray-600 mt-2">
          useRouter also provides methods to read information about the current route and navigation state.
        </p>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Route Information Methods</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm">
              <pre>{`'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function RouteInfo() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div>
      <p>Current path: {pathname}</p>
      <p>Query params: {searchParams.toString()}</p>

      <button onClick={() => router.push('/settings')}>
        Go to Settings
      </button>
    </div>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">While you can access route info through useRouter, dedicated hooks are usually preferred.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Form Submissions</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: new FormData(e.target)
      });

      if (response.ok) {
        router.push('/dashboard'); // Navigate after successful login
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit">Login</button>
    </form>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Navigate programmatically after form submission or API calls.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Conditional Navigation</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.replace('/login'); // Redirect to login if not authenticated
    }
  }, [router]);

  return children;
}

// Or in event handlers
function handleAction(user) {
  if (user.isAdmin) {
    router.push('/admin');
  } else {
    router.push('/dashboard');
  }
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Navigate based on conditions like authentication status or user permissions.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Dynamic Routing</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';
import { useRouter } from 'next/navigation';

export function ProductCard({ product }) {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(\`/products/\${product.id}\`);
  };

  const handleEdit = () => {
    router.push(\`/products/\${product.id}/edit\`);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={handleViewDetails}>View Details</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Navigate to dynamic routes with interpolated IDs or parameters.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Navigation Options</h2>
        <p className="text-gray-600 mt-2">
          Both push() and replace() accept an optional options object to control navigation behavior.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Navigation Options</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Control scroll behavior
router.push('/about', { scroll: false }); // Don't scroll to top
router.push('/products', { scroll: true }); // Scroll to top (default)

// With replace
router.replace('/dashboard', { scroll: false });

// Practical example: Stay at current scroll position
function handleFilter() {
  router.replace(\`/products?category=\${category}\`, {
    scroll: false // Keep user's scroll position
  });
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            The scroll option controls whether the page scrolls to the top after navigation.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Error Handling</h2>
        <p className="text-gray-600 mt-2">
          Handle navigation errors gracefully, especially when dealing with dynamic routes or external redirects.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Safe Navigation</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import { useRouter } from 'next/navigation';

export function SafeNavigation() {
  const router = useRouter();

  const handleNavigation = (path) => {
    try {
      router.push(path);
    } catch (error) {
      console.error('Navigation failed:', error);
      // Fallback: use window.location for external URLs
      window.location.href = path;
    }
  };

  const handleExternalLink = (url) => {
    // For external URLs, use window.location
    window.location.href = url;
  };

  return (
    <div>
      <button onClick={() => handleNavigation('/dashboard')}>
        Go to Dashboard
      </button>
      <button onClick={() => handleExternalLink('https://google.com')}>
        Google
      </button>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Wrap navigation calls in try-catch blocks and handle external URLs differently.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">useRouter vs Link Component</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">useRouter (Imperative)</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Programmatic navigation</li>
              <li>After form submissions</li>
              <li>Conditional navigation</li>
              <li>Authentication redirects</li>
              <li>Dynamic route building</li>
              <li>Navigation in event handlers</li>
            </ul>
            <div className="bg-blue-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`router.push('/dashboard')`}</pre>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Link Component (Declarative)</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Static navigation links</li>
              <li>Navigation menus</li>
              <li>Breadcrumb navigation</li>
              <li>SEO-friendly links</li>
              <li>Automatic prefetching</li>
              <li>Keyboard accessible</li>
            </ul>
            <div className="bg-green-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`<Link href="/about"><a>About</a></Link>`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Advanced Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Navigation Guards</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useNavigationGuard(shouldBlock = false) {
  const router = useRouter();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (shouldBlock) {
        e.preventDefault();
        e.returnValue = ''; // Chrome requires returnValue to be set
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [shouldBlock]);

  const confirmNavigation = (path) => {
    if (shouldBlock) {
      const confirmed = window.confirm('You have unsaved changes. Leave anyway?');
      if (confirmed) {
        router.push(path);
      }
    } else {
      router.push(path);
    }
  };

  return { confirmNavigation };
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Prevent navigation when users have unsaved changes.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Programmatic Redirects</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function RedirectHandler({ to, condition }) {
  const router = useRouter();

  useEffect(() => {
    if (condition) {
      router.replace(to);
    }
  }, [condition, to, router]);

  return null; // This component doesn't render anything
}

// Usage in pages
export default function OldPage() {
  return (
    <RedirectHandler
      to="/new-page"
      condition={true} // Always redirect
    />
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Create reusable redirect components for page migrations.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Migration from Pages Router</h2>
        <p className="text-gray-600 mt-2">
          If you're migrating from Pages Router, note that useRouter has moved from 'next/router' to 'next/navigation' in App Router.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Import Path Change</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Pages Router
import { useRouter } from 'next/router';

// App Router
import { useRouter } from 'next/navigation';

// The API is the same, only the import path changed
const router = useRouter();
router.push('/dashboard'); // Works the same`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            The functionality is identical, but the import path changed for App Router.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Use Link for static navigation:</strong> Prefer Link component for regular navigation links</li>
            <li><strong>Use useRouter for dynamic navigation:</strong> Use router methods for programmatic navigation</li>
            <li><strong>Handle errors gracefully:</strong> Wrap navigation calls in try-catch blocks</li>
            <li><strong>Consider user experience:</strong> Use replace() when users shouldn't go back</li>
            <li><strong>Preserve scroll position:</strong> Use scroll: false when appropriate</li>
            <li><strong>Test navigation flows:</strong> Ensure all navigation paths work correctly</li>
            <li><strong>Avoid deep linking in components:</strong> Keep navigation logic centralized</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-red-600">Using useRouter in Server Components</h3>
              <p className="text-gray-600 text-sm">useRouter only works in Client Components. Server Components can't use hooks.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Forgetting 'use client'</h3>
              <p className="text-gray-600 text-sm">Components using useRouter must have 'use client' directive.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Using window.location for internal navigation</h3>
              <p className="text-gray-600 text-sm">Use router methods instead of window.location for Next.js navigation.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Not handling navigation errors</h3>
              <p className="text-gray-600 text-sm">Always handle potential navigation failures gracefully.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          useRouter provides imperative navigation control in Next.js Client Components. Use it for programmatic navigation after form submissions, authentication redirects, conditional routing, and dynamic route building. Remember that useRouter requires 'use client' and should be used alongside the Link component for different navigation scenarios. Choose the right tool based on whether you need declarative (Link) or imperative (useRouter) navigation.
        </p>
      </section>
    </main>
  );
}