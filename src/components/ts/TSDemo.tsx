"use client";

import { useState } from "react";

export default function TSDemo() {
  const [output, setOutput] = useState("");

  function jsExample() {
    let x: any = "hello";
    x = 10;
    setOutput("JavaScript allows changing type → x = 10");
  }

  function tsExample() {
    setOutput("TypeScript prevents type change → Error before running");
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Example</h3>

      <div className="flex gap-2 mb-4">
        <button onClick={jsExample} className="px-3 py-1 border rounded">
          JavaScript Behavior
        </button>

        <button onClick={tsExample} className="px-3 py-1 border rounded">
          TypeScript Behavior
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Click a button"}
      </div>
    </div>
  );
}