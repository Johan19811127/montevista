// components/HeroSection.js
import Image from 'next/image';
import React, { useEffect } from 'react';


const images = [
  '/Images/-Hero/1.png', // Replace with your image URLs
  '/Images/-Hero/2.png',
  '/Images/-hero/3.png',
  '/images/-hero/4.png',
  '/images/hero/5.png',
  '/images/hero/6.png',
  '/images/hero/7.png',
  '/images/hero/8.png',
  '/images/hero/9.png',

];

const HeroSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      <div className="flex items-center justify-center md:w-1/2 bg-white bg-opacity-75 p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Experience Fine Dining At Its Best</h1>
          <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">Our Menu</button>
            <button className="px-4 py-2 border border-gray-900 text-gray-900 rounded-lg">Reservations</button>
          </div>
        </div>
      </div>
     
   
              <div className="mt-10">
                {/* Decorative image grid */}
                <div className="grid grid-cols-3 grid-rows-3 gap-2 p-4">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden">
          <img src={src} alt={`Gallery image ${index + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  
             </div>
               
              </div>
 
   
  );
};

export default HeroSection;

