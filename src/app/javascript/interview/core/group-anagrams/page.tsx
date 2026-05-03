import GroupAnagramsDemo from "@/components/js/problems/GroupAnagramsDemo";

export default function GroupAnagramsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Group Anagrams</h1>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          Given an array of strings, group all anagrams together.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm mt-3">
{`Input:
["eat", "tea", "tan", "ate", "nat", "bat"]

Output:
[["eat","tea","ate"],["tan","nat"],["bat"]]`}
        </pre>
      </section>

      {/* SOLUTION */}
      <section>
        <h2 className="text-xl font-semibold">Solution (Hashing)</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const map = {};

for (let word of words) {
  const key = word.split("").sort().join("");

  if (!map[key]) {
    map[key] = [];
  }

  map[key].push(word);
}

return Object.values(map);`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <GroupAnagramsDemo />
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Sort each word → creates a unique key</li>
          <li>Store words with same key together</li>
          <li>Finally return grouped values</li>
        </ul>
      </section>

      {/* KEY IDEA */}
      <section>
        <h2 className="text-xl font-semibold">Key Insight</h2>
        <p className="text-gray-600 mt-2">
          All anagrams share the same sorted string.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm mt-2">
{`eat → aet
tea → aet
ate → aet`}
        </pre>
      </section>

      {/* COMPLEXITY */}
      <section>
        <h2 className="text-xl font-semibold">Time Complexity</h2>
        <ul className="text-gray-600 mt-2">
          <li>Sorting each word → O(n * k log k)</li>
        </ul>
      </section>

      {/* EDGE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Edge Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Empty array</li>
          <li>Single word</li>
          <li>Case sensitivity</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          This problem tests hashing and pattern recognition. By using sorted strings as keys,
          we can group anagrams efficiently.
        </p>
      </section>
    </main>
  );
}