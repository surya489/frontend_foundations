import AsyncFlowDiagram from "@/components/js/AsyncFlowDiagram";
import AsyncAwaitDemo from "@/components/js/AsyncAwaitDemo";
import AsyncComparison from "@/components/js/AsyncComparison";

export default function AsyncAwaitPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Async / Await</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Async/Await?</h2>
        <p className="text-gray-600 mt-2">
          Async/Await is a syntactic sugar over Promises that allows writing
          asynchronous code in a synchronous style.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Execution Flow</h2>
        <AsyncFlowDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <AsyncAwaitDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Promise vs Async/Await</h2>
        <AsyncComparison />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key Point</h2>
        <p className="text-gray-600 mt-2">
          await pauses execution inside the async function, but JavaScript
          continues running other code using the event loop.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Async/Await is built on top of Promises and provides a cleaner syntax.
          The await keyword pauses execution within an async function until the
          Promise resolves, making asynchronous code easier to read and manage.
        </p>
      </section>
    </main>
  );
}