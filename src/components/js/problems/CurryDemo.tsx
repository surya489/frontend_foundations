"use client";

import { useState } from "react";

export default function CurryDemo() {
  const [output, setOutput] = useState("");

  function normalFunction() {
    function sum(a: number, b: number, c: number) {
      return a + b + c;
    }

    setOutput(`Normal → ${sum(1, 2, 3)}`);
  }

  function curryFunction() {
    function sum(a: number) {
      return function (b: number) {
        return function (c: number) {
          return a + b + c;
        };
      };
    }

    setOutput(`Curried → ${sum(1)(2)(3)}`);
  }

  function reusableCurry() {
    function curry(fn: Function) {
      return function curried(...args: any[]) {
        if (args.length >= fn.length) {
          return fn(...args);
        } else {
          return (...next: any[]) =>
            curried(...args, ...next);
        }
      };
    }

    function add(a: number, b: number, c: number) {
      return a + b + c;
    }

    const curriedAdd = curry(add);
    setOutput(`Reusable → ${curriedAdd(1)(2)(3)}`);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Currying Demo</h3>

      <div className="flex gap-2 flex-wrap mb-4">
        <button onClick={normalFunction} className="px-3 py-1 border rounded">
          Normal Function
        </button>

        <button onClick={curryFunction} className="px-3 py-1 border rounded">
          Basic Curry
        </button>

        <button onClick={reusableCurry} className="px-3 py-1 border rounded">
          Reusable Curry
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Click a method"}
      </div>
    </div>
  );
}