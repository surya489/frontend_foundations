export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">ISR (Incremental Static Regeneration)</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Incremental Static Regeneration?</h2>
        <p className="text-gray-600 mt-2">
          Incremental Static Regeneration (ISR) is a powerful feature that combines the best of Static Site Generation (SSG) and Server-Side Rendering (SSR). With ISR, pages are generated statically at build time, but they can also be updated in the background after the build is complete. This gives you the speed of static pages with the freshness of dynamic content.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How ISR Works</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold">Initial Build</h3>
                <p className="text-gray-600 text-sm">Pages are generated statically during build time.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold">Serve Static Pages</h3>
                <p className="text-gray-600 text-sm">Users get instant static pages from CDN.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold">Background Updates</h3>
                <p className="text-gray-600 text-sm">Pages are regenerated in background when needed.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold">Fresh Content</h3>
                <p className="text-gray-600 text-sm">Future visitors get updated static pages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Implementing ISR</h2>
        <p className="text-gray-600 mt-2">
          ISR is enabled by adding a <code className="bg-gray-100 px-1 rounded">revalidate</code> export to your page component.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Basic ISR Example</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/blog/[slug]/page.tsx:

export const revalidate = 3600; // Regenerate every hour

export default async function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
    .then(res => res.json());

  return (
    <article>
      <h1>{post.title}</h1>
      <p>Last updated: {new Date(post.updatedAt).toLocaleString()}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            The page will be regenerated every 3600 seconds (1 hour) when someone visits it after that time has passed.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">ISR Triggers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Time-Based</h3>
            <div className="font-mono text-sm text-gray-600 mt-2">
              <pre>{`export const revalidate = 3600;
// Regenerates every hour`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Automatic regeneration based on time intervals.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">On-Demand</h3>
            <div className="font-mono text-sm text-gray-600 mt-2">
              <pre>{`revalidatePath('/blog');
// Manual regeneration`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Regenerate specific pages when content changes.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">ISR with Dynamic Routes</h2>
        <p className="text-gray-600 mt-2">
          For dynamic routes, ISR works with <code className="bg-gray-100 px-1 rounded">generateStaticParams</code> to pre-generate pages and then update them incrementally.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Dynamic Route with ISR</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/products/[id]/page.tsx:

export const revalidate = 1800; // 30 minutes

export async function generateStaticParams() {
  const products = await fetch('https://api.example.com/products')
    .then(res => res.json());

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({
  params
}: {
  params: { id: string }
}) {
  const product = await fetch(\`https://api.example.com/products/\${params.id}\`)
    .then(res => res.json());

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Popular products are pre-generated, others are generated on first visit and cached.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Benefits of ISR</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Performance</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Static speed for most requests</li>
              <li>CDN-friendly</li>
              <li>Reduced server load</li>
              <li>Global distribution</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Freshness</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Content stays current</li>
              <li>Automatic updates</li>
              <li>No manual rebuilds</li>
              <li>Real-time capable</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">SEO</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Always fresh content for crawlers</li>
              <li>Fast page loads</li>
              <li>Good Core Web Vitals</li>
              <li>Social media friendly</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-orange-600">Developer Experience</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Simple configuration</li>
              <li>Automatic handling</li>
              <li>No complex caching logic</li>
              <li>Easy to implement</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">ISR vs Other Rendering Methods</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left">Method</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Speed</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Freshness</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">SSG</td>
                <td className="border border-gray-300 px-4 py-2">Fastest</td>
                <td className="border border-gray-300 px-4 py-2">Stale</td>
                <td className="border border-gray-300 px-4 py-2">Rarely changing content</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">ISR</td>
                <td className="border border-gray-300 px-4 py-2">Fast</td>
                <td className="border border-gray-300 px-4 py-2">Fresh</td>
                <td className="border border-gray-300 px-4 py-2">Frequently updating content</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">SSR</td>
                <td className="border border-gray-300 px-4 py-2">Medium</td>
                <td className="border border-gray-300 px-4 py-2">Fresh</td>
                <td className="border border-gray-300 px-4 py-2">Dynamic, user-specific content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use ISR</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>News Sites:</strong> Articles that need to stay current</li>
          <li><strong>E-commerce:</strong> Product pages with inventory updates</li>
          <li><strong>Blogs:</strong> Posts that get updated or have comments</li>
          <li><strong>Documentation:</strong> Content that gets frequent updates</li>
          <li><strong>Social Platforms:</strong> User-generated content that changes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">ISR Limitations</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li><strong>Stale-While-Revalidate:</strong> Users might see old content briefly during regeneration</li>
            <li><strong>Background Regeneration:</strong> Only happens when pages are visited</li>
            <li><strong>Resource Usage:</strong> Regeneration requires server resources</li>
            <li><strong>Cache Invalidation:</strong> Hard to predict when content will update</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">On-Demand Revalidation</h2>
        <p className="text-gray-600 mt-2">
          You can manually trigger revalidation using <code className="bg-gray-100 px-1 rounded">revalidatePath</code> and <code className="bg-gray-100 px-1 rounded">revalidateTag</code>.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Manual Revalidation</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/api/revalidate/route.ts:

import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { path, tag } = await request.json();

  if (path) {
    revalidatePath(path);
  }

  if (tag) {
    revalidateTag(tag);
  }

  return Response.json({ revalidated: true });
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Call this API when your content management system updates content.
          </p>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Incremental Static Regeneration gives you the performance of static sites with the freshness of dynamic content. By setting a revalidate time, pages stay fast for most users while automatically updating in the background. It's perfect for content that changes regularly but doesn't need real-time updates.
        </p>
      </section>
    </main>
  );
}