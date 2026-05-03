export default function UseLayoutEffectPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">useLayoutEffect Hook</h1>

      <section>
        <h2 className="text-xl font-semibold">What is useLayoutEffect?</h2>
        <p className="text-gray-600 mt-2">
          useLayoutEffect is a version of useEffect that fires synchronously after all DOM mutations.
          It's useful for reading layout from the DOM and synchronously re-rendering.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">useEffect vs useLayoutEffect</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-blue-600">useEffect</h3>
            <ul className="text-sm text-gray-600 mt-1">
              <li>• Runs asynchronously</li>
              <li>• After browser paint</li>
              <li>• Won't block visual updates</li>
              <li>• Most common choice</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-green-600">useLayoutEffect</h3>
            <ul className="text-sm text-gray-600 mt-1">
              <li>• Runs synchronously</li>
              <li>• Before browser paint</li>
              <li>• Can block visual updates</li>
              <li>• Use for DOM measurements</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>DOM measurements</strong> - Getting element dimensions</li>
          <li><strong>Scroll positioning</strong> - Setting scroll positions</li>
          <li><strong>Layout calculations</strong> - Complex layout logic</li>
          <li><strong>Synchronous updates</strong> - When timing matters</li>
        </ul>
      </section>
    </main>
  );
}