export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Routing Basics</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Routing?</h2>
        <p className="text-gray-600 mt-2">
          Routing is how your website decides which page to show when someone visits a URL. For example, when someone goes to <code className="bg-gray-100 px-1 rounded">yoursite.com/about</code>, routing makes sure they see the About page, not the Home page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">File-Based Routing in Next.js</h2>
        <p className="text-gray-600 mt-2">
          Next.js uses a simple system called "file-based routing." This means the folders and files you create automatically become the URLs of your website. No complex configuration needed!
        </p>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mt-4">
          <pre>{`app/
├── page.tsx           → /
├── about/
│   └── page.tsx       → /about
├── blog/
│   ├── page.tsx       → /blog
│   └── first-post/
│       └── page.tsx   → /blog/first-post
└── contact/
    └── page.tsx       → /contact`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How It Works</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h3 className="font-semibold">Create a Folder</h3>
              <p className="text-gray-600 text-sm">Make a folder in the <code className="bg-gray-100 px-1 rounded">app/</code> directory with the name you want for your URL.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h3 className="font-semibold">Add page.tsx</h3>
              <p className="text-gray-600 text-sm">Create a <code className="bg-gray-100 px-1 rounded">page.tsx</code> file inside that folder.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h3 className="font-semibold">Write Your Component</h3>
              <p className="text-gray-600 text-sm">Export a React component from the file - this becomes your page content.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h3 className="font-semibold">Visit the URL</h3>
              <p className="text-gray-600 text-sm">The page is now available at that URL path!</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example: Creating a Blog Page</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600 mb-3">To create a blog page at <code className="bg-gray-100 px-1 rounded">/blog</code>:</p>
          <div className="font-mono text-sm space-y-2">
            <div>1. Create folder: <code className="bg-white px-1 rounded">app/blog/</code></div>
            <div>2. Create file: <code className="bg-white px-1 rounded">app/blog/page.tsx</code></div>
            <div>3. Add content:</div>
          </div>
          <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
            <pre>{`export default function BlogPage() {
  return (
    <div>
      <h1>My Blog</h1>
      <p>Welcome to my blog posts!</p>
    </div>
  );
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Special Files</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-3">
            <h3 className="font-semibold">layout.tsx</h3>
            <p className="text-gray-600 text-sm">Shared layout for all pages in this folder and subfolders.</p>
          </div>
          <div className="border rounded-lg p-3">
            <h3 className="font-semibold">page.tsx</h3>
            <p className="text-gray-600 text-sm">The actual page content.</p>
          </div>
          <div className="border rounded-lg p-3">
            <h3 className="font-semibold">loading.tsx</h3>
            <p className="text-gray-600 text-sm">Shown while the page is loading.</p>
          </div>
          <div className="border rounded-lg p-3">
            <h3 className="font-semibold">error.tsx</h3>
            <p className="text-gray-600 text-sm">Shown when there's an error.</p>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Next.js routing is simple: folders become URLs, and <code className="bg-gray-100 px-1 rounded">page.tsx</code> files become pages. This makes it easy to organize your website structure without complex routing configuration.
        </p>
      </section>
    </main>
  );
}