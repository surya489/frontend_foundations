"use client";

export default function AsyncFlowDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50">
      <h3 className="font-semibold mb-4">Async/Await Flow</h3>

      <div className="flex flex-col items-center gap-4 text-sm">

        <div className="px-4 py-2 bg-black text-white rounded">
          async function starts
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          await pauses execution
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          Promise resolves
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          Execution resumes
        </div>

      </div>

      <p className="text-xs text-gray-500 mt-4">
        await pauses inside async function but does not block the event loop
      </p>
    </div>
  );
}