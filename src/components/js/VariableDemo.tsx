"use client";

import { useState } from "react";

export default function VariableDemo() {
  const [output, setOutput] = useState<string>("");

  function runVar() {
    var a = 10;
    var a = 20; // allowed
    setOutput(`var a = ${a}`);
  }

  function runLet() {
    let b = 10;
    b = 20; // allowed
    setOutput(`let b = ${b}`);
  }

  function runConst() {
    try {
      const c = 10;
      // c = 20; // error
      setOutput(`const c = ${c} (cannot change)`);
    } catch {
      setOutput("Error: const cannot be reassigned");
    }
  }

  function runTypes() {
    const data = [
      typeof "hello",
      typeof 10,
      typeof true,
      typeof undefined,
      typeof null,
      typeof {},
      typeof [],
    ];

    setOutput(`Types: ${data.join(", ")}`);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Examples</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={runVar} className="px-3 py-1 border rounded">
          var
        </button>

        <button onClick={runLet} className="px-3 py-1 border rounded">
          let
        </button>

        <button onClick={runConst} className="px-3 py-1 border rounded">
          const
        </button>

        <button onClick={runTypes} className="px-3 py-1 border rounded">
          typeof
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        Output: {output || "Click a button"}
      </div>
    </div>
  );
}