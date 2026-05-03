'use client';

import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse {
  users: User[];
}

// Custom hook for API calls
function useApi(url: string) {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock data
        const mockData = {
          users: [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
            { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
          ]
        };

        if (isMounted) {
          setData(mockData);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || 'An error occurred');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

// Component demonstrating different API patterns
function ApiDemo() {
  const [method, setMethod] = useState('GET');
  const [endpoint, setEndpoint] = useState('/api/users');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const makeRequest = async () => {
    setLoading(true);
    try {
      // Simulate different API calls
      await new Promise(resolve => setTimeout(resolve, 500));

      let mockResponse;
      switch (method) {
        case 'GET':
          mockResponse = { users: [{ id: 1, name: 'John' }] };
          break;
        case 'POST':
          mockResponse = { success: true, id: Date.now() };
          break;
        case 'PUT':
          mockResponse = { success: true, updated: true };
          break;
        case 'DELETE':
          mockResponse = { success: true, deleted: true };
          break;
        default:
          mockResponse = { error: 'Method not supported' };
      }

      setResponse(mockResponse);
    } catch (error: any) {
      setResponse({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded bg-gray-50">
      <h3 className="font-semibold mb-4">API Request Simulator</h3>
      <div className="space-y-4">
        <div className="flex gap-4">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="border p-2 rounded"
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>
          <input
            type="text"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            className="border p-2 rounded flex-1"
            placeholder="API endpoint"
          />
          <button
            onClick={makeRequest}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Send'}
          </button>
        </div>

        {response && (
          <div className="bg-white p-3 rounded border">
            <h4 className="font-medium mb-2">Response:</h4>
            <pre className="text-sm text-gray-700">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ApiHandlingPage() {
  const { data, loading, error } = useApi('/api/users');

  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">API Handling in React</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is API Handling?</h2>
        <p className="text-gray-600 mt-2">
          API handling involves making HTTP requests to backend services and managing
          the response data, loading states, and errors in React applications.
        </p>
      </section>

      {/* HTTP METHODS */}
      <section>
        <h2 className="text-xl font-semibold">HTTP Methods</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-green-50 border rounded">
            <h3 className="font-semibold text-green-800">GET</h3>
            <p className="text-sm text-gray-600">Retrieve data</p>
          </div>
          <div className="p-3 bg-blue-50 border rounded">
            <h3 className="font-semibold text-blue-800">POST</h3>
            <p className="text-sm text-gray-600">Create data</p>
          </div>
          <div className="p-3 bg-yellow-50 border rounded">
            <h3 className="font-semibold text-yellow-800">PUT</h3>
            <p className="text-sm text-gray-600">Update data</p>
          </div>
          <div className="p-3 bg-red-50 border rounded">
            <h3 className="font-semibold text-red-800">DELETE</h3>
            <p className="text-sm text-gray-600">Delete data</p>
          </div>
        </div>
      </section>

      {/* FETCH API */}
      <section>
        <h2 className="text-xl font-semibold">Using Fetch API</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// GET request
const fetchUsers = async () => {
  try {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setUsers(data);
  } catch (error) {
    setError(error.message);
  }
};

// POST request
const createUser = async (userData) => {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};`}
        </pre>
      </section>

      {/* CUSTOM HOOK */}
      <section>
        <h2 className="text-xl font-semibold">Custom API Hook</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading, error } = useApi('/api/users');`}
        </pre>
      </section>

      {/* LOADING STATES */}
      <section>
        <h2 className="text-xl font-semibold">Handling Loading States</h2>
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="font-semibold mb-4">API Call Demo</h3>
          {loading && <p className="text-blue-600">Loading users...</p>}
          {error && <p className="text-red-600">Error: {error}</p>}
          {data && (
            <div>
              <p className="text-green-600 mb-2">Data loaded successfully!</p>
              <ul className="list-disc ml-6">
                {data.users.map(user => (
                  <li key={user.id}>{user.name} - {user.email}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ERROR HANDLING */}
      <section>
        <h2 className="text-xl font-semibold">Error Handling</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [error, setError] = useState(null);

const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    setData(data);
  } catch (err) {
    setError(err.message);
    // Or show user-friendly message
    setError('Failed to load data. Please try again.');
  }
};

// In JSX
{error && (
  <div className="error-message">
    {error}
  </div>
)}`}
        </pre>
      </section>

      {/* API DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive API Demo</h2>
        <ApiDemo />
      </section>

      {/* LIBRARIES */}
      <section>
        <h2 className="text-xl font-semibold">Popular API Libraries</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><strong>Axios</strong> - HTTP client with interceptors</li>
          <li><strong>React Query</strong> - Data fetching and caching</li>
          <li><strong>SWR</strong> - React hooks for data fetching</li>
          <li><strong>Apollo Client</strong> - GraphQL client</li>
          <li><strong>RTK Query</strong> - Redux Toolkit Query</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Use custom hooks to encapsulate API logic</li>
          <li>Handle loading and error states properly</li>
          <li>Implement proper error boundaries</li>
          <li>Use AbortController for request cancellation</li>
          <li>Consider caching strategies</li>
          <li>Validate response data</li>
          <li>Handle network errors gracefully</li>
        </ul>
      </section>

      {/* SECURITY */}
      <section>
        <h2 className="text-xl font-semibold">Security Considerations</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Never expose API keys in client-side code</li>
          <li>Use HTTPS for all API calls</li>
          <li>Validate and sanitize user inputs</li>
          <li>Implement proper authentication</li>
          <li>Use CORS appropriately</li>
          <li>Handle sensitive data carefully</li>
        </ul>
      </section>
    </main>
  );
}