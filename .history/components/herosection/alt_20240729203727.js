// components/HeroSection.js
import Image from 'next/image';
import React, { useEffect } from 'react';


const images = [
  '/Images/-Hero/1.png', // Replace with your image URLs
  '/Images/-Hero/2.png',
  '/Images/-hero/3.png',
  '/images/-hero/4.png',
  '/images/-hero/5.png',
  '/images/-hero/6.png',
  '/images/-hero/7.png',
  '/images/-hero/8.png',
  '/images/-hero/9.png',

];

const HeroSection = () => {
  return (
    <div className="relative flex flex-col justify-between place-content-stretch size-full md:flex-row h-screen">
      <div className="flex items-center  justify-items-center  items-center justify-center md:w-1/2 pl-8 max-w-screen-md bg-white bg-opacity-75 ">
        <div className="text-center">
          <img src="/School badge - own.png" className="w-1/4 mx-auto"></img>
          <h1 className="text-4xl font-bold mb-1 text-slate-900">Monte Vista Primary School</h1>
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Be Proud / Wees Trots</h2>
          <p className="text-lg mb-4 mx-auto">   Situated in the heart of Monte Vista, a bustling suburb in the Northern Suburbs of Cape Town, Monte Vista Primary School has stood as an educational cornerstone since its establishment in 1963. Serving students from Grade R to Grade 7, 
          we employ state-of-the-art technology in our classrooms, adhering to the CAPS grading system prescribed by the Western Cape Education Department.</p>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">Our Menu</button>
            <button className="px-4 py-2 border border-gray-900 text-gray-900 rounded-lg">Reservations</button>
          </div>
        </div>
      </div>
     
      <div className="md:w-1/2   bg-white bg-opacity-75">
           
                {/* Decorative image grid */}
                <div className="grid grid-cols-3 grid-rows-3 gap-4 rounded-lg p-4">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden">
          <img src={src} alt={`Gallery image ${index + 1}`} className="object-cover w-auto rounded-lg h-auto" />
        </div>
      ))}
    </div>
  
               
              </div>
 </div>
   
  );
};

export default HeroSection;

