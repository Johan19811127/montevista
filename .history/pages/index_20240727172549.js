import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/navbar";
import Hero from "@/components/herosection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
     <Header></Header>
     <Hero
    </main>
  );
}
