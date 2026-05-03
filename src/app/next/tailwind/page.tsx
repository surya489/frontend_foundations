export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Tailwind Setup</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Tailwind CSS?</h2>
        <p className="text-gray-600 mt-2">
          Tailwind is a utility-first CSS framework that lets you build designs quickly by composing small, reusable classes directly in your HTML or JSX.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Installing Tailwind</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Install Tailwind along with PostCSS and generate the configuration files.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Tailwind Configuration</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Tell Tailwind where your app files are so it can generate only the styles you use.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Using Tailwind in Global CSS</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-slate-50 text-slate-900 antialiased;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Apply Tailwind base styles and use utility classes in your components.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Tailwind Example</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default function Card() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold">Hello from Tailwind</h2>
      <p className="text-slate-600">Tailwind makes it easy to build responsive interfaces with small utility classes.</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Click me
      </button>
    </div>
  );
}`}</pre>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Tailwind CSS is ideal for building fast, consistent UI in Next.js. Install Tailwind, configure the file paths, and use utility classes in your components. It keeps styling simple and reusable, and the generated CSS is small because Tailwind only includes what you use.
        </p>
      </section>
    </main>
  );
}