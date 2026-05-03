export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Caching & Revalidation</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Caching in Next.js?</h2>
        <p className="text-gray-600 mt-2">
          Caching in Next.js helps your application run faster by storing frequently used data and avoiding unnecessary re-computation or re-fetching. Next.js has built-in caching for different types of data: requests, full routes, and computed results. Understanding caching is crucial for building performant applications.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Types of Caching in Next.js</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Request Memoization</h3>
            <p className="text-gray-600 text-sm mt-2">Caches fetch requests during a single render pass. Prevents duplicate API calls.</p>
            <div className="bg-blue-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`// Same URL called twice
// Only fetches once
const data1 = await fetch('/api/data');
const data2 = await fetch('/api/data');`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Data Cache</h3>
            <p className="text-gray-600 text-sm mt-2">Caches fetch responses across requests. Persists data between user visits.</p>
            <div className="bg-green-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`// Cached across requests
const data = await fetch('/api/posts', {
  next: { revalidate: 3600 }
});`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">Full Route Cache</h3>
            <p className="text-gray-600 text-sm mt-2">Caches rendered HTML and RSC payload of entire routes.</p>
            <div className="bg-purple-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`// Static routes cached
// Dynamic routes cached per request`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Request Memoization</h2>
        <p className="text-gray-600 mt-2">
          During a single render, Next.js automatically deduplicates identical fetch requests. This prevents the same API from being called multiple times in the same component tree.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Automatic Deduplication</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default async function Page() {
  // These two calls fetch only once
  const posts = await fetch('https://api.example.com/posts');
  const recentPosts = await fetch('https://api.example.com/posts?limit=5');

  // Different URLs = separate requests
  const users = await fetch('https://api.example.com/users');

  return (
    <div>
      <PostsList posts={await posts.json()} />
      <RecentPosts posts={await recentPosts.json()} />
      <UsersList users={await users.json()} />
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Next.js automatically deduplicates identical requests during the same render.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Data Cache Configuration</h2>
        <p className="text-gray-600 mt-2">
          Control how long fetch responses are cached using the second parameter of the fetch function.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Cache Control Options</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Cache indefinitely (default for static data)
const staticData = await fetch('https://api.example.com/static');

// Cache for 1 hour
const hourlyData = await fetch('https://api.example.com/hourly', {
  next: { revalidate: 3600 }
});

// Cache for 24 hours
const dailyData = await fetch('https://api.example.com/daily', {
  next: { revalidate: 86400 }
});

// Never cache (always fresh)
const liveData = await fetch('https://api.example.com/live', {
  cache: 'no-store'
});

// Force cache (override no-cache headers)
const forcedCache = await fetch('https://api.example.com/forced', {
  cache: 'force-cache'
});`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Different cache strategies for different types of data.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Revalidation Strategies</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-orange-600">Time-Based Revalidation</h3>
            <p className="text-gray-600 text-sm mt-2">Data automatically refreshes after a specified time interval.</p>
            <div className="bg-orange-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  // Data cached for 1 hour, then refreshed
}`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-red-600">On-Demand Revalidation</h3>
            <p className="text-gray-600 text-sm mt-2">Manually trigger revalidation when data changes.</p>
            <div className="bg-red-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`import { revalidatePath, revalidateTag } from 'next/cache';

// Revalidate specific path
revalidatePath('/blog');

// Revalidate by tag
revalidateTag('posts');`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Cache Tags</h2>
        <p className="text-gray-600 mt-2">
          Tag your cached data to selectively invalidate related caches when content changes.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Using Cache Tags</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Tag data when fetching
const posts = await fetch('https://api.example.com/posts', {
  next: { tags: ['posts'] }
});

const user = await fetch('https://api.example.com/user', {
  next: { tags: ['user', 'profile'] }
});

// In API route or server action
import { revalidateTag } from 'next/cache';

export async function POST() {
  // Update post in database
  await updatePost();

  // Invalidate all caches tagged with 'posts'
  revalidateTag('posts');
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use tags to invalidate related data when content changes.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Full Route Cache</h2>
        <p className="text-gray-600 mt-2">
          Next.js caches the rendered HTML and React Server Components payload for entire routes. This happens automatically for static routes.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Route-Level Caching</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/blog/page.tsx - Cached automatically
export default async function BlogPage() {
  const posts = await fetch('https://api.example.com/posts');
  return <PostsList posts={await posts.json()} />;
}

// app/blog/[slug]/page.tsx - Cached per slug
export default async function BlogPost({ params }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`);
  return <Post post={await post.json()} />;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Static routes are cached at build time, dynamic routes cached on first visit.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Cache Invalidation Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">After Database Updates</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// app/api/posts/route.ts
import { revalidateTag } from 'next/cache';

export async function POST(request) {
  const post = await request.json();

  // Save to database
  const newPost = await db.posts.create(post);

  // Invalidate posts cache
  revalidateTag('posts');

  return Response.json(newPost);
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Revalidate cache after creating new content.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Webhook Revalidation</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// app/api/webhook/route.ts
import { revalidatePath } from 'next/cache';

export async function POST(request) {
  const { type, slug } = await request.json();

  if (type === 'post.published') {
    revalidatePath('/blog');
    revalidatePath(\`/blog/\${slug}\`);
  }

  return Response.json({ revalidated: true });
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Handle external service updates via webhooks.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Caching Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Cache Static Data Long:</strong> Data that rarely changes (categories, site config)</li>
            <li><strong>Cache Dynamic Data Short:</strong> News, social media posts, user-generated content</li>
            <li><strong>Use Tags Strategically:</strong> Group related data with the same tags</li>
            <li><strong>Avoid Over-Caching:</strong> Don't cache user-specific or private data</li>
            <li><strong>Monitor Cache Hit Rates:</strong> Use analytics to see cache effectiveness</li>
            <li><strong>Test Cache Invalidation:</strong> Ensure updates appear when expected</li>
            <li><strong>Consider Cache Size:</strong> Large caches can impact memory usage</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Cache Debugging</h2>
        <p className="text-gray-600 mt-2">
          Next.js provides headers to help debug caching behavior in development.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Cache Headers</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// In development, Next.js adds headers:
x-nextjs-cache: HIT     // Cache hit
x-nextjs-cache: MISS    // Cache miss
x-nextjs-cache: STALE   // Serving stale data while revalidating

// Check headers in browser dev tools
fetch('/api/data').then(res => {
  console.log('Cache status:', res.headers.get('x-nextjs-cache'));
  return res.json();
});`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use these headers to understand if your caching is working correctly.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Caching Mistakes</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-red-600">Caching User-Specific Data</h3>
              <p className="text-gray-600 text-sm">Don't cache personalized content - it will show wrong data to different users.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Not Invalidating on Updates</h3>
              <p className="text-gray-600 text-sm">Always revalidate cache when content changes, or users will see stale data.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Over-Reliance on Cache</h3>
              <p className="text-gray-600 text-sm">Don't cache everything - some data needs to be fresh on every request.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Ignoring Cache in Development</h3>
              <p className="text-gray-600 text-sm">Test with caching disabled to ensure your app works without cache.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Cache Performance Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left">Strategy</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Speed</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Freshness</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">No Cache</td>
                <td className="border border-gray-300 px-4 py-2">Slowest</td>
                <td className="border border-gray-300 px-4 py-2">Always fresh</td>
                <td className="border border-gray-300 px-4 py-2">Real-time data</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Short Cache</td>
                <td className="border border-gray-300 px-4 py-2">Fast</td>
                <td className="border border-gray-300 px-4 py-2">Mostly fresh</td>
                <td className="border border-gray-300 px-4 py-2">News, social posts</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Long Cache</td>
                <td className="border border-gray-300 px-4 py-2">Fastest</td>
                <td className="border border-gray-300 px-4 py-2">Potentially stale</td>
                <td className="border border-gray-300 px-4 py-2">Static content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Caching is essential for performance but requires careful management. Use appropriate cache durations for different types of data, always invalidate when content changes, and test thoroughly. Next.js provides powerful caching primitives that make it easy to build fast applications while keeping data fresh.
        </p>
      </section>
    </main>
  );
}