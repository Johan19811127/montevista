import Image from 'next/image'
import React from 'react'


export default function Uniform() {
  return (
    <div className="w-full h-fit bg-gray-200">
    <div className="p-8 max-w-5xl mx-auto bg-white">
        <div className="flex flex-row">

<div className="basis-1/2 md:basis-1/3 "><Image src="/Uniform.png" width="280" height="280" alt="Monte Vista Primary School Badge" className="w-[90%] ml-[5%] lg:w-[70%] lg:ml-[15%] "></Image></div>
<div className="basis-1/2 md:basis-2/3  px-4">
      <header className="text-center mb-8">
        <h1 className="text-xl md:text-2xl font-bold">Monte Vista Primary School</h1>
        <p className="text-xl md:text-2xl font-semibold">Prescribed Uniform</p>
        <address className="mt-2">
          Huisinglaan / Huising Avenue, Monte Vista, 7460 <br />
          Tel: 021 558 4637 | Fax: 021 558 715<br />
          Email: <a href="mailto:montevistaprimaryschool@gmail.com" className="text-blue-500">montevistaprimaryschool@gmail.com</a>
        </address>
        <a
      href="/admission_policy.pdf" // Path to the file in the public directory
      download="Admission_Policy.pdf" // The name of the file that will be downloaded
      className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg  my-3 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Download a copy of the Prescribed uniform
    </a>
      </header>
      </div></div>
      <hr className="divide-solid mt-0 mb-9 divide-slate-950 opacity-80"></hr>
      <h2 className="text-3xl font-bold text-center my-4">Prescribed Uniform for Learners in Grade 1 to 7</h2>
<p className="text-default mx-10 text-justify leading-tight ">School uniform plays an important role in a learner’s school career. Besides creating basic uniformity and equality in the school, it also helps the learner to develop a sense of pride in his/her school. It is thus necessary for each learner to be correctly and neatly attired every school day.</p>
    
<div className="flex flex-row">
    <div className="md:basis-1/2 bg-blue-400 py-0 px-3">
    <div className="flex flex-row">
    <div className="basis-1/2">
    <Image src="/summerboy.png" width="200" height="350" alt="boy uniform in summer" className="w-100 h-auto"></Image>
    
    
    
    </div>
    <div className="basis-1/2 ">
    
    <Image src="/summer.png" width="200" height="150" alt="Summer Uniform for Boys" className="w-[50%] h-auto  ml-[25%] mt-2"></Image>
   <h3 className="text-5xl text-center font-black text-yellow-300">SUMMER</h3>
    <p className="text-xl font-bold text-center leading-tight mb-0 text-yellow-300">UNIFORM FOR BOYS<br></br>(1st and 4th term)</p>
   <ul className="list-disc my-2 ml-4">

   <li className="text-default font-md text-center text-white"> black school shoes</li> 
   <li className="text-default  font-md text-center text-white">long grey school socks</li>
   <li className="text-default  font-md text-center text-white">grey pants (long or short) </li>
   <li className="text-default font-md text-center text-white">white short-sleeved open-neck shirt.</li>




   </ul>
    
    
    
    
   </div>
   </div>
    </div>
  
    <div className="md:basis-1/2 bg-yellow-300 py-0 px-3">
    <div className="flex flex-row">
    <div className="basis-1/2">
    <Image src="/winter.png" width="200" height="150" alt="Summer Uniform for Boys" className="w-[50%] h-auto  ml-[25%] mt-2"></Image>
    <h3 className="text-5xl text-center font-black text-blue-700">WINTER</h3>
    <p className="text-xl font-bold text-center leading-tight mb-0 text-blue-700">UNIFORM FOR BOYS<br></br>(2nd and 3rd term)</p>
   <ul className="list-disc my-2 ml-4">

   <li className="text-default font-md text-center text-blue-700"> black school shoes</li> 
   <li className="text-default  font-md text-center text-blue-700">long grey school socks</li>
   <li className="text-default  font-md text-center text-blue-700">grey pants (long or short) </li>
   <li className="text-default font-md text-center text-blue-700">white short-sleeved open-neck shirt.</li>

   </ul>
    </div>
    <div className="basis-1/2"></div>
    </div>
  
   </div>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     </div>
     
      </div>
      </div>
  )
}
