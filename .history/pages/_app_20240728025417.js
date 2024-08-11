import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {'
 return(
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </Head>
 <meta name="viewport" content="width=device-width, initial-scale=1.0"> <Component {...pageProps} />;
}