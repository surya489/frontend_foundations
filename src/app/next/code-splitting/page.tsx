export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Code Splitting</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Code Splitting?</h2>
        <p className="text-gray-600 mt-2">
          Code splitting breaks JavaScript into smaller bundles so the browser only loads what is needed. This reduces initial page size and improves load performance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Dynamic Imports in Next.js</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'));

export default function Page() {
  return <HeavyComponent />;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Dynamic imports load a component only when it is rendered.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Benefits</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Smaller initial bundle</li>
          <li>Faster page load times</li>
          <li>Better user experience on low bandwidth</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Code splitting helps keep Next.js apps fast by loading only the code needed for the current page. Use dynamic imports for large components or features that are not always required.
        </p>
      </section>
    </main>
  );
}