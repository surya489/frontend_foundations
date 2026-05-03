"use client";

import { useState } from "react";

export default function PalindromeDemo() {
  const [input, setInput] = useState("madam");
  const [output, setOutput] = useState("");

  function usingReverse() {
    const cleaned = input.toLowerCase();
    const reversed = cleaned.split("").reverse().join("");
    setOutput(`Reverse Method → ${cleaned === reversed}`);
  }

  function usingTwoPointer() {
    const str = input.toLowerCase();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        setOutput("Two Pointer → false");
        return;
      }
      left++;
      right--;
    }

    setOutput("Two Pointer → true");
  }

  function optimized() {
    const str = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        setOutput("Optimized → false");
        return;
      }
      left++;
      right--;
    }

    setOutput("Optimized → true");
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Palindrome</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-2 py-1 rounded mb-3 w-full"
      />

      <div className="flex gap-2 flex-wrap mb-4">
        <button onClick={usingReverse} className="px-3 py-1 border rounded">
          Reverse
        </button>

        <button onClick={usingTwoPointer} className="px-3 py-1 border rounded">
          Two Pointer
        </button>

        <button onClick={optimized} className="px-3 py-1 border rounded">
          Optimized
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Try checking"}
      </div>
    </div>
  );
}