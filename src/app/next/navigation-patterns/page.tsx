export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Navigation Patterns</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Navigation Patterns?</h2>
        <p className="text-gray-600 mt-2">
          Navigation patterns are reusable solutions for common navigation scenarios in web applications. Next.js provides the building blocks (Link component, useRouter hook, etc.), but you need to combine them into patterns that solve specific user experience problems. These patterns help create consistent, accessible, and performant navigation across your application.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Active Link Styling</h2>
        <p className="text-gray-600 mt-2">
          Highlighting the current page in navigation is essential for user orientation. Next.js provides hooks to detect the current route.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Basic Active Links</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
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
          <p className="text-gray-600 text-sm mt-2">
            usePathname returns the current path, allowing you to style active links.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Nested Route Active States</h2>
        <p className="text-gray-600 mt-2">
          For nested routes, you often want to highlight parent navigation when viewing child pages.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Parent Route Highlighting</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav>
      <Link href="/products">
        <a className={isActive('/products') ? 'active' : ''}>
          Products
        </a>
      </Link>
      {/* When viewing /products/electronics/laptop,
          the Products link will be highlighted */}
    </nav>
  );
}

// Advanced pattern with exact and partial matching
export function SmartNavigation() {
  const pathname = usePathname();

  const getLinkClass = (href, exact = false) => {
    if (exact) {
      return pathname === href ? 'active' : '';
    }
    return pathname.startsWith(href) ? 'active' : '';
  };

  return (
    <nav>
      <Link href="/dashboard">
        <a className={getLinkClass('/dashboard')}>Dashboard</a>
      </Link>
      <Link href="/settings">
        <a className={getLinkClass('/settings')}>Settings</a>
      </Link>
      {/* Settings will be active for /settings, /settings/profile, etc. */}
    </nav>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use startsWith() for parent routes and exact matching for specific pages.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Breadcrumb Navigation</h2>
        <p className="text-gray-600 mt-2">
          Breadcrumbs show the user's current location in the site hierarchy and allow easy navigation back to parent pages.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Dynamic Breadcrumbs</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Breadcrumbs() {
  const pathname = usePathname();

  // Convert pathname to breadcrumb segments
  const segments = pathname.split('/').filter(Boolean);

  // Build breadcrumb items with paths
  const breadcrumbs = segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/');
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);

    return { label, path };
  });

  // Add home
  const allBreadcrumbs = [
    { label: 'Home', path: '/' },
    ...breadcrumbs
  ];

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2">
      {allBreadcrumbs.map((crumb, index) => (
        <div key={crumb.path} className="flex items-center">
          {index > 0 && <span className="mx-2">/</span>}
          {index === allBreadcrumbs.length - 1 ? (
            <span className="text-gray-500">{crumb.label}</span>
          ) : (
            <Link href={crumb.path}>
              <a className="text-blue-600 hover:text-blue-800">
                {crumb.label}
              </a>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

// With custom labels and metadata
export function SmartBreadcrumbs({ customLabels = {} }) {
  const pathname = usePathname();

  const getLabel = (segment, path) => {
    // Check for custom labels first
    if (customLabels[path]) {
      return customLabels[path];
    }

    // Handle dynamic segments (like [id])
    if (segment.startsWith('[') && segment.endsWith(']')) {
      return 'Details'; // Generic label for dynamic routes
    }

    // Convert kebab-case to Title Case
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // ... rest of implementation
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Breadcrumbs provide context and easy navigation through site hierarchy.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Navigation Guards</h2>
        <p className="text-gray-600 mt-2">
          Prevent navigation when users have unsaved changes or are in the middle of an important process.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Unsaved Changes Protection</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useNavigationGuard(hasUnsavedChanges) {
  const router = useRouter();
  const [nextPath, setNextPath] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = ''; // Chrome requires returnValue
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const navigateWithGuard = (path) => {
    if (hasUnsavedChanges) {
      setNextPath(path);
      setShowDialog(true);
    } else {
      router.push(path);
    }
  };

  const confirmNavigation = () => {
    if (nextPath) {
      router.push(nextPath);
    }
    setShowDialog(false);
    setNextPath(null);
  };

  const cancelNavigation = () => {
    setShowDialog(false);
    setNextPath(null);
  };

  return {
    navigateWithGuard,
    showDialog,
    confirmNavigation,
    cancelNavigation,
  };
}

// Usage in a form component
export function EditForm() {
  const [hasChanges, setHasChanges] = useState(false);
  const { navigateWithGuard, showDialog, confirmNavigation, cancelNavigation } =
    useNavigationGuard(hasChanges);

  return (
    <div>
      <form>
        <input
          onChange={() => setHasChanges(true)}
          placeholder="Edit something..."
        />
      </form>

      <button onClick={() => navigateWithGuard('/dashboard')}>
        Go to Dashboard
      </button>

      {showDialog && (
        <div className="modal">
          <p>You have unsaved changes. Leave anyway?</p>
          <button onClick={confirmNavigation}>Leave</button>
          <button onClick={cancelNavigation}>Stay</button>
        </div>
      )}
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Navigation guards protect users from accidentally losing their work.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Loading States and Transitions</h2>
        <p className="text-gray-600 mt-2">
          Provide feedback during navigation to improve perceived performance and user experience.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Navigation Loading States</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function NavigationWithLoading() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigation = async (path) => {
    setIsNavigating(true);
    try {
      await router.push(path);
    } finally {
      setIsNavigating(false);
    }
  };

  return (
    <nav>
      <button
        onClick={() => handleNavigation('/dashboard')}
        disabled={isNavigating}
      >
        {isNavigating ? 'Loading...' : 'Dashboard'}
      </button>
    </nav>
  );
}

// Global loading indicator
'use client';
import { usePathname } from 'next/navigation';

export function GlobalLoadingIndicator() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="h-1 bg-blue-600 animate-pulse" />
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Loading states provide feedback during navigation transitions.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Programmatic Navigation Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">After Action Navigation</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Navigate to intended page or dashboard
      const intendedPath = sessionStorage.getItem('intendedPath') || '/dashboard';
      router.push(intendedPath);
      sessionStorage.removeItem('intendedPath');
    }
  };

  return <form>...</form>;
}

// Store intended path before redirect to login
export function ProtectedLink({ href, children }) {
  const router = useRouter();

  const handleClick = (e) => {
    if (!isAuthenticated()) {
      e.preventDefault();
      sessionStorage.setItem('intendedPath', href);
      router.push('/login');
    }
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Navigate users to their intended destination after login or other actions.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Wizard/Multi-step Navigation</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';
import { useRouter } from 'next/navigation';

const STEPS = ['details', 'payment', 'confirmation'];

export function WizardNavigation({ currentStep }) {
  const router = useRouter();
  const currentIndex = STEPS.indexOf(currentStep);

  const goToStep = (step) => {
    router.push(\`/wizard/\${step}\`);
  };

  const nextStep = () => {
    if (currentIndex < STEPS.length - 1) {
      goToStep(STEPS[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    if (currentIndex > 0) {
      goToStep(STEPS[currentIndex - 1]);
    }
  };

  return (
    <div className="flex justify-between">
      <button
        onClick={prevStep}
        disabled={currentIndex === 0}
      >
        Previous
      </button>

      <div className="flex space-x-2">
        {STEPS.map((step, index) => (
          <button
            key={step}
            onClick={() => goToStep(step)}
            className={\`step \${index === currentIndex ? 'active' : ''}\`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        onClick={nextStep}
        disabled={currentIndex === STEPS.length - 1}
      >
        Next
      </button>
    </div>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Guide users through multi-step processes with clear navigation.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Search and Filter Navigation</h2>
        <p className="text-gray-600 mt-2">
          Handle navigation with query parameters for search, filtering, and pagination.
        </p>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Query Parameter Navigation</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilters = (newFilters) => {
    const params = new URLSearchParams(searchParams);

    // Update or remove parameters
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    // Navigate with new query parameters
    router.push(\`/products?\${params.toString()}\`, {
      scroll: false // Don't scroll to top
    });
  };

  const handleCategoryChange = (category) => {
    updateFilters({ category, page: '1' }); // Reset page on filter change
  };

  const handleSortChange = (sort) => {
    updateFilters({ sort });
  };

  return (
    <div>
      <select onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>

      <select onChange={(e) => handleSortChange(e.target.value)}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
}

// Pagination component
export function Pagination({ currentPage, totalPages }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());

    router.push(\`?\${params.toString()}\`, { scroll: false });
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use query parameters for filters, search, and pagination while maintaining navigation.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Mobile Navigation Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Hamburger Menu</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden"
        aria-label="Toggle menu"
      >
        <div className={\`hamburger \${isOpen ? 'open' : ''}\`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile menu */}
      <div className={\`
        fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform
        md:hidden \${isOpen ? 'translate-x-0' : 'translate-x-full'}
      \`}>
        <div className="p-4">
          <button
            onClick={closeMenu}
            className="mb-4"
            aria-label="Close menu"
          >
            ✕
          </button>

          <nav>
            <ul className="space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/products', label: 'Products' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>
                    <a
                      className={\`block py-2 \${pathname === href ? 'active' : ''}\`}
                      onClick={closeMenu}
                    >
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Mobile-friendly navigation with overlay and smooth transitions.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Bottom Tab Navigation</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomTabs() {
  const pathname = usePathname();

  const tabs = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/search', label: 'Search', icon: '🔍' },
    { href: '/favorites', label: 'Favorites', icon: '❤️' },
    { href: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
      <div className="flex">
        {tabs.map(({ href, label, icon }) => (
          <Link key={href} href={href} className="flex-1">
            <a className={\`
              flex flex-col items-center py-2 px-1 text-xs
              \${pathname === href ? 'text-blue-600' : 'text-gray-600'}
            \`}>
              <span className="text-lg mb-1">{icon}</span>
              {label}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Thumb-friendly navigation for mobile apps and PWAs.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Accessibility Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Semantic HTML:</strong> Use nav, ul, li elements for navigation structure</li>
            <li><strong>ARIA Labels:</strong> Add aria-label and aria-current for screen readers</li>
            <li><strong>Keyboard Navigation:</strong> Ensure all links are keyboard accessible</li>
            <li><strong>Focus Management:</strong> Manage focus when opening/closing mobile menus</li>
            <li><strong>Skip Links:</strong> Provide skip navigation for keyboard users</li>
            <li><strong>Color Contrast:</strong> Ensure active states have sufficient contrast</li>
            <li><strong>Screen Reader Announcements:</strong> Announce navigation state changes</li>
          </ul>
          <div className="bg-white p-3 rounded font-mono text-sm mt-4">
            <pre>{`// Accessible navigation example
<nav aria-label="Main navigation">
  <ul>
    <li>
      <Link href="/dashboard">
        <a aria-current={pathname === '/dashboard' ? 'page' : undefined}>
          Dashboard
        </a>
      </Link>
    </li>
  </ul>
</nav>

// Skip link
<Link href="#main-content">
  <a className="skip-link sr-only focus:not-sr-only">
    Skip to main content
  </a>
</Link>`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Performance Considerations</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-yellow-600">Prefetching Strategy</h3>
              <p className="text-gray-600 text-sm">Let Next.js handle prefetching automatically, disable only when necessary.</p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600">Bundle Splitting</h3>
              <p className="text-gray-600 text-sm">Navigation automatically creates code-split points between pages.</p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600">Re-rendering Optimization</h3>
              <p className="text-gray-600 text-sm">Use React.memo and useMemo for complex navigation components.</p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600">Loading States</h3>
              <p className="text-gray-600 text-sm">Show loading indicators for slow navigation transitions.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Anti-patterns</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-red-600">Using window.location</h3>
              <p className="text-gray-600 text-sm">Avoid window.location.href for internal navigation - use Link or useRouter.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Over-complicated Active States</h3>
              <p className="text-gray-600 text-sm">Keep active link logic simple and predictable.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Blocking Navigation</h3>
              <p className="text-gray-600 text-sm">Don't prevent users from navigating unless absolutely necessary.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Inconsistent Navigation</h3>
              <p className="text-gray-600 text-sm">Maintain consistent navigation patterns across your application.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Navigation patterns in Next.js combine the Link component, useRouter hook, and navigation hooks to create consistent, accessible, and performant user experiences. Focus on active link styling, proper loading states, accessibility, and mobile-friendly patterns. Use server-side navigation when possible, client-side navigation for interactions, and always test your navigation flows thoroughly. Remember that good navigation is invisible to users - it should feel natural and intuitive while providing clear orientation and easy movement through your application.
        </p>
      </section>
    </main>
  );
}