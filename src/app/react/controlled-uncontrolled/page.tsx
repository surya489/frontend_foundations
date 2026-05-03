'use client';

import { useState } from 'react';

export default function ControlledUncontrolledPage() {
  const [controlledValue, setControlledValue] = useState('');
  const [uncontrolledValue, setUncontrolledValue] = useState<any | null>(null);

  const handleControlledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setControlledValue(e.target.value);
  };

  const handleUncontrolledSubmit = () => {
    const input = document.getElementById('uncontrolled-input');
    setUncontrolledValue(input ? (input as HTMLInputElement).value : null);
  };

  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Controlled vs Uncontrolled Components</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What are Controlled Components?</h2>
        <p className="text-gray-600 mt-2">
          Controlled components have their value controlled by React state.
          The component's value is always in sync with the state.
        </p>
      </section>

      {/* CONTROLLED EXAMPLE */}
      <section>
        <h2 className="text-xl font-semibold">Controlled Component Example</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [value, setValue] = useState('');

<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
        </pre>
        <div className="mt-4 p-4 border rounded bg-green-50">
          <label className="block text-sm font-medium mb-2">
            Controlled Input:
          </label>
          <input
            type="text"
            value={controlledValue}
            onChange={handleControlledChange}
            className="border p-2 rounded w-full"
            placeholder="Type something..."
          />
          <p className="mt-2 text-sm">Value: {controlledValue}</p>
        </div>
      </section>

      {/* WHAT UNCONTROLLED */}
      <section>
        <h2 className="text-xl font-semibold">What are Uncontrolled Components?</h2>
        <p className="text-gray-600 mt-2">
          Uncontrolled components manage their own state internally.
          React doesn't control the value - it's managed by the DOM.
        </p>
      </section>

      {/* UNCONTROLLED EXAMPLE */}
      <section>
        <h2 className="text-xl font-semibold">Uncontrolled Component Example</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`<input
  id="my-input"
  defaultValue="initial value"
/>

// To get value:
const value = document.getElementById('my-input').value;`}
        </pre>
        <div className="mt-4 p-4 border rounded bg-yellow-50">
          <label className="block text-sm font-medium mb-2">
            Uncontrolled Input:
          </label>
          <input
            id="uncontrolled-input"
            type="text"
            defaultValue=""
            className="border p-2 rounded w-full"
            placeholder="Type something..."
          />
          <button
            onClick={handleUncontrolledSubmit}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Get Value
          </button>
          <p className="mt-2 text-sm">Value: {uncontrolledValue}</p>
        </div>
      </section>

      {/* WHEN TO USE */}
      <section>
        <h2 className="text-xl font-semibold">When to Use Each</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-600">Use Controlled:</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Form validation</li>
              <li>Conditional rendering based on input</li>
              <li>Dynamic input behavior</li>
              <li>Testing (predictable state)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-600">Use Uncontrolled:</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Simple forms</li>
              <li>File inputs</li>
              <li>Performance-critical cases</li>
              <li>Integrating with non-React code</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2 className="text-xl font-semibold">Advantages & Disadvantages</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-green-600">Controlled Components:</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li> Full control over input behavior</li>
              <li> Easy validation and formatting</li>
              <li> Predictable state</li>
              <li> More code to write</li>
              <li> Re-renders on every change</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-600">Uncontrolled Components:</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li> Less code</li>
              <li> Better performance</li>
              <li> Easier integration</li>
              <li> Harder to validate</li>
              <li> Less control</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Use controlled components for complex forms</li>
          <li>Use uncontrolled for simple cases or performance-critical code</li>
          <li>Consider libraries like React Hook Form for complex forms</li>
          <li>Always prefer controlled when you need validation</li>
        </ul>
      </section>
    </main>
  );
}