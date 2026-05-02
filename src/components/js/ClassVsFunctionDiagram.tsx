"use client";

export default function ClassVsFunctionDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">Class vs Function</h3>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border p-4 rounded">
          <h4 className="font-medium mb-2">Constructor Function</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Older approach (ES5)</li>
            <li>Uses function keyword</li>
            <li>Uses prototype</li>
          </ul>
        </div>

        <div className="border p-4 rounded">
          <h4 className="font-medium mb-2">Class</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Modern syntax (ES6)</li>
            <li>Cleaner and readable</li>
            <li>Built on prototype internally</li>
          </ul>
        </div>

      </div>
    </div>
  );
}