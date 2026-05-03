export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Authentication in Next.js</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Authentication?</h2>
        <p className="text-gray-600 mt-2">
          Authentication is the process of verifying the identity of a user or system. In web applications, this typically involves checking credentials (username/password, tokens, etc.) to determine if someone is who they claim to be. Next.js provides several ways to implement authentication, from simple custom solutions to full-featured libraries like NextAuth.js.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Authentication Strategies</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Session-based Authentication</h3>
            <p className="text-gray-600 mt-2">Traditional method using server-side sessions stored in cookies or databases.</p>
            <div className="bg-blue-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Store user session on server
// Use secure HTTP-only cookies
// Validate session on each request`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Good for: Traditional web apps, server-side rendering, complex session management.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Token-based Authentication (JWT)</h3>
            <p className="text-gray-600 mt-2">Stateless authentication using JSON Web Tokens sent in headers.</p>
            <div className="bg-green-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Client sends token in Authorization header
// Server validates token without storing state
// Token contains user info and expiration`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Good for: APIs, mobile apps, microservices, stateless architectures.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">OAuth 2.0 / Social Login</h3>
            <p className="text-gray-600 mt-2">Delegate authentication to third-party providers (Google, GitHub, etc.).</p>
            <div className="bg-purple-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// User authenticates with provider
// Provider gives app access token
// App can access user profile info`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Good for: Quick setup, social features, reduced password management burden.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">NextAuth.js (Auth.js)</h2>
        <p className="text-gray-600 mt-2">
          NextAuth.js is the most popular authentication library for Next.js, providing a complete solution with multiple providers and session management.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Installation and Setup</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`npm install next-auth

# Create API route
# app/api/auth/[...nextauth]/route.js
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
          <p className="text-gray-600 text-sm mt-2">
            NextAuth.js provides a complete authentication solution with minimal setup.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Session Management</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Client-side Session Handling</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export function AuthButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}!</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>;
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Use the useSession hook to access authentication state in client components.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Server-side Session Access</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Access denied</div>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
    </div>
  );
}

// In API routes
export async function GET(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ data: 'Protected data' });
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Use getServerSession to access session data in server components and API routes.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Custom Authentication</h2>
        <p className="text-gray-600 mt-2">
          Build your own authentication system using Next.js features.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">JWT-based Auth System</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// lib/auth.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET;

export async function hashPassword(password) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import { verifyPassword, generateToken } from '@/lib/auth';
import { getUserByEmail } from '@/lib/db';

export async function POST(request) {
  const { email, password } = await request.json();

  const user = await getUserByEmail(email);
  if (!user) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }

  const token = generateToken({
    userId: user.id,
    email: user.email,
    role: user.role
  });

  const response = NextResponse.json({ success: true });
  response.cookies.set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  });

  return response;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Build custom authentication with JWT tokens and secure cookies.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Middleware for Authentication</h2>
        <p className="text-gray-600 mt-2">
          Use Next.js middleware to protect routes and handle authentication globally.
        </p>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Auth Middleware</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// middleware.js
import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Public paths
  const publicPaths = ['/login', '/register', '/api/auth/login'];
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check for auth token
  const token = request.cookies.get('auth-token')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Verify token
  const payload = verifyToken(token);
  if (!payload) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('auth-token');
    return response;
  }

  // Add user info to headers for API routes
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-id', payload.userId);
  requestHeaders.set('x-user-role', payload.role);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Middleware can handle authentication checks and redirects globally.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Password Security</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Password Hashing</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`import bcrypt from 'bcryptjs';

export async function hashPassword(password) {
  // Use bcrypt with salt rounds of 12
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}

export async function verifyPassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

