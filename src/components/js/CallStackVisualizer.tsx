"use client";

import { useState } from "react";

const steps = [
  { action: "push", value: "one()" },
  { action: "push", value: "two()" },
  { action: "push", value: "console.log()" },
  { action: "pop" },
  { action: "pop" },
  { action: "pop" },
];

export default function CallStackVisualizer() {
  const [step, setStep] = useState(0);
  const [stack, setStack] = useState<string[]>([]);

  function nextStep() {
    if (step >= steps.length) return;

    const current = steps[step];

    setStack((prev) => {
      if (current.action === "push") {
        return [...prev, current.value!];
      } else {
        return prev.slice(0, -1);
      }
    });

    setStep(step + 1);
  }

  function reset() {
    setStep(0);
    setStack([]);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-4">Call Stack Simulation</h3>
      
      <pre className="bg-gray-100 p-3 rounded text-sm mb-4">
{`function one() {
  two();
}

function two() {
  console.log("Done");
}

one();`}
      </pre>

      <div className="flex flex-col-reverse items-center gap-2 min-h-[150px] border p-3 rounded bg-gray-50">
        {stack.length === 0 && (
          <p className="text-gray-400 text-sm">Stack is empty</p>
        )}

        {stack.map((item, index) => (
          <div
            key={index}
            className="w-full text-center px-3 py-2 bg-black text-white rounded animate-pulse"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Next Step
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 border rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}