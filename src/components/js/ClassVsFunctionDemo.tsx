"use client";

import { useState } from "react";

export default function ClassVsFunctionDemo() {
  const [output, setOutput] = useState("");

  function runFunction() {
    function Person(this: { name: string }, name: string) {
      this.name = name;
    }

    Person.prototype.greet = function () {
      return "Hello " + this.name;
    };

    const p = new (Person as any)("Jaya");
    setOutput(p.greet());
  }

  function runClass() {
    class Person {
      name: string;

      constructor(name: string) {
        this.name = name;
      }

      greet() {
        return "Hello " + this.name;
      }
    }

    const p = new Person("Surya");
    setOutput(p.greet());
  }

  function explain() {
    setOutput(
      "Both work same internally. Class is just cleaner syntax over prototype."
    );
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Try Examples</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={runFunction} className="px-3 py-1 border rounded">
          Constructor Function
        </button>

        <button onClick={runClass} className="px-3 py-1 border rounded">
          Class
        </button>

        <button onClick={explain} className="px-3 py-1 border rounded">
          Explain
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        Output: {output || "Click a button"}
      </div>
    </div>
  );
}