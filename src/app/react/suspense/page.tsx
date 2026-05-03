'use client';

import React, { Suspense, useState, lazy } from 'react';

interface DataState {
  message: string;
  timestamp: string;
}

// Lazy load a component
const LazyComponent = lazy(() => {
  return new Promise<{ default: React.ComponentType }>(resolve => {
    setTimeout(() => {
      resolve({
        default: () => (
          <div className="p-4 bg-green-50 border rounded">
            <h3 className="font-semibold text-green-800">Lazy Component Loaded!</h3>
            <p>This component was loaded asynchronously.</p>
          </div>
        )
      });
    }, 2000);
  });
});

// Component that simulates data fetching
function DataComponent() {
  const [data, setData] = useState<DataState | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setData({ message: 'Data loaded successfully!', timestamp: new Date().toLocaleTimeString() });
      setLoading(false);
    }, 1500);
  };

  if (loading) {
    throw new Promise<void>(resolve => {
      setTimeout(() => {
        setData({ message: 'Data loaded successfully!', timestamp: new Date().toLocaleTimeString() });
        resolve();
      }, 1500);
    });
  }

  return (
    <div className="p-4 bg-blue-50 border rounded">
      <button
        onClick={fetchData}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {data && (
        <div>
          <p className="font-semibold">{data.message}</p>
          <p className="text-sm text-gray-600">Loaded at: {data.timestamp}</p>
        </div>
      )}
    </div>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="p-4 bg-yellow-50 border rounded animate-pulse">
      <div className="h-4 bg-yellow-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-yellow-200 rounded w-1/2"></div>
    </div>
  );
}

// Error boundary for Suspense
class SuspenseErrorBoundary extends React.Component<React.PropsWithChildren<{}>, { hasError: boolean }> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('Suspense error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded">
          <p className="text-red-800">Something went wrong loading this component.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function SuspensePage() {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">React Suspense</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is Suspense?</h2>
        <p className="text-gray-600 mt-2">
          Suspense is a React feature that lets components "wait" for something before rendering.
          It's commonly used for code splitting (lazy loading) and data fetching.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2 className="text-xl font-semibold">Why Use Suspense?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Handle async operations declaratively</li>
          <li>Show loading states automatically</li>
          <li>Enable code splitting for better performance</li>
          <li>Coordinate loading states in component trees</li>
          <li>Improve user experience with proper loading UI</li>
        </ul>
      </section>

      {/* BASIC SYNTAX */}
      <section>
        <h2 className="text-xl font-semibold">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`<Suspense fallback={<LoadingComponent />}>
  <AsyncComponent />
</Suspense>`}
        </pre>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><strong>Suspense</strong> - Wrapper component</li>
          <li><strong>fallback</strong> - Component to show while waiting</li>
          <li><strong>children</strong> - Components that might suspend</li>
        </ul>
      </section>

      {/* CODE SPLITTING */}
      <section>
        <h2 className="text-xl font-semibold">Code Splitting with Suspense</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`}
        </pre>
        <div className="mt-4">
          <button
            onClick={() => setShowLazy(true)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Load Lazy Component
          </button>
          {showLazy && (
            <Suspense fallback={<LoadingFallback />}>
              <LazyComponent />
            </Suspense>
          )}
        </div>
      </section>

      {/* DATA FETCHING */}
      <section>
        <h2 className="text-xl font-semibold">Data Fetching with Suspense</h2>
        <p className="text-gray-600 mt-2">
          Suspense can work with data fetching libraries that throw promises.
        </p>
        <SuspenseErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <DataComponent />
          </Suspense>
        </SuspenseErrorBoundary>
      </section>

      {/* SUSPENSE BOUNDARIES */}
      <section>
        <h2 className="text-xl font-semibold">Suspense Boundaries</h2>
        <p className="text-gray-600 mt-2">
          You can have multiple Suspense boundaries at different levels of your component tree.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`<Suspense fallback={<PageSkeleton />}>
  <Header />
  <Suspense fallback={<ContentSkeleton />}>
    <MainContent />
  </Suspense>
  <Footer />
</Suspense>`}
        </pre>
      </section>

      {/* ERROR HANDLING */}
      <section>
        <h2 className="text-xl font-semibold">Error Handling</h2>
        <p className="text-gray-600 mt-2">
          Combine Suspense with Error Boundaries for robust async component handling.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`<ErrorBoundary>
  <Suspense fallback={<Loading />}>
    <AsyncComponent />
  </Suspense>
</ErrorBoundary>`}
        </pre>
      </section>

      {/* CONCURRENT FEATURES */}
      <section>
        <h2 className="text-xl font-semibold">Concurrent Features</h2>
        <p className="text-gray-600 mt-2">
          Suspense enables React's concurrent features like selective hydration and transitions.
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><strong>startTransition</strong> - Mark non-urgent updates</li>
          <li><strong>useDeferredValue</strong> - Defer expensive re-renders</li>
          <li><strong>Concurrent rendering</strong> - Interruptible rendering</li>
        </ul>
      </section>

      {/* LIMITATIONS */}
      <section>
        <h2 className="text-xl font-semibold">Current Limitations</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Only works with components that throw promises</li>
          <li>No built-in way to handle errors in Suspense</li>
          <li>Requires coordination with data fetching libraries</li>
          <li>Still experimental for data fetching in some cases</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Use descriptive loading states</li>
          <li>Combine with Error Boundaries</li>
          <li>Consider skeleton screens for better UX</li>
          <li>Keep fallback components simple</li>
          <li>Test loading and error states</li>
        </ul>
      </section>

      {/* WHEN TO USE */}
      <section>
        <h2 className="text-xl font-semibold">When to Use Suspense</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Code splitting with lazy loading</li>
          <li>Data fetching with suspense-enabled libraries</li>
          <li>Resource loading (images, scripts)</li>
          <li>Complex component initialization</li>
        </ul>
      </section>
    </main>
  );
}