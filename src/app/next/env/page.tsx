export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Environment Variables</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Environment Variables?</h2>
        <p className="text-gray-600 mt-2">
          Environment variables store configuration values outside your code. They are useful for secrets, API keys, and settings that differ between development and production.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Using .env Files</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_PASSWORD=secret`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Store public and private values in .env files. Keep secret values out of version control.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Public vs Private Variables</h2>
        <p className="text-gray-600 mt-2">
          In Next.js, variables prefixed with `NEXT_PUBLIC_` are exposed to client-side code. Private variables should not use that prefix.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Accessing Variables in Code</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const dbPassword = process.env.DATABASE_PASSWORD;`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Use `process.env` to read variables in server and client code as allowed.</p>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Environment variables help separate configuration from code. Use `.env.local` for local settings and `NEXT_PUBLIC_` only for values that are safe to expose to the browser.
        </p>
      </section>
    </main>
  );
}