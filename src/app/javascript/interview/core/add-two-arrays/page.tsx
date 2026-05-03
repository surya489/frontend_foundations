import AddTwoArraysDemo from "@/components/js/problems/AddTwoArraysDemo";

export default function AddTwoArraysPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Add Two Arrays</h1>

      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          Given two arrays of equal length, return a new array where each element
          is the sum of elements at the same index.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm mt-3">
{`Input:
[1,2,3]
[4,5,6]

Output:
[5,7,9]`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Solutions</h2>

        <h3 className="font-medium mt-4">1. Using For Loop</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const result = [];
for (let i = 0; i < arr1.length; i++) {
  result.push(arr1[i] + arr2[i]);
}`}
        </pre>

        <h3 className="font-medium mt-4">2. Using map()</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const result = arr1.map((v, i) => v + arr2[i]);`}
        </pre>

        <h3 className="font-medium mt-4">3. Using reduce()</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const result = arr1.reduce((acc, val, i) => {
  acc.push(val + arr2[i]);
  return acc;
}, []);`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <AddTwoArraysDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <p className="text-gray-600 mt-2">
          We iterate through both arrays and add elements at the same index.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Comparison</h2>

        <div className="overflow-x-auto">
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
                <td className="p-2 border">For Loop</td>
                <td className="p-2 border">Flexible, full control</td>
                <td className="p-2 border">Verbose</td>
              </tr>
              <tr>
                <td className="p-2 border">map()</td>
                <td className="p-2 border">Clean & readable</td>
                <td className="p-2 border">Less control</td>
              </tr>
              <tr>
                <td className="p-2 border">reduce()</td>
                <td className="p-2 border">Functional style</td>
                <td className="p-2 border">Harder to read</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Edge Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Different array lengths</li>
          <li>Empty arrays</li>
          <li>Non-numeric values</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          This problem tests array iteration and understanding of methods like
          map and reduce. The best approach depends on readability and flexibility.
        </p>
      </section>
    </main>
  );
}