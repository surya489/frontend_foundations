export default function UseReducerPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">useReducer Hook</h1>

      <section>
        <h2 className="text-xl font-semibold">What is useReducer?</h2>
        <p className="text-gray-600 mt-2">
          useReducer is a React Hook for managing complex state logic. It's an alternative to useState
          that accepts a reducer function and returns the current state and a dispatch function.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Complex state</strong> - Multiple related state variables</li>
          <li><strong>Predictable updates</strong> - State depends on previous state</li>
          <li><strong>Action-based updates</strong> - Clear action types</li>
          <li><strong>Large components</strong> - Better organization than useState</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        -
      </button>
    </div>
  );
}`}
        </pre>
      </section>
    </main>
  );
}