import ScopeChainDiagram from "@/components/js/ScopeChainDiagram";
import TDZDemo from "@/components/js/TDZDemo";

export default function ScopeTDZPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Scope & TDZ</h1>

      {/* SCOPE */}
      <section>
        <h2 className="text-xl font-semibold">What is Scope?</h2>
        <p className="text-gray-600 mt-2">
          Scope determines where variables are accessible in your code.
        </p>

        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Global Scope</li>
          <li>Function Scope</li>
          <li>Block Scope (let, const)</li>
        </ul>
      </section>

      {/* SCOPE CHAIN */}
      <section>
        <h2 className="text-xl font-semibold">Scope Chain</h2>
        <p className="text-gray-600 mt-2">
          When accessing a variable, JavaScript looks in the current scope,
          then moves outward to parent scopes.
        </p>

        <ScopeChainDiagram />
      </section>

      {/* TDZ */}
      <section>
        <h2 className="text-xl font-semibold">Temporal Dead Zone (TDZ)</h2>
        <p className="text-gray-600 mt-2">
          The TDZ is the time between variable hoisting and initialization,
          where accessing the variable results in a ReferenceError.
        </p>

        <TDZDemo />
      </section>

      {/* EXAMPLE */}
      <section>
        <h2 className="text-xl font-semibold">Example</h2>

        <pre className="bg-gray-100 p-4 rounded mt-3 text-sm overflow-x-auto">
{`function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  inner();
}

outer();`}
        </pre>

        <p className="text-gray-600 text-sm mt-2">
          Inner function accesses variable from outer scope → this is scope chain.
        </p>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Scope defines variable accessibility. JavaScript uses lexical scoping,
          meaning functions remember the scope in which they were defined.
          The TDZ occurs for let and const variables before initialization,
          preventing access until they are declared.
        </p>
      </section>
    </main>
  );
}