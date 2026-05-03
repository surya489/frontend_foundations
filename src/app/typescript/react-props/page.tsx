export default function ReactPropsPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Typing Props in React (TypeScript)
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">
          Why Type Props?
        </h2>
        <p className="text-gray-600 mt-2">
          Typing props ensures components receive correct data,
          preventing runtime bugs and improving developer experience.
        </p>
      </section>

      {/* BASIC */}
      <section>
        <h2 className="text-xl font-semibold">
          Basic Props Example
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type Props = {
  name: string;
  age: number;
};

function User({ name, age }: Props) {
  return <div>{name} - {age}</div>;
}`}
        </pre>
      </section>

      {/* OPTIONAL */}
      <section>
        <h2 className="text-xl font-semibold">
          Optional Props
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type Props = {
  name: string;
  age?: number;
};

function User({ name, age }: Props) {
  return <div>{name} - {age || "N/A"}</div>;
}`}
        </pre>
      </section>

      {/* DEFAULT VALUES */}
      <section>
        <h2 className="text-xl font-semibold">
          Default Props
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type Props = {
  name?: string;
};

function User({ name = "Guest" }: Props) {
  return <div>{name}</div>;
}`}
        </pre>
      </section>

      {/* FUNCTION PROP */}
      <section>
        <h2 className="text-xl font-semibold">
          Function Props (Callbacks)
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type Props = {
  onClick: () => void;
};

function Button({ onClick }: Props) {
  return <button onClick={onClick}>Click</button>;
}`}
        </pre>
      </section>

      {/* CHILDREN */}
      <section>
        <h2 className="text-xl font-semibold">
          Children Props
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return <div>{children}</div>;
}`}
        </pre>
      </section>

      {/* ARRAY OBJECT */}
      <section>
        <h2 className="text-xl font-semibold">
          Array & Object Props
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type User = {
  name: string;
};

type Props = {
  users: User[];
};

function UserList({ users }: Props) {
  return (
    <ul>
      {users.map((u) => (
        <li key={u.name}>{u.name}</li>
      ))}
    </ul>
  );
}`}
        </pre>
      </section>

      {/* INTERFACE */}
      <section>
        <h2 className="text-xl font-semibold">
          Using Interface Instead
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`interface Props {
  name: string;
}

function User({ name }: Props) {
  return <div>{name}</div>;
}`}
        </pre>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">
          Common Mistakes
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Using <code>any</code> for props</li>
          <li>Not typing children</li>
          <li>Forgetting optional props</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Props typing ensures React components receive correct data types.
          It improves maintainability and prevents runtime errors by catching
          issues at compile time.
        </p>
      </section>
    </main>
  );
}