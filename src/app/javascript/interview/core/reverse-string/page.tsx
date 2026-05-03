import ReverseStringDemo from "@/components/js/problems/ReverseStringDemo";

export default function ReverseStringPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Reverse String</h1>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          Given a string, return the reversed version of it.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm mt-3">
{`Input: "hello"
Output: "olleh"`}
        </pre>
      </section>

      {/* SOLUTIONS */}
      <section>
        <h2 className="text-xl font-semibold">Solutions</h2>

        <h3 className="font-medium mt-4">1. Using split + reverse</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`str.split("").reverse().join("");`}
        </pre>

        <h3 className="font-medium mt-4">2. Using for loop</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}`}
        </pre>

        <h3 className="font-medium mt-4">3. Using recursion</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function reverse(str) {
  if (str === "") return "";
  return reverse(str.slice(1)) + str[0];
}`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <ReverseStringDemo />
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>split() converts string to array</li>
          <li>reverse() reverses array</li>
          <li>join() converts back to string</li>
          <li>Loop manually builds reversed string</li>
          <li>Recursion breaks problem into smaller parts</li>
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
              <td className="p-2 border">split + reverse</td>
              <td className="p-2 border">Simple & readable</td>
              <td className="p-2 border">Extra memory</td>
            </tr>
            <tr>
              <td className="p-2 border">for loop</td>
              <td className="p-2 border">Efficient</td>
              <td className="p-2 border">More code</td>
            </tr>
            <tr>
              <td className="p-2 border">recursion</td>
              <td className="p-2 border">Conceptual clarity</td>
              <td className="p-2 border">Stack overhead</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* EDGE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Edge Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Empty string</li>
          <li>Single character</li>
          <li>Unicode / emojis</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          This problem tests string manipulation and understanding of built-in
          methods vs manual logic. The split-reverse approach is most common,
          but loop-based solutions show deeper understanding.
        </p>
      </section>
    </main>
  );
}