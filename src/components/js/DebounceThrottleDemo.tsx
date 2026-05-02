"use client";

import { useState, useEffect, useRef } from "react";

export default function DebounceThrottleDemo() {
  const [input, setInput] = useState("");
  const [debounced, setDebounced] = useState("");
  const [throttled, setThrottled] = useState("");

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const throttleRef = useRef<number>(0);

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      setDebounced(input);
    }, 800);
  }, [input]);

  useEffect(() => {
    const now = Date.now();

    if (now - throttleRef.current > 800) {
      setThrottled(input);
      throttleRef.current = now;
    }
  }, [input]);

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Typing Simulation</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
        className="border px-3 py-2 rounded w-full mb-4"
      />

      <div className="space-y-2 text-sm">
        <p>
          <strong>Live Input:</strong> {input}
        </p>

        <p>
          <strong>Debounced (after pause):</strong> {debounced}
        </p>

        <p>
          <strong>Throttled (interval updates):</strong> {throttled}
        </p>
      </div>
    </div>
  );
}