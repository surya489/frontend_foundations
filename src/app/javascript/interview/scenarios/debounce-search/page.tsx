import DebounceSearchDemo from "@/components/js/scenarios/DebounceSearchDemo";

export default function DebounceSearchPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Debounce Search Input
      </h1>

      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          When users type in a search box, an API call is triggered on every keystroke.
          This leads to unnecessary network calls and performance issues.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Naive Approach</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`onChange → call API every time`}
        </pre>

        <p className="text-gray-600 mt-2">
          This causes too many API requests and can slow down the app.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Optimized Approach</h2>

        <p className="text-gray-600 mt-2">
          Use debounce to delay API calls until the user stops typing.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let timer;

function debounce(fn, delay) {
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <DebounceSearchDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Clear previous timer</li>
          <li>Set new timer</li>
          <li>Execute function after delay</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Real-World Use</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Search inputs</li>
          <li>Auto-suggestions</li>
          <li>Form validation</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Debounce delays function execution until after a certain time.
          It is used to optimize performance by reducing unnecessary function calls.
        </p>
      </section>
    </main>
  );
}