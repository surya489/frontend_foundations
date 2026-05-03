export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Global Styles</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Global Styles?</h2>
        <p className="text-gray-600 mt-2">
          Global styles apply to the entire website, not just one component. In Next.js, global CSS is usually imported in the root layout so every page uses the same base styles.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Adding Global CSS</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// src/app/globals.css
body {
  margin: 0;
  font-family: Inter, sans-serif;
  background: #f8fafc;
  color: #111827;
}

a {
  color: inherit;
  text-decoration: none;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Use the global CSS file for site-wide fonts, colors, and reset styles.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Importing Global CSS</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// src/app/layout.tsx
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Import global styles once in the root layout so they apply to every page.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use Global Styles</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Reset browser default styles</li>
          <li>Define body background and font settings</li>
          <li>Style reusable utilities such as buttons and containers</li>
          <li>Set consistent spacing and typography</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Global styles in Next.js are best for shared design rules that should apply across the whole site. Use a single global CSS file imported in your root layout, and keep most component-specific styling in CSS Modules or a CSS-in-JS solution to avoid accidental style overrides.
        </p>
      </section>
    </main>
  );
}