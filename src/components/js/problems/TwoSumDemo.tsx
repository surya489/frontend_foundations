"use client";

import { useState } from "react";

export default function TwoSumDemo() {
  const [output, setOutput] = useState("");

  const nums = [2, 7, 11, 15];
  const target = 9;

  function bruteForce() {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          setOutput(`Brute Force → [${nums[i]}, ${nums[j]}]`);
          return;
        }
      }
    }
  }

  function usingMap() {
    const map = new Map<number, number>();

    for (let num of nums) {
      const complement = target - num;

      if (map.has(complement)) {
        setOutput(`Hash Map → [${complement}, ${num}]`);
        return;
      }

      map.set(num, 1);
    }
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Two Sum Demo</h3>

      <pre className="bg-gray-100 p-2 rounded text-sm mb-3">
{`nums = [2, 7, 11, 15]
target = 9`}
      </pre>

      <div className="flex gap-2 mb-4">
        <button onClick={bruteForce} className="px-3 py-1 border rounded">
          Brute Force
        </button>

        <button onClick={usingMap} className="px-3 py-1 border rounded">
          Hash Map
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Click a method"}
      </div>
    </div>
  );
}