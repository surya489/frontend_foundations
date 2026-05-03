export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Link Component</h1>

      <section>
        <h2 className="text-xl font-semibold">What is the Link Component?</h2>
        <p className="text-gray-600 mt-2">
          The Link component is Next.js's built-in navigation component that provides client-side navigation between pages. Unlike regular HTML anchor tags (&lt;a&gt;), Link enables fast, seamless page transitions without full page reloads. It's essential for creating smooth user experiences in Next.js applications.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Usage</h2>
        <p className="text-gray-600 mt-2">
          Import Link from 'next/link' and wrap your anchor tags with it. The href prop specifies the destination page.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Simple Link</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/about">
        <a>About Us</a>
      </Link>

      <Link href="/products">
        <a>Products</a>
      </Link>

      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            The Link component wraps an anchor tag and provides client-side navigation.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Link Works</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold">User Clicks Link</h3>
                <p className="text-gray-600 text-sm">User clicks on a Link component instead of a regular anchor tag.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold">Client-Side Navigation</h3>
                <p className="text-gray-600 text-sm">Next.js intercepts the click and handles navigation on the client-side.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold">Code Splitting</h3>
                <p className="text-gray-600 text-sm">Next.js loads only the JavaScript needed for the new page.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold">Page Transition</h3>
                <p className="text-gray-600 text-sm">The new page renders instantly without a full browser refresh.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Link vs Regular Anchor Tags</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Link Component</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Client-side navigation</li>
              <li>Fast page transitions</li>
              <li>Code splitting</li>
              <li>Preserves scroll position</li>
              <li>Built-in prefetching</li>
              <li>SPA-like experience</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-red-600">Regular &lt;a&gt; Tag</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Full page reload</li>
              <li>Slower navigation</li>
              <li>Loses application state</li>
              <li>Resets scroll position</li>
              <li>No prefetching</li>
              <li>Traditional web experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Dynamic Routes</h2>
        <p className="text-gray-600 mt-2">
          Link works perfectly with dynamic routes. Use template literals or string concatenation to build dynamic hrefs.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Dynamic Links</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default function ProductList({ products }) {
  return (
    <div>
      {products.map(product => (
        <Link
          key={product.id}
          href={\`/products/\${product.id}\`}
        >
          <a>{product.name}</a>
        </Link>
      ))}
    </div>
  );
}

// Or with template literals
<Link href={\`/users/\${userId}/profile\`}>
  <a>View Profile</a>
</Link>

// With query parameters
<Link href={\`/search?q=\${encodeURIComponent(query)}\`}>
  <a>Search Results</a>
</Link>`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Dynamic routes work the same way as static routes - just pass the complete path to href.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Prefetching</h2>
        <p className="text-gray-600 mt-2">
          Link automatically prefetches pages when they come into view, making navigation even faster. You can control this behavior with the prefetch prop.
        </p>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Automatic Prefetching</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Prefetches on hover (default behavior)
<Link href="/about">
  <a>About</a>
</Link>

// Disable prefetching
<Link href="/admin" prefetch={false}>
  <a>Admin Panel</a>
</Link>

// Force prefetching (not recommended)
<Link href="/dashboard" prefetch={true}>
  <a>Dashboard</a>
</Link>`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">By default, Link prefetches pages on hover for better performance.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">When to Disable Prefetching</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Admin or protected pages (avoid loading unnecessary code)</li>
              <li>Pages that require authentication</li>
              <li>Heavy pages that you don't want to preload</li>
              <li>Pages with side effects on load</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Styling Links</h2>
        <p className="text-gray-600 mt-2">
          Link components can be styled just like regular anchor tags. You can use CSS classes, inline styles, or any styling approach.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Styled Links</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// With Tailwind CSS
<Link href="/about">
  <a className="text-blue-600 hover:text-blue-800 underline">
    About Us
  </a>
</Link>

// With CSS modules
<Link href="/contact">
  <a className={styles.navLink}>
    Contact
  </a>
</Link>

// With inline styles
<Link href="/products">
  <a style={{ color: 'red', textDecoration: 'none' }}>
    Products
  </a>
</Link>

// As buttons
<Link href="/signup">
  <button className="bg-blue-500 text-white px-4 py-2 rounded">
    Sign Up
  </button>
</Link>`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Link can wrap any element, not just anchor tags. Buttons, divs, and custom components work too.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Active Link Styling</h2>
        <p className="text-gray-600 mt-2">
          To style the currently active link, you can use the usePathname hook to check the current route and apply conditional styling.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Active Link Detection</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/">
        <a className={pathname === '/' ? 'active' : ''}>
          Home
        </a>
      </Link>

      <Link href="/about">
        <a className={pathname === '/about' ? 'active' : ''}>
          About
        </a>
      </Link>

      <Link href="/products">
        <a className={pathname.startsWith('/products') ? 'active' : ''}>
          Products
        </a>
      </Link>
    </nav>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            usePathname from next/navigation gives you the current path for styling active links.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Link with Custom Components</h2>
        <p className="text-gray-600 mt-2">
          Link can wrap any component, not just anchor tags. This is useful for creating custom link components or using design system components.
        </p>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Custom Link Components</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Custom button link
function ButtonLink({ href, children, ...props }) {
  return (
    <Link href={href}>
      <button {...props}>
        {children}
      </button>
    </Link>
  );
}

// Usage
<ButtonLink
  href="/signup"
  className="bg-blue-500 text-white px-4 py-2 rounded"
>
  Sign Up
</ButtonLink>

// With card components
function CardLink({ href, title, description }) {
  return (
    <Link href={href}>
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Create reusable link components that match your design system.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">External Links</h2>
        <p className="text-gray-600 mt-2">
          For external links (to other websites), use regular anchor tags instead of Link components. Link is only for internal Next.js navigation.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">External vs Internal Links</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// ✅ Internal links (use Link)
<Link href="/about">
  <a>About Us</a>
</Link>

<Link href="https://nextjs.org">
  <a>Next.js Docs</a>
</Link>

// ❌ External links (use regular anchor)
<a href="https://google.com" target="_blank" rel="noopener">
  Google
</a>

<a href="mailto:hello@example.com">
  Email Us
</a>

// ✅ External links with security
<a
  href="https://external-site.com"
  target="_blank"
  rel="noopener noreferrer"
>
  External Link
</a>`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use regular anchor tags for external URLs, email links, and phone links.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Accessibility</h2>
        <p className="text-gray-600 mt-2">
          Link components should be accessible. Make sure to provide proper semantic HTML and ARIA attributes when needed.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Semantic HTML:</strong> Use anchor tags inside Link for proper semantics</li>
            <li><strong>Focus Management:</strong> Links are keyboard accessible by default</li>
            <li><strong>Screen Readers:</strong> Anchor text should be descriptive</li>
            <li><strong>Skip Links:</strong> Consider skip navigation for accessibility</li>
            <li><strong>ARIA Labels:</strong> Add aria-label for icon-only links</li>
          </ul>
          <div className="bg-white p-3 rounded font-mono text-sm mt-4">
            <pre>{`// Good accessibility
<Link href="/products">
  <a aria-label="View all products">Products</a>
</Link>

// Icon with text
<Link href="/cart">
  <a aria-label="Shopping cart">
    <CartIcon /> Cart ({itemCount})
  </a>
</Link>

// Skip link
<Link href="#main-content">
  <a className="skip-link">Skip to main content</a>
</Link>`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Navigation Menu</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavMenu() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav>
      <ul className="flex space-x-4">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>
              <a className={\`nav-link \${pathname === href ? 'active' : ''}\`}>
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Breadcrumb Navigation</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export function Breadcrumbs({ segments }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {segments.map((segment, index) => (
          <li key={segment.href} className="flex items-center">
            <span className="mx-2">/</span>
            {index === segments.length - 1 ? (
              <span>{segment.label}</span>
            ) : (
              <Link href={segment.href}>
                <a>{segment.label}</a>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Usage
<Breadcrumbs segments={[
  { href: '/products', label: 'Products' },
  { href: '/products/electronics', label: 'Electronics' },
  { href: '/products/electronics/laptop', label: 'Laptop' }
]} />`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Performance Tips</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Prefetch Strategically:</strong> Let Next.js handle prefetching automatically</li>
            <li><strong>Bundle Splitting:</strong> Link enables automatic code splitting between pages</li>
            <li><strong>Minimize Re-renders:</strong> Avoid unnecessary re-renders of Link components</li>
            <li><strong>Cache Navigation:</strong> Browser caches prefetched pages for faster subsequent visits</li>
            <li><strong>Progressive Loading:</strong> Pages load progressively as users navigate</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Migration from Pages Router</h2>
        <p className="text-gray-600 mt-2">
          If you're migrating from Pages Router to App Router, Link usage remains the same. The main difference is that Link now works with the new app directory structure.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Same API, New Structure</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Pages Router (pages/index.js)
import Link from 'next/link';

export default function HomePage() {
  return (
    <Link href="/about">
      <a>About</a>
    </Link>
  );
}

// App Router (app/page.js) - Same API!
import Link from 'next/link';

export default function HomePage() {
  return (
    <Link href="/about">
      <a>About</a>
    </Link>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            The Link API is identical between Pages Router and App Router.
          </p>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          The Link component is fundamental to Next.js navigation. It provides fast, client-side page transitions with automatic prefetching and code splitting. Always use Link for internal navigation instead of regular anchor tags. Remember that Link wraps elements and provides the navigation behavior, while the child element handles the visual presentation and accessibility.
        </p>
      </section>
    </main>
  );
}