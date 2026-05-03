import MemoizationDemo from "@/components/js/problems/MemoizationDemo";

export default function MemoizationPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Memoization</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is Memoization?</h2>
        <p className="text-gray-600 mt-2">
          Memoization is an optimization technique where results of expensive
          function calls are stored and reused instead of recalculating.
        </p>
      </section>

      {/* EXAMPLE */}
      <section>
        <h2 className="text-xl font-semibold">Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`square(5) → calculate
square(5) → reuse cached result`}
        </pre>
      </section>

      {/* IMPLEMENTATION */}
      <section>
        <h2 className="text-xl font-semibold">Implementation</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function memoize(fn) {
  const cache = {};

  return function (n) {
    if (cache[n]) {
      return cache[n];
    }

    const result = fn(n);
    cache[n] = result;
    return result;
  };
}`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <MemoizationDemo />
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Store result in cache</li>
          <li>Check cache before computing</li>
          <li>Return cached value if exists</li>
        </ul>
      </section>

      {/* USE CASE */}
      <section>
        <h2 className="text-xl font-semibold">Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Expensive calculations</li>
          <li>API caching</li>
          <li>React performance optimization</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Memoization improves performance by caching results of function calls.
          It avoids redundant computations and is commonly used in optimization problems.
        </p>
      </section>
    </main>
  );
}