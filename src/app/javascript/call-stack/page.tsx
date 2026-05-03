import CallStackVisualizer from "@/components/js/CallStackVisualizer";

export default function CallStackPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Call Stack</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Call Stack?</h2>
        <p className="text-gray-600 mt-2">
          The Call Stack is a data structure used by JavaScript to keep track of
          function execution. It follows the Last In, First Out (LIFO) principle.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How it works</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>When a function is called → it is pushed to the stack</li>
          <li>When a function finishes → it is popped from the stack</li>
          <li>JavaScript executes one function at a time</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Visual Simulation</h2>
        <CallStackVisualizer />
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 mt-2 text-sm">
          The call stack is a LIFO structure that manages function execution in JavaScript.
          Each function call is pushed onto the stack, and once execution completes,
          it is removed. Since JavaScript is single-threaded, only one function runs at a time.
        </p>
      </section>
    </main>
  );
}