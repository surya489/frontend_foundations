"use client";

import { useState } from "react";

export default function RemoveDuplicatesDemo() {
  const [output, setOutput] = useState("");

  const arr = [1, 2, 2, 3, 4, 4];

  function usingSet() {
    const result = [...new Set(arr)];
    setOutput(`Set → [${result.join(", ")}]`);
  }

  function usingLoop() {
    const result: number[] = [];

    for (let num of arr) {
      if (!result.includes(num)) {
        result.push(num);
      }
    }

    setOutput(`Loop → [${result.join(", ")}]`);
  }

  function usingFilter() {
    const result = arr.filter(
      (val, index) => arr.indexOf(val) === index
    );

    setOutput(`Filter → [${result.join(", ")}]`);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Remove Duplicates</h3>

      <pre className="bg-gray-100 p-2 rounded text-sm mb-3">
{`[1, 2, 2, 3, 4, 4]`}
      </pre>

      <div className="flex gap-2 flex-wrap mb-4">
        <button onClick={usingSet} className="px-3 py-1 border rounded">
          Set
        </button>

        <button onClick={usingLoop} className="px-3 py-1 border rounded">
          Loop
        </button>

        <button onClick={usingFilter} className="px-3 py-1 border rounded">
          Filter
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Click a method"}
      </div>
    </div>
  );
}