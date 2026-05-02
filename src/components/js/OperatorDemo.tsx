"use client";

import { useState } from "react";

export default function OperatorDemo() {
  const [result, setResult] = useState("");

  function explain(expr: string, value: any, reason: string) {
    setResult(`${expr} → ${value}\n${reason}`);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Expressions</h3>

      <div className="flex flex-wrap gap-2 mb-4">

        <button
          onClick={() =>
            explain(
              "1 || 0",
              1,
              "OR returns first truthy → 1 is truthy"
            )
          }
          className="px-3 py-1 border rounded"
        >
          1 || 0
        </button>

        <button
          onClick={() =>
            explain(
              "0 || 1",
              1,
              "0 is falsy → moves to next → 1"
            )
          }
          className="px-3 py-1 border rounded"
        >
          0 || 1
        </button>

        <button
          onClick={() =>
            explain(
              "1 && 2",
              2,
              "AND returns last truthy → both truthy → 2"
            )
          }
          className="px-3 py-1 border rounded"
        >
          1 && 2
        </button>

        <button
          onClick={() =>
            explain(
              "2 && 1",
              1,
              "Both truthy → returns last value → 1"
            )
          }
          className="px-3 py-1 border rounded"
        >
          2 && 1
        </button>

        <button
          onClick={() =>
            explain(
              "!0",
              true,
              "0 is falsy → ! makes it true"
            )
          }
          className="px-3 py-1 border rounded"
        >
          !0
        </button>

      </div>

      <div className="bg-black text-white p-3 rounded text-sm whitespace-pre-line">
        {result || "Click an expression"}
      </div>
    </div>
  );
}