export default function LiteralTuplePage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Literal & Tuple Types
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">What are they?</h2>
        <p className="text-gray-600 mt-2">
          Literal types allow specific fixed values, while tuple types define
          arrays with fixed length and types.
        </p>
      </section>

      {/* LITERAL */}
      <section>
        <h2 className="text-xl font-semibold">1. Literal Types</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let status: "success" | "error";

status = "success"; // 
status = "pending"; // `}
        </pre>

        <p className="text-gray-600 mt-2">
          Literal types restrict values to specific allowed options.
        </p>
      </section>

      {/* LITERAL USE */}
      <section>
        <h2 className="text-xl font-semibold">Real-World Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type ButtonVariant = "primary" | "secondary";

function renderButton(variant: ButtonVariant) {
  console.log(variant);
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Useful for controlled options like UI variants.
        </p>
      </section>

      {/* TUPLE */}
      <section>
        <h2 className="text-xl font-semibold">2. Tuple Types</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let user: [string, number];

user = ["Jaya", 25]; // 
user = [25, "Jaya"]; // `}
        </pre>

        <p className="text-gray-600 mt-2">
          Tuples enforce order and type of elements.
        </p>
      </section>

      {/* TUPLE USE */}
      <section>
        <h2 className="text-xl font-semibold">Real-World Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function useState(): [number, (v: number) => void] {
  return [0, () => {}];
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          React hooks often return tuples.
        </p>
      </section>

      {/* READONLY TUPLE */}
      <section>
        <h2 className="text-xl font-semibold">Readonly Tuple</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const coords: readonly [number, number] = [10, 20];

// coords[0] = 30 `}
        </pre>
      </section>

      {/* DIFFERENCE */}
      <section>
        <h2 className="text-xl font-semibold">Difference</h2>

        <table className="w-full text-sm border mt-3">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Literal</td>
              <td className="p-2 border">Fixed allowed values</td>
            </tr>
            <tr>
              <td className="p-2 border">Tuple</td>
              <td className="p-2 border">Fixed structure array</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Using normal array instead of tuple</li>
          <li>Wrong order in tuple</li>
          <li>Not using literal types for fixed values</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Literal types restrict values to specific options, while tuples define
          fixed-length arrays with known types and order. They improve precision
          and prevent invalid data.
        </p>
      </section>
    </main>
  );
}