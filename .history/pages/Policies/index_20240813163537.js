import Image from 'next/image'
import React from 'react'


export default function index() {
  return (
    <div className="w-full h-fit bg-gray-200 py-8">
    <div className="p-8 max-w-5xl mx-auto bg-white">


<div className="flex flex-col py-4">

<div className="container w-[80%]">

<div className="mx-auto flex flex-row rounded-2xl">
<div className='basis-1/3'>

<Image src='/AdmissionPolicy.png' width='300' height='300' alt='Admission Policy' className='W-full h-auto rounded-2xl'></Image></div>



<div className="basis-2/3 px-5">
<h2 className="text-3xl">Admission Policy</h2>
<p className="text- mt-6 font-semibold">The admission policy of Monte Vista Primary School is designed to ensure a fair and equitable enrollment process, aligned with South African legislation. The policy prioritizes applicants residing within the school's feeder areas, with specific criteria for Grade R progression, and considerations for late admissions and over-age learners. The policy emphasizes non-discrimination and requires proof of residence, academic readiness, and adherence to school rules. It also outlines responsibilities for parents, including the payment of school fees, and provides for an appeals process and annual policy review.</p>
</div>

</div>


</div>


</div>













        </div>

        </div>
  )
}
