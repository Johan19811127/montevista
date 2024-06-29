import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import AnimatedText from "@/components/Name";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
   
    
  return (
    <main>
           <div className="row hvh100">
           < div class="col-md-6">
          <img src="/heroboy.png" alt="Monte Vista primary School" className="heroimg"></img>
        </div>
        <div className="col-md-6">
<AnimatedText
        </div></div>
      <div className="container">
   
        <div className="row hvh100 ">
          <div className="col-md-5 d-flex flex-column align-items-center justify-content-center ">
            <img src="/60Badge.png" className="badge60" alt="In 2023 Monte Vista Primary School celebrated its 60th anniversary"></img>
      <h1 className="h1">Monte Vista </h1>
      <h2 className="h2 mb-4">Primary School</h2>
     
      </div>
      <div className="col-md-7 d-flex flex-column align-items-center justify-content-center ps-5 pe-3">

      <p className="bodytext">   Situated in the heart of Monte Vista, a bustling suburb in the Northern Suburbs of Cape Town, Monte Vista Primary School has stood as an educational cornerstone since its establishment in 1963. Serving students from Grade R to Grade 7, we employ state-of-the-art technology in our classrooms, adhering to the CAPS grading system prescribed by the Western Cape Education Department.  </p>
    <p className="bodytext">As parents embark on the exciting journey of choosing the right educational environment for their children, Monte Vista Primary School stands out as a beacon of excellence with a commitment to providing a nurturing and innovative learning experience. At the heart of this exceptional institution is the deliberate decision to keep classrooms smaller, ensuring individualized attention for each child. With an average class size ranging from 25 to 30 learners, Monte Vista Primary School creates an environment where every student can thrive.</p>
    <p className="bodytext">The integration of technology plays a pivotal role in shaping the modern learning landscape at Monte Vista. In every classroom, Clevertouch interactive touchscreen displays take center stage, offering more than just an interactive whiteboard. These state-of-the-art displays feature educational apps that empower teachers to enhance lessons, play engaging videos and music, and involve learners in a dynamic and interactive educational experience like never before.   
</p>
<p className="bodytext">In addition to academic achievements, we encourage our students to explore a diverse array of sports and cultural activities, nurturing holistic development. Furthermore, we offer aftercare services, providing essential support to working parents for the ongoing care of their children.</p>

<p className="bodytext">Our forward-thinking management team is committed to pioneering innovations in education, continually seeking enhanced methods to engage and inspire our learners. By integrating the latest technologies, we cultivate dynamic and pertinent learning experiences for our students.</p>
      </div>
      </div>
      </div>
      <div className="row colorsection">
         <div className="col-md-6  d-flex flex-column align-items-end justify-content-end ">
          <img src="/Girlpage1.png" className="childimg"></img>
         </div>
         <div className="col-md-6  d-flex flex-column align-items-center justify-content-center ">
         <h1 className="h1">Talk to us</h1>

         </div>
        </div>
    </main>
  );
}
