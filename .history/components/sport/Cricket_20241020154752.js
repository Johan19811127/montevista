import Image from 'next/image'
import React from 'react'

export default function Cricket() {
  return (
    <div className="max-w-8xl rounded-xl bg-blue-300 shadow-sm  p-2 md:p-5 flex flex-col-reverse md:flex-row text-blue-500 mb-5">
    
        <div className="basis-1/1 md:basis-3/5 p-2 md:p-5 ">
      <h2   className="text-4xl font-bold pb-4 text-center">Cricket</h2>
       <div className="w-[90%] mx-[5%] rounded-3xl bg-blue-100 p-5 mb-4" >
      <p className="font-bold text-lg mb-2 text-blue-500 ">DID YOU KNOW?</p>
      <ul className="list-disc	gap-2 px-5 ">
        <li className="leading-tight text-sm text-blue-500  text-justify ">The Cricket World Cup trophy contains a golden globe held by three silver columns, representing the three main aspects of cricket: batting, bowling, and fielding. </li>
        <li className="leading-tight text-sm text-blue-500  text-justify ">In a single over, the highest number of runs scored in first-class cricket is 77. This unusual feat happened when a bowler bowled several no-balls and wides, and each ball went for runs!</li>
        </ul>
        </div>
        <table className=" w-full md:w-[90%] md:mx-[5%]  table-auto md:table-fixed border-collapse">
        <thead className="bg-blue-500 text-white font-semibold">
          <tr>
            <th className="px-2 py-1 text-center  border border-x-white md:w-[15%]">Team</th>
            <th className="px-2 py-1 text-center border border-x-white md:w-[25%]"> Practice Days &amp; Times</th>
            <th className="px-2 py-1 text-center border border-x-white md:w-[20%]">Matches</th>
            <th className="px-2 py-1 text-center  border border-white md:w-[40%]">Coaches</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {/* Tennis */}
          <tr>
            <td  className="border border-blue-500 px-4 py-1 px-2 text-center leading-tight">0/7</td>
            <td rowSpan="2" className="border border-blue-500 px-2 py-1 text-center"><p className="font-semibold">Wed &amp;
            Thurs </p>13:45 – 14:45</td>
            <td rowSpan="2" className="border border-blue-500 px-2 py-1 text-center"><p className="font-semibold">Thurs</p> 13:45-14:45</td>
            <td className="border border-blue-500 px-2 py-1">D Botha &amp; N Kennedy</td>
          </tr>
          <tr>
          <td className="border border-blue-500 px-2 py-1 px-1 leading-tight text-center">0/8</td>
          
          
            <td className="border border-blue-500 px-2 py-1">C van Tonder &amp; S Palvie Swart</td>
          </tr>
          <tr>
          <td className="border border-blue-500 px-2 py-1 leading-tight text-center">0/9</td>
          <td className="border border-blue-500 px-2 py-1 text-center"><p className="font-semibold">Wed &amp;
           Thurs </p>13:45 – 14:45</td>
            <td className="border border-blue-500 px-2 py-1 text-center"><p className="font-semibold">Thurs</p> 14:15-15:15</td>
          
        
            <td className="border border-blue-500 px-2 py-1">Y Shamrock &amp; M Carter</td>
          </tr>
          <tr>
            <td  className="border border-blue-500 px-4 py-1 px-2 text-center leading-tight">0/10</td>
            <td rowSpan="2" className="border border-blue-500 px-2 py-1 text-center"><p className="font-semibold">Mon &amp;
            Wed </p>14:45- 15:45</td>
            <td  className="border border-blue-500 px-2 py-1 text-center"><p className="font-semibold">Mon</p> 14:45 – 17:30</td>
            <td className="border border-blue-500 px-2 py-1">L Jacobs &amp; Y Nxiwa</td>
          </tr>
          <tr>
          <td className="border border-blue-500 px-2 py-1 px-1 leading-tight text-center">0/11</td>
          
          <td  className="border border-blue-500 px-2 py-1 text-center"><p className="font-semibold">Wed</p> 14:45 – 17:30</td>
            <td className="border border-blue-500 px-2 py-1">D Abrahams &amp; T Swart</td>
          </tr>
          <tr>
            <td  className="border border-blue-500 px-4 py-1 px-2 text-center leading-tight">0/12</td>
            <td  className="border border-blue-500 px-2 py-1 text-center"><p className="font-semibold">Tues &amp;
           Thurs </p>14:45- 15:45</td>
            <td  className="border border-blue-500 px-2 py-1 text-center"><p className="font-semibold">Tues</p> 14:45 – 17:30</td>
            <td className="border border-blue-500 px-2 py-1">G Lomas</td>
          </tr>
          <tr>
          <td className="border border-blue-500 px-2 py-1 px-1 leading-tight text-center">0/13</td>
          <td className="border border-blue-500 px-2 py-1 text-center"><p className="font-semibold">Mon &amp;
          Thurs </p>14:45- 15:45</td>
          <td  className="border border-blue-500 px-2 py-1 text-center"><p className="font-semibold">Thurs</p> 14:45 – 17:30</td>
            <td className="border border-blue-500 px-2 py-1">H Laubscher</td>
          </tr>
         
          </tbody>
          </table>
       </div>
       <div className="w-full md:basis-2/5 content-center items-center">
        <Image src="/crick.png" width="500" height="500" alt="Tennis offered by Monte Vista Primary School" className="w-full h-auto rounded-es-3xl rounded-se-2xl rounded-ss-[100px] rounded-ee-xl "></Image>
        
        
        </div>
        </div>
  )
}

