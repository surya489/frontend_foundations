import UseStateDemo from '@/components/react/UseStateDemo';

export default function UseStatePage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">useState Hook</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is useState?</h2>
        <p className="text-gray-600 mt-2">
          useState is a React Hook that allows you to add state to functional components.
          It returns an array with two elements: the current state value and a function to update it.
        </p>
      </section>

      {/* SYNTAX */}
      <section>
        <h2 className="text-xl font-semibold">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [state, setState] = useState(initialValue);`}
        </pre>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><strong>state</strong> - Current state value</li>
          <li><strong>setState</strong> - Function to update state</li>
          <li><strong>initialValue</strong> - Initial state value (can be any type)</li>
        </ul>
      </section>

      {/* BASIC EXAMPLE */}
      <section>
        <h2 className="text-xl font-semibold">Basic Example</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
        </pre>
      </section>

      {/* INTERACTIVE DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <UseStateDemo />
      </section>

      {/* DIFFERENT DATA TYPES */}
      <section>
        <h2 className="text-xl font-semibold">Different Data Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Numbers</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`const [count, setCount] = useState(0);`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Strings</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`const [name, setName] = useState('');`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Booleans</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`const [isOpen, setIsOpen] = useState(false);`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Objects</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`const [user, setUser] = useState({ name: '', age: 0 });`}
            </pre>
          </div>
        </div>
      </section>

      {/* UPDATING OBJECTS */}
      <section>
        <h2 className="text-xl font-semibold">Updating Objects</h2>
        <p className="text-gray-600 mt-2">
          When updating objects, you need to spread the existing properties to avoid losing data.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [user, setUser] = useState({ name: '', age: 0 });

//  Wrong - loses other properties
setUser({ name: 'John' });

//  Correct - preserves existing properties
setUser(prev => ({ ...prev, name: 'John' }));`}
        </pre>
      </section>

      {/* FUNCTIONAL UPDATES */}
      <section>
        <h2 className="text-xl font-semibold">Functional Updates</h2>
        <p className="text-gray-600 mt-2">
          Use functional updates when the new state depends on the previous state.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [count, setCount] = useState(0);

// Good for dependent updates
setCount(prevCount => prevCount + 1);

// Also prevents stale closure issues
setTimeout(() => {
  setCount(prev => prev + 1);
}, 1000);`}
        </pre>
      </section>

      {/* LAZY INITIALIZATION */}
      <section>
        <h2 className="text-xl font-semibold">Lazy Initialization</h2>
        <p className="text-gray-600 mt-2">
          For expensive initial computations, use a function as the initial value.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [value, setValue] = useState(() => {
  // Expensive computation
  return computeExpensiveValue();
});`}
        </pre>
      </section>

      {/* COMMON USE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Form inputs</strong> - Managing input values</li>
          <li><strong>Toggles</strong> - Show/hide components</li>
          <li><strong>Counters</strong> - Increment/decrement values</li>
          <li><strong>Loading states</strong> - Managing async operations</li>
          <li><strong>Modal visibility</strong> - Open/close modals</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Use functional updates for state dependent on previous value</li>
          <li>Group related state in objects when it makes sense</li>
          <li>Use lazy initialization for expensive computations</li>
          <li>Avoid deep nesting of state objects</li>
          <li>Consider useReducer for complex state logic</li>
        </ul>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Mutating state directly instead of using setter</li>
          <li>Forgetting to spread objects when updating</li>
          <li>Using state in async operations without functional updates</li>
          <li>Initializing state with undefined values</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          useState is React's primary way to add state to functional components. It returns a stateful value
          and a function to update it. State updates trigger re-renders, and React batches multiple updates
          for performance. Always use the setter function and functional updates when the new state depends
          on the previous state to avoid stale closure issues.
        </p>
      </section>
    </main>
  );
}