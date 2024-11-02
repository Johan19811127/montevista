import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const HeroSection = () => {
  const [shuffledImages, setShuffledImages] = useState([]);

 
  return (
    <div className="flex flex-col justify-content-center align-items-center content-center items-center min-h-[90vh] ">

        <div className="text-center  my-auto mx-auto">
        <Image src="/Hero.png" hidden width="1600" height="800" alt="Welcome to Monte Vista Primary School" className=" md:block rounded-xl my-14 md:my-8 lg:my-5"></Image>
        <Image src="/cellhero.png" width="400" height="400" alt="Welcome to Monte Vista Primary School" className="md:hidden w-full  rounded-xl my-14 my-5"></Image>
          <h1 className="text-3xl font-bold text-gray-800 leading-none  md:mt-8 md:text-5xl">Monte Vista Primary School</h1>
      
          <div className="container  w-[90%] md:w-[80%] lg:w-[70%]  mx-auto text-center">
          <p className="text-md  mb-4 mx-3 text-gray-700 leading-tight mt-8">
            Situated in the heart of Monte Vista, a bustling suburb in the Northern Suburbs of Cape Town, Monte Vista Primary School has stood as an educational cornerstone since its establishment in 1963. Serving students from Grade R to Grade 7, we employ state-of-the-art technology in our classrooms, adhering to the CAPS grading system prescribed by the Western Cape Education Department.
          </p>
          </div>
 
      </div>
<div className="w-[70%] mx-auto border border-top-gray-400 my-5 "></div>


   </div>   
)
}

export default HeroSection;


