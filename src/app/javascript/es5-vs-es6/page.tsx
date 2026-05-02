import ESComparison from "@/components/js/ESComparison";
import ESDemo from "@/components/js/ESDemo";

export default function ES5vsES6Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">ES5 vs ES6+</h1>

      <section>
        <h2 className="text-xl font-semibold">What is ES5 and ES6?</h2>
        <p className="text-gray-600 mt-2">
          ES5 (ECMAScript 5) is an older version of JavaScript released in 2009.
          ES6 (ECMAScript 2015) introduced modern features that make code cleaner
          and easier to write.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key Differences</h2>
        <ESComparison />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Important ES6 Features</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// let & const
let a = 10;
const b = 20;

// Arrow Function
const add = (a, b) => a + b;

// Template Literals
const name = "JS";
console.log(\`Hello \${name}\`);

// Destructuring
const obj = { x: 1 };
const { x } = obj;`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <ESDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Why ES6 is Important</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Cleaner and shorter syntax</li>
          <li>Better variable control (let, const)</li>
          <li>Improved readability</li>
          <li>Widely used in modern frameworks like React</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          ES6 introduced modern JavaScript features like let, const, arrow functions,
          template literals, and destructuring. These improvements make code more
          readable, maintainable, and safer compared to ES5.
        </p>
      </section>
    </main>
  );
}