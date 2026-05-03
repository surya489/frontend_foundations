"use client";

import { useState } from "react";

export default function ApiRetryDemo() {
  const [output, setOutput] = useState("");
  const [attempts, setAttempts] = useState(0);

  // Simulated API (fails randomly)
  function fakeApi(): Promise<string> {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.6;

      setTimeout(() => {
        success ? resolve("Success!") : reject("Failed!");
      }, 500);
    });
  }

  // Retry Logic
  async function fetchWithRetry(retries = 3) {
    let count = 0;

    while (count < retries) {
      try {
        setAttempts((prev) => prev + 1);
        const res = await fakeApi();
        setOutput(`Success on attempt ${count + 1}`);
        return res;
      } catch (err) {
        count++;
        if (count === retries) {
          setOutput("All retries failed");
        }
      }
    }
  }

  function reset() {
    setOutput("");
    setAttempts(0);
  }

  return (
    <div className="border rounded-lg p-4 mt-4 space-y-4">
      <h3 className="font-semibold">API Retry Demo</h3>

      <div className="flex gap-2">
        <button
          onClick={() => fetchWithRetry(3)}
          className="px-3 py-1 border rounded"
        >
          Call API (Retry 3)
        </button>

        <button
          onClick={reset}
          className="px-3 py-1 border rounded"
        >
          Reset
        </button>
      </div>

      <div className="bg-gray-100 p-3 rounded text-sm">
        <p>Attempts: {attempts}</p>
        <p>Status: {output || "-"}</p>
      </div>

      <p className="text-xs text-gray-500">
        API randomly fails — retry logic ensures success if possible.
      </p>
    </div>
  );
}