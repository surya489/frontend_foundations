"use client";

import { useState } from "react";

export default function FlattenArrayDemo() {
  const [output, setOutput] = useState("");

  const arr = [1, [2, [3, 4], 5]];

  function usingFlat() {
    const result = arr.flat(Infinity);
    setOutput(`flat() → [${result.join(", ")}]`);
  }

  function usingRecursion() {
    function flatten(input: any[]): number[] {
      let result: number[] = [];

      for (let item of input) {
        if (Array.isArray(item)) {
          result = result.concat(flatten(item));
        } else {
          result.push(item);
        }
      }

      return result;
    }

    const result = flatten(arr);
    setOutput(`recursion → [${result.join(", ")}]`);
  }

  function usingReduce() {
    function flatten(input: any[]): number[] {
      return input.reduce((acc: number[], val) => {
        return acc.concat(
          Array.isArray(val) ? flatten(val) : val
        );
      }, []);
    }

    const result = flatten(arr);
    setOutput(`reduce → [${result.join(", ")}]`);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Flatten Array</h3>

      <pre className="bg-gray-100 p-2 rounded text-sm mb-3">
{`[1, [2, [3, 4], 5]]`}
      </pre>

      <div className="flex gap-2 flex-wrap mb-4">
        <button onClick={usingFlat} className="px-3 py-1 border rounded">
          flat()
        </button>

        <button onClick={usingRecursion} className="px-3 py-1 border rounded">
          recursion
        </button>

        <button onClick={usingReduce} className="px-3 py-1 border rounded">
          reduce
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Try flattening"}
      </div>
    </div>
  );
}