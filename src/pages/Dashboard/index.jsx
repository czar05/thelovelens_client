import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Logout
          </button>
        </div>
        <div className="mt-6">
          <p className="text-gray-600">
            Welcome, {user?.name}! You are logged in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 