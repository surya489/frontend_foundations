export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Pages vs App Router</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Routers in Next.js?</h2>
        <p className="text-gray-600 mt-2">
          Next.js has two ways to organize and create your website pages: the Pages Router (older) and the App Router (newer and recommended). Both help you create different pages on your website, but they work differently.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Pages Router (Older Way)</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">How it works:</h3>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Uses a <code className="bg-gray-100 px-1 rounded">pages/</code> folder</li>
            <li>Each <code className="bg-gray-100 px-1 rounded">.js</code> or <code className="bg-gray-100 px-1 rounded">.tsx</code> file becomes a page</li>
            <li>Simple but limited for complex layouts</li>
          </ul>
          <div className="mt-3 font-mono text-sm bg-white p-2 rounded">
            <pre>{`pages/
├── index.js      → /
├── about.js      → /about
└── blog/
    └── index.js  → /blog`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">App Router (Newer Way)</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">How it works:</h3>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Uses an <code className="bg-gray-100 px-1 rounded">app/</code> folder</li>
            <li>Each folder can contain a <code className="bg-gray-100 px-1 rounded">page.tsx</code> file</li>
            <li>Supports nested layouts and more advanced features</li>
          </ul>
          <div className="mt-3 font-mono text-sm bg-white p-2 rounded">
            <pre>{`app/
├── page.tsx      → /
├── about/
│   └── page.tsx  → /about
└── blog/
    └── page.tsx  → /blog`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key Differences</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-red-600">Pages Router Limitations</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>No nested layouts</li>
              <li>Less control over loading/error states</li>
              <li>Harder to share UI between pages</li>
              <li>Limited server component support</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">App Router Advantages</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Nested layouts for better organization</li>
              <li>Loading and error pages per route</li>
              <li>Server and client components</li>
              <li>Better performance and SEO</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Which One Should You Use?</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-gray-700">
            <strong>Recommendation:</strong> Use the App Router for new projects. It's the future of Next.js and includes all the latest features. The Pages Router is still supported for existing projects but won't get new features.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Migration</h2>
        <p className="text-gray-600 mt-2">
          If you have an existing Pages Router project, you can gradually migrate to App Router. Both can exist in the same project during the transition.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          The App Router is Next.js's modern way of building websites. It gives you more control and better performance compared to the older Pages Router. For new projects, always choose App Router!
        </p>
      </section>
    </main>
  );
}