import CurryDemo from "@/components/js/problems/CurryDemo";

export default function CurryFunctionPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Curry Function</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Currying?</h2>
        <p className="text-gray-600 mt-2">
          Currying is the process of converting a function with multiple arguments
          into a sequence of functions each taking one argument.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Normal
sum(1, 2, 3)

// Curried
sum(1)(2)(3)`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Implementation</h2>

        <h3 className="font-medium mt-4">1. Basic Curry</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}`}
        </pre>

        <h3 className="font-medium mt-4">2. Generic Curry Function</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...next) =>
        curried(...args, ...next);
    }
  };
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <CurryDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Each function remembers previous values (closure)</li>
          <li>Arguments are collected step-by-step</li>
          <li>Final function executes when all arguments are provided</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Reusable functions</li>
          <li>Partial application</li>
          <li>Functional programming</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Currying transforms a function into a chain of functions that each take one argument.
          It relies on closures and is useful for creating reusable and composable functions.
        </p>
      </section>
    </main>
  );
}