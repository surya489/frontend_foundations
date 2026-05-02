"use client";

export default function GeneratorDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">Generator Flow (Pause & Resume)</h3>

      <div className="flex flex-col items-center gap-4">
        <div className="px-4 py-2 bg-black text-white rounded">
          function* starts
        </div>

        <div className="text-gray-400">↓ yield</div>

        <div className="px-4 py-2 border rounded">
          Paused (state saved)
        </div>

        <div className="text-gray-400">↓ next()</div>

        <div className="px-4 py-2 border rounded">
          Resumes from last point
        </div>

        <div className="text-gray-400">↓ yield</div>

        <div className="px-4 py-2 border rounded">
          Paused again
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Generators remember their execution state between pauses.
      </p>
    </div>
  );
}