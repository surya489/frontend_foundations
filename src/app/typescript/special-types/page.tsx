export default function SpecialTypesPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Special Types in TypeScript
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">
          What are Special Types?
        </h2>
        <p className="text-gray-600 mt-2">
          Special types like <code>any</code>, <code>unknown</code>, and{" "}
          <code>never</code> handle edge cases and provide flexibility in TypeScript.
        </p>
      </section>

      {/* ANY */}
      <section>
        <h2 className="text-xl font-semibold">1. any</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let value: any = "hello";

value = 123; // allowed
value.toUpperCase(); // no error`}
        </pre>

        <p className="text-gray-600 mt-2">
          <strong>Problem:</strong> disables type checking.
        </p>

        <p className="text-red-500 text-sm mt-1">
          Avoid using <code>any</code> unless absolutely necessary.
        </p>
      </section>

      {/* UNKNOWN */}
      <section>
        <h2 className="text-xl font-semibold">2. unknown</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`let value: unknown = "hello";

// Error
// value.toUpperCase();

// Safe usage
if (typeof value === "string") {
  console.log(value.toUpperCase());
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Safer version of <code>any</code>. You must check type before using.
        </p>
      </section>

      {/* NEVER */}
      <section>
        <h2 className="text-xl font-semibold">3. never</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function throwError(): never {
  throw new Error("Something went wrong");
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Represents values that never occur (functions that never return).
        </p>
      </section>

      {/* VOID */}
      <section>
        <h2 className="text-xl font-semibold">4. void</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function logMessage(): void {
  console.log("Hello");
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Used for functions that do not return a value.
        </p>
      </section>

      {/* COMPARISON */}
      <section>
        <h2 className="text-xl font-semibold">Comparison</h2>

        <table className="w-full text-sm border mt-3">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Usage</th>
              <th className="p-2 border">Safety</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">any</td>
              <td className="p-2 border">Anything allowed</td>
              <td className="p-2 border text-red-500">Unsafe</td>
            </tr>
            <tr>
              <td className="p-2 border">unknown</td>
              <td className="p-2 border">Check before use</td>
              <td className="p-2 border text-green-600">Safe</td>
            </tr>
            <tr>
              <td className="p-2 border">never</td>
              <td className="p-2 border">No return</td>
              <td className="p-2 border">✔️</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">
          Common Mistakes
        </h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Using <code>any</code> everywhere</li>
          <li>Not checking <code>unknown</code> before use</li>
          <li>Confusing <code>void</code> and <code>never</code></li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Special types handle edge cases. <code>any</code> removes type safety,
          <code> unknown</code> enforces checks, and <code>never</code> represents
          values that never occur. Using them correctly improves robustness.
        </p>
      </section>
    </main>
  );
}