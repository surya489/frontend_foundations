import EventLoopDiagram from "@/components/js/EventLoopDiagram";
import EventLoopDemo from "@/components/js/EventLoopDemo";

export default function EventLoopPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Event Loop</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Event Loop?</h2>
        <p className="text-gray-600 mt-2">
          The Event Loop is responsible for managing asynchronous operations
          in JavaScript by coordinating the call stack and task queues.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Architecture</h2>
        <EventLoopDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <EventLoopDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Why Output is This?</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`Start
End
Promise
Timeout`}
        </pre>

        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Sync code runs first → Start, End</li>
          <li>Microtasks (Promise) run next</li>
          <li>Macrotasks (setTimeout) run last</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key Rule</h2>
        <p className="text-gray-600 mt-2">
          Microtasks always execute before macrotasks.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          The event loop continuously checks if the call stack is empty.
          When empty, it first processes microtasks (Promises), then executes
          macrotasks (setTimeout). This ensures predictable async execution.
        </p>
      </section>
    </main>
  );
}