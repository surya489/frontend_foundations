'use client';

import { useState } from 'react';

export default function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white">
      <h3 className="text-lg font-semibold mb-4">Counter Demo</h3>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Current count: <strong>{count}</strong></p>
        <button
          onClick={() => setCount(0)}
          className="mt-2 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}