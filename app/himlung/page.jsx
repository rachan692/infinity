import React from 'react';
// import mountainData from './mountainData';
import mountainData from '@/components/mountaindata';


export default function HimlungHimal() {
  const mountain = mountainData.himlung;

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{mountain.name}</h1>
          <p className="text-xl mb-6">{mountain.altitude} | {mountain.range}</p>
          <p className="text-lg max-w-3xl">{mountain.description}</p>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Trip Details</h3>
            <ul className="mt-2 space-y-2">
              <li><span className="font-medium">Duration:</span> {mountain.tripDuration}</li>
              <li><span className="font-medium">Group Size:</span> {mountain.groupSize}</li>
              <li><span className="font-medium">Best Seasons:</span> {mountain.bestSeasons}</li>
              <li><span className="font-medium">Difficulty:</span> {mountain.difficulties}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">First Ascent</h3>
            <ul className="mt-2 space-y-2">
              <li><span className="font-medium">Date:</span> {mountain.firstAscent.date}</li>
              <li><span className="font-medium">Team:</span> {mountain.firstAscent.team}</li>
              <li><span className="font-medium">Route:</span> {mountain.firstAscent.route}</li>
            </ul>
          </div>
          <div className="bg-emerald-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-emerald-800">Price</h3>
            <p className="text-3xl font-bold text-emerald-600">${mountain.price.toLocaleString()}</p>
            <p className="text-sm text-gray-600 mt-2">Per Person</p>
            <button className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors w-full">Book Now</button>
          </div>
        </div>
      </div>

      {/* 7000m Experience Highlight */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-md">
          <h3 className="text-xl font-bold text-emerald-800 mb-2">Perfect 7000m Peak Experience</h3>
          <p className="text-gray-700">
            Himlung Himal at 7,126m is an ideal peak for climbers looking to gain experience at higher altitudes
            before attempting 8000m mountains. With moderate technical difficulty and a well-organized expedition setup,
            it provides the perfect balance of challenge and accessibility.
          </p>
        </div>
      </div>

      {/* Key Attractions */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Key Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mountain.attractions.map((attraction, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
              <p className="text-gray-700">{attraction.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Experience */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Cultural Experience</h2>
          <p className="text-gray-700 mb-4">
            The journey to Himlung Himal takes you through the remote villages of the Manang region, 
            offering a unique opportunity to experience the rich cultural heritage of the local communities.
            You'll visit traditional villages like Phu, where ancient Tibetan Buddhist traditions are still practiced.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-semibold text-gray-800 mb-2">Local Monasteries</h3>
              <p className="text-gray-600">
                Visit ancient Buddhist monasteries along the trek, where you can witness daily rituals and prayers.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-semibold text-gray-800 mb-2">Traditional Villages</h3>
              <p className="text-gray-600">
                Experience the authentic lifestyle of remote mountain communities with their unique architecture and customs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary */}
      <div className="container mx-auto px-4 py-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">Expedition Itinerary</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-3 px-4 text-left">Day</th>
                <th className="py-3 px-4 text-left">Activity</th>
                <th className="py-3 px-4 text-left">Accommodation</th>
              </tr>
            </thead>
            <tbody>
              {mountain.itinerary.map((day, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="py-3 px-4 border-b">{typeof day.day === 'string' ? day.day : `Day ${day.day}`}</td>
                  <td className="py-3 px-4 border-b">{day.description}</td>
                  <td className="py-3 px-4 border-b">{day.accommodation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Preparation Tips */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Preparation Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">Physical Training</h3>
            <p className="text-gray-700">
              Begin a focused training program at least 4-6 months before the expedition. Focus on cardiovascular endurance,
              leg strength, and core stability. Regular hiking with a weighted pack is essential preparation.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">Technical Skills</h3>
            <p className="text-gray-700">
              While Himlung has moderate technical difficulty, familiarity with basic mountaineering skills is important.
              Practice using crampons, ice axe, and rope systems before your expedition.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">Altitude Acclimatization</h3>
            <p className="text-gray-700">
              Previous experience at altitudes above 5000m is recommended. Our itinerary includes proper acclimatization days,
              but arriving with some high-altitude experience will increase your chances of success.
            </p>
          </div>
        </div>
      </div>

      {/* Includes/Excludes */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-700">What's Included</h2>
            <ul className="space-y-2">
              {mountain.includes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-red-700">What's Excluded</h2>
            <ul className="space-y-2">
              {mountain.excludes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Your Gateway to High-Altitude Mountaineering</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our expedition to Himlung Himal and experience the thrill of climbing a 7000m peak in a pristine Himalayan setting.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-emerald-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">Book Now</button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-800 transition-colors">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
