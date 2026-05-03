export default function PartialRequiredPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Partial & Required in TypeScript
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">
          What are Partial & Required?
        </h2>
        <p className="text-gray-600 mt-2">
          Partial and Required are utility types that control whether
          properties in a type are optional or mandatory.
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
};`}
        </pre>
      </section>

      {/* PARTIAL */}
      <section>
        <h2 className="text-xl font-semibold">1. Partial</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type UpdateUser = Partial<User>;

const user: UpdateUser = {
  name: "Jaya",
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          Makes all properties optional.
        </p>
      </section>

      {/* WHY PARTIAL */}
      <section>
        <h2 className="text-xl font-semibold">
          Why Use Partial?
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function updateUser(data: Partial<User>) {
  // Only updated fields are passed
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Useful for update operations (PATCH APIs).
        </p>
      </section>

      {/* REQUIRED */}
      <section>
        <h2 className="text-xl font-semibold">2. Required</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type FullUser = Required<User>;

const user: FullUser = {
  id: 1,
  name: "Jaya",
  email: "test@mail.com",
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          Makes all properties mandatory.
        </p>
      </section>

      {/* WHY REQUIRED */}
      <section>
        <h2 className="text-xl font-semibold">
          Why Use Required?
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function createUser(data: Required<User>) {
  // All fields must be provided
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Ensures complete data (e.g., create APIs).
        </p>
      </section>

      {/* COMPARISON */}
      <section>
        <h2 className="text-xl font-semibold">Difference</h2>

        <table className="w-full text-sm border mt-3">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Partial</td>
              <td className="p-2 border">All fields optional</td>
            </tr>
            <tr>
              <td className="p-2 border">Required</td>
              <td className="p-2 border">All fields required</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* COMBINATION */}
      <section>
        <h2 className="text-xl font-semibold">
          Combining with Pick/Omit
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type UpdateEmail = Partial<Pick<User, "email">>;

type RequiredUserPreview = Required<Pick<User, "id" | "name">>;`}
        </pre>
      </section>

      {/* MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Using Partial when all fields are required</li>
          <li>Using Required unnecessarily</li>
          <li>Not combining with Pick/Omit properly</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Partial makes all properties optional, while Required enforces all properties.
          They are useful for handling flexible and strict data scenarios like updates
          and creation flows.
        </p>
      </section>
    </main>
  );
}