// Usage
const hashedPassword = await hashPassword('userpassword123');
const isValid = await verifyPassword('userpassword123', hashedPassword);`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Always hash passwords before storing them in the database.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Password Validation</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`export function validatePassword(password) {
  const errors = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/[!@#$%^&*]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Implement strong password requirements to improve security.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">OAuth Providers</h2>
        <p className="text-gray-600 mt-2">
          Integrate with popular OAuth providers for social login.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Multiple OAuth Providers</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// next-auth configuration with multiple providers
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Custom sign-in logic
      // Check if user exists, create if not, etc.
      return true;
    },
    async jwt({ token, user, account }) {
      // Add custom claims to JWT
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Add custom data to session
      session.user.role = token.role;
      return session;
    },
  },
});`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Configure multiple OAuth providers with custom callbacks.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Session Security</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Secure Cookie Settings</h3>
            <div className="bg-red-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Secure cookie configuration
response.cookies.set('auth-token', token, {
  httpOnly: true,        // Prevent XSS attacks
  secure: process.env.NODE_ENV === 'production', // HTTPS only
  sameSite: 'strict',    // CSRF protection
  maxAge: 60 * 60 * 24 * 7, // 7 days
  path: '/',             // Available on all paths
});

// For NextAuth.js
export default NextAuth({
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
});`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Configure cookies with security best practices.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Session Expiration</h3>
            <div className="bg-red-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Automatic session expiration
const token = jwt.sign(payload, secret, {
  expiresIn: '15m'  // 15 minutes
});

// Refresh token pattern
const accessToken = jwt.sign(payload, secret, {
  expiresIn: '15m'
});

const refreshToken = jwt.sign(
  { userId: user.id, tokenVersion: user.tokenVersion },
  refreshSecret,
  { expiresIn: '7d' }
);

// Refresh endpoint
export async function POST(request) {
  const { refreshToken } = await request.json();

  try {
    const payload = jwt.verify(refreshToken, refreshSecret);
    const user = await getUserById(payload.userId);

    if (user.tokenVersion !== payload.tokenVersion) {
      throw new Error('Token revoked');
    }

    const newAccessToken = jwt.sign(
      { userId: user.id, email: user.email },
      secret,
      { expiresIn: '15m' }
    );

    return NextResponse.json({ accessToken: newAccessToken });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid refresh token' },
      { status: 401 }
    );
  }
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Implement proper session expiration and refresh token patterns.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Multi-Factor Authentication (MFA)</h2>
        <p className="text-gray-600 mt-2">
          Add an extra layer of security with MFA.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">TOTP Implementation</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`import speakeasy from 'speakeasy';
import qrcode from 'qrcode';

// Generate secret and QR code
export function setupMFA(userId) {
  const secret = speakeasy.generateSecret({
    name: 'My App',
    issuer: 'My Company'
  });

  // Store secret temporarily (associate with user but not verified yet)
  await db.tempMFASecret.create({
    userId,
    secret: secret.base32
  });

  // Generate QR code
  const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url);

  return { secret: secret.base32, qrCodeUrl };
}

// Verify MFA code
export async function verifyMFA(userId, code, secret) {
  const verified = speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: code,
    window: 2 // Allow 2 time steps (30 seconds) tolerance
  });

  if (verified) {
    // Move secret to permanent storage
    await db.user.update(userId, { mfaSecret: secret });
    await db.tempMFASecret.delete({ userId });
  }

  return verified;
}

