export default function CustomHooksPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Custom Hooks</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Custom Hooks?</h2>
        <p className="text-gray-600 mt-2">
          Custom hooks are JavaScript functions that use built-in React hooks. They allow you to
          extract and reuse stateful logic between components.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Creating a Custom Hook</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Usage
function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Rules of Hooks Apply</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Start with 'use'</strong> - Custom hooks must start with 'use'</li>
          <li><strong>Only in components</strong> - Call hooks only from React components</li>
          <li><strong>Top level</strong> - Don't call hooks inside loops or conditions</li>
          <li><strong>Same order</strong> - Hooks must be called in the same order</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Custom Hooks</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>useLocalStorage</strong> - Persist state in localStorage</li>
          <li><strong>useFetch</strong> - Handle API calls and loading states</li>
          <li><strong>useDebounce</strong> - Debounce user input</li>
          <li><strong>useWindowSize</strong> - Track window dimensions</li>
          <li><strong>usePrevious</strong> - Access previous value of a state</li>
        </ul>
      </section>
    </main>
  );
}