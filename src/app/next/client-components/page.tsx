export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Client Components ('use client')</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Client Components?</h2>
        <p className="text-gray-600 mt-2">
          Client Components are React components that run in the browser, not on the server. In Next.js App Router, you must explicitly mark a component as a Client Component using the 'use client' directive at the top of the file. Client Components have access to browser APIs, can handle user interactions, and can use React hooks like useState and useEffect.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Client Components Work</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold">Server Sends HTML</h3>
                <p className="text-gray-600 text-sm">Server sends static HTML shell with component placeholders.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold">JavaScript Loads</h3>
                <p className="text-gray-600 text-sm">Browser downloads and executes Client Component JavaScript.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold">Hydration Occurs</h3>
                <p className="text-gray-600 text-sm">React attaches event handlers and state to existing HTML.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold">Component Becomes Interactive</h3>
                <p className="text-gray-600 text-sm">User can now interact with the fully functional component.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Creating Client Components</h2>
        <p className="text-gray-600 mt-2">
          To create a Client Component, add 'use client' at the top of your component file. This tells Next.js that this component and all its children should run on the client.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Basic Client Component</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            This component uses useState and event handlers, so it must be a Client Component.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Client Component Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Can Do</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Use React hooks (useState, useEffect, etc.)</li>
              <li>Handle user interactions (onClick, onChange)</li>
              <li>Access browser APIs (localStorage, geolocation)</li>
              <li>Use browser-only libraries</li>
              <li>Manage local component state</li>
              <li>Subscribe to browser events</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-red-600">Cannot Do (Directly)</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Fetch data on the server</li>
              <li>Access server-only libraries</li>
              <li>Use Node.js APIs</li>
              <li>Read environment variables</li>
              <li>Access file system</li>
              <li>Direct database access</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Client Component Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Interactive Forms</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Send</button>
    </form>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Forms with controlled inputs and submission handling require Client Components.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Real-time Data Updates</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';

import { useState, useEffect } from 'react';

export function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Current Time</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Components that need to update over time use useEffect for side effects.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Client Components with Data Fetching</h2>
        <p className="text-gray-600 mt-2">
          Client Components can fetch data, but it happens in the browser after the component mounts. This is different from Server Components which fetch data before rendering.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Client-Side Data Fetching</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';

import { useState, useEffect } from 'react';

export function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch user');
        return res.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading user...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Data fetching in Client Components happens after the component mounts, showing loading states to users.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Browser API Access</h2>
        <p className="text-gray-600 mt-2">
          Client Components can access browser APIs that aren't available on the server, like localStorage, geolocation, and other Web APIs.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Using Browser APIs</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';

import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Access localStorage on client
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Client Components can safely access localStorage and manipulate the DOM.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Composition with Server Components</h2>
        <p className="text-gray-600 mt-2">
          Server Components can render Client Components. The boundary between server and client is where the 'use client' directive appears.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Server + Client Composition</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/dashboard/page.tsx (Server Component)
import { UserActions } from './UserActions';

export default async function Dashboard({ params }) {
  // Server-side data fetching
  const user = await fetch(\`https://api.example.com/users/\${params.id}\`)
    .then(res => res.json());

  return (
    <div>
      {/* Server-rendered static content */}
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Member since: {user.createdAt}</p>

      {/* Client component for interactions */}
      <UserActions userId={user.id} />
    </div>
  );
}

// components/UserActions.tsx (Client Component)
'use client';

import { useState } from 'react';

export function UserActions({ userId }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    // Client-side interaction
    setIsFollowing(!isFollowing);
    // Could make API call here
  };

  return (
    <div>
      <button onClick={handleFollow}>
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
      <button onClick={() => alert('Message sent!')}>
        Send Message
      </button>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Server Components handle data and static content, Client Components handle user interactions.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Client Component Tree</h2>
        <p className="text-gray-600 mt-2">
          When you mark a component with 'use client', it creates a boundary. All components in that file and all imported components become Client Components, even if they don't have 'use client' themselves.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Client Component Boundary</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// ParentComponent.tsx
'use client'; // This makes the entire tree client-side

import { ChildComponent } from './ChildComponent';

export function ParentComponent() {
  return <ChildComponent />;
}

// ChildComponent.tsx
// No 'use client' needed - it's already client-side
// because it's imported by a client component

export function ChildComponent() {
  const [count, setCount] = useState(0); // This works!

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            The 'use client' boundary affects the entire component tree imported by that file.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Performance Considerations</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-red-600">Bundle Size</h3>
              <p className="text-gray-600 text-sm">Client Components increase JavaScript bundle size sent to browsers.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Hydration Cost</h3>
              <p className="text-gray-600 text-sm">Client Components require hydration, which can slow initial page loads.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">SEO Impact</h3>
              <p className="text-gray-600 text-sm">Content in Client Components may not be immediately available to search engines.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Waterfall Issues</h3>
              <p className="text-gray-600 text-sm">Client-side data fetching can create loading waterfalls.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use Client Components</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>User Interactions:</strong> Buttons, forms, toggles, modals</li>
          <li><strong>State Management:</strong> useState, useReducer for local state</li>
          <li><strong>Browser APIs:</strong> localStorage, geolocation, notifications</li>
          <li><strong>Real-time Updates:</strong> Timers, WebSocket connections</li>
          <li><strong>Third-party Libraries:</strong> Charts, maps, video players</li>
          <li><strong>Event Listeners:</strong> Scroll, resize, keyboard events</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Use Sparingly:</strong> Only mark components as client when necessary</li>
            <li><strong>Keep Boundaries Small:</strong> Minimize the amount of client-side code</li>
            <li><strong>Handle Loading States:</strong> Always show appropriate loading UI</li>
            <li><strong>Error Boundaries:</strong> Wrap client components in error boundaries</li>
            <li><strong>Optimize Re-renders:</strong> Use React.memo, useMemo, useCallback when needed</li>
            <li><strong>Server State First:</strong> Fetch data on server when possible, client for interactions</li>
            <li><strong>Test Hydration:</strong> Ensure server and client rendering match</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Migration from Pages Router</h2>
        <p className="text-gray-600 mt-2">
          In Pages Router, all components were client-side by default. In App Router, they're server-side by default. You need to add 'use client' to migrate interactive components.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Migration Example</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Pages Router (all client-side)
// pages/index.js
export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return <PostList posts={posts} />;
}

// App Router (server + client)
// app/page.tsx
import { PostList } from '@/components/PostList';

export default function HomePage() {
  return <PostList />;
}

// components/PostList.tsx
'use client';

export function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <div>
      {posts.map(post => <PostItem key={post.id} post={post} />)}
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Split server data fetching from client interactivity.
          </p>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Client Components are essential for interactivity in Next.js App Router, but they should be used sparingly. Add 'use client' only when you need browser APIs, user interactions, or React hooks. Keep most of your application as Server Components for better performance, SEO, and security.
        </p>
      </section>
    </main>
  );
}