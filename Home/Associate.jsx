import React from 'react';

const Associate = () => {
  // Association data
  const associations = [
    {
      id: 1,
      name: "Nepal Mountaineering Association",
      abbreviation: "NMA",
      type: "Associated with"
    },
    {
      id: 2,
      name: "Nepal Tourism Board",
      abbreviation: "NTB",
      type: "Associated with"
    },
    {
      id: 3,
      name: "International Federation of Mountain Guides",
      abbreviation: "IFMGA",
      type: "Professional Association"
    }
  ];

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side associations */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {associations[0].type}
            </h3>
            <div className="flex items-center space-x-4">
              {/* First placeholder */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-800 font-bold">{associations[0].abbreviation}</span>
                </div>
                <span className="text-xs mt-2 text-center">{associations[0].name}</span>
              </div>
              
              {/* Second placeholder */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-800 font-bold">{associations[1].abbreviation}</span>
                </div>
                <span className="text-xs mt-2 text-center">{associations[1].name}</span>
              </div>
            </div>
          </div>
          
          {/* Right side professional associations */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {associations[2].type}
            </h3>
            <div className="flex items-center">
              {/* Third placeholder */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-800 font-bold">{associations[2].abbreviation}</span>
                </div>
                <span className="text-xs mt-2 text-center">{associations[2].name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider line */}
      <div className="w-full h-px bg-gray-200 mt-12"></div>
    </div>
  );
};

export default Associate;