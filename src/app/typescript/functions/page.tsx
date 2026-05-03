export default function FunctionsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Functions in TypeScript
      </h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">Why Functions Need Types?</h2>
        <p className="text-gray-600 mt-2">
          TypeScript ensures functions receive correct inputs and return expected outputs,
          preventing runtime errors.
        </p>
      </section>

      {/* BASIC */}
      <section>
        <h2 className="text-xl font-semibold">Basic Function</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function add(a: number, b: number): number {
  return a + b;
}

// add(1, "2") error`}
        </pre>
      </section>

      {/* RETURN TYPE */}
      <section>
        <h2 className="text-xl font-semibold">Return Type</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function greet(): string {
  return "Hello";
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          TypeScript can infer return type, but explicit types improve clarity.
        </p>
      </section>

      {/* OPTIONAL PARAMS */}
      <section>
        <h2 className="text-xl font-semibold">Optional Parameters</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function greet(name?: string) {
  return "Hello " + (name || "Guest");
}`}
        </pre>
      </section>

      {/* DEFAULT PARAMS */}
      <section>
        <h2 className="text-xl font-semibold">Default Parameters</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function greet(name: string = "Guest") {
  return "Hello " + name;
}`}
        </pre>
      </section>

      {/* REST PARAMS */}
      <section>
        <h2 className="text-xl font-semibold">Rest Parameters</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function sum(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}`}
        </pre>
      </section>

      {/* FUNCTION TYPES */}
      <section>
        <h2 className="text-xl font-semibold">Function Type</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let multiply: (a: number, b: number) => number;

multiply = (x, y) => x * y;`}
        </pre>
      </section>

      {/* CALLBACK */}
      <section>
        <h2 className="text-xl font-semibold">Callback Functions</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function process(
  value: number,
  callback: (n: number) => number
) {
  return callback(value);
}`}
        </pre>
      </section>

      {/* VOID */}
      <section>
        <h2 className="text-xl font-semibold">void Return Type</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function log(): void {
  console.log("Hello");
}`}
        </pre>
      </section>

      {/* NEVER */}
      <section>
        <h2 className="text-xl font-semibold">never Return Type</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function throwError(): never {
  throw new Error("Error");
}`}
        </pre>
      </section>

      {/* OVERLOADS */}
      <section>
        <h2 className="text-xl font-semibold">Function Overloads</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: any, b: any) {
  return a + b;
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Allows different function signatures with same implementation.
        </p>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Not typing parameters</li>
          <li>Overusing <code>any</code></li>
          <li>Ignoring return types</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          TypeScript functions enforce type safety for parameters and return values.
          Features like optional parameters, overloads, and callbacks improve flexibility
          while maintaining strict type checking.
        </p>
      </section>
    </main>
  );
}