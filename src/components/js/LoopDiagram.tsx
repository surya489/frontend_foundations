"use client";

export default function LoopDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">Loop Flow</h3>

      <div className="flex flex-col items-center gap-3">
        <div className="px-4 py-2 bg-black text-white rounded">
          Start
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          Condition Check
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          Execute Code
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          Update Counter
        </div>

        <div className="text-gray-400">↺ repeat</div>
      </div>
    </div>
  );
}