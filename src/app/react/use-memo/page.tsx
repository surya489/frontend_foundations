export default function UseMemoPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">useMemo Hook</h1>

      <section>
        <h2 className="text-xl font-semibold">What is useMemo?</h2>
        <p className="text-gray-600 mt-2">
          useMemo is a React Hook that memoizes expensive calculations. It returns a memoized value
          that only recalculates when its dependencies change.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const memoizedValue = useMemo(() => {
  // Expensive calculation
  return computeExpensiveValue(a, b);
}, [a, b]);`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Expensive calculations</strong> - Complex computations</li>
          <li><strong>Derived state</strong> - Values computed from props/state</li>
          <li><strong>Reference stability</strong> - Preventing unnecessary re-renders</li>
          <li><strong>Filtering/sorting</strong> - Large datasets</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function TodoList({ todos, filter }) {
  const filteredTodos = useMemo(() => {
    console.log('Filtering todos...');
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }, [todos, filter]);

  return (
    <ul>
      {filteredTodos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}`}
        </pre>
      </section>
    </main>
  );
}