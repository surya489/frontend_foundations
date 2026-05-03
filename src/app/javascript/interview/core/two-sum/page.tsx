import TwoSumDemo from "@/components/js/problems/TwoSumDemo";

export default function TwoSumPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Two Sum</h1>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          Given an array of numbers and a target value, find two numbers that add up to the target.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm mt-3">
{`Input:
nums = [2, 7, 11, 15]
target = 9

Output:
[2, 7]`}
        </pre>
      </section>

      {/* SOLUTIONS */}
      <section>
        <h2 className="text-xl font-semibold">Solutions</h2>

        <h3 className="font-medium mt-4">1. Brute Force</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [nums[i], nums[j]];
    }
  }
}`}
        </pre>

        <h3 className="font-medium mt-4">2. Using Hash Map (Optimized)</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const map = new Map();

for (let num of nums) {
  const complement = target - num;

  if (map.has(complement)) {
    return [complement, num];
  }

  map.set(num, true);
}`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <TwoSumDemo />
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Brute force checks all possible pairs</li>
          <li>Hash map stores visited numbers</li>
          <li>We check complement = target - current number</li>
        </ul>
      </section>

      {/* COMPLEXITY */}
      <section>
        <h2 className="text-xl font-semibold">Time Complexity</h2>
        <ul className="text-gray-600 mt-2">
          <li>Brute Force → O(n²)</li>
          <li>Hash Map → O(n)</li>
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
              <td className="p-2 border">Brute Force</td>
              <td className="p-2 border">Simple</td>
              <td className="p-2 border">Slow</td>
            </tr>
            <tr>
              <td className="p-2 border">Hash Map</td>
              <td className="p-2 border">Fast</td>
              <td className="p-2 border">Extra memory</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* EDGE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Edge Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>No solution exists</li>
          <li>Duplicate values</li>
          <li>Negative numbers</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Start with brute force, then optimize using a hash map to reduce time complexity from O(n²) to O(n).
          This shows problem-solving and optimization skills.
        </p>
      </section>
    </main>
  );
}