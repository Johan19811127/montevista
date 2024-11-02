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
    <div className="flex">
    <Sidebar />
    <main className="flex-1 md:ml-72 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">Welcome to Monte Vista Primary School</h1>
      <p>Explore our site using the menu.</p>
    </main>
  </div>

  );
}
