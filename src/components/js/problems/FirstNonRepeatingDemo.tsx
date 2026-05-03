"use client";

import { useState } from "react";

export default function FirstNonRepeatingDemo() {
  const [input, setInput] = useState("aabbcdd");
  const [output, setOutput] = useState("");

  function usingObject() {
    const freq: Record<string, number> = {};

    for (let char of input) {
      freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of input) {
      if (freq[char] === 1) {
        setOutput(`Object → ${char}`);
        return;
      }
    }

    setOutput("Object → none");
  }

  function usingMap() {
    const map = new Map<string, number>();

    for (let char of input) {
      map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of input) {
      if (map.get(char) === 1) {
        setOutput(`Map → ${char}`);
        return;
      }
    }

    setOutput("Map → none");
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Find First Non-Repeating Character</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-2 py-1 rounded mb-3 w-full"
      />

      <div className="flex gap-2 mb-4">
        <button onClick={usingObject} className="px-3 py-1 border rounded">
          Object
        </button>

        <button onClick={usingMap} className="px-3 py-1 border rounded">
          Map
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Try finding"}
      </div>
    </div>
  );
}