export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Fullstack App Flow</h1>

      <section>
        <h2 className="text-xl font-semibold">How Fullstack Works in Next.js</h2>
        <p className="text-gray-600 mt-2">
          A fullstack Next.js app includes frontend pages, backend API routes, and shared logic. The App Router makes it easy to combine user interfaces and server code in one project.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Typical Flow</h2>
        <ol className="list-decimal ml-6 text-gray-600 space-y-2">
          <li>User visits a page in the browser.</li>
          <li>Next.js renders the page using server or client components.</li>
          <li>Client code calls an API route or server action.</li>
          <li>The server returns data or performs a side effect.</li>
          <li>The UI updates based on the response.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server Actions and API Routes</h2>
        <p className="text-gray-600 mt-2">
          Use API routes for reusable server APIs, and server actions for form handling or simple write operations directly from a page component.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Sharing Code</h2>
        <p className="text-gray-600 mt-2">
          You can share validation logic, types, and utilities between client and server code. Keep clear boundaries so server-only code stays in server components or route handlers.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          A fullstack Next.js app connects pages, APIs, and server logic in one project. The App Router helps organize this flow cleanly, with server actions and API routes supporting backend behavior and shared utilities keeping code maintainable.
        </p>
      </section>
    </main>
  );
}