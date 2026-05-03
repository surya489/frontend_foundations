export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Image Optimization</h1>

      <section>
        <h2 className="text-xl font-semibold">Why Image Optimization Matters</h2>
        <p className="text-gray-600 mt-2">
          Optimized images load faster, reduce bandwidth, and improve the user experience. Next.js provides a built-in Image component to help with resizing, format selection, and lazy loading.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Using the Next Image Component</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import Image from 'next/image';

export default function Hero() {
  return (
    <Image
      src="/images/hero.jpg"
      alt="Hero image"
      width={1200}
      height={700}
      priority
    />
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">The Image component automatically optimizes supported image formats and serves responsive versions.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Responsive Images</h2>
        <p className="text-gray-600 mt-2">
          Use width and height props or layout behavior to let Next.js create the right image size for each device and screen size.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Remote Images</h2>
        <p className="text-gray-600 mt-2">
          For external image hosts, update `next.config.ts` with allowed domains under the `images.domains` option.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Next.js image optimization improves load times and serves the best image size and format. Use `next/image` for local assets, enable remote domains when needed, and rely on built-in lazy loading for better performance.
        </p>
      </section>
    </main>
  );
}