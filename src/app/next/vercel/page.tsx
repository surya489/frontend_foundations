export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Deployment (Vercel)</h1>

      <section>
        <h2 className="text-xl font-semibold">Why Deploy on Vercel?</h2>
        <p className="text-gray-600 mt-2">
          Vercel is the company behind Next.js, and it’s optimized for deploying Next.js apps. It supports App Router features, edge functions, and serverless routes out of the box.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Getting Started</h2>
        <p className="text-gray-600 mt-2">
          Connect your GitHub or GitLab repository, import the project, and Vercel will automatically build and deploy your app whenever you push code.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Automatic Builds</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">
            Vercel detects Next.js automatically and runs the appropriate build command. It handles SSR, static generation, and edge deployments with minimal configuration.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Preview Deployments</h2>
        <p className="text-gray-600 mt-2">
          Every pull request gets its own preview deployment, so you can test changes before merging. This is great for collaboration and QA.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Vercel is the easiest option for deploying Next.js apps. It offers instant previews, edge-ready hosting, and smart builds that work with modern Next.js features automatically.
        </p>
      </section>
    </main>
  );
}