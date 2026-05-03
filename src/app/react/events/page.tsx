import EventDemo from "@/components/react/EventDemo";

export default function EventsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Events in React</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What are Events?</h2>
        <p className="text-gray-600 mt-2">
          Events in React are user interactions like clicks, form submissions, key presses, etc.
          React provides a synthetic event system that normalizes browser differences.
        </p>
      </section>

      {/* BASIC SYNTAX */}
      <section>
        <h2 className="text-xl font-semibold">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`<button onClick={handleClick}>
  Click me
</button>`}
        </pre>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><strong>onClick</strong> - Event handler prop (camelCase)</li>
          <li><strong>handleClick</strong> - Function to execute</li>
          <li><strong>Event object</strong> - Passed automatically to handler</li>
        </ul>
      </section>

      {/* EVENT HANDLER */}
      <section>
        <h2 className="text-xl font-semibold">Event Handler Function</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  // event is a SyntheticEvent
  console.log('Button clicked!');
}

// Or with arrow function
const handleClick = (event) => {
  console.log('Button clicked!');
};`}
        </pre>
      </section>

      {/* INTERACTIVE DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <EventDemo />
      </section>

      {/* COMMON EVENTS */}
      <section>
        <h2 className="text-xl font-semibold">Common Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Mouse Events</h3>
            <ul className="text-sm text-gray-600 mt-1 space-y-1">
              <li><code>onClick</code> - Mouse click</li>
              <li><code>onDoubleClick</code> - Double click</li>
              <li><code>onMouseEnter</code> - Mouse enters element</li>
              <li><code>onMouseLeave</code> - Mouse leaves element</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Form Events</h3>
            <ul className="text-sm text-gray-600 mt-1 space-y-1">
              <li><code>onChange</code> - Input value changes</li>
              <li><code>onSubmit</code> - Form submission</li>
              <li><code>onFocus</code> - Element gains focus</li>
              <li><code>onBlur</code> - Element loses focus</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Keyboard Events</h3>
            <ul className="text-sm text-gray-600 mt-1 space-y-1">
              <li><code>onKeyDown</code> - Key is pressed</li>
              <li><code>onKeyUp</code> - Key is released</li>
              <li><code>onKeyPress</code> - Key is pressed (deprecated)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Other Events</h3>
            <ul className="text-sm text-gray-600 mt-1 space-y-1">
              <li><code>onScroll</code> - Element is scrolled</li>
              <li><code>onLoad</code> - Resource finished loading</li>
              <li><code>onError</code> - Error occurred</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EVENT OBJECT */}
      <section>
        <h2 className="text-xl font-semibold">Event Object</h2>
        <p className="text-gray-600 mt-2">
          React's SyntheticEvent is a cross-browser wrapper around the browser's native event.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function handleClick(event) {
  event.preventDefault();     // Prevent default behavior
  event.stopPropagation();   // Stop event bubbling

  console.log(event.target);  // Element that triggered event
  console.log(event.currentTarget); // Element with handler
}`}
        </pre>
      </section>

      {/* PREVENTING DEFAULT */}
      <section>
        <h2 className="text-xl font-semibold">Preventing Default Behavior</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function handleSubmit(event) {
  event.preventDefault(); // Prevents page reload
  // Handle form submission
}

return (
  <form onSubmit={handleSubmit}>
    <input type="text" />
    <button type="submit">Submit</button>
  </form>
);`}
        </pre>
      </section>

      {/* EVENT BUBBLING */}
      <section>
        <h2 className="text-xl font-semibold">Event Bubbling</h2>
        <p className="text-gray-600 mt-2">
          Events bubble up from child to parent elements. Use stopPropagation() to prevent this.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`<div onClick={() => console.log('Parent clicked')}>
  <button onClick={(e) => {
    e.stopPropagation(); // Prevents parent handler
    console.log('Button clicked');
  }}>
    Click me
  </button>
</div>`}
        </pre>
      </section>

      {/* INLINE HANDLERS */}
      <section>
        <h2 className="text-xl font-semibold">Inline Handlers</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`//  Good for simple cases
<button onClick={() => console.log('Hello!')}>
  Click me
</button>

//  Avoid for complex logic
<button onClick={() => {
  if (condition) {
    doSomething();
    thenDoSomethingElse();
  }
}}>
  Complex logic
</button>`}
        </pre>
      </section>

      {/* PASSING PARAMETERS */}
      <section>
        <h2 className="text-xl font-semibold">Passing Parameters</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`//  Correct way
<button onClick={() => handleClick(item.id)}>
  Delete {item.name}
</button>

//  Wrong way (calls function immediately)
<button onClick={handleClick(item.id)}>
  Delete {item.name}
</button>`}
        </pre>
      </section>

      {/* COMMON USE CASES */}
      <section>
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Button clicks</strong> - Triggering actions</li>
          <li><strong>Form submissions</strong> - Handling form data</li>
          <li><strong>Input changes</strong> - Updating state on user input</li>
          <li><strong>Keyboard shortcuts</strong> - Custom key combinations</li>
          <li><strong>Mouse interactions</strong> - Hover, drag, etc.</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Use arrow functions or bind in class components</li>
          <li>Prevent default behavior when needed</li>
          <li>Stop propagation only when necessary</li>
          <li>Extract complex handlers to separate functions</li>
          <li>Use descriptive handler names</li>
        </ul>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Calling functions instead of passing them</li>
          <li>Forgetting to prevent default on forms</li>
          <li>Not stopping propagation when needed</li>
          <li>Using inline complex logic</li>
          <li>Mixing HTML and JSX event naming</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          React events are synthetic events that wrap native browser events for consistency across browsers.
          Event handlers are camelCase (onClick vs onclick) and receive a SyntheticEvent object. Always prevent
          default behavior for forms and be careful with event bubbling. Use arrow functions for inline handlers
          to avoid binding issues.
        </p>
      </section>
    </main>
  );
}