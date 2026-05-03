export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Fetching Data (Client Components)</h1>

      <section>
        <h2 className="text-xl font-semibold">Client Components and Data Fetching</h2>
        <p className="text-gray-600 mt-2">
          Client Components run in the browser and can fetch data after the page loads. This is useful when you need interactivity, real-time updates, or when data depends on user actions. Use the 'use client' directive to mark a component as client-side.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Client-Side Data Fetching Works</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold">Page Loads</h3>
                <p className="text-gray-600 text-sm">Server sends HTML shell to browser.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold">JavaScript Hydrates</h3>
                <p className="text-gray-600 text-sm">React takes over and makes components interactive.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold">useEffect Runs</h3>
                <p className="text-gray-600 text-sm">Client component fetches data after mounting.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold">State Updates</h3>
                <p className="text-gray-600 text-sm">Component re-renders with fetched data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Client-Side Fetching</h2>
        <p className="text-gray-600 mt-2">
          Use useEffect and useState to fetch data in Client Components. The 'use client' directive tells Next.js this component should run on the client.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Basic Client Component</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';

import { useState, useEffect } from 'react';

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            The component shows loading state while fetching, then displays the data.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">User Interaction Data Fetching</h2>
        <p className="text-gray-600 mt-2">
          Fetch data based on user actions like button clicks, form submissions, or search queries.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Search Functionality</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';

import { useState } from 'react';

export default function SearchPosts() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(\`/api/posts/search?q=\${encodeURIComponent(query)}\`);
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="border p-2 mr-2"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <div>
        {results.map(post => (
          <div key={post.id} className="border-b py-2">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Search happens only when user clicks the button, not on every keystroke.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Real-time Data Updates</h2>
        <p className="text-gray-600 mt-2">
          Use intervals or WebSockets to fetch data periodically and keep the UI updated.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Polling for Updates</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';

import { useState, useEffect } from 'react';

export default function LiveStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    // Fetch immediately
    fetchStats();

    // Then fetch every 30 seconds
    const interval = setInterval(fetchStats, 30000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  if (!stats) return <div>Loading stats...</div>;

  return (
    <div>
      <h1>Live Statistics</h1>
      <p>Active users: {stats.activeUsers}</p>
      <p>Total posts: {stats.totalPosts}</p>
      <p>Last updated: {new Date(stats.lastUpdated).toLocaleTimeString()}</p>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Data refreshes automatically every 30 seconds to show live statistics.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Optimistic Updates</h2>
        <p className="text-gray-600 mt-2">
          Update the UI immediately when a user performs an action, then sync with the server. This makes the app feel faster.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Like Button with Optimistic Update</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';

import { useState } from 'react';

export default function LikeButton({ postId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    if (loading) return;

    // Optimistic update
    setLiked(true);
    setLikes(prev => prev + 1);

    setLoading(true);
    try {
      await fetch(\`/api/posts/\${postId}/like\`, {
        method: 'POST'
      });
    } catch (error) {
      // Revert on error
      setLiked(false);
      setLikes(prev => prev - 1);
      console.error('Failed to like post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      className={\`px-4 py-2 \${liked ? 'bg-red-500' : 'bg-gray-200'}\`}
    >
      {liked ? '❤️' : '🤍'} {likes} likes
    </button>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Button changes immediately, then confirms with server. Reverts if request fails.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Custom Hooks for Data Fetching</h2>
        <p className="text-gray-600 mt-2">
          Create reusable hooks to handle common data fetching patterns and reduce code duplication.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">useFetch Hook</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// hooks/useFetch.js
import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Request failed');
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Usage in component
'use client';

import { useFetch } from '@/hooks/useFetch';

export default function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Custom hook encapsulates fetching logic and can be reused across components.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use Client-Side Fetching</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>User Interactions:</strong> Data that depends on user input or actions</li>
          <li><strong>Real-time Data:</strong> Information that needs to update frequently</li>
          <li><strong>Private Data:</strong> Content that requires authentication</li>
          <li><strong>Dynamic Content:</strong> Data that changes based on user preferences</li>
          <li><strong>Form Submissions:</strong> POST requests and mutations</li>
          <li><strong>Browser APIs:</strong> Data from localStorage, geolocation, etc.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Client vs Server Fetching</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Server Components</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Client Components</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Performance</td>
                <td className="border border-gray-300 px-4 py-2">Faster initial load</td>
                <td className="border border-gray-300 px-4 py-2">Slower initial load</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">SEO</td>
                <td className="border border-gray-300 px-4 py-2">Excellent</td>
                <td className="border border-gray-300 px-4 py-2">Poor</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Interactivity</td>
                <td className="border border-gray-300 px-4 py-2">Limited</td>
                <td className="border border-gray-300 px-4 py-2">Full</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Real-time Updates</td>
                <td className="border border-gray-300 px-4 py-2">With ISR</td>
                <td className="border border-gray-300 px-4 py-2">Easy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Handle Loading States:</strong> Always show loading indicators to users</li>
            <li><strong>Error Boundaries:</strong> Use error boundaries to catch and handle errors gracefully</li>
            <li><strong>Optimistic Updates:</strong> Update UI immediately for better perceived performance</li>
            <li><strong>Cleanup Effects:</strong> Clean up intervals and event listeners in useEffect</li>
            <li><strong>Debounce Requests:</strong> Avoid excessive API calls with debouncing</li>
            <li><strong>Cache Data:</strong> Consider caching frequently accessed data</li>
            <li><strong>TypeScript:</strong> Type your API responses and state</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Pagination</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';

export default function PaginatedPosts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadPosts = async (pageNum) => {
    setLoading(true);
    const res = await fetch(\`/api/posts?page=\${pageNum}\`);
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts(page);
  }, [page]);

  return (
    <div>
      {posts.map(post => <PostItem key={post.id} post={post} />)}

      <button
        onClick={() => setPage(p => p - 1)}
        disabled={page === 1 || loading}
      >
        Previous
      </button>

      <span>Page {page}</span>

      <button
        onClick={() => setPage(p => p + 1)}
        disabled={loading}
      >
        Next
      </button>
    </div>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Load data page by page as user navigates.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Infinite Scroll</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';

export default function InfinitePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const res = await fetch(\`/api/posts?after=\${posts.length}\`);
    const newPosts = await res.json();

    if (newPosts.length === 0) {
      setHasMore(false);
    } else {
      setPosts(prev => [...prev, ...newPosts]);
    }
    setLoading(false);
  };

  // Intersection Observer for infinite scroll
  // ... implementation

  return (
    <div>
      {posts.map(post => <PostItem key={post.id} post={post} />)}
      {loading && <div>Loading more...</div>}
      {!hasMore && <div>No more posts</div>}
    </div>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Load more content as user scrolls down.</p>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Client-side data fetching is essential for interactive applications. Use it when you need real-time updates, user-specific data, or responses to user actions. Always handle loading states, errors, and consider performance optimizations like optimistic updates and caching.
        </p>
      </section>
    </main>
  );
}