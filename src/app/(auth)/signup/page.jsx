import React from 'react';

export default function SignUp() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Full Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full p-2 border rounded" 
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-2 border rounded" 
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input 
            type="password" 
            id="password" 
            className="w-full p-2 border rounded" 
            placeholder="Create a password"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            className="w-full p-2 border rounded" 
            placeholder="Confirm your password"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
