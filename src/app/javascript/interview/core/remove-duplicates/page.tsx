import RemoveDuplicatesDemo from "@/components/js/problems/RemoveDuplicatesDemo";

export default function RemoveDuplicatesPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Remove Duplicates from Array</h1>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          Given an array, return a new array with duplicate values removed.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm mt-3">
{`Input: [1, 2, 2, 3, 4, 4]
Output: [1, 2, 3, 4]`}
        </pre>
      </section>

      {/* SOLUTIONS */}
      <section>
        <h2 className="text-xl font-semibold">Solutions</h2>

        <h3 className="font-medium mt-4">1. Using Set</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const result = [...new Set(arr)];`}
        </pre>

        <h3 className="font-medium mt-4">2. Using Loop</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const result = [];

for (let num of arr) {
  if (!result.includes(num)) {
    result.push(num);
  }
}`}
        </pre>

        <h3 className="font-medium mt-4">3. Using filter()</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`arr.filter((val, i) => arr.indexOf(val) === i);`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <RemoveDuplicatesDemo />
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Set automatically removes duplicates</li>
          <li>Loop checks manually using includes()</li>
          <li>filter uses index comparison to keep first occurrence</li>
        </ul>
      </section>

      {/* COMPLEXITY */}
      <section>
        <h2 className="text-xl font-semibold">Time Complexity</h2>
        <ul className="text-gray-600 mt-2">
          <li>Set → O(n)</li>
          <li>Loop → O(n²)</li>
          <li>Filter → O(n²)</li>
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
              <td className="p-2 border">Set</td>
              <td className="p-2 border">Fast & simple</td>
              <td className="p-2 border">Less control</td>
            </tr>
            <tr>
              <td className="p-2 border">Loop</td>
              <td className="p-2 border">Flexible</td>
              <td className="p-2 border">Slow</td>
            </tr>
            <tr>
              <td className="p-2 border">Filter</td>
              <td className="p-2 border">Readable</td>
              <td className="p-2 border">Less efficient</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* EDGE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Edge Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Empty array</li>
          <li>All elements same</li>
          <li>Mixed data types</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          This problem tests understanding of uniqueness and data structures.
          Using Set is the most optimal solution with O(n) time complexity.
        </p>
      </section>
    </main>
  );
}