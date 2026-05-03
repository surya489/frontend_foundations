export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">SSR (Server-Side Rendering)</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Server-Side Rendering?</h2>
        <p className="text-gray-600 mt-2">
          Server-Side Rendering (SSR) is a technique where web pages are generated on the server instead of in the browser. When a user visits your site, the server creates the complete HTML page and sends it to the browser, which can display it immediately. This is different from Client-Side Rendering where the browser has to build the page using JavaScript.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How SSR Works</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold">User Requests Page</h3>
                <p className="text-gray-600 text-sm">Browser sends request to server for a webpage.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold">Server Generates HTML</h3>
                <p className="text-gray-600 text-sm">Server runs React components and creates complete HTML.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold">Server Sends HTML</h3>
                <p className="text-gray-600 text-sm">Complete HTML page is sent to the browser.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold">Browser Displays Page</h3>
                <p className="text-gray-600 text-sm">User sees the page immediately, then JavaScript takes over for interactivity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">SSR in Next.js</h2>
        <p className="text-gray-600 mt-2">
          Next.js uses SSR by default for pages in the app directory. Server Components run on the server and generate HTML that gets sent to the browser.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Server Component Example</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/blog/page.tsx:

export default async function BlogPage() {
  // This runs on the server
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());

  return (
    <div>
      <h1>Blog Posts</h1>
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
            The data fetching and HTML generation happen on the server, so the browser receives a complete page.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Benefits of SSR</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Performance</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Faster initial page load</li>
              <li>Content visible immediately</li>
              <li>Better for large pages</li>
              <li>Reduced client-side JavaScript</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">SEO</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Search engines see full content</li>
              <li>Better search rankings</li>
              <li>Social media previews work</li>
              <li>Accessible to crawlers</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">User Experience</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>No loading spinner on first visit</li>
              <li>Works without JavaScript</li>
              <li>Better perceived performance</li>
              <li>Progressive enhancement</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-orange-600">Developer Experience</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Direct database access</li>
              <li>Server-side environment variables</li>
              <li>Reduced client bundle size</li>
              <li>Easier debugging</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">SSR vs Client-Side Rendering</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Server-Side Rendering</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>HTML generated on server</li>
              <li>Complete page sent to browser</li>
              <li>Faster initial load</li>
              <li>Better SEO</li>
              <li>Works without JavaScript</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Client-Side Rendering</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>HTML generated in browser</li>
              <li>JavaScript builds the page</li>
              <li>Faster subsequent navigation</li>
              <li>More interactive by default</li>
              <li>Requires JavaScript enabled</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use SSR</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Content-Heavy Pages:</strong> Blog posts, articles, documentation</li>
          <li><strong>E-commerce:</strong> Product pages, category listings</li>
          <li><strong>SEO-Critical Pages:</strong> Landing pages, marketing content</li>
          <li><strong>Social Sharing:</strong> Pages that need proper Open Graph tags</li>
          <li><strong>Public Content:</strong> Content that doesn't require user authentication</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">SSR Limitations</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li><strong>Slower TTFB:</strong> Time to first byte can be slower due to server processing</li>
            <li><strong>Server Load:</strong> Each request requires server computation</li>
            <li><strong>Browser Inconsistency:</strong> Server and client HTML must match</li>
            <li><strong>State Management:</strong> Can't access browser APIs during rendering</li>
            <li><strong>Caching Complexity:</strong> More complex to cache than static pages</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Hydration</h2>
        <p className="text-gray-600 mt-2">
          After the server sends HTML, React needs to "hydrate" it by attaching event handlers and making it interactive. This process ensures the server-rendered HTML matches what React would create on the client.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="space-y-2 font-mono text-sm">
            <div>1. Server generates HTML → Static page</div>
            <div>2. Browser receives HTML → User sees content</div>
            <div>3. JavaScript loads → Hydration begins</div>
            <div>4. React attaches handlers → Page becomes interactive</div>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Server-Side Rendering generates HTML on the server before sending it to the browser, resulting in faster initial page loads and better SEO. Next.js makes SSR easy with Server Components, but it's important to understand when SSR is beneficial versus other rendering strategies like Static Site Generation.
        </p>
      </section>
    </main>
  );
}