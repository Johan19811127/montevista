import Image from 'next/image'
import React from 'react'

export default function Netbal() {
  return (
    <div className="max-w-8xl rounded-xl bg-white shadow-sm  p-2 md:p-5 flex flex-col-reverse md:flex-row text-violet-600 mb-5">
    
        <div className="basis-1/1 md:basis-3/5 p-2 md:p-5 ">
      <h2   className="text-5xl font-bold pb-4 text-center">Netbal</h2>
       <div className="w-[90%] mx-[5%] rounded-3xl bg-violet-100 p-5 mb-4" >
      <p className="font-bold text-lg mb-2 text-violet-600 ">DID YOU KNOW?</p>
      <ul className="list-disc	gap-2 px-5 ">
        <li className="leading-tight text-sm text-violet-600  text-justify ">Netball was invented in 1891 by Clara Baer, a physical education teacher, as a female-friendly alternative to basketball. It originated from a misinterpretation of basketball rules and evolved into its own sport. </li>
        <li className="leading-tight text-sm text-violet-600  text-justify ">The longest netball game ever played lasted over 72 hours! It was organized in the UK in 2015 to raise money for charity.</li>
        </ul>
        </div>
        <table className=" w-full md:w-[90%] md:mx-[5%]  table-auto md:table-fixed border-collapse border border-violet-400">
        <thead className="bg-violet-500 text-white font-semibold">
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
            <td  className="border border-violet-400 px-4 py-1 px-2 text-center leading-tight">0/7</td>
            <td rowSpan="2" className="border border-violet-400 px-2 py-1 text-center"><p className="font-semibold">Mon &amp;
            Wed </p>13:45 – 14:45</td>
            <td rowSpan="2" className="border border-violet-400 px-2 py-1 text-center"><p className="font-semibold">Wed</p> 13:45-14:45</td>
            <td className="border border-violet-400 px-2 py-1">G. Olivier , W. Toerien &amp; C.
            Hafit</td>
          </tr>
          <tr>
          <td className="border border-violet-400 px-2 py-1 px-1 leading-tight text-center">0/8</td>
          
          
            <td className="border border-violet-400 px-2 py-1">M. Hartzenberg &amp; S. Palvie
            Swart</td>
          </tr>
          <tr>
          <td className="border border-violet-400 px-2 py-1 leading-tight text-center">0/9</td>
          <td className="border border-violet-400 px-2 py-1 text-center"><p className="font-semibold">Mon &amp;
           Thurs </p>13:45 – 14:45</td>
            <td className="border border-violet-400 px-2 py-1 text-center"><p className="font-semibold">Thurs</p> 14:15-15:15</td>
          
        
            <td className="border border-violet-400 px-2 py-1">Y Shamrock &amp; M Carter</td>
          </tr>
          <tr>
            <td  className="border border-violet-400 px-4 py-1 px-2 text-center leading-tight">0/10</td>
            <td rowSpan="2" className="border border-violet-400 px-2 py-1 text-center"><p className="font-semibold">Mon &amp;
            Wed </p>14:45- 15:45</td>
            <td  className="border border-violet-400 px-2 py-1 text-center"><p className="font-semibold">Mon</p> 14:45 – 17:30</td>
            <td className="border border-violet-400 px-2 py-1">L Jacobs &amp; Y Nxiwa</td>
          </tr>
          <tr>
          <td className="border border-violet-400 px-2 py-1 px-1 leading-tight text-center">0/11</td>
          
          <td  className="border border-violet-400 px-2 py-1 text-center"><p className="font-semibold">Wed</p> 14:45 – 17:30</td>
            <td className="border border-violet-400 px-2 py-1">D Abrahams &amp; T Swart</td>
          </tr>
          <tr>
            <td  className="border border-violet-400 px-4 py-1 px-2 text-center leading-tight">0/12</td>
            <td  className="border border-violet-400 px-2 py-1 text-center"><p className="font-semibold">Tues &amp;
           Thurs </p>14:45- 15:45</td>
            <td  className="border border-violet-400 px-2 py-1 text-center"><p className="font-semibold">Tues</p> 14:45 – 17:30</td>
            <td className="border border-violet-400 px-2 py-1">G Lomas</td>
          </tr>
          <tr>
          <td className="border border-violet-400 px-2 py-1 px-1 leading-tight text-center">0/13</td>
          <td className="border border-violet-400 px-2 py-1 text-center"><p className="font-semibold">Mon &amp;
          Thurs </p>14:45- 15:45</td>
          <td  className="border border-violet-400 px-2 py-1 text-center"><p className="font-semibold">Thurs</p> 14:45 – 17:30</td>
            <td className="border border-violet-400 px-2 py-1">H Laubscher</td>
          </tr>
         
          </tbody>
          </table>
       </div>
       <div className="w-full md:basis-2/5 content-center items-center">
        <Image src="/netbal.png" width="500" height="500" alt="Tennis offered by Monte Vista Primary School" className="w-full h-auto rounded-es-3xl rounded-se-2xl rounded-ss-[100px] rounded-ee-xl "></Image>
        
        
        </div>
        </div>
  )
}

