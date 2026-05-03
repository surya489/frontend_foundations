export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Route Groups</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Route Groups?</h2>
        <p className="text-gray-600 mt-2">
          Route groups are a way to organize your routes without affecting the URL structure. You can group related routes together for better code organization, apply different layouts to different groups, or keep certain routes separate from others. The folder names in parentheses don't appear in the actual URLs.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Route Groups Work</h2>
        <p className="text-gray-600 mt-2">
          Route groups use parentheses <code className="bg-gray-100 px-1 rounded">( )</code> around the folder name. These folders help you organize your code but are ignored when creating URLs.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mt-4">
          <pre>{`app/
├── (marketing)/
│   ├── page.tsx          → /
│   ├── about/page.tsx    → /about
│   └── contact/page.tsx  → /contact
├── (shop)/
│   ├── layout.tsx        # Shop layout
│   ├── products/page.tsx → /products
│   └── cart/page.tsx     → /cart
└── (auth)/
    ├── login/page.tsx    → /login
    └── signup/page.tsx   → /signup`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Organizing Routes by Feature</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Example: E-commerce Site Organization</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/
├── (marketing)/
│   ├── layout.tsx        # Marketing layout
│   ├── page.tsx          # Home page
│   ├── about/page.tsx    # About page
│   └── blog/page.tsx     # Blog
├── (shop)/
│   ├── layout.tsx        # Shop layout with cart
│   ├── products/page.tsx # Product listing
│   ├── [id]/page.tsx     # Product details
│   └── checkout/page.tsx # Checkout
└── (account)/
    ├── layout.tsx        # Account layout
    ├── profile/page.tsx  # User profile
    ├── orders/page.tsx   # Order history
    └── settings/page.tsx # Account settings`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Each group can have its own layout, loading states, and organization.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Different Layouts for Different Groups</h2>
        <p className="text-gray-600 mt-2">
          Route groups allow you to apply different layouts to different sections of your site:
        </p>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Marketing Layout</h3>
            <div className="bg-gray-50 p-2 rounded font-mono text-sm">
              <pre>{`(marketing)/layout.tsx:
// Simple layout with header/footer`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Shop Layout</h3>
            <div className="bg-gray-50 p-2 rounded font-mono text-sm">
              <pre>{`(shop)/layout.tsx:
// Layout with shopping cart, search bar`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Account Layout</h3>
            <div className="bg-gray-50 p-2 rounded font-mono text-sm">
              <pre>{`(account)/layout.tsx:
// Layout with user menu, breadcrumbs`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Route Groups vs Regular Folders</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Regular Folders</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Appear in URL: /dashboard/users</li>
              <li>Affect routing structure</li>
              <li>Create nested URL segments</li>
              <li>Use for actual page hierarchy</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Route Groups (parentheses)</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>Don't appear in URL</li>
              <li>Only for code organization</li>
              <li>Help group related routes</li>
              <li>Use for layout separation</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Layout Separation:</strong> Different layouts for marketing vs app sections</li>
          <li><strong>Feature Organization:</strong> Group routes by feature (auth, dashboard, admin)</li>
          <li><strong>Team Organization:</strong> Separate routes by team or responsibility</li>
          <li><strong>Conditional Rendering:</strong> Different layouts based on user authentication</li>
          <li><strong>Internationalization:</strong> Separate routes for different languages</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example: Multi-tenant App</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/
├── (public)/
│   ├── layout.tsx        # Public layout
│   ├── page.tsx          # Landing page
│   └── pricing/page.tsx  # Pricing page
├── (authenticated)/
│   ├── layout.tsx        # App layout with nav
│   ├── dashboard/page.tsx
│   └── settings/page.tsx
└── (admin)/
    ├── layout.tsx        # Admin layout
    ├── users/page.tsx
    └── analytics/page.tsx`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Each group has its own layout and access controls, but URLs remain clean.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Use descriptive names in parentheses</li>
          <li>Group routes by functionality or user type</li>
          <li>Apply different layouts to different groups</li>
          <li>Keep route groups shallow (not deeply nested)</li>
          <li>Use them to separate authenticated vs public routes</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Route groups help you organize your code without affecting URLs. Use parentheses around folder names to group related routes together, apply different layouts to different sections, and keep your codebase well-organized.
        </p>
      </section>
    </main>
  );
}