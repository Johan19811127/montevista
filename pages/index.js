import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/navbar";
import Hero from "@/components/herosection";
import Heroalt from "@/components/herosection/heroalt";
import Intro from "@/components/herosection/intro";
import Collage from "@/components/herosection/collage";
import HeroSection from "@/components/herosection/alt";
import Shortcuts from "@/components/herosection/shortcuts";
import Contact from "@/components/herosection/contact";
import Beproud from "@/components/herosection/beproud";
import Parallax from "@/components/herosection/parallax";
import StaffList from "@/components/Stafflist";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
       <div className="flex flex-col md:max-w-[1200px] my-auto mx-auto">
    
     <HeroSection></HeroSection>
  
     <Intro></Intro>
    
     <Contact></Contact>
     <Beproud></Beproud>
     </div>
    </main>
  );
}
