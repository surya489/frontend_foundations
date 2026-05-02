"use client";

export default function HOFDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50">
      <h3 className="font-semibold mb-4">How Higher Order Functions Work</h3>

      <div className="flex flex-col items-center gap-4 text-sm">
        <div className="px-4 py-2 bg-black text-white rounded">
          Function A
        </div>

        <div className="text-gray-400">↓ passes function</div>

        <div className="px-4 py-2 border rounded">
          Function B (Higher Order Function)
        </div>

        <div className="text-gray-400">↓ returns function</div>

        <div className="px-4 py-2 border rounded">
          New Function
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        A Higher Order Function either takes another function as an argument or returns a function.
      </p>
    </div>
  );
}