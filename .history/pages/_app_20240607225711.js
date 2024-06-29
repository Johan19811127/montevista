import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

 
export default function MyApp({ Component, pageProps }) {

 
  return (

   
      <Component {...pageProps} />

  )
}

