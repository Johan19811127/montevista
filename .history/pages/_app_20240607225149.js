import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

 
export default function MyApp({ Component, pageProps }) {

  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (

   
      <Component {...pageProps} />

  )
}

