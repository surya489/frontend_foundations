import ClassVsFunctionDiagram from "@/components/js/ClassVsFunctionDiagram";
import ClassVsFunctionDemo from "@/components/js/ClassVsFunctionDemo";

export default function ClassVsFunctionPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Class vs Function</h1>

      <section>
        <h2 className="text-xl font-semibold">What is the Difference?</h2>
        <p className="text-gray-600 mt-2">
          JavaScript supports both constructor functions (ES5) and classes (ES6)
          to create objects. Classes are just a cleaner syntax built on top of
          prototype-based inheritance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Visual Comparison</h2>
        <ClassVsFunctionDiagram />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// Constructor Function
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return "Hello " + this.name;
};

// Class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello " + this.name;
  }
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <ClassVsFunctionDemo />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key Point</h2>
        <p className="text-gray-600 mt-2">
          Classes do not introduce a new inheritance model. They are syntactic sugar
          over JavaScript’s prototype-based system.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Classes in JavaScript are syntactic sugar over constructor functions and
          prototypes. Both achieve the same result, but classes provide cleaner and
          more readable syntax for object-oriented programming.
        </p>
      </section>
    </main>
  );
}