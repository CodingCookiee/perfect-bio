import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Perfect Bio</h1>
      
      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At Perfect Bio, our mission is to help professionals, creators, and individuals craft compelling 
            personal biographies that make a lasting impression. We believe that a well-written bio is essential 
            for making connections, building your personal brand, and opening doors to new opportunities.
          </p>
          <p className="text-lg">
            Using cutting-edge AI technology, we've created a platform that makes it easy for anyone to generate 
            professional, engaging, and authentic bios tailored to their specific needs and platforms.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Perfect Bio was founded in 2023 by a team of AI enthusiasts and content creators who recognized 
            a common challenge: writing about yourself is hard. After struggling with their own professional 
            bios and helping countless friends and colleagues with theirs, they decided to build a solution.
          </p>
          <p className="text-lg">
            What started as a simple tool has grown into a comprehensive platform that serves thousands of 
            users across various industries and platforms. Today, Perfect Bio continues to evolve with new 
            features and improvements based on user feedback and advances in AI technology.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">Jane Smith</h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">Michael Johnson</h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            Have questions or feedback? We'd love to hear from you! Reach out to our team at 
            <a href="mailto:hello@perfectbio.com" className="text-blue-600 hover:underline"> hello@perfectbio.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
