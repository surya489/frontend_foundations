import ArrowVsNormalTable from "@/components/js/ArrowVsNormalTable";
import ArrowVsNormalDemo from "@/components/js/ArrowVsNormalDemo";

export default function ArrowVsNormalPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Arrow vs Normal Functions</h1>

      <section>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-600 mt-2">
          Arrow functions provide a shorter syntax and do not have their own
          "this", while normal functions have dynamic "this" depending on how
          they are called.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key Differences</h2>
        <ArrowVsNormalTable />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <ArrowVsNormalDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Use arrow functions for callbacks and short functions</li>
          <li>Use normal functions when you need dynamic "this"</li>
          <li>Avoid arrow functions for object methods</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          The key difference is that arrow functions do not have their own "this"
          and inherit it from their lexical scope, whereas normal functions have
          a dynamic "this" based on how they are called. Arrow functions also
          cannot be used as constructors and do not have the arguments object.
        </p>
      </section>
    </main>
  );
}