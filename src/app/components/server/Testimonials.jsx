import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Perfect Bio helped me craft a LinkedIn profile that stands out. I've received more connection requests and job opportunities since updating my bio.",
      author: "Sarah Johnson",
      title: "Marketing Director",
      company: "TechCorp",
      rating: 5
    },
    {
      quote: "As a freelancer, having a compelling bio is essential for attracting clients. This tool made it easy to create professional bios for multiple platforms.",
      author: "Michael Chen",
      title: "Freelance Designer",
      company: "Self-employed",
      rating: 5
    },
    {
      quote: "The platform-specific optimization is brilliant. My Twitter bio now gets more engagement, and my professional bio has helped me land speaking opportunities.",
      author: "Priya Patel",
      title: "Public Speaker",
      company: "Inspire Inc.",
      rating: 4
    },
    {
      quote: "I was struggling to write about myself effectively. Perfect Bio helped me highlight my achievements in a way that doesn't feel boastful but showcases my expertise.",
      author: "James Wilson",
      title: "Software Engineer",
      company: "InnovateTech",
      rating: 5
    },
    {
      quote: "Our entire team uses Perfect Bio now. It's saved us hours of work and helped maintain consistent professional profiles across the company.",
      author: "Emma Rodriguez",
      title: "HR Manager",
      company: "Global Solutions",
      rating: 5
    },
    {
      quote: "The keyword optimization feature helped my profile appear in more searches. I've seen a significant increase in profile views since using Perfect Bio.",
      author: "David Kim",
      title: "Sales Executive",
      company: "Growth Partners",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thousands of professionals trust Perfect Bio to create compelling personal and professional biographies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8"
            >
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4 flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold">
                  {testimonial.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Testimonial */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gray-100 dark:bg-gray-800 p-8 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-4xl font-bold">
                JD
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="h-6 w-6 text-yellow-400" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                "As a career coach, I've recommended Perfect Bio to hundreds of clients. The results speak for themselves - more interviews, better networking opportunities, and increased confidence. The platform's ability to tailor content to different platforms while maintaining authenticity is unmatched. It's become an essential tool in my coaching practice."
              </blockquote>
              <div>
                <p className="font-semibold text-lg text-gray-900 dark:text-white">John Doe</p>
                <p className="text-gray-500 dark:text-gray-400">Career Coach & LinkedIn Strategist, Career Accelerator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
