// components/TrainingNowIndicator.jsx
import React from 'react';
import Image from 'next/image';

const TrainingNowIndicator = () => {
  // Sample data for profile pictures
  const profiles = [
    { id: 1, src: '/images/profile1.jpg', alt: 'User profile 1' },
    { id: 2, src: '/images/profile2.jpg', alt: 'User profile 2' },
    { id: 3, src: '/images/profile3.jpg', alt: 'User profile 3' },
  ];
  
  const userCount = 200;
  
  return (
    <div className="flex items-center md:mt-5 mx-3">
      {/* Profile pictures with overlapping effect */}
      <div className="flex -space-x-3 mr-3">
        {profiles.map((profile, index) => (
          <div 
            key={profile.id} 
            className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
            style={{ zIndex: profiles.length - index }}
          >
            <Image
              src={profile.src}
              alt={profile.alt}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* User count and status text */}
      <div className="flex flex-col">
        <span className="font-bold text-lg text-white leading-tight">
          {userCount.toLocaleString()}+
        </span>
        <span className="text-gray-500 text-sm leading-tight">
          Training now
        </span>
      </div>
    </div>
  );
};

export default TrainingNowIndicator;