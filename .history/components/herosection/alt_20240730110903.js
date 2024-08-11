import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const images = [
  '/Images/-Hero/1.png', // Ensure these paths match your actual file paths
  '/Images/-Hero/2.png',
  '/Images/-Hero/3.png',
  '/Images/-Hero/4.png',
  '/Images/-Hero/5.png',
  '/Images/-Hero/6.png',
  '/Images/-Hero/7.png',
  '/Images/-Hero/8.png',
  '/Images/-Hero/9.png',
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
  const [flipIndex, setFlipIndex] = useState(null);

  useEffect(() => {
    setShuffledImages(shuffleArray(images));

    const interval = setInterval(() => {
      const newImages = shuffleArray(images);
      const randomIndex = Math.floor(Math.random() * images.length);
      setFlipIndex(randomIndex);
      setTimeout(() => {
        setShuffledImages(newImages);
        setFlipIndex(null);
      }, 1000); // The duration of the flip animation
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col justify-between h-screen md:flex-row">
      <div className="flex my-auto md:w-1/2 pl-8 max-w-screen-md bg-white bg-opacity-75">
        <div className="text-center">
          <Image src="/School badge - own.png" width={200} height={200} alt="School Badge" className="mx-auto mb-6" />
          <h1 className="text-8xl font-bold text-slate-900 leading-none">Monte Vista</h1>
          <h2 className="text-6xl font-bold mb-1 text-slate-900">Primary School</h2>
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Be Proud / Wees Trots</h2>
          <p className="text-base mb-4 mx-5 leading-tight">
            Situated in the heart of Monte Vista, a bustling suburb in the Northern Suburbs of Cape Town,
            Monte Vista Primary School has stood as an educational cornerstone since its establishment in 1963.
            Serving students from Grade R to Grade 7, we employ state-of-the-art technology in our classrooms,
            adhering to the CAPS grading system prescribed by the Western Cape Education Department.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 bg-white bg-opacity-75">
        {/* Decorative image grid */}
        <div className="grid grid-cols-3 grid-rows-2 md:grid-rows-3 gap-4 rounded-lg p-4">
          {shuffledImages.map((src, index) => (
            <div key={index} className={`flip-card ${flipIndex === index ? 'flip-animation' : ''}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image src={src} layout="fill" objectFit="cover" alt={`Gallery image ${index + 1}`} className="rounded-lg" />
                </div>
                <div className="flip-card-back">
                  <Image src={src} layout="fill" objectFit="cover" alt={`Gallery image ${index + 1}`} className="rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
;


