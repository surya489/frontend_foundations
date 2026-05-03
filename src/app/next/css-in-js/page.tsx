export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">CSS-in-JS</h1>

      <section>
        <h2 className="text-xl font-semibold">What is CSS-in-JS?</h2>
        <p className="text-gray-600 mt-2">
          CSS-in-JS means writing CSS styles directly inside JavaScript or TypeScript. Next.js supports styled-jsx by default, and you can also use libraries like styled-components or Emotion.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Styled-JSX Example</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default function Banner() {
  return (
    <div className="banner">
      Welcome to the site!
      <style jsx>{\`
        .banner {
          padding: 20px;
          background: #0369a1;
          color: white;
          border-radius: 12px;
        }
      \`}</style>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Styled-JSX keeps styles close to the component and scopes them automatically.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Using Styled Components</h2>
        <p className="text-gray-600 mt-2">
          If you prefer a library, styled-components lets you write component-focused styles with support for props and theme values.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use CSS-in-JS</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Small components with unique styles</li>
          <li>Dynamic styles that depend on props</li>
          <li>Projects that want styles colocated with logic</li>
          <li>Maintaining style isolation without extra files</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          CSS-in-JS is a flexible styling option for Next.js that keeps styles near the components that use them. Use styled-jsx for built-in support, or add a library like styled-components if you need advanced theming and prop-based styling. It is best when styles are highly component-specific or when you want to avoid separate CSS files.
        </p>
      </section>
    </main>
  );
}