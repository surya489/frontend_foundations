export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Form Handling with Server Actions</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Server Actions?</h2>
        <p className="text-gray-600 mt-2">
          Server Actions let you handle form submissions on the server without writing a separate API route. They keep form logic close to the component and simplify data handling.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Simple Form Example</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use server';

export async function submitForm(data) {
  const name = data.get('name');
  // Save the name or call an API
}

export default function ContactForm() {
  return (
    <form action={submitForm}>
      <input type="text" name="name" />
      <button type="submit">Send</button>
    </form>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Define an action on the server and wire it directly to the form `action` prop.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Benefits</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>No separate API endpoint needed</li>
          <li>Reduced client-side JavaScript</li>
          <li>Cleaner data handling and validation on the server</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Server Actions make forms in Next.js easier by moving submission logic to the server. Use them when you want server-side processing without a separate API route.
        </p>
      </section>
    </main>
  );
}