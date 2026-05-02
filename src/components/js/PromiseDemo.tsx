"use client";

import { useState } from "react";

type Step = {
  title: string;
  state: string;
  description: string;
  output: string;
};

const steps: Step[] = [
  {
    title: "Promise Created",
    state: "Pending",
    description: "Promise is initialized",
    output: "—",
  },
  {
    title: "Executor Runs",
    state: "Pending",
    description: "setTimeout starts async operation",
    output: "—",
  },
  {
    title: "Resolved",
    state: "Fulfilled",
    description: "resolve() is called",
    output: "Data received",
  },
  {
    title: ".then() Executes",
    state: "Fulfilled",
    description: "then() receives resolved value",
    output: "Success handled",
  },
];

export default function PromiseDemo() {
  const [step, setStep] = useState(0);

  const current = steps[step];

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Promise Execution Demo</h3>

      {/* SYNTAX */}
      <pre className="bg-gray-100 p-3 rounded text-sm mb-4">
{`const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});

promise
  .then(data => console.log(data))
  .catch(err => console.log(err));`}
      </pre>

      <div className="mb-3 text-sm">
        <strong>State:</strong> {current.state}
      </div>

      <div className="mb-3 text-sm">
        <strong>{current.title}</strong>
        <p className="text-gray-600">{current.description}</p>
      </div>

      <div className="bg-black text-white p-2 rounded text-sm">
        Output: {current.output}
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