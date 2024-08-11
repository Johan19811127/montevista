// components/HeroSection.js
import Image from 'next/image';
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
          <h1 className="text-4xl font-bold mb-4">Experience Fine Dining At Its Best</h1>
          <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">Our Menu</button>
            <button className="px-4 py-2 border border-gray-900 text-gray-900 rounded-lg">Reservations</button>
          </div>
        </div>
      </div>
     
      <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-96 w-66 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="/heroboy.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-96 w-66 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/herogirl.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-96 w-66  overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/heroboy2.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-96 w-66 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/herogirl3.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-96 w-66 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/heroboy3.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-96 w-66 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/herogirl4.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-96 w-66 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/heroboy4.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  </div></div>
   
  );
};

export default HeroSection;

