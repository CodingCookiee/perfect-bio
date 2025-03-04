import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our services or need help with your account? 
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" 
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" 
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" 
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" 
                  placeholder="Enter subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" 
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-gray-50 p-8 border-t">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Email Us</h3>
                <p className="text-gray-600">
                  <a href="mailto:support@perfectbio.com" className="hover:underline">support@perfectbio.com</a>
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Call Us</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Office</h3>
                <p className="text-gray-600">
                  123 Innovation Way<br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
