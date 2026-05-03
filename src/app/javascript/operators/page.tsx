import OperatorDiagram from "@/components/js/OperatorDiagram";
import OperatorDemo from "@/components/js/OperatorDemo";

export default function OperatorsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Operators & Conditions</h1>

      <section>
        <h2 className="text-xl font-semibold">if / else</h2>
        <p className="text-gray-600 mt-2">
          Used to execute code based on conditions.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Logical Operators</h2>
        <OperatorDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Truthy vs Falsy</h2>

        <p className="text-gray-600 mt-2">
          JavaScript treats some values as false automatically.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`Falsy:
false, 0, "", null, undefined, NaN

Everything else is truthy`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Short Circuit</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const name = input || "Guest";

isLoggedIn && showDashboard();`}
        </pre>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>|| returns first truthy</li>
          <li>&& returns last truthy or first falsy</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <OperatorDemo />
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Logical operators in JavaScript do not always return boolean values.
          OR returns the first truthy value, AND returns the first falsy or last truthy.
          This behavior is used for short-circuit evaluation and default values.
        </p>
      </section>
    </main>
  );
}