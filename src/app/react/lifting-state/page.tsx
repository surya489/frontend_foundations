'use client';

import { useState, ChangeEvent } from 'react';

type Scale = 'c' | 'f';

interface TemperatureInputProps {
  temperature: string;
  onTemperatureChange: (temperature: string) => void;
  scale: Scale;
}

// Child component that needs to communicate with parent
function TemperatureInput({ temperature, onTemperatureChange, scale }: TemperatureInputProps) {
  const scaleNames: Record<Scale, string> = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  return (
    <div className="p-4 border rounded">
      <label className="block text-sm font-medium mb-2">
        Temperature in {scaleNames[scale]}:
      </label>
      <input
        type="number"
        value={temperature}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onTemperatureChange(e.target.value)}
        className="border p-2 rounded"
      />
    </div>
  );
}

// Parent component that manages shared state
function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState<Scale>('c');

  const handleCelsiusChange = (temperature: string) => {
    setTemperature(temperature);
    setScale('c');
  };

  const handleFahrenheitChange = (temperature: string) => {
    setTemperature(temperature);
    setScale('f');
  };

  // Conversion functions
  const toCelsius = (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9;
  const toFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;

  const celsius = scale === 'f' ? toCelsius(parseFloat(temperature) || 0) : parseFloat(temperature) || 0;
  const fahrenheit = scale === 'c' ? toFahrenheit(parseFloat(temperature) || 0) : parseFloat(temperature) || 0;

  return (
    <div className="space-y-4">
      <TemperatureInput
        scale="c"
        temperature={celsius.toString()}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit.toString()}
        onTemperatureChange={handleFahrenheitChange}
      />
      <div className="p-4 bg-blue-50 rounded">
        <p>Boiling point: {celsius >= 100 ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default function LiftingStatePage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Lifting State Up</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is Lifting State Up?</h2>
        <p className="text-gray-600 mt-2">
          Lifting state up is a pattern where you move state from child components to their common parent.
          This allows sibling components to share and synchronize state.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2 className="text-xl font-semibold">Why Lift State Up?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Share state between sibling components</li>
          <li>Synchronize related data</li>
          <li>Enable communication between components</li>
          <li>Centralize state management</li>
        </ul>
      </section>

      {/* EXAMPLE */}
      <section>
        <h2 className="text-xl font-semibold">Temperature Converter Example</h2>
        <p className="text-gray-600 mt-2 mb-4">
          Two input fields that stay synchronized - changing one updates the other.
        </p>
        <Calculator />
      </section>

      {/* CODE EXAMPLE */}
      <section>
        <h2 className="text-xl font-semibold">Code Structure</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Parent component manages shared state
function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  // Handlers passed to children
  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale('c');
  };

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}`}
        </pre>
      </section>

      {/* STEPS */}
      <section>
        <h2 className="text-xl font-semibold">Steps to Lift State Up</h2>
        <ol className="list-decimal ml-6 mt-2 text-gray-600 space-y-2">
          <li>Identify the common parent component</li>
          <li>Move state from children to parent</li>
          <li>Pass current state values as props to children</li>
          <li>Pass event handlers as props to children</li>
          <li>Children call handlers to update parent state</li>
        </ol>
      </section>

      {/* WHEN TO USE */}
      <section>
        <h2 className="text-xl font-semibold">When to Use Lifting State Up</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Multiple components need access to the same data</li>
          <li>Components need to stay synchronized</li>
          <li>Data flows between sibling components</li>
          <li>Avoiding prop drilling (but not always)</li>
        </ul>
      </section>

      {/* ALTERNATIVES */}
      <section>
        <h2 className="text-xl font-semibold">Alternatives</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><strong>Context API</strong> - For deeply nested components</li>
          <li><strong>State management libraries</strong> - Redux, Zustand, etc.</li>
          <li><strong>Component composition</strong> - Render props, compound components</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Lift state to the lowest common ancestor</li>
          <li>Keep state as close as possible to where it's used</li>
          <li>Use meaningful prop names for clarity</li>
          <li>Consider performance implications</li>
        </ul>
      </section>
    </main>
  );
}