'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Schooling = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Image Section - Left on desktop, can be stacked on mobile */}
        <div className="rounded-lg overflow-hidden shadow-md relative h-64 sm:h-80 md:h-96">
          <Image 
            src="/image/student.jpg" 
            alt="Group of students hiking and exploring mountainous terrain" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        
        {/* Text Section - Right on desktop */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">SCHOOLING GROUP</h1>
          
          <p className="text-base sm:text-lg text-gray-700">
            Discover our specialized group tours designed exclusively for
            students and educators, blending education with adventure in an
            unforgettable experience. These meticulously crafted journeys
            offer a unique balance between cultural immersion and hands-on
            learning, making each destination a living classroom.
          </p>
          
          <p className="text-base sm:text-lg text-gray-700">
            Whether exploring ancient historical landmarks, engaging in environmental
            studies, or diving into the arts and sciences of different cultures,
            our tours provide valuable educational opportunities. Educators
            and students alike will experience meaningful growth through
            real-world exploration, gaining new perspectives while fostering
            curiosity and a love for learning.
          </p>
          
          {/* CTA Button */}
          <div className="pt-4 sm:pt-6">
            <Link href="/schooling-details">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-md transition duration-300 shadow-md">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schooling;
