import React from 'react'

export default function Intro() {
  return (
  <div className=" flexholder">
  
 
  <div className="flexitems self-center">
  <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
     
     <div className="text-center">
       <h1 className="text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl">
         Monte Vista 
       </h1>
       <h3 className="text-2xl font-bold tracking-tight text-yellow-500 sm:text-3xl">
       Primary School
       </h3>
       <p className="mt-6 text-base leading-tight text-slate-800 text-center">
       Situated in the heart of Monte Vista, a bustling suburb in the Northern Suburbs of Cape Town, Monte Vista Primary School has stood as an educational cornerstone since its establishment in 1963. Serving students from Grade R to Grade 7, 
       we employ state-of-the-art technology in our classrooms, adhering to the CAPS grading system prescribed by the Western Cape Education Department.
       </p>
       <div className="mt-10 flex items-center justify-center gap-x-6">
         <a
           href="#"
           className="rounded-md bg-yellow-500 px-5 py-2.5 text-lg font-semibold text-slate-950 shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         >
           Get started
         </a>
       
       </div>
     </div>
   </div>
   </div>
   
  </div>
  )
}
