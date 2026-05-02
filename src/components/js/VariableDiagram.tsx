"use client";

export default function VariableDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">var vs let vs const</h3>

      <div className="grid md:grid-cols-3 gap-4">

        <div className="border p-3 rounded">
          <p className="font-medium">var</p>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li>Function scoped</li>
            <li>Can redeclare</li>
            <li>Can update</li>
          </ul>
        </div>

        <div className="border p-3 rounded">
          <p className="font-medium">let</p>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li>Block scoped</li>
            <li>Cannot redeclare</li>
            <li>Can update</li>
          </ul>
        </div>

        <div className="border p-3 rounded">
          <p className="font-medium">const</p>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li>Block scoped</li>
            <li>Cannot redeclare</li>
            <li>Cannot update</li>
          </ul>
        </div>

      </div>
    </div>
  );
}