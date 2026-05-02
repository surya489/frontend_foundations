"use client";

export default function ExecutionFlowDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50">
      <h3 className="font-semibold mb-4">Execution Flow</h3>

      <div className="flex flex-col items-center gap-4 text-sm">
        <div className="px-4 py-2 rounded-lg bg-black text-white">
          Global Execution Context Created
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 rounded-lg border">
          Memory Creation Phase
          <ul className="text-xs mt-2 text-gray-500">
            <li>• Variables → undefined</li>
            <li>• Functions → stored</li>
          </ul>
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 rounded-lg border">
          Execution Phase
          <ul className="text-xs mt-2 text-gray-500">
            <li>• Code runs line by line</li>
            <li>• Values assigned</li>
            <li>• Functions executed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}