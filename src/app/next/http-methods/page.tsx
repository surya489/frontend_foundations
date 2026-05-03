export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">HTTP Methods in Next.js Route Handlers</h1>

      <section>
        <h2 className="text-xl font-semibold">What are HTTP Methods?</h2>
        <p className="text-gray-600 mt-2">
          HTTP methods (also called HTTP verbs) define the action to be performed on a resource. Each method has specific semantics and use cases. In Next.js Route Handlers, you implement these methods as exported functions that correspond to the HTTP method names. Understanding when and how to use each method is crucial for building RESTful APIs.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">GET - Retrieve Data</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Purpose</h3>
              <p className="text-gray-600">Retrieve data from the server without modifying it.</p>
            </div>
            <div>
              <h3 className="font-semibold">Characteristics</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Safe - doesn't modify server state</li>
                <li>Idempotent - multiple identical requests have same effect</li>
                <li>Cacheable - responses can be cached</li>
                <li>No request body required</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Use Cases</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Fetch user profiles</li>
                <li>Get product listings</li>
                <li>Retrieve blog posts</li>
                <li>Search functionality</li>
                <li>Load dashboard data</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-3 rounded font-mono text-sm mt-4">
            <pre>{`export async function GET(request) {
  // Get query parameters
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 10;
  const search = searchParams.get('search');

  // Build query
  const query = {};
  if (search) {
    query.title = { $regex: search, $options: 'i' };
  }

  // Fetch data with pagination
  const posts = await Post.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Post.countDocuments(query);

  return NextResponse.json({
    posts,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  });
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">POST - Create Resources</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Purpose</h3>
              <p className="text-gray-600">Create new resources on the server.</p>
            </div>
            <div>
              <h3 className="font-semibold">Characteristics</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Not safe - modifies server state</li>
                <li>Not idempotent - multiple requests create multiple resources</li>
                <li>Not cacheable</li>
                <li>Request body contains resource data</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Use Cases</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Create new user accounts</li>
                <li>Submit forms</li>
                <li>Upload files</li>
                <li>Send messages</li>
                <li>Place orders</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-3 rounded font-mono text-sm mt-4">
            <pre>{`export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input
    const { name, email, password } = body;
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    // Return user without password
    const { password: _, ...userWithoutPassword } = user.toObject();

    return NextResponse.json(userWithoutPassword, { status: 201 });

  } catch (error) {
    console.error('User creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">PUT - Full Resource Updates</h2>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Purpose</h3>
              <p className="text-gray-600">Replace an entire resource with new data.</p>
            </div>
            <div>
              <h3 className="font-semibold">Characteristics</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Not safe - modifies server state</li>
                <li>Idempotent - multiple identical requests have same effect</li>
                <li>Not cacheable</li>
                <li>Request body contains complete resource data</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Use Cases</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Update entire user profile</li>
                <li>Replace document content</li>
                <li>Update configuration settings</li>
                <li>Modify complete records</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-3 rounded font-mono text-sm mt-4">
            <pre>{`export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const updateData = await request.json();

    // Validate that all required fields are present
    const requiredFields = ['name', 'email', 'role'];
    const missingFields = requiredFields.filter(field => !updateData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: \`Missing required fields: \${missingFields.join(', ')}\` },
        { status: 400 }
      );
    }

    // Find and update the user
    const updatedUser = await User.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true, // Return updated document
        runValidators: true // Run schema validation
      }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedUser);

  } catch (error) {
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    console.error('User update error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">PATCH - Partial Resource Updates</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Purpose</h3>
              <p className="text-gray-600">Update part of a resource without affecting other fields.</p>
            </div>
            <div>
              <h3 className="font-semibold">Characteristics</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Not safe - modifies server state</li>
                <li>Not necessarily idempotent</li>
                <li>Not cacheable</li>
                <li>Request body contains only changed fields</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Use Cases</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Update user status</li>
                <li>Change password</li>
                <li>Modify single settings</li>
                <li>Update profile picture</li>
                <li>Toggle features on/off</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-3 rounded font-mono text-sm mt-4">
            <pre>{`export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const updates = await request.json();

    // Prevent updating sensitive fields via PATCH
    const allowedFields = ['name', 'avatar', 'bio', 'preferences'];
    const invalidFields = Object.keys(updates).filter(
      field => !allowedFields.includes(field)
    );

    if (invalidFields.length > 0) {
      return NextResponse.json(
        { error: \`Cannot update fields: \${invalidFields.join(', ')}\` },
        { status: 400 }
      );
    }

    // Apply partial update
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updates },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedUser);

  } catch (error) {
    console.error('User patch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">DELETE - Remove Resources</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Purpose</h3>
              <p className="text-gray-600">Remove a resource from the server.</p>
            </div>
            <div>
              <h3 className="font-semibold">Characteristics</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Not safe - modifies server state</li>
                <li>Idempotent - deleting already deleted resource is OK</li>
                <li>Not cacheable</li>
                <li>No request body required</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Use Cases</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Delete user accounts</li>
                <li>Remove blog posts</li>
                <li>Cancel orders</li>
                <li>Remove files</li>
                <li>Deactivate features</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-3 rounded font-mono text-sm mt-4">
            <pre>{`export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Check if resource exists
    const resource = await Resource.findById(id);
    if (!resource) {
      return NextResponse.json(
        { error: 'Resource not found' },
        { status: 404 }
      );
    }

    // Check permissions (if user is owner or admin)
    if (resource.userId !== request.user.id && !request.user.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    // Soft delete (recommended for most cases)
    await Resource.findByIdAndUpdate(id, {
      deletedAt: new Date(),
      isActive: false
    });

    // Or hard delete (use with caution)
    // await Resource.findByIdAndDelete(id);

    return NextResponse.json({
      message: 'Resource deleted successfully'
    });

  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">HEAD - Get Headers Only</h2>
        <div className="bg-teal-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Purpose</h3>
              <p className="text-gray-600">Retrieve headers without the response body.</p>
            </div>
            <div>
              <h3 className="font-semibold">Characteristics</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Safe - doesn't modify server state</li>
                <li>Idempotent</li>
                <li>Cacheable</li>
                <li>Same headers as GET, no body</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Use Cases</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Check if resource exists</li>
                <li>Get resource metadata</li>
                <li>Check cache validity</li>
                <li>Download size checking</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-3 rounded font-mono text-sm mt-4">
            <pre>{`export async function HEAD(request, { params }) {
  // Reuse GET logic but don't send body
  const resource = await getResource(params.id);

  if (!resource) {
    return new NextResponse(null, { status: 404 });
  }

  // Return same headers as GET would
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': JSON.stringify(resource).length.toString(),
      'Last-Modified': resource.updatedAt.toISOString(),
      'ETag': generateETag(resource)
    }
  });
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">OPTIONS - Get Allowed Methods</h2>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Purpose</h3>
              <p className="text-gray-600">Describe the communication options for the target resource.</p>
            </div>
            <div>
              <h3 className="font-semibold">Characteristics</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Safe - doesn't modify server state</li>
                <li>Idempotent</li>
                <li>Not cacheable</li>
                <li>Used for CORS preflight requests</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Use Cases</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>CORS preflight requests</li>
                <li>API discovery</li>
                <li>Capability negotiation</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-3 rounded font-mono text-sm mt-4">
            <pre>{`export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Allow': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400' // 24 hours
    }
  });
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Method Override Patterns</h2>
        <p className="text-gray-600 mt-2">
          Sometimes you need to support methods that browsers or proxies don't support directly.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Method Override</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Support method override via headers or query params
export async function POST(request) {
  const method = request.headers.get('X-HTTP-Method-Override') ||
                 request.nextUrl.searchParams.get('_method');

  switch (method?.toUpperCase()) {
    case 'PUT':
      return handlePut(request);
    case 'PATCH':
      return handlePatch(request);
    case 'DELETE':
      return handleDelete(request);
    default:
      return handlePost(request);
  }
}

// HTML form method override (for older browsers)
export async function POST(request) {
  const formData = await request.formData();
  const method = formData.get('_method');

  if (method === 'DELETE') {
    const id = formData.get('id');
    return handleDelete(id);
  }

  return handlePost(request);
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Method override allows supporting RESTful methods through POST requests.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">HTTP Status Codes</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Success Codes (2xx)</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li><strong>200 OK:</strong> Request succeeded</li>
              <li><strong>201 Created:</strong> Resource created</li>
              <li><strong>202 Accepted:</strong> Request accepted for processing</li>
              <li><strong>204 No Content:</strong> Success, no response body</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-red-600">Client Error Codes (4xx)</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li><strong>400 Bad Request:</strong> Invalid request</li>
              <li><strong>401 Unauthorized:</strong> Authentication required</li>
              <li><strong>403 Forbidden:</strong> Insufficient permissions</li>
              <li><strong>404 Not Found:</strong> Resource doesn't exist</li>
              <li><strong>409 Conflict:</strong> Resource conflict</li>
              <li><strong>422 Unprocessable:</strong> Validation failed</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-orange-600">Server Error Codes (5xx)</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li><strong>500 Internal Error:</strong> Server error</li>
              <li><strong>502 Bad Gateway:</strong> Invalid response from upstream</li>
              <li><strong>503 Service Unavailable:</strong> Server temporarily down</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Redirection Codes (3xx)</h3>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <li><strong>301 Moved Permanently:</strong> Resource moved</li>
              <li><strong>302 Found:</strong> Temporary redirect</li>
              <li><strong>307 Temporary Redirect:</strong> Same method</li>
              <li><strong>308 Permanent Redirect:</strong> Same method</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">RESTful API Design</h2>
        <p className="text-gray-600 mt-2">
          Follow REST principles to create intuitive and consistent APIs.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">RESTful Resource Design</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Users resource
GET    /api/users          // List users
POST   /api/users          // Create user
GET    /api/users/[id]     // Get specific user
PUT    /api/users/[id]     // Update user completely
PATCH  /api/users/[id]     // Update user partially
DELETE /api/users/[id]     // Delete user

// Nested resources
GET    /api/users/[id]/posts     // Get user's posts
POST   /api/users/[id]/posts     // Create post for user
GET    /api/posts/[id]/comments  // Get post's comments

// Actions on resources
POST   /api/users/[id]/reset-password  // Action endpoint
POST   /api/posts/[id]/publish         // State change

// Search and filtering
GET    /api/products?category=electronics&price_lt=100
GET    /api/users?search=john&sort=name&order=asc

// Pagination
GET    /api/posts?page=2&limit=10`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            RESTful design uses HTTP methods to perform operations on resources identified by URLs.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Content Negotiation</h2>
        <p className="text-gray-600 mt-2">
          Handle different content types and response formats.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Accept Header Handling</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`export async function GET(request) {
  const accept = request.headers.get('accept');

  if (accept?.includes('application/xml')) {
    // Return XML response
    const xmlData = convertToXML(data);
    return new NextResponse(xmlData, {
      headers: { 'Content-Type': 'application/xml' }
    });
  }

  if (accept?.includes('text/csv')) {
    // Return CSV response
    const csvData = convertToCSV(data);
    return new NextResponse(csvData, {
      headers: { 'Content-Type': 'text/csv' }
    });
  }

  // Default JSON response
  return NextResponse.json(data);
}

export async function POST(request) {
  const contentType = request.headers.get('content-type');

  let data;
  if (contentType?.includes('application/json')) {
    data = await request.json();
  } else if (contentType?.includes('application/x-www-form-urlencoded')) {
    const formData = await request.formData();
    data = Object.fromEntries(formData);
  } else if (contentType?.includes('multipart/form-data')) {
    const formData = await request.formData();
    data = parseMultipartData(formData);
  } else {
    return NextResponse.json(
      { error: 'Unsupported content type' },
      { status: 415 }
    );
  }

  // Process data...
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Support different content types for maximum API flexibility.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Method Not Allowed Handling</h2>
        <p className="text-gray-600 mt-2">
          Handle requests for unsupported HTTP methods gracefully.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">405 Method Not Allowed</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Next.js automatically returns 405 for unexported methods
// But you can customize the response

// If you want to handle all methods in one function:
export async function GET() { /* ... */ }
export async function POST() { /* ... */ }
// Next.js will return 405 for PUT, PATCH, DELETE, etc.

// Or create a catch-all handler:
export default async function handler(request) {
  const { method } = request;

  switch (method) {
    case 'GET':
      return handleGet(request);
    case 'POST':
      return handlePost(request);
    case 'PUT':
      return handlePut(request);
    case 'DELETE':
      return handleDelete(request);
    default:
      return NextResponse.json(
        {
          error: 'Method not allowed',
          allowed: ['GET', 'POST', 'PUT', 'DELETE']
        },
        {
          status: 405,
          headers: {
            'Allow': 'GET, POST, PUT, DELETE'
          }
        }
      );
  }
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Return appropriate 405 responses for unsupported methods.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Idempotency</h2>
        <p className="text-gray-600 mt-2">
          Ensure that certain operations can be safely retried without side effects.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Idempotent Operations</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// PUT is naturally idempotent
export async function PUT(request, { params }) {
  const updates = await request.json();

  // This can be called multiple times safely
  const result = await Resource.findByIdAndUpdate(
    params.id,
    updates,
    { upsert: true, new: true }
  );

  return NextResponse.json(result);
}

// POST with idempotency key
export async function POST(request) {
  const idempotencyKey = request.headers.get('Idempotency-Key');

  if (!idempotencyKey) {
    return NextResponse.json(
      { error: 'Idempotency-Key header required' },
      { status: 400 }
    );
  }

  // Check if we've already processed this request
  const existingResult = await getCachedResult(idempotencyKey);
  if (existingResult) {
    return NextResponse.json(existingResult);
  }

  // Process the request
  const result = await processRequest(request);

  // Cache the result
  await cacheResult(idempotencyKey, result);

  return NextResponse.json(result, { status: 201 });
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Implement idempotency for operations that should be safe to retry.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Use correct methods:</strong> GET for reading, POST for creating, PUT for full updates, PATCH for partial updates, DELETE for removal</li>
            <li><strong>Return appropriate status codes:</strong> Use 2xx for success, 4xx for client errors, 5xx for server errors</li>
            <li><strong>Handle errors gracefully:</strong> Provide meaningful error messages and proper status codes</li>
            <li><strong>Validate input:</strong> Always validate request data before processing</li>
            <li><strong>Use consistent response formats:</strong> Stick to JSON for APIs, use consistent error response structure</li>
            <li><strong>Implement proper authentication:</strong> Secure your endpoints appropriately</li>
            <li><strong>Document your API:</strong> Provide clear documentation for all endpoints and methods</li>
            <li><strong>Consider rate limiting:</strong> Protect your API from abuse</li>
            <li><strong>Use appropriate caching:</strong> Cache GET responses when appropriate</li>
            <li><strong>Support content negotiation:</strong> Handle different content types when needed</li>
          </ul>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          HTTP methods define the semantics of API operations. GET retrieves data safely, POST creates resources, PUT performs full updates, PATCH makes partial changes, and DELETE removes resources. Each method has specific characteristics regarding safety, idempotency, and caching. Understanding these methods and their proper usage is essential for building RESTful APIs that are intuitive, consistent, and follow web standards. Always return appropriate HTTP status codes, handle errors gracefully, and validate input data to create robust and reliable API endpoints.
        </p>
      </section>
    </main>
  );
}