export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Build & Production</h1>

      <section>
        <h2 className="text-xl font-semibold">Next.js Build Process</h2>
        <p className="text-gray-600 mt-2">
          The build step compiles your application, generates static pages, and prepares server-side rendering. It is the main step before deploying a production app.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Commands</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`npm run build
npm run start
npm run dev`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">`npm run build` prepares production assets, while `npm run start` serves them. Use `npm run dev` for development.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Build Output</h2>
        <p className="text-gray-600 mt-2">
          Next.js creates a `.next` folder with compiled pages, static assets, and server functions. When deployed, the host uses this output to serve your app.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Optimizing Builds</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Remove unused code and dependencies</li>
          <li>Use dynamic imports for large components</li>
          <li>Avoid importing large data directly in components</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Building a Next.js app generates the optimized assets needed for production. Keep builds fast by trimming unused code and using lazy loading for large components.
        </p>
      </section>
    </main>
  );
}