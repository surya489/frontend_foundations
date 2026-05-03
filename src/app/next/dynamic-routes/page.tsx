export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Dynamic Routes</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Dynamic Routes?</h2>
        <p className="text-gray-600 mt-2">
          Dynamic routes allow you to create pages that can handle different content based on the URL. Instead of creating separate files for each page, you create one file that works for many different URLs. This is perfect for blog posts, user profiles, product pages, and more.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">How Dynamic Routes Work</h2>
        <p className="text-gray-600 mt-2">
          In Next.js, you create dynamic routes by using square brackets <code className="bg-gray-100 px-1 rounded">[ ]</code> in the folder name. The content inside the brackets becomes a parameter you can use in your page.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mt-4">
          <pre>{`app/
├── blog/
│   ├── page.tsx           → /blog
│   └── [slug]/
│       └── page.tsx       → /blog/hello-world
│                           → /blog/my-first-post
│                           → /blog/any-slug-here
└── products/
    └── [id]/
        └── page.tsx       → /products/1
                            → /products/abc123
                            → /products/any-id`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Creating a Dynamic Route</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Step 1: Create the folder structure</h3>
          <div className="bg-white p-3 rounded font-mono text-sm mb-4">
            <pre>{`app/blog/[slug]/page.tsx`}</pre>
          </div>

          <h3 className="font-semibold mb-2">Step 2: Access the parameter</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>This is the post with slug: {params.slug}</p>
    </div>
  );
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Examples of Dynamic Routes</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Blog Posts</h3>
            <div className="font-mono text-sm text-gray-600 mt-2">
              <div>URL: /blog/my-awesome-post</div>
              <div>Folder: app/blog/[slug]/page.tsx</div>
              <div>params.slug = "my-awesome-post"</div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">User Profiles</h3>
            <div className="font-mono text-sm text-gray-600 mt-2">
              <div>URL: /users/john-doe</div>
              <div>Folder: app/users/[username]/page.tsx</div>
              <div>params.username = "john-doe"</div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Product Pages</h3>
            <div className="font-mono text-sm text-gray-600 mt-2">
              <div>URL: /products/123</div>
              <div>Folder: app/products/[id]/page.tsx</div>
              <div>params.id = "123"</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Fetching Data for Dynamic Routes</h2>
        <p className="text-gray-600 mt-2">
          You can fetch data based on the dynamic parameter. Next.js provides several ways to do this.
        </p>
        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <h3 className="font-semibold mb-2">Server Component (Recommended)</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export default async function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  // Fetch data based on slug
  const post = await getBlogPost(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Multiple Dynamic Segments</h2>
        <p className="text-gray-600 mt-2">
          You can have multiple dynamic segments in one route:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mt-4">
          <pre>{`app/shop/[category]/[product]/page.tsx
→ /shop/electronics/phone
→ /shop/clothing/shirt

params = {
  category: "electronics",
  product: "phone"
}`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Catch-All Routes</h2>
        <p className="text-gray-600 mt-2">
          Use <code className="bg-gray-100 px-1 rounded">[...slug]</code> to catch multiple path segments:
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/docs/[...slug]/page.tsx
→ /docs/getting-started
→ /docs/advanced/routing/dynamic

params.slug = ["getting-started"]
params.slug = ["advanced", "routing", "dynamic"]`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Optional Catch-All Routes</h2>
        <p className="text-gray-600 mt-2">
          Use <code className="bg-gray-100 px-1 rounded">[[...slug]]</code> for optional segments:
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/blog/[[...slug]]/page.tsx
→ /blog (params.slug = undefined)
→ /blog/hello
→ /blog/2024/january/post`}</pre>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Dynamic routes let you create flexible pages that work with different URLs. Use square brackets in folder names to create parameters, and access them through the <code className="bg-gray-100 px-1 rounded">params</code> prop. This is essential for blogs, e-commerce, and any site with user-generated content.
        </p>
      </section>
    </main>
  );
}