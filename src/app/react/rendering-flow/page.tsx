export default function RenderingFlowPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Rendering Flow</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is Rendering?</h2>
        <p className="text-gray-600 mt-2">
          Rendering is the process by which React converts your components into DOM elements
          that can be displayed in the browser. It involves several phases and optimization techniques.
        </p>
      </section>

      {/* RENDER PHASES */}
      <section>
        <h2 className="text-xl font-semibold">Render Phases</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-medium text-blue-800">1. Trigger Phase</h3>
            <p className="text-blue-700 mt-1">
              Something causes a component to render: initial mount, state change, prop change, or parent re-render.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h3 className="font-medium text-green-800">2. Render Phase</h3>
            <p className="text-green-700 mt-1">
              React calls your component function and creates a Virtual DOM representation.
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded">
            <h3 className="font-medium text-yellow-800">3. Reconciliation</h3>
            <p className="text-yellow-700 mt-1">
              React compares the new Virtual DOM with the previous one to find differences.
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded">
            <h3 className="font-medium text-red-800">4. Commit Phase</h3>
            <p className="text-red-700 mt-1">
              React updates the actual DOM with only the changes found during reconciliation.
            </p>
          </div>
        </div>
      </section>

      {/* VIRTUAL DOM */}
      <section>
        <h2 className="text-xl font-semibold">Virtual DOM</h2>
        <p className="text-gray-600 mt-2">
          The Virtual DOM is a lightweight JavaScript representation of the actual DOM.
          React uses it to optimize updates by minimizing direct DOM manipulations.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Virtual DOM representation
const virtualElement = {
  type: 'div',
  props: {
    className: 'container',
    children: [
      { type: 'h1', props: { children: 'Hello' } },
      { type: 'p', props: { children: 'World' } }
    ]
  }
};`}
        </pre>
      </section>

      {/* RECONCILIATION */}
      <section>
        <h2 className="text-xl font-semibold">Reconciliation</h2>
        <p className="text-gray-600 mt-2">
          Reconciliation is the algorithm React uses to diff the Virtual DOM and determine
          what actually needs to change in the real DOM.
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Element Type:</strong> Different types = complete replacement</li>
          <li><strong>Keys:</strong> Help identify which items have changed in lists</li>
          <li><strong>Props:</strong> Changed props trigger updates</li>
          <li><strong>Children:</strong> Recursive reconciliation of child components</li>
        </ul>
      </section>

      {/* RENDER TRIGGERS */}
      <section>
        <h2 className="text-xl font-semibold">What Triggers a Render?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Initial mount</strong> - Component first appears</li>
          <li><strong>State changes</strong> - useState setter called</li>
          <li><strong>Prop changes</strong> - Parent passes different props</li>
          <li><strong>Parent re-renders</strong> - Parent component re-renders</li>
          <li><strong>Context changes</strong> - Context value updates</li>
          <li><strong>Force update</strong> - forceUpdate() called</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Keep render functions pure and fast</li>
          <li>Use keys properly in lists</li>
          <li>Avoid creating new objects in render</li>
          <li>Use React.memo for expensive components</li>
          <li>Profile performance with React DevTools</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          React rendering involves creating Virtual DOM representations, comparing them (reconciliation),
          and updating only the changed parts of the real DOM. This process is triggered by state changes,
          prop updates, or parent re-renders. The Virtual DOM enables React's performance optimizations
          by batching updates and minimizing expensive DOM operations.
        </p>
      </section>
    </main>
  );
}