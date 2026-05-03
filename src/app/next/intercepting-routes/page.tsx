export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Intercepting Routes</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Intercepting Routes?</h2>
        <p className="text-gray-600 mt-2">
          Intercepting routes allow you to intercept navigation and show content in a different way, usually in a modal or different layout, instead of navigating to a new page. This creates smooth transitions and keeps users in context. For example, clicking a photo in a gallery might open it in a modal instead of going to a new page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Intercepting Routes Work</h2>
        <p className="text-gray-600 mt-2">
          Intercepting routes use parentheses <code className="bg-gray-100 px-1 rounded">(..)</code> to match segments from the current route. When a user navigates to an intercepted route, it renders in a slot instead of replacing the current page.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mt-4">
          <pre>{`app/
├── layout.tsx           # Has modal slot
├── @modal/page.tsx      # Default (no modal)
├── photos/
│   └── page.tsx         # Photo gallery
└── photos/
    └── (.)[id]/
        └── page.tsx     # Intercepts /photos/[id]`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Intercepting Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">(.) - Same Level</h3>
            <div className="font-mono text-sm text-gray-600 mt-2">
              <pre>{`app/photos/(.)[id]/page.tsx
Intercepts: /photos/[id]
From: /photos`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">(..) - One Level Up</h3>
            <div className="font-mono text-sm text-gray-600 mt-2">
              <pre>{`app/photos/(..)photo/[id]/page.tsx
Intercepts: /photo/[id]
From: /photos/*`}</pre>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">(...) - Root Level</h3>
            <div className="font-mono text-sm text-gray-600 mt-2">
              <pre>{`app/photos/(...)photo/[id]/page.tsx
Intercepts: /photo/[id]
From: anywhere`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Example: Photo Gallery Modal</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Layout with Modal Slot</h3>
          <div className="bg-white p-3 rounded font-mono text-sm mb-4">
            <pre>{`app/layout.tsx:

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {modal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {modal}
          </div>
        </div>
      )}
    </div>
  );
}`}</pre>
          </div>

          <h3 className="font-semibold mb-2">Photo Gallery</h3>
          <div className="bg-white p-3 rounded font-mono text-sm mb-4">
            <pre>{`app/photos/page.tsx:

export default function PhotosPage() {
  return (
    <div>
      <h1>Photo Gallery</h1>
      <div className="grid">
        {/* Links to intercepted routes */}
        <Link href="/photos/1">Photo 1</Link>
        <Link href="/photos/2">Photo 2</Link>
      </div>
    </div>
  );
}`}</pre>
          </div>

          <h3 className="font-semibold mb-2">Intercepted Photo Modal</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/photos/(.)[id]/page.tsx:

export default function PhotoModal({
  params
}: {
  params: { id: string }
}) {
  return (
    <div className="photo-modal">
      <h2>Photo {params.id}</h2>
      <img src={`/photo-${params.id}.jpg`} />
      <Link href="/photos">Close</Link>
    </div>
  );
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Navigation Behavior</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Intercepted Navigation</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>URL changes: /photos/1</li>
              <li>Content shows in modal</li>
              <li>Background page stays visible</li>
              <li>Back button closes modal</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Direct Navigation</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>URL changes: /photos/1</li>
              <li>Full page navigation</li>
              <li>Replaces current page</li>
              <li>Normal page behavior</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Use Cases</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li><strong>Photo Galleries:</strong> Open photos in modals while keeping gallery visible</li>
          <li><strong>Product Previews:</strong> Quick product views without leaving the catalog</li>
          <li><strong>User Profiles:</strong> Show user details in a slide-out panel</li>
          <li><strong>Shopping Cart:</strong> Quick add to cart without leaving product page</li>
          <li><strong>Search Results:</strong> Preview items before navigating to full page</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Fallback Behavior</h2>
        <p className="text-gray-600 mt-2">
          If someone navigates directly to an intercepted route (like typing the URL or refreshing), it should still work by showing the content in the normal page layout.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/photos/[id]/page.tsx:

// This handles direct navigation to /photos/[id]
// The (.)[id] route handles interception from /photos

export default function PhotoPage({
  params
}: {
  params: { id: string }
}) {
  return (
    <div>
      <h1>Photo {params.id}</h1>
      <img src={`/photo-${params.id}.jpg`} />
      <Link href="/photos">← Back to Gallery</Link>
    </div>
  );
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>Always provide fallback routes for direct navigation</li>
          <li>Use semantic URLs that make sense when shared</li>
          <li>Ensure intercepted routes are accessible (keyboard navigation, screen readers)</li>
          <li>Consider mobile experience - modals might not work well on small screens</li>
          <li>Test both intercepted and direct navigation paths</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Intercepting routes let you show content in modals or different layouts instead of full page navigation. Use parentheses with dots to match route segments, and always provide fallback routes for direct navigation. Perfect for galleries, previews, and contextual interactions.
        </p>
      </section>
    </main>
  );
}