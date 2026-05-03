import FirstNonRepeatingDemo from "@/components/js/problems/FirstNonRepeatingDemo";

export default function FirstNonRepeatingPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        First Non-Repeating Character
      </h1>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          Find the first character in a string that does not repeat.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm mt-3">
{`Input: "aabbcdd"
Output: "c"`}
        </pre>
      </section>

      {/* SOLUTIONS */}
      <section>
        <h2 className="text-xl font-semibold">Solutions</h2>

        <h3 className="font-medium mt-4">1. Using Object (Frequency Map)</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const freq = {};

for (let char of str) {
  freq[char] = (freq[char] || 0) + 1;
}

for (let char of str) {
  if (freq[char] === 1) return char;
}`}
        </pre>

        <h3 className="font-medium mt-4">2. Using Map</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const map = new Map();

for (let char of str) {
  map.set(char, (map.get(char) || 0) + 1);
}

for (let char of str) {
  if (map.get(char) === 1) return char;
}`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <FirstNonRepeatingDemo />
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>First pass: count frequency of each character</li>
          <li>Second pass: find first character with count = 1</li>
          <li>This ensures correct order</li>
        </ul>
      </section>

      {/* COMPLEXITY */}
      <section>
        <h2 className="text-xl font-semibold">Time Complexity</h2>
        <ul className="text-gray-600 mt-2">
          <li>O(n) — two passes through string</li>
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
              <td className="p-2 border">Object</td>
              <td className="p-2 border">Simple</td>
              <td className="p-2 border">Less flexible</td>
            </tr>
            <tr>
              <td className="p-2 border">Map</td>
              <td className="p-2 border">Better control</td>
              <td className="p-2 border">More verbose</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* EDGE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Edge Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>All characters repeated</li>
          <li>Empty string</li>
          <li>Case sensitivity</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          This problem tests frequency counting and maintaining order.
          Using a two-pass approach ensures we find the correct first unique character.
        </p>
      </section>
    </main>
  );
}