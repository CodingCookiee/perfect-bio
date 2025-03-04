'use client';

import React, { useState } from 'react';

export default function BioForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    experience: '',
    skills: '',
    achievements: '',
    platform: 'LinkedIn',
    tone: 'professional',
    length: 'medium'
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // In a real application, you would call your API here
      const response = await fetch('/api/generateBio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to generate bio');
      }
      
      if (onSubmit) {
        onSubmit(data.bio);
      }
    } catch (err) {
      setError(err.message || 'An error occurred while generating your bio');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Generate Your Perfect Bio</h2>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="profession" className="block mb-2 text-sm font-medium">
              Profession/Title *
            </label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
              placeholder="Software Engineer"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="experience" className="block mb-2 text-sm font-medium">
            Years of Experience
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="5+"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="skills" className="block mb-2 text-sm font-medium">
            Key Skills
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="React, Node.js, JavaScript"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="achievements" className="block mb-2 text-sm font-medium">
            Notable Achievements
          </label>
          <textarea
            id="achievements"
            name="achievements"
            value={formData.achievements}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Led a team that increased conversion rates by 30%"
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label htmlFor="platform" className="block mb-2 text-sm font-medium">
              Platform *
            </label>
            <select
              id="platform"
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
              required
            >
              <option value="LinkedIn">LinkedIn</option>
              <option value="Twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
              <option value="Personal Website">Personal Website</option>
              <option value="GitHub">GitHub</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="tone" className="block mb-2 text-sm font-medium">
              Tone
            </label>
            <select
              id="tone"
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            >
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="creative">Creative</option>
              <option value="formal">Formal</option>
              <option value="friendly">Friendly</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="length" className="block mb-2 text-sm font-medium">
              Length
            </label>
            <select
              id="length"
              name="length"
              value={formData.length}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            >
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate Bio'
          )}
        </button>
      </form>
    </div>
  );
}
