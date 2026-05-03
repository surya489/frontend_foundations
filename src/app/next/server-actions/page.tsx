export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Server Actions in Next.js</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Server Actions?</h2>
        <p className="text-gray-600 mt-2">
          Server Actions are an experimental feature in Next.js that allow you to run server-side code directly from client components. They provide a way to handle form submissions, data mutations, and other server operations without needing separate API routes. Server Actions run on the server, giving you access to your database, file system, and other server-side resources while maintaining the simplicity of client-side interactions.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Enabling Server Actions</h2>
        <p className="text-gray-600 mt-2">
          Server Actions are currently experimental and need to be enabled in your Next.js configuration.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Configuration</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// next.config.js
module.exports = {
  experimental: {
    serverActions: true,
  },
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Enable server actions in your Next.js configuration.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Creating Server Actions</h2>
        <p className="text-gray-600 mt-2">
          Server Actions are async functions defined with the 'use server' directive.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Basic Server Action</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/actions.js
'use server';

export async function createUser(formData) {
  // This runs on the server
  const name = formData.get('name');
  const email = formData.get('email');

  // Server-side validation
  if (!name || !email) {
    throw new Error('Name and email are required');
  }

  // Database operation
  const user = await db.user.create({
    data: { name, email }
  });

  // Revalidate the cache
  revalidatePath('/users');

  return { success: true, user };
}

// Or inline in a component file
'use server';

export async function updateProfile(userId, formData) {
  const name = formData.get('name');
  const bio = formData.get('bio');

  await db.user.update({
    where: { id: userId },
    data: { name, bio }
  });

  revalidatePath('/profile');
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Server Actions are defined with 'use server' and can be in separate files or inline.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Using Server Actions in Forms</h2>
        <p className="text-gray-600 mt-2">
          Server Actions work seamlessly with React forms using the action prop.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Form with Server Action</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';

import { createUser } from './actions';

export function UserForm() {
  return (
    <form action={createUser}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit">Create User</button>
    </form>
  );
}

// With TypeScript
'use client';

import { createUser } from './actions';

export function UserForm() {
  const [state, action] = useFormState(createUser, null);

  return (
    <form action={action}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit">Create User</button>
      {state?.error && <p className="error">{state.error}</p>}
    </form>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use the action prop to connect forms to Server Actions.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server Action Signatures</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Form Data Actions</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Receives FormData
'use server';
export async function createPost(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

  // Process form data...
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Actions can receive FormData from form submissions.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Typed Actions</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Custom typed parameters
'use server';
export async function updateUser(userId: string, data: UserUpdateData) {
  const user = await db.user.update({
    where: { id: userId },
    data
  });

  return user;
}

// Usage in client component
'use client';
import { updateUser } from './actions';

export function UserProfile({ userId }) {
  const handleUpdate = async (data) => {
    await updateUser(userId, data);
  };

  return (
    <button onClick={() => handleUpdate({ name: 'New Name' })}>
      Update Name
    </button>
  );
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Actions can accept typed parameters for programmatic calls.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Error Handling</h2>
        <p className="text-gray-600 mt-2">
          Handle errors in Server Actions using try-catch blocks and error boundaries.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Error Handling Patterns</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Server Action with error handling
'use server';
export async function createPost(formData) {
  try {
    const title = formData.get('title');
    const content = formData.get('content');

    // Validation
    if (!title || title.length < 5) {
      return { error: 'Title must be at least 5 characters' };
    }

    // Database operation
    const post = await db.post.create({
      data: { title, content }
    });

    revalidatePath('/posts');
    return { success: true, post };

  } catch (error) {
    console.error('Create post error:', error);

    // Handle specific errors
    if (error.code === 'P2002') {
      return { error: 'A post with this title already exists' };
    }

    return { error: 'Failed to create post. Please try again.' };
  }
}

// Client component with error handling
'use client';
import { createPost } from './actions';
import { useFormState } from 'react-dom';

export function CreatePostForm() {
  const [state, action] = useFormState(createPost, null);

  return (
    <form action={action}>
      <input name="title" placeholder="Title" />
      <textarea name="content" placeholder="Content" />
      <button type="submit">Create Post</button>

      {state?.error && (
        <p className="text-red-600">{state.error}</p>
      )}

      {state?.success && (
        <p className="text-green-600">Post created successfully!</p>
      )}
    </form>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Return error objects from Server Actions and handle them in client components.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">useFormState Hook</h2>
        <p className="text-gray-600 mt-2">
          useFormState provides state management for Server Actions in forms.
        </p>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Form State Management</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import { useFormState } from 'react-dom';
import { createUser } from './actions';

export function UserForm() {
  const [state, action] = useFormState(createUser, {
    message: null,
    errors: null
  });

  return (
    <form action={action}>
      <div>
        <label>Name:</label>
        <input name="name" />
        {state?.errors?.name && (
          <span className="error">{state.errors.name}</span>
        )}
      </div>

      <div>
        <label>Email:</label>
        <input name="email" type="email" />
        {state?.errors?.email && (
          <span className="error">{state.errors.email}</span>
        )}
      </div>

      <button type="submit" disabled={state?.pending}>
        {state?.pending ? 'Creating...' : 'Create User'}
      </button>

      {state?.message && (
        <p className={state.success ? 'success' : 'error'}>
          {state.message}
        </p>
      )}
    </form>
  );
}

// Server Action
'use server';
export async function createUser(prevState, formData) {
  const name = formData.get('name');
  const email = formData.get('email');

  const errors = {};

  if (!name) errors.name = 'Name is required';
  if (!email) errors.email = 'Email is required';
  else if (!email.includes('@')) errors.email = 'Invalid email';

  if (Object.keys(errors).length > 0) {
    return { errors, success: false };
  }

  try {
    const user = await db.user.create({ data: { name, email } });
    return {
      message: 'User created successfully!',
      success: true,
      user
    };
  } catch (error) {
    return {
      message: 'Failed to create user',
      success: false
    };
  }
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            useFormState manages form state and provides access to Server Action results.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Optimistic Updates</h2>
        <p className="text-gray-600 mt-2">
          Provide immediate feedback while Server Actions run in the background.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Optimistic UI</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import { useOptimistic } from 'react';
import { toggleLike } from './actions';

export function LikeButton({ postId, initialLikes }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    initialLikes,
    (state, newLike) => newLike ? state + 1 : state - 1
  );

  const handleLike = async () => {
    // Optimistically update UI
    addOptimisticLike(true);

    try {
      await toggleLike(postId);
    } catch (error) {
      // Revert optimistic update on error
      addOptimisticLike(false);
      console.error('Like failed:', error);
    }
  };

  return (
    <button onClick={handleLike}>
      ❤️ {optimisticLikes}
    </button>
  );
}

// Server Action
'use server';
export async function toggleLike(postId) {
  const post = await db.post.findUnique({ where: { id: postId } });

  if (!post) throw new Error('Post not found');

  const newLikes = post.liked ? post.likes - 1 : post.likes + 1;

  await db.post.update({
    where: { id: postId },
    data: {
      liked: !post.liked,
      likes: newLikes
    }
  });

  revalidatePath('/');
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use optimistic updates for immediate UI feedback.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Revalidation</h2>
        <p className="text-gray-600 mt-2">
          Keep your cached data fresh after mutations.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Cache Revalidation</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import { revalidatePath, revalidateTag } from 'next/cache';

'use server';
export async function createPost(formData) {
  const post = await db.post.create({
    data: {
      title: formData.get('title'),
      content: formData.get('content')
    }
  });

  // Revalidate the posts page
  revalidatePath('/posts');

  // Revalidate specific cache tags
  revalidateTag('posts-list');

  return post;
}

export async function updatePost(postId, formData) {
  const post = await db.post.update({
    where: { id: postId },
    data: { title: formData.get('title') }
  });

  // Revalidate multiple paths
  revalidatePath('/posts');
  revalidatePath(\`/posts/\${postId}\`);

  return post;
}

// In your page component
export default async function PostsPage() {
  const posts = await db.post.findMany();

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

// With cache tags
export async function getPosts() {
  const posts = await db.post.findMany();

  return posts;
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

getPosts.cacheTag = 'posts-list';`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use revalidatePath and revalidateTag to update cached data after mutations.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Security Considerations</h2>
        <p className="text-gray-600 mt-2">
          Server Actions run with elevated privileges and need proper security measures.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Security Best Practices</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Input Validation</h4>
              <div className="bg-white p-3 rounded font-mono text-sm mt-2">
                <pre>{`'use server';
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  age: z.number().min(18).optional()
});

export async function createUser(formData) {
  const data = Object.fromEntries(formData);
  const validatedData = createUserSchema.parse(data);

  // Now use validatedData safely
  const user = await db.user.create({ data: validatedData });
  return user;
}`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-medium">Authorization</h4>
              <div className="bg-white p-3 rounded font-mono text-sm mt-2">
                <pre>{`'use server';
import { auth } from '@/lib/auth';

export async function deletePost(postId) {
  const session = await auth();

  if (!session) {
    throw new Error('Unauthorized');
  }

  const post = await db.post.findUnique({ where: { id: postId } });

  if (post.authorId !== session.user.id) {
    throw new Error('Forbidden');
  }

  await db.post.delete({ where: { id: postId } });
  revalidatePath('/posts');
}`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-medium">Rate Limiting</h4>
              <div className="bg-white p-3 rounded font-mono text-sm mt-2">
                <pre>{`'use server';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});

export async function createComment(formData) {
  const ip = headers().get('x-forwarded-for');
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    throw new Error('Rate limit exceeded');
  }

  // Create comment...
}`}</pre>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Always validate inputs, check authorization, and implement rate limiting.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Progressive Enhancement</h2>
        <p className="text-gray-600 mt-2">
          Server Actions work even when JavaScript is disabled.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">No-JS Fallback</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// This works without JavaScript
export function CommentForm({ postId }) {
  return (
    <form action={createComment}>
      <input name="postId" value={postId} type="hidden" />
      <textarea name="content" placeholder="Write a comment..." />
      <button type="submit">Post Comment</button>
    </form>
  );
}

// Server Action handles both cases
'use server';
export async function createComment(formData) {
  const postId = formData.get('postId');
  const content = formData.get('content');

  // Validation and creation logic...

  revalidatePath(\`/posts/\${postId}\`);
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Server Actions provide progressive enhancement by working without JavaScript.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server Actions vs API Routes</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">When to Use Each</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium text-green-600">Server Actions</h4>
              <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
                <li>Form submissions</li>
                <li>Data mutations from client components</li>
                <li>Progressive enhancement</li>
                <li>Tight coupling with UI</li>
                <li>Automatic revalidation</li>
                <li>Built-in error handling</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium text-blue-600">API Routes</h4>
              <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
                <li>External API consumers</li>
                <li>Complex API logic</li>
                <li>Different response formats</li>
                <li>Third-party integrations</li>
                <li>Webhook endpoints</li>
                <li>Public APIs</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-3 rounded font-mono text-sm mt-4">
            <pre>{`// Server Action - for form submissions
'use server';
export async function updateProfile(formData) {
  // Direct form handling
}

// API Route - for external consumption
export async function GET(request) {
  // JSON API for external clients
  return NextResponse.json(data);
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Choose Server Actions for form handling and API Routes for external APIs.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Advanced Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Composition</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// actions/user.js
'use server';
export async function updateUser(userId, data) {
  // Update logic
}

export async function deleteUser(userId) {
  // Delete logic
}

// actions/post.js
'use server';
import { updateUser } from './user';

export async function createPost(formData) {
  const authorId = formData.get('authorId');

  // Call other server actions
  await updateUser(authorId, { lastPostAt: new Date() });

  const post = await db.post.create({ /* ... */ });

  return post;
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Server Actions can call other Server Actions.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Streaming</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use server';
export async function generateReport() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      // Stream processing logic
      for (const item of largeDataset) {
        controller.enqueue(encoder.encode(JSON.stringify(item)));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      controller.close();
    }
  });

  return new NextResponse(stream, {
    headers: { 'Content-Type': 'application/json' }
  });
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Server Actions can return streaming responses.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Testing Server Actions</h2>
        <p className="text-gray-600 mt-2">
          Test Server Actions to ensure they work correctly.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Testing Patterns</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// __tests__/actions.test.js
import { createUser } from '../actions';

describe('createUser', () => {
  it('should create a user successfully', async () => {
    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'john@example.com');

    const result = await createUser(formData);

    expect(result.success).toBe(true);
    expect(result.user.name).toBe('John Doe');
  });

  it('should handle validation errors', async () => {
    const formData = new FormData();
    formData.append('name', '');
    formData.append('email', 'invalid-email');

    const result = await createUser(formData);

    expect(result.success).toBe(false);
    expect(result.errors.name).toBeDefined();
    expect(result.errors.email).toBeDefined();
  });
});

// Testing with useFormState
import { render, screen, fireEvent } from '@testing-library/react';
import { UserForm } from '../components/UserForm';

test('form submission', async () => {
  render(<UserForm />);

  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'John' }
  });

  fireEvent.click(screen.getByText('Submit'));

  // Assert form state changes
});`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Test Server Actions directly and test form components that use them.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Limitations</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Experimental:</strong> Currently experimental feature</li>
            <li><strong>Server-only:</strong> Can only be called from server components or client components</li>
            <li><strong>No direct client calls:</strong> Cannot be imported and called directly from client code</li>
            <li><strong>Form actions only:</strong> Primarily designed for form submissions</li>
            <li><strong>Next.js only:</strong> Specific to Next.js framework</li>
            <li><strong>Learning curve:</strong> Different mental model than traditional API calls</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Validate inputs:</strong> Always validate and sanitize input data</li>
            <li><strong>Handle errors:</strong> Provide meaningful error messages and proper error handling</li>
            <li><strong>Use TypeScript:</strong> Type your Server Actions for better developer experience</li>
            <li><strong>Revalidate cache:</strong> Use revalidatePath/revalidateTag after mutations</li>
            <li><strong>Security first:</strong> Implement proper authorization and rate limiting</li>
            <li><strong>Test thoroughly:</strong> Test both success and error scenarios</li>
            <li><strong>Progressive enhancement:</strong> Ensure forms work without JavaScript</li>
            <li><strong>Optimistic updates:</strong> Use optimistic UI for better user experience</li>
            <li><strong>Composition:</strong> Break down complex actions into smaller, reusable ones</li>
            <li><strong>Monitor performance:</strong> Keep Server Actions fast and efficient</li>
          </ul>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Server Actions are a powerful experimental feature in Next.js that allows you to run server-side code directly from client components. They are defined with the 'use server' directive and can handle form submissions, data mutations, and other server operations without needing separate API routes. Server Actions provide progressive enhancement (working without JavaScript), automatic revalidation of cached data, and seamless integration with React forms. Use them for form handling and data mutations within your Next.js application, while reserving API Routes for external API consumers. Always implement proper validation, error handling, and security measures. Server Actions represent a shift towards more integrated full-stack development in React applications.
        </p>
      </section>
    </main>
  );
}