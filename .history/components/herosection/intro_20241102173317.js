import React from 'react'
import Image from 'next/image';

export default function Intro() {
  return (
    <>
         <section >
      {/* Section 2: About */}
      <div className="container my-auto mx-auto w-[80%] h-auto min-h-screen py-6 px-2  gap-4 lg:px-8 h-auto min-h-screen flex flex-col  md:flex-row justify-center align-center content-center items-center ">
   
      <div className="w-full md:basis-1/3 align-items-center h-full flex flex-col justify-items-center">
      <Image
            src="/badge.png"
            alt="Monte Vista Primary School"
            width={500}
            height={600}
            className=" mx-auto w-[60%] text-center max-w-[40vw]"
          />
      </div>
      <div className="w-full md:basis-2/3 align-items-center h-full flex px-3 flex-col justify-items-center  text-clip  sm:line-clamp-10 sm:overflow-hidden md:line-clamp-none md:overflow-visible">
          <h2 className=" text-xl md:text-3xl font-semibold text-slate-700 text-center">What Makes Us Different?</h2>
          <p className="mt-3 leading-tight p-3  text-md text-justify">As parents embark on the exciting journey of choosing the right educational environment for their children, Monte Vista Primary School stands out as a beacon of excellence with a commitment to providing a nurturing and innovative learning experience. At the heart of this exceptional institution is the deliberate decision to keep classrooms smaller, ensuring individualized attention for each child. With an average class size ranging from 25 to 30 learners, Monte Vista Primary School creates an environment where every student can thrive.</p>
    
          <p className="mt-3 leading-tight p-3 text-md  text-justify">The integration of technology plays a pivotal role in shaping the modern learning landscape at Monte Vista. In every classroom, Clevertouch interactive touchscreen displays take center stage, offering more than just an interactive whiteboard. These state-of-the-art displays feature educational apps that empower teachers to enhance lessons, play engaging videos and music, and involve learners in a dynamic and interactive educational experience like never before.   
</p>

<p className="mt-3 leading-tight p-3 text-md text-justify">In addition to academic achievements, we encourage our students to explore a diverse array of sports and cultural activities, nurturing holistic development. Furthermore, we offer aftercare services, providing essential support to working parents for the ongoing care of their children.</p>

<p className="mt-3 leading-tight p-3 text-md  text-justify">Our forward-thinking management team is committed to pioneering innovations in education, continually seeking enhanced methods to engage and inspire our learners. By integrating the latest technologies, we cultivate dynamic and pertinent learning experiences for our students.</p>
        </div>
     
</div>
</section>
</>
  )
}
