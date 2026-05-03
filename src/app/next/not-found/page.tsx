export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Not Found Page</h1>

      <section>
        <h2 className="text-xl font-semibold">What is a Not Found Page?</h2>
        <p className="text-gray-600 mt-2">
          A not found page (also called a 404 page) is what users see when they try to visit a URL that doesn't exist on your website. Instead of showing a generic browser error, you can create a custom page that matches your site's design and helps users find what they're looking for.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Creating a Not Found Page</h2>
        <p className="text-gray-600 mt-2">
          In Next.js App Router, you create a <code className="bg-gray-100 px-1 rounded">not-found.tsx</code> file in any route folder. It will automatically be shown when a route doesn't exist.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Basic Not Found Page</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/not-found.tsx:

export default function NotFound() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Go Home
      </a>
    </div>
  );
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Where to Place not-found.tsx</h2>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
          <pre>{`app/
├── not-found.tsx          # App-wide 404 page
├── blog/
│   ├── not-found.tsx      # Blog section 404
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
└── dashboard/
    ├── not-found.tsx      # Dashboard 404
    └── page.tsx`}</pre>
        </div>
        <p className="text-gray-600 mt-2">
          You can have different 404 pages for different sections of your site.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When Not Found Pages Show</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Missing Routes:</strong> When someone visits a URL that doesn't exist</li>
          <li><strong>Dynamic Route Not Found:</strong> When a dynamic route parameter doesn't match any data</li>
          <li><strong>Soft Navigation:</strong> When using Next.js Link or router.push to a non-existent route</li>
          <li><strong>API Routes:</strong> When an API endpoint returns a 404</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Advanced Not Found Page</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Interactive 404 Page</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="text-center p-8">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <p className="text-sm text-gray-500 mb-4">
        Redirecting to home page in {countdown} seconds...
      </p>
      <div className="space-x-4">
        <button
          onClick={() => router.push('/')}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Go Home Now
        </button>
        <button
          onClick={() => router.back()}
          className="bg-gray-600 text-white px-6 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Manual Not Found Trigger</h2>
        <p className="text-gray-600 mt-2">
          You can manually show the not found page from your components using the <code className="bg-gray-100 px-1 rounded">notFound()</code> function from Next.js.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import { notFound } from 'next/navigation';

export default async function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound(); // Shows the not-found page
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use <code className="bg-gray-100 px-1 rounded">notFound()</code> when data doesn't exist for a dynamic route.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">SEO Considerations</h2>
        <p className="text-gray-600 mt-2">
          404 pages should return the correct HTTP status code (404) for SEO. Next.js handles this automatically for <code className="bg-gray-100 px-1 rounded">not-found.tsx</code> files.
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Include helpful navigation links</li>
          <li>Add a search box if your site has one</li>
          <li>Include your site's branding</li>
          <li>Make it mobile-friendly</li>
          <li>Avoid "Page Not Found" in the &lt;title&gt; tag for SEO</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Match your site's design and branding</li>
          <li>Provide clear navigation options</li>
          <li>Include a search functionality if possible</li>
          <li>Add humor or personality to make it less frustrating</li>
          <li>Test that it works for both existing and non-existing routes</li>
          <li>Consider different 404 pages for different sections</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common 404 Page Ideas</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Helpful Navigation</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Link to home page</li>
              <li>Link to sitemap</li>
              <li>Popular pages</li>
              <li>Contact information</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Search Integration</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Site search box</li>
              <li>Related content suggestions</li>
              <li>Auto-suggestions</li>
              <li>Search popular terms</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Creative Design</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Fun illustrations</li>
              <li>Brand-consistent colors</li>
              <li>Interactive elements</li>
              <li>Games or easter eggs</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">User-Friendly</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Clear language</li>
              <li>Apologetic tone</li>
              <li>Actionable next steps</li>
              <li>Mobile responsive</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Not found pages turn frustrating experiences into helpful ones. Use <code className="bg-gray-100 px-1 rounded">not-found.tsx</code> files to create custom 404 pages that match your site's design and guide users back to content they can access. Remember to use <code className="bg-gray-100 px-1 rounded">notFound()</code> to manually trigger 404 pages when data doesn't exist.
        </p>
      </section>
    </main>
  );
}