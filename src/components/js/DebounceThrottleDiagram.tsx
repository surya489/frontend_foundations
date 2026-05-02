"use client";

export default function DebounceThrottleDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">Debounce vs Throttle</h3>

      <div className="mb-6">
        <p className="font-medium mb-2">Debounce</p>
        <div className="flex items-center gap-2">
          <span>Typing:</span>
          <span>● ● ● ●</span>
          <span className="text-gray-400">→ waits →</span>
          <span className="px-2 py-1 bg-black text-white rounded">
            API Call
          </span>
        </div>
      </div>

      <div>
        <p className="font-medium mb-2">Throttle</p>
        <div className="flex items-center gap-2">
          <span>Typing:</span>
          <span>● ● ● ●</span>
          <span className="text-gray-400">→ fixed intervals →</span>
          <span className="px-2 py-1 bg-black text-white rounded">
            Calls happening periodically
          </span>
        </div>
      </div>
    </div>
  );
}