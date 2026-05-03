export default function OptionalReadonlyPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Optional & Readonly in TypeScript
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">What are Optional & Readonly?</h2>
        <p className="text-gray-600 mt-2">
          Optional properties allow flexibility in object structure, while readonly
          properties prevent modification after assignment.
        </p>
      </section>

      {/* OPTIONAL */}
      <section>
        <h2 className="text-xl font-semibold">1. Optional Properties (?)</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type User = {
  name: string;
  age?: number; // optional
};

const user: User = {
  name: "Jaya",
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          The <code>?</code> makes a property optional. It may or may not exist.
        </p>
      </section>

      {/* OPTIONAL BEHAVIOR */}
      <section>
        <h2 className="text-xl font-semibold">Handling Optional Values</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function printAge(user: User) {
  if (user.age !== undefined) {
    console.log(user.age);
  }
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Always check optional values before using them.
        </p>
      </section>

      {/* READONLY */}
      <section>
        <h2 className="text-xl font-semibold">2. Readonly Properties</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type User = {
  readonly id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Jaya",
};

// user.id = 2  error`}
        </pre>

        <p className="text-gray-600 mt-2">
          <code>readonly</code> ensures the value cannot be changed after initialization.
        </p>
      </section>

      {/* ARRAY READONLY */}
      <section>
        <h2 className="text-xl font-semibold">Readonly Arrays</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const numbers: readonly number[] = [1, 2, 3];

// numbers.push(4)  error`}
        </pre>

        <p className="text-gray-600 mt-2">
          Prevents modification like push, pop, etc.
        </p>
      </section>

      {/* COMBINED */}
      <section>
        <h2 className="text-xl font-semibold">
          Combining Optional & Readonly
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type User = {
  readonly id: number;
  name?: string;
};`}
        </pre>
      </section>

      {/* REAL WORLD */}
      <section>
        <h2 className="text-xl font-semibold">Real-World Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type ApiResponse = {
  readonly id: string;
  data?: string;
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          IDs are immutable, but data may or may not be present.
        </p>
      </section>

      {/* MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Not checking optional values before usage</li>
          <li>Trying to modify readonly properties</li>
          <li>Using optional when value is actually required</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Optional properties allow flexibility in object shape, while readonly
          ensures immutability. They help enforce safer and predictable data structures
          in applications.
        </p>
      </section>
    </main>
  );
}