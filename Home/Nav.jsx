"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '/', color: 'text-yellow-500' },
    { name: 'Mountaineering', href: '/mountaineering', hasDropdown: true },
    { name: 'Trekking', href: '/trekking', hasDropdown: true },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Company', href: '/company', hasDropdown: true },
    { name: 'Training', href: '/training', hasDropdown: true },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Customize Your Trip', href: '/customize', isCTA: true } // Added to mobile menu items
  ];

  return (
    <nav className={`w-full fixed top-0 z-50 ${scrolled ? 'bg-gray-900' : 'bg-gray-800 bg-opacity-90'}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 ml-2">
            <Link href="/" className="flex items-center">
              <svg className="h-10 w-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 2L2 22h20L12 2z" />
              </svg>
              <div className="ml-1 flex flex-col justify-center">
                <span className="text-white font-bold text-lg tracking-wide leading-tight">INFINITY</span>
                <span className="text-white font-bold text-sm tracking-wide leading-tight">ADVENTURE</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center space-x-4">
            {navItems.filter(item => !item.isCTA).map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={`${item.color || 'text-gray-300'} hover:text-white hover:bg-orange-500 px-3 py-2 text-sm font-medium relative group rounded-md transition-colors duration-200`}
              >
                <span className="flex items-center">
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block mr-2">
            <Link href="/customize" className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md">
              Customize Your Trip
            </Link>
          </div>

          {/* Mobile menu button - Modified to be more compact */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-2 bg-gray-900">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                item.isCTA 
                  ? 'text-white bg-orange-500 hover:bg-orange-600 font-medium' 
                  : `${item.color || 'text-gray-300'} hover:text-white hover:bg-orange-500`
              } block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200`}
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center justify-between">
                {item.name}
                {item.hasDropdown && (
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;