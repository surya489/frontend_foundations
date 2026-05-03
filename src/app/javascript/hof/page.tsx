import HOFDiagram from "@/components/js/HOFDiagram";
import HOFDemo from "@/components/js/HOFDemo";

export default function HOFPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Higher Order Functions</h1>

      <section>
        <h2 className="text-xl font-semibold">What is a Higher Order Function?</h2>
        <p className="text-gray-600 mt-2">
          A Higher Order Function is a function that either takes another function
          as an argument or returns a function.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Concept</h2>
        <HOFDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Examples</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>map()</li>
          <li>filter()</li>
          <li>reduce()</li>
          <li>forEach()</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <HOFDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Real-world Use</h2>
        <p className="text-gray-600 mt-2">
          Higher Order Functions are widely used in functional programming,
          array transformations, event handling, and React patterns.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          A Higher Order Function is a function that takes another function as
          an argument or returns a function. It enables abstraction and code reuse.
          Common examples include map, filter, and reduce.
        </p>
      </section>
    </main>
  );
}