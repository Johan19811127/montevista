import React from 'react'
import Image from 'next/image'

export default function Shortcuts() {
  return (
    <div className="p-3 flex flex-col min-h-screen w-100 lg:w-[80%] lg:px-8 mx-auto">
      
        <h1 className="text-2xl font-bold tracking-tight text-dblue lg:text-6xl mb-5 text-center">Quick Links</h1>
    
        <p className="text-lg text-dblue text-center leading-tight  font-md text-justify"> Our site is designed with user convenience in mind, offering quick and easy access to popular information you might need. Use the navigation links to explore various sections, including Academics,Extracurricular Activities, Our Fees or Admissions. </p>
        <p className="text-lg text-dblue text-center leading-tight  font-md mt-5 mb-5 text-justify "> Whether you are looking for detailed information on our curriculum, interested in enrolling your child, or seeking the latest school news and events, these links will guide you directly to your destination. Navigate effortlessly and discover what makes Monte Vista Primary School a nurturing and dynamic environment for young learners.</p>
      
        
       
           
    
        
       
    <div class="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 justify-items-center align-content-center gap-4  md:container md:m-4 md:p-5 px-2">
<div className="card flex flex-col p-4 rounded-xl shadow-xl border-2 border-slate-200 bg-white-900 align-self-normal ">

    <Image src="/Admissions.png" width="140" height="140" className="mx-auto mb-2" alt="Admissions"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-2 text-center">Admissions</h2>
    <p className="text-normal text-dblue text-center leading-tight text-md m-3">All the information parents would need if they wish to enroll their child at Monte Vista Primary School</p>
</div>

<div className="card flex flex-col p-4 rounded-xl shadow-xl  border-2 border-slate-200 self-normal">

    <Image src="/meet the team.png" width="140" height="140" className="mx-auto mb-4 " alt="Meet the team"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-2 text-center">Meet the Team</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-3">Meet our dynamic team of dedicated educators and support staff at Monte Vista Primary School.</p>
</div>

<div className="card flex flex-col p-4 rounded-xl shadow-xl border-2 border-slate-200 self-normal">

    <Image src="/Axademic.png" width="140" height="140" className="mx-auto mb-2 " alt="Academic Services"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-2 text-center">Academic Services</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-3">Explore our comprehensive academic services offered by Monte Vista Primary School.</p>
</div>

<div className="card flex flex-col p-4 rounded-xl shadow-xl  border-2 border-slate-200 self-normal">

    <Image src="/sports.png"width="140" height="140" className="mx-auto mb-2 " alt="Extra Curricular"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-2 text-center">Extra Curricular</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-3">Discover the exciting array of extracurricular activities on offer at Monte Vista Primary School,</p>
</div>

<div className="card flex flex-col p-4 rounded-xl shadow-xl  border-2 border-slate-200 self-normal">

    <Image src="/uniform.png" width="140" height="140" className="mx-auto mb-2 " alt="Meet the team"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-2 text-center">School Uniform</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-3">Discover the smart and comfortable school uniform of Monte Vista Primary School.</p>
</div>
<div className="card flex flex-col p-4 rounded-xl shadow-xl  border-2 border-slate-200 self-normal">

    <Image src="/policies.png" width="140" height="140" className="mx-auto mb-2 " alt="policies"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-2 text-center">Policies</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-3">Navigate our comprehensive list of policies at Monte Vista Primary School.</p>
</div>

<div className="card flex flex-col p-4 rounded-xl shadow-xl  border-2 border-slate-200 self-normal">

    <Image src="/contact.png"width="140" height="140" className="mx-auto mb-2 " alt="Contact us"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-2 text-center">Contact Us</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-33">Reach out to Monte Vista Primary School, we we are always ready to assist with your inquiries..</p>
</div>

<div className="card flex flex-col p-4 rounded-xl shadow-xl  border-2 border-slate-200 self-normal">

    <Image src="/store.png" width="140" height="140" className="mx-auto mb-2 " alt="Onlinee Store"></Image>
    <h2 className="text-xl text-dblue mx-auto font-bold mb-2 text-center">Online Store</h2>
    <p className="text-default text-dblue text-center leading-tight text-md m-3">Reach out to Monte Vista Primary School, we we are always ready to assist with your inquiries..</p>
</div>
</div>
</div>
 
  )
}
