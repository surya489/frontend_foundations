export default function TypeVsInterfacePage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Type vs Interface in TypeScript
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">
          What’s the Difference?
        </h2>
        <p className="text-gray-600 mt-2">
          Both <code>type</code> and <code>interface</code> are used to define
          the shape of objects. They are similar but have key differences.
        </p>
      </section>

      {/* BASIC EXAMPLE */}
      <section>
        <h2 className="text-xl font-semibold">Basic Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Using type
type User = {
  name: string;
  age: number;
};

// Using interface
interface User {
  name: string;
  age: number;
}`}
        </pre>
      </section>

      {/* EXTENDS */}
      <section>
        <h2 className="text-xl font-semibold">Extending</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Interface extend
interface Person {
  name: string;
}

interface Employee extends Person {
  role: string;
}

// Type extend (intersection)
type Person = { name: string };

type Employee = Person & {
  role: string;
};`}
        </pre>
      </section>

      {/* MERGING */}
      <section>
        <h2 className="text-xl font-semibold">
          Declaration Merging (Important)
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`interface User {
  name: string;
}

interface User {
  age: number;
}

// Result → merged
// { name: string; age: number }`}
        </pre>

        <p className="text-gray-600 mt-2">
          Interfaces can merge automatically. Types cannot.
        </p>
      </section>

      {/* FLEXIBILITY */}
      <section>
        <h2 className="text-xl font-semibold">Flexibility</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Type supports unions
type Status = "success" | "error";

// Interface  cannot do this`}
        </pre>
      </section>

      {/* WHEN TO USE */}
      <section>
        <h2 className="text-xl font-semibold">When to Use What?</h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Use <code>interface</code> for objects & class-based design</li>
          <li>Use <code>type</code> for unions, primitives, and complex types</li>
        </ul>
      </section>

      {/* COMPARISON TABLE */}
      <section>
        <h2 className="text-xl font-semibold">Comparison</h2>

        <table className="w-full text-sm border mt-3">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Feature</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Interface</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Objects</td>
              <td className="p-2 border">✔️</td>
              <td className="p-2 border">✔️</td>
            </tr>
            <tr>
              <td className="p-2 border">Extends</td>
              <td className="p-2 border">✔️ (&)</td>
              <td className="p-2 border">✔️ (extends)</td>
            </tr>
            <tr>
              <td className="p-2 border">Merging</td>
              <td className="p-2 border"></td>
              <td className="p-2 border">✔️</td>
            </tr>
            <tr>
              <td className="p-2 border">Unions</td>
              <td className="p-2 border">✔️</td>
              <td className="p-2 border"></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">
          Common Mistakes
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Using interface for unions </li>
          <li>Not understanding merging behavior</li>
          <li>Overusing type unnecessarily</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Interview Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Both type and interface define object shapes. Interfaces support
          declaration merging and are preferred for objects, while types are
          more flexible and support unions and complex compositions.
        </p>
      </section>
    </main>
  );
}