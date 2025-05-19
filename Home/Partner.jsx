import React from 'react';

const Partner = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden border-2 border-orange-500 rounded-xl my-6 mx-auto max-w-7xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/ama3.jpg')",
          backgroundPosition: "center",
        }}
      ></div>
      
      {/* Gradient Overlay - Dark at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-black/80"></div>
     
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-2 sm:mb-3 md:mb-4 tracking-wider">
          TRAVEL BEYOND LIMIT
        </h1>
       
        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mb-6 sm:mb-8 md:mb-10">
          Get PDF before flying Nepal Experience the world class tour
          package at the best rate.
        </p>
       
        {/* CTA Button - Orange with exact styling */}
        <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 md:px-10 rounded-md transition-colors text-base sm:text-lg inline-block">
          Become Partner with us
        </a>
      </div>
    </div>
  );
};

export default Partner;
