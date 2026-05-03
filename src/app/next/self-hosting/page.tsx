export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Self Hosting</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Self Hosting?</h2>
        <p className="text-gray-600 mt-2">
          Self hosting means deploying a Next.js app to your own server or cloud provider instead of using a managed service like Vercel.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Deployment Options</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Docker container on AWS, Azure, or Google Cloud</li>
          <li>Node.js server on a virtual machine</li>
          <li>Managed Kubernetes or serverless platform</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Build and Start</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`npm run build
npm start`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Build your app and then start the production server. Use your chosen host to run these commands.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Considerations</h2>
        <p className="text-gray-600 mt-2">
          Self hosting gives control over infrastructure but requires managing deployments, scaling, SSL, and performance manually.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Self hosting is a good choice when you need full control over your environment. Plan for build and runtime setup, and use the same Next.js build process you would on any host.
        </p>
      </section>
    </main>
  );
}