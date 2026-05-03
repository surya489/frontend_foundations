export default function GenericConstraintsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Generic Constraints in TypeScript
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">What are Constraints?</h2>
        <p className="text-gray-600 mt-2">
          Generic constraints restrict the types that a generic can accept,
          ensuring safer and more predictable behavior.
        </p>
      </section>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">
          Problem Without Constraints
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function getLength<T>(value: T) {
  return value.length; //  error
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          TypeScript doesn't know if <code>T</code> has a{" "}
          <code>length</code> property.
        </p>
      </section>

      {/* SOLUTION */}
      <section>
        <h2 className="text-xl font-semibold">
          Using Constraints (extends)
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function getLength<T extends { length: number }>(value: T) {
  return value.length;
}

getLength("hello"); // 
getLength([1, 2, 3]); // `}
        </pre>

        <p className="text-gray-600 mt-2">
          Now <code>T</code> must have a <code>length</code>.
        </p>
      </section>

      {/* KEYOF */}
      <section>
        <h2 className="text-xl font-semibold">Using keyof</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { name: "Jaya", age: 25 };

getProperty(user, "name"); // 
// getProperty(user, "email"); `}
        </pre>

        <p className="text-gray-600 mt-2">
          <code>keyof</code> ensures only valid keys are used.
        </p>
      </section>

      {/* MULTIPLE */}
      <section>
        <h2 className="text-xl font-semibold">
          Multiple Constraints Example
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function merge<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}`}
        </pre>
      </section>

      {/* DEFAULT GENERICS */}
      <section>
        <h2 className="text-xl font-semibold">
          Default Generic Types
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type Box<T = string> = {
  value: T;
};

const box: Box = { value: "hello" };`}
        </pre>
      </section>

      {/* REAL WORLD */}
      <section>
        <h2 className="text-xl font-semibold">Real-World Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type ApiResponse<T extends object> = {
  data: T;
  success: boolean;
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          Ensures API data is always an object.
        </p>
      </section>

      {/* MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Not using constraints when needed</li>
          <li>Over-constraining generics</li>
          <li>Ignoring <code>keyof</code></li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Interview Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Generic constraints restrict types using <code>extends</code>.
          They ensure safe usage of properties and methods while maintaining
          flexibility in reusable components.
        </p>
      </section>
    </main>
  );
}