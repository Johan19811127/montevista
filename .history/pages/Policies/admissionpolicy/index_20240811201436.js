
import Head from 'next/head';
import Image from 'next/image';
import { GiRotaryPhone } from "react-icons/gi";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Admission Policy</title>
        <meta name="description" content="A simple flipbook example in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 md:h-screen md:sticky md:top-0 lg:w-1/5 md:bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row">


<div className="md:container mx-auto pb-3 mb-3 ">
  <h1 className=" text-xl font-bold text-center ">Monte Vista Primary School </h1>
  <h1 className=" text-4xl  font-bold text-center mb:4 ">Admission Policy</h1>
  <a
href="/AdmissionPolicy.pdf" // Path to the file in the public directory
download="AdmissionPolicy.pdf" // The name of the file that will be downloaded
className="flex px-auto align-center justify-center py-3 text-slate-900  font-bold border border-b-slate-300 border-t-slate-100 border-l-slate-100 hover:border-none border-r-slate-300 border-t text-center bg-yellow-400 rounded-lg mx-auto my-3 shadow-md hover:bg-yellow-300 hover:shadow-none focus:outline-none focus:ring-1 focus:ring-yellow-500"
>
Download the Admission Policy
</a>
</div>
</div>


 
<div className="container mx-auto md:px-5">
        <h2 className="text-xl font-bold text-center mt-5">Table of Contents</h2>
        <p className="text-sm mb-5 text-center">Click on the links below to jump to the corresponding section .</p>
        <ul className="space-y-1">
          <li className="text-default text-justify"><a href="#intro" className="text-slate-800 font-semibold hover:underline">1. Introduction and Background</a></li>
          <li className="text-default text-justify"><a href="#definition" className="text-slate-800 font-semibold hover:underline">2. Definition of Terms</a></li>
          <li className="text-default text-justify"><a href="#policy" className="text-slate-800 font-semibold hover:underline">3.Policy Statements</a></li>
          <li className="text-default text-justify"><a href="#purpose" className="text-slate-800 font-semibold hover:underline">4. Purpose</a></li>
          <li className="text-default text-justify"><a href="#scope" className="text-slate-800 font-semibold hover:underline">E. Scope of Application</a></li>
          <li className="text-default text-justify"><a href="#objectives" className="text-slate-800 font-semibold hover:underline">F. Objectives</a></li>
          <li className="text-default text-justify"><a href="#legislative" className="text-slate-800 font-semibold hover:underline">G. Legislative Framework</a></li>
          <li className="text-default text-justify"><a href="#provisions" className="text-slate-800 font-semibold hover:underline">H. Policy Provisions”</a></li>
          <li className="text-default text-justify"><a href="#roles" className="text-slate-800 font-semibold hover:underline">I. Roles and Responsibilities</a></li>
          <li className="text-default text-justify"><a href="#breach" className="text-slate-800 font-semibold hover:underline">J. Breach of Policy</a></li>
          <li className="text-default text-justify"><a href="#dresolution" className="text-slate-800 font-semibold hover:underline">K. Dispute Resolution</a></li>
          <li className="text-default text-justify"><a href="#review" className="text-slate-800 font-semibold hover:underline">L. Review of Policy</a></li>
          <li className="text-default text-justify"><a href="#addA" className="text-slate-800 font-semibold hover:underline">Addendum A</a></li>
        
        </ul>
      </div>
      </div>
      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
      <main className="flex">


<div className="max-w-5xl mx-auto p-6 bg-white  rounded-lg">
<div className="flex flex-col md:flex-row">
<div className="hidden md:flex">
<div className=" w-1/1 md:w-1/4"><Image src="/Badge.png" width="180" height="180" alt="Monte Vista Primary School Badge" className=" mx-auto max-w-[30vw] w-[80%]  "></Image></div>
<div className=" w-1//1 md:w-3/4  px-4">
<div className="md:container md:ml-8 md:mx-auto">
  <h1 className=" text-2xl md:text-3xl font-bold text-left ">Monte Vista Primary School </h1>
  <h1 className=" text-2xl md:text-4xl font-bold text-left mb:4 ">Admission Policy</h1>

