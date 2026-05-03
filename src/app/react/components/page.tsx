export default function ComponentsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Components in React</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is a Component?</h2>
        <p className="text-gray-600 mt-2">
          A component is a reusable piece of UI. It is just a JavaScript function
          that returns JSX.
        </p>
      </section>

      {/* BASIC */}
      <section>
        <h2 className="text-xl font-semibold">Basic Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Hello() {
  return <h1>Hello World</h1>;
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          This is a simple React component.
        </p>
      </section>

      {/* USING COMPONENT */}
      <section>
        <h2 className="text-xl font-semibold">Using a Component</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function App() {
  return <Hello />;
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Components are used like HTML tags.
        </p>
      </section>

      {/* FLOW */}
      <section>
        <h2 className="text-xl font-semibold">
          Component Flow (Step-by-Step)
        </h2>

        <div className="bg-gray-100 p-4 rounded text-sm space-y-2">
          <p>1️⃣ You create a component</p>
          <pre>{`function Hello() {
  return <h1>Hello</h1>;
}`}</pre>

          <p>2️⃣ You use it inside another component</p>
          <pre>{`<Hello />`}</pre>

          <p>3️⃣ React calls the function</p>
          <p>4️⃣ It returns JSX</p>
          <p>5️⃣ JSX → Virtual DOM → Real DOM</p>
        </div>
      </section>

      {/* TYPES */}
      <section>
        <h2 className="text-xl font-semibold">
          Types of Components
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Functional Components (modern)</strong></li>
          <li><strong>Class Components (older)</strong></li>
        </ul>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Functional (Recommended)
function App() {
  return <h1>Hello</h1>;
}

// Class (Old)
class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}`}
        </pre>
      </section>

      {/* REUSABILITY */}
      <section>
        <h2 className="text-xl font-semibold">
          Reusability Example
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Button() {
  return <button>Click Me</button>;
}

function App() {
  return (
    <>
      <Button />
      <Button />
      <Button />
    </>
  );
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Same component reused multiple times.
        </p>
      </section>

      {/* MENTAL MODEL */}
      <section>
        <h2 className="text-xl font-semibold">
          Mental Model
        </h2>

        <div className="bg-gray-100 p-3 rounded text-sm">
          Component = Function → returns UI
        </div>

        <p className="text-gray-600 mt-2">
          React UI is built by combining multiple components together.
        </p>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">
          Common Mistakes
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Not capitalizing component names</li>
          <li>Returning multiple elements without wrapper</li>
          <li>Confusing components with functions</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Interview Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          A component is a reusable function that returns JSX. React applications
          are built by composing multiple components together, making the UI modular
          and maintainable.
        </p>
      </section>
    </main>
  );
}