import ConditionalDemo from '@/components/react/ConditionalDemo';

export default function ConditionalRenderingPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Conditional Rendering</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is Conditional Rendering?</h2>
        <p className="text-gray-600 mt-2">
          Conditional rendering is showing different UI based on conditions. It's React's way of
          displaying content only when certain criteria are met.
        </p>
      </section>

      {/* BASIC IF STATEMENT */}
      <section>
        <h2 className="text-xl font-semibold">Using if Statements</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function UserGreeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in.</h1>;
}`}
        </pre>
      </section>

      {/* TERNARY OPERATOR */}
      <section>
        <h2 className="text-xl font-semibold">Ternary Operator</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function UserGreeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign in.</h1>
      )}
    </div>
  );
}`}
        </pre>
      </section>

      {/* INTERACTIVE DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <ConditionalDemo />
      </section>

      {/* LOGICAL AND */}
      <section>
        <h2 className="text-xl font-semibold">Logical && Operator</h2>
        <p className="text-gray-600 mt-2">
          Use && when you want to render something only if the condition is true.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Mailbox({ messages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {messages.length > 0 && (
        <p>You have {messages.length} unread messages.</p>
      )}
    </div>
  );
}`}
        </pre>
      </section>

      {/* INLINE CONDITIONALS */}
      <section>
        <h2 className="text-xl font-semibold">Inline Conditionals</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function LoginButton({ isLoggedIn }) {
  return (
    <button>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
}`}
        </pre>
      </section>

      {/* SWITCH STATEMENT */}
      <section>
        <h2 className="text-xl font-semibold">Switch Statement</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function StatusMessage({ status }) {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'success':
      return <p>Data loaded successfully!</p>;
    case 'error':
      return <p>Error loading data.</p>;
    default:
      return <p>Unknown status.</p>;
  }
}`}
        </pre>
      </section>

      {/* EARLY RETURNS */}
      <section>
        <h2 className="text-xl font-semibold">Early Returns</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function WarningBanner({ showWarning }) {
  if (!showWarning) {
    return null; // Don't render anything
  }

  return (
    <div className="warning">
      Warning: This is important!
    </div>
  );
}`}
        </pre>
      </section>

      {/* CONDITIONAL STYLING */}
      <section>
        <h2 className="text-xl font-semibold">Conditional Styling</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Button({ isPrimary }) {
  return (
    <button
      className={isPrimary ? 'btn-primary' : 'btn-secondary'}
    >
      Click me
    </button>
  );
}

// Or with template literals
<button className=\`btn \${isPrimary ? 'primary' : 'secondary'}\`>
  Click me
</button>`}
        </pre>
      </section>

      {/* RENDERING LISTS */}
      <section>
        <h2 className="text-xl font-semibold">Conditional List Rendering</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function TodoList({ todos, showCompleted }) {
  const filteredTodos = showCompleted
    ? todos
    : todos.filter(todo => !todo.completed);

  return (
    <ul>
      {filteredTodos.map(todo => (
        <li key={todo.id}>
          {todo.completed ? (
            <del>{todo.text}</del>
          ) : (
            <span>{todo.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
}`}
        </pre>
      </section>

      {/* COMMON PATTERNS */}
      <section>
        <h2 className="text-xl font-semibold">Common Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Loading States</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`{isLoading ? (
  <Spinner />
) : (
  <DataComponent data={data} />
)}`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Error States</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`{error ? (
  <ErrorMessage error={error} />
) : (
  <SuccessContent />
)}`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Authentication</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`{user ? (
  <Dashboard user={user} />
) : (
  <LoginForm />
)}`}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Feature Flags</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`{featureEnabled && (
  <NewFeature />
)}`}
            </pre>
          </div>
        </div>
      </section>

      {/* COMMON USE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Loading states</strong> - Show spinner while data loads</li>
          <li><strong>Authentication</strong> - Different UI for logged in/out users</li>
          <li><strong>Permissions</strong> - Show/hide features based on user roles</li>
          <li><strong>Form validation</strong> - Display errors when validation fails</li>
          <li><strong>Responsive design</strong> - Different layouts for different screen sizes</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Use ternary operators for simple conditions</li>
          <li>Use && for conditional rendering without else</li>
          <li>Extract complex conditions to variables</li>
          <li>Use early returns to avoid deep nesting</li>
          <li>Consider using enums for multiple conditions</li>
        </ul>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Using && with numbers (0 renders as false)</li>
          <li>Deeply nested ternary operators</li>
          <li>Not handling all possible states</li>
          <li>Mixing conditional logic with JSX</li>
          <li>Forgetting keys in conditional lists</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Conditional rendering in React uses JavaScript conditional statements within JSX. Use ternary operators
          for simple if-else, && for conditional rendering, and early returns to avoid complex nesting. Always
          ensure all possible states are handled to prevent rendering undefined or null unexpectedly.
        </p>
      </section>
    </main>
  );
}