"use client";

import { useState, useRef } from "react";

export default function DebounceSearchDemo() {
  const [query, setQuery] = useState("");
  const [output, setOutput] = useState("");
  const [apiCalls, setApiCalls] = useState(0);

  const timer = useRef<NodeJS.Timeout | null>(null);

  // Without debounce
  function handleWithoutDebounce(value: string) {
    setQuery(value);
    fakeApi(value);
  }

  // With debounce
  function handleWithDebounce(value: string) {
    setQuery(value);

    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      fakeApi(value);
    }, 500);
  }

  function fakeApi(value: string) {
    setApiCalls((prev) => prev + 1);
    setOutput(`Result for "${value}"`);
  }

  function reset() {
    setQuery("");
    setOutput("");
    setApiCalls(0);
  }

  return (
    <div className="border rounded-lg p-4 mt-4 space-y-4">
      <h3 className="font-semibold">Debounce Demo</h3>

      <input
        value={query}
        placeholder="Type something..."
        onChange={(e) => handleWithDebounce(e.target.value)}
        className="border px-3 py-2 rounded w-full"
      />

      <div className="flex gap-2 text-sm">
        <button
          onClick={() => setQuery("")}
          className="px-3 py-1 border rounded"
        >
          Clear
        </button>

        <button
          onClick={reset}
          className="px-3 py-1 border rounded"
        >
          Reset Stats
        </button>
      </div>

      <div className="bg-gray-100 p-3 rounded text-sm">
        <p>Result: {output || "-"}</p>
        <p>API Calls: {apiCalls}</p>
      </div>

      <p className="text-xs text-gray-500">
        Try typing fast — debounce reduces API calls.
      </p>
    </div>
  );
}