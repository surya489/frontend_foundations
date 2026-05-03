import HoistingDiagram from "@/components/js/HoistingDiagram";
import HoistingDemo from "@/components/js/HoistingDemo";

export default function HoistingPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Hoisting</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Hoisting?</h2>
        <p className="text-gray-600 mt-2">
          Hoisting is JavaScript's behavior of moving variable and function
          declarations to the top of their scope during the memory phase.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key Rules</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>var</strong> → hoisted and initialized as undefined</li>
          <li><strong>let & const</strong> → hoisted but in Temporal Dead Zone</li>
          <li><strong>function declarations</strong> → fully hoisted</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Memory vs Execution</h2>
        <HoistingDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <HoistingDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Assuming let/const behave like var</li>
          <li>Accessing variables before initialization</li>
          <li>Confusing declaration vs initialization</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Hoisting is the process where JavaScript allocates memory for variables
          and functions before execution. Variables declared with var are
          initialized as undefined, while let and const remain in the temporal
          dead zone until initialization.
        </p>
      </section>
    </main>
  );
}