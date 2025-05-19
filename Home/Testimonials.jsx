"use client"
import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000; // 5 seconds per slide

  const testimonials = [
    {
      id: 1,
      name: "John D",
      title: "Travel Enthusiast",
      image: "/image/t1.avif",
      rating: 5,
      text: "Their guided tours offered us the perfect blend of adventure and education. From exploring ancient ruins to trying local cuisine, it was completely unforgettable!"
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Luxury Traveler",
      image: "/image/t2.avif",
      rating: 5,
      text: "Every detail was perfectly curated. From mountain hikes to seaside retreats, they created an itinerary that exceeded all expectations while maintaining luxury at every step."
    },
    {
      id: 3,
      name: "Robert Johnson",
      title: "Family Adventurer",
      image: "/image/t3.avif",
      rating: 5,
      text: "Traveling with three kids can be challenging, but they made our family trip seamless and enjoyable. Activities were perfect for all ages and our guide was incredibly patient."
    },
    {
      id: 4,
      name: "Maria Garcia",
      title: "Solo Explorer",
      image: "/image/t4.avif",
      rating: 5,
      text: "As a solo female traveler, safety and experience were my priorities. They exceeded both while connecting me with like-minded explorers. Will definitely book again!"
    }
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [currentSlide, testimonials.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center py-16 text-white bg-fixed bg-cover bg-center" 
         style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/image/himlung4.jpg')" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">TESTIMONIALS</h2>
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-center text-lg">
            We're proud to have helped countless adventurers create memories that last a lifetime.
            Read their stories of discovery, trust, and joy, and see why we're the go-to
            choice for travelers worldwide. Your next adventure could be your best one yet just like it was for them.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out"
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full px-4">
                <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-400 mb-3">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-yellow-400">{testimonial.title}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-2/3 md:pl-6">
                    <div className="relative">
                      <div className="text-5xl text-yellow-400 absolute -top-10 left-0 opacity-30">"</div>
                      <p className="text-lg md:text-xl relative z-10 italic">{testimonial.text}</p>
                      <div className="text-5xl text-yellow-400 absolute -bottom-10 right-0 opacity-30">"</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={goToPrevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dot indicators */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${currentSlide === index ? 'bg-yellow-400' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;