'use client';

import React, { useState } from 'react';

// Basic composition example
function Dialog({ children, title }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function ConfirmDialog({ onConfirm, onCancel, message }) {
  return (
    <Dialog title="Confirm Action">
      <p className="mb-4">{message}</p>
      <div className="flex gap-2 justify-end">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Confirm
        </button>
      </div>
    </Dialog>
  );
}

// Render Props pattern
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div
      className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {render(position)}
    </div>
  );
}

// Compound Components pattern
const TabsContext = React.createContext();

function Tabs({ children, defaultActive = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultActive);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="border rounded">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="flex border-b">{children}</div>;
}

function Tab({ index, children }) {
  const { activeTab, setActiveTab } = React.useContext(TabsContext);

  return (
    <button
      className={`px-4 py-2 ${activeTab === index ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
      onClick={() => setActiveTab(index)}
    >
      {children}
    </button>
  );
}

function TabPanel({ index, children }) {
  const { activeTab } = React.useContext(TabsContext);
  return activeTab === index ? <div className="p-4">{children}</div> : null;
}

export default function CompositionPage() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Component Composition</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is Component Composition?</h2>
        <p className="text-gray-600 mt-2">
          Component composition is a pattern where components are built by combining smaller,
          reusable components. Instead of inheritance, React encourages composition.
        </p>
      </section>

      {/* BASIC COMPOSITION */}
      <section>
        <h2 className="text-xl font-semibold">Basic Composition</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Dialog({ children, title }) {
  return (
    <div className="modal">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Usage
<Dialog title="My Dialog">
  <p>This is the content</p>
  <button>Close</button>
</Dialog>`}
        </pre>
        <div className="mt-4">
          <button
            onClick={() => setShowDialog(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Show Dialog
          </button>
          {showDialog && (
            <ConfirmDialog
              message="Are you sure you want to delete this item?"
              onConfirm={() => {
                alert('Confirmed!');
                setShowDialog(false);
              }}
              onCancel={() => setShowDialog(false)}
            />
          )}
        </div>
      </section>

      {/* RENDER PROPS */}
      <section>
        <h2 className="text-xl font-semibold">Render Props Pattern</h2>
        <p className="text-gray-600 mt-2">
          A component accepts a function as a prop that returns JSX to render.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

// Usage
<MouseTracker
  render={({ x, y }) => (
    <p>Mouse position: {x}, {y}</p>
  )}
/>`}
        </pre>
        <MouseTracker
          render={({ x, y }) => (
            <div className="text-center">
              <p className="font-semibold">Move your mouse around!</p>
              <p>X: {x}, Y: {y}</p>
            </div>
          )}
        />
      </section>

      {/* COMPOUND COMPONENTS */}
      <section>
        <h2 className="text-xl font-semibold">Compound Components</h2>
        <p className="text-gray-600 mt-2">
          Related components that work together and share implicit state.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

function Tab({ index, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <button onClick={() => setActiveTab(index)}>
      {children}
    </button>
  );
}

// Usage
<Tabs>
  <TabList>
    <Tab index={0}>Tab 1</Tab>
    <Tab index={1}>Tab 2</Tab>
  </TabList>
  <TabPanel index={0}>Content 1</TabPanel>
  <TabPanel index={1}>Content 2</TabPanel>
</Tabs>`}
        </pre>
        <div className="mt-4">
          <Tabs>
            <TabList>
              <Tab index={0}>Home</Tab>
              <Tab index={1}>About</Tab>
              <Tab index={2}>Contact</Tab>
            </TabList>
            <TabPanel index={0}>
              <p>Welcome to the home tab!</p>
            </TabPanel>
            <TabPanel index={1}>
              <p>This is the about section.</p>
            </TabPanel>
            <TabPanel index={2}>
              <p>Contact us here.</p>
            </TabPanel>
          </Tabs>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section>
        <h2 className="text-xl font-semibold">Advantages of Composition</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li><strong>Flexibility</strong> - Components can be reused in different ways</li>
          <li><strong>Separation of Concerns</strong> - Each component has a single responsibility</li>
          <li><strong>Testability</strong> - Easier to test individual components</li>
          <li><strong>Maintainability</strong> - Changes don't affect unrelated parts</li>
          <li><strong>Reusability</strong> - Components can be combined in new ways</li>
        </ul>
      </section>

      {/* WHEN TO USE */}
      <section>
        <h2 className="text-xl font-semibold">When to Use Composition</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Building reusable UI libraries</li>
          <li>Creating flexible component APIs</li>
          <li>Sharing logic between components</li>
          <li>Avoiding prop drilling</li>
          <li>Creating compound component patterns</li>
        </ul>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Use children prop for flexible content</li>
          <li>Provide sensible defaults</li>
          <li>Document composition patterns</li>
          <li>Use TypeScript for better prop validation</li>
          <li>Keep components focused on single responsibilities</li>
        </ul>
      </section>
    </main>
  );
}