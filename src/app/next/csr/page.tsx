export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">CSR in Next.js</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Client-Side Rendering?</h2>
        <p className="text-gray-600 mt-2">
          Client-Side Rendering (CSR) is a method where the web page is rendered directly in the user's browser using JavaScript. Instead of the server sending a complete HTML page, it sends a minimal HTML shell and JavaScript code. The browser then downloads the JavaScript, runs it, and builds the page content dynamically.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How CSR Works</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold">Server Sends Shell</h3>
                <p className="text-gray-600 text-sm">Server sends basic HTML with JavaScript links.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold">Browser Downloads JS</h3>
                <p className="text-gray-600 text-sm">Browser fetches and executes JavaScript bundles.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold">JavaScript Builds Page</h3>
                <p className="text-gray-600 text-sm">React components render and create the page content.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold">Page Becomes Interactive</h3>
                <p className="text-gray-600 text-sm">User can interact with the fully rendered page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">CSR in Next.js</h2>
        <p className="text-gray-600 mt-2">
          In Next.js, you can force client-side rendering by using the <code className="bg-gray-100 px-1 rounded">'use client'</code> directive at the top of your component.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Client Component Example</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';

import { useState, useEffect } from 'react';

export default function ClientPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Client-Side Rendered Page</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            This component runs entirely in the browser, including data fetching.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Benefits of CSR</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Interactivity</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Rich user interactions</li>
              <li>Real-time updates</li>
              <li>Complex UI components</li>
              <li>State management</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Performance</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Fast subsequent navigation</li>
              <li>Code splitting</li>
              <li>Progressive loading</li>
              <li>Background updates</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">Development</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Full JavaScript ecosystem</li>
              <li>Client-side libraries</li>
              <li>Browser APIs access</li>
              <li>Easy debugging</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-orange-600">User Experience</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>App-like feel</li>
              <li>Offline capabilities</li>
              <li>Smooth transitions</li>
              <li>Personalization</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">CSR Challenges</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-red-600">SEO Problems</h3>
              <p className="text-gray-600 text-sm">Search engines see empty HTML initially, making content hard to index.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Slow Initial Load</h3>
              <p className="text-gray-600 text-sm">Users wait for JavaScript to download and execute before seeing content.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Performance Issues</h3>
              <p className="text-gray-600 text-sm">Large JavaScript bundles can slow down page loads, especially on mobile.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600">Accessibility</h3>
              <p className="text-gray-600 text-sm">Screen readers and users with JavaScript disabled see empty pages.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">CSR vs Other Rendering Methods</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left">Method</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Initial Load</th>
                <th className="border border-gray-300 px-4 py-2 text-left">SEO</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Interactivity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">CSR</td>
                <td className="border border-gray-300 px-4 py-2">Slow</td>
                <td className="border border-gray-300 px-4 py-2">Poor</td>
                <td className="border border-gray-300 px-4 py-2">Excellent</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">SSR</td>
                <td className="border border-gray-300 px-4 py-2">Medium</td>
                <td className="border border-gray-300 px-4 py-2">Good</td>
                <td className="border border-gray-300 px-4 py-2">Good</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">SSG</td>
                <td className="border border-gray-300 px-4 py-2">Fast</td>
                <td className="border border-gray-300 px-4 py-2">Excellent</td>
                <td className="border border-gray-300 px-4 py-2">Limited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use CSR</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Dashboard Apps:</strong> Complex interfaces with real-time data</li>
          <li><strong>Social Networks:</strong> Highly interactive user experiences</li>
          <li><strong>Admin Panels:</strong> Internal tools with frequent updates</li>
          <li><strong>Web Applications:</strong> App-like experiences with routing</li>
          <li><strong>Progressive Web Apps:</strong> Offline capabilities and push notifications</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Hydration in CSR</h2>
        <p className="text-gray-600 mt-2">
          Hydration is the process where React takes over the static HTML and makes it interactive by attaching event handlers and state.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Hydration Process</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">1</span>
              <span>Server sends static HTML</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">2</span>
              <span>Browser renders static HTML (no interactivity)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">3</span>
              <span>JavaScript loads and executes</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">4</span>
              <span>React hydrates: attaches event handlers and state</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">5</span>
              <span>Page becomes fully interactive</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">CSR Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Code Splitting:</strong> Break your JavaScript into smaller chunks that load as needed</li>
            <li><strong>Lazy Loading:</strong> Load components only when they're about to be displayed</li>
            <li><strong>Service Workers:</strong> Cache resources for offline use and faster subsequent loads</li>
            <li><strong>Progressive Enhancement:</strong> Ensure basic functionality works without JavaScript</li>
            <li><strong>Bundle Analysis:</strong> Monitor and optimize your JavaScript bundle size</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">CSR with Next.js App Router</h2>
        <p className="text-gray-600 mt-2">
          In Next.js 13+ App Router, components are Server Components by default. You must explicitly mark components as client components.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Client Component Patterns</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/dashboard/page.tsx (Server Component)
import ClientChart from './ClientChart';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ClientChart /> {/* Client Component */}
    </div>
  );
}

// app/dashboard/ClientChart.tsx (Client Component)
'use client';

import { useEffect, useState } from 'react';

export default function ClientChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return <Chart data={data} />;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use Server Components for static content and Client Components only where interactivity is needed.
          </p>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Client-Side Rendering provides rich, interactive experiences but at the cost of slower initial loads and SEO challenges. It's best used for applications where user interaction is more important than initial page speed or search engine visibility. Modern frameworks like Next.js help mitigate these issues through hybrid approaches.
        </p>
      </section>
    </main>
  );
}