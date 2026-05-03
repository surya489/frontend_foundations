import InfiniteScrollDemo from "@/components/js/scenarios/InfiniteScrollDemo";

export default function InfiniteScrollPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">
        Infinite Scroll
      </h1>

      {/* PROBLEM */}
      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-gray-600 mt-2">
          Load more data automatically when the user scrolls near the bottom,
          instead of using pagination buttons.
        </p>
      </section>

      {/* NAIVE */}
      <section>
        <h2 className="text-xl font-semibold">Naive Approach</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`User clicks "Load More" button`}
        </pre>

        <p className="text-gray-600 mt-2">
          Breaks user flow and feels less seamless.
        </p>
      </section>

      {/* SOLUTION */}
      <section>
        <h2 className="text-xl font-semibold">Optimized Approach</h2>

        <p className="text-gray-600 mt-2">
          Use scroll detection or Intersection Observer to load data automatically.
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`if (user reaches bottom) {
  fetch next page
  append data
}`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <InfiniteScrollDemo />
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Detect when user reaches bottom</li>
          <li>Call API for next page</li>
          <li>Append new data to list</li>
          <li>Prevent duplicate calls using loading state</li>
        </ul>
      </section>

      {/* PERFORMANCE */}
      <section>
        <h2 className="text-xl font-semibold">Performance Considerations</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Use IntersectionObserver (better than scroll events)</li>
          <li>Avoid multiple API calls</li>
          <li>Use virtualization for large lists</li>
        </ul>
      </section>

      {/* REAL WORLD */}
      <section>
        <h2 className="text-xl font-semibold">Real-World Use</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Social media feeds</li>
          <li>E-commerce product listing</li>
          <li>News apps</li>
        </ul>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Interview Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Infinite scroll improves UX by loading data dynamically.
          It uses scroll detection or Intersection Observer and requires
          careful handling to avoid performance issues.
        </p>
      </section>
    </main>
  );
}