import Head from 'next/head';
Fl

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flipbook Example</title>
        <meta name="description" content="A simple flipbook example in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Flipbook</h1>
        <Flipbook />
      </main>

      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
}
