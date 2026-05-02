import GeneratorDiagram from "@/components/js/GeneratorDiagram";
import GeneratorDemo from "@/components/js/GeneratorDemo";

export default function GeneratorsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Generator Functions</h1>

      <section>
        <h2 className="text-xl font-semibold">What is a Generator?</h2>
        <p className="text-gray-600 mt-2">
          A generator is a special function that can pause and resume execution.
          It uses <strong>function*</strong> and <strong>yield</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`function* myGenerator() {
  yield 1;
  yield 2;
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How it Works</h2>
        <GeneratorDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <GeneratorDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Why Use Generators?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Control execution step-by-step</li>
          <li>Lazy data generation (large datasets)</li>
          <li>Custom iterators</li>
          <li>Advanced async control (before async/await)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Real Example</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const gen = idGenerator();
gen.next().value; // 1
gen.next().value; // 2`}
        </pre>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Generator functions allow pausing and resuming execution using yield.
          They return an iterator object, and each call to next() continues from
          the previous state. This is useful for lazy evaluation and controlled execution.
        </p>
      </section>
    </main>
  );
}