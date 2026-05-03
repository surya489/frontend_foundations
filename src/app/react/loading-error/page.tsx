'use client';

import { useState, ChangeEvent } from 'react';

type SpinnerSize = 'small' | 'medium' | 'large';

type LoadingState = 'idle' | 'loading' | 'success' | 'error';

interface LoadingSpinnerProps {
  size?: SpinnerSize;
}

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

interface SuccessMessageProps {
  message: string;
}

interface DataState {
  message: string;
  items: string[];
}

// Loading spinner component
function LoadingSpinner({ size = 'medium' }: LoadingSpinnerProps) {
  const sizeClasses: Record<SpinnerSize, string> = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
  );
}

// Skeleton loader
function SkeletonLoader() {
  return (
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
    </div>
  );
}

// Error message component
function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
      <div className="flex items-center">
        <div className="text-red-500 mr-3">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-red-800 font-medium">Error</h3>
          <p className="text-red-700 text-sm">{message}</p>
        </div>
        {onRetry && (
          <button
            onClick={onRetry}
            className="ml-3 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
}

// Success message component
function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
      <div className="flex items-center">
        <div className="text-green-500 mr-3">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <h3 className="text-green-800 font-medium">Success</h3>
          <p className="text-green-700 text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}

// Demo component showing different states
function StateDemo() {
  const [state, setState] = useState<LoadingState>('idle');
  const [data, setData] = useState<DataState | null>(null);

  const simulateApiCall = async (shouldFail = false) => {
    setState('loading');
    setData(null);

    try {
      const result = await new Promise<DataState>((resolve, reject) => {
        setTimeout(() => {
          if (shouldFail) {
            reject(new Error('Failed to load data'));
          } else {
            resolve({
              message: 'Data loaded successfully!',
              items: ['Item 1', 'Item 2', 'Item 3']
            });
          }
        }, 2000);
      });

      setData(result);
      setState('success');
    } catch (error) {
      setState('error');
    }
  };

  const renderSuccessContent = () => {
    if (!data) {
      return null;
    }

    return (
      <div className="space-y-4">
        <SuccessMessage message={data.message} />
        <div className="border rounded p-4">
          <h4 className="font-medium mb-2">Loaded Data:</h4>
          <ul className="list-disc ml-6">
            {data.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (state) {
      case 'loading':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-center py-8">
              <LoadingSpinner />
              <span className="ml-3 text-gray-600">Loading...</span>
            </div>
            <div className="border rounded p-4">
              <SkeletonLoader />
            </div>
          </div>
        );

      case 'success':
        return renderSuccessContent();

      case 'error':
        return (
          <ErrorMessage
            message="Failed to load data. Please check your connection and try again."
            onRetry={() => simulateApiCall(false)}
          />
        );

      default:
        return (
          <div className="text-center py-8 text-gray-500">
            Click a button to see different states
          </div>
        );
    }
  };

  return (
    <div className="p-4 border rounded bg-gray-50">
      <h3 className="font-semibold mb-4">State Management Demo</h3>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => simulateApiCall(false)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load Success
        </button>
        <button
          onClick={() => simulateApiCall(true)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Load Error
        </button>
        <button
          onClick={() => setState('idle')}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
      {renderContent()}
    </div>
  );
}

export default function LoadingErrorPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Loading & Error States</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">Why Handle Loading & Error States?</h2>
        <p className="text-gray-600 mt-2">
          Proper handling of loading and error states is crucial for good user experience.
          It provides feedback, prevents confusion, and helps users understand what's happening.
        </p>
      </section>

      {/* LOADING INDICATORS */}
      <section>
        <h2 className="text-xl font-semibold">Loading Indicators</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Spinner</h3>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded">
              <LoadingSpinner size="small" />
              <LoadingSpinner size="medium" />
              <LoadingSpinner size="large" />
            </div>
          </div>
          <div>
            <h3 className="font-medium">Skeleton Loader</h3>
            <div className="p-4 bg-gray-50 rounded">
              <SkeletonLoader />
            </div>
          </div>
        </div>
      </section>

      {/* ERROR HANDLING */}
      <section>
        <h2 className="text-xl font-semibold">Error Handling</h2>
        <div className="space-y-4">
          <ErrorMessage message="Network connection failed" />
          <ErrorMessage
            message="Unable to save changes"
            onRetry={() => alert('Retrying...')}
          />
        </div>
      </section>

      {/* SUCCESS MESSAGES */}
      <section>
        <h2 className="text-xl font-semibold">Success Messages</h2>
        <SuccessMessage message="Your changes have been saved successfully!" />
      </section>

      {/* STATE MANAGEMENT */}
      <section>
        <h2 className="text-xl font-semibold">State Management Pattern</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [state, setState] = useState('idle');
// States: 'idle', 'loading', 'success', 'error'

const fetchData = async () => {
  setState('loading');
  try {
    const data = await apiCall();
    setState('success');
    setData(data);
  } catch (error) {
    setState('error');
    setError(error.message);
  }
};

// Render based on state
{state === 'loading' && <LoadingSpinner />}
{state === 'error' && <ErrorMessage message={error} />}
{state === 'success' && <SuccessContent data={data} />}`}
        </pre>
      </section>

      {/* INTERACTIVE DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <StateDemo />
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Always show loading states for async operations</li>
          <li>Provide clear error messages</li>
          <li>Include retry functionality for failed operations</li>
          <li>Use skeleton loaders for better perceived performance</li>
          <li>Handle network errors gracefully</li>
          <li>Consider offline scenarios</li>
          <li>Test all state transitions</li>
        </ul>
      </section>

      {/* ACCESSIBILITY */}
      <section>
        <h2 className="text-xl font-semibold">Accessibility Considerations</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Use ARIA live regions for dynamic content</li>
          <li>Provide screen reader announcements</li>
          <li>Ensure loading indicators are announced</li>
          <li>Use appropriate ARIA roles</li>
          <li>Don't hide content from screen readers</li>
        </ul>
      </section>

      {/* LIBRARIES */}
      <section>
        <h2 className="text-xl font-semibold">Useful Libraries</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><strong>React Loading Skeleton</strong> - Skeleton components</li>
          <li><strong>React Spinners</strong> - Loading spinner components</li>
          <li><strong>React Toastify</strong> - Toast notifications</li>
          <li><strong>React Error Boundary</strong> - Error boundary components</li>
        </ul>
      </section>
    </main>
  );
}