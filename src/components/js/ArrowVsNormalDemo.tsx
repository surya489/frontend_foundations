"use client";

import { useState } from "react";

export default function ArrowVsNormalDemo(this: void) {
  const [result, setResult] = useState("");

  function normalFunction(this: any) {
    return this;
  }

  const arrowFunction = () => {
    return this;
  };

  const obj = {
    name: "Frontend",
    normal() {
      return this.name;
    },
    arrow: () => {
      return this;
    },
  };

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Examples</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setResult(String(normalFunction()))}
          className="px-3 py-1 border rounded"
        >
          Normal Function (global)
        </button>

        <button
          onClick={() => setResult(String(arrowFunction()))}
          className="px-3 py-1 border rounded"
        >
          Arrow Function (global)
        </button>

        <button
          onClick={() => setResult(obj.normal())}
          className="px-3 py-1 border rounded"
        >
          Object Normal
        </button>

        <button
          onClick={() => setResult(String(obj.arrow()))}
          className="px-3 py-1 border rounded"
        >
          Object Arrow
        </button>
      </div>

      <div className="bg-gray-100 p-3 rounded text-sm min-h-[40px]">
        {result || "Click a case to see result"}
      </div>
    </div>
  );
}