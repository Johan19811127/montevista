// pages/index.js
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function NewHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addListener(handleResize);

    return () => mediaQuery.removeListener(handleResize);
  }, []);


  return (
 <>
    
        {/* Section 1 */}
       
        <div className="container my-auto mx-auto min-h-screen py-8 px-2  lg:mt-2 lg:px-8 h-auto flex flex-col justify-center align-center content-center items-center ">
        <h1 className="text-xl md:text-3xl leading-tight text-slate-800 font-bold my-4 font-bold text-center">Monte Vista Primary School</h1>
       
      
     
    
     
        <div className="container mx-auto lg:w-[60%] px-2">
          <p className=" leading-tight p-3 text-center md:text-justify mb-3">
          Welcome to Monte Vista Primary school! We are a community of learners, explorers, and problem-solvers who believe that every child has the potential to be a hero. Our mission is to empower our students to discover their unique strengths, embrace their passions, and develop the skills they need to make a positive impact in the world. Whether your child is just starting their educational journey or is already a seasoned student, we are committed to providing them with a safe, inclusive, and engaging learning environment where they can thrive. Join us on this exciting adventure and let us create heroes together!
          </p>
          </div>
          <Image  src={isMobile ? '/cellhero.png' : '/Hero.png'}  width="1000" height="600" alt="Monte Vista Primary School" className=" w-full max-w-[1200px] mx-auto my-3 -mt-5"></Image>
      </div>

      

   
    </>
  )
}

