// components/HeroSection.js
import React, { useEffect } from 'react';

const images = [
  '/heroboy.png', // Replace with your image URLs
  '/herogirl.png',
  '/heroboy2.png',
  '/herogirl2.png',
  '/heroboy3.png',
  '/herogirl3.png',
  '/images/image7.jpg',
  '/images/image8.jpg',
  '/images/image9.jpg',
  '/images/image10.jpg',
];

const HeroSection = () => {
 

  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      <div className="flex items-center justify-center md:w-1/2 bg-white bg-opacity-75 p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Monte Vista Primary School</h1>
          <p className="text-lg">Welcome to a place of learning and growth.</p>
        </div>
      </div>
      <div className="masonry-container md:w-1/2 h-full overflow-hidden relative">
        <div className="masonry-inner absolute inset-0">
        <div className="masonry-container md:w-1/2 h-full overflow-hidden relative">
        <div className="masonry absolute inset-0">
          {Images.from({ length: 10 }).map((_, index) => (
            <div key={index} className="masonry-item bg-gray-300 h-64 rounded-lg shadow-md"></div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
