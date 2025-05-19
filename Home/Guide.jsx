'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const Guide = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures client-side rendering only
    setIsClient(true);
  }, []);

  const guides = [
    {
      name: "Prem Gurung",
      title: "IFMGA Guide Nepal & Founder",
      image: "/image/guide1.jpg"
    },
    {
      name: "Ivan Pegorari",
      title: "IFMGA Guide Italy",
      image: "/image/guide2.jpg"
    },
    {
      name: "Sonam Lama",
      title: "Expert Mountaineering Guide",
      image: "/image/guide3.jpg"
    },
    {
      name: "Pemba Sherpa",
      title: "Professional Trekking Guide",
      image: "/image/guide4.jpg"
    }
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  if (!isClient) return null; // Prevent SSR mismatch

  return (
    <div className="relative w-full mt-20">
      {/* Background section */}
      <div className="relative w-full h-screen min-h-[700px]">
        <div className="absolute inset-0 bg-gray-900/70 z-10"></div>
        <Image
          src="/image/everest4.avif"
          alt="Mountain landscape"
          fill
          className="object-cover"
          priority
        />

        {/* Foreground content */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-start pt-16 md:pt-24 px-4">
          {/* Title section */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">OUR GUIDES</h2>
            <p className="text-white text-lg max-w-3xl text-center">
              Meet the folks behind the scenes, experts in making your adventure
              dreams come true with their skills and passion.
            </p>
          </div>

          {/* Scrollable guide cards section */}
          <div className="w-full max-w-6xl relative flex items-center">
            {/* Left scroll button */}
            <button 
              onClick={scrollLeft} 
              className="lg:hidden z-30 bg-white/30 hover:bg-white/40 rounded-full p-2 text-white backdrop-blur-sm mx-2"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Scrollable container */}
            <div 
              ref={scrollContainerRef}
              className="w-full flex lg:grid lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto scrollbar-hide px-2 py-4 snap-x snap-mandatory"
            >
              {guides.map((guide, index) => (
                <div key={index} className="flex flex-col items-center flex-shrink-0 w-48 sm:w-56 lg:w-auto snap-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white mb-4 relative">
                    <Image
                      src={guide.image}
                      alt={guide.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{guide.name}</h3>
                  <p className="text-white text-center">{guide.title}</p>
                </div>
              ))}
            </div>

            {/* Right scroll button */}
            <button 
              onClick={scrollRight} 
              className="lg:hidden z-30 bg-white/30 hover:bg-white/40 rounded-full p-2 text-white backdrop-blur-sm mx-2"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hide scrollbars */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Guide;
