export default function TypeInferencePage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Type Inference in TypeScript</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is Type Inference?</h2>
        <p className="text-gray-600 mt-2">
          TypeScript can automatically detect the type of a variable based on its value,
          so you don’t always need to explicitly define types.
        </p>
      </section>

      {/* BASIC EXAMPLE */}
      <section>
        <h2 className="text-xl font-semibold">Basic Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let age = 25;
// TypeScript infers → number

age = 30;   // success
age = "hi"; // error`}
        </pre>
      </section>

      {/* WHY IMPORTANT */}
      <section>
        <h2 className="text-xl font-semibold">Why It’s Useful</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Less code (no need to write types everywhere)</li>
          <li>Still provides type safety</li>
          <li>Better developer experience</li>
        </ul>
      </section>

      {/* ARRAYS */}
      <section>
        <h2 className="text-xl font-semibold">Inference with Arrays</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let numbers = [1, 2, 3];
// inferred → number[]

numbers.push(4);    // success
numbers.push("hi"); // error`}
        </pre>
      </section>

      {/* OBJECTS */}
      <section>
        <h2 className="text-xl font-semibold">Inference with Objects</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let user = {
  name: "Jaya",
  age: 25,
};

// inferred → { name: string; age: number }

user.name = "Surya"; // success
user.age = "hi";     // error`}
        </pre>
      </section>

      {/* FUNCTIONS */}
      <section>
        <h2 className="text-xl font-semibold">Inference in Functions</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function add(a: number, b: number) {
  return a + b;
}

// return type inferred → number`}
        </pre>
      </section>

      {/* WHEN TO USE EXPLICIT TYPES */}
      <section>
        <h2 className="text-xl font-semibold">
          When to Use Explicit Types
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Good inference
let count = 0;

// Better with explicit type
let data: any = fetchData();`}
        </pre>

        <p className="text-gray-600 mt-2">
          Use explicit types when:
        </p>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Type is not obvious</li>
          <li>Function parameters</li>
          <li>API responses</li>
        </ul>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let value: unknown;
// inferred → any (no type safety)

value = 10;
value = "hello";`}
        </pre>

        <p className="text-gray-600 mt-2">
          Always initialize variables to avoid unintended <code>any</code>.
        </p>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Type inference allows TypeScript to automatically determine types based on values.
          It reduces verbosity while maintaining type safety, but explicit types are preferred
          in complex scenarios.
        </p>
      </section>
    </main>
  );
}