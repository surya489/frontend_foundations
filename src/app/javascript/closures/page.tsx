import ClosureDiagram from "@/components/js/ClosureDiagram";
import ClosureCounterDemo from "@/components/js/ClosureCounterDemo";
import ClosureRealWorld from "@/components/js/ClosureRealWorld";

export default function ClosuresPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Closures</h1>

      <section>
        <h2 className="text-xl font-semibold">What is a Closure?</h2>
        <p className="text-gray-600 mt-2">
          A closure is a function that remembers variables from its outer scope
          even after the outer function has finished executing.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How it Works</h2>
        <ClosureDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <ClosureCounterDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Real-world Example</h2>
        <ClosureRealWorld />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key Points</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Functions remember their lexical scope</li>
          <li>Closures enable data privacy</li>
          <li>Widely used in callbacks, hooks, and event handlers</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          A closure is formed when a function retains access to its lexical scope
          even after the outer function has completed execution. This allows
          variables to persist in memory and is commonly used for data
          encapsulation and state management.
        </p>
      </section>
    </main>
  );
}