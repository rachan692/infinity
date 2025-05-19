'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Query = () => {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  // FAQ data
  const faqs = [
    {
      question: "What are the best times of year for trekking in Nepal?",
      answer: "The best seasons for trekking in Nepal are generally spring (March to May) and autumn (September to November). During these periods, the weather is mild, skies are clear with spectacular mountain views, and temperatures are comfortable for trekking. Winter (December to February) can also be good for lower altitude treks, while summer/monsoon season (June to August) typically has more rain and clouds."
    },
    {
      question: "Is it safe to trek alone in Nepal?",
      answer: "While Nepal is generally considered safe for tourists, solo trekking comes with additional risks, especially in remote areas. It's recommended to hire a guide or join a group for safety reasons including navigation, language barriers, altitude sickness monitoring, and emergency assistance. Solo trekkers should always register their routes with the Trekkers' Information Management System (TIMS) and be prepared with proper equipment and communications devices."
    },
    {
      question: "What should I pack for a trekking expedition?",
      answer: "Essential items include: good hiking boots, weather-appropriate clothing (layers are best), sleeping bag, backpack, water purification system, first aid kit, headlamp, trekking poles, sun protection, and personal medications. Technical gear depends on your specific trek. Most teahouses provide bedding, but quality varies. Don't overpack as you'll either carry everything yourself or pay a porter, with weight restrictions applying."
    },
    {
      question: "What other activities can I do in Nepal besides trekking?",
      answer: "Nepal offers numerous activities beyond trekking, including wildlife safaris in Chitwan National Park, paragliding and zip-lining in Pokhara, white water rafting on various rivers, cultural tours of ancient UNESCO sites in Kathmandu Valley, mountain biking trails, yoga and meditation retreats, cooking classes, and local community homestays for cultural immersion experiences."
    },
    {
      question: "Do I need a permit for trekking in Nepal?",
      answer: "Yes, permits are required for most trekking areas in Nepal. You'll need the Trekkers' Information Management System (TIMS) card for most treks, and specific conservation area permits for protected regions like Annapurna, Langtang, or Sagarmatha (Everest). Restricted areas require additional special permits. These can be obtained in Kathmandu or Pokhara through the Nepal Tourism Board or registered trekking agencies."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="text-lg text-gray-700">
          This section highlights some of the most recent and frequently asked questions from our community
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="mb-12 space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-orange-500">
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            
            {openFAQ === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Support Message */}
      <div className="text-center">
        <p className="text-lg mb-6">
          If you don't see your question here, don't hesitate to get in touch - our support team is ready to help!
        </p>
        <Link href="/contact">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-md">
            Enquiry Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Query;
