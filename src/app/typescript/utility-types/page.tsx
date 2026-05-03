export default function UtilityTypesPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Utility Types in TypeScript
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">What are Utility Types?</h2>
        <p className="text-gray-600 mt-2">
          Utility types are built-in TypeScript helpers that transform existing
          types into new ones, making your code more reusable and concise.
        </p>
      </section>

      {/* BASE TYPE */}
      <section>
        <h2 className="text-xl font-semibold">Base Example</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type User = {
  id: number;
  name: string;
  email: string;
};`}
        </pre>
      </section>

      {/* PARTIAL */}
      <section>
        <h2 className="text-xl font-semibold">1. Partial</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type PartialUser = Partial<User>;

// All fields optional
const user: PartialUser = {
  name: "Jaya",
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          Makes all properties optional.
        </p>
      </section>

      {/* REQUIRED */}
      <section>
        <h2 className="text-xl font-semibold">2. Required</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type RequiredUser = Required<User>;

// All fields required
const user: RequiredUser = {
  id: 1,
  name: "Jaya",
  email: "test@mail.com",
};`}
        </pre>
      </section>

      {/* READONLY */}
      <section>
        <h2 className="text-xl font-semibold">3. Readonly</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  id: 1,
  name: "Jaya",
  email: "test@mail.com",
};

// user.name = "New" `}
        </pre>
      </section>

      {/* PICK */}
      <section>
        <h2 className="text-xl font-semibold">4. Pick</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type UserPreview = Pick<User, "id" | "name">;

const user: UserPreview = {
  id: 1,
  name: "Jaya",
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          Select specific properties.
        </p>
      </section>

      {/* OMIT */}
      <section>
        <h2 className="text-xl font-semibold">5. Omit</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type UserWithoutEmail = Omit<User, "email">;

const user: UserWithoutEmail = {
  id: 1,
  name: "Jaya",
};`}
        </pre>

        <p className="text-gray-600 mt-2">
          Remove specific properties.
        </p>
      </section>

      {/* REAL WORLD */}
      <section>
        <h2 className="text-xl font-semibold">Real-World Use</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Update API
function updateUser(data: Partial<User>) {}

// Create API
function createUser(data: Omit<User, "id">) {}`}
        </pre>
      </section>

      {/* MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Rewriting types manually instead of using utility types</li>
          <li>Overusing Partial (can make everything optional unnecessarily)</li>
          <li>Not using Pick/Omit for cleaner APIs</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Interview Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Utility types like Partial, Pick, and Omit allow transforming existing
          types into new ones. They improve reusability and reduce duplication
          in TypeScript applications.
        </p>
      </section>
    </main>
  );
}