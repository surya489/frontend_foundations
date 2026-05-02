"use client";

export default function MemoryDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">Memory Structure</h3>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded p-4">
          <h4 className="font-medium mb-2">Stack (Fast, Simple)</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Stores primitive values</li>
            <li>Stores function calls</li>
            <li>Fixed size, very fast</li>
          </ul>

          <div className="mt-3 bg-white p-2 rounded text-xs">
            a = 10  
            b = "hello"
          </div>
        </div>

        <div className="border rounded p-4">
          <h4 className="font-medium mb-2">Heap (Flexible, Large)</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Stores objects & arrays</li>
            <li>Dynamic size</li>
            <li>Accessed via reference</li>
          </ul>

          <div className="mt-3 bg-white p-2 rounded text-xs">
            obj → {"{ value: 10 }"}
          </div>
        </div>

      </div>

      <p className="text-xs text-gray-500 mt-4">
        Stack stores values directly, Heap stores references to data
      </p>
    </div>
  );
}