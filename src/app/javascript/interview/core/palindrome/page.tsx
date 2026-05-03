import PalindromeDemo from "@/components/js/problems/PalindromeDemo";

export default function PalindromePage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Palindrome Check</h1>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          Check whether a given string is a palindrome (reads same forward and backward).
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm mt-3">
{`Input: "madam"
Output: true`}
        </pre>
      </section>

      {/* SOLUTIONS */}
      <section>
        <h2 className="text-xl font-semibold">Solutions</h2>

        <h3 className="font-medium mt-4">1. Reverse Method</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`str === str.split("").reverse().join("");`}
        </pre>

        <h3 className="font-medium mt-4">2. Two Pointer</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let left = 0, right = str.length - 1;

while (left < right) {
  if (str[left] !== str[right]) return false;
  left++;
  right--;
}
return true;`}
        </pre>

        <h3 className="font-medium mt-4">3. Optimized (Ignore spaces & symbols)</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`str = str.toLowerCase().replace(/[^a-z0-9]/g, "");`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <PalindromeDemo />
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Reverse method compares original and reversed string</li>
          <li>Two-pointer checks from both ends</li>
          <li>Optimized version handles real-world input</li>
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
              <td className="p-2 border">Reverse</td>
              <td className="p-2 border">Simple</td>
              <td className="p-2 border">Extra memory</td>
            </tr>
            <tr>
              <td className="p-2 border">Two Pointer</td>
              <td className="p-2 border">Efficient</td>
              <td className="p-2 border">More logic</td>
            </tr>
            <tr>
              <td className="p-2 border">Optimized</td>
              <td className="p-2 border">Real-world ready</td>
              <td className="p-2 border">Extra processing</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* EDGE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Edge Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Empty string</li>
          <li>Case sensitivity</li>
          <li>Spaces and special characters</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          This problem tests string manipulation and optimization. The two-pointer
          approach is more efficient than reversing the string and is preferred
          in interviews.
        </p>
      </section>
    </main>
  );
}