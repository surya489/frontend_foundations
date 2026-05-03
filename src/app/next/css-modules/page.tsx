export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">CSS Modules</h1>

      <section>
        <h2 className="text-xl font-semibold">What are CSS Modules?</h2>
        <p className="text-gray-600 mt-2">
          CSS Modules are a way to write CSS that is scoped to a component. This helps prevent style conflicts by generating unique class names behind the scenes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How to Use CSS Modules</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Button.module.css
.button {
  background: #2563eb;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
}

// Button.tsx
import styles from './Button.module.css';

export default function Button() {
  return <button className={styles.button}>Click me</button>;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Import the stylesheet as a module and use the class names as properties on the imported object.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Scoped Styles</h2>
        <p className="text-gray-600 mt-2">
          CSS Modules automatically scope class names to the component, so the same class name can be used in different files without conflict.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Composition and Multiple Classes</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// card.module.css
.card {
  padding: 20px;
  border: 1px solid #d1d5db;
}
.cardPrimary {
  background: #eff6ff;
}

// Card.tsx
import styles from './card.module.css';

export default function Card({ primary }) {
  return (
    <div className={
      primary ? \
        \\`
          \\${styles.card} \\${styles.cardPrimary}
        \\` : styles.card
    }>
      Card content
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Combine multiple module class names using template strings or array helpers.</p>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          CSS Modules are a great way to keep styles local to components in Next.js. They are easy to set up, avoid naming collisions, and work well with the App Router. Use modules when you want predictable, component-scoped styling that is simple to maintain.
        </p>
      </section>
    </main>
  );
}