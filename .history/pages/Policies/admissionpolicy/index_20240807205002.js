
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
        <h2 className="text-xl font-bold my-3">DEFINITION OF TERMS</h2>
        <p className="text-default font-bold"></p>
       
       
       
       </div>
       
      </main>

      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
}
