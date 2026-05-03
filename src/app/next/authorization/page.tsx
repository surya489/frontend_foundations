export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Authorization in Next.js</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Authorization?</h2>
        <p className="text-gray-600 mt-2">
          Authorization determines what actions an authenticated user is allowed to perform. While authentication verifies "who you are," authorization controls "what you can do." In Next.js applications, authorization can be implemented at multiple levels: route-level protection, component-level permissions, and API-level access control.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Authorization Strategies</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">Role-Based Access Control (RBAC)</h3>
            <p className="text-gray-600 mt-2">Users have roles (admin, user, moderator) that determine their permissions.</p>
            <div className="bg-blue-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// User roles define capabilities
const ROLES = {
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  USER: 'user'
};

// Permissions matrix
const PERMISSIONS = {
  CREATE_POST: [ROLES.ADMIN, ROLES.MODERATOR],
  DELETE_POST: [ROLES.ADMIN],
  EDIT_USER: [ROLES.ADMIN],
  VIEW_DASHBOARD: [ROLES.ADMIN, ROLES.MODERATOR]
};`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Good for: Clear hierarchy, organizational permissions, scalable systems.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-green-600">Attribute-Based Access Control (ABAC)</h3>
            <p className="text-gray-600 mt-2">Permissions based on user attributes, resource attributes, and environmental conditions.</p>
            <div className="bg-green-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Can user edit this post?
canEditPost(user, post) {
  return user.id === post.authorId ||
         user.role === 'admin' ||
         (user.role === 'moderator' && post.category === user.moderatedCategory);
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Good for: Complex business rules, fine-grained permissions, dynamic conditions.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">Resource-Based Authorization</h3>
            <p className="text-gray-600 mt-2">Each resource defines its own access rules and ownership.</p>
            <div className="bg-purple-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Document ownership
{
  _id: "doc123",
  owner: "user456",
  collaborators: ["user789"],
  visibility: "private" // private, shared, public
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Good for: User-generated content, collaborative features, flexible sharing.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Role-Based Authorization</h2>
        <p className="text-gray-600 mt-2">
          Implement role-based access control with clear permission hierarchies.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Permission System</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// lib/permissions.js
export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  USER: 'user',
  GUEST: 'guest'
};

export const PERMISSIONS = {
  // User management
  CREATE_USER: 'create_user',
  READ_USER: 'read_user',
  UPDATE_USER: 'update_user',
  DELETE_USER: 'delete_user',

  // Content management
  CREATE_POST: 'create_post',
  READ_POST: 'read_post',
  UPDATE_POST: 'update_post',
  DELETE_POST: 'delete_post',

  // Admin features
  VIEW_ANALYTICS: 'view_analytics',
  MANAGE_SETTINGS: 'manage_settings',
  BAN_USERS: 'ban_users'
};

// Role permissions mapping
export const ROLE_PERMISSIONS = {
  [ROLES.SUPER_ADMIN]: Object.values(PERMISSIONS),
  [ROLES.ADMIN]: [
    PERMISSIONS.CREATE_USER, PERMISSIONS.READ_USER,
    PERMISSIONS.UPDATE_USER, PERMISSIONS.DELETE_USER,
    PERMISSIONS.CREATE_POST, PERMISSIONS.READ_POST,
    PERMISSIONS.UPDATE_POST, PERMISSIONS.DELETE_POST,
    PERMISSIONS.VIEW_ANALYTICS, PERMISSIONS.MANAGE_SETTINGS
  ],
  [ROLES.MODERATOR]: [
    PERMISSIONS.READ_USER, PERMISSIONS.UPDATE_USER,
    PERMISSIONS.CREATE_POST, PERMISSIONS.READ_POST,
    PERMISSIONS.UPDATE_POST, PERMISSIONS.DELETE_POST,
    PERMISSIONS.BAN_USERS
  ],
  [ROLES.USER]: [
    PERMISSIONS.CREATE_POST, PERMISSIONS.READ_POST,
    PERMISSIONS.UPDATE_POST // only own posts
  ],
  [ROLES.GUEST]: [
    PERMISSIONS.READ_POST
  ]
};

// Check if user has permission
export function hasPermission(user, permission) {
  if (!user || !user.role) return false;

  const userPermissions = ROLE_PERMISSIONS[user.role] || [];
  return userPermissions.includes(permission);
}

// Check if user has any of the permissions
export function hasAnyPermission(user, permissions) {
  return permissions.some(permission => hasPermission(user, permission));
}

// Check if user has all permissions
export function hasAllPermissions(user, permissions) {
  return permissions.every(permission => hasPermission(user, permission));
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Define roles, permissions, and helper functions for authorization checks.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Route-Level Authorization</h2>
        <p className="text-gray-600 mt-2">
          Protect entire routes based on user permissions.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Protected Routes</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// middleware.js
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { hasPermission, PERMISSIONS } from '@/lib/permissions';

export async function middleware(request) {
  const session = await getServerSession();
  const { pathname } = request.nextUrl;

  // Define route permissions
  const routePermissions = {
    '/admin': [PERMISSIONS.VIEW_ANALYTICS],
    '/admin/users': [PERMISSIONS.READ_USER],
    '/admin/settings': [PERMISSIONS.MANAGE_SETTINGS],
    '/posts/create': [PERMISSIONS.CREATE_POST],
    '/posts/edit': [PERMISSIONS.UPDATE_POST],
  };

  // Check if route requires permissions
  for (const [route, requiredPermissions] of Object.entries(routePermissions)) {
    if (pathname.startsWith(route)) {
      if (!session) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      const hasAccess = hasAnyPermission(session.user, requiredPermissions);
      if (!hasAccess) {
        return NextResponse.redirect(new URL('/unauthorized', request.url));
      }
    }
  }

  return NextResponse.next();
}

// Page-level protection
export default async function AdminPage() {
  const session = await getServerSession();

  if (!hasPermission(session?.user, PERMISSIONS.VIEW_ANALYTICS)) {
    return <div>Access denied</div>;
  }

  return <div>Admin Dashboard</div>;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Protect routes using middleware and page-level checks.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Component-Level Authorization</h2>
        <p className="text-gray-600 mt-2">
          Control what users can see and interact with in your components.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Conditional Rendering</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`'use client';
