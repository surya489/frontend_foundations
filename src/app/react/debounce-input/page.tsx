'use client';

import { useState, useEffect, useCallback } from 'react';

// Custom debounce hook
function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Debounced search component
function DebouncedSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      // Simulate API call
      const searchResults = async () => {
        await new Promise(resolve => setTimeout(resolve, 300));
        const mockResults = [
          'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
          'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'
        ].filter(item =>
          item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
        setResults(mockResults as string[]);
        setIsSearching(false);
      };
      searchResults();
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="p-4 border rounded bg-gray-50">
      <h3 className="font-semibold mb-4">Debounced Search</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search fruits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <div className="text-sm text-gray-600">
          Search term: "{searchTerm}"
        </div>
        <div className="text-sm text-blue-600">
          Debounced term: "{debouncedSearchTerm}"
        </div>
        {isSearching && (
          <div className="text-blue-600">Searching...</div>
        )}
        <div className="min-h-20">
          {results.length > 0 && (
            <ul className="list-disc ml-6">
              {results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          )}
          {debouncedSearchTerm && results.length === 0 && !isSearching && (
            <p className="text-gray-500">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Custom hook for debounced callback
function useDebouncedCallback(callback: (...args: any[]) => void, delay: number) {
  const [debounceTimer, setDebounceTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const debouncedCallback = useCallback((...args: any[]) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);

    setDebounceTimer(newTimer);
  }, [callback, delay, debounceTimer]);

  useEffect(() => {
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [debounceTimer]);

  return debouncedCallback;
}

// Auto-save component
function AutoSaveEditor() {
  const [content, setContent] = useState('');
  const [saveStatus, setSaveStatus] = useState('idle');

  const saveContent = useDebouncedCallback(async (text: string) => {
    setSaveStatus('saving');
    try {
      // Simulate save API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (error) {
      setSaveStatus('error');
    }
  }, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    saveContent(newContent);
  };

  return (
    <div className="p-4 border rounded bg-gray-50">
      <h3 className="font-semibold mb-4">Auto-Save Editor</h3>
      <div className="space-y-4">
        <textarea
          value={content}
          onChange={handleChange}
          placeholder="Start typing... Content will auto-save"
          className="w-full p-2 border rounded h-24"
        />
        <div className="flex items-center gap-2">
          <span className="text-sm">Status:</span>
          {saveStatus === 'idle' && <span className="text-gray-500">Ready</span>}
          {saveStatus === 'saving' && <span className="text-blue-500">Saving...</span>}
          {saveStatus === 'saved' && <span className="text-green-500">Saved!</span>}
          {saveStatus === 'error' && <span className="text-red-500">Error saving</span>}
        </div>
      </div>
    </div>
  );
}

export default function DebounceInputPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Debounced Input</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is Debouncing?</h2>
        <p className="text-gray-600 mt-2">
          Debouncing is a technique that delays the execution of a function until after
          a specified time has passed since the last time it was invoked. This is useful
          for optimizing performance in scenarios like search inputs or auto-save.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2 className="text-xl font-semibold">Why Use Debouncing?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Reduces the number of API calls</li>
          <li>Improves performance by avoiding unnecessary operations</li>
          <li>Prevents excessive re-renders</li>
          <li>Better user experience with less "jank"</li>
          <li>Reduces server load</li>
        </ul>
      </section>

      {/* BASIC DEBOUNCE */}
      <section>
        <h2 className="text-xl font-semibold">Basic Debounce Implementation</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const debouncedSearch = debounce((query) => {
  // API call here
  console.log('Searching for:', query);
}, 500);

input.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});`}
        </pre>
      </section>

      {/* REACT HOOK */}
      <section>
        <h2 className="text-xl font-semibold">useDebounce Hook</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);

useEffect(() => {
  if (debouncedSearchTerm) {
    // API call with debounced value
    searchAPI(debouncedSearchTerm);
  }
}, [debouncedSearchTerm]);`}
        </pre>
      </section>

      {/* DEMO 1 */}
      <section>
        <h2 className="text-xl font-semibold">Search Demo</h2>
        <DebouncedSearch />
      </section>

      {/* DEBOUNCED CALLBACK */}
      <section>
        <h2 className="text-xl font-semibold">Debounced Callback Hook</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function useDebouncedCallback(callback, delay) {
  const [debounceTimer, setDebounceTimer] = useState(null);

  const debouncedCallback = useCallback((...args) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);

    setDebounceTimer(newTimer);
  }, [callback, delay]);

  return debouncedCallback;
}`}
        </pre>
      </section>

      {/* DEMO 2 */}
      <section>
        <h2 className="text-xl font-semibold">Auto-Save Demo</h2>
        <AutoSaveEditor />
      </section>

      {/* USE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Search inputs</strong> - Wait for user to stop typing</li>
          <li><strong>Auto-save</strong> - Save after user stops editing</li>
          <li><strong>API calls</strong> - Prevent excessive requests</li>
          <li><strong>Window resize</strong> - Handle resize events efficiently</li>
          <li><strong>Form validation</strong> - Validate after user stops typing</li>
        </ul>
      </section>

      {/* DIFFERENCE FROM THROTTLE */}
      <section>
        <h2 className="text-xl font-semibold">Debounce vs Throttle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-blue-600">Debounce</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Waits for pause in events</li>
              <li>Executes once after delay</li>
              <li>Good for search, auto-save</li>
              <li>Resets timer on new event</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-600">Throttle</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Limits execution frequency</li>
              <li>Executes at regular intervals</li>
              <li>Good for scroll, resize</li>
              <li>Ignores events during cooldown</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LIBRARIES */}
      <section>
        <h2 className="text-xl font-semibold">Libraries</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><strong>Lodash</strong> - debounce and throttle functions</li>
          <li><strong>use-debounce</strong> - React hooks for debouncing</li>
          <li><strong>react-use</strong> - Collection of React hooks</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Choose appropriate delay (300-500ms for search)</li>
          <li>Clear timeouts on cleanup</li>
          <li>Consider user experience - not too slow</li>
          <li>Use for expensive operations only</li>
          <li>Test with different input speeds</li>
          <li>Show loading states when appropriate</li>
        </ul>
      </section>
    </main>
  );
}