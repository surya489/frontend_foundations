export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Protected Routes</h1>

      <section>
        <h2 className="text-xl font-semibold">What are Protected Routes?</h2>
        <p className="text-gray-600 mt-2">
          Protected routes are pages or API endpoints that only signed-in users can access. In Next.js, you can protect routes using middleware, server-side checks, or client-side logic depending on the type of page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Protecting Pages on the Server</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Server Component Protection</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return <div>Welcome to your dashboard, {session.user?.name}</div>;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use a server-side session check and redirect unauthenticated users to the login page.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Protecting Routes with Middleware</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Middleware Example</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// middleware.ts
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/account/:path*'],
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Middleware can protect the route before the page loads, so users are redirected early.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Client-Side Protection</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">useSession Example</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import { useSession } from 'next-auth/react';

export default function ProtectedPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>Please sign in to view this page.</p>;
  }

  return <div>Protected content here.</div>;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Use client-side checks when the page needs to render in the browser after authentication is known.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">API Route Protection</h2>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Protecting API Endpoints</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/api/profile/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ email: session.user?.email, name: session.user?.name });
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Always check authentication in API route handlers before returning protected data.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Special Pages for Unauthorized Users</h2>
        <p className="text-gray-600 mt-2">
          Use a dedicated page for users who are signed in but do not have permission to view a route. This improves user experience and makes authorization clearer.
        </p>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">Example</h3>
          <p className="text-gray-600 mt-2">Create an <code className="bg-gray-100 px-1 rounded">/unauthorized</code> page that explains why access is denied and how users can proceed.</p>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Protected routes are a key part of secure Next.js apps. Use server-side checks and redirect unauthenticated users before they see protected content. Use middleware to protect entire routes early, and use client-side checks when you need to show loading or fallback states. Protect API routes separately, and provide clear pages for unauthorized users so they understand what to do next.
        </p>
      </section>
    </main>
  );
}