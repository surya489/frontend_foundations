export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Fetching Data (Server Components)</h1>

      <section>
        <h2 className="text-xl font-semibold">Server Components and Data Fetching</h2>
        <p className="text-gray-600 mt-2">
          In Next.js App Router, Server Components run on the server and can fetch data directly. This is the recommended way to fetch data because it happens before the page is sent to the browser, improving performance and SEO.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Server-Side Data Fetching Works</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold">Request Hits Server</h3>
                <p className="text-gray-600 text-sm">User visits page, request goes to Next.js server.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold">Server Component Executes</h3>
                <p className="text-gray-600 text-sm">Server Component runs and fetches data from APIs or databases.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold">Data is Rendered</h3>
                <p className="text-gray-600 text-sm">Component renders with fetched data into HTML.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold">Complete Page Sent</h3>
                <p className="text-gray-600 text-sm">Browser receives fully rendered HTML with data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Data Fetching</h2>
        <p className="text-gray-600 mt-2">
          Server Components can use async/await to fetch data. The component automatically waits for the data before rendering.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Simple Data Fetching</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default async function BlogPosts() {
  // Fetch data on the server
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            The fetch happens on the server, and the component renders with real data.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Error Handling</h2>
        <p className="text-gray-600 mt-2">
          Handle errors gracefully in Server Components. You can use try/catch blocks or error boundaries.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Error Handling Patterns</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default async function UserProfile({ userId }) {
  try {
    const user = await fetch(\`https://api.example.com/users/\${userId}\`)
      .then(res => {
        if (!res.ok) throw new Error('User not found');
        return res.json();
      });

    return (
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>User not found</h1>
        <p>Sorry, we couldn't find that user.</p>
      </div>
    );
  }
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Handle API errors directly in the component and show appropriate fallback UI.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Parallel Data Fetching</h2>
        <p className="text-gray-600 mt-2">
          Fetch multiple data sources in parallel to improve performance. Use Promise.all() to fetch data simultaneously.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Fetching Multiple APIs</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default async function Dashboard() {
  // Fetch all data in parallel
  const [posts, users, stats] = await Promise.all([
    fetch('https://api.example.com/posts').then(res => res.json()),
    fetch('https://api.example.com/users').then(res => res.json()),
    fetch('https://api.example.com/stats').then(res => res.json()),
  ]);

  return (
    <div>
      <h1>Dashboard</h1>

      <section>
        <h2>Recent Posts ({posts.length})</h2>
        {/* Render posts */}
      </section>

      <section>
        <h2>Users ({users.length})</h2>
        {/* Render users */}
      </section>

      <section>
        <h2>Statistics</h2>
        <p>Total views: {stats.views}</p>
      </section>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            All three API calls happen at the same time, not sequentially, making the page load faster.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Dynamic Data Fetching</h2>
        <p className="text-gray-600 mt-2">
          For dynamic routes, you can access URL parameters to fetch specific data.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Dynamic Route Data Fetching</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/blog/[slug]/page.tsx
export default async function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  // Fetch post by slug
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
    .then(res => res.json());

  // Fetch related posts
  const relatedPosts = await fetch(\`https://api.example.com/posts?related=\${post.id}\`)
    .then(res => res.json());

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      <h2>Related Posts</h2>
      {relatedPosts.map(related => (
        <div key={related.id}>
          <h3>{related.title}</h3>
        </div>
      ))}
    </article>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use the params object to access dynamic route segments and fetch appropriate data.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Caching Strategies</h2>
        <p className="text-gray-600 mt-2">
          Next.js automatically caches fetch requests. You can control caching behavior with options.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Cache Control Options</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Force fresh data on every request
const data = await fetch('https://api.example.com/data', {
  cache: 'no-store'
});

// Cache for 1 hour
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 3600 }
});

// Cache indefinitely (default)
const data = await fetch('https://api.example.com/data');

// Cache with tags for manual revalidation
const data = await fetch('https://api.example.com/data', {
  next: { tags: ['posts'] }
});`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Different caching strategies for different types of data.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Benefits of Server-Side Fetching</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Performance</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Faster initial page loads</li>
              <li>Reduced client-side JavaScript</li>
              <li>Automatic request deduplication</li>
              <li>Built-in caching</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">SEO</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Content available to crawlers</li>
              <li>Faster indexing</li>
              <li>Better search rankings</li>
              <li>Social media friendly</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">Security</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>API keys stay on server</li>
              <li>Database credentials secure</li>
              <li>No client-side exposure</li>
              <li>Request filtering possible</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-orange-600">Developer Experience</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Simple async/await syntax</li>
              <li>TypeScript support</li>
              <li>Error handling in components</li>
              <li>Automatic optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Use Parallel Fetching:</strong> Fetch multiple data sources with Promise.all()</li>
            <li><strong>Handle Errors Gracefully:</strong> Always have fallback UI for failed requests</li>
            <li><strong>Cache Appropriately:</strong> Use appropriate cache settings for your data</li>
            <li><strong>Avoid Waterfalls:</strong> Don't fetch data that depends on other data sequentially</li>
            <li><strong>Use TypeScript:</strong> Type your API responses for better development experience</li>
            <li><strong>Consider Loading States:</strong> Use Suspense for better UX with slow requests</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Data Fetching Utils</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// lib/api.ts
export async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function getPost(slug: string) {
  const res = await fetch(\`https://api.example.com/posts/\${slug}\`);
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}

// Usage in component
import { getPosts, getPost } from '@/lib/api';

export default async function BlogPage() {
  const posts = await getPosts();
  // ...
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Create reusable API functions for cleaner components.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Typed API Responses</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// types/api.ts
export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

// lib/api.ts
export async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://api.example.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Use TypeScript interfaces for better type safety and IntelliSense.</p>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Server Components make data fetching simple and efficient. By fetching data on the server before rendering, you get better performance, SEO, and security compared to client-side fetching. Use async/await syntax, handle errors gracefully, and fetch data in parallel when possible.
        </p>
      </section>
    </main>
  );
}