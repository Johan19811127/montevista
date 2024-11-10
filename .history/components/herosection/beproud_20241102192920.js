import React from 'react'
import Image from 'next/image';

export default function Beproud() {
  return (
  <div className="container my-auto mx-auto h-auto min-h-screen py-6 px-2  lg:px-8 h-auto min-h-screen flex flex-col  md:flex-row justify-center align-center content-center items-center ">
   <div className="basis-1/2">
   
   <Image src="/throthy.png" width="500" height="500" alt="Be Proud / Wees Trots" className=" self-center max-w-[70vw] mx-auto mb-4"></Image>
   
   
   
   </div>
 
   <div className="basis-1/2">
     <div className="text-start my-auto ">
   
 
<h2 className="text-4xl font-bold  text-start text-dblue">Be Proud / Wees Trots</h2>  

 
       <div className="text-justify font-medium px-5 md:px-1">
      
     <p className=" mt-3 lg:mt-6 text-default lg:text-md leading-tight text-dblue   text-justify"> This simple yet powerful phrase encapsulates the essence of what we strive to instill in every learner and uphold in every endeavor within our school community.</p>
     <p className="mt-3 lg:mt-6 text-default lg:text-md leading-tight text-dblue   text-justify">To &quot; Be Proud &quot; is more than just a slogan, it is a call to action, a commitment to excellence, and a reminder of the values that define us. It challenges each of us to take pride in our achievements, both big and small, and to approach every challenge with determination and confidence.   
</p>
<p className="mt-6 text-default lg:text-md leading-tight text-dblue   text-justify">This motto reflects our belief that pride is not just about personal accomplishments but also about collective achievements. It encourages us to celebrate our diversity, honor our traditions, and support one another as we grow and learn together.</p>

<p className="mt-6 text-default lg:text-md leading-tight text-dblue   text-justify">As we embark on this year with &quot; Be Proud &quot; guiding us, let us embrace every opportunity to showcase the spirit of Monte Vista Primary School. Let us inspire one another, uplift each other, and continue to build a community where pride in ourselves and in our school shines brightly.</p>
    </div>
  
</div></div></div>
  


  )
}
