export default function ReactMemoPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">React.memo</h1>

      <section>
        <h2 className="text-xl font-semibold">What is React.memo?</h2>
        <p className="text-gray-600 mt-2">
          React.memo is a higher-order component that memoizes functional components. It prevents
          unnecessary re-renders when the component's props haven't changed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Usage</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const MyComponent = React.memo(function MyComponent(props) {
  // Component logic
  return <div>{props.value}</div>;
});

// Or with arrow function
const MyComponent = React.memo(({ value }) => {
  return <div>{value}</div>;
});`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Expensive renders</strong> - Components that render slowly</li>
          <li><strong>Frequent re-renders</strong> - Components that re-render often</li>
          <li><strong>Pure components</strong> - Components with same output for same props</li>
          <li><strong>List items</strong> - Individual items in large lists</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Custom Comparison</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const MyComponent = React.memo(
  function MyComponent({ user }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // Custom comparison function
    return prevProps.user.id === nextProps.user.id;
  }
);`}
        </pre>
      </section>
    </main>
  );
}