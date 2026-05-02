"use client";

export default function ThrottleDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">Throttle Timeline</h3>

      <div className="flex flex-col gap-3">

        <div>
          <p className="font-medium">User Actions</p>
          <div className="flex gap-2 text-gray-600">
            <span>●</span><span>●</span><span>●</span><span>●</span><span>●</span>
          </div>
        </div>

        <div>
          <p className="font-medium">Throttle (every 1s)</p>
          <div className="flex gap-4">
            <span className="bg-black text-white px-2 py-1 rounded">Run</span>
            <span className="text-gray-400">wait</span>
            <span className="bg-black text-white px-2 py-1 rounded">Run</span>
            <span className="text-gray-400">wait</span>
            <span className="bg-black text-white px-2 py-1 rounded">Run</span>
          </div>
        </div>

      </div>

      <p className="text-xs text-gray-500 mt-4">
        Function runs at fixed intervals, ignoring extra calls in between
      </p>
    </div>
  );
}