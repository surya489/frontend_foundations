import PrimitiveReferenceDiagram from "@/components/js/PrimitiveReferenceDiagram";
import PrimitiveReferenceDemo from "@/components/js/PrimitiveReferenceDemo";

export default function PrimitiveReferencePage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Primitive vs Reference</h1>

      <section>
        <h2 className="text-xl font-semibold">What is the difference?</h2>
        <p className="text-gray-600 mt-2">
          Primitive values are copied by value, while objects and arrays are copied by reference.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Memory Behavior</h2>
        <PrimitiveReferenceDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <PrimitiveReferenceDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example Code</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Primitive
let a = 10;
let b = a;

// Reference
let obj1 = { a: 1 };
let obj2 = obj1;

// Fix (copy)
let obj2 = { ...obj1 };`}
        </pre>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Primitive values are copied by value, meaning changes do not affect the original.
          Reference types share the same memory location, so changes affect both variables.
        </p>
      </section>
    </main>
  );
}