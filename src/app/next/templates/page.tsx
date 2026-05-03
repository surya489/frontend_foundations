export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Templates</h1>

      <section>
        <h2 className="text-xl font-semibold">What is a Template?</h2>
        <p className="text-gray-600 mt-2">
          A template is similar to a layout, but with one key difference: templates create a new instance of the component every time you navigate to a page. This means the template component re-renders on every navigation, while layouts do not.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Templates vs Layouts</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Layout (layout.tsx)</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Persists across navigation</li>
              <li>State is maintained</li>
              <li>Doesn't re-render on page changes</li>
              <li>Good for navigation, persistent UI</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Template (template.tsx)</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Creates new instance on navigation</li>
              <li>State resets on page changes</li>
              <li>Re-renders on every navigation</li>
              <li>Good for page-specific effects</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use Templates</h2>
        <p className="text-gray-600 mt-2">
          Use templates when you need something to reset or re-initialize on every page navigation:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Page transitions:</strong> Animations between page changes</li>
          <li><strong>Analytics tracking:</strong> Track page views on every navigation</li>
          <li><strong>Form state reset:</strong> Clear forms when navigating away</li>
          <li><strong>Scroll position:</strong> Reset scroll to top on page changes</li>
          <li><strong>Theme changes:</strong> Apply different themes per page</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Creating a Template</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Template Structure:</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-transition">
      {/* This re-renders on every navigation */}
      <div className="fade-in">
        {children}
      </div>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Just like layouts, templates receive <code className="bg-gray-100 px-1 rounded">children</code> as a prop containing the page content.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example: Page Transition Template</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/template.tsx:

'use client';

import { useEffect } from 'react';

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // This runs on every page navigation
    console.log('Page changed!');
  }, []);

  return (
    <div className="page-container">
      <div className="animate-fade-in">
        {children}
      </div>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            This template will re-run the useEffect on every navigation, allowing you to track page changes or apply animations.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Layout + Template Together</h2>
        <p className="text-gray-600 mt-2">
          You can have both a layout and a template in the same folder. They work together:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mt-4">
          <pre>{`app/blog/
├── layout.tsx     # Persistent navigation
├── template.tsx   # Page transitions
└── page.tsx       # Blog listing`}</pre>
        </div>
        <p className="text-gray-600 mt-2">
          The layout wraps the template, and the template wraps the page. The layout persists, but the template re-renders on navigation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-blue-400 pl-4">
            <h3 className="font-semibold">Analytics Tracking</h3>
            <p className="text-gray-600 text-sm">Send page view events on every navigation.</p>
          </div>
          <div className="border-l-4 border-green-400 pl-4">
            <h3 className="font-semibold">Loading States</h3>
            <p className="text-gray-600 text-sm">Show loading animations between page transitions.</p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4">
            <h3 className="font-semibold">Scroll Management</h3>
            <p className="text-gray-600 text-sm">Reset scroll position when navigating to new pages.</p>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Templates are like layouts but create a new component instance on every navigation. Use them when you need something to reset or re-initialize with each page change, like animations, analytics tracking, or form resets.
        </p>
      </section>
    </main>
  );
}