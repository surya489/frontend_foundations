import FunctionTypesDiagram from "@/components/js/FunctionTypesDiagram";
import FunctionDemo from "@/components/js/FunctionDemo";

export default function FunctionsDeepPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Functions Deep Dive</h1>

      <section>
        <h2 className="text-xl font-semibold">What is a Function?</h2>
        <p className="text-gray-600 mt-2">
          A function is a block of code designed to perform a specific task.
          It can take inputs (parameters) and return an output.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Types of Functions</h2>
        <FunctionTypesDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// Declaration
function add(a, b) {
  return a + b;
}

// Expression
const add = function(a, b) {
  return a + b;
};

// Arrow
const add = (a, b) => a + b;`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Parameters & Return</h2>
        <p className="text-gray-600 mt-2">
          Parameters are inputs to a function. The return statement sends back a result.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Callback Functions</h2>
        <p className="text-gray-600 mt-2">
          A callback is a function passed as an argument to another function.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function process(fn) {
  return fn(5);
}

process(x => x * 2);`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <FunctionDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Important Connection</h2>
        <p className="text-gray-600 mt-2">
          Functions can be passed as values. This leads to Higher Order Functions
          like map, filter, and reduce.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Functions in JavaScript are first-class citizens, meaning they can be
          assigned to variables, passed as arguments, and returned from other functions.
          This enables powerful patterns like callbacks and higher-order functions.
        </p>
      </section>
    </main>
  );
}