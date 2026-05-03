export default function EnumsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Enums in TypeScript
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">What is an Enum?</h2>
        <p className="text-gray-600 mt-2">
          An enum is a way to define a set of named constants.
        </p>
      </section>

      {/* BASIC ENUM */}
      <section>
        <h2 className="text-xl font-semibold">Basic Enum</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`enum Status {
  Success,
  Error,
  Loading,
}

let state: Status = Status.Success;`}
        </pre>

        <p className="text-gray-600 mt-2">
          By default, values are numeric (0, 1, 2...).
        </p>
      </section>

      {/* STRING ENUM */}
      <section>
        <h2 className="text-xl font-semibold">String Enum</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING",
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          More readable and commonly used.
        </p>
      </section>

      {/* USAGE */}
      <section>
        <h2 className="text-xl font-semibold">Usage Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function handleStatus(status: Status) {
  if (status === Status.Success) {
    console.log("Success");
  }
}`}
        </pre>
      </section>

      {/* ENUM VS LITERAL */}
      <section>
        <h2 className="text-xl font-semibold">
          Enum vs Literal Types
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Enum
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
}

// Literal (preferred in modern TS)
type Status = "SUCCESS" | "ERROR";`}
        </pre>

        <p className="text-gray-600 mt-2">
          Literal types are simpler and often preferred.
        </p>
      </section>

      {/* WHEN TO USE */}
      <section>
        <h2 className="text-xl font-semibold">
          When to Use Enums
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>When you need a fixed set of named constants</li>
          <li>When working with legacy codebases</li>
          <li>When readability is important</li>
        </ul>
      </section>

      {/* WHEN NOT */}
      <section>
        <h2 className="text-xl font-semibold">
          When NOT to Use Enums
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>When literal types are simpler</li>
          <li>When bundle size matters</li>
        </ul>
      </section>

      {/* MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">
          Common Mistakes
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Using numeric enums without understanding values</li>
          <li>Overusing enums instead of literal types</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Enums define a set of named constants. While useful,
          modern TypeScript often prefers literal types for simplicity and better optimization.
        </p>
      </section>
    </main>
  );
}