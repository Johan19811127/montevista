import Flipbook from '@/components/flipbook/Book';
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="A simple flipbook example in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       
        <Flipbook />
      </main>

      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
}
