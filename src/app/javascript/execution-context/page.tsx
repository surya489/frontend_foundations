import ExecutionFlowDiagram from "@/components/js/ExecutionFlowDiagram";
import ExecutionStepDemo from "@/components/js/ExecutionStepDemo";

export default function ExecutionContextPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Execution Context</h1>

      <section>
        <p className="text-gray-600">
          Execution Context is the environment where JavaScript code is evaluated and executed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Execution Flow</h2>
        <ExecutionFlowDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Step-by-Step Execution</h2>
        <ExecutionStepDemo />
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          JavaScript execution happens in two phases: memory creation and execution.
          Variables are initialized as undefined, and functions are fully stored before execution begins.
        </p>
      </section>
    </main>
  );
}