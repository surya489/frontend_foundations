'use client';

import { useState } from 'react';

export default function ConditionalDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'admin' | 'user' | 'guest'>('guest');
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white">
      <h3 className="text-lg font-semibold mb-4">Conditional Rendering Demo</h3>

      <div className="space-y-6">
        {/* Authentication Example */}
        <div>
          <h4 className="font-medium mb-2">Authentication Status</h4>
          <div className="flex gap-2 mb-3">
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className={`px-3 py-1 rounded text-sm ${
                isLoggedIn ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
              }`}
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            {isLoggedIn ? (
              <div className="text-green-600">
                 Welcome back! You are logged in.
              </div>
            ) : (
              <div className="text-red-600">
                 Please sign in to continue.
              </div>
            )}
          </div>
        </div>

        {/* User Type Example */}
        <div>
          <h4 className="font-medium mb-2">User Permissions</h4>
          <div className="flex gap-2 mb-3">
            {(['guest', 'user', 'admin'] as const).map(type => (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`px-3 py-1 rounded text-sm capitalize ${
                  userType === type
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="bg-gray-50 p-3 rounded">
            {userType === 'admin' && (
              <div className="text-purple-600 mb-2">
                🔧 Admin Panel: Full access granted
              </div>
            )}
            {(userType === 'admin' || userType === 'user') && (
              <div className="text-blue-600 mb-2">
                📊 Dashboard: View analytics
              </div>
            )}
            <div className="text-gray-600">
              🏠 Home: Available to all users
            </div>
          </div>
        </div>

        {/* Loading State Example */}
        <div>
          <h4 className="font-medium mb-2">Loading States</h4>
          <button
            onClick={simulateLoading}
            disabled={isLoading}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-50"
          >
            Load Data
          </button>
          <div className="bg-gray-50 p-3 rounded mt-2">
            {isLoading ? (
              <div className="text-orange-600">
                ⏳ Loading data...
              </div>
            ) : (
              <div className="text-green-600">
                 Data loaded successfully!
              </div>
            )}
          </div>
        </div>

        {/* Toggle Details Example */}
        <div>
          <h4 className="font-medium mb-2">Show/Hide Content</h4>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
          >
            {showDetails ? 'Hide' : 'Show'} Details
          </button>
          {showDetails && (
            <div className="bg-gray-50 p-3 rounded mt-2">
              <div className="text-gray-600">
                Here are the additional details you requested!
                This content only appears when showDetails is true.
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Try different combinations to see how conditional rendering works!
      </div>
    </div>
  );
}