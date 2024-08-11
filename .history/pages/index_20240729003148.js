import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/navbar";
import Hero from "@/components/herosection";
import Heroalt from "@/components/herosection/heroalt";
import Intro from "@/components/herosection/intro";
import Collage from "@/components/herosection/collage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      
     <Header></Header>
     <Collage
     <Heroalt></Heroalt>
     <Intro></Intro>
    </main>
  );
}
