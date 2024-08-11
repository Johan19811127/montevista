
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Admission Policy</title>
        <meta name="description" content="A simple flipbook example in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <div className="container mx-auto flex my-5">
        <h1 className="text-2xl font-bold">MONTE VISTA PRIMARY SCHOOL - ADMISSION POLICY</h1>
       </div>
       
      </main>

      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
}
