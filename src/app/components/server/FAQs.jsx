'use client';

import { useState } from 'react';

export default function FAQs() {
  const faqs = [
    {
      question: "How does the bio generation process work?",
      answer: "Our AI-powered platform analyzes your input information (such as your name, profession, experience, skills, and achievements) and generates a tailored bio optimized for your selected platform. The system uses advanced natural language processing to create a bio that sounds natural and professional while highlighting your unique strengths."
    },
    {
      question: "Can I edit the generated bios?",
      answer: "Absolutely! While our AI creates high-quality bios, we understand you may want to add personal touches. After generation, you can edit any part of your bio, adjust the tone, length, or focus areas, and save multiple versions for different purposes."
    },
    {
      question: "Which platforms are supported?",
      answer: "We currently support bio optimization for LinkedIn, Twitter, Instagram, Facebook, personal websites, GitHub, Medium, speaker bios, email signatures, and company team pages. We're constantly adding support for more platforms based on user feedback."
    },
    {
      question: "How many bios can I create with my subscription?",
      answer: "The Free plan allows you to generate up to 3 bios per month. The Pro plan offers unlimited bio generations, while the Business plan includes unlimited generations for up to 5 team members. Custom plans are available for larger teams."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we take data security seriously. Your information is encrypted and never shared with third parties. We only use your input data to generate your bios and improve our service. You can delete your account and all associated data at any time."
    },
    {
      question: "Can I use the generated bios for commercial purposes?",
      answer: "Yes, once a bio is generated for you, it's yours to use however you like, including for commercial purposes. You own the content we generate for you."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team within 30 days of your purchase for a full refund."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account settings. After cancellation, you'll continue to have access to your plan until the end of your current billing period."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our platform and services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0"
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <svg 
                  className={`h-6 w-6 text-gray-500 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`mt-2 transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
