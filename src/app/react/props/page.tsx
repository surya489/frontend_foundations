export default function PropsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Props in React</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What are Props?</h2>
        <p className="text-gray-600 mt-2">
          Props (short for properties) are used to pass data from a parent
          component to a child component.
        </p>
      </section>

      {/* BASIC */}
      <section>
        <h2 className="text-xl font-semibold">Basic Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return <Greeting name="Jaya" />;
}`}
        </pre>
      </section>

      {/* DESTRUCTURING */}
      <section>
        <h2 className="text-xl font-semibold">
          Using Destructuring (Recommended)
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}`}
        </pre>
      </section>

      {/* FLOW */}
      <section>
        <h2 className="text-xl font-semibold">
          Props Flow (Step-by-Step)
        </h2>

        <div className="bg-gray-100 p-4 rounded text-sm space-y-2">
          <p>1️⃣ Parent sends data</p>
          <pre>{`<Greeting name="Jaya" />`}</pre>

          <p>2️⃣ React creates props object</p>
          <pre>{`{ name: "Jaya" }`}</pre>

          <p>3️⃣ Child receives props</p>
          <pre>{`function Greeting(props)`}</pre>

          <p>4️⃣ Component uses props to render UI</p>
        </div>
      </section>

      {/* MULTIPLE PROPS */}
      <section>
        <h2 className="text-xl font-semibold">
          Multiple Props
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function User({ name, age }) {
  return <p>{name} - {age}</p>;
}

<User name="Jaya" age={25} />`}
        </pre>
      </section>

      {/* TYPES OF PROPS */}
      <section>
        <h2 className="text-xl font-semibold">
          Types of Props
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`<User name="Jaya" />        // string
<User age={25} />            // number
<User isAdmin={true} />      // boolean
<User data={{ id: 1 }} />    // object`}
        </pre>
      </section>

      {/* CHILDREN */}
      <section>
        <h2 className="text-xl font-semibold">
          Children Props
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Card({ children }) {
  return <div>{children}</div>;
}

<Card>
  <h1>Hello</h1>
</Card>`}
        </pre>

        <p className="text-gray-600 mt-2">
          <code>children</code> allows you to pass elements inside components.
        </p>
      </section>

      {/* ONE WAY FLOW */}
      <section>
        <h2 className="text-xl font-semibold">
          One-Way Data Flow
        </h2>

        <div className="bg-gray-100 p-3 rounded text-sm">
          Parent → Child (Props flow only downward)
        </div>

        <p className="text-gray-600 mt-2">
          Props cannot be modified inside the child component.
        </p>
      </section>

      {/* IMMUTABLE */}
      <section>
        <h2 className="text-xl font-semibold">
          Props are Read-Only
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Child(props) {
  props.name = "New"; //  Not allowed
}`}
        </pre>
      </section>

      {/* MENTAL MODEL */}
      <section>
        <h2 className="text-xl font-semibold">
          Mental Model
        </h2>

        <div className="bg-gray-100 p-3 rounded text-sm">
          Props = Input to a component
        </div>

        <p className="text-gray-600 mt-2">
          Component behaves like a function:
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`UI = function(props)`}
        </pre>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">
          Common Mistakes
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Trying to modify props</li>
          <li>Not using destructuring</li>
          <li>Confusing props with state</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Interview Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Props are used to pass data from parent to child components.
          They are immutable and follow a one-way data flow, making React
          predictable and easier to debug.
        </p>
      </section>
    </main>
  );
}