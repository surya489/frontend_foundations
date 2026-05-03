export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">When to Use What</h1>

      <section>
        <h2 className="text-xl font-semibold">Understanding the Choice</h2>
        <p className="text-gray-600 mt-2">
          Next.js App Router gives you two types of components: Server Components (the default) and Client Components (marked with 'use client'). Choosing the right type for each situation is crucial for building performant, maintainable applications. The key is understanding what each component type excels at and using them for their strengths.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Decision Framework</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold">Start with Server Components</h3>
                <p className="text-gray-600 text-sm">Assume every component should be a Server Component by default.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold">Identify Client Needs</h3>
                <p className="text-gray-600 text-sm">Check if the component needs browser APIs, interactivity, or React hooks.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold">Add 'use client' Only When Necessary</h3>
                <p className="text-gray-600 text-sm">Mark component as client only if it absolutely requires client-side features.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold">Keep Client Boundaries Small</h3>
                <p className="text-gray-600 text-sm">Minimize the amount of code that runs on the client.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Always Use Server Components For</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Data Fetching</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>API calls and database queries</li>
              <li>External service integrations</li>
              <li>CMS content fetching</li>
              <li>Static data loading</li>
            </ul>
            <div className="bg-green-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`export default async function BlogPost() {
  const post = await fetchPost(); // ✅ Server-side
  return <article>{post.content}</article>;
}`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Static Content</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Page layouts and templates</li>
              <li>Navigation components</li>
              <li>Footer and header content</li>
              <li>Marketing pages</li>
            </ul>
            <div className="bg-blue-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`export default function Layout() {
  return <header>Navigation</header>; // ✅ Static
}`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">SEO-Critical Content</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Blog posts and articles</li>
              <li>Product descriptions</li>
              <li>Meta tags and titles</li>
              <li>Structured data</li>
            </ul>
            <div className="bg-purple-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`<title>{post.title}</title> // ✅ SEO-friendly
<meta description={post.excerpt} />`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-orange-600">Performance-Sensitive Areas</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Large lists and tables</li>
              <li>Content-heavy pages</li>
              <li>Above-the-fold content</li>
              <li>Critical rendering path</li>
            </ul>
            <div className="bg-orange-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`<ProductGrid products={products} /> // ✅ Fast render`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Always Use Client Components For</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-red-600">User Interactions</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Button clicks and form submissions</li>
              <li>Modal dialogs and dropdowns</li>
              <li>Tab switching and accordions</li>
              <li>Interactive navigation</li>
            </ul>
            <div className="bg-red-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`<button onClick={handleClick}>Click me</button>`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-pink-600">React Hooks</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>useState for local state</li>
              <li>useEffect for side effects</li>
              <li>useContext for context consumption</li>
              <li>Custom hooks</li>
            </ul>
            <div className="bg-pink-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`const [count, setCount] = useState(0);`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-indigo-600">Browser APIs</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>localStorage and sessionStorage</li>
              <li>Geolocation and device APIs</li>
              <li>WebSocket connections</li>
              <li>Canvas and WebGL</li>
            </ul>
            <div className="bg-indigo-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`localStorage.getItem('theme')`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-teal-600">Real-time Features</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Live clocks and timers</li>
              <li>Real-time notifications</li>
              <li>Live chat interfaces</li>
              <li>Dynamic data updates</li>
            </ul>
            <div className="bg-teal-50 p-2 rounded font-mono text-xs mt-2">
              <pre>{`setInterval(() => setTime(new Date()), 1000)`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Hybrid Patterns</h2>
        <p className="text-gray-600 mt-2">
          Many components benefit from combining server and client rendering. Use Server Components for static content and Client Components for interactive parts.
        </p>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Server Data, Client Interaction</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Server Component - handles data
export default async function ProductPage({ params }) {
  const product = await fetchProduct(params.id);

  return (
    <div>
      {/* Static content - Server rendered */}
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <ProductImage src={product.image} />

      {/* Interactive parts - Client rendered */}
      <AddToCart productId={product.id} />
    </div>
  );
}

// Client Component - handles interaction
'use client';
function AddToCart({ productId }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={() => addToCart(productId, quantity)}>
        Add to Cart
      </button>
    </div>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Server handles static data, client handles user interactions.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Progressive Enhancement</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Server Component - works without JavaScript
export default async function CommentSection({ postId }) {
  const comments = await fetchComments(postId);

  return (
    <div>
      <h3>Comments ({comments.length})</h3>

      {/* Server-rendered comments */}
      {comments.map(comment => (
        <div key={comment.id}>
          <strong>{comment.author}</strong>: {comment.text}
        </div>
      ))}

      {/* Client enhancement - only if JS enabled */}
      <CommentForm postId={postId} />
    </div>
  );
}

// Client Component - enhances with interactivity
'use client';
function CommentForm({ postId }) {
  // Form becomes interactive only with JavaScript
  return <form action={submitComment}>...</form>;
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Page works without JavaScript, becomes interactive with it.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Decision Scenarios</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">E-commerce Product Page</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div className="bg-green-50 p-3 rounded">
                <h4 className="font-semibold text-green-700">Server Components</h4>
                <ul className="list-disc ml-4 text-sm text-gray-600 mt-1">
                  <li>Product details and descriptions</li>
                  <li>Price and availability</li>
                  <li>Product images and gallery</li>
                  <li>Related products</li>
                  <li>Reviews and ratings</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h4 className="font-semibold text-blue-700">Client Components</h4>
                <ul className="list-disc ml-4 text-sm text-gray-600 mt-1">
                  <li>Add to cart functionality</li>
                  <li>Quantity selector</li>
                  <li>Size/color pickers</li>
                  <li>Wishlist button</li>
                  <li>Image zoom/lightbox</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Blog/Dashboard</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div className="bg-green-50 p-3 rounded">
                <h4 className="font-semibold text-green-700">Server Components</h4>
                <ul className="list-disc ml-4 text-sm text-gray-600 mt-1">
                  <li>Article content and metadata</li>
                  <li>Author information</li>
                  <li>Related posts</li>
                  <li>Navigation and layout</li>
                  <li>Static widgets</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h4 className="font-semibold text-blue-700">Client Components</h4>
                <ul className="list-disc ml-4 text-sm text-gray-600 mt-1">
                  <li>Comment forms</li>
                  <li>Like/share buttons</li>
                  <li>Search functionality</li>
                  <li>Theme toggle</li>
                  <li>Real-time notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Migration Strategies</h2>
        <p className="text-gray-600 mt-2">
          When converting from Pages Router or deciding how to refactor existing components, follow these patterns.
        </p>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">From Pages Router</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Before: Everything client-side
// pages/product/[id].js
export default function ProductPage({ product }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h1>{product.name}</h1> {/* Static */}
      <SizeSelector
        value={selectedSize}
        onChange={setSelectedSize}
      /> {/* Interactive */}
    </div>
  );
}

// After: Split server and client
// app/product/[id]/page.tsx
export default async function ProductPage({ params }) {
  const product = await fetchProduct(params.id); // Server

  return (
    <div>
      <h1>{product.name}</h1> {/* Server rendered */}
      <SizeSelector productId={product.id} /> {/* Client */}
    </div>
  );
}

// components/SizeSelector.tsx
'use client';
export function SizeSelector({ productId }) {
  const [selectedSize, setSelectedSize] = useState('M');
  // Interactive logic here
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Move static content to server, keep interactive parts client-side.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Refactoring Existing Components</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Large component with mixed concerns
export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchUser().then(setUser);
    fetchPosts().then(setPosts);
  }, []);

  return (
    <div>
      <UserProfile user={user} /> {/* Static when loaded */}
      <PostsList posts={posts} /> {/* Static when loaded */}
      <CreatePostForm /> {/* Always interactive */}
    </div>
  );
}

