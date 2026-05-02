"use client";

import { useState } from "react";

export default function FunctionDemo() {
  const [output, setOutput] = useState("");

  function declaration() {
    function greet(name: string) {
      return "Hello " + name;
    }

    setOutput(greet("Jaya"));
  }

  function expression() {
    const greet = function (name: string) {
      return "Hello " + name;
    };

    setOutput(greet("Surya"));
  }

  function arrow() {
    const greet = (name: string) => "Hello " + name;
    setOutput(greet("JS"));
  }

  function callback() {
    function process(fn: (n: number) => number) {
      return fn(5);
    }

    const result = process((n) => n * 2);
    setOutput(`Callback result → ${result}`);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Functions</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={declaration} className="px-3 py-1 border rounded">
          Declaration
        </button>

        <button onClick={expression} className="px-3 py-1 border rounded">
          Expression
        </button>

        <button onClick={arrow} className="px-3 py-1 border rounded">
          Arrow
        </button>

        <button onClick={callback} className="px-3 py-1 border rounded">
          Callback
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        Output: {output || "Click a function"}
      </div>
    </div>
  );
}