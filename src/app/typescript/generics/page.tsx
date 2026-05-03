export default function GenericsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Generics in TypeScript
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">What are Generics?</h2>
        <p className="text-gray-600 mt-2">
          Generics allow you to create reusable components that work with
          different types while maintaining type safety.
        </p>
      </section>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">The Problem Without Generics</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function identity(value: any) {
  return value;
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Using <code>any</code> removes type safety.
        </p>
      </section>

      {/* GENERIC BASIC */}
      <section>
        <h2 className="text-xl font-semibold">Basic Generic Function</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10);
const str = identity<string>("hello");`}
        </pre>

        <p className="text-gray-600 mt-2">
          <code>T</code> represents a type that is decided at runtime.
        </p>
      </section>

      {/* INFERENCE */}
      <section>
        <h2 className="text-xl font-semibold">Type Inference</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const value = identity(10); // inferred as number`}
        </pre>

        <p className="text-gray-600 mt-2">
          TypeScript can automatically infer the type.
        </p>
      </section>

      {/* ARRAY GENERIC */}
      <section>
        <h2 className="text-xl font-semibold">Generics with Arrays</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function getFirst<T>(arr: T[]): T {
  return arr[0];
}`}
        </pre>
      </section>

      {/* GENERIC TYPE */}
      <section>
        <h2 className="text-xl font-semibold">Generic Types</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type ApiResponse<T> = {
  data: T;
  success: boolean;
};

const response: ApiResponse<string> = {
  data: "Hello",
  success: true,
};`}
        </pre>
      </section>

      {/* MULTIPLE GENERICS */}
      <section>
        <h2 className="text-xl font-semibold">Multiple Generics</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function pair<K, V>(key: K, value: V) {
  return { key, value };
}`}
        </pre>
      </section>

      {/* CONSTRAINT PREVIEW */}
      <section>
        <h2 className="text-xl font-semibold">
          Why Constraints Matter?
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function getLength<T>(value: T) {
  return value.length; //  error
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Not all types have <code>length</code>.
        </p>
      </section>

      {/* REAL WORLD */}
      <section>
        <h2 className="text-xl font-semibold">Real-World Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function fetchData<T>(): Promise<T> {
  return fetch("/api").then(res => res.json());
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Used in API typing and reusable logic.
        </p>
      </section>

      {/* MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Using <code>any</code> instead of generics</li>
          <li>Overusing generics unnecessarily</li>
          <li>Not understanding type inference</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Generics allow reusable and type-safe code by parameterizing types.
          They help maintain flexibility without sacrificing type safety,
          especially in functions, APIs, and reusable components.
        </p>
      </section>
    </main>
  );
}