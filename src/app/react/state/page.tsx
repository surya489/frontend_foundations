export default function StatePage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">State in React</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is State?</h2>
        <p className="text-gray-600 mt-2">
          State is data that can change over time and controls how a component renders.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2 className="text-xl font-semibold">Why Do We Need State?</h2>

        <p className="text-gray-600 mt-2">
          Without state, UI cannot update dynamically.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let count = 0;

<button onclick="count++">Click</button>`}
        </pre>

        <p className="text-gray-600 mt-2">
          This won't update UI automatically. React solves this using state.
        </p>
      </section>

      {/* USESTATE */}
      <section>
        <h2 className="text-xl font-semibold">Using useState</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [count, setCount] = useState(0);`}
        </pre>

        <p className="text-gray-600 mt-2">
          <strong>count</strong> → current value  
          <br />
          <strong>setCount</strong> → function to update value
        </p>
      </section>

      {/* EXAMPLE */}
      <section>
        <h2 className="text-xl font-semibold">Basic Example</h2>

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

      {/* FLOW */}
      <section>
        <h2 className="text-xl font-semibold">
          State Flow (Step-by-Step)
        </h2>

        <div className="bg-gray-100 p-4 rounded text-sm space-y-2">
          <p>1️⃣ Initial render</p>
          <pre>{`count = 0`}</pre>

          <p>2️⃣ User clicks button</p>

          <p>3️⃣ setCount(count + 1) is called</p>

          <p>4️⃣ State updates</p>

          <p>5️⃣ Component re-renders</p>

          <p>6️⃣ UI updates automatically</p>
        </div>
      </section>

      {/* HOW REACT HANDLES */}
      <section>
        <h2 className="text-xl font-semibold">
          What Happens Internally?
        </h2>

        <div className="bg-gray-100 p-3 rounded text-sm space-y-1">
          <p>State change → New Virtual DOM</p>
          <p>Compare with previous Virtual DOM</p>
          <p>Update only changed parts</p>
        </div>
      </section>

      {/* IMPORTANT RULES */}
      <section>
        <h2 className="text-xl font-semibold">
          Important Rules
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Never update state directly</li>
          <li>Always use setter function</li>
          <li>State updates are asynchronous</li>
        </ul>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`//  Wrong
count = count + 1;

//  Correct
setCount(count + 1);`}
        </pre>
      </section>

      {/* MULTIPLE STATE */}
      <section>
        <h2 className="text-xl font-semibold">
          Multiple State Values
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [name, setName] = useState("");
const [age, setAge] = useState(0);`}
        </pre>
      </section>

      {/* FUNCTION UPDATE */}
      <section>
        <h2 className="text-xl font-semibold">
          Functional Update (Important)
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`setCount(prev => prev + 1);`}
        </pre>

        <p className="text-gray-600 mt-2">
          Recommended when new value depends on previous state.
        </p>
      </section>

      {/* MENTAL MODEL */}
      <section>
        <h2 className="text-xl font-semibold">
          Mental Model
        </h2>

        <div className="bg-gray-100 p-3 rounded text-sm">
          UI = function(state)
        </div>

        <p className="text-gray-600 mt-2">
          Change state → React updates UI automatically.
        </p>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">
          Common Mistakes
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Updating state directly</li>
          <li>Not using functional updates</li>
          <li>Expecting immediate state update</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          State is a built-in mechanism in React that allows components to manage
          dynamic data. When state changes, React re-renders the component and updates
          the UI efficiently using the Virtual DOM.
        </p>
      </section>
    </main>
  );
}