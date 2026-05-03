import TSvsJSDiagram from "@/components/ts/TSvsJSDiagram";
import TSDemo from "@/components/ts/TSDemo";

export default function WhatIsTypeScriptPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">What is TypeScript?</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">Definition</h2>
        <p className="text-gray-600 mt-2">
          TypeScript is a superset of JavaScript that adds static typing.
          It helps catch errors during development instead of runtime.
        </p>
      </section>

      {/* WHY */}
      <section>
        <h2 className="text-xl font-semibold">Why Use TypeScript?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Catch errors early</li>
          <li>Better code readability</li>
          <li>Improved developer experience</li>
          <li>Used in large-scale applications</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">JavaScript vs TypeScript</h2>
        <TSvsJSDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">How TypeScript Works</h2>
        <p className="text-gray-600 mt-2">
          TypeScript code is compiled into JavaScript before running in the browser.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`TypeScript → Compiler → JavaScript → Browser`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <TSDemo />
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          TypeScript is a statically typed superset of JavaScript that compiles to JavaScript.
          It helps developers catch type-related errors at compile time, improving code quality
          and maintainability.
        </p>
      </section>
    </main>
  );
}