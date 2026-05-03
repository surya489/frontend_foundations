export default function UseRefPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">useRef Hook</h1>

      <section>
        <h2 className="text-xl font-semibold">What is useRef?</h2>
        <p className="text-gray-600 mt-2">
          useRef returns a mutable ref object that persists for the lifetime of the component.
          It's commonly used to access DOM elements directly or store mutable values.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Usage</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const ref = useRef(initialValue);

// Access the current value
ref.current

// Update the value
ref.current = newValue;`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">DOM Access</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function TextInput() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Storing Mutable Values</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Timer() {
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // do something
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>DOM manipulation</strong> - Accessing DOM elements</li>
          <li><strong>Focus management</strong> - Programmatically focusing elements</li>
          <li><strong>Media controls</strong> - Controlling video/audio elements</li>
          <li><strong>Storing timers</strong> - Keeping references to intervals/timeouts</li>
          <li><strong>Previous values</strong> - Storing previous state values</li>
        </ul>
      </section>
    </main>
  );
}