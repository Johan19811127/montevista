import React from 'react'
import Image from 'next/image';

export default function Intro() {
  return (
    <>
    <div className="flex flex-col md:flex-row  min-h-[90vh] m-auto">
 
 
  
     <div className="  text-center my-auto py-4 px-5">
    <Image src="/Badge.png" width="200" height="250" alt="Monte Vista Primary badge" className="mx-auto w-[20%]"></Image>
     <h3 className="text-2xl font-bold tracking-tight text-gray-800 md:text-2xl lg:text-4xl">
     Welcome to
       </h3>
       <h3 className="text-3xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-5xl ">
      Monte Vista Primary School
       </h3>
       

  
       <div className="text-justify w-[96%] mx-auto">
       {/* <Image src="/intro.png" width="400" height="800" alt="Monte Vista primary has been around since 1963" hidden className=" md:block relative float-right  intro  w-[200px] max-w-[55%] md:max-w-[250px] lg:max-w-[300px] w-full bottom-0  ms-auto"></Image> */}
     <p className=" mt-3 lg:mt-6 text-default lg:text-lg leading-tight text-gray-700   text-justify">As parents embark on the exciting journey of choosing the right educational environment for their children, Monte Vista Primary School stands out as a beacon of excellence with a commitment to providing a nurturing and innovative learning experience. At the heart of this exceptional institution is the deliberate decision to keep classrooms smaller, ensuring individualized attention for each child. With an average class size ranging from 25 to 30 learners, Monte Vista Primary School creates an environment where every student can thrive.</p>
    
     <p className="mt-3 lg:mt-6 text-default lg:text-lg leading-tight text-gray-700   text-justify">The integration of technology plays a pivotal role in shaping the modern learning landscape at Monte Vista. In every classroom, Clevertouch interactive touchscreen displays take center stage, offering more than just an interactive whiteboard. These state-of-the-art displays feature educational apps that empower teachers to enhance lessons, play engaging videos and music, and involve learners in a dynamic and interactive educational experience like never before.   
</p>

<p className="mt-6 leading-tight text-gray-700   text-justify">In addition to academic achievements, we encourage our students to explore a diverse array of sports and cultural activities, nurturing holistic development. Furthermore, we offer aftercare services, providing essential support to working parents for the ongoing care of their children.</p>

<p className="mt-6  leading-tight text-gray-700 text-left">Our forward-thinking management team is committed to pioneering innovations in education, continually seeking enhanced methods to engage and inspire our learners. By integrating the latest technologies, we cultivate dynamic and pertinent learning experiences for our students.</p>
       <div className="mt-10 flex items-center justify-center gap-x-6">
        
       
       </div>
  
</div></div></div>
  
<div className="w-[70%] mx-auto border border-top-gray-400 my-5 "></div>
</>
  )
}
