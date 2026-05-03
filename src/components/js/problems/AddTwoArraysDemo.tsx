"use client";

import { useState } from "react";

export default function AddTwoArraysDemo() {
  const [output, setOutput] = useState("");

  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  function usingForLoop() {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i] + arr2[i]);
    }
    setOutput(`For Loop → [${result.join(", ")}]`);
  }

  function usingMap() {
    const result = arr1.map((v, i) => v + arr2[i]);
    setOutput(`Map → [${result.join(", ")}]`);
  }

  function usingReduce() {
    const result = arr1.reduce((acc: number[], val, i) => {
      acc.push(val + arr2[i]);
      return acc;
    }, []);
    setOutput(`Reduce → [${result.join(", ")}]`);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Solutions</h3>

      <div className="flex gap-2 flex-wrap mb-4">
        <button onClick={usingForLoop} className="px-3 py-1 border rounded">
          For Loop
        </button>

        <button onClick={usingMap} className="px-3 py-1 border rounded">
          Map
        </button>

        <button onClick={usingReduce} className="px-3 py-1 border rounded">
          Reduce
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Click a method"}
      </div>
    </div>
  );
}