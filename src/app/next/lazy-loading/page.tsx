export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Lazy Loading</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Lazy Loading?</h2>
        <p className="text-gray-600 mt-2">
          Lazy loading delays loading non-critical code or assets until they are needed. This reduces initial load time and improves performance for users.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Lazy Loading Components</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('./Chart'), {
  loading: () => <p>Loading chart...</p>,
});

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Chart />
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Use dynamic imports to load heavy components only when they are rendered.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Lazy Loading Images</h2>
        <p className="text-gray-600 mt-2">
          Next.js Image component supports lazy loading by default, so images outside the viewport won't load until needed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Benefits of Lazy Loading</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Faster initial page rendering</li>
          <li>Reduced bandwidth for users</li>
          <li>Smoother interactions on slower networks</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Lazy loading is a powerful performance tool. In Next.js, use dynamic imports for components and built-in image lazy loading to keep the initial page load fast while still delivering rich experiences.
        </p>
      </section>
    </main>
  );
}