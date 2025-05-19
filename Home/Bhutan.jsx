'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Bhutan = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 sm:mb-8">BHUTAN TRIP</h1>
      
      {/* Main content container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {/* Text section */}
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            Embark on a journey to explore the world's most stunning travel
            destinations with our handpicked, expertly curated tours. Whether
            you are after thrilling adventures in untamed landscapes, cultural
            experiences in iconic cities, or serene escapes in tranquil
            environments, we offer tailor-made experiences that cater to your
            desires.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            From scaling mountains to unwinding on pristine beaches,
            our tours ensure that every traveler finds their perfect getaway. Let
            us turn your travel dreams into unforgettable memories with our
            seamless planning and personalized itineraries designed to fit your
            pace and preferences.
          </p>
          
          {/* CTA Button */}
          <div className="pt-4 sm:pt-6">
            <Link href="/bhutan-details">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-md transition duration-300 shadow-md">
                Know More
              </button>
            </Link>
          </div>
        </div>
        
        {/* Images grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {/* Punakha Dzong */}
          <div className="rounded-lg overflow-hidden shadow-md h-40 sm:h-48 md:h-64 relative">
            <Image 
              src="/image/bhutan1.jpg" 
              alt="Punakha Dzong with mountains" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          
          {/* Tiger's Nest Monastery at night */}
          <div className="rounded-lg overflow-hidden shadow-md h-40 sm:h-48 md:h-64 relative">
            <Image 
              src="/image/bhutan2.jpg" 
              alt="Tiger's Nest Monastery illuminated at night" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          
          {/* Memorial Chorten */}
          <div className="rounded-lg overflow-hidden shadow-md h-40 sm:h-48 md:h-64 relative">
            <Image 
              src="/image/bhutan3.jpg" 
              alt="Memorial Chorten in Thimphu" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          
          {/* Tiger's Nest Monastery daytime */}
          <div className="rounded-lg overflow-hidden shadow-md h-40 sm:h-48 md:h-64 relative">
            <Image 
              src="/image/bhutan4.jpg" 
              alt="Tiger's Nest Monastery on cliffside" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bhutan;