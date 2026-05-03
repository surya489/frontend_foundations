export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Script Optimization</h1>

      <section>
        <h2 className="text-xl font-semibold">Why Script Optimization Matters</h2>
        <p className="text-gray-600 mt-2">
          Optimizing scripts helps pages load faster and reduces blocking behavior. Next.js provides tools to manage third-party scripts and control how they execute.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Using next/script</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import Script from 'next/script';

export default function Page() {
  return (
    <>
      <Script
        src="https://example.com/script.js"
        strategy="lazyOnload"
      />
      <div>Page content</div>
    </>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Use `next/script` to control loading priority and avoid slowing down initial render.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Loading Strategies</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>`beforeInteractive` for critical scripts</li>
          <li>`afterInteractive` for scripts after hydration</li>
          <li>`lazyOnload` for non-essential scripts during idle time</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Script optimization keeps your Next.js app fast by loading third-party scripts only when needed. Use the `next/script` component to control script loading behavior and avoid blocking the main page render.
        </p>
      </section>
    </main>
  );
}