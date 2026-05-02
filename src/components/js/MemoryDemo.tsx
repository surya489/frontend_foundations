"use client";

import { useState } from "react";

export default function MemoryDemo() {
  const [output, setOutput] = useState("");

  function primitiveExample() {
    let a = 10;
    let b = a;

    b = 20;

    setOutput(`a = ${a}, b = ${b}`);
  }

  function referenceExample() {
    let obj1 = { value: 10 };
    let obj2 = obj1;

    obj2.value = 20;

    setOutput(`obj1.value = ${obj1.value}, obj2.value = ${obj2.value}`);
  }

  function explanation() {
    setOutput(
      "Primitive → copied (separate memory)\nReference → shared (same memory)"
    );
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Memory Behavior Demo</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={primitiveExample} className="px-3 py-1 border rounded">
          Primitive (Copy)
        </button>

        <button onClick={referenceExample} className="px-3 py-1 border rounded">
          Reference (Shared)
        </button>

        <button onClick={explanation} className="px-3 py-1 border rounded">
          Explain
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm whitespace-pre-line">
        {output || "Click a button"}
      </div>
    </div>
  );
}