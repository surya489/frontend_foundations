export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Authentication Basics</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Authentication?</h2>
        <p className="text-gray-600 mt-2">
          Authentication is the process of verifying the identity of a user. In a web app, this usually means checking credentials like email and password, then deciding whether the person trying to access the app really is who they claim to be.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic Authentication Flow</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Four Simple Steps</h3>
          <ol className="list-decimal ml-6 text-gray-600 space-y-2">
            <li>User enters credentials in a login form.</li>
            <li>App sends credentials to the server.</li>
            <li>Server checks credentials and returns a token or session.</li>
            <li>App stores authentication state and allows access to protected pages.</li>
          </ol>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Authentication Methods</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Sessions</h3>
            <p className="text-gray-600 mt-2">
              The server stores information about the signed-in user and uses a cookie to remember the session. This is a safe way to keep users logged in across requests.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">Tokens (JWT)</h3>
            <p className="text-gray-600 mt-2">
              A JSON Web Token is created after login and sent to the browser. The browser includes it with future requests to prove the user is authenticated.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Login and Registration</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Example Login Handler</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  const user = await findUserByEmail(email);
  if (!user || !(await verifyPassword(password, user.password))) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const sessionToken = createSessionToken(user.id);
  const response = NextResponse.json({ success: true });

  response.cookies.set('session', sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            The server validates credentials and sends a secure cookie back to the browser.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Why Secure Storage Matters</h2>
        <p className="text-gray-600 mt-2">
          Never store plain text passwords. Use password hashing and keep authentication tokens in secure cookies or other protected storage. This helps keep user accounts safe.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Password Hashing Example</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import bcrypt from 'bcryptjs';

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashed: string) {
  return bcrypt.compare(password, hashed);
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Authentication Terms</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li><strong>Login:</strong> The process of signing in to a website.</li>
          <li><strong>Session:</strong> A record that keeps the user signed in.</li>
          <li><strong>Token:</strong> A string used to prove identity between requests.</li>
          <li><strong>Cookie:</strong> A small file stored by the browser to remember the user.</li>
          <li><strong>Authentication State:</strong> Whether the user is signed in or not.</li>
        </ul>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Authentication Basics in Next.js are about identifying users and keeping them signed in. Use secure login forms, validate user credentials on the server, and protect session data with secure cookies or tokens. The most important rules are: never store plain text passwords, use secure cookies in production, and always verify the user's identity before granting access to protected pages.
        </p>
      </section>
    </main>
  );
}