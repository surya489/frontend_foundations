export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Project Structure (App Router)</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Project Structure?</h2>
        <p className="text-gray-600 mt-2">
          Project structure refers to how you organize your files and folders in a Next.js project. A good structure makes your code easier to find, maintain, and work with. Next.js uses the App Router, which organizes your project in a specific way.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Next.js App Router Structure</h2>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
          <pre>{`my-next-app/
├── app/                    # Main application folder
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── [dynamic]/         # Dynamic routes
├── components/            # Reusable components
├── lib/                   # Utility functions
├── public/                # Static files
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind CSS config
└── tsconfig.json          # TypeScript config`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">The app/ Folder</h2>
        <p className="text-gray-600 mt-2">
          The <code className="bg-gray-100 px-1 rounded">app/</code> folder is the heart of your Next.js application. It uses file-based routing:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><code className="bg-gray-100 px-1 rounded">app/page.tsx</code> → Home page (/)</li>
          <li><code className="bg-gray-100 px-1 rounded">app/about/page.tsx</code> → About page (/about)</li>
          <li><code className="bg-gray-100 px-1 rounded">app/blog/page.tsx</code> → Blog page (/blog)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key Files in app/</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">layout.tsx</h3>
            <p className="text-gray-600 text-sm">Shared layout for all pages in this folder. Contains navigation, footer, etc.</p>
          </div>
          <div>
            <h3 className="font-semibold">page.tsx</h3>
            <p className="text-gray-600 text-sm">The actual page content. Each folder can have one page.tsx file.</p>
          </div>
          <div>
            <h3 className="font-semibold">loading.tsx</h3>
            <p className="text-gray-600 text-sm">Loading UI shown while page is loading.</p>
          </div>
          <div>
            <h3 className="font-semibold">error.tsx</h3>
            <p className="text-gray-600 text-sm">Error page shown when something goes wrong.</p>
          </div>
          <div>
            <h3 className="font-semibold">not-found.tsx</h3>
            <p className="text-gray-600 text-sm">Page shown when a route doesn't exist.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Other Important Folders</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">components/</h3>
            <p className="text-gray-600 text-sm">Reusable React components that you can use across different pages.</p>
          </div>
          <div>
            <h3 className="font-semibold">lib/</h3>
            <p className="text-gray-600 text-sm">Utility functions, database connections, and helper code.</p>
          </div>
          <div>
            <h3 className="font-semibold">public/</h3>
            <p className="text-gray-600 text-sm">Static files like images, fonts, and icons that can be accessed directly.</p>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Next.js App Router uses folders and files to create your website structure. The <code className="bg-gray-100 px-1 rounded">app/</code> folder contains your pages, and each <code className="bg-gray-100 px-1 rounded">page.tsx</code> file becomes a webpage. This makes organizing your project intuitive and easy to understand.
        </p>
      </section>
    </main>
  );
}