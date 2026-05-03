import Link from "next/link";

const HomePage = () => {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Frontend Redemption</h1>

        <p className="text-lg text-gray-600">
          A focused rebuild of JavaScript, React, and Next.js fundamentals
          after a real interview setback.
        </p>

        <p className="mx-auto max-w-2xl text-sm text-gray-500">
          This project is a structured demonstration of core frontend concepts
          with explanations, examples, and practical implementations.
        </p>

        <div className="mt-4 flex justify-center gap-4">
          <Link
            href="/javascript"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Explore Concepts
          </Link>

          {/* <Link
            href="/improvements"
            className="rounded-lg border px-4 py-2"
          >
            What I Improved
          </Link> */}
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Link href="/javascript" className="rounded-xl border p-6 hover:shadow">
          <h2 className="text-xl font-semibold">JavaScript</h2>
          <p className="mt-2 text-sm text-gray-500">
            Closures, async/await, array methods, and core logic concepts.
          </p>
        </Link>

        <Link href="/react" className="rounded-xl border p-6 hover:shadow">
          <h2 className="text-xl font-semibold">React</h2>
          <p className="mt-2 text-sm text-gray-500">
            Hooks, rendering behavior, and component design patterns.
          </p>
        </Link>

        <Link href="/next" className="rounded-xl border p-6 hover:shadow">
          <h2 className="text-xl font-semibold">Next.js</h2>
          <p className="mt-2 text-sm text-gray-500">
            SSR, routing, API routes, and performance optimizations.
          </p>
        </Link>

        <Link href="/improvements" className="rounded-xl border p-6 hover:shadow">
          <h2 className="text-xl font-semibold">Improvements</h2>
          <p className="mt-2 text-sm text-gray-500">
            What I learned, fixed, and improved after my interview.
          </p>
        </Link>
      </section>

      <section className="mx-auto mt-16 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">Why this project?</h2>

        <p className="mt-4 text-gray-600">
          After my interview, I realized that while I had practical experience,
          I wasn&apos;t able to clearly articulate core concepts.
        </p>

        <p className="mt-2 text-gray-600">
          So I took time to revisit the fundamentals and built this project
          to reinforce my understanding and demonstrate it clearly.
        </p>
      </section>
    </main>
  );
};

export default HomePage;