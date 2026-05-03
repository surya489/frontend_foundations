export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Cookies & Sessions</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Cookies?</h2>
        <p className="text-gray-600 mt-2">
          Cookies are small pieces of data stored in the browser. They are often used to keep users signed in, remember preferences, and track sessions across page requests.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Cookies vs Sessions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Cookies</h3>
            <p className="text-gray-600 mt-2">Stored in the browser and sent with every request to the server.</p>
            <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
              <li>Can store small values</li>
              <li>Sent automatically by the browser</li>
              <li>Can be secure and httpOnly</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Sessions</h3>
            <p className="text-gray-600 mt-2">Stored on the server and tracked using a cookie identifier.</p>
            <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
              <li>Server keeps session data safe</li>
              <li>Browser only holds the session ID</li>
              <li>Works well for authentication</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Reading Cookies in Server Components</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import { cookies } from 'next/headers';

export default function ProfilePage() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('session')?.value;

  return (
    <div>
      <p>Session token: {sessionToken ?? 'Not signed in'}</p>
    </div>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Use the cookies helper in Server Components to read cookies securely.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Setting Cookies in Route Handlers</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const response = NextResponse.json({ success: true });

  response.cookies.set('session', 'my-token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24,
    path: '/',
  });

  return response;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Route Handlers are a great place to set authentication cookies after login.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Cookies in Middleware</h2>
        <div className="bg-teal-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('session')?.value;

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Middleware can read cookies to protect routes before page rendering.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Secure Cookie Options</h2>
        <div className="border rounded-lg p-4">
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li><strong>httpOnly:</strong> Prevents JavaScript from reading the cookie.</li>
            <li><strong>secure:</strong> Sends the cookie only over HTTPS.</li>
            <li><strong>sameSite:</strong> Controls cross-site cookie sending.</li>
            <li><strong>maxAge:</strong> Controls how long the cookie lasts.</li>
            <li><strong>path:</strong> Controls which paths send the cookie.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Client-Side Cookie Access</h2>
        <p className="text-gray-600 mt-2">
          If a cookie is not httpOnly, client-side JavaScript can read it with <code className="bg-gray-100 px-1 rounded">document.cookie</code>. However, session cookies should be httpOnly for better security.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Cookies and sessions are the foundation of user authentication in Next.js. Use cookies to remember users and sessions to store authentication state securely on the server. Prefer httpOnly and secure cookies for authentication, and read cookies in server code using Next.js helpers like cookies() or request.cookies. Protect routes and API endpoints by checking cookies before returning protected content, and keep client-side cookie usage limited to non-sensitive values.
        </p>
      </section>
    </main>
  );
}