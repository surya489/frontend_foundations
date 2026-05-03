export default function WhatIsReactPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">What is React?</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is React?</h2>
        <p className="text-gray-600 mt-2">
          React is a JavaScript library used to build user interfaces,
          especially for single-page applications. It allows you to create
          reusable UI components.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2 className="text-xl font-semibold">Why do we need React?</h2>

        <p className="text-gray-600 mt-2">
          Without React, managing UI becomes complex when the application grows.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Vanilla JS
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("count").innerText = "Updated";
});`}
        </pre>

        <p className="text-gray-600 mt-2">
          As the app grows, this becomes hard to manage and maintain.
        </p>
      </section>

      {/* REACT APPROACH */}
      <section>
        <h2 className="text-xl font-semibold">React Approach</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function App() {
  return <h1>Hello React</h1>;
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          React lets you describe UI using components instead of manually updating the DOM.
        </p>
      </section>

      {/* CORE IDEAS */}
      <section>
        <h2 className="text-xl font-semibold">Core Concepts</h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Components:</strong> Reusable UI blocks</li>
          <li><strong>State:</strong> Dynamic data</li>
          <li><strong>Props:</strong> Passing data between components</li>
          <li><strong>Virtual DOM:</strong> Efficient updates</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <h2 className="text-xl font-semibold">How React Works</h2>

        <p className="text-gray-600 mt-2">
          React does NOT update the UI directly. It first creates a virtual
          representation and then updates only what is necessary.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`State Change → Virtual DOM → Compare → Update Real DOM`}
        </pre>
      </section>

      {/* STEP FLOW */}
      <section>
        <h2 className="text-xl font-semibold">
          How React Renders (Step-by-Step)
        </h2>

        <div className="bg-gray-100 p-4 rounded text-sm space-y-2">
          <p>1️⃣ You write a component</p>
          <pre>{`function App() {
  return <h1>Hello</h1>;
}`}</pre>

          <p>2️⃣ JSX is converted into JavaScript</p>
          <pre>{`React.createElement("h1", null, "Hello")`}</pre>

          <p>3️⃣ React creates Virtual DOM</p>
          <pre>{`{
  type: "h1",
  props: { children: "Hello" }
}`}</pre>

          <p>4️⃣ React compares old vs new (Diffing)</p>
          <p>5️⃣ Updates only changed parts in Real DOM</p>
        </div>
      </section>

      {/* RENDER FLOW */}
      <section>
        <h2 className="text-xl font-semibold">Rendering Flow</h2>

        <div className="bg-gray-100 p-3 rounded text-sm">
          JSX → Virtual DOM → Compare → Real DOM Update
        </div>
      </section>

      {/* STATE FLOW */}
      <section>
        <h2 className="text-xl font-semibold">
          What Happens When State Changes?
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`setCount(count + 1);`}
        </pre>

        <div className="text-gray-600 mt-2 space-y-1">
          <p>1. State updates</p>
          <p>2. Component re-renders</p>
          <p>3. New Virtual DOM is created</p>
          <p>4. React compares with previous Virtual DOM</p>
          <p>5. Only changed parts update in UI</p>
        </div>
      </section>

      {/* MENTAL MODEL */}
      <section>
        <h2 className="text-xl font-semibold">
          Mental Model (Important)
        </h2>

        <div className="bg-gray-100 p-3 rounded text-sm">
          UI = function(state)
        </div>

        <p className="text-gray-600 mt-2">
          When state changes → React automatically updates the UI.
        </p>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Simple Demo</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
        </pre>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2 className="text-xl font-semibold">Advantages</h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Reusable components</li>
          <li>Fast rendering (Virtual DOM)</li>
          <li>Large ecosystem</li>
          <li>Easy to maintain</li>
        </ul>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Thinking React is a framework (it’s a library)</li>
          <li>Not understanding state properly</li>
          <li>Direct DOM manipulation</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          React is a JavaScript library for building component-based user interfaces.
          It uses a Virtual DOM to efficiently update the UI and promotes reusable,
          maintainable code structures.
        </p>
      </section>
    </main>
  );
}