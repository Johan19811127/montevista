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
  useEffect(() => {
    const masonryInner = document.querySelector('.masonry-inner');
    const items = document.querySelectorAll('.masonry-item');

    function loopItems() {
      if (masonryInner && items.length) {
        const firstItemHeight = items[0].offsetHeight;
        masonryInner.style.transform = `translateY(-${firstItemHeight}px)`;
        setTimeout(() => {
          masonryInner.appendChild(items[0]);
          masonryInner.style.transition = 'none';
          masonryInner.style.transform = 'translateY(0)';
          setTimeout(() => {
            masonryInner.style.transition = 'transform 1s linear';
          }, 50);
        }, 1000);
      }
    }

    const interval = setInterval(loopItems, 3000);

    return () => clearInterval(interval);
  }, []);

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
          {images.map((src, index) => (
            <div key={index} className="masonry-item">
              <Image src={src} width="192" width=""alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
