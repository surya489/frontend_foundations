export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Edge Runtime</h1>

      <section>
        <h2 className="text-xl font-semibold">What is the Edge Runtime?</h2>
        <p className="text-gray-600 mt-2">
          The Edge Runtime runs Next.js code on edge servers close to users. It is designed for low latency and fast response times by moving compute closer to the browser.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Edge vs Node.js</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Edge runtime is lightweight and runs on V8 isolates.</li>
          <li>Node.js supports full server APIs and native modules.</li>
          <li>Use edge for fast, globally distributed logic.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Using Edge Functions</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/api/hello/route.ts
export const runtime = 'edge';

export async function GET() {
  return new Response('Hello from the edge!');
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Set the runtime to 'edge' for route handlers that should run on the edge network.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Edge Runtime Limitations</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>No Node.js built-in APIs like fs or net.</li>
          <li>Limited support for large memory or CPU-heavy tasks.</li>
          <li>Works best for lightweight logic, authentication checks, or A/B tests.</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Edge Runtime is ideal when you need fast, globally distributed execution. Use it for simple APIs and middleware that benefit from reduced latency, but avoid heavy Node-specific code and server-only modules.
        </p>
      </section>
    </main>
  );
}