
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
        <h1 className="text-4xl font-bold text-center pb-3">MONTE VISTA PRIMARY SCHOOL - ADMISSION POLICY</h1>
        <h2 className="text-2xl font-bold "
       </div>
       
      </main>

      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
}
