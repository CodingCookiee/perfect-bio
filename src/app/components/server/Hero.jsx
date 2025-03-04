import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/images/hero-bg.webp"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Create Your <span className="text-blue-600 dark:text-blue-400">Perfect Bio</span> in Seconds
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Our AI-powered platform helps you craft professional, engaging, and platform-optimized bios that make a lasting impression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/signup" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition duration-300 text-center"
              >
                Get Started for Free
              </Link>
              <Link 
                href="/features" 
                className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-8 py-4 rounded-lg text-lg font-medium transition duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
            
            {/* Social Proof */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">TRUSTED BY PROFESSIONALS FROM</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70">
                <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">LinkedIn Bio Generator</h3>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">Popular</span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white" 
                    value="Sarah Johnson"
                    readOnly
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Profession</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white" 
                    value="Product Manager"
                    readOnly
                  />
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-6">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Generated Bio</h4>
                <p className="text-gray-800 dark:text-gray-200">
                  Results-driven Product Manager with 7+ years of experience driving innovation in SaaS products. 
                  Passionate about creating user-centric solutions that solve real business problems. 
                  Skilled in agile methodologies, market research, and cross-functional team leadership. 
                  Consistently delivered products that exceeded revenue targets and user adoption goals.
                </p>
              </div>
              
              <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300">
                  Copy to Clipboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
