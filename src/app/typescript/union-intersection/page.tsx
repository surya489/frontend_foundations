export default function UnionIntersectionPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Union & Intersection Types
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">What are they?</h2>
        <p className="text-gray-600 mt-2">
          Union and intersection types allow you to combine multiple types
          to create flexible and reusable data structures.
        </p>
      </section>

      {/* UNION */}
      <section>
        <h2 className="text-xl font-semibold">1. Union Type ( | )</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let value: string | number;

value = "hello"; // 
value = 123;     // 
value = true;    // `}
        </pre>

        <p className="text-gray-600 mt-2">
          A union means a value can be one of multiple types.
        </p>
      </section>

      {/* UNION REAL */}
      <section>
        <h2 className="text-xl font-semibold">Real-World Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function printId(id: string | number) {
  console.log(id);
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Useful when inputs can have multiple formats.
        </p>
      </section>

      {/* TYPE NARROWING */}
      <section>
        <h2 className="text-xl font-semibold">Type Narrowing</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          You must check the type before using it safely.
        </p>
      </section>

      {/* INTERSECTION */}
      <section>
        <h2 className="text-xl font-semibold">2. Intersection Type ( & )</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type Person = { name: string };
type Employee = { role: string };

type Staff = Person & Employee;

const user: Staff = {
  name: "Jaya",
  role: "Developer",
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          Intersection combines multiple types into one.
        </p>
      </section>

      {/* INTERSECTION USE */}
      <section>
        <h2 className="text-xl font-semibold">Real-World Use</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type ApiResponse = {
  success: boolean;
};

type UserData = {
  name: string;
};

type Response = ApiResponse & UserData;`}
        </pre>
      </section>

      {/* DIFFERENCE */}
      <section>
        <h2 className="text-xl font-semibold">Key Difference</h2>

        <table className="w-full text-sm border mt-3">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Union (|)</td>
              <td className="p-2 border">Either one of the types</td>
            </tr>
            <tr>
              <td className="p-2 border">Intersection (&)</td>
              <td className="p-2 border">All types combined</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Not narrowing union types before usage</li>
          <li>Confusing union with intersection</li>
          <li>Using intersection with conflicting types</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Union types allow values to be one of multiple types, while intersection
          types combine multiple types into one. They are essential for building
          flexible and scalable type systems in TypeScript.
        </p>
      </section>
    </main>
  );
}