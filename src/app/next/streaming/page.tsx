export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Streaming & Suspense</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Streaming?</h2>
        <p className="text-gray-600 mt-2">
          Streaming is a technique that allows you to break down a page into smaller chunks and send them to the browser as soon as they're ready. Instead of waiting for the entire page to be generated on the server, you can start sending parts of the page immediately. This makes your application feel much faster to users.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Streaming Works</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold">Server Starts Processing</h3>
                <p className="text-gray-600 text-sm">Server begins rendering the page immediately.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold">Fast Parts Stream First</h3>
                <p className="text-gray-600 text-sm">Static content and fast components are sent immediately.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold">Slow Parts Load Later</h3>
                <p className="text-gray-600 text-sm">Components with slow data fetching stream in as they complete.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold">Page Builds Progressively</h3>
                <p className="text-gray-600 text-sm">Users see content appearing piece by piece, not all at once.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Streaming in Next.js</h2>
        <p className="text-gray-600 mt-2">
          Next.js provides built-in support for streaming with React Suspense. You can wrap slow components in Suspense boundaries to stream them separately.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Basic Streaming Example</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      <h1>My Page</h1>

      {/* This loads immediately */}
      <p>This content loads fast!</p>

      {/* This streams in later */}
      <Suspense fallback={<div>Loading slow content...</div>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}

async function SlowComponent() {
  // Simulate slow data fetching
  await new Promise(resolve => setTimeout(resolve, 3000));

  return <p>This content took 3 seconds to load!</p>;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            The page header and first paragraph appear immediately, while the slow component loads in the background.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Suspense Boundaries</h2>
        <p className="text-gray-600 mt-2">
          Suspense boundaries allow you to define which parts of your page can be streamed separately. Each boundary can have its own loading state.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Multiple Suspense Boundaries</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        <Suspense fallback={<ChartSkeleton />}>
          <SalesChart />
        </Suspense>

        <Suspense fallback={<StatsSkeleton />}>
          <UserStats />
        </Suspense>

        <Suspense fallback={<NewsSkeleton />}>
          <LatestNews />
        </Suspense>

        <Suspense fallback={<TasksSkeleton />}>
          <PendingTasks />
        </Suspense>
      </div>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Each chart and component loads independently, so users see parts of the dashboard immediately.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Loading UI Components</h2>
        <p className="text-gray-600 mt-2">
          You can create beautiful loading states that match your actual components using skeleton screens or spinners.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Skeleton Loading Components</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`function ProductSkeleton() {
  return (
    <div className="border rounded-lg p-4 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-32 bg-gray-200 rounded mb-4"></div>
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <img src={product.image} alt={product.name} />
      <p className="font-bold">{product.price}</p>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Skeleton components provide immediate visual feedback while real data loads.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Benefits of Streaming</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Performance</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Faster perceived load times</li>
              <li>Progressive page loading</li>
              <li>Reduced Time to First Byte</li>
              <li>Better user experience</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">User Experience</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Content appears incrementally</li>
              <li>No blank loading screens</li>
              <li>Interactive parts load first</li>
              <li>Reduced bounce rate</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">SEO</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Search engines see content faster</li>
              <li>Better Core Web Vitals</li>
              <li>Improved crawlability</li>
              <li>Faster indexing</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-orange-600">Development</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Simple to implement</li>
              <li>Built into React</li>
              <li>No complex setup</li>
              <li>Automatic optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Streaming Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Priority-Based Loading</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`{/* Above the fold - loads first */}
<header>Navigation</header>
<Suspense fallback={<HeroSkeleton />}>
  <HeroSection />
</Suspense>

{/* Below the fold - loads second */}
<Suspense fallback={<ContentSkeleton />}>
  <MainContent />
</Suspense>

{/* Least important - loads last */}
<Suspense fallback={<FooterSkeleton />}>
  <Footer />
</Suspense>`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Load critical content first, less important content can load later.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Parallel Loading</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`<div className="grid grid-cols-3 gap-4">
  <Suspense fallback={<CardSkeleton />}>
    <ProductCard id="1" />
  </Suspense>
  <Suspense fallback={<CardSkeleton />}>
    <ProductCard id="2" />
  </Suspense>
  <Suspense fallback={<CardSkeleton />}>
    <ProductCard id="3" />
  </Suspense>
</div>`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Multiple components load in parallel, not sequentially.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Error Boundaries with Streaming</h2>
        <p className="text-gray-600 mt-2">
          You can combine streaming with error boundaries to handle failures gracefully in streamed components.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Streaming with Error Handling</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';

import { ErrorBoundary } from 'react-error-boundary';

export default function Page() {
  return (
    <div>
      <h1>My App</h1>

      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        <Suspense fallback={<Loading />}>
          <SlowComponent />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>Chart failed to load</div>}>
        <Suspense fallback={<ChartSkeleton />}>
          <DataChart />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Each streamed component can fail independently without breaking the entire page.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Streaming vs Other Methods</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left">Method</th>
                <th className="border border-gray-300 px-4 py-2 text-left">User Experience</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Complexity</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">No Streaming</td>
                <td className="border border-gray-300 px-4 py-2">Wait for everything</td>
                <td className="border border-gray-300 px-4 py-2">Simple</td>
                <td className="border border-gray-300 px-4 py-2">Fast pages</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Streaming</td>
                <td className="border border-gray-300 px-4 py-2">Progressive loading</td>
                <td className="border border-gray-300 px-4 py-2">Medium</td>
                <td className="border border-gray-300 px-4 py-2">Mixed content speeds</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Client-Side</td>
                <td className="border border-gray-300 px-4 py-2">Interactive but slow start</td>
                <td className="border border-gray-300 px-4 py-2">Complex</td>
                <td className="border border-gray-300 px-4 py-2">Highly interactive apps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use Streaming</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Dashboards:</strong> Multiple data sources loading at different speeds</li>
          <li><strong>E-commerce:</strong> Product listings with reviews, recommendations</li>
          <li><strong>Social Media:</strong> Feeds with different content types</li>
          <li><strong>News Sites:</strong> Articles with related content and ads</li>
          <li><strong>Analytics:</strong> Multiple charts and metrics loading independently</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Streaming Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Identify Slow Parts:</strong> Use Suspense around components that fetch data or do heavy computation</li>
            <li><strong>Create Good Fallbacks:</strong> Skeleton screens that match the actual content layout</li>
            <li><strong>Group Related Content:</strong> Components that load together should share a Suspense boundary</li>
            <li><strong>Consider User Priority:</strong> Load above-the-fold content first</li>
            <li><strong>Test Loading States:</strong> Ensure fallback UIs work well and don't cause layout shifts</li>
          </ul>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Streaming allows you to deliver content progressively, making your app feel faster by showing users parts of the page as soon as they're ready. By wrapping slow components in Suspense boundaries, you can prevent the entire page from waiting for one slow component, creating a much better user experience.
        </p>
      </section>
    </main>
  );
}