"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Snowfall Component
const Snowfall = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const count = 100;
    const snowflakes = [];

    for (let i = 0; i < count; i++) {
      const flake = document.createElement("div");
      flake.className = "snowflake";
      flake.style.left = `${Math.random() * 100}%`;
      flake.style.top = `${Math.random() * 100}%`;
      containerRef.current.appendChild(flake);
      snowflakes.push(flake);

      gsap.to(flake, {
        y: window.innerHeight + 100,
        x: `+=${Math.random() * 100 - 50}`,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        delay: Math.random() * 10,
        ease: "linear"
      });
    }

    return () => {
      snowflakes.forEach((flake) => flake.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-50 overflow-hidden"
    />
  );
};

// TrekCard Component
const TrekCard = ({ title, description, days, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <div className="absolute inset-0 bg-gray-200">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 h-16 overflow-hidden">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            <span className="ml-1 text-sm">Expedition</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="ml-1 text-sm">{days} Days</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 py-2 border border-gray-300 rounded-md text-center text-gray-700 hover:bg-gray-50">
            View More
          </button>
          <button className="flex-1 py-2 bg-black text-white rounded-md text-center hover:bg-gray-800">
            View Dates
          </button>
        </div>
      </div>
    </div>
  );
};

// Trek Page Component
const Trek = () => {
  const treks = [
    {
      id: 1,
      title: "Annapurna Circuit Trek",
      description: "coming soon all details ..................",
      days: 17,
      image: "/image/Trek1.webp"
    },
    {
      id: 2,
      title: "Manaslu Circuit Trek",
      description: "It's a voyage into the soul of the Himalayas...",
      days: 16,
      image: "/image/trek2.webp"
    },
    {
      id: 3,
      title: "Khopra Ridge Trek",
      description: "Discovering the Hidden Treasures of the Annapurna Region...",
      days: 11,
      image: "/image/trek3.jpg"
    },
    {
      id: 4,
      title: "Three Passes Trek",
      description: "Trek is the most adventurous and complete route in the Khumbu region of Nepal for experiencing the H...",
      days: 20,
      image: "/image/trek4.jpg"
    }
  ];

  return (
    <div className="relative">
      <Snowfall />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-12">Trekking Adventures</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treks.map((trek) => (
            <TrekCard
              key={trek.id}
              title={trek.title}
              description={trek.description}
              days={trek.days}
              image={trek.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trek;
