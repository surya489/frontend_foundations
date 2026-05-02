"use client";

import { useState } from "react";

const steps = [
  {
    title: "Memory Phase",
    desc: "let and const are hoisted but not initialized",
    output: "b is in TDZ",
  },
  {
    title: "Execution Step 1",
    desc: "Trying to access b before declaration",
    output: "ReferenceError",
  },
  {
    title: "Execution Step 2",
    desc: "Variable initialized",
    output: "b = 20",
  },
  {
    title: "Execution Step 3",
    desc: "Access after initialization",
    output: "20",
  },
];

export default function TDZDemo() {
  const [step, setStep] = useState(0);

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">TDZ Simulation</h3>

      <pre className="bg-gray-100 p-3 rounded text-sm mb-4">
{`console.log(b);
let b = 20;
console.log(b);`}
      </pre>

      <div>
        <p className="font-medium">{steps[step].title}</p>
        <p className="text-sm text-gray-600">{steps[step].desc}</p>
        <p className="mt-2 bg-gray-50 p-2 rounded text-sm">
          {steps[step].output}
        </p>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setStep((s) => Math.max(s - 1, 0))}
          className="px-3 py-1 border rounded"
        >
          Prev
        </button>
        <button
          onClick={() =>
            setStep((s) => Math.min(s + 1, steps.length - 1))
          }
          className="px-3 py-1 bg-black text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}