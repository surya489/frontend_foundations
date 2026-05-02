"use client";

export default function JSRuntimeDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">JavaScript Runtime</h3>

      <div className="flex flex-col items-center gap-4">

        <div className="px-4 py-2 bg-black text-white rounded">
          JavaScript Code
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          JS Engine (Executes Code)
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          Browser / Node.js Environment
        </div>

      </div>

      <p className="text-xs text-gray-500 mt-4">
        JavaScript runs inside an engine like V8 (Chrome / Node.js)
      </p>
    </div>
  );
}