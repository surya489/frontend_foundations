export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">What is Next.js</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Next.js?</h2>
        <p className="text-gray-600 mt-2">
          Next.js is a powerful framework built on top of React that makes it easier to create fast, modern websites and web applications. Think of it as a toolkit that gives you extra tools and features to build better websites with React.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Why Use Next.js?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Fast Performance:</strong> Websites load quickly because Next.js optimizes how pages are delivered to users.</li>
          <li><strong>SEO Friendly:</strong> Search engines can easily understand and index your website content.</li>
          <li><strong>Easy to Learn:</strong> If you know React, you can start using Next.js right away.</li>
          <li><strong>Built-in Features:</strong> Comes with routing, image optimization, and more out of the box.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">What Makes Next.js Special?</h2>
        <p className="text-gray-600 mt-2">
          Next.js adds several powerful features to React:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Server-Side Rendering (SSR):</strong> Pages are created on the server for faster loading.</li>
          <li><strong>Static Site Generation (SSG):</strong> Pages can be pre-built for even faster performance.</li>
          <li><strong>File-Based Routing:</strong> Create pages by adding files to folders - no complex configuration needed.</li>
          <li><strong>API Routes:</strong> Build backend functionality right in your Next.js app.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Who Uses Next.js?</h2>
        <p className="text-gray-600 mt-2">
          Many popular websites and companies use Next.js, including:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Netflix</li>
          <li>Twitch</li>
          <li>Hulu</li>
          <li>GitHub</li>
          <li>And many more!</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Next.js is like React's superpower - it takes the best parts of React and adds performance optimizations, SEO benefits, and developer-friendly features to help you build amazing websites faster and easier.
        </p>
      </section>
    </main>
  );
}