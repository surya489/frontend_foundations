import PageShell from "@/components/ui/PageShell";
import VariableDiagram from "@/components/js/VariableDiagram";
import VariableDemo from "@/components/js/VariableDemo";

export default function VariablesPage() {
  return (
    <PageShell
      title="Variables & Data Types"
      description="Understand JavaScript variable declaration, data types, and modern best practices."
    >

      <section>
        <h2 className="text-xl font-semibold">Declaration</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`var a = 10;
let b = 20;
const c = 30;`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Data Types</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>String</li>
          <li>Number</li>
          <li>Boolean</li>
          <li>Undefined</li>
          <li>Null</li>
          <li>Object</li>
          <li>Array</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">var vs let vs const</h2>
        <VariableDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <VariableDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Important Notes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Prefer <strong>let</strong> for variables that change</li>
          <li>Use <strong>const</strong> by default</li>
          <li>Avoid <strong>var</strong> in modern JavaScript</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Variables in JavaScript can be declared using var, let, and const.
          let and const are block-scoped, while var is function-scoped.
          const cannot be reassigned, making it safer for immutable values.
        </p>
      </section>
    </PageShell>
  );
}