"use client";

export default function EventLoopDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">Event Loop Architecture</h3>

      <div className="flex flex-col items-center gap-4">

        <div className="px-4 py-2 bg-black text-white rounded">
          Call Stack
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          Web APIs (setTimeout, fetch)
        </div>

        <div className="text-gray-400">↓</div>

        <div className="flex gap-4">
          <div className="px-3 py-2 border rounded">
            Microtask Queue
          </div>
          <div className="px-3 py-2 border rounded">
            Macrotask Queue
          </div>
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          Event Loop → pushes to Stack
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Microtasks are always executed before macrotasks
      </p>
    </div>
  );
}