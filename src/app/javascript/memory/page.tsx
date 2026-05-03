import MemoryDiagram from "@/components/js/MemoryDiagram";
import MemoryDemo from "@/components/js/MemoryDemo";

export default function MemoryPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Memory & Data Storage</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Memory?</h2>
        <p className="text-gray-600 mt-2">
          Memory is where JavaScript stores variables, functions, and data while your program runs.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Stack vs Heap</h2>
        <MemoryDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Data is Stored</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Primitive values → stored directly in stack</li>
          <li>Objects/arrays → stored in heap</li>
          <li>Variables hold reference to heap memory</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <MemoryDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Important Connection</h2>
        <p className="text-gray-600 mt-2">
          This concept explains why objects behave differently than primitives.
          It directly relates to "Primitive vs Reference".
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          JavaScript uses stack memory for primitive values and heap memory for objects.
          Primitives are copied by value, while objects are copied by reference,
          meaning multiple variables can point to the same memory location.
        </p>
      </section>
    </main>
  );
}