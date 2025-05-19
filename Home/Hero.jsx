'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image/everest2.webp"
          alt="Mountain climbers on snowy peak"
          fill
          priority
          className="object-cover brightness-75"
          sizes="100vw"
        />
      </div>
      
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
      
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white font-bold tracking-wide">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2">EXPLORE</div>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2">EXPERIENCE</div>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">EXPAND</div>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
