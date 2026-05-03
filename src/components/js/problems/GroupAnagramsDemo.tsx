"use client";

import { useState } from "react";

export default function GroupAnagramsDemo() {
  const [output, setOutput] = useState("");

  const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

  function groupAnagrams() {
    const map: Record<string, string[]> = {};

    for (let word of words) {
      const key = word.split("").sort().join("");

      if (!map[key]) {
        map[key] = [];
      }

      map[key].push(word);
    }

    const result = Object.values(map);
    setOutput(JSON.stringify(result));
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Group Anagrams</h3>

      <pre className="bg-gray-100 p-2 rounded text-sm mb-3">
{`["eat", "tea", "tan", "ate", "nat", "bat"]`}
      </pre>

      <button
        onClick={groupAnagrams}
        className="px-3 py-1 border rounded mb-4"
      >
        Run
      </button>

      <div className="bg-black text-white p-3 rounded text-sm break-all">
        {output || "Click to group"}
      </div>
    </div>
  );
}