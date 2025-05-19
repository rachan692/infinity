'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Course = () => {
  return (
    <div className="flex flex-col md:flex-row bg-amber-50 rounded-lg overflow-hidden shadow-lg my-8 mx-4 lg:mx-auto max-w-6xl">
      <div className="p-4 sm:p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
          HIMALAYAN MOUNTAINEERING COURSES
        </h1>
        <p className="text-sm sm:text-base text-gray-800 mb-4 md:mb-6">
          Take your passion for adventure to new heights with our comprehensive mountaineering courses! Whether you're a beginner looking to explore the basics or an experienced climber aiming to sharpen your skills, we offer tailored programs to suit all levels.
        </p>
        <div>
          <Link href="/enroll" passHref>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded transition duration-300">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 relative h-64 sm:h-80 md:h-auto">
        <Image 
          src="/image/hero.jpg" 
          alt="Mountaineers traversing a glacier in the Himalayas" 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Course;
