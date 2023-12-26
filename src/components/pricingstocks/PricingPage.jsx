import React, { useState } from 'react';
import PlanBox from './PlanBox';
import './PricingPage.css';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    setIsAnnual((prevState) => !prevState);
  };

  const plans = [
    {
      title: 'Basic',
      price: isAnnual ? '$99/year' : '$9.99/month',
      description:"All the basics for businesses that are just getting started.",
      features: ['   A user-friendly interface displaying key information and metrics', '  Basic tools for team collaboration, such as file sharing and commenting.', '  Periodic updates and bug fixes to improve software performance.'],
    },
    
    {
      title: 'Premium',
      price: isAnnual ? '$299/year' : '$29.99/month',
      description:"Better for growing businesses that want more customers.",
      features: ['   In-depth analytics and reporting tools for detailed insights.', '   Ability to customize the software to meet specific business needs.', '   Integration of AI and machine learning capabilities for predictive analysis or smart recommendations.'],
    },
  ];

  return (
    <div className="pricing-page  font-poppins my-16">
      <div class="text-center">
      <h1 class="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
        Our <span class="font-semibold">plans</span> for your <span class="font-semibold">strategies</span>
      </h1>
      <p class="text-sm font-normal text-gray-400">
        See below our main three plans for your business, for your startup and agency.
      </p>
      <p class="text-sm font-normal text-gray-400">
        It start from here! You can teach yourself what you really like.
      </p>
    </div>
      <div className="toggle flex items-center justify-center mt-10 space-x-4">
        <span className='text-base font-medium'> Bill Monthly</span>
        <label className="switch relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <input type="checkbox" onChange={handleToggle} />
          <span className="slider absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1"></span>
        </label>
        <span className='text-base font-medium'> Bill Annually</span>
      </div>
      
      <div className="plan-boxes  font-poppins">
        {plans.map((plan, index) => (
          <PlanBox key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
