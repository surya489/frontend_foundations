export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Nested Routes</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Nested Routes?</h2>
        <p className="text-gray-600 mt-2">
          Nested routes allow you to create complex page hierarchies where parent routes can contain child routes. This is perfect for applications with multiple levels of navigation, like dashboards, admin panels, or documentation sites with categories and subcategories.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Nested Routes Work</h2>
        <p className="text-gray-600 mt-2">
          In Next.js App Router, nested routes are created by organizing folders inside other folders. Each folder can have its own layout, page, and loading states. Parent routes can render child routes using the <code className="bg-gray-100 px-1 rounded">&lt;Outlet&gt;</code> or by including child content.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mt-4">
          <pre>{`app/
├── dashboard/
│   ├── layout.tsx       # Dashboard layout
│   ├── page.tsx         # /dashboard
│   ├── analytics/
│   │   └── page.tsx     # /dashboard/analytics
│   ├── users/
│   │   ├── layout.tsx   # Users section layout
│   │   ├── page.tsx     # /dashboard/users
│   │   └── [id]/
│   │       └── page.tsx # /dashboard/users/123
│   └── settings/
│       └── page.tsx     # /dashboard/settings`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Creating Nested Routes</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Example: Dashboard with Nested Sections</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm">1. Main Dashboard Layout</h4>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <pre>{`app/dashboard/layout.tsx:

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <nav>Dashboard Navigation</nav>
      <main>{children}</main>
    </div>
  );
}`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm">2. Dashboard Home Page</h4>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <pre>{`app/dashboard/page.tsx:

export default function DashboardPage() {
  return <h1>Dashboard Overview</h1>;
}`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm">3. Nested Analytics Page</h4>
              <div className="bg-white p-3 rounded font-mono text-sm">
                <pre>{`app/dashboard/analytics/page.tsx:

export default function AnalyticsPage() {
  return <h1>Analytics Dashboard</h1>;
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Nested Layouts</h2>
        <p className="text-gray-600 mt-2">
          You can have layouts at different levels. A layout in a subfolder will only apply to pages within that subfolder and its children.
        </p>
        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <h3 className="font-semibold mb-2">Users Section Layout</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/dashboard/users/layout.tsx:

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="users-section">
      <h2>Users Management</h2>
      <div className="users-content">
        {children}
      </div>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            This layout wraps all pages under <code className="bg-gray-100 px-1 rounded">/dashboard/users</code> but not other dashboard pages.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Route Groups for Organization</h2>
        <p className="text-gray-600 mt-2">
          Use route groups (folders in parentheses) to organize your routes without affecting the URL structure:
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/
├── (auth)/
│   ├── login/page.tsx     → /login
│   └── signup/page.tsx    → /signup
└── (dashboard)/
    ├── layout.tsx         # Dashboard layout
    ├── page.tsx           → /dashboard
    └── analytics/page.tsx → /dashboard/analytics`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Route groups help organize your code but don't appear in the URL.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Benefits of Nested Routes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Better Organization:</strong> Group related pages together</li>
          <li><strong>Shared Layouts:</strong> Common UI for sections of your site</li>
          <li><strong>Loading States:</strong> Different loading UI for different sections</li>
          <li><strong>Error Boundaries:</strong> Section-specific error handling</li>
          <li><strong>Code Splitting:</strong> Automatic code splitting by route</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Patterns</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">E-commerce</h3>
            <div className="font-mono text-xs text-gray-600 mt-2">
              <pre>{`/products
├── /category
├── /search
└── /[id]`}</pre>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Documentation</h3>
            <div className="font-mono text-xs text-gray-600 mt-2">
              <pre>{`/docs
├── /getting-started
├── /guides
└── /api/[...slug]`}</pre>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Admin Panel</h3>
            <div className="font-mono text-xs text-gray-600 mt-2">
              <pre>{`/admin
├── /users
├── /settings
└── /analytics`}</pre>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">User Dashboard</h3>
            <div className="font-mono text-xs text-gray-600 mt-2">
              <pre>{`/dashboard
├── /profile
├── /orders
└── /settings`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Nested routes let you create hierarchical page structures with shared layouts and organization. Use folder nesting to group related pages, and leverage layouts to share common UI elements across sections of your application.
        </p>
      </section>
    </main>
  );
}