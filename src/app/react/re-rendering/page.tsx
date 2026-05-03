export default function ReRenderingPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Re-rendering in React</h1>

      <section>
        <h2 className="text-xl font-semibold">What Causes Re-renders?</h2>
        <p className="text-gray-600 mt-2">
          Re-rendering occurs when React needs to update the UI. Understanding what triggers
          re-renders is crucial for optimizing React applications.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Causes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>State changes</strong> - useState setter functions</li>
          <li><strong>Prop changes</strong> - Parent passes different props</li>
          <li><strong>Parent re-renders</strong> - Parent component updates</li>
          <li><strong>Context changes</strong> - Context value updates</li>
          <li><strong>Force updates</strong> - forceUpdate() method</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Optimizing Re-renders</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Use React.memo for functional components</li>
          <li>Use useMemo for expensive calculations</li>
          <li>Use useCallback for event handlers</li>
          <li>Avoid inline objects and functions in render</li>
          <li>Use proper key props in lists</li>
        </ul>
      </section>
    </main>
  );
}