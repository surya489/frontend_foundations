export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Pagination</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Pagination?</h2>
        <p className="text-gray-600 mt-2">
          Pagination breaks long lists into smaller page chunks. It helps users navigate large datasets without loading everything at once.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Simple Pagination Example</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default function Page({ searchParams }) {
  const page = Number(searchParams.page || 1);
  const start = (page - 1) * 10;
  const end = start + 10;

  return (
    <div>
      <p>Showing items {start + 1} to {end}</p>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Use query parameters for page number and calculate which items to show.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Navigation Controls</h2>
        <p className="text-gray-600 mt-2">
          Add next and previous links so users can move between pages easily and preserve search state.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Pagination helps keep page data manageable and improves performance. Use query parameters or route segments to build page navigation and load only the data needed for each view.
        </p>
      </section>
    </main>
  );
}