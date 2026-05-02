"use client";

export default function ClosureDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50">
      <h3 className="font-semibold mb-4">Closure Flow</h3>

      <div className="flex flex-col items-center gap-4 text-sm">
        <div className="px-4 py-2 bg-black text-white rounded">
          outer()
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          count = 0 (in memory)
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          inner() returned
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          inner still remembers count
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Even after outer() finishes, inner() retains access to its variables
      </p>
    </div>
  );
}