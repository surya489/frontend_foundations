import FlattenArrayDemo from "@/components/js/problems/FlattenArrayDemo";

export default function FlattenArrayPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Flatten Nested Array</h1>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          Convert a nested array into a single-level array.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm mt-3">
{`Input: [1, [2, [3, 4], 5]]
Output: [1, 2, 3, 4, 5]`}
        </pre>
      </section>

      {/* SOLUTIONS */}
      <section>
        <h2 className="text-xl font-semibold">Solutions</h2>

        <h3 className="font-medium mt-4">1. Using flat()</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`arr.flat(Infinity);`}
        </pre>

        <h3 className="font-medium mt-4">2. Using Recursion</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}`}
        </pre>

        <h3 className="font-medium mt-4">3. Using reduce()</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`arr.reduce((acc, val) =>
  acc.concat(Array.isArray(val) ? flatten(val) : val), []
);`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <FlattenArrayDemo />
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>flat() handles flattening automatically</li>
          <li>Recursion solves nested structure step-by-step</li>
          <li>reduce combines iteration + recursion</li>
        </ul>
      </section>

      {/* COMPARISON */}
      <section>
        <h2 className="text-xl font-semibold">Comparison</h2>

        <table className="w-full text-sm border mt-3">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Method</th>
              <th className="p-2 border">Pros</th>
              <th className="p-2 border">Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">flat()</td>
              <td className="p-2 border">Simple & fast</td>
              <td className="p-2 border">Not always supported (older JS)</td>
            </tr>
            <tr>
              <td className="p-2 border">Recursion</td>
              <td className="p-2 border">Flexible</td>
              <td className="p-2 border">Harder to understand</td>
            </tr>
            <tr>
              <td className="p-2 border">reduce()</td>
              <td className="p-2 border">Functional style</td>
              <td className="p-2 border">Less readable</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* EDGE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Edge Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Empty array</li>
          <li>Deep nesting</li>
          <li>Mixed data types</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          This problem tests recursion and array manipulation. While flat() is
          easiest, recursion shows deeper understanding and is preferred in interviews.
        </p>
      </section>
    </main>
  );
}