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
    <div className="relative flex flex-col justify-between h-screen md:flex-row backhero bg-right-bottom">
      <div className="flex my-auto mx-auto md:w-1/2 pl-8 max-w-screen-md ">
        <div className="text-center mx-auto">
          <Image src="/School badge - own.png" width="250" height="500" className="w-1/3 mx-auto mb-8" alt="School Badge" />
          <h1 className="text-5xl font-bold text-dblue leading-none">Monte Vista Primary School</h1>
        
          <Image src="/Be Proud Wees Trots.png" width="300" height="60" alt="Be proud / Wees Trots
       </h3>}></Image>
          <div className="container bg-white bg-opacity-25 text-justify">
          <p className="text-xl mb-4 mx-5 text-dblue font-medium leading-tight mt-8">
            Situated in the heart of Monte Vista, a bustling suburb in the Northern Suburbs of Cape Town,
            Monte Vista Primary School has stood as an educational cornerstone since its establishment in 1963.
            Serving students from Grade R to Grade 7, we employ state-of-the-art technology in our classrooms,
            adhering to the CAPS grading system prescribed by the Western Cape Education Department.
          </p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2   p-2 -my-7  ">
        {/* Decorative image grid */}
        {/* <div className="grid grid-cols-3 grid-rows-2 md:grid-rows-3 gap-5 rounded-3xl p-4">
          {shuffledImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg drop-shadow-lg">
              <img src={src} alt={`Gallery image ${index + 1}`} className="object-cover w-full h-full " />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;

