'use client';

import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';

/**
 * Custom hook to access authentication context
 * 
 * @returns {Object} Authentication context with the following properties:
 * - user: The current authenticated user or null
 * - loading: Boolean indicating if auth is being loaded
 * - error: Any error that occurred during auth operations
 * - signUp: Function to register a new user
 * - signIn: Function to sign in an existing user
 * - signOut: Function to sign out the current user
 * - resetPassword: Function to initiate password reset
 * - updateProfile: Function to update user profile
 * - clearError: Function to clear any auth errors
 * - isAuthenticated: Boolean indicating if a user is authenticated
 */
export default function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}

// Example usage:
// import useAuth from '@/hooks/useAuth';
//
// function ProfileComponent() {
//   const { user, loading, signOut } = useAuth();
//
//   if (loading) return <div>Loading...</div>;
//
//   return (
//     <div>
//       <h1>Welcome, {user?.email}</h1>
//       <button onClick={signOut}>Sign Out</button>
//     </div>
//   );
// }
