import React from 'react'
import Image from 'next/image'

export default function Shortcuts() {
  return (
    <div class="grid grid-cols-2 md:grid-col-3  lg:grid-cols-4 justify-items-center align-content-center gap-4 min-h-screen md:container m-4 p-5">
<div className="card flex flex-col p-4 rounded-xl shadow-xl border-2 border-slate-200 align-self-normal ">

    <Image src="/Admissions.png" width="200" height="200" className="mx-auto mb-4" alt="Admissions"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-4 text-center">Admissions</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-5">All the information parents would need if they wish to enroll their child at Monte Vista Primary School</p>
</div>

<div className="card flex flex-col p-4 rounded-xl shadow-xl  border-2 border-slate-200 self-normal">

    <Image src="/meet the team.png" width="200" height="200" className="mx-auto mb-4 " alt="Meet the team"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-4 text-center">Meet the Team</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-5">Meet our dynamic team of dedicated educators and support staff at Monte Vista Primary School.</p>
</div>

<div className="card flex flex-col p-4 rounded-xl shadow-xl border-2 border-slate-200 self-normal">

    <Image src="/Axademic.png" width="200" height="200" className="mx-auto mb-4 " alt="Academic Services"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-4 text-center">Academic Services</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-5">Explore our comprehensive academic services offered by Monte Vista Primary School.</p>
</div>

<div className="card flex flex-col p-4 rounded-xl shadow-xl  border-2 border-slate-200 self-normal">

    <Image src="/sports.png" width="200" height="200" className="mx-auto mb-4 " alt="Extra Curricular"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-4 text-center">Extra Curricular</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-5">Discover the exciting array of extracurricular activities on offer at Monte Vista Primary School,</p>
</div>

<div className="card flex flex-col p-4 rounded-xl shadow-xl  border-2 border-slate-200 self-normal">

    <Image src="/uniform.png" width="200" height="200" className="mx-auto mb-4 opacity-75" alt="Meet the team"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-4 text-center">School Uniform</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-5">Discover the smart and comfortable school uniform of Monte Vista Primary School.</p>
</div>
<div className="card flex flex-col p-4 rounded-xl shadow-xl  border-2 border-slate-200 self-normal">

    <Image src="/policies.png" width="200" height="200" className="mx-auto mb-4 " alt="policies"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-4 text-center">Policies</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-5">Navigate our comprehensive list of policies at Monte Vista Primary School.</p>
</div>

<div className="card flex flex-col p-4 rounded-xl shadow-xl  border-2 border-slate-200 self-normal">

    <Image src="/contact.png" width="200" height="200" className="mx-auto mb-4 " alt="Contact us"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-4 text-center">Contact Us</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-5">Reach out to Monte Vista Primary School, we we are always ready to assist with your inquiries..</p>
</div>

<div className="card flex flex-col p-4 rounded-xl shadow-xl  border-2 border-slate-200 self-normal">

    <Image src="/store.png" width="200" height="200" className="mx-auto mb-4 " alt="Contact us"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-4 text-center">Contact Us</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-5">Reach out to Monte Vista Primary School, we we are always ready to assist with your inquiries..</p>
</div>

    </div>
  )
}
