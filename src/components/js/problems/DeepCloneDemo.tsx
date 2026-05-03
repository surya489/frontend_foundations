"use client";

import { useState } from "react";

export default function DeepCloneDemo() {
  const [output, setOutput] = useState("");

  const original = {
    name: "Jaya",
    address: { city: "Chennai" },
  };

  function shallowCopy() {
    const copy = { ...original };
    copy.address.city = "Bangalore";

    setOutput(
      `Shallow Copy → Original city: ${original.address.city}`
    );
  }

  function deepClone() {
    function clone(obj: any): any {
      if (obj === null || typeof obj !== "object") return obj;

      if (Array.isArray(obj)) {
        return obj.map(clone);
      }

      const result: any = {};
      for (let key in obj) {
        result[key] = clone(obj[key]);
      }

      return result;
    }

    const copy = clone(original);
    copy.address.city = "Mumbai";

    setOutput(
      `Deep Clone → Original city: ${original.address.city}`
    );
  }

  function usingJSON() {
    const copy = JSON.parse(JSON.stringify(original));
    copy.address.city = "Delhi";

    setOutput(
      `JSON Clone → Original city: ${original.address.city}`
    );
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Deep Clone Demo</h3>

      <pre className="bg-gray-100 p-2 rounded text-sm mb-3">
{`{ name: "Jaya", address: { city: "Chennai" } }`}
      </pre>

      <div className="flex gap-2 flex-wrap mb-4">
        <button onClick={shallowCopy} className="px-3 py-1 border rounded">
          Shallow Copy
        </button>

        <button onClick={deepClone} className="px-3 py-1 border rounded">
          Deep Clone
        </button>

        <button onClick={usingJSON} className="px-3 py-1 border rounded">
          JSON Method
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Click a method"}
      </div>
    </div>
  );
}