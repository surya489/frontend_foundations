export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Loading UI & Error UI</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Loading and Error UIs?</h2>
        <p className="text-gray-600 mt-2">
          Loading and error UIs provide better user experience by showing appropriate feedback during data fetching and when things go wrong. Instead of blank screens or cryptic error messages, you can show loading spinners, skeleton screens, or helpful error messages. Next.js makes this easy with special files.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Loading UI (loading.tsx)</h2>
        <p className="text-gray-600 mt-2">
          A <code className="bg-gray-100 px-1 rounded">loading.tsx</code> file creates a loading UI that automatically shows while a page or layout is loading. It's especially useful for slow data fetching or when JavaScript needs to load.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Creating a Loading UI</h3>
          <div className="bg-white p-3 rounded font-mono text-sm mb-4">
            <pre>{`app/dashboard/loading.tsx:

export default function Loading() {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading dashboard...</p>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm">
            This loading UI will show automatically when navigating to any page under <code className="bg-gray-100 px-1 rounded">/dashboard</code>.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Error UI (error.tsx)</h2>
        <p className="text-gray-600 mt-2">
          An <code className="bg-gray-100 px-1 rounded">error.tsx</code> file creates an error boundary that catches JavaScript errors in the page or its children. It shows a fallback UI when something goes wrong, instead of crashing the whole app.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Creating an Error UI</h3>
          <div className="bg-white p-3 rounded font-mono text-sm mb-4">
            <pre>{`'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="error">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm">
            The <code className="bg-gray-100 px-1 rounded">error</code> prop contains the error, and <code className="bg-gray-100 px-1 rounded">reset</code> lets you retry the failed operation.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Where to Place Loading and Error Files</h2>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
          <pre>{`app/
├── loading.tsx          # Affects entire app
├── error.tsx            # Catches app-wide errors
├── dashboard/
│   ├── loading.tsx      # Dashboard section loading
│   ├── error.tsx        # Dashboard section errors
│   ├── page.tsx
│   └── analytics/
│       ├── loading.tsx  # Analytics page loading
│       └── page.tsx`}</pre>
        </div>
        <p className="text-gray-600 mt-2">
          Loading and error UIs apply to the folder they're in and all subfolders.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Loading UI Examples</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Skeleton Loading</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm">
              <pre>{`export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
    </div>
  );
}`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Spinner Loading</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm">
              <pre>{`export default function Loading() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="ml-2">Loading...</span>
    </div>
  );
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Error UI Examples</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Simple Error Page</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm">
              <pre>{`'use client';

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Oops! Something went wrong
      </h2>
      <p className="text-gray-600 mb-4">
        {error.message}
      </p>
      <button
        onClick={reset}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Section-Specific Error</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm">
              <pre>{`'use client';

export default function DashboardError({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="dashboard-error">
      <h3>Dashboard Error</h3>
      <p>Unable to load dashboard data.</p>
      <button onClick={reset}>Reload Dashboard</button>
    </div>
  );
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When Loading UI Shows</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Server Components:</strong> While fetching data on the server</li>
          <li><strong>Client Navigation:</strong> When navigating between pages</li>
          <li><strong>Initial Load:</strong> When the page first loads</li>
          <li><strong>Route Changes:</strong> When the route changes and new data loads</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Error Boundaries</h2>
        <p className="text-gray-600 mt-2">
          Error boundaries catch JavaScript errors in the component tree. They don't catch:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Errors in event handlers (use try/catch)</li>
          <li>Errors in async code (use error boundaries in the async component)</li>
          <li>Errors in server-side rendering (handled differently)</li>
          <li>Errors thrown in the error boundary itself</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Make loading UIs match your design system</li>
          <li>Provide clear error messages to users</li>
          <li>Include retry functionality in error UIs</li>
          <li>Test both loading and error states</li>
          <li>Consider accessibility (screen readers, keyboard navigation)</li>
          <li>Don't overuse loading states for fast operations</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Loading and error UIs improve user experience by providing feedback during data fetching and error states. Use <code className="bg-gray-100 px-1 rounded">loading.tsx</code> for loading states and <code className="bg-gray-100 px-1 rounded">error.tsx</code> for error boundaries. Place them strategically in your route structure for the best user experience.
        </p>
      </section>
    </main>
  );
}