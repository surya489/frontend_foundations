"use client";

import { useState } from "react";

export default function ReverseStringDemo() {
  const [input, setInput] = useState("hello");
  const [output, setOutput] = useState("");

  function usingSplit() {
    const result = input.split("").reverse().join("");
    setOutput(`split/reverse → ${result}`);
  }

  function usingLoop() {
    let result = "";
    for (let i = input.length - 1; i >= 0; i--) {
      result += input[i];
    }
    setOutput(`for loop → ${result}`);
  }

  function usingRecursion(str = input): string {
    if (str === "") return "";
    return usingRecursion(str.slice(1)) + str[0];
  }

  function runRecursion() {
    setOutput(`recursion → ${usingRecursion()}`);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Reverse</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-2 py-1 rounded mb-3 w-full"
      />

      <div className="flex gap-2 flex-wrap mb-4">
        <button onClick={usingSplit} className="px-3 py-1 border rounded">
          split()
        </button>

        <button onClick={usingLoop} className="px-3 py-1 border rounded">
          for loop
        </button>

        <button onClick={runRecursion} className="px-3 py-1 border rounded">
          recursion
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Try reversing"}
      </div>
    </div>
  );
}