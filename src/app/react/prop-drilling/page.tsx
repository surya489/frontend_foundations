'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

// Context for theme
const ThemeContext = createContext<Theme>('light');

interface WithoutContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

interface DeepComponentWithPropsProps {
  theme: Theme;
}

interface WithContextProps {
  toggleTheme: () => void;
}

// Component that uses theme (deep in the tree)
function DeepComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
      Deep Component - Theme: {theme}
    </div>
  );
}

// Without Context - prop drilling
function WithoutContext({ theme, toggleTheme }: WithoutContextProps) {
  return (
    <div className="space-y-4">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Theme (Without Context)
      </button>
      <MiddleComponent theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

function MiddleComponent({ theme, toggleTheme }: WithoutContextProps) {
  return (
    <div>
      <p>Middle Component</p>
      <DeepComponentWithProps theme={theme} />
    </div>
  );
}

function DeepComponentWithProps({ theme }: DeepComponentWithPropsProps) {
  return (
    <div className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
      Deep Component (Props) - Theme: {theme}
    </div>
  );
}

// With Context
function WithContext({ toggleTheme }: WithContextProps) {
  return (
    <div className="space-y-4">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Toggle Theme (With Context)
      </button>
      <MiddleComponentContext />
    </div>
  );
}

function MiddleComponentContext() {
  return (
    <div>
      <p>Middle Component</p>
      <DeepComponent />
    </div>
  );
}

export default function PropDrillingPage() {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Prop Drilling</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is Prop Drilling?</h2>
        <p className="text-gray-600 mt-2">
          Prop drilling is the process of passing data from a parent component down through multiple
          layers of child components, even if intermediate components don't need that data.
        </p>
      </section>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">The Problem</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`// Parent
<App user={user} />

// Child (doesn't need user)
<Header user={user} />

// Grandchild (doesn't need user)
<Nav user={user} />

// Great-grandchild (finally uses user)
<UserProfile user={user} />`}
        </pre>
        <p className="text-gray-600 mt-2">
          Every component in the chain must accept and forward the prop, even if they don't use it.
        </p>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Demo: Prop Drilling vs Context</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-red-600 mb-4"> With Prop Drilling</h3>
            <WithoutContext theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-4"> With Context</h3>
            <ThemeContext.Provider value={theme}>
              <WithContext toggleTheme={toggleTheme} />
            </ThemeContext.Provider>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section>
        <h2 className="text-xl font-semibold">Solutions to Prop Drilling</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. React Context</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`const MyContext = createContext();

function App() {
  return (
    <MyContext.Provider value={data}>
      <Child />
    </MyContext.Provider>
  );
}

function DeepChild() {
  const data = useContext(MyContext);
  // No props needed!
}`}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold">2. Component Composition</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-1">
{`function App({ children }) {
  const data = useState('data');
  return children(data);
}

// Usage
<App>
  {data => <Child data={data} />}
</App>`}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold">3. State Management Libraries</h3>
            <p className="text-gray-600 mt-1">Redux, Zustand, Jotai, etc.</p>
          </div>
        </div>
      </section>

      {/* WHEN TO AVOID */}
      <section>
        <h2 className="text-xl font-semibold">When is Prop Drilling OK?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Shallow component trees (2-3 levels)</li>
          <li>Data is only used by direct children</li>
          <li>Component structure is stable</li>
          <li>Performance isn't a concern</li>
        </ul>
      </section>

      {/* WHEN TO USE CONTEXT */}
      <section>
        <h2 className="text-xl font-semibold">When to Use Context</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Deep component trees</li>
          <li>Global app state (theme, user, etc.)</li>
          <li>Data used by many components</li>
          <li>Avoiding excessive prop threading</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Start with props, refactor to context when needed</li>
          <li>Split contexts for different concerns</li>
          <li>Use context for static values (theme, locale)</li>
          <li>Consider performance impact of context</li>
          <li>Document context usage clearly</li>
        </ul>
      </section>
    </main>
  );
}