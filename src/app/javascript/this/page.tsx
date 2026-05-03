import ThisRules from "@/components/js/ThisRules";
import ThisDemo from "@/components/js/ThisDemo";

export default function ThisPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">this Keyword</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is "this"?</h2>
        <p className="text-gray-600 mt-2">
          "this" refers to the object that is executing the current function.
          Its value depends on how the function is called.
        </p>
      </section>

      {/* RULES */}
      <section>
        <h2 className="text-xl font-semibold">Rules</h2>
        <ThisRules />
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Examples</h2>
        <ThisDemo />
      </section>

      {/* COMMON CONFUSION */}
      <section>
        <h2 className="text-xl font-semibold">Common Confusions</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Arrow functions don’t have their own "this"</li>
          <li>"this" is NOT based on where function is defined</li>
          <li>In strict mode, "this" in functions is undefined</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          The value of "this" in JavaScript depends on how a function is called.
          In object methods, it refers to the object. In regular functions,
          it refers to the global object (or undefined in strict mode).
          Arrow functions do not have their own this and inherit it from
          their surrounding scope.
        </p>
      </section>
    </main>
  );
}