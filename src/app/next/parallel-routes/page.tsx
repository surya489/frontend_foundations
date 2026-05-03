export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Parallel Routes</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Parallel Routes?</h2>
        <p className="text-gray-600 mt-2">
          Parallel routes allow you to render multiple pages simultaneously within the same layout. This is useful for complex dashboards, modals, or any situation where you need to show different content in different sections of the same page. Each parallel route is independent and can be navigated separately.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Parallel Routes Work</h2>
        <p className="text-gray-600 mt-2">
          Parallel routes use named slots with the <code className="bg-gray-100 px-1 rounded">@</code> symbol. Each slot can contain a different page that renders independently.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mt-4">
          <pre>{`app/
├── layout.tsx           # Main layout with slots
├── page.tsx             # Default page
├── @sidebar/
│   └── page.tsx         # Sidebar content
├── @modal/
│   └── page.tsx         # Modal content
└── @content/
    └── page.tsx         # Main content`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Creating Parallel Routes</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Layout with Parallel Slots</h3>
          <div className="bg-white p-3 rounded font-mono text-sm mb-4">
            <pre>{`app/layout.tsx:

export default function Layout({
  children,
  sidebar,
  modal,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="layout">
      <div className="sidebar">{sidebar}</div>
      <div className="main-content">{children}</div>
      {modal && <div className="modal">{modal}</div>}
    </div>
  );
}`}</pre>
          </div>

          <h3 className="font-semibold mb-2">Parallel Route Folders</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/
├── @sidebar/page.tsx    # Renders in sidebar slot
├── @modal/page.tsx      # Renders in modal slot
└── page.tsx             # Renders in children slot`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example: Dashboard with Sidebar</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Dashboard Layout</h3>
          <div className="bg-white p-3 rounded font-mono text-sm mb-4">
            <pre>{`app/dashboard/layout.tsx:

export default function DashboardLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        {sidebar}
      </aside>
      <main className="content">
        {children}
      </main>
    </div>
  );
}`}</pre>
          </div>

          <h3 className="font-semibold mb-2">Route Structure</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/dashboard/
├── layout.tsx
├── @sidebar/page.tsx     # Navigation menu
├── page.tsx              # Dashboard overview
├── analytics/
│   ├── @sidebar/page.tsx # Analytics nav
│   └── page.tsx          # Analytics content
└── users/
    ├── @sidebar/page.tsx # Users nav
    └── page.tsx          # Users list`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Modal Parallel Routes</h2>
        <p className="text-gray-600 mt-2">
          Parallel routes are perfect for modals that can open on any page:
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/
├── layout.tsx           # Includes modal slot
├── @modal/
│   ├── page.tsx         # Default modal (none)
│   ├── login/page.tsx   # Login modal
│   └── signup/page.tsx  # Signup modal
└── page.tsx             # Home page

URLs:
- / → no modal
- /login → login modal open
- /signup → signup modal open`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Independent Navigation</h2>
        <p className="text-gray-600 mt-2">
          Each parallel route can be navigated independently. This means you can change the sidebar content without affecting the main content, and vice versa.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Navigation Example</h3>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Navigate to <code className="bg-gray-100 px-1 rounded">/dashboard/analytics</code> → Main content changes to analytics</li>
            <li>Sidebar stays the same unless you have <code className="bg-gray-100 px-1 rounded">@sidebar</code> in analytics folder</li>
            <li>Each slot navigates independently</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use Parallel Routes</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Complex Dashboards:</strong> Different sections that update independently</li>
          <li><strong>Modals and Dialogs:</strong> Content that appears over the main page</li>
          <li><strong>Sidebars and Panels:</strong> Navigation or context that changes with the page</li>
          <li><strong>Multi-pane Interfaces:</strong> Applications with multiple content areas</li>
          <li><strong>Conditional Rendering:</strong> Show different content based on user state</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Loading and Error States</h2>
        <p className="text-gray-600 mt-2">
          Each parallel route can have its own loading and error states:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
          <pre>{`app/dashboard/
├── @sidebar/
│   ├── page.tsx
│   ├── loading.tsx    # Sidebar loading state
│   └── error.tsx      # Sidebar error state
├── loading.tsx        # Main content loading
└── error.tsx          # Main content error`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Use descriptive slot names (e.g., <code className="bg-gray-100 px-1 rounded">@sidebar</code>, <code className="bg-gray-100 px-1 rounded">@modal</code>)</li>
          <li>Keep parallel routes simple and focused</li>
          <li>Consider accessibility when using modals</li>
          <li>Use for content that truly needs to be independent</li>
          <li>Test navigation between parallel routes thoroughly</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Parallel routes let you render multiple independent pages in the same layout. Use the <code className="bg-gray-100 px-1 rounded">@</code> symbol to create named slots, and each slot can have its own navigation, loading states, and content. Perfect for complex interfaces like dashboards and modal systems.
        </p>
      </section>
    </main>
  );
}