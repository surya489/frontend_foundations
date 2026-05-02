"use client";

export default function ScopeChainDiagram() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50">
      <h3 className="font-semibold mb-4">Scope Chain</h3>

      <div className="flex flex-col items-center gap-4 text-sm">
        <div className="px-4 py-2 bg-black text-white rounded">
          Global Scope
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          Outer Function Scope
        </div>

        <div className="text-gray-400">↓</div>

        <div className="px-4 py-2 border rounded">
          Inner Function Scope
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        JavaScript searches variables from inner scope → outer → global
      </p>
    </div>
  );
}