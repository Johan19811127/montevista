import React from 'react'
import Image from 'next/image'

export default function Shortcuts() {
  return (
    <div className="container m-auto md:w-[90%] grid-cols-4 grid-rows-3 gap-3">
<div className="flex flex-col p-4 rounded-xl shadow-xl w-80">

    <Image src="/Admissions.png" width="120" height="120" className="mx-auto mb-4" alt="Admissions"></Image>
    <h2 className="text-2xl text-dblue mx-auto font-bold">Admissions</h2>
    <p className="text-medium text-md"></P>
</div>

<div className="flex flex-col p-4 rounded-xl shadow-xl w-80">

    <Image src="/Admissions.png" width="120" height="120" className="mx-auto mb-4" alt="Admissions"></Image>
    <h2 className="text-2xl text-dblue mx-auto font-bold">Admissions</h2>
</div>
<div className="flex flex-col p-4 rounded-xl shadow-xl w-80">

    <Image src="/Admissions.png" width="120" height="120" className="mx-auto mb-4" alt="Admissions"></Image>
    <h2 className="text-2xl text-dblue mx-auto font-bold">Admissions</h2>
</div>
<div className="flex flex-col p-4 rounded-xl shadow-xl w-80">

    <Image src="/Admissions.png" width="120" height="120" className="mx-auto mb-4" alt="Admissions"></Image>
    <h2 className="text-2xl text-dblue mx-auto font-bold">Admissions</h2>
</div>
<div className="flex flex-col p-4 rounded-xl shadow-xl w-80">

    <Image src="/Admissions.png" width="120" height="120" className="mx-auto mb-4" alt="Admissions"></Image>
    <h2 className="text-2xl text-dblue mx-auto font-bold">Admissions</h2>
</div>
    </div>
  )
}