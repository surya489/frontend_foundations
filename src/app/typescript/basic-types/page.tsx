import PageShell from "@/components/ui/PageShell";

export default function BasicTypesPage() {
  return (
    <PageShell
      title="Basic Types in TypeScript"
      description="Learn how TypeScript basic types work, and compare JavaScript and TypeScript type examples."
    >
      <h1 className="text-3xl font-bold">Basic Types in TypeScript</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What are Basic Types?</h2>
        <p className="text-gray-600 mt-2">
          TypeScript allows you to define the type of variables, ensuring safer and predictable code.
        </p>
      </section>

      {/* JS vs TS */}
      <section>
        <h2 className="text-xl font-semibold">JavaScript vs TypeScript</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// JavaScript
let age = 25; // can change later

// TypeScript
let age: number = 25;
// age = "hello" error`}
        </pre>
      </section>

      {/* TYPES */}
      <section>
        <h2 className="text-xl font-semibold">Common Basic Types</h2>

        <div className="space-y-4 mt-3">
          {/* STRING */}
          <div>
            <h3 className="font-medium">1. string</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">
{`let name: string = "Jaya";`}
            </pre>
          </div>

          {/* NUMBER */}
          <div>
            <h3 className="font-medium">2. number</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">
{`let age: number = 25;`}
            </pre>
          </div>

          {/* BOOLEAN */}
          <div>
            <h3 className="font-medium">3. boolean</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">
{`let isLoggedIn: boolean = true;`}
            </pre>
          </div>

          {/* ARRAY */}
          <div>
            <h3 className="font-medium">4. array</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">
{`let numbers: number[] = [1, 2, 3];

let names: string[] = ["a", "b"];`}
            </pre>
          </div>

          {/* OBJECT */}
          <div>
            <h3 className="font-medium">5. object</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">
{`let user: { name: string; age: number } = {
  name: "Jaya",
  age: 25,
};`}
            </pre>
          </div>
        </div>
      </section>

      {/* SPECIAL TYPES */}
      <section>
        <h2 className="text-xl font-semibold">Special Types</h2>

        <div className="space-y-4 mt-3">
          <div>
            <h3 className="font-medium">any</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">
{`let data: any = "hello";
data = 123; // no error`}
            </pre>
            <p className="text-sm text-gray-500">
              Avoid using any — it removes type safety.
            </p>
          </div>

          <div>
            <h3 className="font-medium">unknown</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">
{`let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}`}
            </pre>
          </div>

          <div>
            <h3 className="font-medium">void</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">
{`function log(): void {
  console.log("hello");
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Why Types Matter</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Prevents runtime errors</li>
          <li>Improves code readability</li>
          <li>Better IDE support (auto-complete)</li>
        </ul>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Overusing <code>any</code></li>
          <li>Not defining object structure</li>
          <li>Mixing types accidentally</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Basic types in TypeScript define the shape of data. They help catch errors at compile time and make code more maintainable.
        </p>
      </section>
    </PageShell>
  );
}