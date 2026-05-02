"use client";

import { useState } from "react";

export default function JSIntroDemo() {
  const [output, setOutput] = useState<string[]>([]);

  function runDemo() {
    const logs: string[] = [];

    logs.push("Start");

    setTimeout(() => {
      logs.push("Timeout");
      setOutput([...logs]);
    }, 0);

    logs.push("End");

    setOutput([...logs]);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Simple Execution Demo</h3>

      <pre className="bg-gray-100 p-3 rounded text-sm mb-4">
{`console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

console.log("End");`}
      </pre>

      <button
        onClick={runDemo}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Run Code
      </button>

      <div className="mt-4 bg-black text-white p-3 rounded text-sm">
        Output: {output.join(" → ") || "Click run"}
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Even with 0 delay, setTimeout runs later (async behavior)
      </p>
    </div>
  );
}