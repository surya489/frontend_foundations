"use client";

import { useState } from "react";

export default function PrimitiveReferenceDemo() {
  const [result, setResult] = useState("");
  const [active, setActive] = useState(""); // 👈 track active button

  function primitiveExample() {
    let a = 10;
    let b = a;

    b = 20;

    setResult(`a = ${a}, b = ${b}`);
    setActive("primitive");
  }

  function referenceExample() {
    let obj1 = { value: 10 };
    let obj2 = obj1;

    obj2.value = 20;

    setResult(`obj1.value = ${obj1.value}, obj2.value = ${obj2.value}`);
    setActive("reference");
  }

  function fixExample() {
    let obj1 = { value: 10 };
    let obj2 = { ...obj1 };

    obj2.value = 20;

    setResult(`obj1.value = ${obj1.value}, obj2.value = ${obj2.value}`);
    setActive("fix");
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Examples</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={primitiveExample}
          className={`px-3 py-1 border rounded cursor-pointer ${
            active === "primitive" ? "bg-black text-white" : ""
          }`}
        >
          Primitive
        </button>

        <button
          onClick={referenceExample}
          className={`px-3 py-1 border rounded cursor-pointer ${
            active === "reference" ? "bg-black text-white" : ""
          }`}
        >
          Reference
        </button>

        <button
          onClick={fixExample}
          className={`px-3 py-1 border rounded cursor-pointer ${
            active === "fix" ? "bg-black text-white" : ""
          }`}
        >
          Fix (Copy)
        </button>
      </div>

      <div className="bg-gray-100 p-3 rounded text-sm min-h-[40px]">
        {result || "Click a case to see result"}
      </div>
    </div>
  );
}