import LoopDiagram from "@/components/js/LoopDiagram";
import LoopDemo from "@/components/js/LoopDemo";

export default function LoopsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Loops & Iteration</h1>

      <section>
        <h2 className="text-xl font-semibold">What is a Loop?</h2>
        <p className="text-gray-600 mt-2">
          A loop is used to repeat a block of code multiple times until a condition is met.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Loop Flow</h2>
        <LoopDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Types of Loops</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// for loop
for (let i = 0; i < 5; i++) {}

// while loop
while (condition) {}

// forEach
array.forEach((item) => {})`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">break & continue</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`break → stops loop
continue → skips current iteration`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <LoopDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Important Connection</h2>
        <p className="text-gray-600 mt-2">
          Array methods like map, filter, and reduce are built on top of loops.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Loops allow repeated execution of code. The for loop is the most commonly used,
          while forEach is used for arrays. break stops execution, and continue skips iterations.
        </p>
      </section>
    </main>
  );
}