"use client";

export default function ArrayVisual() {
  return (
    <div className="border rounded-xl p-6 mt-4 bg-gray-50">
      <h3 className="font-semibold mb-4">Array Transformation</h3>

      <div className="flex flex-col items-center gap-4 text-sm">
        <div className="px-4 py-2 bg-black text-white rounded">
          [1, 2, 3, 4]
        </div>

        <div className="text-gray-400">map(x → x * 2)</div>

        <div className="px-4 py-2 border rounded">
          [2, 4, 6, 8]
        </div>

        <div className="text-gray-400">filter(x → x &gt; 2)</div>

        <div className="px-4 py-2 border rounded">
          [3, 4]
        </div>
      </div>
    </div>
  );
}