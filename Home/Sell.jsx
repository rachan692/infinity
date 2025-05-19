'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Sell = () => {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8">
          BEST SELLERS
        </h2>
        
        {/* Description text */}
        <div className="max-w-4xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
          <p>
            At <span className="font-semibold">Infinity Adventure Nepal Pvt. Ltd.</span>, we specialize in crafting unforgettable Mountaineering and Trekking experiences in the capital of mountains. Join us for an adventure of a lifetime and create memories that will last a lifetime.
          </p>
        </div>
        
        {/* You could add best seller products/packages here */}
        {/* Example: (uncomment and adjust as needed)
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {topSellers.map((seller) => (
            <Link href={`/packages/${seller.slug}`} key={seller.id} className="group">
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image 
                  src={seller.imageUrl} 
                  alt={seller.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={false}
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{seller.title}</h3>
              <p className="text-gray-600">{seller.price}</p>
            </Link>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default Sell;