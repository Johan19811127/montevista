import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
Link

export default function index() {
  return (
    <div className="w-full h-fit bg-gray-200 py-8">
    <div className="p-8 max-w-5xl mx-auto">


<div className="flex flex-col py-4">
<Link href="/policies/admissionpolicy">
<div className="container bg-white p-4 rounded-2xl">

<div className="mx-auto flex flex-col md:flex-row rounded-2xl">
<div className=' basis-1/1 md:basis-1/3'>

<Image src='/AdmissionPolicy.png' width='300' height='300' alt='Admission Policy' className='W-full h-auto rounded-2xl max-w-[50vw] mx-auto'></Image></div>



<div className=" basis-1/1 md:basis-2/3 px-5">
<h2 className="text-3xl font-bold mt-5 text-center md:text-start">Admission Policy</h2>
<p className="text-default mt-2 leading-tight font-semibold text-justify text-slate-700">The admission policy of Monte Vista Primary School is designed to ensure a fair and equitable enrollment process, aligned with South African legislation. The policy prioritizes applicants residing within the school's feeder areas, with specific criteria for Grade R progression, and considerations for late admissions and over-age learners. The policy emphasizes non-discrimination and requires proof of residence, academic readiness, and adherence to school rules. It also outlines responsibilities for parents, including the payment of school fees, and provides for an appeals process and annual policy review.</p>
</div>

</div>


</div>
</Link>

</div>













        </div>

        </div>
  )
}
