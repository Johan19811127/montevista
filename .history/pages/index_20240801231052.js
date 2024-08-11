import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/navbar";
import Hero from "@/components/herosection";
import Heroalt from "@/components/herosection/heroalt";
import Intro from "@/components/herosection/intro";
import Collage from "@/components/herosection/collage";
import HeroSection from "@/components/herosection/alt";
import Shortcuts from "@/components/herosection/shortcuts";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      
     <Header></Header>
     <HeroSection></HeroSection>
    
     <Intro></Intro>
     <Shortcuts></Shortcuts>
     <Contact
    </main>
  );
}
