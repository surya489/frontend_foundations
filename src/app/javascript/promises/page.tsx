import PromiseDiagram from "@/components/js/PromiseDiagram";
import PromiseDemo from "@/components/js/PromiseDemo";

export default function PromisesPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Promises</h1>

      <section>
        <h2 className="text-xl font-semibold">What is a Promise?</h2>
        <p className="text-gray-600 mt-2">
          A Promise is an object that represents the eventual completion
          (or failure) of an asynchronous operation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Promise States</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Pending</li>
          <li>Fulfilled</li>
          <li>Rejected</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Lifecycle</h2>
        <PromiseDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <PromiseDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key Methods</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>.then()</li>
          <li>.catch()</li>
          <li>.finally()</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          A Promise represents an asynchronous operation that can be in
          pending, fulfilled, or rejected state. It allows chaining using
          then, catch, and finally, making async code more manageable.
        </p>
      </section>
    </main>
  );
}