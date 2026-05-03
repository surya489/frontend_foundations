import ThrottleDiagram from "@/components/js/ThrottleDiagram";
import ThrottleDemo from "@/components/js/ThrottleDemo";

export default function ThrottlePage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Throttle</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Throttle?</h2>
        <p className="text-gray-600 mt-2">
          Throttle ensures a function runs at most once in a given time interval,
          no matter how many times it is triggered.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Visual Understanding</h2>
        <ThrottleDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <ThrottleDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Implementation</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      fn(...args);
      lastCall = now;
    }
  };
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Scroll events</li>
          <li>Window resize</li>
          <li>Button spam prevention</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Throttle limits function execution to once per specified interval.
          It is useful for performance optimization in events like scroll and resize.
        </p>
      </section>
    </main>
  );
}