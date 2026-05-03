export default function UseCallbackPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">useCallback Hook</h1>

      <section>
        <h2 className="text-xl font-semibold">What is useCallback?</h2>
        <p className="text-gray-600 mt-2">
          useCallback is a React Hook that returns a memoized callback function. It prevents
          unnecessary re-renders of child components that depend on function props.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Child components</strong> - Passing callbacks to memoized children</li>
          <li><strong>Event handlers</strong> - Preventing unnecessary re-renders</li>
          <li><strong>useEffect dependencies</strong> - Stable function references</li>
          <li><strong>Custom hooks</strong> - Returning stable functions</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // No dependencies

  return <ChildComponent onIncrement={increment} />;
}

const ChildComponent = React.memo(({ onIncrement }) => {
  // Only re-renders when onIncrement changes
  return <button onClick={onIncrement}>Increment</button>;
});`}
        </pre>
      </section>
    </main>
  );
}