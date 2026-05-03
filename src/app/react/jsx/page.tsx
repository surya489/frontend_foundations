export default function JSXPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">JSX in React</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is JSX?</h2>
        <p className="text-gray-600 mt-2">
          JSX stands for JavaScript XML. It allows you to write HTML-like code
          inside JavaScript.
        </p>
      </section>

      {/* BASIC */}
      <section>
        <h2 className="text-xl font-semibold">Basic Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const element = <h1>Hello JSX</h1>;`}
        </pre>

        <p className="text-gray-600 mt-2">
          This looks like HTML, but it is actually JavaScript.
        </p>
      </section>

      {/* WITHOUT JSX */}
      <section>
        <h2 className="text-xl font-semibold">
          Without JSX (How React Actually Works)
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const element = React.createElement(
  "h1",
  null,
  "Hello JSX"
);`}
        </pre>

        <p className="text-gray-600 mt-2">
          JSX is just a shortcut for <code>React.createElement</code>.
        </p>
      </section>

      {/* FLOW */}
      <section>
        <h2 className="text-xl font-semibold">
          JSX Flow (Step-by-Step)
        </h2>

        <div className="bg-gray-100 p-4 rounded text-sm space-y-2">
          <p>1️⃣ You write JSX</p>
          <pre>{`<h1>Hello</h1>`}</pre>

          <p>2️⃣ Babel converts JSX → JavaScript</p>

          <pre>{`React.createElement("h1", null, "Hello")`}</pre>

          <p>3️⃣ React creates Virtual DOM</p>

          <pre>{`{
  type: "h1",
  props: { children: "Hello" }
}`}</pre>

          <p>4️⃣ React renders it into the browser</p>
        </div>
      </section>

      {/* EXPRESSIONS */}
      <section>
        <h2 className="text-xl font-semibold">
          Using JavaScript inside JSX
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const name = "Jaya";

<h1>Hello {name}</h1>`}
        </pre>

        <p className="text-gray-600 mt-2">
          Use <code>{`{}`}</code> to insert JavaScript inside JSX.
        </p>
      </section>

      {/* CONDITIONS */}
      <section>
        <h2 className="text-xl font-semibold">
          Conditional Rendering in JSX
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const isLoggedIn = true;

{isLoggedIn && <p>Welcome</p>}`}
        </pre>
      </section>

      {/* ATTRIBUTES */}
      <section>
        <h2 className="text-xl font-semibold">Attributes in JSX</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`<div className="box">Hello</div>`}
        </pre>

        <p className="text-gray-600 mt-2">
          Use <code>className</code> instead of <code>class</code>.
        </p>
      </section>

      {/* RULES */}
      <section>
        <h2 className="text-xl font-semibold">Rules of JSX</h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Return only one parent element</li>
          <li>Close all tags</li>
          <li>Use camelCase for attributes</li>
        </ul>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`//  Wrong
return (
  <h1>Hello</h1>
  <p>World</p>
);

//  Correct
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);`}
        </pre>
      </section>

      {/* MENTAL MODEL */}
      <section>
        <h2 className="text-xl font-semibold">
          Mental Model
        </h2>

        <div className="bg-gray-100 p-3 rounded text-sm">
          JSX = JavaScript that describes UI
        </div>

        <p className="text-gray-600 mt-2">
          It is not HTML — it is syntax sugar for JavaScript.
        </p>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">
          Common Mistakes
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Using <code>class</code> instead of <code>className</code></li>
          <li>Forgetting closing tags</li>
          <li>Returning multiple elements without wrapper</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Interview Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          JSX is a syntax extension for JavaScript that allows writing UI
          in a declarative way. It gets compiled into React.createElement
          and helps build readable component-based UI.
        </p>
      </section>
    </main>
  );
}