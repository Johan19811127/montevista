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
import Sidebar from "../components/sidebar";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
       <div className="flex flex-col">
        <div className="md:basis-3/12">
    <Sidebar></Sidebar>
    </div>
    <div className="basis-9/12">
     <HeroSection></HeroSection>
  
     <Intro></Intro>
    
     <Contact></Contact>
     <Beproud></Beproud>
     </div>
     </div>
    
    </main>
  );
}
