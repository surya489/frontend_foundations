"use client";

import { useState } from "react";

type Step = {
  title: string;
  stack: string[];
  micro: string[];
  macro: string[];
  output: string[];
};

const steps: Step[] = [
  {
    title: "Start",
    stack: ["global()"],
    micro: [],
    macro: [],
    output: [],
  },
  {
    title: "console.log('Start')",
    stack: ["global()"],
    micro: [],
    macro: [],
    output: ["Start"],
  },
  {
    title: "setTimeout → goes to Web API",
    stack: ["global()"],
    micro: [],
    macro: ["timeout callback"],
    output: ["Start"],
  },
  {
    title: "Promise → microtask queue",
    stack: ["global()"],
    micro: ["promise.then"],
    macro: ["timeout callback"],
    output: ["Start"],
  },
  {
    title: "console.log('End')",
    stack: ["global()"],
    micro: ["promise.then"],
    macro: ["timeout callback"],
    output: ["Start", "End"],
  },
  {
    title: "Microtask executes",
    stack: ["promise.then"],
    micro: [],
    macro: ["timeout callback"],
    output: ["Start", "End", "Promise"],
  },
  {
    title: "Macrotask executes",
    stack: ["timeout callback"],
    micro: [],
    macro: [],
    output: ["Start", "End", "Promise", "Timeout"],
  },
];

export default function EventLoopDemo() {
  const [step, setStep] = useState(0);
  const current = steps[step];

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Step-by-Step Execution</h3>

      <pre className="bg-gray-100 p-3 rounded text-sm mb-4">
{`console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");`}
      </pre>

      <p className="font-medium mb-3">{current.title}</p>

      <div className="grid grid-cols-3 gap-3 text-sm">

        <div className="bg-gray-50 p-2 rounded">
          <p className="font-semibold">Call Stack</p>
          {current.stack.map((s, i) => <p key={i}>{s}</p>)}
        </div>

        <div className="bg-gray-50 p-2 rounded">
          <p className="font-semibold">Microtask</p>
          {current.micro.map((m, i) => <p key={i}>{m}</p>)}
        </div>

        <div className="bg-gray-50 p-2 rounded">
          <p className="font-semibold">Macrotask</p>
          {current.macro.map((m, i) => <p key={i}>{m}</p>)}
        </div>

      </div>

      <div className="mt-4 bg-black text-white p-2 rounded text-sm">
        Output: {current.output.join(" → ") || "—"}
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