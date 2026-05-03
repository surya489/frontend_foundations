import ApiRetryDemo from "@/components/js/scenarios/ApiRetryDemo";

export default function ApiRetryPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">API Retry Logic</h1>

      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          APIs can fail due to network issues. Calling once is not reliable.
          We need a mechanism to retry failed requests.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Naive Approach</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`fetch('/api')
  .then(res => res.json())
  .catch(err => console.log(err));`}
        </pre>

        <p className="text-gray-600 mt-2">
          If it fails once → user sees error immediately.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Optimized Approach</h2>

        <p className="text-gray-600 mt-2">
          Retry the request multiple times before failing.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`async function fetchWithRetry(fn, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch {
      if (i === retries - 1) throw new Error("Failed");
    }
  }
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <ApiRetryDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Try API call</li>
          <li>If fails → retry</li>
          <li>Stop after max attempts</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Real-World Use</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Network requests</li>
          <li>Payment systems</li>
          <li>Data fetching in apps</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          API retry logic improves reliability by attempting failed requests multiple times.
          It helps handle temporary network failures gracefully.
        </p>
      </section>
    </main>
  );
}