// Better: Separate concerns
export default async function Dashboard() {
  // Server fetches data
  const user = await fetchUser();
  const posts = await fetchPosts();

  return (
    <div>
      <UserProfile user={user} /> {/* Server rendered */}
      <PostsList posts={posts} /> {/* Server rendered */}
      <CreatePostForm /> {/* Client component */}
    </div>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Move data fetching to server, keep only interactive parts as client components.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Performance Considerations</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-yellow-600">Bundle Size Impact</h3>
              <p className="text-gray-600 text-sm">Each 'use client' boundary increases the JavaScript sent to browsers.</p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600">Hydration Cost</h3>
              <p className="text-gray-600 text-sm">Client components require hydration, which can delay interactivity.</p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600">SEO Trade-offs</h3>
              <p className="text-gray-600 text-sm">Client-rendered content may not be immediately available to crawlers.</p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600">Loading Patterns</h3>
              <p className="text-gray-600 text-sm">Server content loads immediately, client content loads after JavaScript.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Testing Strategy</h2>
        <p className="text-gray-600 mt-2">
          Test both server and client rendering to ensure consistency and catch hydration mismatches.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Server Rendering:</strong> Test that pages render correctly without JavaScript</li>
            <li><strong>Hydration:</strong> Ensure server and client output match exactly</li>
            <li><strong>Progressive Enhancement:</strong> Verify core functionality works without client features</li>
            <li><strong>Performance:</strong> Monitor bundle size and loading metrics</li>
            <li><strong>SEO:</strong> Check that important content is server-rendered</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Mistakes to Avoid</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-red-600">Over-Using Client Components</h3>
              <p className="text-gray-600 text-sm">Don't mark everything as 'use client' just because it worked in Pages Router.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Client-Side Data Fetching</h3>
              <p className="text-gray-600 text-sm">Avoid fetching the same data on both server and client unnecessarily.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Large Client Boundaries</h3>
              <p className="text-gray-600 text-sm">Don't create massive client components - keep them focused and small.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Missing Error Handling</h3>
              <p className="text-gray-600 text-sm">Handle loading and error states in both server and client components.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Quick Decision Guide</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-green-600 font-bold">✅ Server Component</span>
              <span>if it only displays data or static content</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600 font-bold">❌ Client Component</span>
              <span>if it needs useState, useEffect, or event handlers</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 font-bold">✅ Server Component</span>
              <span>if it's above the fold or SEO-critical</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600 font-bold">❌ Client Component</span>
              <span>if it accesses browser APIs like localStorage</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 font-bold">✅ Server Component</span>
              <span>if it fetches data from APIs or databases</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600 font-bold">❌ Client Component</span>
              <span>if it needs to respond to user interactions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Server Components should be your default choice in Next.js App Router. They provide better performance, SEO, and security. Only use Client Components when you absolutely need browser-specific features, user interactions, or React hooks. When in doubt, start with Server Components and add 'use client' only when necessary.
        </p>
      </section>
    </main>
  );
}