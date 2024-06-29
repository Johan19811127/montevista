import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
           <div className="row hvh100">
          <img src="/heroimg.png" alt="Monte Vista primary School" className="heroimg"></img>
        </div>
      <div className="container">
   
        <div className="row hvh100 ">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-5 pe-">
            <img src="/60Badge.png" className="badge60" alt="In 2023 Monte Vista Primary School celebrated its 60th anniversary"></img>
      <h1 className="h1">Monte Vista </h1>
      <h2 className="h2 mb-4">Primary School</h2>
      <p className="bodytext">Located in the the Beutifull suburb ofg Monte Vista in Cape Town South Africa ,is a primary School which has been a important part of this community for more than 60 years</p>
      </div>
      <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-5">

    <p className="bodytext">As parents embark on the exciting journey of choosing the right educational environment for their children, Monte Vista Primary School stands out as a beacon of excellence with a commitment to providing a nurturing and innovative learning experience. At the heart of this exceptional institution is the deliberate decision to keep classrooms smaller, ensuring individualized attention for each child. With an average class size ranging from 25 to 30 learners, Monte Vista Primary School creates an environment where every student can thrive.</p>
    <p className="bodytext">The integration of technology plays a pivotal role in shaping the modern learning landscape at Monte Vista. In every classroom, Clevertouch interactive touchscreen displays take center stage, offering more than just an interactive whiteboard. These state-of-the-art displays feature educational apps that empower teachers to enhance lessons, play engaging videos and music, and involve learners in a dynamic and interactive educational experience like never before.   
</p>
      </div>
      </div>
      </div>
    </main>
  );
}
