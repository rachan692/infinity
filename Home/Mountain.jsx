'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';

const Mountain = () => {
  const expeditions = [
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
    }
  ];

  const snowRefs = useRef([]);

  useEffect(() => {
    snowRefs.current.forEach((ref) => {
      if (!ref) return;

      for (let i = 0; i < 30; i++) {
        const flake = document.createElement("div");
        flake.className = "snowflake";
        flake.style.left = Math.random() * 100 + "%";
        flake.style.animationDuration = 5 + Math.random() * 5 + "s";
        ref.appendChild(flake);
      }
    });

    return () => {
      snowRefs.current.forEach((ref) => {
        if (ref) {
          while (ref.firstChild) {
            ref.removeChild(ref.firstChild);
          }
        }
      });
    };
  }, []);

  return (
    <section className="w-full py-8 md:py-12 px-4 bg-gray-50 relative z-0">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
            Mountain Expedition
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {expeditions.map((expedition, index) => (
            <div
              key={expedition.id}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 flex flex-col h-full relative"
            >
              {/* Snowfall overlay */}
              <div
                ref={(el) => (snowRefs.current[index] = el)}
                className="pointer-events-none absolute top-0 left-0 w-full h-full z-10"
              />

              {/* Image */}
              <div className="relative w-full h-48 z-0">
                <Image
                  src={expedition.image}
                  alt={expedition.altText}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                  priority={expedition.id <= 2}
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 flex flex-col flex-grow z-0 relative">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {expedition.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {expedition.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C75E24" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
                    </svg>
                    <span className="ml-2 text-gray-700 text-xs md:text-sm">{expedition.type}</span>
                  </div>

                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C75E24" className="bi bi-calendar3" viewBox="0 0 16 16">
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    <span className="ml-2 text-gray-700 text-xs md:text-sm">{expedition.days} Days</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                  <Link
                    href={`/expeditions/${expedition.slug}`}
                    className="flex-1 text-center py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-sm md:text-base"
                  >
                    View More
                  </Link>
                  <Link
                    href={`/expeditions/${expedition.slug}/dates`}
                    className="flex-1 text-center py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm md:text-base"
                  >
                    View Dates
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mountain;
