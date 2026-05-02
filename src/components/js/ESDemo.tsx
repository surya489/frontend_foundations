"use client";

import { useState } from "react";

export default function ESDemo() {
  const [output, setOutput] = useState("");

  function runVar() {
    var x = 10;
    var x = 20;
    setOutput(`var allows redeclaration → x = ${x}`);
  }

  function runLet() {
    let y = 10;
    y = 20;
    setOutput(`let allows update → y = ${y}`);
  }

  function runArrow() {
    const add = (a: number, b: number) => a + b;
    setOutput(`Arrow function → add(2,3) = ${add(2, 3)}`);
  }

  function runTemplate() {
    const name = "JS";
    setOutput(`Template literal → Hello ${name}`);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try ES6 Features</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={runVar} className="px-3 py-1 border rounded">
          var
        </button>

        <button onClick={runLet} className="px-3 py-1 border rounded">
          let
        </button>

        <button onClick={runArrow} className="px-3 py-1 border rounded">
          Arrow Function
        </button>

        <button onClick={runTemplate} className="px-3 py-1 border rounded">
          Template Literal
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        Output: {output || "Click a feature"}
      </div>
    </div>
  );
}