import { useSession } from 'next-auth/react';
import { hasPermission, PERMISSIONS } from '@/lib/permissions';

export function AdminPanel() {
  const { data: session } = useSession();

  if (!hasPermission(session?.user, PERMISSIONS.VIEW_ANALYTICS)) {
    return null; // Don't render at all
  }

  return <div>Admin controls...</div>;
}

export function PostActions({ post, onEdit, onDelete }) {
  const { data: session } = useSession();
  const canEdit = session?.user?.id === post.authorId ||
                  hasPermission(session?.user, PERMISSIONS.UPDATE_POST);
  const canDelete = hasPermission(session?.user, PERMISSIONS.DELETE_POST);

  return (
    <div>
      {canEdit && <button onClick={onEdit}>Edit</button>}
      {canDelete && <button onClick={onDelete}>Delete</button>}
    </div>
  );
}

// Higher-order component for authorization
export function withPermission(Component, permission) {
  return function AuthorizedComponent(props) {
    const { data: session, status } = useSession();

    if (status === 'loading') {
      return <div>Loading...</div>;
    }

    if (!hasPermission(session?.user, permission)) {
      return <div>You don't have permission to view this content.</div>;
    }

    return <Component {...props} />;
  };
}

// Usage
const AdminDashboard = withPermission(Dashboard, PERMISSIONS.VIEW_ANALYTICS);`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Control component visibility and functionality based on permissions.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">API-Level Authorization</h2>
        <p className="text-gray-600 mt-2">
          Secure your API endpoints with proper authorization checks.
        </p>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Protected API Routes</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/api/users/route.js
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { hasPermission, PERMISSIONS } from '@/lib/permissions';

export async function GET(request) {
  const session = await getServerSession();

  // Check if user can read users
  if (!hasPermission(session?.user, PERMISSIONS.READ_USER)) {
    return NextResponse.json(
      { error: 'Insufficient permissions' },
      { status: 403 }
    );
  }

  const users = await getUsers();
  return NextResponse.json(users);
}

export async function POST(request) {
  const session = await getServerSession();

  // Check if user can create users
  if (!hasPermission(session?.user, PERMISSIONS.CREATE_USER)) {
    return NextResponse.json(
      { error: 'Insufficient permissions' },
      { status: 403 }
    );
  }

  const body = await request.json();
  const user = await createUser(body);

  return NextResponse.json(user, { status: 201 });
}

// Resource-specific authorization
// app/api/posts/[id]/route.js
export async function PUT(request, { params }) {
  const session = await getServerSession();
  const post = await getPost(params.id);

  // Check ownership or admin permissions
  const canEdit = session?.user?.id === post.authorId ||
                  hasPermission(session?.user, PERMISSIONS.UPDATE_POST);

  if (!canEdit) {
    return NextResponse.json(
      { error: 'You can only edit your own posts' },
      { status: 403 }
    );
  }

  const updates = await request.json();
  const updatedPost = await updatePost(params.id, updates);

  return NextResponse.json(updatedPost);
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Implement authorization checks in API routes.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Resource Ownership</h2>
        <p className="text-gray-600 mt-2">
          Implement ownership-based authorization for user-generated content.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Ownership Checks</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// lib/authorization.js
export async function canAccessResource(user, resourceId, action) {
  const resource = await getResource(resourceId);

  if (!resource) {
    return false;
  }

  // Public resources
  if (resource.visibility === 'public') {
    return action === 'read';
  }

  // Private resources - only owner
  if (resource.visibility === 'private') {
    return user.id === resource.ownerId;
  }

  // Shared resources
  if (resource.visibility === 'shared') {
    const hasAccess = user.id === resource.ownerId ||
                     resource.collaborators.includes(user.id);

    if (action === 'read') return hasAccess;
    if (action === 'write') return hasAccess;
    if (action === 'delete') return user.id === resource.ownerId;
  }

  return false;
}

export async function canModifyPost(user, postId) {
  const post = await getPost(postId);

  // Author can always modify their posts
  if (user.id === post.authorId) {
    return true;
  }

  // Admins can modify any post
  if (hasPermission(user, PERMISSIONS.UPDATE_POST)) {
    return true;
  }

  // Moderators can modify posts in their categories
  if (user.role === 'moderator' && user.moderatedCategories.includes(post.category)) {
    return true;
  }

  return false;
}

// Usage in API
export async function PUT(request, { params }) {
  const session = await getServerSession();

  if (!await canModifyPost(session.user, params.id)) {
    return NextResponse.json(
      { error: 'Cannot modify this post' },
      { status: 403 }
    );
  }

  // Proceed with update...
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Implement ownership and sharing-based authorization.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Authorization Middleware</h2>
        <p className="text-gray-600 mt-2">
          Create reusable middleware for common authorization patterns.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Authorization Helpers</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// middleware/authorization.js
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

export function requireAuth(permissions = []) {
  return async function authMiddleware(request) {
    const session = await getServerSession();

    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (permissions.length > 0) {
      const hasRequiredPermissions = permissions.every(permission =>
        hasPermission(session.user, permission)
      );

      if (!hasRequiredPermissions) {
        return NextResponse.redirect(new URL('/unauthorized', request.url));
      }
    }

    return NextResponse.next();
  };
}

export function requireOwnership(resourceType, action) {
  return async function ownershipMiddleware(request, context) {
    const session = await getServerSession();
    const resourceId = context.params.id;

    const canAccess = await canAccessResource(
      session.user,
      resourceId,
      resourceType,
      action
    );

    if (!canAccess) {
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      );
    }

    return NextResponse.next();
  };
}

// Usage in middleware.js
import { requireAuth, PERMISSIONS } from './middleware/authorization';

export default requireAuth([PERMISSIONS.READ_USER]);

// Or in API routes
export const GET = requireAuth([PERMISSIONS.READ_POST]);
export const POST = requireAuth([PERMISSIONS.CREATE_POST]);`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Create reusable authorization middleware functions.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Role Hierarchy</h2>
        <p className="text-gray-600 mt-2">
          Implement role hierarchies where higher roles inherit permissions from lower roles.
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Hierarchical Roles</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// lib/roles.js
export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  USER: 'user',
  GUEST: 'guest'
};

