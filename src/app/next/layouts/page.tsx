export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Layouts</h1>

      <section>
        <h2 className="text-xl font-semibold">What is a Layout?</h2>
        <p className="text-gray-600 mt-2">
          A layout is like a frame or template that wraps around your page content. It contains elements that you want to appear on multiple pages, like navigation menus, footers, or sidebars. Instead of repeating the same code on every page, you put it in a layout.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Layouts Work in Next.js</h2>
        <p className="text-gray-600 mt-2">
          In Next.js App Router, layouts are created using <code className="bg-gray-100 px-1 rounded">layout.tsx</code> files. These files export a component that wraps the content of pages in that folder and all subfolders.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mt-4">
          <pre>{`app/
├── layout.tsx          # Root layout (wraps all pages)
├── page.tsx            # Home page
└── dashboard/
    ├── layout.tsx      # Dashboard layout (wraps dashboard pages)
    ├── page.tsx        # Dashboard home
    └── settings/
        └── page.tsx    # Dashboard settings`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Creating a Layout</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Basic Layout Structure:</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>Navigation</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            The <code className="bg-gray-100 px-1 rounded">children</code> prop contains the page content that gets wrapped by the layout.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Root Layout (app/layout.tsx)</h2>
        <p className="text-gray-600 mt-2">
          The root layout is required and wraps your entire application. It should include:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><code className="bg-gray-100 px-1 rounded">&lt;html&gt;</code> and <code className="bg-gray-100 px-1 rounded">&lt;body&gt;</code> tags</li>
          <li>Global styles and fonts</li>
          <li>Navigation and footer</li>
          <li>Any providers (like theme providers)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Nested Layouts</h2>
        <p className="text-gray-600 mt-2">
          You can have layouts at different levels. A layout in a subfolder will wrap only the pages in that folder and its subfolders.
        </p>
        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <h3 className="font-semibold mb-2">Example: Dashboard Layout</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/dashboard/layout.tsx:

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <aside>Dashboard Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            This layout will wrap all pages under <code className="bg-gray-100 px-1 rounded">/dashboard</code> but not pages outside that folder.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Layout vs Page</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">layout.tsx</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Wraps multiple pages</li>
              <li>Contains shared UI</li>
              <li>Persists across navigation</li>
              <li>Can have its own loading/error states</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">page.tsx</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Contains unique page content</li>
              <li>Changes with navigation</li>
              <li>One per route</li>
              <li>Can fetch its own data</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use Layouts</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Navigation:</strong> Headers, footers, sidebars</li>
          <li><strong>Providers:</strong> Theme, authentication, data contexts</li>
          <li><strong>Shared UI:</strong> Breadcrumbs, page titles</li>
          <li><strong>Section-specific styling:</strong> Different layouts for different parts of your site</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Layouts help you avoid repeating code by wrapping shared UI around your pages. The root layout wraps everything, and you can have nested layouts for different sections of your site. This keeps your code organized and maintainable.
        </p>
      </section>
    </main>
  );
}