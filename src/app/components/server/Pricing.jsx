import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      description: 'Perfect for trying out our service',
      price: '0',
      features: [
        { text: '3 bio generations per month', included: true },
        { text: 'Basic customization options', included: true },
        { text: 'Standard bio templates', included: true },
        { text: 'Advanced customization', included: false },
        { text: 'Priority support', included: false },
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup',
      buttonStyle: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
      popular: false
    },
    {
      name: 'Pro',
      description: 'Perfect for professionals',
      price: '9.99',
      features: [
        { text: 'Unlimited bio generations', included: true },
        { text: 'Advanced customization options', included: true },
        { text: 'Premium bio templates', included: true },
        { text: 'Keyword optimization', included: true },
        { text: 'White-label exports', included: false },
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: true
    },
    {
      name: 'Business',
      description: 'Perfect for teams and agencies',
      price: '29.99',
      features: [
        { text: 'Everything in Pro plan', included: true },
        { text: '5 team members', included: true },
        { text: 'White-label exports', included: true },
        { text: 'Priority support', included: true },
        { text: 'Custom branding', included: true },
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup',
      buttonStyle: 'bg-gray-800 text-white hover:bg-gray-900',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your bio creation needs. No hidden fees or surprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'border-2 border-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2">
                  <span className="font-medium">Most Popular</span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className={feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={plan.buttonLink} 
                  className={`block w-full text-center ${plan.buttonStyle} py-3 px-4 rounded-lg transition duration-300`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Need a custom plan?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We offer custom solutions for larger teams and enterprises. 
            Contact us to discuss your specific requirements.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition duration-300"
          >
            Contact Sales
          </Link>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Can I change plans later?
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your subscription will take effect immediately.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Is there a free trial for paid plans?
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we offer a 7-day free trial for both our Pro and Business plans. No credit card required to start your trial.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                What payment methods do you accept?
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                We accept all major credit cards, PayPal, and Apple Pay. For Business plans, we can also arrange invoicing.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Can I get a refund if I'm not satisfied?
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