export const ROLE_HIERARCHY = {
  [ROLES.SUPER_ADMIN]: [ROLES.ADMIN, ROLES.MODERATOR, ROLES.USER, ROLES.GUEST],
  [ROLES.ADMIN]: [ROLES.MODERATOR, ROLES.USER, ROLES.GUEST],
  [ROLES.MODERATOR]: [ROLES.USER, ROLES.GUEST],
  [ROLES.USER]: [ROLES.GUEST],
  [ROLES.GUEST]: []
};

// Check if user has role or higher
export function hasRole(user, requiredRole) {
  if (!user || !user.role) return false;

  const userRole = user.role;
  const higherRoles = ROLE_HIERARCHY[userRole] || [];

  return userRole === requiredRole || higherRoles.includes(requiredRole);
}

// Get all permissions for a role (including inherited)
export function getAllPermissions(role) {
  const permissions = new Set();

  // Add direct permissions
  ROLE_PERMISSIONS[role]?.forEach(permission => permissions.add(permission));

  // Add permissions from lower roles
  const lowerRoles = ROLE_HIERARCHY[role] || [];
  lowerRoles.forEach(lowerRole => {
    ROLE_PERMISSIONS[lowerRole]?.forEach(permission => permissions.add(permission));
  });

  return Array.from(permissions);
}

