export default function ContextPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Context API</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Context?</h2>
        <p className="text-gray-600 mt-2">
          Context provides a way to pass data through the component tree without having to pass props
          down manually at every level. It's designed for sharing data that can be considered "global".
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Creating Context</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Consuming Context</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Method 1: useContext Hook
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}

// Method 2: Consumer Component
function ThemedButton() {
  return (
    <ThemeContext.Consumer>
      {theme => <button className={theme}>Click me</button>}
    </ThemeContext.Consumer>
  );
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Global state</strong> - Theme, user preferences</li>
          <li><strong>User authentication</strong> - Current user data</li>
          <li><strong>App settings</strong> - Language, locale</li>
          <li><strong>Deep prop drilling</strong> - Data needed by many components</li>
        </ul>
      </section>
    </main>
  );
}