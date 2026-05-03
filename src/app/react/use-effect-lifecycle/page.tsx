export default function UseEffectLifecyclePage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">useEffect Lifecycle</h1>

      <section>
        <h2 className="text-xl font-semibold">useEffect and Component Lifecycle</h2>
        <p className="text-gray-600 mt-2">
          useEffect allows functional components to perform side effects at different points
          in the component lifecycle, similar to class component lifecycle methods.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Lifecycle Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Class Component</th>
                <th className="border border-gray-300 p-2">Functional Component</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">componentDidMount</td>
                <td className="border border-gray-300 p-2">useEffect(() =&gt; ..., [])</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">componentDidUpdate</td>
                <td className="border border-gray-300 p-2">useEffect(() =&gt; ..., [deps])</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">componentWillUnmount</td>
                <td className="border border-gray-300 p-2">return () =&gt; ... in useEffect</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Effect Timing</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>After render</strong> - Effects run after the component renders</li>
          <li><strong>Asynchronous</strong> - Effects don't block the browser painting</li>
          <li><strong>Cleanup first</strong> - Cleanup runs before the next effect</li>
          <li><strong>Layout effects</strong> - useLayoutEffect runs synchronously</li>
        </ul>
      </section>
    </main>
  );
}