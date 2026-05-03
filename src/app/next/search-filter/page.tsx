export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Search & Filters</h1>

      <section>
        <h2 className="text-xl font-semibold">Search and Filter Basics</h2>
        <p className="text-gray-600 mt-2">
          Search and filter interfaces help users find the right data quickly. In Next.js, you can implement them with query parameters and client-side state.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Query Parameters Example</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default function Page({ searchParams }) {
  const query = searchParams.q || '';

  return <div>Searching for: {query}</div>;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Read the search term from the URL and update results based on it.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Filtering Lists</h2>
        <p className="text-gray-600 mt-2">
          Use selected filters to narrow results. Filters can be based on categories, dates, status, or any data property.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Search and filtering make apps more usable. In Next.js, use query parameters to store search state and build filter controls that update the list dynamically.
        </p>
      </section>
    </main>
  );
}