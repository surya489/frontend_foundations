export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Caching Strategies</h1>

      <section>
        <h2 className="text-xl font-semibold">Why Caching Matters</h2>
        <p className="text-gray-600 mt-2">
          Caching reduces server load and speeds up page delivery. In Next.js, caching can be applied at the page, API, and browser levels.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Static Generation</h2>
        <p className="text-gray-600 mt-2">
          Static pages are cached by default and served instantly on every request. Use `export const dynamic = 'force-static'` for static behavior when needed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server-side Cache Control</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export async function GET() {
  return new Response('data', {
    headers: {
      'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
    },
  });
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Set cache headers to control how long responses stay fresh in browsers and edge caches.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Incremental Static Regeneration</h2>
        <p className="text-gray-600 mt-2">
          ISR allows static pages to update after deployment without rebuilding the whole site. Use `revalidate` in page data fetching for stale-while-revalidate behavior.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Caching strategies improve speed and scalability. Use static generation for unchanged content, cache-control headers for APIs, and ISR for pages that update periodically.
        </p>
      </section>
    </main>
  );
}