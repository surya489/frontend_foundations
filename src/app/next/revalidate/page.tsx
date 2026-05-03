export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Revalidate Tag & Path</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Revalidation?</h2>
        <p className="text-gray-600 mt-2">
          Revalidation is the process of updating cached data in Next.js. When you have cached content that becomes outdated, you need a way to refresh it. Next.js provides two main functions for this: <code className="bg-gray-100 px-1 rounded">revalidatePath</code> and <code className="bg-gray-100 px-1 rounded">revalidateTag</code>. These functions allow you to selectively invalidate cached content.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">revalidatePath</h2>
        <p className="text-gray-600 mt-2">
          <code className="bg-gray-100 px-1 rounded">revalidatePath</code> invalidates the cache for a specific path. This is useful when you want to refresh an entire page or route.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Basic Path Revalidation</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import { revalidatePath } from 'next/cache';

// In a Server Action
export async function updatePost(postId, formData) {
  // Update the post in database
  await db.posts.update(postId, {
    title: formData.get('title'),
    content: formData.get('content'),
  });

  // Revalidate the blog page
  revalidatePath('/blog');

  // Revalidate the specific post page
  revalidatePath(\`/blog/\${postId}\`);
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            After updating a post, both the blog listing and the specific post page are refreshed.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">revalidateTag</h2>
        <p className="text-gray-600 mt-2">
          <code className="bg-gray-100 px-1 rounded">revalidateTag</code> invalidates cache entries that have been tagged with a specific tag. This is more granular than path revalidation.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Tag-Based Revalidation</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// When fetching data, add tags
const posts = await fetch('https://api.example.com/posts', {
  next: { tags: ['posts'] }
});

const categories = await fetch('https://api.example.com/categories', {
  next: { tags: ['categories'] }
});

// In a Server Action
import { revalidateTag } from 'next/cache';

export async function createPost(formData) {
  const newPost = await db.posts.create({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  // Only invalidate posts, not categories
  revalidateTag('posts');
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Only the posts cache is invalidated, categories remain cached.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">When to Use Each Method</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Use revalidatePath when:</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>You want to refresh an entire page</li>
              <li>Multiple types of data changed</li>
              <li>You want simple, broad invalidation</li>
              <li>You're not using cache tags</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Use revalidateTag when:</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li>You want precise cache control</li>
              <li>Different data types need separate invalidation</li>
              <li>You have complex caching relationships</li>
              <li>You want to minimize unnecessary revalidation</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server Actions and Revalidation</h2>
        <p className="text-gray-600 mt-2">
          Server Actions are the primary place where you'll use revalidation functions. They run on the server and can safely call cache invalidation functions.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Server Action with Revalidation</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';

import { updatePost } from './actions';

export function EditPostForm({ postId }) {
  return (
    <form action={updatePost}>
      <input name="title" defaultValue="Post Title" />
      <textarea name="content">Post content...</textarea>
      <input name="postId" value={postId} type="hidden" />
      <button type="submit">Update Post</button>
    </form>
  );
}

// app/actions.ts
'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export async function updatePost(formData) {
  const postId = formData.get('postId');
  const title = formData.get('title');
  const content = formData.get('content');

  // Update database
  await db.posts.update(postId, { title, content });

  // Revalidate the cache
  revalidatePath('/blog');
  revalidateTag('posts');
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Server Actions handle form submissions and revalidate cache after database updates.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">API Routes and Revalidation</h2>
        <p className="text-gray-600 mt-2">
          You can also use revalidation in API routes, though Server Actions are usually preferred for data mutations.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">API Route Revalidation</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/api/posts/route.ts
import { revalidateTag } from 'next/cache';

export async function POST(request) {
  const post = await request.json();

  // Create post in database
  const newPost = await db.posts.create(post);

  // Revalidate posts cache
  revalidateTag('posts');

  return Response.json(newPost);
}

// app/api/revalidate/route.ts
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request) {
  const { path, tag } = await request.json();

  if (path) revalidatePath(path);
  if (tag) revalidateTag(tag);

  return Response.json({ success: true });
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            API routes can revalidate cache, useful for webhooks or external integrations.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Advanced Tag Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Multiple Tags</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Tag with multiple categories
const post = await fetch(\`/api/posts/\${id}\`, {
  next: { tags: ['posts', \`post-\${id}\`, 'author-\${authorId}'] }
});

// Revalidate specific post
revalidateTag(\`post-\${id}\`);

// Revalidate all posts by author
revalidateTag(\`author-\${authorId}\`);

// Revalidate all posts
revalidateTag('posts');`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Use multiple tags for flexible invalidation strategies.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Hierarchical Tags</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Hierarchical tagging
const data = await fetch('/api/dashboard', {
  next: { tags: ['dashboard', 'stats', 'charts'] }
});

// Revalidate just charts
revalidateTag('charts');

// Revalidate entire dashboard
revalidateTag('dashboard');`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Organize tags hierarchically for different levels of invalidation.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Revalidation in Development vs Production</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-yellow-600">Development</h3>
              <p className="text-gray-600 text-sm">Revalidation functions work but cache behavior may differ. Use headers to debug caching.</p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600">Production</h3>
              <p className="text-gray-600 text-sm">Full caching and revalidation behavior is active. Make sure to test thoroughly.</p>
            </div>
            <div className="bg-white p-2 rounded font-mono text-xs">
              <pre>{`// Check cache status in dev tools
const res = await fetch('/api/data');
console.log(res.headers.get('x-nextjs-cache')); // HIT, MISS, or STALE`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Revalidation Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">CRUD Operations</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Create
export async function createPost(data) {
  const post = await db.posts.create(data);
  revalidateTag('posts');
  revalidatePath('/blog');
}

// Update
export async function updatePost(id, data) {
  await db.posts.update(id, data);
  revalidateTag(\`post-\${id}\`);
  revalidateTag('posts');
}

// Delete
export async function deletePost(id) {
  await db.posts.delete(id);
  revalidateTag(\`post-\${id}\`);
  revalidateTag('posts');
  revalidatePath('/blog');
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Different revalidation strategies for different operations.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Bulk Operations</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export async function publishAllDrafts() {
  const drafts = await db.posts.findMany({ status: 'draft' });

  for (const draft of drafts) {
    await db.posts.update(draft.id, { status: 'published' });
  }

  // Revalidate once after all updates
  revalidateTag('posts');
  revalidatePath('/blog');
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Batch revalidation to avoid multiple cache invalidations.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Revalidation Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Revalidate After Mutations:</strong> Always revalidate cache after database changes</li>
            <li><strong>Use Specific Tags:</strong> Prefer revalidateTag over revalidatePath for precision</li>
            <li><strong>Batch Revalidations:</strong> Group multiple revalidations to reduce cache misses</li>
            <li><strong>Test Thoroughly:</strong> Verify that updates appear correctly after revalidation</li>
            <li><strong>Monitor Performance:</strong> Watch for excessive revalidation that hurts performance</li>
            <li><strong>Use Appropriate Scope:</strong> Don't over-revalidate - be specific about what needs updating</li>
            <li><strong>Handle Errors:</strong> Make sure revalidation doesn't break if cache operations fail</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Revalidation Limitations</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Server-Only:</strong> Revalidation functions only work on the server</li>
            <li><strong>No Client-Side Cache:</strong> Doesn't affect browser cache or CDNs</li>
            <li><strong>Next.js Specific:</strong> Only works within Next.js applications</li>
            <li><strong>Development Differences:</strong> Behavior may differ between development and production</li>
            <li><strong>Not Real-Time:</strong> Revalidation happens on next request, not instantly</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Combining with ISR</h2>
        <p className="text-gray-600 mt-2">
          Revalidation works perfectly with Incremental Static Regeneration for hybrid caching strategies.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">ISR with Manual Revalidation</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Static generation with revalidate
export const revalidate = 3600; // ISR every hour

export default async function BlogPost({ params }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`, {
    next: { tags: [\`post-\${params.slug}\`] }
  });

  return <Post post={await post.json()} />;
}

// Manual revalidation when content changes
export async function updatePost(slug, content) {
  await db.posts.update(slug, content);

  // Force immediate revalidation
  revalidateTag(\`post-\${slug}\`);
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Combine time-based ISR with on-demand revalidation for optimal performance.
          </p>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Revalidation is essential for keeping cached data fresh. Use <code className="bg-gray-100 px-1 rounded">revalidatePath</code> for broad invalidation and <code className="bg-gray-100 px-1 rounded">revalidateTag</code> for precise control. Always revalidate after data mutations, and test thoroughly to ensure users see updated content.
        </p>
      </section>
    </main>
  );
}