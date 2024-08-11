import React from 'react'

export default function Uniform() {
  return (
    <div className="w-full h-fit bg-gray-200">
    <div className="p-8 max-w-4xl mx-auto bg-white">
        <div className="flex flex-row">

<div className="basis-1/4"><Image src="/School Badge - Own.png" width="180" height="180" alt="Monte Vista Primary School Badge" className="w-[80%] ml-[10%] "></Image></div>
<div className="basis-3/4  px-4">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold">Monte Vista Primary School</h1>
        <p className="text-2xl font-semibold">Code of Conduct for Learners</p>
        <address className="mt-2">
          Huisinglaan / Huising Avenue, Monte Vista, 7460 <br />
          Tel: 021 558 4637 | Fax: 021 558 715<br />
          Email: <a href="mailto:montevistaprimaryschool@gmail.com" className="text-blue-500">montevistaprimaryschool@gmail.com</a>
        </address>
        <a
      href="/admission_policy.pdf" // Path to the file in the public directory
      download="Admission_Policy.pdf" // The name of the file that will be downloaded
      className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg  my-3 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Download a copy of the Code of Conduct
    </a>
      </header>
      </div></div>
      <hr className="divide-solid mt-3 mb-9 divide-slate-800 opacity-80"></hr>

      </div>
      <
  )
}
