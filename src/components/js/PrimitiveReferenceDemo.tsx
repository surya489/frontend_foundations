"use client";

import { useState } from "react";

export default function PrimitiveReferenceDemo() {
  const [result, setResult] = useState("");

  function primitiveExample() {
    let a = 10;
    let b = a;

    b = 20;

    setResult(`a = ${a}, b = ${b}`);
  }

  function referenceExample() {
    let obj1 = { value: 10 };
    let obj2 = obj1;

    obj2.value = 20;

    setResult(`obj1.value = ${obj1.value}, obj2.value = ${obj2.value}`);
  }

  function fixExample() {
    let obj1 = { value: 10 };
    let obj2 = { ...obj1 };

    obj2.value = 20;

    setResult(`obj1.value = ${obj1.value}, obj2.value = ${obj2.value}`);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Examples</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={primitiveExample} className="px-3 py-1 border rounded">
          Primitive
        </button>

        <button onClick={referenceExample} className="px-3 py-1 border rounded">
          Reference
        </button>

        <button onClick={fixExample} className="px-3 py-1 border rounded">
          Fix (Copy)
        </button>
      </div>

      <div className="bg-gray-100 p-3 rounded text-sm min-h-[40px]">
        {result || "Click a case to see result"}
      </div>
    </div>
  );
}