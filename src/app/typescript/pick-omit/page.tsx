export default function PickOmitPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Pick & Omit in TypeScript
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">What are Pick & Omit?</h2>
        <p className="text-gray-600 mt-2">
          Pick and Omit are utility types used to create new types by selecting
          or removing properties from an existing type.
        </p>
      </section>

      {/* BASE TYPE */}
      <section>
        <h2 className="text-xl font-semibold">Base Type</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};`}
        </pre>
      </section>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">
          Problem Without Pick/Omit
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`//  Rewriting type manually
type UserPreview = {
  id: number;
  name: string;
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          This leads to duplication and maintenance issues.
        </p>
      </section>

      {/* PICK */}
      <section>
        <h2 className="text-xl font-semibold">1. Pick</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type UserPreview = Pick<User, "id" | "name">;

const user: UserPreview = {
  id: 1,
  name: "Jaya",
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          Pick selects only specific properties from a type.
        </p>
      </section>

      {/* OMIT */}
      <section>
        <h2 className="text-xl font-semibold">2. Omit</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type SafeUser = Omit<User, "password">;

const user: SafeUser = {
  id: 1,
  name: "Jaya",
  email: "test@mail.com",
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          Omit removes specific properties from a type.
        </p>
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
              <td className="p-2 border">Pick</td>
              <td className="p-2 border">Select fields</td>
            </tr>
            <tr>
              <td className="p-2 border">Omit</td>
              <td className="p-2 border">Remove fields</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* REAL WORLD */}
      <section>
        <h2 className="text-xl font-semibold">Real-World Use Cases</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// API response (hide sensitive data)
type PublicUser = Omit<User, "password">;

// Form input (only needed fields)
type LoginInput = Pick<User, "email" | "password">;`}
        </pre>
      </section>

      {/* COMBINATION */}
      <section>
        <h2 className="text-xl font-semibold">
          Combining with Other Utility Types
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type OptionalUser = Partial<Pick<User, "name" | "email">>;`}
        </pre>
      </section>

      {/* MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Manually rewriting types instead of using Pick/Omit</li>
          <li>Using wrong keys</li>
          <li>Overusing utility types unnecessarily</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Pick selects specific properties, while Omit removes properties from a type.
          They help avoid duplication and make types reusable and maintainable.
        </p>
      </section>
    </main>
  );
}