export default function ReactApiTypingPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        API Typing in React (TypeScript)
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">
          Why Type API Responses?
        </h2>
        <p className="text-gray-600 mt-2">
          API typing ensures that the data you receive matches the expected structure,
          preventing runtime errors and improving code reliability.
        </p>
      </section>

      {/* BASE TYPE */}
      <section>
        <h2 className="text-xl font-semibold">Define API Types</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type User = {
  id: number;
  name: string;
  email: string;
};`}
        </pre>
      </section>

      {/* GENERIC RESPONSE */}
      <section>
        <h2 className="text-xl font-semibold">
          Generic API Response
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type ApiResponse<T> = {
  data: T;
  success: boolean;
};`}
        </pre>
      </section>

      {/* FETCH FUNCTION */}
      <section>
        <h2 className="text-xl font-semibold">
          Fetch with Generics
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`async function fetchUsers(): Promise<ApiResponse<User[]>> {
  const res = await fetch("/api/users");
  return res.json();
}`}
        </pre>
      </section>

      {/* USESTATE */}
      <section>
        <h2 className="text-xl font-semibold">
          Using with useState
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [users, setUsers] = useState<User[]>([]);
const [loading, setLoading] = useState<boolean>(true);`}
        </pre>
      </section>

      {/* USEEFFECT */}
      <section>
        <h2 className="text-xl font-semibold">
          Using with useEffect
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`useEffect(() => {
  fetchUsers().then((res) => {
    setUsers(res.data);
    setLoading(false);
  });
}, []);`}
        </pre>
      </section>

      {/* ERROR HANDLING */}
      <section>
        <h2 className="text-xl font-semibold">
          Error Handling
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type ApiError = {
  message: string;
};

type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: ApiError };`}
        </pre>

        <p className="text-gray-600 mt-2">
          Use union types for success/error handling.
        </p>
      </section>

      {/* SAFE USAGE */}
      <section>
        <h2 className="text-xl font-semibold">
          Safe Data Handling
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`fetchUsers().then((res) => {
  if (res.success) {
    setUsers(res.data);
  } else {
    console.error(res.error.message);
  }
});`}
        </pre>
      </section>

      {/* REAL WORLD */}
      <section>
        <h2 className="text-xl font-semibold">
          Real-World Pattern
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [data, setData] = useState<User[] | null>(null);
const [error, setError] = useState<string | null>(null);`}
        </pre>
      </section>

      {/* MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">
          Common Mistakes
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Using <code>any</code> for API response</li>
          <li>Not handling errors</li>
          <li>Not using generics</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Interview Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          API typing in TypeScript uses generics and structured types to ensure
          data consistency. It helps handle success and error states safely and
          improves maintainability in large applications.
        </p>
      </section>
    </main>
  );
}