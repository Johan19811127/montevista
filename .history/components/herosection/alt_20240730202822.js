import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const images = [
  '/Images/-Hero/1.png', // Replace with your image URLs
  '/Images/-Hero/2.png',
  '/Images/-Hero/3.png',
  '/images/-Hero/4.png',
  '/images/-Hero/5.png',
  '/images/-Hero/6.png',
  '/images/-Hero/7.png',
  '/images/-Hero/8.png',
  '/images/-Hero/9.png',
];

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const HeroSection = () => {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);

  return (
    <div className="relative flex flex-col justify-between h-screen md:flex-row">
      <div className="flex my-auto md:w-1/2 pl-8 max-w-screen-md bg-white bg-opacity-75">
        <div className="text-center">
          {/* <img src="/School badge - own.png" className="w-1/3 mx-auto mb-6" alt="School Badge" /> */}
          <h1 className="text-5xl font-bold text-dblue leading-none">Monte Vista Primary School</h1>
        
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Be Proud / Wees Trots</h2>
          <p className="text-lg mb-4 mx-5 text-dblue fomnt-bold leading-tight mt-5">
            Situated in the heart of Monte Vista, a bustling suburb in the Northern Suburbs of Cape Town,
            Monte Vista Primary School has stood as an educational cornerstone since its establishment in 1963.
            Serving students from Grade R to Grade 7, we employ state-of-the-art technology in our classrooms,
            adhering to the CAPS grading system prescribed by the Western Cape Education Department.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 bg-white bg-opacity-75 px-5 py-0 ">
        {/* Decorative image grid */}
        <div className="grid grid-cols-3 grid-rows-2 md:grid-rows-3 gap-4 rounded-3xl p-4">
          {shuffledImages.map((src, index) => (
            <div key={index} className="overflow-hidden">
              <img src={src} alt={`Gallery image ${index + 1}`} className="object-cover w-full h-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


