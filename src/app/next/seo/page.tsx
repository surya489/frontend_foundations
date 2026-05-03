export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Metadata & SEO</h1>

      <section>
        <h2 className="text-xl font-semibold">What is SEO?</h2>
        <p className="text-gray-600 mt-2">
          SEO stands for Search Engine Optimization. In Next.js, SEO is improved with meaningful page titles, meta descriptions, and clean HTML output.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Setting Metadata</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/about/page.tsx
export const metadata = {
  title: 'About Us',
  description: 'Learn more about our team and mission.',
};

export default function Page() {
  return <h1>About</h1>;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Use page metadata in the App Router to define SEO tags for each route.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Open Graph and Social Sharing</h2>
        <p className="text-gray-600 mt-2">
          Add `openGraph` and `twitter` metadata to improve how your pages appear when shared on social networks.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">SEO Best Practices</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Write descriptive titles and descriptions</li>
          <li>Use semantic HTML elements</li>
          <li>Optimize images and page speed</li>
          <li>Ensure pages are crawlable by search engines</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Next.js supports SEO with built-in metadata APIs and clean server-rendered output. Define metadata per page, use semantic structure, and keep content accessible for better search results.
        </p>
      </section>
    </main>
  );
}