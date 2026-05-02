"use client";

import { useState } from "react";

type Step = {
  text: string;
};

export default function ArrayMethodsDemo() {
  const numbers = [1, 2, 3, 4];

  const [steps, setSteps] = useState<Step[]>([]);
  const [result, setResult] = useState<string>("");

  function runMap() {
    const stepData: Step[] = numbers.map((n) => ({
      text: `${n} → ${n * 2}`,
    }));

    setSteps(stepData);
    setResult(JSON.stringify(numbers.map((n) => n * 2)));
  }

  function runFilter() {
    const stepData: Step[] = numbers.map((n) => ({
      text: `${n} → ${n > 2 ? "kept" : "removed"}`,
    }));

    setSteps(stepData);
    setResult(JSON.stringify(numbers.filter((n) => n > 2)));
  }

  function runReduce() {
    let acc = 0;
    const stepData: Step[] = [];

    numbers.forEach((n) => {
      const prev = acc;
      acc = acc + n;
      stepData.push({
        text: `${prev} + ${n} = ${acc}`,
      });
    });

    setSteps(stepData);
    setResult(String(acc));
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Interactive Demo</h3>

      <div className="text-sm mb-3">
        <strong>Input:</strong> {JSON.stringify(numbers)}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={runMap} className="px-3 py-1 border rounded">
          map()
        </button>

        <button onClick={runFilter} className="px-3 py-1 border rounded">
          filter()
        </button>

        <button onClick={runReduce} className="px-3 py-1 border rounded">
          reduce()
        </button>
      </div>

      {steps.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Steps:</p>
          <div className="space-y-1 text-sm">
            {steps.map((step, i) => (
              <div key={i} className="bg-gray-50 px-3 py-1 rounded">
                {step.text}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-black text-white p-3 rounded text-sm">
        Output: {result || "—"}
      </div>
    </div>
  );
}