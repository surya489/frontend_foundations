"use client";

import React, { useState, useMemo, useCallback } from 'react';

interface ExpensiveComponentProps {
  count: number;
  onIncrement: () => void;
}

// Demo component to show optimization
function ExpensiveComponent({ count, onIncrement }: ExpensiveComponentProps) {
  console.log('ExpensiveComponent rendered');

  // Simulate expensive computation
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += count;
    }
    return result;
  }, [count]);

  return (
    <div className="p-4 border rounded bg-blue-50">
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button
        onClick={onIncrement}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}

const MemoizedExpensiveComponent = React.memo(ExpensiveComponent);

export default function OptimizingReRendersPage() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Without useCallback, this function is recreated on every render
  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Optimizing Re-renders</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What are Re-renders?</h2>
        <p className="text-gray-600 mt-2">
          Re-rendering happens when React updates the DOM to reflect changes in state or props.
          While necessary, unnecessary re-renders can hurt performance, especially with expensive components.
        </p>
      </section>

      {/* WHY OPTIMIZE */}
      <section>
        <h2 className="text-xl font-semibold">Why Optimize Re-renders?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Expensive computations run unnecessarily</li>
          <li>UI feels sluggish or unresponsive</li>
          <li>Higher CPU usage and battery drain</li>
          <li>Cascade of re-renders in component trees</li>
        </ul>
      </section>

      {/* REACT.MEMO */}
      <section>
        <h2 className="text-xl font-semibold">React.memo</h2>
        <p className="text-gray-600 mt-2">
          Prevents re-rendering if props haven't changed.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const MyComponent = React.memo((props) => {
  return <div>{props.value}</div>;
});`}
        </pre>
      </section>

      {/* USEMEMO */}
      <section>
        <h2 className="text-xl font-semibold">useMemo</h2>
        <p className="text-gray-600 mt-2">
          Memoizes expensive computations.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`}
        </pre>
      </section>

      {/* USECALLBACK */}
      <section>
        <h2 className="text-xl font-semibold">useCallback</h2>
        <p className="text-gray-600 mt-2">
          Memoizes functions to prevent unnecessary re-renders of child components.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Optimization Demo</h2>
        <p className="text-gray-600 mt-2 mb-4">
          Check the console to see when components re-render.
        </p>
        <div className="space-y-4">
          <MemoizedExpensiveComponent
            count={count}
            onIncrement={handleIncrement}
          />
          <button
            onClick={() => setOtherState(s => s + 1)}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Update Other State: {otherState}
          </button>
        </div>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Use React.memo for components that render often with same props</li>
          <li>Use useMemo for expensive calculations</li>
          <li>Use useCallback for functions passed as props</li>
          <li>Avoid premature optimization - measure first</li>
          <li>Consider component composition over deep prop drilling</li>
        </ul>
      </section>

      {/* WHEN TO OPTIMIZE */}
      <section>
        <h2 className="text-xl font-semibold">When to Optimize</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Component re-renders frequently</li>
          <li>Expensive computations in render</li>
          <li>Large component trees</li>
          <li>Performance issues noticed by users</li>
        </ul>
      </section>
    </main>
  );
}