import DebounceThrottleDiagram from "@/components/js/DebounceThrottleDiagram";
import DebounceThrottleDemo from "@/components/js/DebounceThrottleDemo";

export default function DebounceThrottlePage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Debounce & Throttle</h1>

      <section>
        <h2 className="text-xl font-semibold">What are they?</h2>
        <p className="text-gray-600 mt-2">
          Debounce and throttle are techniques used to control how often a function runs.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Visual Difference</h2>
        <DebounceThrottleDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <DebounceThrottleDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Implementation</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// Debounce
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Throttle
function throttle(fn, delay) {
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
        <h2 className="text-xl font-semibold">Key Difference</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Debounce → runs after user stops action</li>
          <li>Throttle → runs at fixed intervals</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Debounce delays execution until a pause in activity, while throttle ensures
          execution happens at regular intervals. Debounce is useful for search inputs,
          while throttle is used in scroll or resize events.
        </p>
      </section>
    </main>
  );
}