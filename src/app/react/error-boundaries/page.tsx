'use client';

import React, { Component, useState } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Error Boundary Class Component
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border-2 border-red-300 bg-red-50 rounded">
          <h3 className="text-red-800 font-semibold">Something went wrong!</h3>
          <p className="text-red-600 mt-2">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Component that throws an error
function BuggyComponent() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('I crashed!');
  }

  return (
    <div className="p-4 border rounded bg-gray-50">
      <p>This component might crash</p>
      <button
        onClick={() => setShouldThrow(true)}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Throw Error
      </button>
    </div>
  );
}

// Safe component
function SafeComponent() {
  return (
    <div className="p-4 border rounded bg-green-50">
      <p>This component is safe!</p>
    </div>
  );
}

export default function ErrorBoundariesPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Error Boundaries</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What are Error Boundaries?</h2>
        <p className="text-gray-600 mt-2">
          Error boundaries are React components that catch JavaScript errors anywhere in their
          component tree, log those errors, and display a fallback UI instead of crashing the app.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2 className="text-xl font-semibold">Why Use Error Boundaries?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Prevent entire app crashes from component errors</li>
          <li>Provide better user experience with fallback UI</li>
          <li>Help with debugging by logging errors</li>
          <li>Isolate errors to specific parts of the UI</li>
        </ul>
      </section>

      {/* HOW TO CREATE */}
      <section>
        <h2 className="text-xl font-semibold">Creating an Error Boundary</h2>
        <p className="text-gray-600 mt-2">
          Error boundaries must be class components that implement either or both of:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><code>getDerivedStateFromError()</code> - Update state to show error UI</li>
          <li><code>componentDidCatch()</code> - Log error information</li>
        </ul>
        <pre className="bg-gray-100 p-3 rounded text-sm mt-4">
{`class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Error Boundary Demo</h2>
        <p className="text-gray-600 mt-2 mb-4">
          Click the button to trigger an error. Notice how only the buggy component is affected.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ErrorBoundary>
            <BuggyComponent />
          </ErrorBoundary>
          <ErrorBoundary>
            <SafeComponent />
          </ErrorBoundary>
        </div>
      </section>

      {/* WHAT THEY CATCH */}
      <section>
        <h2 className="text-xl font-semibold">What Error Boundaries Catch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-600"> Catches:</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Render errors</li>
              <li>Lifecycle method errors</li>
              <li>Constructor errors</li>
              <li>Errors in child components</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-600"> Doesn't Catch:</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Event handlers</li>
              <li>Async code (setTimeout, promises)</li>
              <li>Server-side rendering</li>
              <li>Errors in the boundary itself</li>
            </ul>
          </div>
        </div>
      </section>

      {/* USAGE PATTERNS */}
      <section>
        <h2 className="text-xl font-semibold">Usage Patterns</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. Wrap Route Components</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`<ErrorBoundary>
  <RouteComponent />
</ErrorBoundary>`}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold">2. Wrap Sections of UI</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`<ErrorBoundary fallback={<ErrorUI />}>
  <ComplexWidget />
</ErrorBoundary>`}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold">3. Multiple Boundaries</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`<ErrorBoundary>
  <Header />
</ErrorBoundary>
<ErrorBoundary>
  <MainContent />
</ErrorBoundary>`}
            </pre>
          </div>
        </div>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Use error boundaries liberally in your app</li>
          <li>Provide meaningful fallback UI</li>
          <li>Log errors for debugging</li>
          <li>Test error boundaries with error-throwing components</li>
          <li>Consider using libraries like react-error-boundary</li>
        </ul>
      </section>

      {/* LIMITATIONS */}
      <section>
        <h2 className="text-xl font-semibold">Limitations</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Only work in production (development shows full error)</li>
          <li>Cannot catch errors in event handlers</li>
          <li>Cannot catch errors in async operations</li>
          <li>Only catch errors in the React component tree</li>
        </ul>
      </section>
    </main>
  );
}