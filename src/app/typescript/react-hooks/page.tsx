export default function ReactHooksTypingPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Typing React Hooks (TypeScript)
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-xl font-semibold">
          Why Type Hooks?
        </h2>
        <p className="text-gray-600 mt-2">
          Typing hooks ensures state, refs, and effects behave correctly,
          preventing runtime bugs and improving code reliability.
        </p>
      </section>

      {/* USESTATE BASIC */}
      <section>
        <h2 className="text-xl font-semibold">
          1. useState (Basic)
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [count, setCount] = useState<number>(0);`}
        </pre>
      </section>

      {/* USESTATE INFERENCE */}
      <section>
        <h2 className="text-xl font-semibold">
          Type Inference
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [count, setCount] = useState(0);
// inferred as number`}
        </pre>
      </section>

      {/* USESTATE UNION */}
      <section>
        <h2 className="text-xl font-semibold">
          useState with Union Types
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [user, setUser] = useState<User | null>(null);`}
        </pre>

        <p className="text-gray-600 mt-2">
          Useful for async data or initial empty state.
        </p>
      </section>

      {/* USESTATE ARRAY */}
      <section>
        <h2 className="text-xl font-semibold">
          useState with Arrays
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [users, setUsers] = useState<User[]>([]);`}
        </pre>
      </section>

      {/* USEEFFECT */}
      <section>
        <h2 className="text-xl font-semibold">
          2. useEffect
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`useEffect(() => {
  console.log("Mounted");
}, []);`}
        </pre>

        <p className="text-gray-600 mt-2">
          No special typing needed — TypeScript infers automatically.
        </p>
      </section>

      {/* USEREF */}
      <section>
        <h2 className="text-xl font-semibold">
          3. useRef
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const inputRef = useRef<HTMLInputElement>(null);

<input ref={inputRef} />;`}
        </pre>

        <p className="text-gray-600 mt-2">
          Useful for DOM references.
        </p>
      </section>

      {/* USECONTEXT */}
      <section>
        <h2 className="text-xl font-semibold">
          4. useContext
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`type Theme = {
  dark: boolean;
};

const ThemeContext = createContext<Theme | null>(null);

const value = useContext(ThemeContext);`}
        </pre>
      </section>

      {/* CUSTOM HOOK */}
      <section>
        <h2 className="text-xl font-semibold">
          5. Custom Hook
        </h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function useCounter(): [number, () => void] {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);

  return [count, increment];
}`}
        </pre>
      </section>

      {/* COMMON MISTAKES */}
      <section>
        <h2 className="text-xl font-semibold">
          Common Mistakes
        </h2>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Not typing null states (User | null)</li>
          <li>Using any for state</li>
          <li>Not typing useRef correctly</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">
          Interview Explanation
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          React hooks can be typed using generics. useState supports explicit
          and inferred types, while useRef and useContext require proper typing
          for safety. This ensures predictable state and component behavior.
        </p>
      </section>
    </main>
  );
}