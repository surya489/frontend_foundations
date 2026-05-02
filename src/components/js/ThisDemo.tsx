"use client";

import { useState } from "react";

export default function ThisDemo() {
  const [result, setResult] = useState<string>("");

  const examples = {
    global: () => {
      return "undefined (module scope)";
    },

    object: () => {
      const obj = {
        name: "JS",
        getName() {
          return this.name;
        },
      };
      return obj.getName();
    },

    regular: () => {
      function test(this: any) {
        return this;
      }
      return String(test());
    },

    arrow: () => {
      const obj = {
        name: "JS",
        getName: () => {
          return this;
        },
      };
      return String(obj.getName());
    },
  };

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Different Cases</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setResult(examples.global())}
          className="px-3 py-1 border rounded"
        >
          Global
        </button>

        <button
          onClick={() => setResult(examples.object())}
          className="px-3 py-1 border rounded"
        >
          Object Method
        </button>

        <button
          onClick={() => setResult(examples.regular())}
          className="px-3 py-1 border rounded"
        >
          Regular Function
        </button>

        <button
          onClick={() => setResult(examples.arrow())}
          className="px-3 py-1 border rounded"
        >
          Arrow Function
        </button>
      </div>

      <div className="bg-gray-100 p-3 rounded text-sm min-h-[40px]">
        {result || "Click a case to see result"}
      </div>
    </div>
  );
}