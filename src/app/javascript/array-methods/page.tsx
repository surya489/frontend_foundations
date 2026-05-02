import ArrayVisual from "@/components/js/ArrayVisual";
import ArrayMethodsDemo from "@/components/js/ArrayMethodsDemo";

export default function ArrayMethodsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Array Methods</h1>

      <section>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-600 mt-2">
          Array methods like map, filter, and reduce are higher order functions
          used to transform and process data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Visual Understanding</h2>
        <ArrayVisual />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// map
arr.map((item) => transformedItem);

// filter
arr.filter((item) => condition);

// reduce
arr.reduce((acc, curr) => acc + curr, 0);`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <ArrayMethodsDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key Difference</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>map → transforms every element</li>
          <li>filter → selects elements</li>
          <li>reduce → accumulates into single value</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          map transforms each element, filter selects elements based on a condition,
          and reduce accumulates values into a single result. These methods are
          commonly used for functional programming and data manipulation.
        </p>
      </section>
    </main>
  );
}