"use client"
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation'; // Import Next.js router

const Card = () => {
  const [activeExpedition, setActiveExpedition] = useState(0);
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mainImageRef = useRef(null);
  const contentRef = useRef(null);
  const autoplayRef = useRef(null);
  const containerRef = useRef(null);
  const router = useRouter(); // Initialize Next.js router

  const expeditionImages = [
    [
      { src: "/image/Mount1.jpg", alt: "Manaslu sunrise panorama" },
      { src: "/image/Mount2.jpg", alt: "Manaslu climbers on ridge" },
      { src: "/image/Mount3.jpg", alt: "Manaslu camp at night" },
      { src: "/image/Mount4.jpg", alt: "Manaslu summit view" }
    ],
    [
      { src: "/image/himlung1.jpg", alt: "Himlung Himal base camp" },
      { src: "/image/himlung2.jpg", alt: "Himlung Himal glacier traverse" },
      { src: "/image/himlung3.jpg", alt: "Himlung Himal summit push" },
      { src: "/image/himlung4.jpg", alt: "Himlung Himal celebration" }
    ],
    [
      { src: "/image/everest1.webp", alt: "Everest Base Camp trek view" },
      { src: "/image/everest2.webp", alt: "EBC prayer flags" },
      { src: "/image/everet3.webp", alt: "EBC Khumbu icefall" },
      { src: "/image/everest4.avif", alt: "EBC trekkers at milestone" }
    ],
    [
      { src: "/image/ama1.jpg", alt: "Ama Dablam full mountain view" },
      { src: "/image/ama2.jpg", alt: "Ama Dablam technical climbing" },
      { src: "/image/ama3.jpg", alt: "Ama Dablam hanging camp" },
      { src: "/image/ama4.jpg", alt: "Ama Dablam summit ridge" }
    ]
  ];

  const expeditions = [
    {
      id: 1,
      name: "Mount Manaslu Expedition",
      elevation: "8163",
      tag: "Expedition",
      bookingText: "Booking Available Dates 2025-2026",
      route: "/manaslu" // Added route for Manaslu
    },
    {
      id: 2,
      name: "Himlung Himal Expedition",
      elevation: "7126",
      tag: "Expedition",
      bookingText: "Booking Available Dates 2025-2026",
      route: "/himlung" // Added route for Himlung
    },
    {
      id: 3,
      name: "Everest Base Camp Trek",
      elevation: "5364",
      tag: "Trek",
      bookingText: "Booking Available Dates 2025-2026",
      route: "/everest" // Added route for Everest
    },
    {
      id: 4,
      name: "Ama Dablam Expedition",
      elevation: "6812",
      tag: "Expedition",
      bookingText: "Booking Available Dates 2025-2026",
      route: "/dablam" // Added route for Ama Dablam
    }
  ];

  const currentExpedition = expeditions[activeExpedition];
  const currentImages = expeditionImages[activeExpedition];

  // Function to handle navigation when "Explore now" is clicked
  const handleExploreClick = () => {
    router.push(currentExpedition.route);
  };

  // Cinematic transition with a pause between transitions
  const animateTransition = () => {
    if (mainImageRef.current && contentRef.current) {
      setIsTransitioning(true);

      const tl = gsap.timeline({ onComplete: () => setIsTransitioning(false) });
      
      // Hold the current image for a brief moment
      tl.to(mainImageRef.current, { 
        duration: 0.5,
        ease: 'none',
      })
      
      // Smooth fade out with subtle zoom
      .to(mainImageRef.current, {
        opacity: 0,
        scale: 1.1, 
        duration: 1.2, 
        ease: 'power1.inOut', // Smoother easing
      })
      .to(contentRef.current, {
        opacity: 0,
        y: 20, 
        duration: 0.8,
        ease: 'power1.inOut',
      }, "<")
      
      // Hold briefly between transitions
      .set(mainImageRef.current, {
        scale: 1.05, // Start new image slightly zoomed
      })
      .to({}, { duration: 0.3 }) // Pause before showing new image
      
      // Cinematic fade in for new image
      .to(mainImageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.5, // Slower, more cinematic reveal
        ease: 'power1.out',
      })
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power1.out',
      }, "-=1.3"); // Start slightly before image animation completes
    }
  };

  const nextExpedition = () => {
    if (isTransitioning) return;
    setActiveExpedition((prev) => (prev === expeditions.length - 1 ? 0 : prev + 1));
    setActiveThumbnail(0);
    animateTransition();
    resetAutoplay();
  };

  const prevExpedition = () => {
    if (isTransitioning) return;
    setActiveExpedition((prev) => (prev === 0 ? expeditions.length - 1 : prev - 1));
    setActiveThumbnail(0);
    animateTransition();
    resetAutoplay();
  };

  const changeThumbnail = (index) => {
    if (isTransitioning || index === activeThumbnail) return;
    setActiveThumbnail(index);
    animateTransition();
    resetAutoplay();
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      setActiveThumbnail((prev) => {
        const next = prev + 1;
        if (next >= expeditionImages[activeExpedition].length) {
          setTimeout(() => {
            setActiveExpedition((prevExp) => (prevExp === expeditions.length - 1 ? 0 : prevExp + 1));
            setActiveThumbnail(0);
            animateTransition();
          }, 200);
          return prev;
        }
        animateTransition();
        return next;
      });
    }, 8000); // Extended to 8 seconds to allow each image to be shown longer
  };

  // Handle responsive layout adjustments
  useEffect(() => {
    const handleResize = () => {
      // Optional: Add specific responsive adjustments here if needed
      if (window.innerWidth < 640) {
        // Mobile-specific adjustments
      } else if (window.innerWidth < 1024) {
        // Tablet-specific adjustments
      } else {
        // Desktop-specific adjustments
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    resetAutoplay();
    return () => autoplayRef.current && clearInterval(autoplayRef.current);
  }, [activeExpedition]);

  return (
    <div className="w-full h-full relative" ref={containerRef}>
      <div className="w-full h-screen relative overflow-hidden">
        {/* Main image with enhanced transition */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            ref={mainImageRef}
            src={currentImages[activeThumbnail].src} 
            alt={currentImages[activeThumbnail].alt} 
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>

        {/* Overlay gradient - enhanced for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-blue-900/50 to-blue-900/75">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
            <div ref={contentRef} className="h-full flex flex-col">
              {/* Enhanced responsive tag */}
              <div className="flex gap-4 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                <div className="border border-orange-500 text-white rounded-full px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base">
                  {currentExpedition.tag}
                </div>
              </div>

              {/* Responsive text sizes and spacing */}
              <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-1 sm:mb-2">
                  {currentExpedition.name}
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                  {currentExpedition.elevation}
                </h2>

                {/* Booking tag */}
                <div className="mt-4 sm:mt-6 md:mt-8">
                  <div className="bg-green-500 text-white rounded-full px-4 sm:px-6 py-1 sm:py-2 inline-block text-sm sm:text-base">
                    {currentExpedition.bookingText}
                  </div>
                </div>
              </div>

              {/* Bottom controls - improved spacing and responsiveness */}
              <div className="mt-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-between">
                  {/* CTA Button - Added onClick handler for navigation */}
                  <button 
                    onClick={handleExploreClick}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded transition-colors duration-300 text-sm sm:text-base"
                  >
                    Explore now
                  </button>

                  {/* Navigation and thumbnails */}
                  <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                    {/* Navigation buttons */}
                    <div className="flex gap-2 sm:gap-4">
                      <button 
                        onClick={prevExpedition}
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold flex items-center justify-center rounded transition-all duration-300 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                        aria-label="Previous expedition"
                        disabled={isTransitioning}
                      >
                        &lt;
                      </button>
                      <button 
                        onClick={nextExpedition}
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold flex items-center justify-center rounded transition-all duration-300 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                        aria-label="Next expedition"
                        disabled={isTransitioning}
                      >
                        &gt;
                      </button>
                    </div>

                    {/* Thumbnails - responsive sizes */}
                    <div className="flex gap-2 md:gap-3 lg:gap-4 overflow-x-auto pb-2 snap-x">
                      {currentImages.map((thumbnail, index) => (
                        <div 
                          key={index} 
                          className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 transform snap-start ${
                            index === activeThumbnail 
                              ? 'border-2 border-orange-500 scale-105' 
                              : 'border border-gray-400 hover:border-orange-300'
                          } ${isTransitioning ? 'pointer-events-none' : ''}`}
                          onClick={() => changeThumbnail(index)}
                        >
                          <img 
                            src={thumbnail.src} 
                            alt={thumbnail.alt} 
                            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;