export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">NextAuth Integration</h1>

      <section>
        <h2 className="text-xl font-semibold">What is NextAuth?</h2>
        <p className="text-gray-600 mt-2">
          NextAuth.js is a popular authentication library for Next.js apps. It makes it easy to add sign-in, session management, and social login providers like Google, GitHub, and Facebook.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Why Use NextAuth?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Fast Setup</h3>
            <p className="text-gray-600 mt-2">A few steps and you get sign-in pages, session handling, and provider support.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Provider Support</h3>
            <p className="text-gray-600 mt-2">Use Google, GitHub, Twitter, and many more providers out of the box.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Secure Defaults</h3>
            <p className="text-gray-600 mt-2">NextAuth handles secure cookies, session expiration, and CSRF protection for you.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Installation</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`npm install next-auth

# or
# yarn add next-auth`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Install NextAuth in your Next.js project and configure it in an API route.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Basic NextAuth Setup</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Create the authentication route and configure your provider credentials.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Using NextAuth in Pages</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Sign In Button</h3>
            <div className="bg-white p-3 rounded font-mono text-sm">
              <pre>{`'use client';
import { signIn } from 'next-auth/react';

export function SignInButton() {
  return (
    <button onClick={() => signIn('google')}>
      Sign in with Google
    </button>
  );
}`}</pre>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Sign Out Button</h3>
            <div className="bg-white p-3 rounded font-mono text-sm">
              <pre>{`'use client';
import { signOut } from 'next-auth/react';

export function SignOutButton() {
  return (
    <button onClick={() => signOut()}>
      Sign out
    </button>
  );
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Accessing Session Data</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import { useSession } from 'next-auth/react';

export function UserGreeting() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>Please sign in.</p>;
  }

  return <p>Welcome, {session.user?.name}!</p>;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Use the useSession hook in Client Components to read the signed-in user.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Server-Side Session Access</h2>
        <div className="bg-teal-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Please sign in to see your profile.</div>;
  }

  return <div>Welcome, {session.user?.email}</div>;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Use getServerSession in Server Components or API routes when you need session data on the server.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">NextAuth Callbacks and Customization</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`const options = {
  providers: [/* ... */],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Customize NextAuth using callbacks, custom pages, and session options.</p>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          NextAuth is a powerful way to add authentication to Next.js applications quickly. It supports many providers, handles secure session management, and gives you hooks for client-side and server-side session access. Start with a simple provider setup, then customize callbacks, pages, and session options as your app grows. Use secure environment variables for provider credentials and tokens, and keep your authentication flow clear and easy for beginners.
        </p>
      </section>
    </main>
  );
}