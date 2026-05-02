import JSRuntimeDiagram from "@/components/js/JSRuntimeDiagram";
import JSIntroDemo from "@/components/js/JSIntroDemo";

export default function WhatIsJSPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">What is JavaScript?</h1>

      <section>
        <h2 className="text-xl font-semibold">Definition</h2>
        <p className="text-gray-600 mt-2">
          JavaScript is a programming language used to make web pages interactive.
          It allows you to handle user actions, update content dynamically,
          and communicate with servers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Where JavaScript Runs</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Browser (Chrome, Firefox)</li>
          <li>Server (Node.js)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How JavaScript Works</h2>
        <p className="text-gray-600 mt-2">
          JavaScript code is executed by a JavaScript engine (like V8).
          The engine reads your code and runs it line by line.
        </p>

        <JSRuntimeDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Synchronous vs Asynchronous</h2>
        <p className="text-gray-600 mt-2">
          JavaScript is single-threaded, meaning it executes one task at a time.
          However, it can handle asynchronous operations like timers and API calls.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <JSIntroDemo />
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          JavaScript is a single-threaded, interpreted language that runs inside
          a JavaScript engine. It supports asynchronous programming using
          mechanisms like the event loop, allowing non-blocking execution.
        </p>
      </section>
    </main>
  );
}