<address className="text-start">
  <b className="font-bold mr-3">A:</b>
   Huising Avenue, Monte Vista 7460    </address>
    <a href="tel:+27215584637" className="text-center" ><b className="font-bold mr-3 text-center">T:</b>021 558 4637</a><br></br>
   
  <a href="mailto:montevistaprimaryschool@gmail.com" className="text-center"><b className="font-bold mr-3 text-center">E:</b>montevistaprimaryschool@gmail.com</a><br></br>
  <a
href="/SchoolRules.pdf" // Path to the file in the public directory
download="SchoolRules.pdf" // The name of the file that will be downloaded
className="flex px-auto align-center justify-center py-3 text-slate-900  font-bold border border-b-slate-300 border-t-slate-100 border-l-slate-100 hover:border-none border-r-slate-300 border-t text-center bg-yellow-400 rounded-lg mx-auto my-3 shadow-md hover:bg-yellow-300 hover:shadow-none focus:outline-none focus:ring-1 focus:ring-yellow-500"
>
Download the School Rules
</a>
  </div>
</div>
  
  </div>
  </div>

<hr className="divide-solid mt-3 mb-9 divide-slate-800"></hr>
      
   
   
      <section>
        <h2 className="text-2xl font-semibold mb-2" id="intro">1. Introduction and Background</h2>
        <p className="mb-4">
          This policy has been set up in accordance with the S.A School act No. 84 of 1996 Chapter 2 Section 5 paragraph 5 to ensure fair and equitable enrollment of learners into Monte Vista Primary School. The constitution of the Republic of South Africa with the above-mentioned documents are the guidelines in the setting of the policy, thus ensuring that equal opportunity is given to all who apply to the school.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2" id="defination">2. Definition of Terms</h2>
        <p className="mb-4">
          <strong>Baseline Assessment Test:</strong> A prescribed test that assesses the ability of the learner and allows for correct placement.
        </p>
        <p className="mb-4">
          <strong>Exemption Document:</strong> Document that needs to be completed in order to qualify for exemption of school fees.
        </p>
        <p className="mb-4">
          <strong>Pre-Primary:</strong> A Grade R (Reception) class that prepares the school readiness of a learner.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2" id="policy">3. Policy Statements</h2>
        <p className="mb-4">
          The policy enables parents/legal guardians to enroll a learner into Monte Vista Primary School. This school prides itself on its historical background, its reflection of the Constitution of South Africa in all spheres, and its ethos of learning, growth, discipline, and mutual respect. This policy has been set up in consultation with all the role-payers that were present at the time. This policy is binding for the year and must be revised at the end of each academic year.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2" id="purpose">4. Purpose</h2>
        <p className="mb-4">
          This policy aims to ensure the enrollment of learners without discrimination who will benefit educationally from being taught in English and Afrikaans.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2" id="scope">5. Scope of Application</h2>
        <p className="mb-4">
          This policy impacts on and applies to all parents and learners who wish to attend Monte Vista Primary School.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2" id="objectives">6. Objectives</h2>
        <p className="mb-4">
          The objective of this policy is to allow for the enrollment of learners into the school who are capable of speaking and understanding and/or reading and writing the languages of instruction, English and Afrikaans, of the school.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2" id="legislative">7. Legislative Framework</h2>
        <p className="mb-4">
          This admission policy must be read in conjunction with:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>The Constitution of the Republic of South Africa</li>
          <li>The SA Schools Act of 1996</li>
          <li>The Provincial Gazette Extraordinary #5136 of 16 May 1997</li>
          <li>The Provincial Gazette Extraordinary #5212 of 9 December 1997</li>
          <li>The Government Gazette #18480</li>
          <li>Circular 26/2010</li>
          <li>The Monte Vista Primary School Constitution</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2" id="provisions">8. Policy Provisions</h2>
        <div className="mb-4">
          <p className="mb-2">1. Learners may be enrolled at 5 years turning 6 by 30 June into grade one. Preference will be given to learners who turn 7 during their Grade 1 year. The learner’s age should not exceed his Grade plus 6 for admission.</p>
          <p className="mb-2">2. Our class structure is as follows:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Grade R: 4 English classes with 25 learners each</li>
            <li>Gr 1, 2 and 3: 4 English classes with 30 learners each</li>
            <li>Gr 4: 4 English classes with 35 learners each</li>
            <li>Gr 5 - 7: 3 English classes and 1 Afrikaans class with 35 learners each</li>
          </ul>
          <p className="mb-2">Afrikaans will only be offered in Gr 6 and 7 for 2023.</p>
          <p className="mb-2">
            Monte Vista Primary School makes provision for learners repeating a grade. We also reserve the right to keep up to 3 spaces available for late admissions received in the event that parents relocate into the direct or secondary feeder areas of the school after the closing of admissions.
          </p>
          {/* Continue adding the rest of the sections here following the same structure */}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2" id="roles">9. Roles and Responsibilities</h2>
        <p className="mb-4">
          It is the Administrative staff of the school, under the authority of the Governing Body of the school, who will ensure the effective and fair implementation of this policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2" id="breach">10. Breach of Policy</h2>
        <p className="mb-4">
          Should the policy be breached in any way or should it not be implemented correctly the Governing Body of Monte Vista Primary School will take the matter for legal counselling.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2"id="dresolution">11. Dispute Resolution</h2>
        <p className="mb-4">
          Parents who do not agree with aspects of the policy have the right to appeal in writing to the Governing Body of Monte Vista Primary School. It is expected that the Governing Body will respond in writing to a written appeal within one month as the Governing Body traditionally only meets once or twice a term.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2" id="review">12. Review of Policy</h2>
        <p className="mb-4">
          This policy must be reviewed once a year by the Governing Body of the school who represents all the role-players of the school. During review, the impact of the policy on the enrolments of the school must be considered and adjusted to eradicate any possible negative effects it has led to.
        </p>
      </section>

     

      <section>
        <h2 className="text-2xl font-semibold mb-2" id="addA">Addendum A</h2>
        <h3 className="text-xl font-semibold mb-2">Primary Admission Criteria</h3>
        <p className="mb-4">
          The applicant learner can be admitted to the school if the following criteria are fulfilled:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>The applicant learner resides in the direct feeder area as determined in point 5 of the Admission Policy of the school.</li>
          <ul className="list-disc ml-6 mb-4">
            <li>The applicant learner lives with his/her parent/s or legal guardians who is the owner of the property.</li>
            <li>The applicant learner lives with his/her parent/s or legal guardians who lease the property.</li>
          </ul>
          <li>Applicant learners who are already admitted to the Monte Vista Primary School Grade R do not need to reapply as they will progress to grade 1 if they meet the academic criteria.</li>
          <li>The parent may not travel past another public school on his/her way to Monte Vista Primary School.</li>
          <li>The applicant learner has a sibling in the school that will be at Monte Vista Primary School for the admission year applied for.</li>
          <li>The parent of the applicant is employed by the WCED or SGB and a staff member of Monte Vista Primary School.</li>
        </ul>
        <p className="mb-4">The above criteria are subject to the School having capacity to accommodate the applicant learner.</p>

        <h3 className="text-xl font-semibold mb-2">Secondary Admission Criteria</h3>
        <p className="mb-4">
          In the event of the maximum capacity allowing for additional enrolments and the applicant learner not fulfilling the Primary Admission Criteria as set out in Addendum A, the following criteria shall be applied:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>The applicant learner resides in the secondary feeder area of the school as determined in point 5 of the Admission Policy.</li>
          <ul className="list-disc ml-6 mb-4">
            <li>The applicant learner lives with his/her parent/s or legal guardians who is the owner of the property.</li>
            <li>The applicant learner lives with his/her parent/s or legal guardians who lease the property.</li>
          </ul>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Non-South African Citizens / Foreign Nationals</h3>
        <p className="mb-4">
          Only biological children of Non-South African citizens / Foreign Nationals will be considered for enrolment, subject to the relevant legal documentation being in order and their biological parents residing in South Africa. Admission subject to Primary and Secondary Criteria as set out in Addendum A.
        </p>
      </section>

</div>



       
      </main>
</div>
</div>
</div>
  
  );
}