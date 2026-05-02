"use client";

import { useState } from "react";

type Step = {
  title: string;
  description: string;
  output: string;
};

const steps: Step[] = [
  {
    title: "Function Starts",
    description: "Async function begins execution",
    output: "Start",
  },
  {
    title: "await Called",
    description: "Execution pauses, Promise runs in background",
    output: "Waiting...",
  },
  {
    title: "Promise Resolved",
    description: "Promise completes and returns data",
    output: "Data fetched",
  },
  {
    title: "Execution Resumes",
    description: "await receives value and continues",
    output: "Done",
  },
];

export default function AsyncAwaitDemo() {
  const [step, setStep] = useState(0);

  const current = steps[step];

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Async/Await Execution</h3>

      <pre className="bg-gray-100 p-3 rounded text-sm mb-4">
{`async function fetchData() {
  console.log("Start");

  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("Data fetched"), 1000)
  );

  console.log(data);
  console.log("Done");
}`}
      </pre>

      <div className="mb-3">
        <p className="font-medium">{current.title}</p>
        <p className="text-sm text-gray-600">{current.description}</p>
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