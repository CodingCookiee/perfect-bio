import React from 'react';

export default function Profile() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl font-bold mr-4">
            JD
          </div>
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className="w-full p-2 border rounded" 
                defaultValue="John"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className="w-full p-2 border rounded" 
                defaultValue="Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border rounded" 
                defaultValue="john.doe@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full p-2 border rounded" 
                defaultValue="(555) 123-4567"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <label htmlFor="bio" className="block mb-2 text-sm font-medium">Bio</label>
            <textarea 
              id="bio" 
              rows="4" 
              className="w-full p-2 border rounded"
              defaultValue="Product manager with 5+ years of experience in SaaS companies. Passionate about creating user-friendly products that solve real problems."
            ></textarea>
          </div>
          
          <div className="mt-6">
            <button 
              type="submit" 
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block mb-2 text-sm font-medium">Current Password</label>
            <input 
              type="password" 
              id="currentPassword" 
              className="w-full p-2 border rounded" 
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="newPassword" className="block mb-2 text-sm font-medium">New Password</label>
            <input 
              type="password" 
              id="newPassword" 
              className="w-full p-2 border rounded" 
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium">Confirm New Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              className="w-full p-2 border rounded" 
            />
          </div>
          
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
