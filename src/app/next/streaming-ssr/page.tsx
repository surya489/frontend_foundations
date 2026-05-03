export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Streaming SSR</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Streaming SSR?</h2>
        <p className="text-gray-600 mt-2">
          Streaming server-side rendering sends HTML to the browser as it is generated, instead of waiting for the full page to be ready. This improves perceived performance for users.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Next.js Streams Content</h2>
        <p className="text-gray-600 mt-2">
          With React Server Components and the App Router, Next.js can render parts of a page as they become available, allowing the browser to display content earlier.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Using Suspense for Streaming</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import { Suspense } from 'react';
import Loading from './loading';
import UserProfile from './UserProfile';

export default function Page() {
  return (
    <main>
      <h1>User Dashboard</h1>
      <Suspense fallback={<Loading />}>
        <UserProfile />
      </Suspense>
    </main>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Suspense lets part of the page render while other parts are still loading on the server.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use Streaming</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Large pages with multiple independent sections</li>
          <li>Content that loads from several APIs</li>
          <li>Pages where early content improves user experience</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Streaming SSR makes pages feel faster by sending usable HTML as soon as it is ready. Use Suspense in the App Router to stream components independently, especially when fetching data from multiple sources.
        </p>
      </section>
    </main>
  );
}