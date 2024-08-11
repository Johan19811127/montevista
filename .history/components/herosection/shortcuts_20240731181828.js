import React from 'react'
import Image from 'next/image'

export default function Shortcuts() {
  return (
    <div className="container m-auto md:w-[90%] gap-3 columns-2 md:columns-3 lg:columns-4 min-h-screen py-5">
<div className="card flex p-4 rounded-xl shadow-xl h-100 w-80">

    <Image src="/Admissions.png" width="120" height="120" className="mx-auto mb-4" alt="Admissions"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-4 text-center">Admissions</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-5">All the information parents would need if they wish to enroll their child at Monte Vista Primary School</p>
</div>

    </div>
  )
}
