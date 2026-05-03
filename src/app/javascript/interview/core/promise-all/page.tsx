import PromiseAllDemo from "@/components/js/problems/PromiseAllDemo";

export default function PromiseAllPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Promise.all Implementation</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is Promise.all?</h2>
        <p className="text-gray-600 mt-2">
          Promise.all takes multiple promises and resolves when all are resolved.
          If any promise fails, it rejects immediately.
        </p>
      </section>

      {/* EXAMPLE */}
      <section>
        <h2 className="text-xl font-semibold">Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`Promise.all([p1, p2, p3])
  .then(results => console.log(results));`}
        </pre>
      </section>

      {/* IMPLEMENTATION */}
      <section>
        <h2 className="text-xl font-semibold">Custom Implementation</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(res => {
          results[index] = res;
          count++;

          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <PromiseAllDemo />
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Waits for all promises</li>
          <li>Maintains order using index</li>
          <li>Rejects immediately on failure</li>
        </ul>
      </section>

      {/* EDGE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Edge Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Empty array → resolves immediately</li>
          <li>Non-promise values → wrapped using Promise.resolve</li>
          <li>One rejection → entire promise fails</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Promise.all aggregates multiple promises. It resolves when all succeed
          and rejects if any fail. A custom implementation requires tracking
          results and completion count.
        </p>
      </section>
    </main>
  );
}