export default function TypeNarrowingPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Type Narrowing in TypeScript
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">What is Type Narrowing?</h2>
        <p className="text-gray-600 mt-2">
          Type narrowing is the process of refining a variable’s type
          from a broader type (like a union) into a more specific one.
        </p>
      </section>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">Why Do We Need It?</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function print(value: string | number) {
  value.toUpperCase(); //  error
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          TypeScript doesn’t know if <code>value</code> is string or number.
        </p>
      </section>

      {/* TYPEOF */}
      <section>
        <h2 className="text-xl font-semibold">1. typeof Narrowing</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}`}
        </pre>
      </section>

      {/* INSTANCEOF */}
      <section>
        <h2 className="text-xl font-semibold">2. instanceof Narrowing</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`class Dog {
  bark() {}
}

function handle(pet: Dog | Date) {
  if (pet instanceof Dog) {
    pet.bark();
  } else {
    pet.getFullYear();
  }
}`}
        </pre>
      </section>

      {/* IN OPERATOR */}
      <section>
        <h2 className="text-xl font-semibold">3. in Operator</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type Admin = { role: string };
type User = { name: string };

function check(person: Admin | User) {
  if ("role" in person) {
    console.log(person.role);
  } else {
    console.log(person.name);
  }
}`}
        </pre>
      </section>

      {/* CUSTOM TYPE GUARD */}
      <section>
        <h2 className="text-xl font-semibold">
          4. Custom Type Guard
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function isString(value: unknown): value is string {
  return typeof value === "string";
}

function print(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }
}`}
        </pre>
      </section>

      {/* DISCRIMINATED UNION */}
      <section>
        <h2 className="text-xl font-semibold">
          5. Discriminated Union
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type Success = { type: "success"; data: string };
type Error = { type: "error"; message: string };

function handle(res: Success | Error) {
  if (res.type === "success") {
    console.log(res.data);
  } else {
    console.log(res.message);
  }
}`}
        </pre>

        <p className="text-gray-600 mt-2">
          Using a common property (<code>type</code>) helps narrowing easily.
        </p>
      </section>

      {/* REAL WORLD */}
      <section>
        <h2 className="text-xl font-semibold">Real-World Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function handleApiResponse(res: any) {
  if (res.success) {
    console.log(res.data);
  } else {
    console.log(res.error);
  }
}`}
        </pre>
      </section>

      {/* MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Not narrowing union types</li>
          <li>Using values without checks</li>
          <li>Overusing <code>any</code></li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Type narrowing refines a variable’s type using checks like typeof,
          instanceof, or custom guards. It ensures safe access to properties
          and methods in union types.
        </p>
      </section>
    </main>
  );
}