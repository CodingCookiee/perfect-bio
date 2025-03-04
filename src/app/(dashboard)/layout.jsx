import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold">Perfect Bio</h2>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="/dashboard" className="block p-2 rounded hover:bg-gray-700">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/dashboard/profile" className="block p-2 rounded hover:bg-gray-700">
                Profile
              </a>
            </li>
            <li>
              <a href="/" className="block p-2 rounded hover:bg-gray-700">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
