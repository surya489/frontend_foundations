export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Server Components</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Server Components?</h2>
        <p className="text-gray-600 mt-2">
          Server Components are React components that run on the server in Next.js. They are the default component type in the App Router. Server Components can fetch data, access databases, and render UI, but they don't have access to browser APIs or user interactions. They run during the build process or on each request, generating HTML that gets sent to the browser.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Server Components Work</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold">Request Received</h3>
                <p className="text-gray-600 text-sm">User visits a page, Next.js receives the request.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold">Server Component Executes</h3>
                <p className="text-gray-600 text-sm">Component runs on server, fetches data, renders JSX.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold">HTML Generated</h3>
                <p className="text-gray-600 text-sm">Server generates complete HTML with data.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold">Browser Receives HTML</h3>
                <p className="text-gray-600 text-sm">Fully rendered page sent to browser instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Server Component</h2>
        <p className="text-gray-600 mt-2">
          Server Components are the default in Next.js App Router. You don't need any special syntax - just create a regular React component.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Simple Server Component</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/blog/page.tsx
export default async function BlogPage() {
  // This runs on the server
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());

  return (
    <div>
      <h1>My Blog</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <small>By {post.author}</small>
        </article>
      ))}
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            This component fetches data and renders on the server. No JavaScript is sent to the browser for this component.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server Component Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Can Do</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Fetch data from APIs</li>
              <li>Access databases directly</li>
              <li>Use server-only libraries</li>
              <li>Read environment variables</li>
              <li>Access file system</li>
              <li>Render JSX to HTML</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-red-600">Cannot Do</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Use browser APIs</li>
              <li>Add event listeners</li>
              <li>Use useState/useEffect</li>
              <li>Access localStorage</li>
              <li>Handle user interactions</li>
              <li>Use browser-specific libraries</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Async Server Components</h2>
        <p className="text-gray-600 mt-2">
          Server Components can be async functions, allowing them to await data fetching and other async operations.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Async Data Fetching</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default async function UserDashboard({ params }) {
  // Fetch user data
  const user = await fetch(\`https://api.example.com/users/\${params.id}\`)
    .then(res => res.json());

  // Fetch user's posts in parallel
  const posts = await fetch(\`https://api.example.com/users/\${params.id}/posts\`)
    .then(res => res.json());

  // Fetch user's stats in parallel
  const stats = await fetch(\`https://api.example.com/users/\${params.id}/stats\`)
    .then(res => res.json());

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2>Your Posts ({posts.length})</h2>
          {posts.map(post => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>

        <div>
          <h2>Statistics</h2>
          <p>Views: {stats.totalViews}</p>
          <p>Likes: {stats.totalLikes}</p>
        </div>
      </div>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            All data fetching happens on the server, and the component waits for all data before rendering.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server Components with Client Components</h2>
        <p className="text-gray-600 mt-2">
          Server Components can render Client Components. This creates a hybrid architecture where most of your app is server-rendered, but interactive parts run on the client.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Server + Client Component Composition</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/dashboard/page.tsx (Server Component)
import { UserStats } from './UserStats';

export default async function Dashboard() {
  // Server-side data fetching
  const user = await fetchUserData();

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Server-rendered content */}
      <div>
        <h2>Welcome, {user.name}</h2>
        <p>Last login: {user.lastLogin}</p>
      </div>

      {/* Client component for interactivity */}
      <UserStats userId={user.id} />
    </div>
  );
}

// components/UserStats.tsx (Client Component)
'use client';

import { useState, useEffect } from 'react';

export function UserStats({ userId }) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(\`/api/users/\${userId}/stats\`)
      .then(res => res.json())
      .then(setStats);
  }, [userId]);

  if (!stats) return <div>Loading stats...</div>;

  return (
    <div>
      <button onClick={() => setStats(null)}>
        Refresh Stats
      </button>
      <p>Posts: {stats.posts}</p>
      <p>Followers: {stats.followers}</p>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Server Components handle static content and data fetching, Client Components handle interactivity.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server Component Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Data Fetching Components</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// components/PostList.tsx
export async function PostList() {
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

// Usage in page
import { PostList } from '@/components/PostList';

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <PostList />
    </div>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Create reusable Server Components that handle their own data fetching.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Layout Components</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// app/layout.tsx
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch site-wide data
  const siteConfig = await fetch('https://api.example.com/site-config')
    .then(res => res.json());

  return (
    <html lang="en">
      <body>
        <header>
          <h1>{siteConfig.siteName}</h1>
          <nav>{/* navigation */}</nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>{siteConfig.footerText}</p>
        </footer>
      </body>
    </html>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Use Server Components in layouts to fetch shared data once.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Benefits of Server Components</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Performance</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Faster initial page loads</li>
              <li>Reduced bundle size</li>
              <li>Automatic code splitting</li>
              <li>Built-in caching</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">SEO</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Full content available to crawlers</li>
              <li>Faster indexing</li>
              <li>Better Core Web Vitals</li>
              <li>Social media friendly</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">Security</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>API keys stay on server</li>
              <li>Database credentials secure</li>
              <li>No client-side exposure</li>
              <li>Server-side validation</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-orange-600">Developer Experience</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Simple async/await syntax</li>
              <li>TypeScript support</li>
              <li>Direct database access</li>
              <li>Familiar React patterns</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server Component Limitations</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>No Interactivity:</strong> Cannot respond to user events or manage local state</li>
            <li><strong>No Browser APIs:</strong> Cannot access localStorage, geolocation, or other browser features</li>
            <li><strong>Server-Only:</strong> Code runs only on server, not in browser</li>
            <li><strong>No Hydration:</strong> Components don't become interactive after initial render</li>
            <li><strong>Limited Libraries:</strong> Cannot use libraries that require browser environment</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server Components vs Client Components</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Server Components</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Client Components</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Data Fetching</td>
                <td className="border border-gray-300 px-4 py-2">Direct API/database access</td>
                <td className="border border-gray-300 px-4 py-2">Browser fetch only</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Interactivity</td>
                <td className="border border-gray-300 px-4 py-2">None</td>
                <td className="border border-gray-300 px-4 py-2">Full (events, state)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Bundle Size</td>
                <td className="border border-gray-300 px-4 py-2">Smaller</td>
                <td className="border border-gray-300 px-4 py-2">Larger</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">SEO</td>
                <td className="border border-gray-300 px-4 py-2">Excellent</td>
                <td className="border border-gray-300 px-4 py-2">Poor</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Performance</td>
                <td className="border border-gray-300 px-4 py-2">Fast initial load</td>
                <td className="border border-gray-300 px-4 py-2">Fast interactions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Use Server Components by Default:</strong> Start with Server Components for everything</li>
            <li><strong>Fetch Data at the Right Level:</strong> Fetch data in the component that needs it</li>
            <li><strong>Minimize Client Components:</strong> Only use 'use client' when you need interactivity</li>
            <li><strong>Parallel Data Fetching:</strong> Use Promise.all() to fetch multiple data sources</li>
            <li><strong>Error Handling:</strong> Always handle errors gracefully in Server Components</li>
            <li><strong>TypeScript:</strong> Use TypeScript for better type safety with fetched data</li>
            <li><strong>Caching:</strong> Leverage Next.js caching for better performance</li>
          </ul>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Server Components are the foundation of Next.js App Router. They provide excellent performance, SEO, and security by running on the server. Use them for data fetching, static content, and layouts. Reserve Client Components only for interactive features that require browser APIs or user interactions.
        </p>
      </section>
    </main>
  );
}