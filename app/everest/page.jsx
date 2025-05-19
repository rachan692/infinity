import React from 'react';

import mountainData from '@/components/mountaindata';
import Mountain from '@/Home/Mountain';

export default function Everest() {
  const mountain = mountainData.everest;

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
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
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-blue-800">Price</h3>
            <p className="text-3xl font-bold text-blue-600">${mountain.price.toLocaleString()}</p>
            <p className="text-sm text-gray-600 mt-2">Per Person</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors w-full">Book Now</button>
          </div>
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

<Mountain/>
      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for the Adventure of a Lifetime?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our expedition to the world's highest peak and create memories that will last forever.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">Book Now</button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">Contact Us</button>
          </div>
        </div>
        {/* <Mountain/> */}
      </div>
    </div>
    
  );
}
