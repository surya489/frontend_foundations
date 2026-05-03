export default function ObjectsArraysPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Objects & Arrays in TypeScript
      </h1>

      <section>
        <h2 className="text-xl font-semibold">Why This Matters?</h2>
        <p className="text-gray-600 mt-2">
          Most real-world data comes in the form of objects and arrays.
          TypeScript helps define their structure clearly and prevents mistakes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Typing Objects</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let user: { name: string; age: number } = {
  name: "Jaya",
  age: 25,
};`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Optional Properties</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let user: { name: string; age?: number } = {
  name: "Jaya",
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          Use <code>?</code> when a property is not required.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Readonly Properties</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let user: { readonly id: number; name: string } = {
  id: 1,
  name: "Jaya",
};

// user.id = 2 error`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Typing Arrays</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let numbers: number[] = [1, 2, 3];

let names: string[] = ["a", "b"];`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Generic Array Syntax</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let numbers: Array<number> = [1, 2, 3];`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Array of Objects</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let users: { name: string; age: number }[] = [
  { name: "Jaya", age: 25 },
  { name: "Surya", age: 30 },
];`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Nested Objects</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let user: {
  name: string;
  address: { city: string };
} = {
  name: "Jaya",
  address: { city: "Chennai" },
};`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Using Type Alias</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "Jaya",
  age: 25,
};`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Using Interface</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "Jaya",
  age: 25,
};`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Not defining object structure</li>
          <li>Using <code>any</code> for objects</li>
          <li>Forgetting optional properties</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          TypeScript allows strict typing of objects and arrays, ensuring data consistency.
          Using type aliases or interfaces improves readability and scalability in large applications.
        </p>
      </section>
    </main>
  );
}