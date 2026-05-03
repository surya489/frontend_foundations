export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Route Handlers (API Routes)</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Route Handlers?</h2>
        <p className="text-gray-600 mt-2">
          Route Handlers are API endpoints built into Next.js App Router. They allow you to create server-side API routes using the same file-based routing system as pages. Unlike traditional API routes that live in a separate `/api` folder, Route Handlers are colocated with your pages in the `app` directory, making it easier to organize related code together.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Creating Route Handlers</h2>
        <p className="text-gray-600 mt-2">
          Route Handlers are created by exporting named functions (GET, POST, PUT, DELETE, etc.) from a `route.js` or `route.ts` file in your app directory.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Basic Route Handler</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/api/users/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  // Handle GET requests to /api/users
  const users = await fetchUsersFromDatabase();

  return NextResponse.json(users);
}

export async function POST(request) {
  // Handle POST requests to /api/users
  const body = await request.json();
  const newUser = await createUser(body);

  return NextResponse.json(newUser, { status: 201 });
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Export named functions for each HTTP method you want to handle.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">File Structure</h2>
        <p className="text-gray-600 mt-2">
          Route Handlers use the same file-based routing as pages, but with `route.js` instead of `page.js`.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">App Directory Structure</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`app/
├── api/
│   ├── users/
│   │   ├── route.js          // /api/users
│   │   └── [id]/
│   │       └── route.js      // /api/users/[id]
│   ├── products/
│   │   ├── route.js          // /api/products
│   │   └── [id]/
│   │       └── route.js      // /api/products/[id]
│   └── categories/
│       └── route.js          // /api/categories
├── dashboard/
│   ├── page.js               // /dashboard
│   └── api/
│       └── stats/
│           └── route.js      // /dashboard/api/stats
└── blog/
    ├── [slug]/
    │   ├── page.js           // /blog/[slug]
    │   └── api/
    │       └── comments/
    │           └── route.js  // /blog/[slug]/api/comments`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Route Handlers can be nested anywhere in your app directory structure.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">HTTP Methods</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">GET - Retrieve Data</h3>
            <div className="bg-blue-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export async function GET(request, { params }) {
  // Get query parameters
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || '10';
  const offset = searchParams.get('offset') || '0';

  // Get dynamic route parameters
  const id = params.id; // For /api/users/[id]

  const data = await fetchData({ limit, offset, id });

  return NextResponse.json({
    data,
    pagination: { limit, offset }
  });
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">GET requests retrieve data and can include query parameters and route parameters.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">POST - Create Data</h3>
            <div className="bg-green-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = validateUserData(body);
    if (!validatedData.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validatedData.errors },
        { status: 400 }
      );
    }

    // Create resource
    const newResource = await createResource(validatedData.data);

    return NextResponse.json(newResource, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">POST requests create new resources and return the created data.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-orange-600">PUT - Update Data</h3>
            <div className="bg-orange-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export async function PUT(request, { params }) {
  const id = params.id;
  const body = await request.json();

  // Check if resource exists
  const existingResource = await getResourceById(id);
  if (!existingResource) {
    return NextResponse.json(
      { error: 'Resource not found' },
      { status: 404 }
    );
  }

  // Update resource (full update)
  const updatedResource = await updateResource(id, body);

  return NextResponse.json(updatedResource);
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">PUT requests perform full updates of existing resources.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">PATCH - Partial Update</h3>
            <div className="bg-purple-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export async function PATCH(request, { params }) {
  const id = params.id;
  const updates = await request.json();

  // Apply partial updates
  const updatedResource = await patchResource(id, updates);

  if (!updatedResource) {
    return NextResponse.json(
      { error: 'Resource not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(updatedResource);
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">PATCH requests perform partial updates of existing resources.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-red-600">DELETE - Remove Data</h3>
            <div className="bg-red-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export async function DELETE(request, { params }) {
  const id = params.id;

  // Check if resource exists
  const resource = await getResourceById(id);
  if (!resource) {
    return NextResponse.json(
      { error: 'Resource not found' },
      { status: 404 }
    );
  }

  // Soft delete or hard delete
  await deleteResource(id);

  return NextResponse.json({ message: 'Resource deleted' });
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">DELETE requests remove resources from the system.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Request and Response Objects</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Request Object</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export async function POST(request) {
  // Get JSON body
  const jsonBody = await request.json();

  // Get text body
  const textBody = await request.text();

  // Get FormData
  const formData = await request.formData();

  // Get headers
  const authHeader = request.headers.get('authorization');
  const contentType = request.headers.get('content-type');

  // Get URL and search params
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const limit = searchParams.get('limit');

  // Get cookies
  const token = request.cookies.get('auth-token');

  return NextResponse.json({ received: true });
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">The request object provides access to body, headers, URL, and cookies.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Response Object</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// JSON response
return NextResponse.json({ data: result });

// JSON with status
return NextResponse.json(
  { error: 'Not found' },
  { status: 404 }
);

// JSON with headers
return NextResponse.json(
  { data: result },
  {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=300',
      'X-Custom-Header': 'value'
    }
  }
);

// Redirect response
return NextResponse.redirect(new URL('/login', request.url));

// File response
return new NextResponse(fileBuffer, {
  headers: {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename="document.pdf"'
  }
});`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">NextResponse provides various methods for different response types.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Dynamic Routes</h2>
        <p className="text-gray-600 mt-2">
          Route Handlers support dynamic routes just like pages, using the same `[param]` syntax.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Dynamic Route Handlers</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/api/users/[id]/route.js
export async function GET(request, { params }) {
  const { id } = params; // Access dynamic parameter

  const user = await getUserById(id);
  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}

export async function PUT(request, { params }) {
  const { id } = params;
  const updates = await request.json();

  const updatedUser = await updateUser(id, updates);
  return NextResponse.json(updatedUser);
}

export async function DELETE(request, { params }) {
  const { id } = params;

  await deleteUser(id);
  return NextResponse.json({ message: 'User deleted' });
}

// app/api/posts/[slug]/comments/route.js
export async function GET(request, { params }) {
  const { slug } = params;

  const comments = await getCommentsByPostSlug(slug);
  return NextResponse.json(comments);
}

export async function POST(request, { params }) {
  const { slug } = params;
  const commentData = await request.json();

  const newComment = await createComment(slug, commentData);
  return NextResponse.json(newComment, { status: 201 });
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Dynamic parameters are available in the params object passed to your handler functions.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Error Handling</h2>
        <p className="text-gray-600 mt-2">
          Proper error handling is crucial for API routes. Handle both expected errors (validation, not found) and unexpected errors (database failures, network issues).
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Comprehensive Error Handling</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export async function POST(request) {
  try {
    const body = await request.json();

    // Input validation
    const validation = validateInput(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validation.errors
        },
        { status: 400 }
      );
    }

    // Business logic with potential errors
    const result = await performBusinessLogic(body);

    return NextResponse.json(result);

  } catch (error) {
    console.error('API Error:', error);

    // Handle specific error types
    if (error.code === 'UNIQUE_CONSTRAINT') {
      return NextResponse.json(
        { error: 'Resource already exists' },
        { status: 409 }
      );
    }

    if (error.code === 'FOREIGN_KEY_CONSTRAINT') {
      return NextResponse.json(
        { error: 'Related resource not found' },
        { status: 400 }
      );
    }

    // Generic server error
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Custom error handler utility
function handleApiError(error) {
  if (error.name === 'ValidationError') {
    return NextResponse.json(
      { error: 'Invalid input', details: error.details },
      { status: 400 }
    );
  }

  if (error.name === 'NotFoundError') {
    return NextResponse.json(
      { error: 'Resource not found' },
      { status: 404 }
    );
  }

  // Log unexpected errors
  console.error('Unexpected API error:', error);

  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use try-catch blocks and return appropriate HTTP status codes for different error types.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Middleware Integration</h2>
        <p className="text-gray-600 mt-2">
          Route Handlers work seamlessly with Next.js middleware for authentication, logging, and request preprocessing.
        </p>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Authentication Middleware</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protect API routes
  if (pathname.startsWith('/api/admin')) {
    const token = request.cookies.get('admin-token');

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

// Route handler can assume authenticated requests
// app/api/admin/users/route.js
export async function GET(request) {
  // Middleware already verified authentication
  const users = await getAllUsers();
  return NextResponse.json(users);
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Middleware can handle cross-cutting concerns like authentication before requests reach your handlers.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Database Integration</h2>
        <p className="text-gray-600 mt-2">
          Route Handlers can connect to any database or data source. Use connection pooling and proper error handling.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Database Operations</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function query(text, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
}

// app/api/users/route.js
import { query } from '@/lib/db';

export async function GET() {
  try {
    const users = await query('SELECT * FROM users ORDER BY created_at DESC');
    return NextResponse.json(users);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Database error' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const { name, email } = await request.json();

  try {
    const result = await query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    if (error.code === '23505') { // Unique constraint violation
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    throw error; // Re-throw for general error handling
  }
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use proper database connection management and handle database-specific errors.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">File Upload Handling</h2>
        <p className="text-gray-600 mt-2">
          Handle file uploads using FormData in your Route Handlers.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">File Upload API</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/api/upload/route.js
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.formData();
  const file = data.get('file');

  if (!file) {
    return NextResponse.json(
      { error: 'No file uploaded' },
      { status: 400 }
    );
  }

  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
      { error: 'Invalid file type' },
      { status: 400 }
    );
  }

  // Validate file size (5MB limit)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    return NextResponse.json(
      { error: 'File too large' },
      { status: 400 }
    );
  }

  // Generate unique filename
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  const filename = Array.from(bytes, byte => byte.toString(16)).join('') +
                   '.' + file.name.split('.').pop();

  // Save file
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(\`./public/uploads/\${filename}\`, buffer);

  return NextResponse.json({
    message: 'File uploaded successfully',
    filename,
    url: \`/uploads/\${filename}\`
  });
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Handle file uploads with proper validation and security measures.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Caching and Performance</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Response Caching</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export async function GET() {
  const data = await fetchExpensiveData();

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=600',
      // Cache for 5 minutes on browser, 10 minutes on CDN
    }
  });
}

// Dynamic data that changes frequently
export async function GET() {
  const data = await fetchRealTimeData();

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    }
  });
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Use appropriate cache headers based on data freshness requirements.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Streaming Responses</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// For large datasets
export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const data = await fetchLargeDataset();

        // Send data in chunks
        for (const item of data) {
          controller.enqueue(encoder.encode(JSON.stringify(item) + '\\n'));
          await new Promise(resolve => setTimeout(resolve, 10)); // Throttle
        }

        controller.close();
      } catch (error) {
        controller.error(error);
      }
    }
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    }
  });
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Stream large responses to improve performance and user experience.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Security Best Practices</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Input Validation:</strong> Always validate and sanitize input data</li>
            <li><strong>Authentication:</strong> Verify user permissions for protected routes</li>
            <li><strong>Rate Limiting:</strong> Implement rate limiting to prevent abuse</li>
            <li><strong>CORS:</strong> Configure CORS headers appropriately</li>
            <li><strong>HTTPS:</strong> Ensure all API calls use HTTPS in production</li>
            <li><strong>Error Handling:</strong> Don't expose internal errors to clients</li>
            <li><strong>SQL Injection:</strong> Use parameterized queries for database operations</li>
            <li><strong>File Upload Security:</strong> Validate file types, sizes, and scan for malware</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Testing Route Handlers</h2>
        <p className="text-gray-600 mt-2">
          Test your Route Handlers to ensure they work correctly and handle edge cases.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Testing Examples</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// __tests__/api/users/route.test.js
import { GET, POST } from '@/app/api/users/route';
import { NextRequest } from 'next/server';

describe('/api/users', () => {
  it('should return users list', async () => {
    const request = new NextRequest('http://localhost:3000/api/users');
    const response = await GET(request);

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(Array.isArray(data)).toBe(true);
  });

  it('should create a new user', async () => {
    const request = new NextRequest('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com'
      })
    });

    const response = await POST(request);
    expect(response.status).toBe(201);

    const user = await response.json();
    expect(user.name).toBe('John Doe');
  });

  it('should handle validation errors', async () => {
    const request = new NextRequest('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({ name: '' }) // Invalid data
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });
});`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Write unit tests for your Route Handlers to ensure reliability.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Migration from Pages Router API Routes</h2>
        <p className="text-gray-600 mt-2">
          If migrating from Pages Router, note that the API is similar but with some differences.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Key Differences</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Pages Router (pages/api/users.js)
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    // Handle POST
    res.status(201).json(newUser);
  } else {
    res.status(405).end();
  }
}

// App Router (app/api/users/route.js)
export async function GET(request) {
  const users = await getUsers();
  return NextResponse.json(users);
}

export async function POST(request) {
  const body = await request.json();
  const newUser = await createUser(body);
  return NextResponse.json(newUser, { status: 201 });
}

// Method not allowed is handled automatically`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            App Router separates HTTP methods into different functions and uses NextResponse.
          </p>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Route Handlers provide a powerful way to create API endpoints in Next.js App Router. They use the same file-based routing system as pages, making it easy to organize related code together. Export named functions for each HTTP method you want to handle (GET, POST, PUT, DELETE, etc.), and use the request and response objects to handle incoming data and send responses. Always include proper error handling, input validation, and security measures. Route Handlers can connect to databases, handle file uploads, stream responses, and integrate with middleware for cross-cutting concerns like authentication.
        </p>
      </section>
    </main>
  );
}