"use client";

import { useState, useRef } from "react";

export default function ThrottleDemo() {
  const [clicks, setClicks] = useState(0);
  const [executed, setExecuted] = useState(0);

  const lastCall = useRef(0);

  function handleClick() {
    setClicks((c) => c + 1);

    const now = Date.now();

    if (now - lastCall.current > 1000) {
      setExecuted((e) => e + 1);
      lastCall.current = now;
    }
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Throttle Demo (Click Fast)</h3>

      <button
        onClick={handleClick}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Click Me
      </button>

      <div className="mt-4 text-sm space-y-1">
        <p><strong>Total Clicks:</strong> {clicks}</p>
        <p><strong>Function Executed:</strong> {executed}</p>
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Even if you click many times, function runs only once per second
      </p>
    </div>
  );
}