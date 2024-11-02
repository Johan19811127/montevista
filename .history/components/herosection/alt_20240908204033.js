import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const HeroSection = () => {
  const [shuffledImages, setShuffledImages] = useState([]);

 
  return (
    <div className="relative flex flex-col justify-start md:justify-between h-screen md:flex-row bg-no-repeat bg-cover backhero bg-right-bottom">
      <div className="flex md:my-auto mx-auto md:w-1/2 md:ml-8 ">
        <div className="text-center mx-auto">
          <Image src="/School badge - own.png" width="250" height="500" className="w-1/5  mt-4 md:w-1/3 mx-auto mb-4" alt="School Badge" />
          <h1 className="text-3xl font-bold text leading-none md:text-5xl">Monte Vista Primary School</h1>
        
          <Image src="/Proud.png" className="mx-auto max-w-[80%]" width="600" height="120" alt="Be proud / Wees Trots"></Image>
   
          <div className="container bg-white bg-opacity-25 text-justify">
          <p className="text-md md:text-lg font-medium  mb-4 mx-3 md:mx-12 text-dblue  leading-tight mt-8">
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


