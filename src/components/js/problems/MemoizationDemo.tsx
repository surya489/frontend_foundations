"use client";

import { useState } from "react";

export default function MemoizationDemo() {
  const [output, setOutput] = useState("");

  function withoutMemo() {
    function slowSquare(n: number) {
      console.log("Calculating...");
      return n * n;
    }

    slowSquare(5);
    slowSquare(5);

    setOutput("Without Memo → calculated twice");
  }

  function withMemo() {
    function memoize(fn: Function) {
      const cache: Record<string, number> = {};

      return function (n: number) {
        if (cache[n]) {
          return cache[n];
        }

        console.log("Calculating...");
        const result = fn(n);
        cache[n] = result;
        return result;
      };
    }

    const square = (n: number) => n * n;
    const memoSquare = memoize(square);

    memoSquare(5);
    memoSquare(5);

    setOutput("With Memo → calculated once, cached next");
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Memoization Demo</h3>

      <div className="flex gap-2 mb-4">
        <button onClick={withoutMemo} className="px-3 py-1 border rounded">
          Without Memo
        </button>

        <button onClick={withMemo} className="px-3 py-1 border rounded">
          With Memo
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Click a method"}
      </div>
    </div>
  );
}