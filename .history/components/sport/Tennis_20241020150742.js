import Image from 'next/image'
import React from 'react'

export default function Tennis() {
  return (
    <div className="max-w-8xl  bg-yellow-200 shadow-sm  p-2 md:p-5 flex flex-col md:flex-row text-green-600 mb-5">
        <div className="w-full md:basis-2/5">
        <Image src="/tenn.png" width="500" height="500" alt="Tennis offered by Monte Vista Primary School" className="w-full h-auto rounded-ss-3xl rounded-es-2xl rounded-ee-[100px] rounded-se-xl "></Image>
        
        
        </div>
        <div className="basis-1/1 md:basis-3/5 p-2 md:p-5 items-center content-center">
      <h2   className="text-5xl font-bold pb-4 text-center">Tennis</h2>
       <div className="w-[90%] mx-[5%] rounded-3xl bg-lime-100 p-5 mb-4" >
      <p className="font-bold text-lg mb-2 text-green-700 ">DID YOU KNOW?</p>
      <ul className="list-disc	gap-2 px-5 ">
        <li className="leading-tight text-sm text-green-700  text-justify ">Wimbledon, founded in 1877, is the oldest and most prestigious tennis tournament in the world, and its the only Grand Slam still played on grass courts, preserving the sport’s traditional roots. </li>
        <li className="leading-tight text-sm text-green-700  text-justify ">Another significant change in the sport came in 1972, when tennis balls were switched from white to yellow to improve visibility for television audiences, marking a modern shift in how the game is viewed globally.</li>
        </ul>
        </div>
        <table className=" w-full md:w-[90%] md:mx-[5%]  table-auto md:table-fixed border-collapse border border-green-400">
        <thead className="bg-green-500 text-white font-semibold">
          <tr>
            <th className="px-2 py-1 text-center md:w-[15%]">Team</th>
            <th className="px-2 py-1 text-center border border-x-white md:w-[25%]"> Practice Days &amp; Times</th>
            <th className="px-2 py-1 text-center border border-x-white md:w-[20%]">Matches</th>
            <th className="px-2 py-1 text-center md:w-[40%]">Coaches</th>
          </tr>
        </thead>
        <tbody>
          {/* Tennis */}
          <tr>
            <td  className="border border-green-400 px-4 py-1 px-2 text-center leading-tight">Gr 1 <p className="text-sm text-center">(Juniors)</p></td>
            <td rowSpan="2" className="border border-green-400 px-2 py-1 text-center"><p className="font-semibold">Mon &amp; Thurs </p>13:45 – 14:45</td>
            <td className="border border-green-400 px-2 py-1" rowSpan="3"></td>
            <td className="border border-green-400 px-2 py-1">T Cohens &amp; W Toerien</td>
          </tr>
          <tr>
          <td className="border border-green-400 px-4 py-1 px-2 leading-tight text-center">Gr 2 <p className="text-sm text-center">(Juniors)</p></td>
          
          
            <td className="border border-green-400 px-2 py-1">M Hartzenberg &amp; F Pretorius</td>
          </tr>
          <tr>
          <td className="border border-green-400 px-2 py-1 leading-tight text-center">Gr 3<p className="text-sm text-center">(Juniors)</p></td>
            <td className="border border-green-400 px-2 py-1 text-center"><p className="font-semibold">Mon &amp; Thurs </p> 14:15 – 15:15</td>
        
            <td className="border border-green-400 px-2 py-1">C Vasconcelos &amp; B Lamont</td>
          </tr>
          <tr>
          <td className="border border-green-400 px-2 py-1 leading-tight text-center">Gr 4 - 7   <p className="text-sm text-center">(Seniors)</p></td>
            <td className="border border-green-400 px-2 py-1 text-center"><p className="font-semibold">Mon &amp; Thurs </p> 14:45 – 16:00</td>
            <td className="border border-green-400 px-2 py-1 text-center"><p className="font-semibold">Wed</p> 14:45 – 17:00</td>
            <td className="border border-green-400 px-2 py-1">S Rodgers, M du Toit, L Wolmarans, F Nel, S Hamman, G Olivier &amp; R Hagen</td>
          </tr>
          </tbody>
          </table>
       </div>
        
        </div>
  )
}

