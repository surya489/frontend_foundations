"use client";

export default function FunctionTypesDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">Types of Functions</h3>

      <div className="space-y-3">

        <div className="border p-3 rounded">
          <p className="font-medium">Function Declaration</p>
          <p className="text-gray-600 text-xs">
            Defined using function keyword
          </p>
        </div>

        <div className="border p-3 rounded">
          <p className="font-medium">Function Expression</p>
          <p className="text-gray-600 text-xs">
            Assigned to a variable
          </p>
        </div>

        <div className="border p-3 rounded">
          <p className="font-medium">Arrow Function</p>
          <p className="text-gray-600 text-xs">
            Short syntax introduced in ES6
          </p>
        </div>

      </div>
    </div>
  );
}