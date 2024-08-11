import React from 'react'
import Image from 'next/image'

export default function Shortcuts() {
  return (
    <div class="grid grid-cols-2 md:grid-col-3  lg:grid-cols-4 justify-items-center align-content-center gap-4 m-h-screen md:container mx ">
<div className="card flex flex-col p-4 rounded-xl shadow-xl h-100 w-80">

    <Image src="/Admissions.png" width="120" height="120" className="mx-auto mb-4" alt="Admissions"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-4 text-center">Admissions</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-5">All the information parents would need if they wish to enroll their child at Monte Vista Primary School</p>
</div>

    </div>
  )
}
