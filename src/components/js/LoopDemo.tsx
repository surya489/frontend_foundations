"use client";

import { useState } from "react";

export default function LoopDemo() {
  const [steps, setSteps] = useState<string[]>([]);

  function runForLoop() {
    const result: string[] = [];

    for (let i = 0; i < 3; i++) {
      result.push(`i = ${i}`);
    }

    setSteps(result);
  }

  function runWhileLoop() {
    let i = 0;
    const result: string[] = [];

    while (i < 3) {
      result.push(`i = ${i}`);
      i++;
    }

    setSteps(result);
  }

  function runForEach() {
    const arr = [10, 20, 30];
    const result: string[] = [];

    arr.forEach((val, index) => {
      result.push(`index ${index} → ${val}`);
    });

    setSteps(result);
  }

  function runBreak() {
    const result: string[] = [];

    for (let i = 0; i < 5; i++) {
      if (i === 2) break;
      result.push(`i = ${i}`);
    }

    setSteps(result);
  }

  function runContinue() {
    const result: string[] = [];

    for (let i = 0; i < 5; i++) {
      if (i === 2) continue;
      result.push(`i = ${i}`);
    }

    setSteps(result);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Loops</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={runForLoop} className="px-3 py-1 border rounded">
          for loop
        </button>

        <button onClick={runWhileLoop} className="px-3 py-1 border rounded">
          while loop
        </button>

        <button onClick={runForEach} className="px-3 py-1 border rounded">
          forEach
        </button>

        <button onClick={runBreak} className="px-3 py-1 border rounded">
          break
        </button>

        <button onClick={runContinue} className="px-3 py-1 border rounded">
          continue
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {steps.length ? steps.join(" → ") : "Click a button"}
      </div>
    </div>
  );
}