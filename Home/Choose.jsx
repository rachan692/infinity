'use client';

import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  // Feature list data
  const features = [
    { title: "Personalized Service", icon: "check-circle" },
    { title: "Destination Knowledge", icon: "check-circle" },
    { title: "Hassle-Free Planning", icon: "check-circle" },
    { title: "24/7 Support", icon: "check-circle" },
    { title: "Customer Satisfaction Guaranteed", icon: "check-circle" }
  ];

  // Service benefits data
  const benefits = [
    {
      title: "Excellent Security",
      description: "Your safety is our top priority. We have rigorous security protocols in place to ensure you can travel worry-free, from the moment you book until your journey ends.",
      icon: "shield"
    },
    {
      title: "Affordable Prices",
      description: "Travel the world without breaking the bank. Our affordable packages are designed to offer maximum value, with no compromise on quality or experience.",
      icon: "dollar"
    },
    {
      title: "World Wide Route",
      description: "With a vast network of global destinations, we provide you access to breathtaking locations across every continent. Wherever your dream destination lies, we'll take you there.",
      icon: "map-pin"
    }
  ];

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title at Top */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">WHY CHOOSE US</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              WHY<br />
              CHOOSE<br />
              US?
            </h2>
            
            <p className="text-gray-700 mb-8">
              We believe that every traveler is unique, and so are their adventures. Our personalized itineraries are crafted to suit your preferences, ensuring that every moment is tailored to your desires.
            </p>
            
            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-orange-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image - Fixed positioning and display */}
          <div className="w-full lg:w-1/2 relative">
            <div className="w-full aspect-[4/3] relative">
              <Image
                src="/image/equipment.jpg"
                alt="Mountaineers with equipment"
                className="rounded-lg object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Benefits Section - Right Side */}
        <div className="mt-12 lg:mt-16 lg:pl-12 lg:w-3/4 lg:ml-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 bg-gray-100 rounded-full p-3">
                  {benefit.icon === 'shield' && (
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  )}
                  {benefit.icon === 'dollar' && (
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                    </svg>
                  )}
                  {benefit.icon === 'map-pin' && (
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;