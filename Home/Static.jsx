'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ChooseAdventure = () => {
  // Combined data for mountains and treks
  const adventures = [
    {
      id: 1,
      name: "Island Peak Climbing",
      description: "The Crown of the Khumbu: Conquering the Heights of Island Peak and Everest Base Camp Trek...",
      image: "/image/m1.avif",
      altText: "Island Peak mountain with snowy landscape",
      type: "Expedition",
      days: 19,
      slug: "island-peak"
    },
    {
      id: 2,
      name: "Lobuche Peak Climbing",
      description: "Climbers Prepare for High-Altitude Ascent Challenge & Everest Base camp Trek...",
      image: "/image/m2.webp",
      altText: "Lobuche Peak with climber on snowy ridge",
      type: "Expedition",
      days: 19,
      slug: "lobuche-peak"
    },
    {
      id: 3,
      name: "Mera Peak Climbing",
      description: "Conquer the Majestic Heights of Mera Peak: An Unforgettable Himalayan Adventure...",
      image: "/image/Mount3.jpg",
      altText: "Mera Peak with climbers in distance",
      type: "Expedition",
      days: 16,
      slug: "mera-peak"
    },
    {
      id: 4,
      name: "Chulu West Peak Climbing",
      description: "Test, ---upcoming Conquering Chulu West: A Journey to the Roof of the Annapurnas...",
      image: "/image/m4.jpg",
      altText: "Chulu West Peak with clouds",
      type: "Expedition",
      days: 18,
      slug: "chulu-west-peak"
    },
    {
      id: 5,
      name: "Kanchenjunga North Base Camp Trek",
      description: "Kanchenjunga North Base Camp Trek: A Remote Adventure to the Foot of the World's Third-Highest Peak...",
      image: "/image/trek4.jpg",
      altText: "Kanchenjunga Base Camp with tents",
      type: "Expedition",
      days: 20,
      slug: "kanchenjunga-north-base-camp"
    },
    {
      id: 6,
      name: "Langtang Valley Trekking Trek",
      description: "Langtang: Where the Yak Ring the Mysteries of Rolwaling to Remember...",
      image: "/image/trek2.webp",
      altText: "Langtang Valley with yak and mountains",
      type: "Expedition", 
      days: 12,
      slug: "langtang-valley-trekking"
    }
  ];

  // State for current adventure index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  
  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextAdventure();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Calculate next index with wraparound
  useEffect(() => {
    setNextIndex((currentIndex + 1) % adventures.length);
  }, [currentIndex, adventures.length]);

  // Function to go to previous adventure
  const prevAdventure = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? adventures.length - 1 : prevIndex - 1
    );
  };

  // Function to go to next adventure
  const nextAdventure = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % adventures.length
    );
  };

  return (
    <div className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/Mount4.jpg" 
          alt="Mountain Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Heading and Text */}
          <div className="md:w-5/12 mb-10 md:mb-0 pr-0 md:pr-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              CHOOSE YOUR<br />
              NEXT<br />
              ADVENTURE
            </h2>
            <p className="text-white text-lg">
              Whether you're dreaming of a serene escape, a thrilling outdoor adventure, or exploring vibrant cultures, we have the perfect trip waiting for you.
            </p>
            
            {/* Navigation Buttons - Circular style */}
            <div className="flex space-x-3 mt-8">
              <button 
                onClick={prevAdventure}
                className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center hover:bg-opacity-70 transition-all border border-white/30"
                aria-label="Previous adventure"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextAdventure}
                className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center hover:bg-opacity-70 transition-all border border-white/30"
                aria-label="Next adventure"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right Section - Cards */}
          <div className="md:w-7/12 relative h-[350px] md:h-[400px]">
            {/* Cards Container with smooth transition */}
            <div className="flex absolute w-full h-full">
              {/* Cards wrapper with transition */}
              <div 
                className="absolute w-full h-full transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 35}%)` }}
              >
                {/* Generate all cards at once */}
                {adventures.map((adventure, index) => (
                  <div 
                    key={adventure.id}
                    className={`absolute rounded-lg overflow-hidden shadow-xl bg-white transition-all duration-500 ${
                      index === currentIndex ? 'opacity-100 z-20' : 
                      index === nextIndex ? 'opacity-100 z-10' : 'opacity-0'
                    }`}
                    style={{ 
                      width: '42%',
                      left: `${index * 45}%`,
                      transform: index === currentIndex || index === nextIndex ? 'scale(1)' : 'scale(0.95)'
                    }}
                  >
                    <div className="relative h-36 md:h-44">
                      <Image
                        src={adventure.image}
                        alt={adventure.altText}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="p-3 md:p-4">
                      <h3 className="text-sm md:text-base font-bold text-gray-900 truncate">{adventure.name}</h3>
                      <p className="text-gray-700 mt-1 mb-2 text-xs line-clamp-2">{adventure.description}</p>
                      
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                          <svg className="w-3 h-3 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-xs">{adventure.type}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <svg className="w-3 h-3 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-xs">{adventure.days} days</span>
                        </div>
                      </div>
                      
                      {index === currentIndex && (
                        <div className="flex justify-between mt-3">
                          <Link href={`/adventures/${adventure.slug}`}
                            className="bg-transparent hover:bg-gray-200 text-gray-800 font-semibold py-1 px-2 text-xs border border-gray-400 rounded transition-colors">
                            View more
                          </Link>
                          
                          <Link href={`/dates/${adventure.slug}`}
                            className="bg-black hover:bg-gray-800 text-white font-semibold py-1 px-2 text-xs rounded transition-colors">
                            View Dates
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {adventures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                  aria-label={`Go to adventure ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAdventure;