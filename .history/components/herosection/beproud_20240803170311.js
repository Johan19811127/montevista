import React from 'react'
import Image from 'next/image';

export default function Beproud() {
  return (
  <div className="container mb-3 mx-auto h-screen py-4 px-2 lg:w-[80%] lg:px-8 h-auto min-h-screen flex justify-center align-center ">

 
  
     <div className="text-center my-auto ">
     <div className="container sml:w-90 ">
  <Image src="/Proud.png" width="800" height="160" className=" self-center max-w-[60%] mx-auto mb-4" alt="Bwe Proud , Wees trots the new motto of Monte Vista primary school"></Image>
  </div>
     <h3 className="text-2xl font-bold tracking-tight text-dblue md:text-4xl">
     Welcome to
       </h3>
       <h3 className="text-3xl font-bold tracking-tight text-dblue md:text-4xl lg:text-6xl">
      Monte Vista Primary School
       </h3>
       <div className="text-justify px-5 md:px-1">
     <p className=" mt-3 lg:mt-6 text-default lg:text-lg leading-tight text-dblue   text-justify"> This simple yet powerful phrase encapsulates the essence of what we strive to instill in every learner and uphold in every endeavor within our school community.</p>
     <p className="mt-3 lg:mt-6 text-default lg:text-lg leading-tight text-dblue   text-justify">The integration of technology plays a pivotal role in shaping the modern learning landscape at Monte Vista. In every classroom, Clevertouch interactive touchscreen displays take center stage, offering more than just an interactive whiteboard. These state-of-the-art displays feature educational apps that empower teachers to enhance lessons, play engaging videos and music, and involve learners in a dynamic and interactive educational experience like never before.   
</p>
<p className="mt-6 text-default lg:text-lg leading-tight text-dblue   text-justify">In addition to academic achievements, we encourage our students to explore a diverse array of sports and cultural activities, nurturing holistic development. Furthermore, we offer aftercare services, providing essential support to working parents for the ongoing care of their children.</p>

<p className="mt-6 text-default lg:text-lg leading-tight text-dblue   text-justify">Our forward-thinking management team is committed to pioneering innovations in education, continually seeking enhanced methods to engage and inspire our learners. By integrating the latest technologies, we cultivate dynamic and pertinent learning experiences for our students.</p>
       <div className="mt-10 flex items-center justify-center gap-x-6">
        
       
       </div>
  
</div></div></div>
  


  )
}
