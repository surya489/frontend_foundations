import UseEffectDemo from '@/components/react/UseEffectDemo';

export default function UseEffectPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">useEffect Hook</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is useEffect?</h2>
        <p className="text-gray-600 mt-2">
          useEffect is a React Hook that allows you to perform side effects in functional components.
          Side effects include data fetching, subscriptions, manual DOM manipulation, and more.
        </p>
      </section>

      {/* SYNTAX */}
      <section>
        <h2 className="text-xl font-semibold">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`useEffect(() => {
  // Side effect code here
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]);`}
        </pre>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><strong>Effect function</strong> - Code that runs after render</li>
          <li><strong>Cleanup function</strong> - Optional cleanup (returned from effect)</li>
          <li><strong>Dependencies array</strong> - When to re-run the effect</li>
        </ul>
      </section>

      {/* BASIC EXAMPLE */}
      <section>
        <h2 className="text-xl font-semibold">Basic Example</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`import { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}`}
        </pre>
      </section>

      {/* INTERACTIVE DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <UseEffectDemo />
      </section>

      {/* DEPENDENCY ARRAY */}
      <section>
        <h2 className="text-xl font-semibold">Dependency Array</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">No dependencies - runs after every render</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`useEffect(() => {
  console.log('Runs after every render');
});`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Empty array - runs only once (on mount)</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`useEffect(() => {
  console.log('Runs only once');
}, []);`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">With dependencies - runs when deps change</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`useEffect(() => {
  console.log('Runs when count changes');
}, [count]);`}
            </pre>
          </div>
        </div>
      </section>

      {/* CLEANUP */}
      <section>
        <h2 className="text-xl font-semibold">Cleanup Function</h2>
        <p className="text-gray-600 mt-2">
          Cleanup functions run before the component unmounts or before the effect runs again.
          They're essential for preventing memory leaks.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`useEffect(() => {
  const subscription = subscribeToData();

  return () => {
    // Cleanup
    subscription.unsubscribe();
  };
}, []);`}
        </pre>
      </section>

      {/* COMMON PATTERNS */}
      <section>
        <h2 className="text-xl font-semibold">Common Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Data Fetching</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`useEffect(() => {
  fetchData().then(setData);
}, []);`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Event Listeners</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`useEffect(() => {
  window.addEventListener('resize', handler);
  return () => window.removeEventListener('resize', handler);
}, []);`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">DOM Manipulation</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Timers</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`useEffect(() => {
  const timer = setTimeout(doSomething, 1000);
  return () => clearTimeout(timer);
}, []);`}
            </pre>
          </div>
        </div>
      </section>

      {/* LIFECYCLE COMPARISON */}
      <section>
        <h2 className="text-xl font-semibold">Lifecycle Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Class Component</th>
                <th className="border border-gray-300 p-2">Functional Component</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">componentDidMount</td>
                <td className="border border-gray-300 p-2">useEffect(() =&gt ..., [])</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">componentDidUpdate</td>
                <td className="border border-gray-300 p-2">useEffect(() =&gt ..., [deps])</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">componentWillUnmount</td>
                <td className="border border-gray-300 p-2">return () =&gt ... in useEffect</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* COMMON USE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Data fetching</strong> - API calls and data loading</li>
          <li><strong>Event listeners</strong> - Adding/removing DOM event listeners</li>
          <li><strong>Subscriptions</strong> - WebSocket connections, timers</li>
          <li><strong>DOM manipulation</strong> - Direct DOM updates</li>
          <li><strong>Cleanup</strong> - Preventing memory leaks</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Always include dependencies in the dependency array</li>
          <li>Use multiple useEffect hooks for different concerns</li>
          <li>Always cleanup subscriptions and event listeners</li>
          <li>Avoid using useEffect for data fetching (consider useSWR, React Query)</li>
          <li>Use useEffect for side effects, not for computing derived state</li>
        </ul>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Missing dependencies in the dependency array</li>
          <li>Forgetting cleanup functions</li>
          <li>Using useEffect when useMemo or useCallback would be better</li>
          <li>Infinite re-renders due to missing dependencies</li>
          <li>Using stale closures in effects</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          useEffect is React's way to handle side effects in functional components. It runs after every render
          by default, but you can control when it runs using the dependency array. The cleanup function is crucial
          for preventing memory leaks. Think of it as componentDidMount, componentDidUpdate, and componentWillUnmount
          combined into one hook.
        </p>
      </section>
    </main>
  );
}