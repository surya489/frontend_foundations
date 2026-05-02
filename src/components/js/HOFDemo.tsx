"use client";

import { useState } from "react";

type Step = {
  input: number;
  output: number;
};

export default function HOFDemo() {
  const [result, setResult] = useState<number[]>([]);
  const [steps, setSteps] = useState<Step[]>([]);
  const [code, setCode] = useState<string>("");

  const numbers = [1, 2, 3, 4];

  function runMap() {
    const stepData: Step[] = numbers.map((n) => ({
      input: n,
      output: n * 2,
    }));

    setSteps(stepData);
    setResult(stepData.map((s) => s.output));

    setCode(`const result = [1,2,3,4].map(n => n * 2);`);
  }

  function runFilter() {
    const stepData: Step[] = numbers.map((n) => ({
      input: n,
      output: n > 2 ? n : NaN,
    }));

    setSteps(stepData);
    setResult(numbers.filter((n) => n > 2));

    setCode(`const result = [1,2,3,4].filter(n => n > 2);`);
  }

  function runCustom() {
    function operate(arr: number[], fn: (n: number) => number) {
      const stepData: Step[] = [];

      const output = arr.map((n) => {
        const res = fn(n);
        stepData.push({ input: n, output: res });
        return res;
      });

      setSteps(stepData);
      setResult(output);
    }

    operate(numbers, (n) => n + 10);

    setCode(`function operate(arr, fn) {
  return arr.map(fn);
}

operate([1,2,3,4], n => n + 10);`);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Higher Order Function Demo</h3>

      <div className="mb-3 text-sm">
        <strong>Input:</strong> {JSON.stringify(numbers)}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={runMap} className="px-3 py-1 border rounded">
          map (x2)
        </button>

        <button onClick={runFilter} className="px-3 py-1 border rounded">
          filter (&gt;2)
        </button>

        <button onClick={runCustom} className="px-3 py-1 border rounded">
          custom (+10)
        </button>
      </div>

      {code && (
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Syntax:</p>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{code}
          </pre>
        </div>
      )}

      {steps.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Step-by-step:</p>

          <div className="space-y-1 text-sm">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 px-3 py-1 rounded"
              >
                {step.input} →{" "}
                {isNaN(step.output) ? "removed" : step.output}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-black text-white p-3 rounded text-sm">
        Output: {result.length ? JSON.stringify(result) : "—"}
      </div>
    </div>
  );
}