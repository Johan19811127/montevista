import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="row hvh100">
          <img src="/heroimg/png" alt="Monte Vista primary School" className="heroimg"></img>
        </div>
        <div className="row hvh100">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img src="/60Badge.png" className="badge60" alt="In 2023 Monte Vista Primary School celebrated its 60th anniversary"></img>
      <h1 className="h1">Monte Vista </h1>
      <h2 className="h2 mb-4">Primary School</h2>
      <p>Located in the the Beutifull suburb ofg Monte Vista in Cape Town South Africa ,is a primary School which has been a important part of this community for more than 60 years</p>
      </div>
      </div>
      </div>
    </main>
  );
}
