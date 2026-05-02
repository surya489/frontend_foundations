"use client";

export default function PromiseDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50">
      <h3 className="font-semibold mb-4">Promise Lifecycle</h3>

      <div className="flex flex-col items-center gap-4 text-sm">

        <div className="px-4 py-2 bg-yellow-500 text-white rounded">
          Pending
        </div>

        <div className="text-gray-400">↓</div>

        <div className="flex gap-6">
          <div className="px-4 py-2 bg-green-600 text-white rounded">
            Fulfilled
          </div>

          <div className="px-4 py-2 bg-red-500 text-white rounded">
            Rejected
          </div>
        </div>

      </div>

      <p className="text-xs text-gray-500 mt-4">
        A Promise starts as pending, then resolves (fulfilled) or rejects (error)
      </p>
    </div>
  );
}