// Login with MFA
export async function loginWithMFA(email, password, mfaCode) {
  const user = await authenticateUser(email, password);

  if (user.mfaSecret) {
    const verified = speakeasy.totp.verify({
      secret: user.mfaSecret,
      encoding: 'base32',
      token: mfaCode
    });

    if (!verified) {
      throw new Error('Invalid MFA code');
    }
  }

  return generateToken(user);
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Implement TOTP-based multi-factor authentication.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Authentication UI Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Loading States</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`'use client';
import { useSession } from 'next-auth/react';

export function AuthWrapper({ children }) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!session) {
    return <LoginForm />;
  }

  return children;
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Handle loading states during authentication checks.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Protected Routes</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Higher-order component for protected routes
export function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { data: session, status } = useSession();

    if (status === 'loading') {
      return <div>Loading...</div>;
    }

    if (!session) {
      return <div>Please sign in to access this page.</div>;
    }

    return <Component {...props} />;
  };
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);

// Or with role-based access
export function withRole(Component, requiredRole) {
  return function RoleProtectedComponent(props) {
    const { data: session } = useSession();

    if (session?.user?.role !== requiredRole) {
      return <div>Access denied. Required role: {requiredRole}</div>;
    }

    return <Component {...props} />;
  };
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Create reusable components for protecting routes.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Authentication Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Email Verification</h3>
            <div className="bg-blue-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Send verification email
export async function sendVerificationEmail(email, token) {
  const verificationUrl = \`\${process.env.NEXTAUTH_URL}/verify-email?token=\${token}\`;

  await sendEmail({
    to: email,
    subject: 'Verify your email',
    html: \`<a href="\${verificationUrl}">Click here to verify</a>\`
  });
}

// Verify email endpoint
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  const payload = jwt.verify(token, process.env.EMAIL_SECRET);
  await db.user.update(payload.userId, { emailVerified: true });

  return NextResponse.redirect('/email-verified');
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Implement email verification for new user accounts.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Password Reset</h3>
            <div className="bg-blue-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Request password reset
export async function requestPasswordReset(email) {
  const user = await db.user.findUnique({ where: { email } });
  if (!user) return; // Don't reveal if email exists

  const resetToken = jwt.sign(
    { userId: user.id },
    process.env.RESET_SECRET,
    { expiresIn: '1h' }
  );

  await sendEmail({
    to: email,
    subject: 'Reset your password',
    html: \`<a href="/reset-password?token=\${resetToken}">Reset password</a>\`
  });
}

// Reset password
export async function resetPassword(token, newPassword) {
  const payload = jwt.verify(token, process.env.RESET_SECRET);
  const hashedPassword = await hashPassword(newPassword);

  await db.user.update(payload.userId, {
    password: hashedPassword,
    tokenVersion: { increment: 1 } // Invalidate existing sessions
  });
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Implement secure password reset functionality.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Testing Authentication</h2>
        <p className="text-gray-600 mt-2">
          Test your authentication system to ensure it works correctly.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Authentication Testing</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// __tests__/auth.test.js
import { hashPassword, verifyPassword, generateToken } from '../lib/auth';

describe('Authentication', () => {
  test('password hashing', async () => {
    const password = 'testpassword123';
    const hash = await hashPassword(password);

    expect(hash).not.toBe(password);
    expect(await verifyPassword(password, hash)).toBe(true);
    expect(await verifyPassword('wrongpassword', hash)).toBe(false);
  });

  test('JWT token generation and verification', () => {
    const payload = { userId: '123', email: 'test@example.com' };
    const token = generateToken(payload);
    const decoded = verifyToken(token);

    expect(decoded.userId).toBe(payload.userId);
    expect(decoded.email).toBe(payload.email);
  });

  test('middleware authentication', async () => {
    const token = generateToken({ userId: '123' });

    const request = new NextRequest('/protected', {
      headers: { cookie: \`auth-token=\${token}\` }
    });

    const response = middleware(request);
    expect(response.status).toBe(200);
  });
});`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Write comprehensive tests for authentication functionality.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Security Best Practices</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Use HTTPS:</strong> Always use HTTPS in production</li>
            <li><strong>Hash passwords:</strong> Never store plain text passwords</li>
            <li><strong>Use secure cookies:</strong> Set httpOnly, secure, and sameSite flags</li>
            <li><strong>Implement rate limiting:</strong> Prevent brute force attacks</li>
            <li><strong>Use short-lived tokens:</strong> Minimize damage from token theft</li>
            <li><strong>Validate inputs:</strong> Sanitize all user inputs</li>
            <li><strong>Log security events:</strong> Monitor authentication attempts</li>
            <li><strong>Use MFA:</strong> Add extra security layer when possible</li>
            <li><strong>Handle errors securely:</strong> Don't leak sensitive information</li>
            <li><strong>Regular security audits:</strong> Review and update security measures</li>
          </ul>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Authentication in Next.js can be implemented using various strategies including session-based auth, JWT tokens, and OAuth providers. NextAuth.js provides a complete, production-ready solution with support for multiple providers and session management. For custom implementations, always hash passwords, use secure cookies, implement proper session management, and add security measures like rate limiting and MFA. Use middleware to protect routes globally, and handle authentication state properly in both client and server components. Test your authentication thoroughly and follow security best practices to protect user data and prevent common vulnerabilities.
        </p>
      </section>
    </main>
  );
}