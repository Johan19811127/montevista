
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Admission Policy</title>
        <meta name="description" content="A simple flipbook example in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
       <div className="container mx-auto align-center  my-5 lg:w-[80%] ">
        <h1 className="text-4xl font-bold text-center my-6">MONTE VISTA PRIMARY SCHOOL - ADMISSION POLICY</h1>
        <h2 className="text-xl font-bold my-6">INTRODUCTION AND BACKGROUND</h2>
        <p className="text-default ">This policy has been set up in accordance to the S.A School act No. 84 of 1996 Chapter 2 Section 5 paragraph 5 to ensure fair and equitable enrollment of learners into Monte Vista Primary School. The constitution of the Republic of South Africa with the above-mentioned documents are the guidelines in the setting of the policy, thus ensuring that equal opportunity is given to all who apply to the school.</p>
        <h2 className="text-xl font-bold my-6">DEFINITION OF TERMS</h2>
        <p className="text-default font-bold">Baseline Assessment Test:</p>
        <p className="text-default mb-5">A prescribed test that assesses the ability of the learner and allows for correct placement.</p>
        <p className="text-default font-bold">Exemption Document:</p>
        <p className="text-default mb-5">Document that needs to be completed in order to qualify for exemption of school fees.</p>
        <p className="text-default font-bold">Pre-Primary:</p>
        <p className="text-default mb-5">A Grade R (Reception) class that prepares the school readiness of a learner.</p>

        <h2 className="text-xl font-bold my-6">POLICY STATEMENTS</h2>
        <p className="text-default mb-5">The policy enables parents / legal guardians to enroll a learner into Monte Vista Primary School. This school prides itself on its historical background, its reflection of the Constitution of South Africa in all spheres and its ethos of learning, growth and discipline and mutual respect. This policy has been set up in consultation with all the role-payers that were present at the time. This policy is binding for the year and must be revised at the end of each academic year.</p>


        <h2 className="text-xl font-bold my-6">PURPOSE</h2>
        <p className="text-default mb-5">The policy enables parents / legal guardians to enroll a learner into Monte Vista Primary School. This school prides itself on its historical background, its reflection of the Constitution of South Africa in all spheres and its ethos of learning, growth and discipline and mutual respect. This policy has been set up in consultation with all the role-payers that were present at the time. This policy is binding for the year and must be revised at the end of each academic year.</p>









       </div>
       
      </main>

      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
}
