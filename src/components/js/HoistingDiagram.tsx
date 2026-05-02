"use client";

export default function HoistingDiagram() {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4">
        
      <div className="border rounded-lg p-4 bg-gray-50">
        <h3 className="font-semibold mb-2">Memory Phase</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• var a → undefined</li>
          <li>• let b → TDZ</li>
          <li>• const c → TDZ</li>
          <li>• function greet → stored fully</li>
        </ul>
      </div>

      <div className="border rounded-lg p-4 bg-gray-50">
        <h3 className="font-semibold mb-2">Execution Phase</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• console.log(a) → undefined</li>
          <li>• console.log(b) → ReferenceError</li>
          <li>• a = 10</li>
          <li>• greet() executes</li>
        </ul>
      </div>
    </div>
  );
}