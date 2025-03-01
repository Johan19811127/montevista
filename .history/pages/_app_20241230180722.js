import Layout from "@/components/layout";
import "@/styles/globals.css";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
 
 
 
 
 
  </Head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-MREYG435ZK"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-MREYG435ZK');
  </script>
  return <Layout><Component {...pageProps} /></Layout>;
}