// Usage
if (hasRole(user, ROLES.MODERATOR)) {
  // User is moderator or higher (admin, super_admin)
  showModeratorControls();
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Implement role hierarchies for simplified permission management.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Context-Based Authorization</h2>
        <p className="text-gray-600 mt-2">
          Authorization decisions based on context like time, location, or business rules.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Context-Aware Permissions</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// Time-based permissions
export function canEditPost(user, post) {
  // Authors can edit their posts within 24 hours
  if (user.id === post.authorId) {
    const hoursSinceCreation = (Date.now() - post.createdAt) / (1000 * 60 * 60);
    return hoursSinceCreation <= 24;
  }

  // Moderators can edit any post
  return hasPermission(user, PERMISSIONS.UPDATE_POST);
}

// Location-based permissions
export function canAccessFeature(user, feature, userLocation) {
  // Some features only available in certain regions
  const restrictedFeatures = {
    'crypto-trading': ['US', 'EU'],
    'gambling': ['except', 'US'] // Available everywhere except US
  };

  const restrictions = restrictedFeatures[feature];
  if (!restrictions) return true;

  if (restrictions[0] === 'except') {
    return !restrictions.slice(1).includes(userLocation.country);
  }

  return restrictions.includes(userLocation.country);
}

// Business rule-based permissions
export function canApproveExpense(user, expense) {
  // Managers can approve expenses up to $1000
  if (user.role === 'manager' && expense.amount <= 1000) {
    return true;
  }

  // Directors can approve up to $10000
  if (user.role === 'director' && expense.amount <= 10000) {
    return true;
  }

  // CFO can approve any amount
  return user.role === 'cfo';
}

// Usage in component
export function ExpenseApproval({ expense }) {
  const { data: session } = useSession();
  const userLocation = useUserLocation();

  const canApprove = canApproveExpense(session.user, expense) &&
                    canAccessFeature(session.user, 'expense-approval', userLocation);

  if (!canApprove) {
    return <div>You cannot approve this expense.</div>;
  }

  return <ApproveButton expense={expense} />;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Implement context-aware authorization based on time, location, and business rules.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Authorization UI Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Permission Gates</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Permission gate component
export function PermissionGate({ children, permissions, fallback = null }) {
  const { data: session } = useSession();

  const hasAccess = hasAnyPermission(session?.user, permissions);

  return hasAccess ? children : fallback;
}

// Usage
<PermissionGate permissions={[PERMISSIONS.CREATE_POST]}>
  <CreatePostButton />
</PermissionGate>

<PermissionGate
  permissions={[PERMISSIONS.DELETE_POST]}
  fallback={<span>You can't delete posts</span>}
>
  <DeleteButton />
</PermissionGate>`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Create reusable permission gate components.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Feature Flags with Permissions</h3>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Combine feature flags with permissions
export function FeatureGate({ feature, children, fallback = null }) {
  const { data: session } = useSession();
  const featureEnabled = useFeatureFlag(feature);

  if (!featureEnabled) return fallback;

  // Check if user has permission for this feature
  const featurePermissions = {
    'advanced-analytics': [PERMISSIONS.VIEW_ANALYTICS],
    'user-management': [PERMISSIONS.READ_USER],
    'bulk-actions': [PERMISSIONS.UPDATE_USER]
  };

  const requiredPermissions = featurePermissions[feature];
  if (requiredPermissions && !hasAnyPermission(session?.user, requiredPermissions)) {
    return fallback;
  }

  return children;
}

// Usage
<FeatureGate feature="advanced-analytics">
  <AnalyticsDashboard />
</FeatureGate>`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Combine feature flags with permission checks.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Testing Authorization</h2>
        <p className="text-gray-600 mt-2">
          Test your authorization logic to ensure it works correctly.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Authorization Testing</h3>
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// __tests__/authorization.test.js
import { hasPermission, hasRole, canAccessResource } from '../lib/authorization';

describe('Authorization', () => {
  const mockUser = { id: '1', role: 'user' };
  const mockAdmin = { id: '2', role: 'admin' };
  const mockPost = { id: '1', authorId: '1', visibility: 'private' };

  test('hasPermission works correctly', () => {
    expect(hasPermission(mockUser, PERMISSIONS.CREATE_POST)).toBe(true);
    expect(hasPermission(mockUser, PERMISSIONS.DELETE_POST)).toBe(false);
    expect(hasPermission(mockAdmin, PERMISSIONS.DELETE_POST)).toBe(true);
  });

  test('hasRole checks hierarchy', () => {
    expect(hasRole(mockAdmin, ROLES.USER)).toBe(true); // Admin has user permissions
    expect(hasRole(mockUser, ROLES.ADMIN)).toBe(false); // User doesn't have admin permissions
  });

  test('resource ownership', async () => {
    expect(await canAccessResource(mockUser, mockPost.id, 'write')).toBe(true);
    expect(await canAccessResource(mockAdmin, mockPost.id, 'write')).toBe(true);

    const otherUser = { id: '3', role: 'user' };
    expect(await canAccessResource(otherUser, mockPost.id, 'write')).toBe(false);
  });

  test('middleware authorization', async () => {
    const request = new NextRequest('/admin/users');
    const response = await middleware(request);

    // Should redirect if not authenticated
    expect(response.status).toBe(302);
  });
});`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Write comprehensive tests for authorization logic.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Authorization Patterns</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Soft Deletes with Permissions</h3>
            <div className="bg-blue-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Soft delete - only admins can see deleted items
export async function getPosts(user, includeDeleted = false) {
  const query = { deletedAt: null }; // Default: only active posts

  if (includeDeleted && hasPermission(user, PERMISSIONS.VIEW_DELETED)) {
    query.deletedAt = { $exists: true }; // Include deleted posts
  }

  return await db.post.find(query);
}

// Hard delete - only admins can permanently delete
export async function deletePost(user, postId, hardDelete = false) {
  if (hardDelete && !hasPermission(user, PERMISSIONS.HARD_DELETE)) {
    throw new Error('Insufficient permissions for hard delete');
  }

  if (hardDelete) {
    await db.post.deleteOne({ _id: postId });
  } else {
    await db.post.updateOne(
      { _id: postId },
      { deletedAt: new Date(), deletedBy: user.id }
    );
  }
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Implement soft deletes with permission-based access to deleted content.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Audit Logging</h3>
            <div className="bg-blue-50 p-3 rounded font-mono text-sm mt-2">
              <pre>{`// Log authorization decisions
export async function logAuthorizationAttempt(user, action, resource, allowed) {
  await db.auditLog.create({
    userId: user.id,
    action,
    resource,
    allowed,
    timestamp: new Date(),
    ipAddress: getClientIP(),
    userAgent: getUserAgent()
  });
}

// Use in authorization checks
export async function authorizeAction(user, action, resource) {
  const allowed = checkPermissions(user, action, resource);

  await logAuthorizationAttempt(user, action, resource, allowed);

  if (!allowed) {
    throw new Error('Access denied');
  }

  return true;
}

// Review authorization logs (admin only)
export async function getAuthorizationLogs(adminUser, filters) {
  if (!hasPermission(adminUser, PERMISSIONS.VIEW_AUDIT_LOGS)) {
    throw new Error('Access denied');
  }

  return await db.auditLog.find(filters).sort({ timestamp: -1 });
}`}</pre>
            </div>
            <p className="text-gray-600 text-sm mt-2">Implement audit logging for authorization decisions.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Principle of least privilege:</strong> Give users only the minimum permissions they need</li>
            <li><strong>Defense in depth:</strong> Implement authorization at multiple levels (route, component, API)</li>
            <li><strong>Fail securely:</strong> Default to denying access when authorization checks fail</li>
            <li><strong>Regular audits:</strong> Review and update permissions regularly</li>
            <li><strong>Clear permission naming:</strong> Use descriptive names for permissions and roles</li>
            <li><strong>Test authorization:</strong> Write tests for all authorization logic</li>
            <li><strong>Log access attempts:</strong> Monitor authorization decisions for security</li>
            <li><strong>Consider ownership:</strong> Implement resource ownership for user-generated content</li>
            <li><strong>Use middleware:</strong> Centralize authorization logic in middleware when possible</li>
            <li><strong>Document permissions:</strong> Keep clear documentation of what each permission allows</li>
          </ul>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Authorization in Next.js controls what authenticated users can do within your application. Implement role-based access control (RBAC) with clear permission hierarchies, or use attribute-based access control (ABAC) for more complex scenarios. Protect routes with middleware, control component visibility based on permissions, and secure API endpoints with proper authorization checks. Consider resource ownership for user-generated content and implement context-aware permissions based on time, location, or business rules. Always follow the principle of least privilege, test your authorization logic thoroughly, and log access attempts for security monitoring. Use reusable components and middleware to keep authorization logic maintainable and consistent across your application.
        </p>
      </section>
    </main>
  );
}