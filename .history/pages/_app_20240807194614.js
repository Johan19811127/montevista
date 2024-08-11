import Layout from "@/components/layout";
import "@/styles/globals.css";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </Head>
  return <Layout></Layout><Component {...pageProps} />;
}