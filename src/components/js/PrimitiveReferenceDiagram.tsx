"use client";

export default function PrimitiveReferenceDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50 text-sm">
      <h3 className="font-semibold mb-4">Memory Behavior</h3>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <p className="font-medium mb-2">Primitive (Value Copy)</p>
          <div className="space-y-1 text-gray-600">
            <p>a = 10</p>
            <p>b = a</p>
            <p>b = 20</p>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            a remains 10 (independent copy)
          </p>
        </div>

        <div>
          <p className="font-medium mb-2">Reference (Shared Memory)</p>
          <div className="space-y-1 text-gray-600">
            <p>obj1 = {"{a:1}"}</p>
            <p>obj2 = obj1</p>
            <p>obj2.a = 5</p>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            obj1 also changes (same reference)
          </p>
        </div>

      </div>
    </div>
  );
}