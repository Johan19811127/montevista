import Image from 'next/image'
import React from 'react'

export default function Athletics() {
  return (
    <div className="max-w-8xl rounded-lg bg-white shadow-sm  p-2 md:p-5 flex flex-col md:flex-row text-indigo-600 mb-5">
        <div className="w-full md:basis-2/5">
        <Image src="/athletics.png" width="500" height="500" alt="Tennis offered by Monte Vista Primary School" className="w-full h-auto rounded-ss-3xl rounded-es-2xl rounded-ee-[100px] rounded-se-xl "></Image>
        
        
        </div>
        <div className="basis-1/1 md:basis-3/5 p-2 md:p-5 items-center content-center">
      <h2   className="text-5xl font-bold pb-4 text-center">Athletics</h2>
       <div className="w-[90%] mx-[5%] rounded-3xl bg-indigo-100 p-5 mb-4" >
      <p className="font-bold text-lg mb-2 text-indigo-700 ">DID YOU KNOW?</p>
      <ul className="list-disc	gap-2 px-5 ">
        <li className="leading-tight text-sm text-indigo-700  text-justify ">Athletics, or track and field, has origins in ancient Greece. The first recorded Olympic Games in 776 BC featured a single athletic event: a footrace known as the stadion, which was about 192 meters long. </li>
        <li className="leading-tight text-sm text-indigo-700  text-justify ">Usain Bolt holds the world record for the fastest 100 meters, set in 2009, with a time of 9.58 seconds. This makes him the fastest human in recorded history.</li>
        </ul>
        </div>
        <table className=" w-full md:w-[90%] md:mx-[5%]  table-auto md:table-fixed border-collapse border border-indigo-400">
        <thead className="bg-indigo-500 text-white font-semibold">
          <tr>
            <th className="px-2 py-1 text-center md:w-[20%]">Team</th>
            <th className="px-2 py-1 text-center border border-x-white md:w-[30%]"> Practice Days &amp; Times</th>

            <th className="px-2 py-1 text-center md:w-[50%]">Coaches</th>
          </tr>
        </thead>
        <tbody>
          {/* Tennis */}
          <tr>
            <td  className="border border-indigo-400 px-4 py-1 px-2 text-center leading-tight">0/7 <p className="text-sm text-center">(Juniors)</p></td>
            <td rowSpan="2" className="border border-indigo-400 px-2 py-1 text-center"><p className="font-semibold">Wed &amp; Thurs </p>13:45 – 14:45</td>
        
            <td className="border border-indigo-400 px-2 py-1">S Miller &amp; J Anderson</td>
          </tr>
          <tr>
          <td className="border border-indigo-400 px-4 py-1 px-2 leading-tight text-center">0/8<p className="text-sm text-center">(Juniors)</p></td>
          
          
            <td className="border border-indigo-400 px-2 py-1">A Karsten, M Nombewu &amp; C
            Claassens</td>
          </tr>
          <tr>
          <td className="border border-indigo-400 px-2 py-1 leading-tight text-center">0/9<p className="text-sm text-center">(Juniors)</p></td>
            <td className="border border-indigo-400 px-2 py-1 text-center"><p className="font-semibold">Wed &amp; Thurs </p> 14:15 – 15:15</td>
        
            <td className="border border-indigo-400 px-2 py-1">C Koeries &amp; C Hafit</td>
          </tr>
          <tr>
          <td className="border border-indigo-400 px-2 py-1 leading-tight text-center">Gr 4 - 7   <p className="text-sm text-center">(Seniors)</p></td>
            <td className="border border-indigo-400 px-2 py-1 text-center"><p className="font-semibold">Mon, Wed &amp; Thurs </p> 14:45 – 15:45</td>
      
            <td className="border border-indigo-400 px-2 py-1">S Rodgers, M du Toit, L Wolmarans, F Nel, S Hamman, G Olivier &amp; R Hagen</td>
          </tr>
          </tbody>
          </table>
       </div>
        
        </div>
  )
}

