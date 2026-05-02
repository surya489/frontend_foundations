"use client";

import { useRef, useState } from "react";

type Step = {
  label: string;
  value: string;
  done: boolean;
};

export default function GeneratorDemo() {
  const genRef = useRef<Generator<number, void, unknown> | null>(null);
  const [history, setHistory] = useState<Step[]>([]);

  function initGenerator() {
    function* numbers() {
      yield 1;
      yield 2;
      yield 3;
    }

    genRef.current = numbers();
    setHistory([]);
  }

  function nextStep() {
    if (!genRef.current) return;

    const res = genRef.current.next();
    setHistory((prev) => [
      ...prev,
      {
        label: "next()",
        value: String(res.value),
        done: res.done ?? false,
      },
    ]);
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Step-by-Step Generator</h3>

      {/* SYNTAX */}
      <pre className="bg-gray-100 p-3 rounded text-sm mb-4 overflow-x-auto">
{`function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();

gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
gen.next(); // { value: 3, done: false }
gen.next(); // { value: undefined, done: true }`}
      </pre>

      <div className="flex gap-2 mb-4">
        <button
          onClick={initGenerator}
          className="px-3 py-1 border rounded"
        >
          Init
        </button>

        <button
          onClick={nextStep}
          className="px-3 py-1 bg-black text-white rounded"
        >
          next()
        </button>
      </div>

      <div className="space-y-2 text-sm">
        {history.length === 0 && (
          <p className="text-gray-500">Initialize and step through</p>
        )}

        {history.map((h, i) => (
          <div key={i} className="bg-gray-50 p-2 rounded">
            {h.label} → value: {h.value}, done: {String(h.done)}
          </div>
        ))}
      </div>
    </div>
  );
}