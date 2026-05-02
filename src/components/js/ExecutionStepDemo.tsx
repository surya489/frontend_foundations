"use client";

import { useState } from "react";

const steps = [
  {
    title: "Memory Phase",
    description: "Variables are initialized as undefined, functions are stored.",
    state: "a = undefined, greet = function",
  },
  {
    title: "Execution Step 1",
    description: "console.log(a) is executed",
    state: "Output → undefined",
  },
  {
    title: "Execution Step 2",
    description: "Variable assignment happens",
    state: "a = 10",
  },
  {
    title: "Execution Step 3",
    description: "Function is invoked",
    state: 'Output → "Hello"',
  },
];

export default function ExecutionStepDemo() {
  const [step, setStep] = useState(0);

  return (
    <div className="border p-4 rounded-lg mt-4">
      <h3 className="font-semibold mb-3">Step-by-Step Execution</h3>

      <div className="bg-gray-100 p-3 rounded text-sm mb-3">
{`console.log(a);
var a = 10;

function greet() {
  console.log("Hello");
}

greet();`}
      </div>

      <div className="space-y-2">
        <p className="font-medium">{steps[step].title}</p>
        <p className="text-gray-600 text-sm">{steps[step].description}</p>
        <p className="text-sm bg-gray-50 p-2 rounded">{steps[step].state}</p>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setStep((s) => Math.max(s - 1, 0))}
          className="px-3 py-1 border rounded"
        >
          Prev
        </button>

        <button
          onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
          className="px-3 py-1 bg-black text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}