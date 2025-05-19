import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Meet Our Experts Section */}
      <div className="py-12 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">MEET OUR EXPERTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Expert 1 */}
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/image/guide1.jpg" 
                alt="Prem Gurung" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold">Prem Gurung</h3>
              <p className="text-gray-300 mb-4">IFMGA Mountain Guide & Founder</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded transition-colors">
                Consult Now
              </button>
            </div>
          </div>
          
          {/* Expert 2 */}
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/image/guide2.jpg" 
                alt="Mike Lim" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold">Mike Lim</h3>
              <p className="text-gray-300 mb-4">Adventure Consultant</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded transition-colors">
                Consult Now
              </button>
            </div>
          </div>
          
          {/* Expert 3 */}
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/image/santosh.jpg" 
                alt="Dr. Santosh Timalsina" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold">Dr. Santosh Timalsina</h3>
              <p className="text-gray-300 mb-4">High Mountain Medicine</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded transition-colors">
                Consult Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Partners Section */}
      <div className="py-12 px-4 sm:px-6 md:px-8 border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">OUR PARTNERS</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Partner 1 */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <img 
              src="/image/f2.jpg" 
              alt="Outdoors Partner" 
              className="max-h-full"
            />
          </div>
          
          {/* Partner 2 */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <img 
              src="/image/f3.jpg" 
              alt="Almalence Alpina" 
              className="max-h-full"
            />
          </div>
          
          {/* Partner 3 */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <img 
              src="/image/f4.png" 
              alt="Camp" 
              className="max-h-full"
            />
          </div>
          
          {/* Partner 4 */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <img 
              src="/image/f5.png" 
              alt="Outdoor Solution" 
              className="max-h-full"
            />
          </div>
        </div>
      </div>
      
      {/* Main Footer with Links */}
      <div className="border-t border-gray-800 py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-orange-500 mb-2">INFINITY</h3>
              <h4 className="text-sm font-medium text-orange-500">ADVENTURE</h4>
            </div>
            
            <div className="mb-6">
              <h5 className="font-semibold mb-2">Address</h5>
              <p className="text-gray-400">Dhumbarahi, Kathmandu, Nepal</p>
              <p className="text-gray-400">+977-9856008848</p>
            </div>
            
            <div className="mb-6">
              <h5 className="font-semibold mb-2">Email</h5>
              <p className="text-gray-400">For inquiries: info@infinityadventurenepal.com</p>
            </div>
            
            <div className="flex space-x-3 mb-6">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-full hover:opacity-90" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-800" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
            
            <div className="mb-6">
              <h5 className="font-semibold mb-3">Associated With</h5>
              <div className="flex space-x-6">
                <img src="/api/placeholder/70/70" alt="Tourism Ministry" className="h-16" />
                <img src="/api/placeholder/70/70" alt="Nepal Mountaineering" className="h-16" />
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Certified By</h5>
              <img src="/image/f1.jpg" alt="International Federation of Mountain Guides" className="h-20" />
            </div>
          </div>
          
          {/* Footer Navigation */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Company</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Message from Founder</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Certificates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Become Partner with us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            {/* Mountaineering Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Mountaineering</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mount Everest Expedition</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mount Lhotse Expedition</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mount Annapurna-1 Expedition</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mount Manaslu Expedition</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Himlung Himal Expedition</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Annapurna IV Expedition</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mount Baruntse Expedition</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ama Dablam Expedition 6812m</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Island Peak Climbing</a></li>
              </ul>
            </div>
            
            {/* Trekking Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Trekking</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Langtang Gosaikunda Trek</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Everest Base Camp Trek</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Annapurna Circuit Trek</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Manaslu Circuit Trek</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kanchenjunga Circuit Trek</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Makalu Base Camp Trek</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dhaulagiri Circuit Trek</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mardi Himal Trek</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Thorong La Pass Trek</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Three Pass Everest Trek</a></li>
              </ul>
            </div>
            
            {/* Services Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Services</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nepal Tours</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bhutan tours</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ice climbing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rock climbing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Heli Tour</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Jungle Safari</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rafting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Paragliding</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Honey hunting</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6 px-4 sm:px-6 md:px-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            ©2025 Infinity Adventure Nepal Pvt. Ltd. | All Rights Reserved
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Designed and Developed by <span className="font-bold ml-1">webX</span>
          </p>
        </div>
        
        {/* Mountain SVG */}
        <div className="absolute right-0 bottom-0 w-full overflow-hidden h-20 flex justify-end opacity-50">
          <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" className="h-full">
            <path d="M50,80 L150,20 L200,50 L250,30 L300,60 L350,40 L400,70 L400,100 L50,100 Z" fill="none" stroke="#ffffff" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;