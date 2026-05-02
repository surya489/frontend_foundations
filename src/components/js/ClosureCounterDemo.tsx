"use client";

import { useState } from "react";

export default function ClosureCounterDemo() {
  const [value, setValue] = useState<number | null>(null);

  function createCounter() {
    let count = 0;

    return function () {
      count++;
      return count;
    };
  }

  const counter = createCounter();

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Closure Counter Demo</h3>

      <p className="text-sm text-gray-600 mb-3">
        This function remembers its internal state using closure.
      </p>

      <button
        onClick={() => setValue(counter())}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Increment
      </button>

      <p className="mt-3 text-sm">
        Value: <strong>{value ?? "Click to start"}</strong>
      </p>

      <pre className="bg-gray-100 p-3 rounded mt-4 text-sm overflow-x-auto">
{`function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}`}
      </pre>
    </div>
  );
}